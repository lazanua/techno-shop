import { FC, useState, useEffect } from "react";
import MiniCartProduct from "../MiniCartProduct/MiniCartProduct";
import { ProductType, BasketsProduct } from "../../data/products";
import bankIcon from "../../assets/img/product-page/bank-icon.svg";
import { ModalName } from "../../pages/ProductPage/ProductPage";
import styles from "./index.module.css";
import arrowDown from "../../assets/img/product-page/arrow-down-grey.svg";
interface CreditTabProps {
  product: ProductType;
  openModal: (str: ModalName) => void;
  addFavoriteProduct: (product: ProductType) => void;
  productToBasket: (product: BasketsProduct) => void;
}
const CreditTab: FC<CreditTabProps> = ({
  product,
  openModal,
  addFavoriteProduct,
  productToBasket,
}) => {
  const [isSelectListOpen1, setIsSelectListOpen1] = useState<boolean>(false);
  const [isSelectListOpen2, setIsSelectListOpen2] = useState<boolean>(false);
  const options = [12, 10, 6];
  const [currentOption, setCurrentOption] = useState<number>(1);
  const [priceMonths, setPriceMonths] = useState<number>(
    product.price / options[currentOption]
  );

  useEffect(() => {
    if (product.discountedPrice) {
      setPriceMonths(
        Math.round(product.discountedPrice / options[currentOption])
      );
    } else {
      setPriceMonths(Math.round(product.price / options[currentOption]));
    }
  }, [currentOption]);

  return (
    <div className="container">
      <div className={`flex justify-between ${styles.text} gap-[16px]`}>
        <div
          className={`flex md:flex-row flex-col justify-between gap-[16px] md:gap-[48px]`}
        >
          <div className={`flex flex-col gap-[14px]`}>
            <div className={styles.subtitle}>Кредитор</div>
            <div className="flex gap-[12px] items-center">
              <img src={bankIcon} alt="" />
              <span>ПриватБанк</span>
            </div>
            <button
              className="link mt-[2px] w-[95px]"
              onClick={() => openModal("credit-info")}
            >
              Читати умови
            </button>
          </div>
          <div className={`flex flex-col gap-[12px]`}>
            <div className="">
              <span className={styles.subtitle}>Умови кредиту</span>
            </div>
            <div
              className={`relative`}
              onMouseLeave={() => setIsSelectListOpen1(false)}
              onMouseEnter={() => setIsSelectListOpen1(true)}
            >
              <div
                className={styles.block}
                onClick={() => setIsSelectListOpen2((prev) => !prev)}
              >
                <span>Оплата частинами</span>
                <img
                  src={arrowDown}
                  alt=""
                  className={isSelectListOpen1 ? "rotate-180 " : ""}
                />
              </div>
              {isSelectListOpen1 && (
                <div className={`absolute left-0 ${styles.options}`}>
                  <div className={styles.select}>Оплата частинами</div>
                </div>
              )}
            </div>
          </div>
          <div className={`flex flex-col gap-[12px]`}>
            <div className={styles.subtitle}>Термін кредиту</div>
            <div
              className={`relative`}
              onMouseLeave={() => setIsSelectListOpen2(false)}
              onMouseEnter={() => setIsSelectListOpen2(true)}
            >
              <button
                className={styles.block}
                onClick={() => setIsSelectListOpen2((prev) => !prev)}
              >
                <span>{options[currentOption]} місяців</span>
                <img
                  src={arrowDown}
                  alt=""
                  className={isSelectListOpen2 ? "rotate-180" : ""}
                />
              </button>
              {isSelectListOpen2 && (
                <div
                  className={`absolute left-0 flex flex-col ${styles.options}`}
                >
                  {options.map((option, index) => (
                    <div
                      className={styles.select}
                      onClick={() => setCurrentOption(index)}
                    >
                      {option} місяців
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className={`flex flex-col  gap-[22px]`}>
            <div className={styles.subtitle}>Перший внесок</div>
            <div className="">0 грн</div>
          </div>
          <div className={`flex flex-col gap-[22px]`}>
            <div className={styles.subtitle}>Кожного місяця</div>
            <div className="">{priceMonths} грн</div>
          </div>
          <div className="">
            <button className="button w-[130px]">Купити у кредит</button>
          </div>
        </div>
        <div className="xl:contents hidden">
          <MiniCartProduct
            product={product}
            addFavoriteProduct={addFavoriteProduct}
            productToBasket={productToBasket}
          />
        </div>
      </div>
    </div>
  );
};

export default CreditTab;
