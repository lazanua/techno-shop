import { FC } from "react";
import { Link } from "react-router-dom";
import { ComparProduct } from "../../../data/products";
import trashIcon from "../../../assets/img/header/trash.svg";

interface ComparListProps {
  comparProducts: ComparProduct[];
  deleteComparList: (index: number) => void;
}

const CompareList: FC<ComparListProps> = ({
  comparProducts,
  deleteComparList,
}) => {
  return (
    <div className="">
      <div className="static md:absolute w-[324px] md:right-0 bg-white p-[16px] shadow rounded-[8px]">
        <p className="subsubtitle mb-[16px]">Списки порівнянь</p>
        {comparProducts.length > 0 ? (
          <div className="flex flex-col gap-[16px]">
            {comparProducts.map((product, index) => (
              <div className="flex justify-between items-center" key={index}>
                <Link to={`/comprisons/${index}`}>
                  <div className="flex text text-[var(--action---secondary)] gap-[13px] cursor-pointer">
                    <p className="hover:underline">{product.category}</p>
                    <p>({product.products.length})</p>
                  </div>
                </Link>

                <button onClick={() => deleteComparList(index)}>
                  <img src={trashIcon} alt="" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex text-p-grey text-center justify-center items-center  h-[40px]">
            Список порівнянь порожній
          </div>
        )}
      </div>
    </div>
  );
};

export default CompareList;
