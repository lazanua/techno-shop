import { FC, useState, useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import CategoriesComponent from "../../components/CategoriesComponent/CategoriesComponent";
import "./index.css";
import { ProductType } from "../../data/products";
import Card from "../../components/cards-components/Card/Card";
import { reviews } from "../../data/reviews";
import GamesComponent from "../../components/GamesComponents/GamesComponent";
import Review from "../../components/Review/Review";
import arrowRight from "../../assets/img/elements/arrow-right.svg";
import partner1 from "../../assets/img/homepage/partners/hp.svg";
import partner2 from "../../assets/img/homepage/partners/lenovo.svg";
import partner3 from "../../assets/img/homepage/partners/sony.svg";
import partner4 from "../../assets/img/homepage/partners/samsung.svg";
import { NewsType } from "../../data/news";
import NewsComponent from "../../components/NewsComponent/NewsComponent";
import { Link } from "react-router-dom";
import ArticleSkeleton from "../../components/Skeletons/ArticleSkeletons/ArticleSkeletons";
import { categories } from "../../data/categories";
import arrowDown from "../../assets/img/homepage/arrow-down.svg";
import advantage1 from "../../assets/img/advantages-icons/1.svg";
import advantage2 from "../../assets/img/advantages-icons/2.svg";
import advantage3 from "../../assets/img/advantages-icons/3.svg";
import advantage4 from "../../assets/img/advantages-icons/4.svg";
import advantage5 from "../../assets/img/advantages-icons/5.svg";
import advantage6 from "../../assets/img/advantages-icons/6.svg";
import advantage7 from "../../assets/img/advantages-icons/7.svg";
import insta1 from "../../assets/img/instagram-images/1.jpg";
import insta2 from "../../assets/img/instagram-images/2.jpg";
import { categoriesIconsActive } from "../../components/CategoriesComponent/CategoriesComponent";
const advantagesIcons = [
  advantage1,
  advantage2,
  advantage3,
  advantage4,
  advantage5,
  advantage6,
  advantage7,
];

interface HomepageProps {
  onClickBuyBtn: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
  products: ProductType[];
  news: NewsType[];
  onClickAddToFavorite: (
    event: React.MouseEvent<HTMLButtonElement>,
    product: ProductType
  ) => void;
  onClickAddToCompare: (
    event: React.MouseEvent<HTMLButtonElement>,
    product: ProductType
  ) => void;
}

const Homepage: FC<HomepageProps> = ({
  onClickBuyBtn,
  products,
  news,
  onClickAddToFavorite,
  onClickAddToCompare,
}) => {
  const [currentReview, setCurrentReview] = useState<number>(0);
  const [mainNews, setMainNews] = useState<NewsType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (news.length !== 0) {
      setMainNews(news.slice(0, 4));
      setIsLoading(true);
    }
  }, [news]);

  const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);

  //показувати всі пролукти на мобілці чи ні
  const [isProductsOpen, setIsProductsOpen] = useState<boolean>(false);

  const onClickNextReview = () => {
    if (currentReview < reviews.length - 1) {
      setCurrentReview((prev) => prev + 1);
    } else {
      setCurrentReview(0);
    }
  };
  const onClickPreviousReview = () => {
    if (currentReview > 0) {
      setCurrentReview((prev) => prev - 1);
    } else {
      setCurrentReview(reviews.length - 1);
    }
  };
  const advantages: string[] = [
    "Безкоштовна збірка",
    "Розстрочка 4 місяці без переплат",
    "Безкоштовна доставка",
    "Офіційна гарантія",
    "Найкраща ціна",
    "11 років на ринку",
    "Професійна консультація",
  ];
  const [currentCategory, setCurrentCategory] = useState<number>(0);
  const chooseCategory = (index: number | null) => {
    if (typeof index === "number") {
      setCurrentCategory(index);
    }
  };
  const onMouseLeaveCategories = () => {
    setCurrentCategory(-1);
  };

  return (
    <div className="relative">
      <div className="mx-auto lg:flex-row flex flex-col-reverse 2xl:w-[1532px] overflow-hidden">
        <div className="lg:block hidden">
          <CategoriesComponent
            chooseCategory={chooseCategory}
            id={currentCategory}
            onMouseLeaveCategories={onMouseLeaveCategories}
          />
        </div>

        <div className="">
          <Banner />
          <div
            className="lg:hidden flex gap-[16px] overflow-auto mt-[16px]"
            style={{ scrollbarWidth: "none" }}
          >
            {categories.map((category, index) => (
              <Link to={`/categories/${index}`}>
                <div
                  className="min-w-[114px] min-h-[96px] shadow rounded-[4px] gap-[14px] flex flex-col justify-center items-center"
                  style={{ border: "1px solid var(--action---secondary)" }}
                  key={index}
                >
                  <img src={categoriesIconsActive[index]} alt="" />
                  <p className="text text-[12px] leading-[1.33] text-[var(--action---secondary)] text-center">
                    {category.categoryName}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="w-[100%]">
            <div
              className="advantages overflow-x-auto flex items-center justify-start md:justify-around gap-[45px] mt-[46px]"
              style={{ scrollbarWidth: "none" }}
            >
              {advantages.map((el, index) => (
                <div
                  className="flex flex-col justify-center items-center"
                  key={index}
                >
                  <div className="w-[60px] h-[60px] mb-[6px]">
                    <img src={advantagesIcons[index]} alt="" className="" />
                  </div>

                  <div className="text-bold text-[12px] text-[var(--dark)] text-center max-w-[117px]">
                    {el}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="subtitle mt-[48px]">Топ продажів</h2>
        <div className="flex items-center justify-center mx-auto">
          <div className="grid justify-center items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-[16px] mb-[70px]">
            {products.slice(0, 12).map((product, index) => (
              <>
                {isMobile && isProductsOpen && index < 6 && (
                  <div className="" key={index}>
                    <Card
                      product={product}
                      onClickBuyBtn={onClickBuyBtn}
                      id={product.id}
                      onClickAddToFavorite={onClickAddToFavorite}
                      onClickAddToCompare={onClickAddToCompare}
                    />
                  </div>
                )}
                {!isMobile && (
                  <div className="" key={index}>
                    <Card
                      product={product}
                      onClickBuyBtn={onClickBuyBtn}
                      id={product.id}
                      onClickAddToFavorite={onClickAddToFavorite}
                      onClickAddToCompare={onClickAddToCompare}
                    />
                  </div>
                )}
                {isMobile && !isProductsOpen && index < 2 && (
                  <div className="" key={index}>
                    <Card
                      product={product}
                      onClickBuyBtn={onClickBuyBtn}
                      id={product.id}
                      onClickAddToFavorite={onClickAddToFavorite}
                      onClickAddToCompare={onClickAddToCompare}
                    />
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="hidden sm:flex justify-end ">
          <button className="link-wrapper   ">
            <span className="link text-end">Дивитись усі товари</span>
            <img src={arrowRight} alt="" />
          </button>
        </div>
        <div className="sm:hidden flex justify-between">
          <button
            className="link-wrapper"
            onClick={() => setIsProductsOpen((prev) => !prev)}
          >
            <span className="link">
              {isProductsOpen ? "Сховати" : "Ще товари"}
            </span>
            <img
              src={arrowDown}
              className={`${isProductsOpen ? "" : "rotate-180"}`}
              alt=""
            />
          </button>
          <div className="link-wrapper">
            <button className="link">Дивитись усе</button>
            <img src={arrowRight} alt="" />
          </div>
        </div>
      </div>

      <div className="">
        <GamesComponent
          onClickBuyBtn={onClickBuyBtn}
          onClickAddToFavorite={onClickAddToFavorite}
          products={products}
        />
      </div>

      <div className="container">
        <div className="flex flex-col xl:flex-row mt-[48px] gap-[16px]">
          <div className="">
            <h2 className="subtitle">Відгуки</h2>
            <div className="flex shadow p-[8px]">
              <Review
                review={reviews[currentReview]}
                onClickNextReview={onClickNextReview}
                onClickPreviousReview={onClickPreviousReview}
              />
              <div className="bg-[var(--gray-scale---10)] h-[140px] w-[1px]"></div>
              <div className="flex flex-col items-center justify-center">
                <div className="text-900 text-[var(--dark)] text-[48px] mb-[4px]">
                  4,7
                </div>
                <div className="flex gap-[6px] mb-[12px]">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.5 1L8.045 4.13L11.5 4.635L9 7.07L9.59 10.51L6.5 8.885L3.41 10.51L4 7.07L1.5 4.635L4.955 4.13L6.5 1Z"
                      fill="#FFCD1B"
                      stroke="#FFCD1B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.5 1L8.045 4.13L11.5 4.635L9 7.07L9.59 10.51L6.5 8.885L3.41 10.51L4 7.07L1.5 4.635L4.955 4.13L6.5 1Z"
                      fill="#FFCD1B"
                      stroke="#FFCD1B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.5 1L8.045 4.13L11.5 4.635L9 7.07L9.59 10.51L6.5 8.885L3.41 10.51L4 7.07L1.5 4.635L4.955 4.13L6.5 1Z"
                      fill="#FFCD1B"
                      stroke="#FFCD1B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.5 1L8.045 4.13L11.5 4.635L9 7.07L9.59 10.51L6.5 8.885L3.41 10.51L4 7.07L1.5 4.635L4.955 4.13L6.5 1Z"
                      fill="#FFCD1B"
                      stroke="#FFCD1B"
                      strokeWidth="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.5 1L7.045 4.13L10.5 4.635L8 7.07L8.59 10.51L5.5 8.885L2.41 10.51L3 7.07L0.5 4.635L3.955 4.13L5.5 1Z"
                      fill="#D9D9D9"
                      stroke="#D9D9D9"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="link text-[12px] text-center">
                  522 відгука на Google
                </div>
              </div>
            </div>
            <div className=" link-wrapper">
              <a href="" className="link ">
                Всі відгуки на Google
              </a>
              <img src={arrowRight} alt="" />
            </div>
          </div>
          <div className="lg:mx-0 mx-auto">
            <h2 className="subtitle">Інстаграм</h2>
            <div className="grid items-center grid-cols-2 md:grid-cols-3 lg:flex p-[8px] gap-[8px] shadow max-w-fit">
              <img src={insta1} alt="" />
              <img src={insta2} alt="" />
              <img src={insta1} alt="" />
              <img src={insta2} alt="" />
              <img src={insta1} alt="" />
              <img src={insta2} alt="" />
            </div>
            <div className=" link-wrapper">
              <a href="" className="link ">
                Перейти
              </a>
              <img src={arrowRight} alt="" />
            </div>
          </div>
        </div>
        <h2 className="subtitle">Партнери</h2>
        <div
          className="flex items-center overflow-auto justify-start gap-[24px] md:justify-between mb-[27px]"
          style={{ scrollbarWidth: "none" }}
        >
          <img src={partner1} alt="" />
          <img src={partner2} alt="" />
          <img src={partner3} alt="" />
          <img src={partner4} alt="" />
          <img src={partner1} alt="" />
          <img src={partner2} alt="" />
          <img src={partner3} alt="" />
          <img src={partner4} alt="" />
          <img src={partner1} alt="" />
          <img src={partner2} alt="" />
        </div>
        <div className=" link-wrapper">
          <a href="/" className="link ">
            Всі партнери
          </a>
          <img src={arrowRight} alt="" />
        </div>
        <h2 className="subtitle">Новини</h2>
        {isLoading && (
          <div
            className="justify-center flex gap-[16px] xl:overflow-visible overflow-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {mainNews.map((newsEl, index) => (
              <div key={newsEl.title}>
                <NewsComponent news={newsEl} id={index} />
              </div>
            ))}
          </div>
        )}
        {!isLoading && (
          <div className="flex gap-[16px]">
            <ArticleSkeleton />
            <ArticleSkeleton />
            <ArticleSkeleton />
            <ArticleSkeleton />
          </div>
        )}

        <div className=" link-wrapper">
          <Link to="/news" className="link ">
            Всі новини
          </Link>
          <img src={arrowRight} alt="" />
        </div>
        <div className="xl:w-[1210px] w-[100%] mt-[94px] mx-auto">
          <h2 className="subtitle">
            Магазин компьтерної техніки та аксессуарів v-comp.com.ua
          </h2>
          <div className="text-p text-[18px] leading-[1.56]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              voluptates? Maxime temporibus eveniet ab excepturi eos aspernatur,
              quae voluptatem modi. Laboriosam repellendus odit nesciunt, amet
              ipsa minus cum? Ratione, sapiente! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Fugiat iure ipsum est itaque, ex
              ipsa repudiandae nemo nulla ipsam minima exercitationem autem,
              architecto expedita nihil cum temporibus saepe iusto. Quaerat.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              expedita veritatis debitis blanditiis fugit quisquam adipisci,
              suscipit iusto incidunt voluptatem eligendi odit reiciendis quia
              dolorum, amet vitae. Harum, dolorem non.
            </p>
            <p>
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
              velit, ab, magnam asperiores blanditiis facilis voluptatem
              suscipit, aliquid esse fugit nihil aperiam pariatur mollitia iste
              deleniti vero illum. Obcaecati, dolorum! Distinctio tempore nulla,
              quas consequatur molestiae quod dolores sequi eos explicabo,
              aperiam iste illum ea ab. Sed fuga dolorum, beatae rerum, sequi
              accusamus consectetur id impedit provident officia error minus?
              Est aspernatur ab aperiam praesentium, doloremque minima neque qui
              minus voluptas consequuntur expedita placeat repellendus ipsum
              libero blanditiis laborum nostrum id tempore, a facilis quia
              dignissimos maxime. Suscipit, laborum modi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
