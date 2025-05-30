import { FC } from "react";
import { categories } from "../../data/categories";
import { Link } from "react-router-dom";

import icon1 from "../../assets/img/categories-icons/1.svg";
import icon2 from "../../assets/img/categories-icons/2.svg";
import icon3 from "../../assets/img/categories-icons/3.svg";
import icon4 from "../../assets/img/categories-icons/4.svg";
import icon5 from "../../assets/img/categories-icons/5.svg";
import icon6 from "../../assets/img/categories-icons/6.svg";
import icon7 from "../../assets/img/categories-icons/7.svg";
import icon8 from "../../assets/img/categories-icons/8.svg";
import icon9 from "../../assets/img/categories-icons/9.svg";
import icon10 from "../../assets/img/categories-icons/10.svg";
import icon1Active from "../../assets/img/categories-icons/1-active.svg";
import icon2Active from "../../assets/img/categories-icons/2-active.svg";
import icon3Active from "../../assets/img/categories-icons/3-active.svg";
import icon4Active from "../../assets/img/categories-icons/4-active.svg";
import icon5Active from "../../assets/img/categories-icons/5-active.svg";
import icon6Active from "../../assets/img/categories-icons/6-active.svg";
import icon7Active from "../../assets/img/categories-icons/7-active.svg";
import icon8Active from "../../assets/img/categories-icons/8-active.svg";
import icon9Active from "../../assets/img/categories-icons/9-active.svg";
import icon10Active from "../../assets/img/categories-icons/10-active.svg";
export const categoriesIcons = [
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon8,
  icon9,
  icon10,
];
export const categoriesIconsActive = [
  icon1Active,
  icon2Active,
  icon3Active,
  icon4Active,
  icon5Active,
  icon6Active,
  icon7Active,
  icon8Active,
  icon9Active,
  icon10Active,
];

interface CategoriesComponentProps {
  chooseCategory: (index: number) => void | null;
  id: number;
  onMouseLeaveCategories: () => void;
}
const CategoriesComponent: FC<CategoriesComponentProps> = ({
  chooseCategory,
  id,
  onMouseLeaveCategories,
}) => {
  return (
    <div
      className="bg-white text"
      onMouseLeave={() => onMouseLeaveCategories()}
    >
      <div className="flex flex-col">
        {categories.map((category, index) => (
          <div key={index}>
            <Link to={`/categories/${index}`}>
              <button
                className={`categories__button ${
                  index === id
                    ? "bg-[var(--soft)] text-[var(--action---secondary)]"
                    : ""
                }`}
                onMouseEnter={() => chooseCategory(index)}
              >
                <div className="flex border-b border-b-grey-200 w-[300px] 2xl:w-[370px] justify-between items-center p-[12px]">
                  <div className="flex gap-[8px]">
                    <div className="flex w-[24px] h-[24px] justify-center items-center">
                      <img
                        className=""
                        src={
                          index === id
                            ? categoriesIconsActive[index]
                            : categoriesIcons[index]
                        }
                        alt=""
                      />
                    </div>
                    <div className="">{category.categoryName}</div>
                  </div>
                  <svg
                    className="mr-[9px]"
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 13L7 7L1 1"
                      stroke="#060F42"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesComponent;
