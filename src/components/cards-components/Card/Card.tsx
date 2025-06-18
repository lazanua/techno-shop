import { FC, useState } from "react";
import { ProductType } from "../../../data/products";
import { Link } from "react-router-dom";
import notAvailableIcon from "../../../assets/img/product-page/not-available-icon.svg";
import buyIcon from "../../../assets/img/components/cart/buy-icon.svg";
import compareIcon from "../../../assets/img/components/cart/compare-icon.svg";
import favoritesIcon from "../../../assets/img/components/cart/favorites-icon.svg";
import "./index.css";
import ReviewsStars from "../ReviewStars/ReviewStars";
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
const Card: FC<ProductProps> = ({
  product,
  onClickBuyBtn,
  id,
  onClickAddToFavorite,
  onClickAddToCompare,
}) => {
  const [isOpenDetails, setIsOpenDetails] = useState<boolean>(false);
  const mainParametrs = product.parameters.slice(0, 4);
  return (
    <Link to={`/product/${id}`}>
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
              <img src={compareIcon} alt="" />
            </button>
            <button onClick={(e) => onClickAddToFavorite(e, product)}>
              <img src={favoritesIcon} alt="" />
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
          {product.rating && <ReviewsStars rating={product.rating} />}
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

export default Card;
