import { ProductType } from "../../../data/products";
import { FC } from "react";
import Price from "../Price/Price";
import favoritesIcon from "../../../assets/img/components/cart/favorites-icon.svg";
import compareIcon from "../../../assets/img/components/cart/compare-icon.svg";
import ReviewsStars from "../ReviewStars/ReviewStars";
import buyIcon from "../../../assets/img/components/cart/buy-icon.svg";
import { Link } from "react-router-dom";
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
const CardWide: FC<ProductProps> = ({
  product,
  onClickBuyBtn,
  id,
  onClickAddToFavorite,
  onClickAddToCompare,
}) => {
  return (
    <Link to={`/product/${id}`}>
      <div className="shadow rounded-[4px] w-full h-fit px-[12px] pb-[12px] pt-[36.5px]">
        <div className="flex xl:flex-row flex-col w-full justify-between items-start md:items-center">
          <div className="flex gap-[24px] w-full  justify-start items-center">
            <img
              src={product.img}
              className="w-[90px] h-[90px] xl:w-[160px] xl:h-[160px] object-contain"
              alt=""
            />
            <div className="w-full">
              <div className="flex justify-between w-full items-start md:contents">
                <p className="text text-[12px] sm:text-[14px] xl:h-auto  h-[52px] overflow-hidden w-[126px] md:w-auto md:text-[16px] text-[var(--dark-grey)] mb-[12px]">
                  {product.title}
                </p>
                <div className="flex gap-[8px] items-center">
                  <button onClick={(e) => onClickAddToCompare(e, product)}>
                    <img src={compareIcon} alt="" />
                  </button>
                  <button onClick={(e) => onClickAddToFavorite(e, product)}>
                    <img src={favoritesIcon} alt="" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-[8px]">
                {product.rating && <ReviewsStars rating={product.rating} />}
                <p className="text-[14px] text-[var(--gray-scale---40)]">
                  Відгуків: {product.reviewsCount}
                </p>
                <button
                  className="ml-[16px] hidden md:block"
                  onClick={(e) => onClickAddToFavorite(e, product)}
                >
                  <img src={favoritesIcon} alt="" />
                </button>
                <button
                  className="ml-[4px] hidden md:block"
                  onClick={(e) => onClickAddToCompare(e, product)}
                >
                  <img src={compareIcon} alt="" />
                </button>
              </div>
              <div className="mt-[16px] text text-[var(--dark-grey)]">
                <p className="hidden xl:block text-[14px] mb-[8px]">
                  Характеристики
                </p>
                <div className="hidden  xl:grid grid-cols-3 gap-y-[5px] gap-x-[40px]">
                  {product.parameters.map((parametr) => (
                    <div className="flex items-center text-[12px] gap-[10px] ">
                      <p>{parametr.name}</p>
                      <p>{parametr.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-[24px] pl-[114px] xl:pl-0  w-full justify-between xl:justify-start items-center">
            <div className="">
              <Price
                price={product.price}
                discountedPrice={product?.discountedPrice}
              />
            </div>
            <button
              className="button flex justify-center items-center w-[40px] sm:w-[149px]"
              onClick={(e) => onClickBuyBtn(e, product.id)}
            >
              <p className="hidden sm:block">Купити</p>
              <img className="block sm:hidden" src={buyIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardWide;
