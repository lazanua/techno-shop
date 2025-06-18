import { FC, useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import arrowRight from "../../assets/img/product-page/arrow-right.svg";
import { categories } from "../../data/categories";
import { ProductType } from "../../data/products";
import arrowDown from "../../assets/img/product-page/arrow-down-grey.svg";
import filterIcon1 from "../../assets/img/pages/category/filter1.svg";
import filterIcon2 from "../../assets/img/pages/category/filter2.svg";
import filterIcon3 from "../../assets/img/pages/category/filter3.svg";
import filterIconActive2 from "../../assets/img/pages/category/filterActive2.svg";
import filterIconActive3 from "../../assets/img/pages/category/filterActive3.svg";
import crossRed from "../../assets/img/pages/category/crossRed.svg";
import crossBlue from "../../assets/img/pages/category/crossBlue.svg";
import Card from "../../components/cards-components/Card/Card";
import "./index.css";
import CardWide from "../../components/cards-components/CardWide/CardWide";

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
  const isOpenSubCategory = false;
  let { category } = useParams<{ category: string }>();
  const [isFilteredOpen, setIsFilteredOpen] = useState<boolean[]>([
    true,
    true,
    true,
    true,
  ]);

  const [cardDisplayType, setCardDisplayType] = useState(0);

  const [filtersSelected, setFiltersSelected] = useState<number[]>([]);
  const currentCategory = categories.find(
    (item) => item.id === Number(category) + 1
  );
  const sortType = ["За рейтингом", "За алфавітом", "За ціною"];
  const [currentSortType, setCurrentSortType] = useState(0);
  const [isSortTypeOpen, setIsSortTypeOpen] = useState(false);
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
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
  ]);
  const [isDataReceived, setIsDatareceived] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  const [isOpenFilterMobile, setIsOpenFilterMobile] = useState(false);

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
        setIsDatareceived(false);
      }
    };

    fetchData();
  }, [category]);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const deleteFilter = (index: number) => {
    const newItems = filtersSelected.filter((i) => i !== index);
    setFiltersSelected(newItems);

    setCheckboxStates((prev) =>
      prev.map((row, i) => (i === index ? row.map(() => false) : row))
    );
  };

  const toOpenFilterMobile = () => {
    window.scrollTo(0, 0);
    setIsOpenFilterMobile(true);
  };

  const cleanAllFilters = () => {
    setFiltersSelected([]);
    setCheckboxStates((prev) => prev.map((row) => row.map(() => false)));
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
  useEffect(() => {
    switch (currentSortType) {
      case 1:
        const sorted = [...categoryProducts].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        setCategoryProducts(sorted);
        console.log("000");
        break;
      case 0:
        setCategoryProducts((prev) =>
          prev.sort((a, b) => {
            if (a.rating === undefined) return 1;
            if (b.rating === undefined) return -1;
            return a.rating - b.rating;
          })
        );
        break;
      case 2:
        setCategoryProducts((prev) =>
          prev.sort((a, b) => {
            if (a.price === undefined) return 1;
            if (b.price === undefined) return -1;
            return a.price - b.price;
          })
        );
        break;
    }
  }, [currentSortType]);

  const clickOnCrossFilterModal = () => {
    cleanAllFilters();
    setIsOpenFilterMobile(false);
  };

  return (
    <div className="container text">
      <div className="flex items-center mt-[24px] gap-[10.5px] md:mb-[51px] mb-[24px]">
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
          <div className="grid justify-center md:justify-start grid-cols-2 md:flex gap-[16px] flex-wrap">
            {currentCategory?.subCategories.map((subcategory, index) => (
              <Link to={`/categories/${Number(category) + 1}/${index}`}>
                <button key={subcategory.subCategory}>
                  <div className="flex flex-col gap-[16px] items-center cursor-pointer">
                    <div className="w-[156px] h-[156px] xl:w-[242px] xl:h-[242px] shadow rounded-full flex justify-center items-center">
                      <img
                        src={subcategory.subCategoryImg}
                        className="w-[110px] h-[110px] xl:w-[172px] xl:h-[172px] object-contain"
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
      <div className="flex justify-between items-center">
        <div className="hidden md:flex gap-[10px] my-[24px]">
          {filtersSelected.map((item) => (
            <button
              className="flex gap-[10px] border px-[16px] py-[4px] rounded-[20px]"
              onClick={() => deleteFilter(item)}
            >
              <p>Фільтр {item + 1}</p>
              <img src={crossBlue} alt="" />
            </button>
          ))}
          {filtersSelected.length !== 0 && (
            <button className="link" onClick={() => cleanAllFilters()}>
              Очистити фільтри
            </button>
          )}
          {filtersSelected.length === 0 && <div className="h-[26px]"></div>}
        </div>

        <div className="flex my-[24px] md:my-0 items-center gap-[16px]">
          <button
            onClick={() => toOpenFilterMobile()}
            className="bg-[var(--action---secondary)] md:hidden hover:bg-[--action-secondary-hover] transition-colors flex items-center justify-center w-[70px] h-[42px] rounded-[4px] "
          >
            <img src={filterIcon1} alt="" />
          </button>
          <div className="z-[5]" onMouseLeave={() => setIsSortTypeOpen(false)}>
            <button
              onMouseEnter={() => setIsSortTypeOpen(true)}
              className="flex rounded-[4px] w-[242px] items-center border justify-between pl-[8px] pr-[16px] py-[13px]"
            >
              <p>{sortType[currentSortType]}</p>
              <img src={arrowDown} alt="" />
            </button>
            <div className="flex flex-col absolute z-40 border bg-white rounded-[4px]">
              {isSortTypeOpen &&
                sortType.map((sortType, index) => (
                  <button
                    className="text-start px-[8px] py-[13px] w-[242px] hover:bg-[var(--gray-scale---10)] transition"
                    key={sortType}
                    onClick={() => setCurrentSortType(index)}
                  >
                    {sortType}
                  </button>
                ))}
            </div>
          </div>
          <button
            onClick={() => setCardDisplayType(0)}
            className="rounded-[4px] p-[6px]"
            style={{
              border:
                cardDisplayType === 0
                  ? "1.50px solid var(--action---secondary)"
                  : "",
            }}
          >
            <img
              src={cardDisplayType === 0 ? filterIconActive2 : filterIcon2}
              alt=""
            />
          </button>
          <button
            onClick={() => setCardDisplayType(1)}
            className="rounded-[4px] p-[6px]"
            style={{
              border:
                cardDisplayType === 1
                  ? "1.50px solid var(--action---secondary)"
                  : "",
            }}
          >
            <img
              src={cardDisplayType === 1 ? filterIconActive3 : filterIcon3}
              alt=""
            />
          </button>
        </div>
      </div>

      <div className="flex gap-[16px] z-10">
        <div
          className={`${
            width < 768 && !isOpenFilterMobile ? "hidden" : ""
          } absolute md:static top-0  bg-white w-full overflow-auto md:overflow-visible h-[100hv] md:h-auto md:z-0 z-10 md:w-auto left-0 shadow md:p-[16px]`}
        >
          <div className="block md:contents p-[16px]">
            <div className="flex justify-between md:hidden items-center">
              <p className="text-semibold text-[18px] text-[var(--dark)]">
                Фільтри
              </p>
              <button onClick={() => clickOnCrossFilterModal()}>
                <img src={crossRed} alt="" />
              </button>
            </div>
            <div className="md:hidden flex justify-between items-center">
              <div className="flex flex-col md:flex-row gap-[10px] my-[24px]">
                <div className="flex flex-wrap gap-[10px] md:contents">
                  {filtersSelected.map((item) => (
                    <button
                      className="flex gap-[10px] border px-[16px] py-[4px] rounded-[20px]"
                      onClick={() => deleteFilter(item)}
                    >
                      <p>Фільтр {item + 1}</p>
                      <img src={crossBlue} alt="" />
                    </button>
                  ))}
                </div>

                {filtersSelected.length !== 0 && (
                  <button
                    className="link text-start mt-[10px] md:mt-0"
                    onClick={() => cleanAllFilters()}
                  >
                    Очистити фільтри
                  </button>
                )}
                {filtersSelected.length === 0 && (
                  <div className="h-[26px]"></div>
                )}
              </div>
            </div>
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
                              <div
                                className="flex gap-[10px] items-center"
                                onClick={() => console.log("tfhvnjgt")}
                              >
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
                              <div className="flex gap-[10px] items-center">
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
                        {isFiltersOpen[indexFilter]
                          ? "Згорнути"
                          : "Показати все"}
                      </button>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex bg-[var(--soft)] mt-[26px] p-[16px] md:hidden w-full justify-between ">
            <button
              className="button button-blue w-[156px]"
              onClick={() => cleanAllFilters()}
            >
              ОЧИСТИТИ
            </button>
            <button
              onClick={() => setIsOpenFilterMobile(false)}
              className="button-light-blue w-[156px] uppercase"
            >
              Застосувати
            </button>
          </div>
        </div>
        <div
          className={`flex ${
            cardDisplayType === 0 ? "flex-row" : "flex-col w-full"
          } gap-[16px]`}
        >
          {isDataReceived &&
            cardDisplayType === 1 &&
            categoryProducts.map((product) => (
              <CardWide
                product={product}
                onClickBuyBtn={onClickBuyBtn}
                id={product.id}
                onClickAddToFavorite={onClickAddToFavorite}
                onClickAddToCompare={onClickAddToFavorite}
              />
            ))}
          {isDataReceived &&
            cardDisplayType === 0 &&
            categoryProducts.map((product) => (
              <Card
                product={product}
                onClickBuyBtn={onClickBuyBtn}
                id={product.id}
                onClickAddToFavorite={onClickAddToFavorite}
                onClickAddToCompare={onClickAddToFavorite}
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
