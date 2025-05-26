import { FC } from "react";
import { BasketsProduct } from "../../../data/products";
import minus from "../../../assets/img/modals/basket/minus.svg";
import plus from "../../../assets/img/modals/basket/plus.svg";
import trash from "../../../assets/img/modals/basket/trash.svg";
import { Link } from "react-router-dom";

interface BasketProps {
  usersProduct: BasketsProduct[];
  changeCount: [
    addProduct: (id: number) => void,
    removeProduct: (id: number) => void,
    deleteProduct: (id: number) => void,
    handleChangeProduct: (id: number, value: string) => void
  ];
  closeModal: () => void;
}

const Basket: FC<BasketProps> = ({ usersProduct, changeCount, closeModal }) => {
  return (
    <div className="lg:w-[1064px] p-[16px] md:p-[0] h-screen md:h-fit flex flex-col justify-between">
      <div className="subtitle-blue mb-[24px]">Кошик</div>
      <div className="md:max-h-[564px] overflow-visible md:overflow-auto">
        {usersProduct.length === 0 && (
          <div className="h-[200px] text text-[--gray-scale---60] text-[26px] flex items-center justify-center">
            <p>Кошик порожній</p>
          </div>
        )}

        {usersProduct.map((product) => (
          <div className="flex flex-col md:flex-row md:items-center justify-between xl:w-[1016px] p-[12px]">
            <div className="flex items-center gap-[30px]">
              <img src={product.img} alt="" className="w-[70px] h-[70px]" />
              <div className="flex gap-[4px] md:contents">
                <div
                  className="text-p-grey w-[212px] max-w-[212px] md:w-auto md:max-w-[350px] "
                  style={{ color: "var(--dark-grey)" }}
                >
                  {product.title}
                </div>
                <button
                  className="block md:hidden"
                  onClick={() => changeCount[2](product.id)}
                >
                  <img src={trash} className=" " alt="" />
                </button>
              </div>
            </div>
            <div className="flex ml-[100px] md:ml-0 justify-between w-auto md:w-[435px]">
              <div className="flex gap-[8px] md:gap-[22px] justify-center items-center">
                <button
                  className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] bg-[#E5E5E5] flex items-center justify-center rounded-full"
                  onClick={() => changeCount[0](product.id)}
                >
                  <img src={minus} className="" alt="-" />
                </button>
                <div className="rounded-[4px] border flex items-center justify-center w-[43px]">
                  <input
                    className={`subtitle-blue w-[43px] text-center ${
                      product.count === 0 && "opacity-0"
                    }`}
                    style={{
                      color: "var(--dark-grey",
                      appearance: "textfield",
                    }}
                    value={product.count}
                    onChange={(e) => changeCount[3](product.id, e.target.value)}
                    type="number"
                  ></input>
                </div>

                <button
                  className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] bg-[#E5E5E5] flex items-center justify-center  rounded-full"
                  onClick={() => changeCount[1](product.id)}
                >
                  <img src={plus} className="" alt="-" />
                </button>
              </div>
              <div className="flex items-center justify-between md:gap-[101px]">
                <div className="subtitle-blue">
                  {product.price * product.count}
                  <span className="text text-[12px] ml-[2px]">грн.</span>
                </div>
                <button
                  className="hidden md:block"
                  onClick={() => changeCount[2](product.id)}
                >
                  <img src={trash} className=" " alt="" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col-reverse gap-y-[12px] md:flex-row justify-between mt-[32px]">
        <button
          className="button button-light-blue button-light w-full md:w-[207px]"
          style={{ textTransform: "none", fontSize: "18px" }}
          onClick={closeModal}
        >
          Продовжити покупки
        </button>
        {usersProduct.length !== 0 && (
          <div className="flex flex-col md:flex-row gap-y-[12px] gap-x-[29px] items-center">
            <div className="flex justify-between w-full md:w-auto">
              <div className="block md:hidden text-[18px] text-bold text-[var(--dark-grey)] leading-[1.33] text">
                Всього:
              </div>
              <div className="text-bold text-[28px] leading-[0.86] text-[var(--dark)]">
                {usersProduct.reduce(
                  (sum, obj) => sum + obj.price * obj.count,
                  0
                )}
                <span className="ml-[2px] text-[16px]">грн.</span>
              </div>
            </div>

            <div className="w-full md:w-[185px]">
              <Link to="/purchase">
                <div className="button  text-center" onClick={closeModal}>
                  Оформити замовлення
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
