import { FC, useState, useEffect } from "react";
import Logo from "../../assets/img/Logo.svg";
import "./index.module.css";
import icon1 from "../../assets/img/header/header-icon1.svg";
import catalogIcon from "../../assets/img/header/catalog-icons.svg";
import icon3 from "../../assets/img/header/header-icon3.svg";
import basketIconMobile from "../../assets/img/header/basket-icon-mobile.svg";
import favoritesIcon from "../../assets/img/header/favorites-icon.png";
import arrowDown from "../../assets/img/header/arrow-down-dark.svg";
import telephoneIconMobile from "../../assets/img/header/telephone-icon-mobile.svg";
import categoriesIconDark from "../../assets/img/header/categories-icon-dark.svg";
import Catalog from "../Catalog/Catalog";
import Modal from "../Modal/Modal";
import Basket from "../Modals/Basket/Basket";
import peopleIcon from "../../assets/img/header/people-icon.svg";
import logoWhite from "../../assets/img/header/logo-mobile-white.svg";
import searchIconMobile from "../../assets/img/header/search-icon-mobile.svg";
import {
  BasketsProduct,
  ComparProduct,
  ProductType,
} from "../../data/products";
import Login from "../Modals/Login/Login";
import SignUp from "../Modals/SignUp/SignUp";
import { Link } from "react-router-dom";
import { categories } from "../../data/categories";
import Favorites from "../Modals/Favorites/Favorites";
import arrowLeft from "../../assets/img/header/arrow-left.svg";
import SearchCart from "../SearchCart/SearchCart";
import CompareList from "../Modals/CompareList/CompareList";
import ModalMobile from "../ModalMobile/ModalMobile";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import CatalogModal from "../Modals/CatalogModal/CatalogModal";
import PhoneNumbers from "../Modals/PhoneNumbers/PhoneNumbers";
interface HeaderProps {
  toggleOverlay: () => void;
  usersProduct: BasketsProduct[];
  favoriteProducts: ProductType[];
  changeCount: [
    addProduct: (id: number) => void,
    removeProduct: (id: number) => void,
    deleteProduct: (id: number) => void,
    handleChangeProduct: (id: number, value: string) => void
  ];
  productToBasket: (product: BasketsProduct) => void;
  deleteFavoriteProduct: (id: number) => void;
  productsData: ProductType[];
  searchValue: string;
  changeSearchValue: (value: string) => void;
  comparProducts: ComparProduct[];
  deleteComparList: (index: number) => void;
}
export type ModalType =
  | "sign-up"
  | "login"
  | "basket"
  | "favorites"
  | "compare"
  | "catalog"
  | "phones";
