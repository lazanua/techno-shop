import { FC, useState } from "react";
import "./index.css";

import Tab2 from "../../components/PurchaseTabs/Tab2";
import Tab3 from "../../components/PurchaseTabs/Tab3";

import { cities } from "../../data/cities";
import { BasketsProduct } from "../../data/products";
import arrowDown from "../../assets/img/product-page/arrow-down-grey.svg";
import completeIcon from "../../assets/img/pages/purchase/complete-icon.svg";
import googlePayIcon from "../../assets/img/pages/purchase/google-pay-icon.svg";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import Basket from "../../components/Modals/Basket/Basket";
import MapComponent from "../../components/MapComponent/MapComponent";
import marker from "../../assets/img/pages/purchase/marker.svg";
import editIcon from "../../assets/img/pages/purchase/edit-icon.svg";
interface PurchaseProps {
  usersProduct: BasketsProduct[];
  changeCount: [
    addProduct: (id: number) => void,
    removeProduct: (id: number) => void,
    deleteProduct: (id: number) => void,
    handleChangeProduct: (id: number, value: string) => void
  ];
}

const PurchasePage: FC<PurchaseProps> = ({ usersProduct, changeCount }) => {
  const [userContact, setUserContact] = useState([
    { placeholder: "Ім'я", value: "" },
    { placeholder: "Email", value: "" },
    { placeholder: "Прізвище", value: "" },
    { placeholder: "Номер телефону", value: "" },
  ]);
  const recipientContact = [
    { placeholder: "Ім'я", value: "" },
    { placeholder: "По-батькові", value: "" },
    { placeholder: "Прізвище", value: "" },
    { placeholder: "Номер телефону", value: "" },
  ];
  const [isAnotherRecipient, setIsAnotherRecipient] = useState<boolean>(false);
  const [tab, setTab] = useState<number>(-1);
  const [isCitiesOpen, setIsSitiesOpen] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [currentCity, setCurrentCity] = useState<string>(cities[0]);
  const [foundCities, setFoundCities] = useState<string[]>(cities);
  const [showModal, setShowModal] = useState<boolean>(false);

  const filteredProducts = usersProduct.filter((item) => item.count > 0);
  const totalPrice = filteredProducts.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );
  const totalCount = filteredProducts.reduce(
    (sum, item) => sum + item.count,
    0
  );

  const addDays = (days: number): string => {
    //дата через кілька днів від сьогодняшньої
    const result = new Date();
    result.setDate(result.getDate() + days);

    const day = String(result.getDate()).padStart(2, "0");
    const month = String(result.getMonth() + 1).padStart(2, "0");

    return `${day}.${month}`;
  };

  const handleCityChange = (value: string) => {
    setCurrentCity(value);
    const filteredCities = cities.filter((city) =>
      city.toLowerCase().includes(value.toLowerCase())
    );
    setFoundCities(filteredCities);
    setIsSitiesOpen(true);
  };

  const [options, setOptions] = useState([
    {
      option: "Самовивіз із магазину",
      info: "Адрес:  г. Днепр, Европейская, 8, Пн-Пт 9:00-19:00 б-Вс: с 9:00-16:00",
      price: "Безкоштовно",
      selected: false,
    },
    {
      option: "Доставка кур'єром",
      info: "Доставимо завтра ",
      price: "від 150грн.",
      selected: false,
    },
    {
      option: "Доставка Новою Поштою",
      info: "Доставимо " + addDays(2),
      price: "За тарифами перевізника",
      selected: false,
    },
    {
      option: "Доставка Укрпоштою",
      info: "Доставимо " + addDays(5),
      price: "За тарифами перевізника",
      selected: false,
    },
    {
      option: "Доставка Justin",
      info: "Доставимо " + addDays(2),
      price: "За тарифами перевізника",
      selected: false,
    },
  ]);
  const [paymentType, setPaymentType] = useState([
    { option: "Готівкою при отриманні", selected: false },
    { option: "Оплата картою", selected: false },
    { option: "Безготівковий розрахунок", selected: false },
  ]);
  const [subPaymentType, setSubPaymentType] = useState([
    { option: "Фізична особа", selected: false },
    { option: "Юридична особа", selected: false },
  ]);

  const handleChange = (index: number) => {
    setOptions((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, selected: true } : { ...item, selected: false }
      )
    );
    setTab(index);
  };
  const completeOrder = () => {
    setIsCompleted(true);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="container">
        {!isCompleted && (
          <div className="pt-[48px] pb-[24px] text-[12px] text leading-[1.33] text-[var(--gray-scale---60)]">
            <h4 className="text-[24px] md:text-[32px] text-semibold text-[--dark-grey] mb-[24px]">
              Оформлення замовлення
            </h4>
            <div className="flex xl:flex-row flex-col gap-[16px]">
              <div className="flex-col gap-[24px] max-w-full xl:w-[1016px]">
                <div className="">
                  <div className="subsubtitle mb-[19px]">Ваше замовлення</div>
                  <div
                    className=""
                    style={{ borderTop: "1px solid var(--gray-scale---10)" }}
                  >
                    {filteredProducts.map((product) => (
                      <div
                        className="flex flex-col md:flex-row items-start md:justify-between md:items-center p-[12px]"
                        style={{
                          borderBottom: "1px solid var(--gray-scale---10)",
                        }}
                      >
                        <div className="flex w-full justify-between md:contents">
                          <div className="flex md:justify-start gap-[12px] xl:gap-[30px] items-center w-full md:w-[484px]">
                            <img
                              src={product.img}
                              className="w-[70px] h-[70px] object-contain"
                              alt=""
                            />
                            <p className="max-w-[210px] sm:max-w-fit">
                              {product.title}
                            </p>
                          </div>
                          <button
                            className="block md:hidden"
                            onClick={() => setShowModal(true)}
                          >
                            <img src={editIcon} alt="" />
                          </button>
                        </div>

                        <div className="flex md:contents mt-[8px] pl-[82px] justify-between w-full">
                          <div className="text-center">
                            <p className="mb-[12px]">Кількість</p>
                            <p className="text-400 text-[var(--dark-grey)] text-[14px]">
                              {product.count}
                            </p>
                          </div>
                          <div className="flex flex-col items-center w-[100px]">
                            <p>Ціна</p>
                            {product.discountedPrice && (
                              <div className="mt-[15px]">
                                <p className="text-900 text-[var(--gray-scale---40)] text-[10px] line-through ">
                                  {product.price} грн.
                                </p>
                                <div className="ml-[12px]">
                                  <p
                                    className="text-p-grey"
                                    style={{ color: "var(--accenty---red)" }}
                                  >
                                    {product.discountedPrice}
                                    <span style={{ fontSize: "8px" }}>
                                      грн.
                                    </span>
                                  </p>
                                </div>
                              </div>
                            )}
                            {!product.discountedPrice && (
                              <p className="text-400 text-[var(--dark-grey)] text-[14px] mt-[12px]">
                                {product.price}

                                <span className="ml-[2px] text text-[8px]">
                                  грн.
                                </span>
                              </p>
                            )}
                          </div>
                          <div className="text-center">
                            <p>Сума</p>
                            <p className="text-400 text-[var(--dark-grey)] text-[14px] mt-[12px]">
                              {product.price * product.count}

                              <span className="ml-[2px] text text-[8px]">
                                грн.
                              </span>
                            </p>
                          </div>
                          <button
                            className="link hidden md:block"
                            onClick={() => setShowModal(true)}
                          >
                            <img
                              src={editIcon}
                              className="hidden md:block xl:hidden"
                              alt=""
                            />
                            <span className="hidden xl:block ml-[12px]">
                              Редагувати
                            </span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-[24px]">
                  <div className="subsubtitle mb-[19px]">
                    Ваші контактні дані
                  </div>
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-[16px]">
                    {userContact.map((item, index) => (
                      <input
                        type="text"
                        className=" py-[13px] px-[8px] max-w-full"
                        placeholder={item.placeholder}
                        value={userContact[index].value}
                        onChange={(e) =>
                          setUserContact((prevItems) =>
                            prevItems.map((item, i) =>
                              i === index
                                ? { ...item, value: e.target.value }
                                : item
                            )
                          )
                        }
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-[16px]">
                  <div className="subsubtitle">Спосіб доставки</div>
                  <div
                    className="relative my-[12px] max-w-[500px] "
                    onMouseLeave={() => setIsSitiesOpen(false)}
                    onClick={() => setIsSitiesOpen((prev) => !prev)}
                  >
                    <div
                      className={`flex border rounded-[4px] justify-between`}
                    >
                      <input
                        type="text"
                        placeholder="Ваше місто"
                        className="border-none paddings"
                        value={currentCity}
                        onChange={(e) => handleCityChange(e.target.value)}
                      />
                      <button>
                        <img src={arrowDown} alt="" className="pr-[8px]" />
                      </button>
                    </div>
                    {isCitiesOpen && (
                      <div className="absolute  border text-[--dark-grey] bg-white w-[100%] z-10 flex flex-col items-start max-h-[126px] overflow-auto">
                        {foundCities.map((city) => (
                          <div className="context w-[100%]">
                            <button
                              className={`paddings hover:bg-[--gray-scale---10] w-[100%] text-left
                              ${
                                currentCity === city
                                  ? "bg-[var(--gray-scale---10])"
                                  : "hover:bg-[var(--gray-scale---10])"
                              }
                              `}
                              onClick={() => setCurrentCity(city)}
                            >
                              {city}
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="flex flex-col items-start gap-[12px] z-10">
                      {options.map((option, index) => (
                        <div
                          className={`${
                            options[index].selected === true
                              ? "purshase__block--active p-[16px] rounded-[4px]"
                              : "p-[17px]"
                          }`}
                        >
                          <div
                            className={`flex justify-between w-[490px] rounded-[4px] `}
                            key={index}
                          >
                            <div className="flex gap-[8px]">
                              <label className="custom-checkbox ">
                                <input
                                  type="checkbox"
                                  checked={options[index].selected}
                                  onChange={() => handleChange(index)}
                                  className="checkbox-input"
                                />
                                <span className="checkmark"></span>
                              </label>
                              <div className="text-[12px] leading-[1.33]">
                                <div className="mb-[8px] purchase__subtitle">
                                  {option.option}
                                </div>
                                <div className="text text-[var(--gray-scale---60)] max-w-[285px]">
                                  {!options[0].selected && <>{option.info}</>}
                                  {options[0].selected && index === 0 && (
                                    <>Забери сьогодні</>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`text text-[12px] leading-[1.33]  ${
                                index === 0
                                  ? "text-[var(--action---primary)]"
                                  : "text-[var(--dark)]"
                              }`}
                            >
                              {option.price}
                            </div>
                          </div>
                          {tab === 0 && index === 0 && (
                            <div className="mt-[12px] pl-[32px]">
                              <p className="mb-[8px] text-[var(--dark-grey)]">
                                Магазин знаходиться за адресою м. Дніпро, вул.
                                Європейська, 8
                              </p>
                              <MapComponent
                                height={146}
                                img={marker}
                                iconHeight={30}
                                iconWidth={20}
                              />
                            </div>
                          )}

                          {tab === 1 && index === 1 && (
                            <div className="mt-[12px] ml-[32px]">
                              <Tab2 />
                            </div>
                          )}
                          {tab === 2 && index === 2 && (
                            <div className="mt-[12px] ml-[32px]">
                              <Tab3 office="Нової Пошти" />
                            </div>
                          )}
                          {tab === 3 && index === 3 && (
                            <div className="mt-[12px] ml-[32px]">
                              <Tab3 office="Укр Пошти" />
                            </div>
                          )}
                          {tab === 4 && index === 4 && (
                            <div className="mt-[12px] ml-[32px]">
                              <Tab3 office="Justin" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-[4px] items-center mt-[24px]">
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      className="toggle-input"
                      checked={isAnotherRecipient}
                      onChange={(e) => setIsAnotherRecipient(e.target.checked)}
                    />
                    <span className="slider"></span>
                  </label>
                  <div className="">Отримую не я</div>
                </div>

                {isAnotherRecipient && (
                  <div className="mt-[16px]">
                    <div className="subsubtitle">Контактні дані отримувача</div>
                    <div className="grid grid-cols-2 gap-[16px]">
                      {recipientContact.map((item) => (
                        <input
                          type="text"
                          className="py-[13px] px-[8px]"
                          placeholder={item.placeholder}
                        />
                      ))}
                    </div>
                  </div>
                )}
                <div className="mt-[16px]">
                  <div className="subsubtitle">Спосіб оплати</div>
                  <div className="flex flex-col gap-[16px]">
                    {paymentType.map((option, index) => (
                      <div
                        className={`max-w-[500px] ${
                          paymentType[index].selected
                            ? "purshase__block--active p-[15px]"
                            : "p-[16px]"
                        }`}
                        key={index}
                      >
                        <div className="flex gap-[8px]">
                          <label className="custom-checkbox">
                            <input
                              type="checkbox"
                              checked={paymentType[index].selected}
                              onChange={() =>
                                setPaymentType((prevItems) =>
                                  prevItems.map((item, i) =>
                                    i === index
                                      ? { ...item, selected: true }
                                      : { ...item, selected: false }
                                  )
                                )
                              }
                              className="checkbox-input"
                            />
                            <span className="checkmark"></span>
                            <span className="ml-[12px] purchase__subtitle">
                              {option.option}
                            </span>
                          </label>
                        </div>
                        {index === 1 && paymentType[1].selected && (
                          <div className="flex flex-col gap-[12px] mt-[14px] pl-[32px]">
                            <button className="flex items-center justify-center gap-[8px] py-[12.5px] bg-[var(--gray-scale---100)] w-[436px] rounded-[4px]">
                              <span className="text-bold text-[var(--soft)] text-[12px]">
                                Оплатити через Google Pay
                              </span>
                              <img src={googlePayIcon} alt="" />
                            </button>
                            <div className="flex items-center gap-[10px]">
                              <div className="bg-[var(--gray-scale---20)] h-[0.5px] w-[100%]"></div>
                              <p className="text text-[12px] text-[var(--gray-scale---20)]">
                                або
                              </p>
                              <div className="bg-[var(--gray-scale---20)] h-[0.5px] w-[100%]"></div>
                            </div>
                            <div className="purchase__subtitle">Дані карти</div>
                            <input
                              type="text"
                              placeholder="Номер карти"
                              className="border paddings"
                            />
                            <div className="flex gap-[8px]">
                              <input
                                type="text"
                                className="border paddings max-w-[140px]"
                                placeholder="ММ"
                              />
                              <input
                                type="text"
                                className="border paddings max-w-[140px]"
                                placeholder="ГГ"
                              />
                              <input
                                type="text"
                                className="border paddings max-w-[140px]"
                                placeholder="CVV"
                              />
                            </div>
                          </div>
                        )}
                        {index === 2 && paymentType[2].selected && (
                          <div className="flex flex-col gap-[16px] mt-[16px] pl-[32px]">
                            {subPaymentType.map((type, index) => (
                              <div className="">
                                <div className="flex gap-[8px]">
                                  <label className="custom-checkbox">
                                    <input
                                      type="checkbox"
                                      checked={subPaymentType[index].selected}
                                      onChange={() =>
                                        setSubPaymentType((prevItems) =>
                                          prevItems.map((item, i) =>
                                            i === index
                                              ? { ...item, selected: true }
                                              : { ...item, selected: false }
                                          )
                                        )
                                      }
                                      className="checkbox-input"
                                    />
                                    <span className="checkmark"></span>
                                    <span className="ml-[12px] purchase__subtitle">
                                      {type.option}
                                    </span>
                                  </label>
                                </div>
                                {subPaymentType[index].selected && (
                                  <div className="flex flex-col gap-[12px] mt-[14px]">
                                    <input
                                      type="text"
                                      placeholder="Назва організації"
                                      className="border paddings"
                                    />
                                    <input
                                      type="text"
                                      placeholder="ЄРДПО"
                                      className="border paddings"
                                    />
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-[16px]">
                  <div className="subsubtitle">Коментар до замовлення</div>
                  <textarea
                    className="w-full resize-none rounded-[4px] px-[8px] py-[13px] h-[126px] mt-[16px] border"
                    placeholder="Коментар"
                  />
                </div>
                <div className="mt-[16px]">
                  <p className="hidden xl:block">
                    Підтверджуючи замовлення, я приймаю умови
                    <span className="text-[var(--action---secondary)] hover:underline ml-[4px]">
                      користувацької угоди
                    </span>
                  </p>
                  <button
                    className="hidden xl:block button w-[500px] mt-[16px]"
                    onClick={() => completeOrder()}
                  >
                    Підтвердити замовлення
                  </button>
                </div>
              </div>
              <div className="shadow flex flex-col p-[16px] text-p-grey max-w-full xl:w-[500px] max-h-[308px]">
                <p className="subsubtitle ">Всього</p>
                <div className="">
                  <div className="flex justify-between">
                    <p className="">
                      {totalCount} {totalCount > 1 ? "товарів" : "товар"} на
                      суму
                    </p>
                    <p className="text text-[var(--dark)] text-[14px] ">
                      {totalPrice.toLocaleString("fr-FR")}
                      <span className="ml-[2px] text-[8px]">грн.</span>
                    </p>
                  </div>
                  <div className="flex justify-between my-[16px]">
                    <p className="">Ціна доставки</p>
                    <p>Безкоштовно</p>
                  </div>
                </div>
                <div
                  className="flex justify-between pt-[16px]"
                  style={{ borderTop: "1px solid var(--gray-scale---10)" }}
                >
                  <div className="">Разом до оплати</div>
                  <div className="subtitle text-[var(--dark)]">
                    {totalPrice.toLocaleString("fr-FR")}{" "}
                    <span className="text-[16px]">грн.</span>
                  </div>
                </div>
                <button
                  className="button mb-[12px]"
                  onClick={() => completeOrder()}
                >
                  Підтвердити замовлення
                </button>
                <p className="">
                  Підтверджуючи замовлення, я приймаю умови
                  <span className="text-[var(--action---secondary)] hover:underline ml-[4px]">
                    користувацької угоди
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}
        {isCompleted && (
          <div className="h-[80vh]">
            <div className="mt-[64px] flex flex-col gap-[16px] items-center text-[var(--dark-grey)]">
              <img src={completeIcon} className="mb-[8px]" alt="" />
              <p className="text-bold text-[var(--dark-grey)] text-[28px] leading-[1.14]">
                Дякуємо за замовлення!
              </p>
              <p className="text-900 uppercase">
                Ваше замовлення
                <span className="text-[var(--action---secondary)] ml-[5px]">
                  №324
                </span>
              </p>
              <p className="max-w-[500px] text-center mb-[16px]">
                Ваше замовлення було успішно оформлено. Лист з підтвердженням
                покупки надіслано вам на електронну пошту.
              </p>
              <Link to="/">
                <div
                  className="button w-[180px] text-center"
                  style={{ textTransform: "none", fontSize: "14px" }}
                >
                  Продовжити покупки
                </div>
              </Link>
            </div>
          </div>
        )}
        <Modal show={showModal} onClose={() => setShowModal((prev) => !prev)}>
          <Basket
            usersProduct={usersProduct}
            changeCount={changeCount}
            closeModal={() => setShowModal((prev) => !prev)}
          />
        </Modal>
      </div>
      <div className="block md:hidden fixed bottom-0 bg-white p-[16px] w-full shadow">
        <div className="flex w-full justify-between">
          <p className="text-[var(--dark)] text-[28px] text-bold ">
            {totalPrice.toLocaleString("fr-FR")}
            <span className="text-[16px]">грн.</span>
          </p>
          <button className="button w-[191px]">Підтвердити замовлення</button>
        </div>
      </div>
    </>
  );
};

export default PurchasePage;
