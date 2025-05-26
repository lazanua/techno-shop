import { FC, useState } from "react";
import { ProductType } from "../../data/products";
import { Link } from "react-router-dom";
import notAvailableIcon from "../../assets/img/product-page/not-available-icon.svg";
import buyIcon from "../../assets/img/components/cart/buy-icon.svg";
import "./index.css";
interface ProductProps {
  product: ProductType;
  onClickBuyBtn: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
  id: number;
  onClickAddToFavorite: (
    event: React.MouseEvent<HTMLButtonElement>,
    product: ProductType
  ) => void;
  onClickAddToCompare: (
    event: React.MouseEvent<HTMLButtonElement>,
    product: ProductType
  ) => void;
}
const Cart: FC<ProductProps> = ({
  product,
  onClickBuyBtn,
  id,
  onClickAddToFavorite,
  onClickAddToCompare,
}) => {
  const [isOpenDetails, setIsOpenDetails] = useState<boolean>(false);
  const mainParametrs = product.parameters.slice(0, 4);
  return (
    <Link to={`/product/${product.id}`}>
      <div
        className={`${!isOpenDetails && "shadow"} ${
          isOpenDetails && "cart--active"
        } ${
          product.isNew && "cart"
        }  w-[156px] h-[323px] sm:w-[242px] sm:h-[390px] p-[12px] bg-white rounded-[4px] relative`}
        // style={{ boxShadow: "0 2px 10px 0 rgba(50, 50, 71, 0.14)" }}
        onMouseEnter={() => setIsOpenDetails(true)}
        onMouseLeave={() => setIsOpenDetails(false)}
      >
        <div className="flex  justify-end items-center">
          <div className="flex gap-[9px]">
            <button onClick={(e) => onClickAddToCompare(e, product)}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.37161 6.02266L2.51953 15.2141C2.51953 20.4226 10.2237 20.4226 10.2237 15.2141L6.37161 6.02266ZM6.37161 6.02266L17.6315 5.10352M17.6315 5.10352L21.4836 14.2949C21.4836 19.197 14.0758 19.197 14.0758 14.2949L17.6315 5.10352Z"
                  stroke="#01579B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.9989 6.32904C12.3262 6.32904 12.5915 6.0547 12.5915 5.71628C12.5915 5.37786 12.3262 5.10352 11.9989 5.10352C11.6716 5.10352 11.4062 5.37786 11.4062 5.71628C11.4062 6.0547 11.6716 6.32904 11.9989 6.32904Z"
                  stroke="#01579B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.26953 14.7715H9.47369"
                  stroke="#01579B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.5273 14.1582H20.7315"
                  stroke="#01579B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button onClick={(e) => onClickAddToFavorite(e, product)}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.944 4.43961L14.9443 4.43986C15.2484 4.74083 15.4892 5.09777 15.6534 5.49011C15.8176 5.88243 15.902 6.30267 15.902 6.72689C15.902 7.15111 15.8176 7.57135 15.6534 7.96367C15.4892 8.356 15.2484 8.71295 14.9443 9.01392L14.9442 9.01404L14.1681 9.7825L8.99961 14.9002L3.83116 9.7825L3.05508 9.01404C2.44118 8.40618 2.09766 7.58331 2.09766 6.72689C2.09766 5.87046 2.44118 5.0476 3.05508 4.43973C3.66922 3.83162 4.50375 3.48867 5.37545 3.48867C6.24715 3.48867 7.08168 3.83162 7.69583 4.43973L8.22353 3.90679L7.69583 4.43973L8.47191 5.20819C8.76419 5.4976 9.23504 5.4976 9.52732 5.20819L10.3034 4.43973L10.3035 4.43961C10.6075 4.13848 10.9688 3.89922 11.367 3.73584C11.7652 3.57247 12.1923 3.48828 12.6238 3.48828C13.0553 3.48828 13.4823 3.57247 13.8805 3.73584C14.2787 3.89922 14.6401 4.13848 14.944 4.43961Z"
                  stroke="#01579B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <img
          src={product.img}
          alt="Product"
          className="mb-[12px] object-contain  w-[134px] h-[134px] sm:w-[214px] sm:h-[212px]"
        />
        <div className="text text-[12px] sm:text-[14px] leading-[1.33] sm:leading-[1.14] h-[48px] sm:h-[32px] text-[var(--dark-grey)] max-h-[32px] overflow-hidden mb-[12px]">
          {product.title}
        </div>
        <div className="flex gap-[2px] sm:gap-[6px]">
          {product.rating &&
            Array.from({ length: product.rating }, (_, index) => (
              <div className="flex " key={index}>
                <div>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 1L7.545 4.13L11 4.635L8.5 7.07L9.09 10.51L6 8.885L2.91 10.51L3.5 7.07L1 4.635L4.455 4.13L6 1Z"
                      fill="#FFCD1B"
                      stroke="#FFCD1B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            ))}
          {product.rating &&
            Array.from({ length: 5 - product.rating }, (_, index) => (
              <div className="flex" key={index}>
                <div key={index}>
                  <svg
                    width="12"
                    height="11"
                    viewBox="0 0 12 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 1L7.545 4.13L11 4.635L8.5 7.07L9.09 10.51L6 8.885L2.91 10.51L3.5 7.07L1 4.635L4.455 4.13L6 1Z"
                      fill="#D9D9D9"
                      stroke="#D9D9D9"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            ))}
          <div className="cart__reviews text-[10px] sm:text-[11px] ml-[10px] sm:ml-0">
            Відгуків {product.reviewsCount}
          </div>
        </div>

        <div className="flex justify-between items-center mt-[15px]">
          {!product.discountedPrice && (
            <div className="text-[var(--dark)]">
              <span className="text-bold text-[18px] leading-[1.33]">
                {product.price}
              </span>
              <span className="text text-[12px]">грн.</span>
            </div>
          )}
          {product.discountedPrice && (
            <div className="">
              <div className="text line-through text-[10px] text-[var(--gray-scale---40)]">
                <span className="mr-[2px]">
                  {product.price >= 10000
                    ? product.price.toLocaleString("ua-UA")
                    : product.price}
                </span>
                <span className="text-[8px]">грн.</span>
              </div>
              <div className="text-[var(--accenty---red)]">
                <span className=" text text-[18px] leading-[1.11] ">
                  {product.discountedPrice >= 10000
                    ? product.discountedPrice.toLocaleString("ua-UA")
                    : product.discountedPrice}
                </span>
                <span className="text-[12px]">грн.</span>
              </div>
            </div>
          )}
          {!product.notAvailable && (
            <button
              className="button w-[40px] sm:w-[73px] flex items-center justify-center"
              style={{ padding: "10px 0" }}
              onClick={(e) => onClickBuyBtn(e, product.id)}
            >
              <span className="hidden sm:block">купити</span>
              <img src={buyIcon} className="block sm:hidden" alt="" />
            </button>
          )}
          {product.notAvailable && (
            <div className="flex gap-[6px] max-w-fit">
              <div className="bg-[var(--soft)] pl-[8px] pr-[6px] py-[5px] flex items-center rounded-[4px]">
                <div className="flex gap-[8px] items-center">
                  <img src={notAvailableIcon} alt="" />
                  <div className="text text-[var(--gray-scale---40)] hidden sm:block">
                    Немає в <br /> наявності
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {isOpenDetails && (
          <div className="absolute z-10 top-[98%] left-0 px-[12px] pb-[12px] bg-white w-[100%] text text-[12px] leading-[1.33] text-[var(--dark-grey)]">
            <div className="w-[100%] h-[1px] bg-[var(--gray-scale---10)] my-[12px]"></div>
            <p className="mb-[8px]">Характеристики</p>
            <div className="flex flex-col gap-[5px]">
              {mainParametrs.map((parametr, index) => (
                <div className="flex justify-between" key={index}>
                  <p className="text-[var(--gray-scale---40)]">
                    {parametr.name}
                  </p>
                  <p>{parametr.value}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default Cart;
