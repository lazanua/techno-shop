import { FC, useEffect, useState } from "react";
import { categories } from "../../data/categories";
import { ProductType } from "../../data/products";
import arrowDown from "../../assets/img/product-page/arrow-down.svg";
import arrowDonwGrey from "../../assets/img/product-page/arrow-down-grey.svg";
import filter1 from "../../assets/img/pages/search/filter1.svg";
import filter2 from "../../assets/img/pages/search/filter2.svg";
import Cart from "../../components/cards-components/Card/Card";

interface SearchProps {
  value: string;
  products: ProductType[];
  onClickBuyBtn: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
  onClickAddToFavorite: (
    event: React.MouseEvent<HTMLButtonElement>,
    product: ProductType
  ) => void;
}

const Search: FC<SearchProps> = ({
  value,
  products,
  onClickBuyBtn,
  onClickAddToFavorite,
}) => {
  const [visibleCategoriesCount, setVisibleCategoriesCount] = useState(
    categories.length
  );
  const [countSubCategoriesExample, setCountSubCategoriesExample] = useState<
    number[][]
  >([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    //рандомна кількість товарів для прикладу
    setCountSubCategoriesExample(
      categories.map((category) =>
        category.subCategories.map((_) => Math.round(Math.random() * 100))
      )
    );
  }, []);
  useEffect(() => {
    setSearchText(value);
    console.log(searchText);
  }, []);

  const [isOpenSubCategories, setOpenSubCategories] = useState(
    Array(categories.length).fill(false)
  );

  const filtersOptions = ["За рейтингом", "За алфавітом", "За ціною"];
  const [currentFilterOption, setCurrentFilterOption] = useState<number>(0);
  const [isFiltersOptionOpen, setFiltersOptionOpen] = useState(false);

  const [maxPrice, setMaxPrice] = useState(7500);
  const [minPrice, setMinPrice] = useState(2500);

  const [filtersSelected, setFiltersSelected] = useState<number[]>([]);
  const filterExample = [
    ["Lorem ipsum", "123"],
    ["Dolor sit", "34"],
    ["Amet", "56"],
    ["Consectetur adipiscing", "67"],
    ["Nihil cu autem", "78"],
    ["Distinctio", "112"],
  ];
  const [checkboxStates, setCheckboxStates] = useState<boolean[][]>([
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
  ]);
  const [isFiltersOpen, setIsFiltersOpen] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  const [isFilteredOpen, setIsFilteredOpen] = useState<boolean[]>([
    true,
    true,
    true,
    true,
  ]);
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
  const deleteFilter = (index: number) => {
    const newItems = filtersSelected.filter((i) => i !== index);
    setFiltersSelected(newItems);
  };
  return (
    <div className="container">
      <div className="subtitle">Результат для пошуку ({searchText})</div>
      <p className="text">Знайдено 28 товарів</p>
      <div className="flex justify-between">
        <div className="flex gap-[10px] my-[24px] ">
          {filtersSelected.map((item) => (
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
        <div className="flex items-center gap-[32px]">
          <div
            className="relative flex border justify-between items-center py-[8px] px-[13px] w-[242px]"
            onMouseEnter={() => setFiltersOptionOpen(true)}
            onMouseLeave={() => setFiltersOptionOpen(false)}
          >
            <p>{filtersOptions[currentFilterOption]}</p>
            <img src={arrowDonwGrey} className="mr-[8px]" alt="" />
            {isFiltersOptionOpen && (
              <div className="absolute left-0 top-[34px] z-40">
                {filtersOptions.map((option, index) => (
                  <button
                    key={option}
                    className="w-[100%] text-start py-[8px] px-[13px] hover:bg-[var(--soft)] bg-white "
                    onClick={() => setCurrentFilterOption(index)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="flex items-center gap-[13px]">
            <img src={filter1} alt="" />
            <img src={filter2} alt="" />
          </div>
        </div>
      </div>

      <div className="flex gap-[16px] items-start min-h-[200hv]">
        <div className="max-w-[242px]">
          <div className="contents">
            <div className="shadow p-[16px] mb-[16px]">
              <p className="pl-[30px] text">
                Усі результати{" "}
                <span className="text text-[14px] text-[var(--gray-scale---40)]">
                  (28)
                </span>
              </p>
              <div className="flex flex-col">
                {categories.map((category, index) => (
                  <div className="contents" key={category.categoryName}>
                    {index < visibleCategoriesCount && (
                      <div className="contents">
                        <div className="flex items-center gap-[6px] mb-[16px] cursor-pointer mt-[24px]">
                          <img
                            src={`/img/categories-icons/${index + 1}.svg`}
                            alt=""
                          />
                          <div className="text">{category.categoryName}</div>
                        </div>
                        <div className="flex flex-col gap-[8px] pl-[30px] ">
                          {category.subCategories.map(
                            (subcategory, subIndex) => (
                              <div className="contents" key={subIndex}>
                                {!isOpenSubCategories[index] &&
                                  subIndex < 1 && (
                                    <div className="flex text text-[12px] gap-[16px] cursor-pointer items-center">
                                      <p className="">
                                        {subcategory.subCategory}
                                      </p>
                                      {countSubCategoriesExample.length !==
                                        0 && (
                                        <p className="text-[var(--gray-scale---40)]">
                                          (
                                          {
                                            countSubCategoriesExample[index][
                                              subIndex
                                            ]
                                          }
                                          )
                                        </p>
                                      )}
                                    </div>
                                  )}
                                {isOpenSubCategories[index] && (
                                  <div className="flex text text-[12px] gap-[16px] cursor-pointer items-center">
                                    <p className="">
                                      {subcategory.subCategory}
                                    </p>
                                    {countSubCategoriesExample.length !== 0 && (
                                      <p className="text-[var(--gray-scale---40)]">
                                        (
                                        {
                                          countSubCategoriesExample[index][
                                            subIndex
                                          ]
                                        }
                                        )
                                      </p>
                                    )}
                                  </div>
                                )}
                              </div>
                            )
                          )}
                        </div>
                        <button
                          className="pl-[30px] text-[var(--action---secondary)] mt-[8px] flex items-center gap-[5px]"
                          onClick={() =>
                            setOpenSubCategories((prev) =>
                              prev.map((val, i) => (i === index ? !val : val))
                            )
                          }
                        >
                          <span>
                            {isOpenSubCategories[index] ? "Згорнути" : "Ще"}
                          </span>
                          <img
                            src={arrowDown}
                            className={`${
                              isOpenSubCategories[index] ? "rotate-180" : ""
                            }`}
                            alt=""
                          />
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <button
                className="link mt-[24px] flex gap-[5px]"
                onClick={() =>
                  setVisibleCategoriesCount((prev) =>
                    prev === categories.length ? 4 : categories.length
                  )
                }
              >
                <span className="">
                  {visibleCategoriesCount === categories.length
                    ? "Сховати"
                    : "Усі категорії"}
                </span>
                <img
                  src={arrowDown}
                  className={`${
                    visibleCategoriesCount === categories.length
                      ? "rotate-180"
                      : ""
                  }`}
                  alt=""
                />
              </button>
            </div>
            <div className="flex flex-col shadow p-[16px]">
              <div className="contents">
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
                    className="mr-[-2px] w-[105px]"
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
                    className="w-[105px]"
                  />
                </div>
              </div>
              {isFilteredOpen.map((_, indexFilter) => (
                <div className="flex flex-col gap-[12px]">
                  <button
                    className="flex justify-between"
                    onClick={() =>
                      setIsFilteredOpen((prev) =>
                        prev.map((item, i) =>
                          i === indexFilter ? !item : item
                        )
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
        </div>
        <div className="grid grid-cols-5 gap-[16px]">
          {products.map((product) => (
            <Cart
              product={product}
              onClickBuyBtn={onClickBuyBtn}
              id={product.id}
              onClickAddToFavorite={onClickAddToFavorite}
              onClickAddToCompare={onClickAddToFavorite}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
