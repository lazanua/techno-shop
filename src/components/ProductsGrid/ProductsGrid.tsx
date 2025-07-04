import arrowDown from "../../assets/img/homepage/arrow-down.svg";
import { FC, useEffect, useState } from "react";
import { ProductType } from "../../data/products";
import Card from "../cards-components/Card/Card";
interface ProductsGridProps {
  productsArr: ProductType[];
  onClickBuyBtn: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
  onClickAddToFavorite: (
    event: React.MouseEvent<HTMLButtonElement>,
    product: ProductType
  ) => void;
  isWhiteText: boolean;
  isProductPage: boolean | undefined;
}
const ProductsGrid: FC<ProductsGridProps> = ({
  productsArr,
  onClickBuyBtn,
  onClickAddToFavorite,
  isWhiteText,
  isProductPage,
}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [productsCount, setProductsCount] = useState(productsArr.length);
  const [isOpenProducts, setIsOpenProducts] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    switch (true) {
      case width > 1536:
        setProductsCount(6);
        break;
      case width > 1240 && width <= 1536:
        setProductsCount(isOpenProducts ? productsArr.length : 5);
        break;
      case width <= 1240 && width > 1024:
        setProductsCount(isOpenProducts ? productsArr.length : 4);
        break;
      case width <= 1024 && width > 640:
        setProductsCount(isOpenProducts ? productsArr.length : 3);
        break;
      default:
        setProductsCount(isOpenProducts ? productsArr.length : 2);
        break;
    }
  }, [width, isOpenProducts]);
  return (
    <div className="w-fit flex flex-col mx-auto">
      <div className="flex items-center justify-center mx-auto">
        <div
          className="grid justify-center items-center
          grid-cols-2
                sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-[16px] "
        >
          {productsArr.length > 0 &&
            productsArr.slice(0, productsCount).map((product, index) => (
              <div className="" key={index}>
                <Card
                  product={product}
                  onClickBuyBtn={onClickBuyBtn}
                  id={index}
                  onClickAddToFavorite={onClickAddToFavorite}
                  onClickAddToCompare={onClickAddToFavorite}
                />
              </div>
            ))}
        </div>
      </div>
      <div
        className={`${
          isProductPage ? "justify-end" : "justify-between"
        } flex items-center mt-[22px] `}
      >
        <button
          onClick={() => setIsOpenProducts((prev) => !prev)}
          className="2xl:hidden link flex items-center gap-[4px] mt-[12px] justify-end"
        >
          <span className={`${isWhiteText && "!text-[var(--white)]"} link`}>
            {isOpenProducts ? "Сховати" : "Ще товари"}
          </span>
          <svg
            className={`${
              isOpenProducts ? "rotate-[-90deg]" : "rotate-[90deg]"
            } `}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.33203 8H12.6654"
              stroke={`${isWhiteText ? "white" : "var(--action---secondary)"}`}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 3.33398L12.6667 8.00065L8 12.6673"
              stroke={`${isWhiteText ? "white" : "var(--action---secondary)"}`}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button
          className={`${
            isProductPage && "hidden"
          } link flex items-center gap-[4px]`}
        >
          <span
            className={`${
              isWhiteText && "!text-[var(--white)] hover:underline"
            } link`}
          >
            Дивитись все
          </span>
          <svg
            className=""
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.33203 8H12.6654"
              stroke={`${isWhiteText ? "white" : "var(--action---secondary)"}`}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 3.33398L12.6667 8.00065L8 12.6673"
              stroke={`${isWhiteText ? "white" : "var(--action---secondary)"}`}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductsGrid;
