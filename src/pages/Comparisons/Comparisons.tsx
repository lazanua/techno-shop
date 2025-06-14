import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import catalogIcon from "../../assets/img/header/catalog-icons.svg";
import icon1 from "../../assets/img/pages/comprisons/icon1.svg";
import icon2 from "../../assets/img/pages/comprisons/icon2.svg";
import icon3 from "../../assets/img/pages/comprisons/icon3.svg";
// import icon1Active from "../../assets/img/pages/comprisons/icon1-active.svg";
// import icon3Active from "../../assets/img/pages/comprisons/icon3-active.svg";
import cross from "../../assets/img/pages/comprisons/cross.svg";
import { ComparProduct } from "../../data/products";

interface ComparisonsProps {
  comparProducts: ComparProduct[];
  deleteComparList: (index: number) => void;
}

const Comparisons: FC<ComparisonsProps> = ({
  comparProducts,
  deleteComparList,
}) => {
  const { id } = useParams<{ id: string }>();
  const [comparIndex, setCompareIndex] = useState(-1);
  const [isData, setIsData] = useState(false);
  const [isCurrentComparList, setIsCurrentComparList] = useState(true);

  //зміна категорії
  useEffect(() => {
    setCompareIndex(Number(id));
  });

  const clearList = (index: number) => {
    setCompareIndex(-1);
    deleteComparList(index);
    setIsCurrentComparList(false);
  };
  useEffect(() => {
    console.log(comparProducts);
    if (comparProducts.length > 0) {
      if (isCurrentComparList) {
        setCompareIndex(Number(id));
      } else {
        setCompareIndex(-1);
      }
      setIsData(true);
    }
  }, [comparProducts]);

  return (
    <div className="container">
      {isData && comparIndex > -1 && (
        <>
          <div className="subtitle">
            Список порівнянь
            {comparProducts.length > 0 &&
              `: ${comparProducts[comparIndex].category.toLowerCase()}`}
          </div>
          <div className="flex gap-[24px]">
            <button className="flex gap-[15px] items-center">
              <img src={icon1} alt="" />
              <p className="text-[var(--action---secondary)] text">
                Тільки відмінності
              </p>
            </button>
            <button className="flex gap-[15px] items-center">
              <img src={icon2} alt="" />
              <p className="text-[var(--action---secondary)] text">
                Додати модель
              </p>
            </button>
            <button
              className="flex gap-[15px] items-center"
              onClick={() => clearList(comparIndex)}
            >
              <img src={icon3} alt="" />
              <p>Очистити список</p>
            </button>
          </div>
          <div className="flex">
            {comparProducts.length > 0 && (
              <div className="flex">
                <div className="mt-[164px]">
                  {comparProducts[comparIndex].products[0].parameters.map(
                    (parametr) => (
                      <div className="">{parametr.name}</div>
                    )
                  )}
                </div>
                {comparProducts[comparIndex].products.map((product) => (
                  <div className="">
                    <div className="py-[16px] px-[8px]">
                      <div className="flex justify-end mb-[4px]">
                        <img src={cross} alt="" />
                      </div>
                      <div className="">
                        <div className="flex gap-[8px] items-center px-[4px]">
                          <img
                            src={product.img}
                            className="w-[56px] h-[56px]"
                            alt=""
                          />
                          <p className="text-p text-[13px] max-w-[335px]">
                            {product.title}
                          </p>
                        </div>
                        <div className="flex justify-between mt-[12px]">
                          {product.discountedPrice ? (
                            <div className="text ">
                              <p className="text-[11px] line-through text-[var(--gray-scale---40)]">
                                {product.price}
                                <span> грн.</span>
                              </p>
                              <p className="text-[var(--accenty---red)] text-[18px] leading-[1.11]">
                                {product.discountedPrice}
                                <span className="text-[12px]">грн.</span>
                              </p>
                            </div>
                          ) : (
                            <div className="">{}</div>
                          )}
                          <button className="button w-[73px]">купити</button>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      {product.parameters.map((parametr) => (
                        <div className="">{parametr.value}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
      {(isData && comparProducts.length === 0) ||
        (!isCurrentComparList && (
          <div className="h-[70vh] flex flex-col items-center gap-[16px] justify-center">
            <p className="subsubtitle">Список порівнянь порожній</p>
            <p className="text leading-[1.43] text-center text-[15px]">
              Ви можете додати сюди товари для порівняння, <br />
              перейшовши до каталогу товарів.
            </p>
            <button className="w-[173px] transition-all hover:bg-[--action-primary-hover] flex bg-[var(--action---primary)] items-center gap-[8px] py-[9px] px-[12px] rounded-[4px]">
              <span className="text-bold uppercase text-[var(--soft)] text-[12px]">
                Каталог товарів
              </span>
              <img src={catalogIcon} alt="" />
            </button>
          </div>
        ))}
    </div>
  );
};

export default Comparisons;
