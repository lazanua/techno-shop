import { FC, useState, useRef, useEffect } from "react";
import { BasketsProduct, ProductType } from "../../../data/products";
import InfoComponent from "../../InfoComponent.tsx/InfoComponent";
import arrowRight from "../../../assets/img/elements/arrow-right.svg";
import arrowDown from "../../../assets/img/product-page/arrow-down.svg";
import arrowUp from "../../../assets/img/product-page/arrow-up.svg";
import notAvailableIcon from "../../../assets/img/product-page/not-available-icon.svg";
import favoritesIcon from "../../../assets/img/product-page/favorites-icon.svg";
import compareIcon from "../../../assets/img/product-page/compare-icon.svg";
import { reviewExamples } from "../../../data/reviewExample";
import ExtendedReview from "../../ExtendedReview/ExtendedReview";
import { descExample } from "../../../data/descExample";
import ParametrComponent from "../../ParametrComponent/ParametrComponent";
import { ModalName, Tab } from "../../../pages/ProductPage/ProductPage";
import ImagesScroll from "../../ImagesScroll/ImagesScroll";
import ZoomImage from "../../ZoomImage/ZoomImage";
import Price from "../../Price/Price";
interface MainProps {
  currentProduct: ProductType;
  handleSetTab: (str: Tab) => void;
  openModal: (str: ModalName) => void;
  productToBasket: (product: BasketsProduct) => void;
  addFavoriteProduct: (product: ProductType) => void;
}

