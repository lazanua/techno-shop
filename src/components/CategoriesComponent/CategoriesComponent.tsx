import { FC } from "react";
import { categories } from "../../data/categories";
import { Link } from "react-router-dom";
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
                        src={`/img/categories-icons/${index + 1}${
                          index === id ? "-active" : ""
                        }.svg`}
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
