import { FC } from "react";
import icon1 from "../../assets/img/product-page/icon1.svg";
import icon2 from "../../assets/img/product-page/icon2.svg";
import icon3 from "../../assets/img/product-page/icon3.svg";
import icon4 from "../../assets/img/product-page/icon4.svg";
import icon5 from "../../assets/img/product-page/icon5.svg";
import icon6 from "../../assets/img/product-page/icon6.svg";
import icon7 from "../../assets/img/product-page/icon7.svg";
import icon8 from "../../assets/img/product-page/icon8.svg";
import icon9 from "../../assets/img/product-page/icon9.svg";
import icon10 from "../../assets/img/product-page/icon10.svg";
import "./index.css";
import { Tab } from "../../pages/ProductPage/ProductPage";
const InfoComponent: FC<{ handleSetTab: (str: Tab) => void }> = ({
  handleSetTab,
}) => {
  const deliveryTypes = [
    {
      type: "Самовивіз із магазину (Дніпро)",
      date: "Відправимо сьогодні",
      price: 0,
      freeDelivery: 0,
    },
    {
      type: "Самовивіз із Justin",
      date: "Відправимо сьогодні",
      price: 44,
      freeDelivery: 5000,
    },
    {
      type: "Самовивіз УКРПОШТИ",
      date: "Відправимо сьогодні",
      price: 24,
      freeDelivery: 5000,
    },
    {
      type: "Самовивіз із Нової Пошти",
      date: "Відправимо сьогодні",
      price: 75,
      freeDelivery: 5000,
    },
    {
      type: "Кур'єр на вашу адресу",
      date: "Відправимо завтра",
      price: 75,
      freeDelivery: 3000,
    },
  ];
  const icons = [icon1, icon2, icon3, icon4, icon5];
  return (
    <div className="flex flex-col gap-[24px]">
      <div className="info-block shadow">
        <div className="subsubtitle">Доставка</div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="hidden md:flex flex-col items-center mr-[15px] ">
              <div className="h-[32px] flex items-center">
                <img src={icon1} alt="" className="max-w-[24px] max-h-[24px]" />
              </div>
              <div className="h-[32px] flex items-center">
                <img src={icon2} alt="" className="max-w-[24px] max-h-[24px]" />
              </div>
              <div className="h-[32px] flex items-center">
                <img src={icon3} alt="" className="max-w-[24px] max-h-[24px]" />
              </div>
              <div className="h-[32px] flex items-center">
                <img src={icon4} alt="" className="max-w-[24px] max-h-[24px]" />
              </div>
              <div className="h-[32px] flex items-center">
                <img src={icon5} alt="" className="max-w-[24px] max-h-[24px]" />
              </div>
            </div>

            <div className="flex-col flex gap-[10px] md:gap-0">
              {deliveryTypes.map((item, index) => (
                <div className="flex items-start md:items-center gap-[10px] ">
                  <img
                    className="block md:hidden w-[24px] h-[24px]"
                    src={icons[index]}
                    alt=""
                  />
                  <div
                    key={index}
                    className="md:h-[32px] h-auto flex flex-col items-start  gap-[8px]"
                  >
                    <p className="md:mt-[8px] mt-0">{item.type}</p>
                    <p className="block md:hidden">{item.date}</p>
                    <p className="block md:hidden">
                      {item.price === 0 ? "Безкоштовно" : `${item.price} грн.`}
                    </p>
                    <p
                      className={`${
                        item.freeDelivery === 0 ? "hidden" : "block"
                      } md:hidden text-[var(--action---secondary)]`}
                    >
                      Чи безкоштовно від {item.freeDelivery} грн
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:flex flex-col">
            {Array.from({ length: 5 }, (_, index) => (
              <div className="h-[32px] flex items-center" key={index}>
                <p>Відправимо сьогодні</p>
              </div>
            ))}
          </div>
          <div className="hidden md:flex flex-col">
            <div className="h-[32px] text-blue flex justify-end">
              Безкоштовно
            </div>
            {Array.from({ length: 4 }, (_, index) => (
              <div className="h-[32px] flex flex-col items-end">
                <div className="">За тарифами перевізника</div>
                <div className="text-blue">Чи безкоштовно від 5000 грн</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="info-block shadow">
        <div className="subsubtitle">Оплата</div>
        <div className="flex items-center gap-[10px]">
          <div className="flex flex-col ">
            <div className="h-[32px] flex items-center">
              <img src={icon6} alt="" />
            </div>
            <div className="h-[32px] flex items-center">
              <img src={icon7} alt="" />
            </div>
            <div className="h-[32px] flex items-center">
              <img src={icon8} alt="" />
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="h-[32px] flex items-center">
              Оплата при отриманні товару, Google Pay, картою онлайн
            </div>
            <div className="h-[32px] flex items-center">
              Розстрочка 0% на 4 міс.
            </div>
            <div className="h-[32px] flex items-center">
              Кредит
              <span className="hidden md:block">
                , з умовами ви можете ознайомитись
                <button
                  className="link ml-[5px]"
                  onClick={() => handleSetTab("credit")}
                >
                  тут
                </button>
              </span>
              <button
                className="text-[var(--action---secondary)] block md:hidden"
                onClick={() => handleSetTab("credit")}
              >
                . Докладніше
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="info-block shadow">
        <div className="subsubtitle">Гарантія</div>
        <div className="flex items-center gap-[10px]">
          <div className="flex flex-col ">
            <div className="h-[32px] flex items-center">
              <img src={icon9} alt="" />
            </div>
            <div className="h-[32px] flex items-center">
              <img src={icon10} alt="" />
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="h-[32px] flex items-center">36 місяців</div>
            <div className="h-[32px] flex items-center">
              Обмін/повернення товару протягов 14 днів
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoComponent;
