import { FC } from "react";
import { ProductType, BasketsProduct } from "../../data/products";
import favoritesIcon from "../../assets/img/product-page/favorites-icon.svg";
import compareIcon from "../../assets/img/product-page/compare-icon.svg";
import notAvailableIcon from "../../assets/img/product-page/not-available-icon.svg";
import Price from "../cards-components/Price/Price";
interface MiniCartProps {
  product: ProductType;
  addFavoriteProduct: (product: ProductType) => void;
  productToBasket: (product: BasketsProduct) => void;
}
const MiniCartProduct: FC<MiniCartProps> = ({
  product,
  addFavoriteProduct,
  productToBasket,
}) => {
  return (
    <div className="shadow p-[16px] rounded-[4px] flex flex-col gap-[32px] max-w-[501px] max-h-[304px]">
      <div className="flex items-center gap-[30px]">
        <img src={product.img} alt="" className="w-[70px] h-[70px]" />
        <div className="subsubtitle max-w-[369px]">{product.title}</div>
      </div>
      <div className="flex justify-between items-center">
        <Price
          price={product.price}
          discountedPrice={product.discountedPrice}
        />

        {product.notAvailable && (
          <div className="flex gap-[12px]">
            <div className="bg-[var(--soft)] pl-[16px] pr-[12px] py-[10px] flex items-center">
              <div className="flex gap-[10px] items-center">
                <img src={notAvailableIcon} alt="" />
                <div className="text text-[var(--gray-scale---40)]">
                  Немає в наявності
                </div>
              </div>
            </div>
          </div>
        )}
        {!product.notAvailable && (
          <div className="rounded-[4px] flex bg-[var(--soft)] gap-[6px] py-[10px] px-[12px] items-center max-w-[134px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.2863 11.0602V12.0064C22.285 14.2245 21.5668 16.3827 20.2387 18.1592C18.9107 19.9357 17.0439 21.2353 14.9169 21.8642C12.7899 22.4931 10.5166 22.4175 8.43601 21.6489C6.35543 20.8802 4.57906 19.4596 3.37183 17.5989C2.1646 15.7381 1.5912 13.537 1.73714 11.3238C1.88308 9.11057 2.74054 7.00381 4.18164 5.31772C5.62275 3.63163 7.57028 2.45655 9.73378 1.96774C11.8973 1.47892 14.1608 1.70256 16.1868 2.6053M22.2863 4.28627L12.0006 14.572L7.71484 10.2863"
                stroke="#06A56C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="text-[var(--action---primary)]">В наявності</div>
          </div>
        )}
        <div className="flex gap-[10px] items-center">
          <img src={compareIcon} alt="" />
          <button onClick={() => addFavoriteProduct(product)}>
            <img src={favoritesIcon} alt="" />
          </button>
        </div>
      </div>
      {!product.notAvailable && (
        <div className="flex flex-col gap-[12px]">
          <button
            className="button w-[469px]"
            onClick={() => productToBasket({ ...product, count: 0 })}
          >
            Купити
          </button>
          <button className="button button-light w-[469px]">
            Купити у кредит
          </button>
        </div>
      )}
    </div>
  );
};

export default MiniCartProduct;
