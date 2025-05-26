import { FC } from "react";
import { BasketsProduct, ProductType } from "../../../data/products";
import { Link } from "react-router-dom";
import trash from "../../../assets/img/modals/basket/trash.svg";
import buyIcon from "../../../assets/img/components/cart/buy-icon.svg";
interface FavoritesProps {
  favoritesProducts: ProductType[];
  closeModal: () => void;
  productToBasket: (product: BasketsProduct) => void;
  deleteFavoriteProduct: (id: number) => void;
}
const Favorites: FC<FavoritesProps> = ({
  favoritesProducts,
  closeModal,
  productToBasket,
  deleteFavoriteProduct,
}) => {
  return (
    <div className="lg:w-[1064px] p-[16px] md:p-[0] flex flex-col justify-between h-screen md:h-fit">
      <div className="subsubtitle" style={{ color: "var(--dark)" }}>
        Обране
      </div>

      {favoritesProducts.length === 0 && (
        <div className="h-[200px] text text-[--gray-scale---60] text-[26px] flex items-center justify-center">
          <p>Обраного ще немає</p>
        </div>
      )}
      <div className="max-h-[564px] overflow-auto">
        {favoritesProducts &&
          favoritesProducts.map((product, index) => (
            <div
              className="flex justify-between w-full md:w-[1016px] items-center py-[12px]"
              key={product.title}
              style={{
                borderBottom: "1px solid var(--gray-scale---10)",
                borderTop: `${
                  index === 0 ? "1px solid var(--gray-scale---10)" : "none"
                }`,
              }}
            >
              <div className="md:contents flex">
                <div className="flex gap-[30px] items-center mr-[30px] md:mr-0">
                  <img
                    src={product.img}
                    alt=""
                    className="w-[60px] h-[60px] xs:w-[70px] xs:h-[70px] "
                  />
                  <p className="text-[var(--dark-grey)]  text-[14px]  hidden md:block w-[351px] max-w-[351px]">
                    {product.title}
                  </p>
                </div>
                <div className="flex flex-col gap-[12px]">
                  <p className="text-[var(--dark-grey)] block md:hidden text-[12px] w-[150px] xs:w-[212px]">
                    {product.title}
                  </p>
                  <Link to={`/product/${product.id}`}>
                    <span className="link">Про товар</span>
                  </Link>
                </div>
              </div>

              <button
                className="button md:w-[120px] md:ml-0 md:mr-[100px] mx-[10px] "
                disabled={product.notAvailable && true}
                onClick={() => productToBasket({ ...product, count: 0 })}
              >
                <img
                  src={buyIcon}
                  className="block md:hidden px-[8px]"
                  alt=""
                />
                <p className="hidden md:block">купити</p>
              </button>

              <button
                className=""
                onClick={() => deleteFavoriteProduct(product.id)}
              >
                <img src={trash} alt="" />
              </button>
            </div>
          ))}
      </div>

      <button
        className="button button-light-blue button-light w-full md:w-[207px] mt-[32px]"
        style={{ textTransform: "none", fontSize: "18px" }}
        onClick={closeModal}
      >
        Продовжити покупки
      </button>
    </div>
  );
};

export default Favorites;
