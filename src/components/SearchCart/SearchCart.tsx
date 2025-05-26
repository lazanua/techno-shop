import { FC } from "react";
import { ProductType } from "../../data/products";
import { Link } from "react-router-dom";

const SearchCart: FC<{ product: ProductType }> = ({ product }) => {
  return (
    <Link to={`product/${product.id}`}>
      <div className="shadow w-[96px] p-[8px] cursor-pointer">
        <img
          src={product.img}
          alt=""
          className="w-[80px] h-[80px] object-contain mb-[12px]"
        />
        <p className="text text-[10px] text-[var(--dark-grey)] leading-[1.2] text-center h-[48px] overflow-hidden">
          {product.title}
        </p>
      </div>
    </Link>
  );
};

export default SearchCart;
