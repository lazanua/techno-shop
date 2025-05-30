import { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BasketsProduct, ProductType } from "../../data/products";

import ParametrComponent from "../../components/ParametrComponent/ParametrComponent";

import "./index.css";
import MiniCartProduct from "../../components/MiniCartProduct/MiniCartProduct";
import ReviewsTab from "../../components/Tabs/ReviewsTab/ReviewsTab";
import CreditTab from "../../components/CreditTabs/CreditTab";
import Modal from "../../components/Modal/Modal";
import WriteReviewForm from "../../components/Modals/WriteReviewForm/WriteReviewForm";
import ReportUser from "../../components/Modals/ReportUser/ReportUser";
import Main from "../../components/Tabs/Main/Main";
import CreditInfo from "../../components/Modals/CreditInfo/CreditInfo";
import { categories } from "../../data/categories";
import ImagesModal from "../../components/Modals/ImagesModal/ImagesModal";
import { Link } from "react-router-dom";
import Cart from "../../components/Cart/Cart";
import arrowRight from "../../assets/img/product-page/arrow-right.svg";
export type ModalName =
  | ""
  | "write-review"
  | "report"
  | "credit-info"
  | "images";
export type Tab = "main" | "desc" | "reviews" | "credit";

interface ProductPageProps {
  productToBasket: (product: BasketsProduct) => void;
  addFavoriteProduct: (product: ProductType) => void;
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

const ProductPage: FC<ProductPageProps> = ({
  productToBasket,
  addFavoriteProduct,
  products,
  onClickBuyBtn,
  onClickAddToFavorite,
}) => {
  const { id } = useParams<{ id: string }>();
  const index = Number(id) - 1;
  const [currentProduct, setCurrentProduct] = useState<ProductType>();
  const [tab, setTab] = useState<Tab>("main");
  const [currentModal, setCurrentModal] = useState<ModalName>("");
  const [similarProducts, setSimilarProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    if (products.length !== 0) {
      setCurrentProduct(products[index]);
    }
  }, [products]);

