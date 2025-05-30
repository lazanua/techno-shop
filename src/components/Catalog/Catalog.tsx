import { FC, useState } from "react";
import CategoriesComponent from "../CategoriesComponent/CategoriesComponent";
import { categories } from "../../data/categories";
import { Link } from "react-router-dom";

const Catalog: FC = ({}) => {
  const [currentCategory, setCurrentCategory] = useState<number>(-1);
  const chooseCategory = (index: number | null) => {
    if (typeof index === "number") {
      setCurrentCategory(index);
    }
  };
  const onMouseLeaveCategories = () => {};
  return (
    <div className="flex bg-white w-[1398px]">
      <div className="container">
        <div className="flex gap-[30px]">
          <CategoriesComponent
            chooseCategory={chooseCategory}
            id={currentCategory}
            onMouseLeaveCategories={onMouseLeaveCategories}
          />
          <div className="gap-[26px] flex flex-col h-[480px] flex-wrap w-[100%]">
            {currentCategory > -1 &&
              categories[currentCategory].subCategories.map(
                (subCategory, index) => (
                  <div className="">
                    <Link to={`/categories/${currentCategory + 1}/${index}`}>
                      <p className="text-bold text-[16px] leading-[1.25] text-[var(--action---secondary)] cursor-pointer hover:underline mb-[12px] mt-[14px]">
                        {subCategory.subCategory}
                      </p>
                    </Link>

                    <div className="flex flex-col gap-[8px] mb-[12px]">
                      {subCategory.subSubCategories?.map((item) => (
                        <Link
                          to={`/categories/${currentCategory + 1}/${index}`}
                        >
                          <div className="text-p-grey cursor-pointer hover:underline">
                            {item}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
