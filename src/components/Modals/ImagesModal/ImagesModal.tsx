import { FC, useState, useEffect } from "react";
import scrollLeft from "../../../assets/img/product-page/sroll-left.svg";
import scrollRight from "../../../assets/img/product-page/scroll-right.svg";
import { BasketsProduct, ProductType } from "../../../data/products";
import ZoomImage from "../../ZoomImage/ZoomImage";

interface ImagesModalProps {
  product: ProductType;
  productToBasket: (product: BasketsProduct) => void;
}

const ImagesModal: FC<ImagesModalProps> = ({ product, productToBasket }) => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const onLeftScroll = () => {
    setCurrentImage((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };
  const onRightScroll = () => {
    setCurrentImage((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        onLeftScroll();
      }
      if (event.key === "ArrowRight") {
        onRightScroll();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className="flex flex-col h-[96vh] md:h-auto
    items-center 
    justify-between
    w-full xl:w-[1064px] gap-[16px]"
    >
      <div
        className="subsubtitle pt-[16px] pr-[30px] pl-[16px] self-start"
        style={{ color: "var(--dark)" }}
      >
        Фотографії {product.title}
      </div>
      <div className="md:contents  flex-col items-center md:px-0 px-[28px]">
        <div className="flex gap-[52px] items-center">
          {product.images[0] !== "" && (
            <button>
              <img
                className="w-[24px] md:w-auto"
                src={scrollLeft}
                onClick={() => onLeftScroll()}
                alt=""
              />
            </button>
          )}
          <div className="hidden md:block">
            <ZoomImage
              src={
                product.images[0] !== ""
                  ? product.images[currentImage]
                  : product.img
              }
              width={700}
              height={700}
            />
          </div>
          <div className="md:hidden block">
            <img
              className="h-[40%] md:h-auto"
              src={
                product.images[0] !== ""
                  ? product.images[currentImage]
                  : product.img
              }
              alt=""
            />
          </div>
          {product.images[0] !== "" && (
            <button>
              <img
                className="w-[24px] md:w-auto"
                src={scrollRight}
                alt=""
                onClick={() => onRightScroll()}
              />
            </button>
          )}
        </div>
      </div>
      <div className="md:contents flex flex-col items-center gap-[12px]">
        <div className="flex gap-[16px] items-center">
          {product.images[0] !== "" &&
            product.images.map((image, index) => (
              <div key={image} className="h-[20px]">
                <button
                  className={`${
                    currentImage !== index
                      ? "w-[9px] h-[9px] bg-[var(--gray-scale---20)] my-[5.5px]"
                      : "w-[20px] h-[20px] bg-[var(--action---secondary)]"
                  } rounded-full cursor-pointer transition-all h-[20px]`}
                  onClick={() => setCurrentImage(index)}
                ></button>
              </div>
            ))}
        </div>
        <div className="flex items-center">
          {product.discountedPrice && (
            <div className="text-bold text-[12px] text-[var(--gray-scale---40)] ml-[11px]">
              <span className="line-through mr-[2px]">{product.price}</span>
              <span className="text-[8px]">грн.</span>
            </div>
          )}
          <div
            className={`${
              product.notAvailable
                ? "text-[var(--gray-scale---40)]"
                : "text-[var(--accenty---red)]"
            }   text-[28px] text leading-[0.86]`}
          >
            {product.discountedPrice ? product.discountedPrice : product.price}
            <span className="ml-[2px] text text-[12px]">грн.</span>
          </div>
          <button
            className="button w-[164px] ml-[24px]"
            disabled={product.notAvailable ? true : false}
            onClick={() => productToBasket({ ...product, count: 0 })}
          >
            купити
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImagesModal;