  useEffect(() => {
    if (products.length !== 0) {
      for (let i = 0; i < 7; i++) {
        if (products[i].id !== currentProduct?.id) {
          setSimilarProducts((prev) => [...prev, products[i]]);
        }
      }
      setSimilarProducts((prev) => prev.filter((_, index) => index < 6));
    }
  }, [products]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tab]);
  const [showModal, setShowModal] = useState(false);

  const openModal = (modalName: ModalName) => {
    setShowModal(true);
    setCurrentModal(modalName);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const handleSetTab = (str: Tab) => {
    setTab(str);
  };
  console.log(currentProduct?.categoryId);
  return (
    <div className="">
      {currentProduct && (
        <div className="container">
          <div className="flex gap-[10.5px] items-center mb-[51px]">
            <Link to="/">
              <span className="link">Головна</span>
            </Link>
            <img src={arrowRight} alt="" />
            <Link to={`/categories/${currentProduct.categoryId - 1}`}>
              <span className="link">
                {categories[currentProduct.categoryId - 1].categoryName}
              </span>
            </Link>
            <img src={arrowRight} alt="" />
            <Link
              to={`/categories/${currentProduct.categoryId}/${
                currentProduct.subCategoryId - 1
              }`}
            >
              <span className="link">{currentProduct.subcategory}</span>
            </Link>
            <img src={arrowRight} alt="" />
            <p className="text text-[14px] text-[var(--gray-scale---40)]">
              {currentProduct.title}
            </p>
          </div>
          <div className="text-semibold mt-[24px] md:mt-0 text-[var(--dark)] text-[24px] md:text-[32px] leading-[1.12] mb-[12px]">
            {currentProduct.title}
          </div>
          <div className="flex gap-[14px] items-center mb-[24px]">
            <div className="flex gap-[5px]">
              {currentProduct.rating &&
                Array.from({ length: currentProduct.rating }, (_, index) => (
                  <div className="flex gap-[5px]" key={index}>
                    <div>
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.00065 1.33203L10.0607 5.50536L14.6673 6.1787L11.334 9.42537L12.1207 14.012L8.00065 11.8454L3.88065 14.012L4.66732 9.42537L1.33398 6.1787L5.94065 5.50536L8.00065 1.33203Z"
                          fill="#FFCD1B"
                          stroke="#FFCD1B"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              {currentProduct.rating &&
                Array.from(
                  { length: 5 - currentProduct.rating },
                  (_, index) => (
                    <div className="flex gap-[5px] ">
                      <div key={index}>
                        <svg
                          width="16"
                          height="15"
                          viewBox="0 0 16 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.99967 1.33337L10.0597 5.50671L14.6663 6.18004L11.333 9.42671L12.1197 14.0134L7.99967 11.8467L3.87967 14.0134L4.66634 9.42671L1.33301 6.18004L5.93967 5.50671L7.99967 1.33337Z"
                            fill="#D9D9D9"
                            stroke="#D9D9D9"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  )
                )}
            </div>
            <div className="text text-[12px] leading-[1.13] text-[var(--gray-scale---40)]">
              Відгуків: {currentProduct.reviewsCount}
            </div>
          </div>
          <div className="overflow-x-auto no-scrollbar">
            <div className="flex mb-[24px] w-auto md:w-full min-w-[436px] ">
              <button
                className={`tab px-[12px] py-[16px] w-[170px] ${
                  tab === "main" && "active-tab"
                }`}
                onClick={() => setTab("main")}
              >
                Все про товар
              </button>
              <button
                className={`tab px-[12px] py-[16px] ${
                  tab === "desc" && "active-tab"
                }`}
                onClick={() => setTab("desc")}
              >
                Характеристики
              </button>
              <button
                className={`tab px-[12px] py-[16px]  ${
                  tab === "reviews" && "active-tab"
                }`}
                onClick={() => setTab("reviews")}
              >
                Відгуки
              </button>
              <button
                className={`tab px-[12px] py-[16px] ${
                  tab === "credit" && "active-tab"
                }`}
                onClick={() => setTab("credit")}
              >
                Кредит
              </button>
              <div
                className="md:w-[100%] w-auto"
                style={{ borderBottom: "1px solid var(--gray-scale---10)" }}
              ></div>
            </div>
          </div>
          {tab === "main" && (
            <Main
              currentProduct={currentProduct}
              handleSetTab={handleSetTab}
              openModal={openModal}
              productToBasket={productToBasket}
              addFavoriteProduct={addFavoriteProduct}
            />
          )}
          {tab === "desc" && (
            <div className="flex gap-[16px]">
              <div className="w-[100%]">
                <h3 className="subtitle">Характеристики</h3>
                {currentProduct.parameters.map((parametr, index) => (
                  <ParametrComponent value={parametr} index={index} />
                ))}
              </div>
              <div className="hidden md:contents">
                <MiniCartProduct
                  product={currentProduct}
                  addFavoriteProduct={addFavoriteProduct}
                  productToBasket={productToBasket}
                />
              </div>
            </div>
          )}
          {tab === "reviews" && (
            <ReviewsTab
              product={currentProduct}
              openModal={openModal}
              productToBasket={productToBasket}
              addFavoriteProduct={addFavoriteProduct}
            />
          )}
          {tab === "credit" && (
            <CreditTab
              product={currentProduct}
              openModal={openModal}
              addFavoriteProduct={addFavoriteProduct}
              productToBasket={productToBasket}
            />
          )}
          <h2 className="subtitle">Схожі товари</h2>
          <div className="grid grid-cols-6 gap-[16px] ">
            {similarProducts.map((product) => (
              <Cart
                product={product}
                onClickBuyBtn={onClickBuyBtn}
                id={currentProduct.id}
                onClickAddToFavorite={onClickAddToFavorite}
                onClickAddToCompare={onClickAddToFavorite}
              />
            ))}
          </div>
        </div>
      )}
      {currentProduct && (
        <Modal show={showModal} onClose={toggleModal}>
          {currentModal === "write-review" && (
            <WriteReviewForm closeModal={closeModal} />
          )}
          {currentModal === "credit-info" && <CreditInfo />}
          {currentModal === "report" && <ReportUser closeModal={closeModal} />}
          {currentModal === "images" && (
            <ImagesModal
              product={currentProduct}
              productToBasket={productToBasket}
            />
          )}
        </Modal>
      )}

      {!currentProduct && <div className="h-[100vh]"></div>}
    </div>
  );
};

export default ProductPage;