const Header: FC<HeaderProps> = ({
  toggleOverlay,
  usersProduct,
  favoriteProducts,
  changeCount,
  productToBasket,
  deleteFavoriteProduct,
  productsData,
  searchValue,
  changeSearchValue,
  comparProducts,
  deleteComparList,
}) => {
  const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);

  const [language, setLanguage] = useState<"eng" | "ua">("ua");
  const [isCatalogOpen, setIsOpenCatalog] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModalMobile, setShowModalMobile] = useState(false);
  const [foundedProducts, setFoundedProducts] = useState<ProductType[]>([]);
  const [modalType, setModalType] = useState<ModalType>("basket");

  const [foundedCategories, setFoundedCategories] = useState<
    { name: string; index: number }[]
  >([]);
  const [isComprisonsOpen, setIsComprisonsOpen] = useState<boolean>(false);

  const [hoverCategory, setHoverCategory] = useState<number>(1);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };
  const toggleModalMobile = () => {
    setShowModalMobile((prev) => !prev);
  };
  const ClickOpenCatalog = () => {
    if (isMobile) {
      showTheModal("catalog");
    } else {
      setIsOpenCatalog((prev) => !prev);
      toggleOverlay();
    }
  };
  const MouseLeave = () => {
    setIsOpenCatalog(false);
    toggleOverlay();
  };

  const showTheModal = (modalType: ModalType) => {
    setModalType(modalType);
    setShowModal(true);
  };
  const showTheModalMobile = (modalType: ModalType) => {
    setModalType(modalType);
    setShowModalMobile(true);
  };

  useEffect(() => {
    if (searchValue === "") {
      setFoundedProducts([]);
      setFoundedCategories([]);
      setHoverCategory(-1);
    } else {
      setFoundedCategories((prev) =>
        prev.filter((item) =>
          item.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
      categories.forEach((category, index) => {
        if (
          category.categoryName
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        ) {
          let isFoundedCategoriesIncludes = false;

          foundedCategories.forEach((item) => {
            if (item.name.includes(category.categoryName)) {
              isFoundedCategoriesIncludes = true;
            }
          });
          if (!isFoundedCategoriesIncludes) {
            setFoundedCategories((prev) => [
              ...prev,
              { name: category.categoryName, index: index },
            ]);
          }
        }
      });

      //шукаємо продукт
      setFoundedProducts(
        productsData.filter((product) =>
          product.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
      // if (foundedCategories && foundedProducts) {
      // }
    }
  }, [searchValue]);

  const toSearchPage = () => {
    if (searchValue !== "") {
      window.location.href = "/search";
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (searchValue !== "") {
        window.location.href = "/search";
      }
    }
  };

  const [isNumberOpen, setIsNumberOpen] = useState<boolean>(false);
  return (
    <header className="sticky z-10 w-[100%] top-0 md:mb-[32px]">
      <div className="relative">
        <div className="bg-dark">
          <div className="container block md:hidden">
            <div className="flex justify-between items-center py-[16px]">
              <div className="">
                <BurgerMenu
                  showTheModal={showTheModal}
                  isMobile={isMobile}
                  showTheModalMobile={showTheModalMobile}
                />
              </div>
              <Link to="/">
                <img src={logoWhite} alt="" />
              </Link>

              <button onClick={() => showTheModalMobile("phones")}>
                <img src={telephoneIconMobile} alt="" />
              </button>
            </div>
          </div>
          <div className="container">
            <div className="lg:flex hidden header-top justify-between  text-light py-[8px] items-center ">
              <nav className="flex justify-between items-center gap-[24px]">
                <div className="mt-[-6px]">
                  <BurgerMenu
                    showTheModal={showTheModal}
                    isMobile={isMobile}
                    showTheModalMobile={showTheModalMobile}
                  />
                </div>
                <Link to="/discounts">Акції</Link>
                <Link to="/contacts">Контакти</Link>
                <a href="">Кредити</a>
                <a href="">Оплата та доставка</a>
                <a href="">Допомога</a>
                <a href="">Покупка вживаного</a>
              </nav>
              <div className="flex gap-[36px] items-center">
                <div className="flex gap-[4px]">
                  <button
                    className={`${
                      language === "eng" ? "text-[var(--soft)]" : "opacity-50"
                    }`}
                    onClick={() => setLanguage("eng")}
                  >
                    ENG
                  </button>
                  <span className="">/</span>
                  <button
                    className={`${
                      language === "ua" ? "text-[var(--soft)]" : "opacity-50"
                    }`}
                    onClick={() => setLanguage("ua")}
                  >
                    UA
                  </button>
                </div>
                <button className="" onClick={() => showTheModal("login")}>
                  <img src={peopleIcon} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[var(--dark)] lg:bg-white py-[27.5px] lg:shadow">
          <div className="container">
            <div className=" flex justify-between">
              <div className="md:block hidden">
                <Link to="/">
                  <img src={Logo} className="" alt="" />
                </Link>
              </div>

              <div className="">
                <button
                  onClick={() => ClickOpenCatalog()}
                  className="flex transition-all hover:bg-[--action-primary-hover] bg-[var(--action---primary)] items-center gap-[8px] py-[9px] px-[12px] rounded-[4px]"
                >
                  <span className="uppercase text-[var(--soft)]">
                    Каталог товарів
                  </span>
                  <img src={catalogIcon} alt="" />
                </button>
              </div>
              <button className="block md:hidden">
                <img src={searchIconMobile} alt="" />
              </button>
              <div className="h-[42px] relative hidden md:flex">
                <input
                  type="text"
                  placeholder="Пошук"
                  className="xl:w-[710px] px-[10px] text-[14px] text-bold text-[var(--dark)]"
                  value={searchValue}
                  onChange={(e) => changeSearchValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <button
                  className="bg-[var(--action---secondary)] w-[48px] h-[42px] flex justify-center items-center"
                  style={{ borderRadius: "0 4px 4px 0" }}
                  onClick={() => toSearchPage()}
                >
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.668 9.66601C15.668 13.2559 12.7578 16.166 9.16797 16.166C5.57812 16.166 2.66797 13.2559 2.66797 9.66601C2.66797 6.07616 5.57812 3.16602 9.16797 3.16602C12.7578 3.16602 15.668 6.07616 15.668 9.66601Z"
                      stroke="#F4F8FB"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.9154 18.4173L14.582 15.084"
                      stroke="#F4F8FB"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>

                {(foundedCategories.length !== 0 ||
                  foundedProducts.length !== 0) && (
                  <div
                    className={`absolute top-[42px] left-0 bg-white w-[100%] shadow`}
                  >
                    {foundedCategories.length !== 0 && (
                      <div className="">
                        <div className="flex gap-[4px] mb-[16px] pt-[12px] pl-[12px]">
                          <img src={categoriesIconDark} alt="" />
                          <p className="subtitle-blue">Категорії</p>
                        </div>
                        <div className="">
                          {foundedCategories.map((item, index) => (
                            <Link to={`/categories/${item.index}`}>
                              <div
                                className="flex justify-between items-center py-[12px] pl-[24px] pr-[17px] cursor-pointer hover:bg-[var(--soft)] hover:text-[var(--action---secondary)]"
                                key={item.name}
                                onMouseEnter={() => setHoverCategory(index)}
                                onMouseLeave={() => setHoverCategory(-1)}
                              >
                                <div className="flex gap-[10px]">
                                  <img
                                    src={`/img/categories-icons/${
                                      item.index + 1
                                    }${
                                      hoverCategory === index ? "-active" : ""
                                    }.svg`}
                                    alt=""
                                    className="w-[20px] h-[20px]"
                                  />
                                  <p className="text text-[16px] text-[var(--dark)]">
                                    {item.name}
                                  </p>
                                </div>
                                <img src={arrowLeft} alt="" />
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                    {foundedProducts.length !== 0 && (
                      <div className="grid grid-cols-6 gap-[22px] p-[12px]">
                        {foundedProducts.map((product, index) => (
                          <div className="" key={product.title}>
                            {index < 6 && <SearchCart product={product} />}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
              <button
                className=" relative bg-white hidden md:block"
                onMouseEnter={() => setIsNumberOpen(true)}
                onMouseLeave={() => setIsNumberOpen(false)}
              >
                <div className="flex items-center gap-[16px]">
                  <span className="subtitle-blue">050 065 87 96</span>
                  <img src={arrowDown} alt="" />
                </div>
                {isNumberOpen && <PhoneNumbers mobile={showModalMobile} />}
              </button>
              <div
                className="relative hidden md:block"
                onMouseEnter={() => setIsComprisonsOpen(true)}
                onMouseLeave={() => setIsComprisonsOpen(false)}
              >
                <img src={icon1} alt="" />
                {comparProducts.length !== 0 && (
                  <div className="absolute flex items-center justify-center w-[20px] h-[20px] bg-[var(--accent---orange)] rounded-[50%] top-[-9px] right-[-6px]">
                    <span className="text-[var(--dark)] leading-[0.8] text-900 text-[12px]">
                      {comparProducts.length}
                    </span>
                  </div>
                )}
                {isComprisonsOpen && !isMobile && (
                  <CompareList
                    comparProducts={comparProducts}
                    deleteComparList={deleteComparList}
                  />
                )}
              </div>
              <button
                className="hidden md:block   relative"
                onClick={() => showTheModal("favorites")}
              >
                <img src={favoritesIcon} alt="" />
                {favoriteProducts.length !== 0 && (
                  <div className="absolute flex items-center justify-center w-[20px] h-[20px] bg-[var(--accent---orange)] rounded-[50%] top-[-9px] right-[-6px]">
                    <span className="text-[var(--dark)] leading-[0.8] text-900 text-[12px]">
                      {favoriteProducts.length}
                    </span>
                  </div>
                )}
              </button>
              <button
                className="relative"
                onClick={() => showTheModal("basket")}
              >
                <img
                  src={basketIconMobile}
                  className="block md:hidden"
                  alt=""
                />
                <img className="hidden md:block" src={icon3} alt="" />
                {usersProduct.length !== 0 && (
                  <div className="absolute w-[20px] h-[20px] bg-[var(--action---primary)] rounded-[50%] top-[-9px] right-[-6px]">
                    <span className="text-[var(--soft)] md:text-[var(--dark)] leading-[0.8] text-900 text-[12px]">
                      {usersProduct.reduce((sum, obj) => sum + obj.count, 0)}
                    </span>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>

        {isCatalogOpen && !isMobile && (
          <div
            className="absolute t-0 left-[50%] translate-x-[-50%]"
            onMouseLeave={() => MouseLeave()}
          >
            <Catalog />
          </div>
        )}
      </div>
      <Modal show={showModal} onClose={toggleModal}>
        {modalType === "basket" && (
          <Basket
            usersProduct={usersProduct}
            changeCount={changeCount}
            closeModal={toggleModal}
          />
        )}
        {modalType === "favorites" && (
          <Favorites
            favoritesProducts={favoriteProducts}
            closeModal={toggleModal}
            productToBasket={productToBasket}
            deleteFavoriteProduct={deleteFavoriteProduct}
          />
        )}
        {modalType === "login" && (
          <Login closeModal={toggleModal} showTheModal={showTheModal} />
        )}
        {modalType === "sign-up" && (
          <SignUp closeModal={toggleModal} showTheModal={showTheModal} />
        )}
        {modalType === "catalog" && <CatalogModal />}
      </Modal>
      {modalType === "phones" && (
        <ModalMobile show={showModalMobile} onClose={toggleModalMobile}>
          <PhoneNumbers mobile={showModalMobile} />
        </ModalMobile>
      )}
      {modalType === "compare" && (
        <ModalMobile show={showModalMobile} onClose={toggleModalMobile}>
          <CompareList
            comparProducts={comparProducts}
            deleteComparList={deleteComparList}
          />
        </ModalMobile>
      )}
    </header>
  );
};

export default Header;
