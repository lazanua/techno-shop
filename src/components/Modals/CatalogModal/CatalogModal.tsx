import { useState } from "react";
import { categories } from "../../../data/categories";
import arrowBlue from "../../../assets/img/header/arrow-blue.svg";
import arrowGrey from "../../../assets/img/header/arrow-grey.svg";
import arrowBlueMobile from "../../../assets/img/header/arrow-blue-mobile.svg";

import { categoriesIcons } from "../../CategoriesComponent/CategoriesComponent";
import { categoriesIconsActive } from "../../CategoriesComponent/CategoriesComponent";
const CatalogModal = () => {
  const [currentOpenedCategory, setCurrentOpenedCategory] = useState(-1);
  const [isAllSubcategories, setIsAllSubcategories] = useState(false);

  const onClickCategory = (index: number) => {
    setCurrentOpenedCategory(index);
    setIsAllSubcategories(false);
  };

  const onClickSubCategory = (
    categoryIndex: number,
    subCategoryIndex: number
  ) => {
    window.location.href = `/categories/${
      categoryIndex + 1
    }/${subCategoryIndex}`;
  };

  return (
    <div className="flex flex-col ">
      <p className="subtitle-blue mb-[24px] ml-[16px] mt-[16px]">Каталог</p>
      {categories.map((category, index) => (
        <div
          className={`pt-[12px]  ${
            currentOpenedCategory === index ? "bg-[var(--soft)]" : ""
          } }`}
        >
          <button
            className="flex justify-between shadow-block px-[12px] w-full"
            onClick={() =>
              onClickCategory(currentOpenedCategory === index ? -1 : index)
            }
          >
            <div className="flex gap-[8px] pb-[14px]">
              <img
                src={
                  currentOpenedCategory === index
                    ? categoriesIconsActive[index]
                    : categoriesIcons[index]
                }
                alt=""
              />
              <p
                className={`text-[14px] ${
                  currentOpenedCategory === index
                    ? "text-bold text-[var(--action---secondary)]"
                    : " text text-[var(--gray-scale---100)]"
                } `}
              >
                {category.categoryName}
              </p>
            </div>
            <img src={arrowBlue} alt="" />
          </button>

          {currentOpenedCategory === index && (
            <div className="">
              <div className="">
                {category.subCategories.map((subcategory, subIndex) => (
                  <div className=" shadow-block">
                    {!isAllSubcategories && subIndex < 3 && (
                      <button
                        className="flex justify-between p-[12px] w-full"
                        onClick={() => onClickSubCategory(index, subIndex)}
                      >
                        <p className="text text-[14p] pl-[32px]">
                          {subcategory.subCategory}
                        </p>
                        <img src={arrowGrey} alt="" />
                      </button>
                    )}
                    {isAllSubcategories && (
                      <button
                        className="flex justify-between p-[12px] w-full"
                        onClick={() => onClickSubCategory(index, subIndex)}
                      >
                        <p className="text text-[14p] pl-[32px]">
                          {subcategory.subCategory}
                        </p>
                        <img src={arrowGrey} alt="" />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <button
                className="flex w-full justify-between text-start text-[var(--action---secondary)] text text-[14px] shadow-block"
                onClick={() => setIsAllSubcategories((prev) => !prev)}
              >
                <p className="py-[12px] pl-[44px] ">
                  {isAllSubcategories ? "Сховати" : "Дивитись все"}
                </p>
                <img src={arrowBlueMobile} className="pr-[12px]" alt="" />
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CatalogModal;
