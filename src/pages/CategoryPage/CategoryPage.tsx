import { FC, useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import arrowRight from "../../assets/img/product-page/arrow-right.svg";
import { categories } from "../../data/categories";
import { ProductType } from "../../data/products";
import Cart from "../../components/Cart/Cart";
import PagePath from "../../components/PagePath/PagePath";
import "./index.css";

interface CaregoryPageProps {
  onClickBuyBtn: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
  onClickAddToFavorite: (
    event: React.MouseEvent<HTMLButtonElement>,
    product: ProductType
  ) => void;
}

const CaregoryPage: FC<CaregoryPageProps> = ({
  onClickBuyBtn,
  onClickAddToFavorite,
}) => {
  const [categoryProducts, setCategoryProducts] = useState<ProductType[]>([]);
  const [isOpenSubCategory, setIsOpenSubCategory] = useState<boolean>(false);
  const [currentSubCategory, setCurrentSubCategory] = useState<number>(-1);
  let { category } = useParams<{ category: string }>();
  const [isFilteredOpen, setIsFilteredOpen] = useState<boolean[]>([
    true,
    true,
    true,
    true,
  ]);
  const [filtersSelected, setFiltersSelected] = useState<number[]>([]);
  const currentCategory = categories.find(
    (item) => item.id === Number(category) + 1
  );
  const filterExample = [
    ["Lorem ipsum", "123"],
    ["Dolor sit", "34"],
    ["Amet", "56"],
    ["Consectetur adipiscing", "67"],
    ["Nihil cu autem", "78"],
    ["Distinctio", "112"],
  ];
  const [maxPrice, setMaxPrice] = useState(7500);
  const [minPrice, setMinPrice] = useState(2500);
  const [checkboxStates, setCheckboxStates] = useState<boolean[][]>([
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
  ]);
  const [isDataReceived, setIsDatareceived] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  const onClickSubCategory = (id: number) => {
    setIsOpenSubCategory(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://67e580fc18194932a586562d.mockapi.io/products?categoryId=${
            Number(category) + 1
          }`
        );
        setCategoryProducts(response.data);
        setIsDatareceived(true);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsDatareceived(false);
      }
    };

    fetchData();
  }, [category]);

  const deleteFilter = (index: number) => {
    const newItems = filtersSelected.filter((i) => i !== index);
    setFiltersSelected(newItems);
  };

  const changeFilters = (
    value: boolean,
    indexFilter: number,
    indexCheckbox: number
  ) => {
    if (value) {
      if (!filtersSelected.includes(indexFilter)) {
        setFiltersSelected((prev) => [...prev, indexFilter]);
      }
    } else {
      let allFalse = false;
      checkboxStates[indexFilter].forEach((item, index) => {
        if (item && index !== indexCheckbox) {
          allFalse = false;
        }
      });
      if (allFalse) {
        const newNumbers = filtersSelected.filter(
          (number) => number !== indexFilter
        );
        setFiltersSelected(newNumbers);
      }
    }
  };

  const toggleCheckbox = (
    value: boolean,
    indexFilter: number,
    index: number
  ) => {
    const newItems = checkboxStates.map((item, i) =>
      i === indexFilter
        ? item.map((nestedItem, j) => (j === index ? !nestedItem : nestedItem))
        : item
    );
    setCheckboxStates(newItems);
    changeFilters(value, indexFilter, index);
  };
  return (
    <div className="container text">
      <div className="flex items-center gap-[10.5px] mb-[27px]">
        <Link to="/">
          <span className="link">Головна</span>
        </Link>
        <img src={arrowRight} alt="" />
        <p className="text-[var(--gray-scale---40)]">
          {currentCategory?.categoryName}
        </p>
      </div>
      {!isOpenSubCategory && (
        <h2 className="subtitle">{currentCategory?.categoryName}</h2>
      )}

      <div className="">
        {currentCategory?.subCategories && (
          <div className="flex gap-[16px] flex-wrap">
            {currentCategory?.subCategories.map((subcategory, index) => (
              <Link to={`/categories/${Number(category) + 1}/${index}`}>
                <button key={subcategory.subCategory}>
                  <div className="flex flex-col gap-[16px] items-center cursor-pointer">
                    <div className="w-[242px] h-[242px] shadow rounded-full flex justify-center items-center">
                      <img
                        src={subcategory.subCategoryImg}
                        className="w-[172px] h-[172px] object-contain"
                        alt=""
                      />
                    </div>
                    <div className="text-bold text-[var(--dark-grey)] text-[16px] leading-[1.25]">
                      {subcategory.subCategory}
                    </div>
                  </div>
                </button>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="flex gap-[10px] my-[24px]">
        {filtersSelected.map((item, index) => (
          <button
            className="flex gap-[10px] border px-[16px] py-[4px] rounded-[20px]"
            onClick={() => deleteFilter(item)}
          >
            <p>Фільтр {item + 1}</p>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2L10 10"
                stroke="#01579B"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 10L10 2"
                stroke="#01579B"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        ))}
        {filtersSelected.length !== 0 && (
          <button className="link" onClick={() => setFiltersSelected([])}>
            Очистити фільтри
          </button>
        )}
        {filtersSelected.length === 0 && <div className="h-[26px]"></div>}
      </div>

      <div className="flex gap-[16px]">
        <div className="shadow p-[16px]">
          <p className="subsubtitle">За ціною</p>
          <div className="flex gap-[10px] items-center">
            <input
              type="number"
              className="border-none border max-w-[60px] px-[8px] py-[10px] text text-[var(--dark-grey)] text-[12px]"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
            />
            <span>-</span>
            <input
              type="number"
              className="border-none border max-w-[60px] px-[8px] py-[10px] text text-[var(--dark-grey)] text-[12px]"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
            <button className="button button-blue w-[60px]">OK</button>
          </div>
          <div className="flex mt-[17px] mb-[24px]">
            <input
              type="range"
              min={100}
              max={5000}
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              style={{
                appearance: "none",
                accentColor: "var(--action---secondary)",
                height: "2px",
                background: `linear-gradient(to right, var(--some---1)  ${
                  (minPrice / 5000) * 100
                }%, var(--action---secondary) ${
                  ((100 - minPrice) / 5000) * 100
                }%)`,
                border: "none",
              }}
              className="mr-[-2px]"
            />
            <input
              type="range"
              min={5000}
              max={10000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              style={{
                appearance: "none",
                accentColor: "var(--action---secondary)",
                height: "2px",
                background: `linear-gradient(to right, var(--action---secondary) ${
                  ((maxPrice - 5000) / 5000) * 100
                }%, var(--some---1) ${
                  ((100 - (maxPrice - 5000)) / 5000) * 100
                }%)`,
                border: "none",
              }}
            />
          </div>

          <div className="flex flex-col gap-[24px]">
            {isFilteredOpen.map((item, indexFilter) => (
              <div className="flex flex-col gap-[12px]">
                <button
                  className="flex justify-between"
                  onClick={() =>
                    setIsFilteredOpen((prev) =>
                      prev.map((item, i) => (i === indexFilter ? !item : item))
                    )
                  }
                >
                  <p className="subsubtitle">Фільтр {indexFilter + 1}</p>
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#999999"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>

                {isFilteredOpen[indexFilter] && (
                  <>
                    {filterExample.map((filter, index) => (
                      <>
                        {index < 4 && (
                          <div className="">
                            <div className="flex gap-[10px] mt-[16px] items-center">
                              <input
                                type="checkbox"
                                id={`checkbox${indexFilter}`}
                                className="cursor-pointer w-[20px] h-[20px] rounded-[3px] border-none border"
                                onChange={(e) =>
                                  toggleCheckbox(
                                    e.target.checked,
                                    indexFilter,
                                    index
                                  )
                                }
                                checked={checkboxStates[indexFilter][index]}
                              />
                              <label
                                htmlFor={`checkbox${indexFilter}`}
                                className="text-[var(--dark-grey)]"
                              >
                                {filter[0]}
                                <span className="text-500 ml-[8px] text-[var(--gray-scale---40)]">
                                  ({filter[1]})
                                </span>
                              </label>
                            </div>
                          </div>
                        )}
                        {isFiltersOpen[indexFilter] && index >= 4 && (
                          <div className="">
                            <div className="flex gap-[10px] mt-[16px] items-center">
                              <input
                                type="checkbox"
                                id={`checkbox${indexFilter}`}
                                className="cursor-pointer w-[20px] h-[20px] rounded-[3px] border-none border"
                                onChange={(e) =>
                                  toggleCheckbox(
                                    e.target.checked,
                                    indexFilter,
                                    index
                                  )
                                }
                                checked={checkboxStates[indexFilter][index]}
                              />
                              <label
                                htmlFor={`checkbox${indexFilter}`}
                                className="text-[var(--dark-grey)]"
                              >
                                {filter[0]}
                                <span className="text-500 ml-[8px] text-[var(--gray-scale---40)]">
                                  ({filter[1]})
                                </span>
                              </label>
                            </div>
                          </div>
                        )}
                      </>
                    ))}

                    <button
                      className="link text-right"
                      onClick={() =>
                        setIsFiltersOpen((prevArray) =>
                          prevArray.map((item, idx) =>
                            idx === indexFilter ? !item : item
                          )
                        )
                      }
                    >
                      Показати все
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="w-[100%]">
          {isDataReceived &&
            categoryProducts.map((product) => (
              <Cart
                product={product}
                onClickBuyBtn={onClickBuyBtn}
                id={product.id}
                onClickAddToFavorite={onClickAddToFavorite}
              />
            ))}

          {!isDataReceived && (
            <div className="text text-center text-[32px] text-[var(--gray-scale---60)] ">
              На жаль, товарів не знайдено
            </div>
          )}
        </div>
      </div>
      <style>
        {`
                   
                `}
      </style>
    </div>
  );
};

export default CaregoryPage;
