import { FC } from "react";
import "./index.css";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import { ProductType } from "../../data/products";

import img1 from "../../assets/img/game-zone-products/1.png";
import img2 from "../../assets/img/game-zone-products/2.png";
import img3 from "../../assets/img/game-zone-products/3.png";
import img4 from "../../assets/img/game-zone-products/4.png";
import img5 from "../../assets/img/game-zone-products/5.png";
import img6 from "../../assets/img/game-zone-products/6.png";

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
  products: ProductType[];
}

const GamesComponent: FC<GamesComponentProps> = ({
  onClickBuyBtn,
  onClickAddToFavorite,
  products,
}) => {
  const gamesCategories = [
    "Клавіатури",
    "Миші",
    "Аксесуари",
    "Ігрові ноутбуки",
    "Відеокарти",
    "Монітори",
  ];
  const gameProductsIndex = [2, 3, 4, 5, 8, 10];
  return (
    <div className="game">
      <div className="container ">
        <div className="py-[40px] mx-auto">
          <div className="flex gap-[16px] items-center">
            <div className="h-[2px] w-[112px] bg-white"></div>
            <h2
              className="uppercase text-white text-semibold leading-[1.11] text-[36px]"
              style={{ whiteSpace: "nowrap" }}
            >
              Game Zone
            </h2>
            <div className="h-[2px] w-[100%] bg-white"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-[16px] mt-[24px]">
            {products.length !== 0 &&
              gameProductsIndex.map((index) => (
                <div className="" key={index}>
                  <Cart
                    product={products[index]}
                    onClickBuyBtn={onClickBuyBtn}
                    id={products[index].id}
                    onClickAddToFavorite={onClickAddToFavorite}
                    onClickAddToCompare={onClickAddToFavorite}
                  />
                </div>
              ))}
          </div>
          <div className="mt-[27px]">
            <Link to="/" className="flex gap-[7px] items-center justify-end">
              <span className="text-[14px] text text-white">
                Дивитись усі товари
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33203 8H12.6654"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 3.33398L12.6667 8.00065L8 12.6673"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </div>
          <h2 className="subtitle text-white">Категорії для геймерів</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 justify-center lg:justify-between gap-[16px]">
            {gamesCategories.map((category, index) => (
              <div className="" key={index}>
                <Link
                  to={`/categories/${categoryIndexes[index][0]}/${categoryIndexes[index][1]}`}
                >
                  <div
                    className="bg-white  md:w-[160px] md:h-[160px]
                    w-[156px] h-[132px]
                  rounded-none
                  lg:w-[170px] lg:h-[170px] xl:w-[199px] xl:h-[199px] 
                  relative md:rounded-full cart__category-bg
                  overflow-hidden
                  md:overflow-visible
                  
                  "
                  >
                    <div
                      className="absolute
                    
                    w-[120%] h-[120%] top-0 left-[-15px]
                  
                    "
                    >
                      <img src={categoryImages[index]} alt="" className="" />
                    </div>
                  </div>
                  <div
                    className="
                  hidden md:block
                  text-bold text-center text-[18px] leading-[1.33] text-white mt-[16px]"
                  >
                    {category}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesComponent;