const Main: FC<MainProps> = ({
  currentProduct,
  handleSetTab,
  openModal,
  productToBasket,
  addFavoriteProduct,
}) => {
  const mainParametres = currentProduct.parameters.slice(0, 5);
  const mainReviews = reviewExamples.slice(0, 3);
  const [mainImage, setMainImage] = useState<string>(currentProduct.img);
  const [isOpenDesc, setIsOpenDesc] = useState<boolean>(false);

  const changeImage = (index: number) => {
    setMainImage(currentProduct.images[index]);
  };

  const reviewsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = reviewsRef.current;
    if (container) {
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      container.scrollLeft = (scrollWidth - clientWidth) / 2;
    }
  }, []);

  return (
    <div className="">
      <div className="">
        <div className="flex flex-col-reverse md:flex-row gap-[16px]">
          <div className="">
            <div className="flex flex-col md:flex-row gap-[16px] mb-[32px]">
              {currentProduct.images[0] !== "" && (
                <div className="hidden md:block">
                  <ImagesScroll
                    images={currentProduct.images}
                    changeImage={changeImage}
                  />
                </div>
              )}

              <div className="hidden md:block">
                <ZoomImage
                  src={mainImage}
                  openModal={openModal}
                  width={580}
                  height={580}
                />
              </div>
            </div>
            <h3 className="subtitle hidden md:block">Основні характеристики</h3>
            <h3 className="block md:hidden text-semibold text-[18px] text-[var(--dark-grey)] mb-[12px]">
              Характеристики
            </h3>
            <div className="">
              {mainParametres.map((parametr, index) => (
                <div key={parametr.value}>
                  <ParametrComponent value={parametr} index={index} />
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-[20px] mb-[30px]">
              <button
                className="link-wrapper"
                onClick={() => handleSetTab("desc")}
              >
                <span className="link">Дивитись усі характеристики</span>
                <img src={arrowRight} alt="" />
              </button>
            </div>
            <h3 className="subtitle">Опис товару</h3>
            <div className={`product-describe overflow-hidden`}>
              {isOpenDesc &&
                descExample.map((item) => (
                  <div key={item.title}>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                ))}
              {!isOpenDesc &&
                descExample.map((item, index) => (
                  <>
                    {index === 0 && (
                      <div key={item.title}>
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                      </div>
                    )}
                  </>
                ))}
            </div>
            <div className="flex justify-end md:justify-start w-full mt-[30px] items-center">
              <button
                className="link mr-[8px]"
                onClick={() => setIsOpenDesc((prev) => !prev)}
              >
                {isOpenDesc ? "Сховати" : "Дивитись ще"}
              </button>
              {isOpenDesc ? (
                <img src={arrowUp} alt="" />
              ) : (
                <img src={arrowDown} alt="" />
              )}
            </div>
          </div>

          <div className="">
            <img
              className="block w-[328px] h-[328px] md:hidden"
              src={mainImage}
              alt=""
            />
            {currentProduct.images[0] !== "" && (
              <div className="overflow-x-auto no-scrollbar">
                <div
                  className={`flex gap-[8px] md:hidden w-[${
                    currentProduct.images.length * 90 +
                    currentProduct.images.length * 8
                  }px]`}
                >
                  {currentProduct.images.map((image, index) => (
                    <button className="" onClick={() => changeImage(index)}>
                      <img
                        className="w-[90px] h-[90px] object-contain"
                        src={image}
                        alt=""
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div className="flex justify-between items-center mb-[48px]">
              {currentProduct.notAvailable && (
                <div className="flex gap-[12px]">
                  <div className="bg-[var(--soft)] pl-[16px] pr-[12px] py-[10px] flex items-center">
                    <div className="flex gap-[10px] items-center">
                      <img src={notAvailableIcon} alt="" />
                      <div className="text text-[var(--gray-scale---40)]">
                        Немає в наявності
                      </div>
                    </div>
                  </div>
                  <button
                    className="button button-blue w-[232px]"
                    onClick={() => openModal("report")}
                  >
                    Повідомити, коли з'явиться
                  </button>
                </div>
              )}

              {!currentProduct.notAvailable && (
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
                  <div className="text-[var(--action---primary)]">
                    В наявності
                  </div>
                </div>
              )}

              <div className="hidden md:flex items-center gap-[7px]">
                <button className="">
                  <img src={compareIcon} alt="" className="w-[32px] h-[32px]" />
                </button>
                <button onClick={() => addFavoriteProduct(currentProduct)}>
                  <img
                    src={favoritesIcon}
                    alt=""
                    className="w-[26px] h-[23px]"
                  />
                </button>
              </div>
            </div>
            <div className="shadow md:contents p-[16px] w-full">
              <div className="flex md:flex-row flex-col  items-start md:items-center gap-[12px] ml-[24px] ">
                <div className="flex md:contents justify-between w-full">
                  <Price
                    price={currentProduct.price}
                    discountedPrice={currentProduct.discountedPrice}
                  />
                  <div className="flex md:hidden ">
                    <button onClick={() => addFavoriteProduct(currentProduct)}>
                      <img src={compareIcon} alt="" />
                    </button>
                    <button onClick={() => addFavoriteProduct(currentProduct)}>
                      <img src={favoritesIcon} alt="" />
                    </button>
                  </div>
                </div>

                {!currentProduct.notAvailable && (
                  <div className="flex md:flex-row flex-col gap-[12px] md:gap-[24px] w-full md:w-auto">
                    <button
                      className="button md:w-[136px]"
                      onClick={() =>
                        productToBasket({ ...currentProduct, count: 0 })
                      }
                    >
                      Купити
                    </button>
                    <button
                      className="button button-light md:w-[136px]"
                      onClick={() =>
                        productToBasket({ ...currentProduct, count: 0 })
                      }
                    >
                      Купити у кредит
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-[40px] mb-[24px] w-[100%] h-[1px] bg-[var(--gray-scale---10)]"></div>
            <InfoComponent handleSetTab={handleSetTab} />
            <h3 className="subtitle mt-[24px]">
              Відгуки {reviewExamples.length}
            </h3>
            <div className="overflow-x-auto no-scrollbar" ref={reviewsRef}>
              <div className="flex flex-row md:flex-col gap-[16px] md:gap-[24px] max-w-[782px] md:max-w-[758px]">
                {/* {mainReviews.map((review, index) => (
                  <div key={index}>
                    <ExtendedReview review={review} openModal={openModal} />
                  </div>
                ))} */}
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between mt-[24px]">
              <button
                className="button button-blue w-full md:w-[233px]"
                onClick={() => openModal("write-review")}
              >
                Додати відгук
              </button>
              <button
                className="link-wrapper"
                onClick={() => handleSetTab("reviews")}
              >
                <span className="link">Дивитись усі відгуки</span>
                <img src={arrowRight} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
