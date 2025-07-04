import { FC, useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { ProductType } from "../../data/products";
import arrowDownWhite from "../../assets/img/homepage/arrow-down-white.svg";
import img1 from "../../assets/img/game-zone-products/1.png";
import img2 from "../../assets/img/game-zone-products/2.png";
import img3 from "../../assets/img/game-zone-products/3.png";
import img4 from "../../assets/img/game-zone-products/4.png";
import img5 from "../../assets/img/game-zone-products/5.png";
import img6 from "../../assets/img/game-zone-products/6.png";
import ProductsGrid from "../ProductsGrid/ProductsGrid";

const categoryImages = [img1, img2, img3, img4, img5, img6];
const categoryIndexes = [
  [1, 9],
  [1, 9],
  [5, 0],
  [4, 0],
  [1, 2],
  [2, 0],
];
interface GamesComponentProps {
  onClickBuyBtn: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
  onClickAddToFavorite: (
    event: React.MouseEvent<HTMLButtonElement>,
    product: ProductType
  ) => void;
  gameProducts: ProductType[];
}

const GamesComponent: FC<GamesComponentProps> = ({
  onClickBuyBtn,
  onClickAddToFavorite,
  gameProducts,
}) => {
  const gamesCategories = [
    "Клавіатури",
    "Миші",
    "Аксесуари",
    "Ігрові ноутбуки",
    "Відеокарти",
    "Монітори",
  ];
  const [width, setWidth] = useState(window.innerWidth);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [categoryCount, setCategoryCount] = useState(gameProducts.length);
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
      case width > 768:
        setCategoryCount(6);
        break;
      case width > 640 && width <= 768:
        setCategoryCount(isCategoryOpen ? gameProducts.length : 3);
        break;
      default:
        setCategoryCount(isCategoryOpen ? gameProducts.length : 2);
        break;
    }
  }, [width, isCategoryOpen]);
  return (
    <div className="game">
      <div className="container ">
        <div className="py-[40px] mx-auto">
          <div className="flex gap-[16px] items-center mb-[24px]">
            <div className="h-[2px] w-[112px] bg-white"></div>
            <h2
              className="uppercase text-white text-semibold leading-[1.11] text-[36px]"
              style={{ whiteSpace: "nowrap" }}
            >
              Game Zone
            </h2>
            <div className="h-[2px] w-[100%] bg-white"></div>
          </div>
          <ProductsGrid
            productsArr={gameProducts}
            onClickBuyBtn={onClickBuyBtn}
            onClickAddToFavorite={onClickAddToFavorite}
            isWhiteText={true}
          />

          <div className="w-fit mx-auto">
            <h2 className="subtitle text-white mt-[48px]">
              Категорії для геймерів
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-6 justify-center lg:justify-between gap-[16px]">
              {gamesCategories
                .slice(0, categoryCount)
                .map((category, index) => (
                  <div className="" key={index}>
                    <Link
                      to={`/categories/${categoryIndexes[index][0]}/${categoryIndexes[index][1]}`}
                    >
                      <div
                        className="bg-white
                    w-[156px] h-[132px]
                  rounded-none
                  md:w-[120px] md:h-[120px]
                  lg:w-[150px] lg:h-[150px] xl:w-[199px] xl:h-[199px] 
                  relative md:rounded-full cart__category-bg
                  overflow-hidden
                  md:overflow-visible
                  
                  "
                      >
                        <div
                          className="absolute
                    w-[100%] h-[100%]
                     md:w-[120%] md:h-[120%]  top-0 left-0 md:left-[-15px]
                  
                    "
                        >
                          <img
                            className="contain"
                            src={categoryImages[index]}
                            alt=""
                          />
                        </div>
                      </div>
                      <div
                        className="
                  
                  text-bold text-center text-[16px] lg:text-[18px] leading-[1.33] text-white mt-[16px]"
                      >
                        {category}
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
            <div className="flex w-full justify-between md:justify-end mt-[12px] ">
              <button
                className="flex gap-[4px] items-center md:hidden"
                onClick={() => setIsCategoryOpen((prev) => !prev)}
              >
                <span className="link !text-[var(--white)] ">
                  {isCategoryOpen ? "Сховати" : "Ще товари"}
                </span>
                <img src={arrowDownWhite} alt="" />
              </button>
              <button className="flex gap-[4px] items-center">
                <span className="link !text-[var(--white)]">Дивитись усе</span>
                <img src={arrowDownWhite} className="rotate-[-90deg]" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesComponent;
