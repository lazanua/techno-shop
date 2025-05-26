import { FC } from "react";
import MiniCartProduct from "../../MiniCartProduct/MiniCartProduct";
import { ProductType, BasketsProduct } from "../../../data/products";
import ExtendedReview from "../../ExtendedReview/ExtendedReview";
import { reviewExamples } from "../../../data/reviewExample";
import { ModalName } from "../../../pages/ProductPage/ProductPage";

interface ReviewsProps {
  product: ProductType;
  openModal: (str: ModalName) => void;
  productToBasket: (product: BasketsProduct) => void;
  addFavoriteProduct: (product: ProductType) => void;
}
const ReviewsTab: FC<ReviewsProps> = ({
  product,
  openModal,
  productToBasket,
  addFavoriteProduct,
}) => {
  return (
    <div className="container">
      <div className="flex gap-[16px]">
        <div className="">
          <h3 className="subtitle">Відгуки ({reviewExamples.length})</h3>
          <div className="flex justify-between items-center mb-[24px] w-full">
            <p className="text text-[18px] text-[var(--gray-scale---60)] hidden md:block">
              Залиште свій відгук про товар
            </p>
            <button
              className="button button-blue w-full md:w-[233px]"
              onClick={() => openModal("write-review")}
            >
              Додати відгук
            </button>
          </div>
          <div className="flex flex-col gap-[16px]">
            {reviewExamples.map((review) => (
              <ExtendedReview review={review} openModal={openModal} />
            ))}
          </div>
        </div>
        <div className="hidden md:contents">
          <MiniCartProduct
            product={product}
            addFavoriteProduct={addFavoriteProduct}
            productToBasket={productToBasket}
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewsTab;
