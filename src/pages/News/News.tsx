import { FC, useEffect, useState } from "react";
import { NewsType } from "../../data/news";
import resetIcon from "../../assets/img/pages/news/reset-icon.svg";
import PagePath from "../../components/PagePath/PagePath";
import ArticleContainer from "../../components/ArticleContainer/ArticleContainer";
import Pagination from "../../components/Pagination/Pagination";
import ArticleSkeleton from "../../components/Skeletons/ArticleSkeletons/ArticleSkeletons";
const News: FC<{ news: NewsType[]; fetchData: () => void }> = ({
  news,
  fetchData,
}) => {
  const [newsFromServer, setNewsFromServer] = useState<NewsType[]>([]);
  const [allNews, setAllNews] = useState<NewsType[]>([]);
  const [currentNews, setCurrentNews] = useState<NewsType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const getRandomArray = (
    originalArray: NewsType[],
    newArrayLength: number = 140
  ): NewsType[] => {
    return Array.from(
      { length: newArrayLength },
      () => originalArray[Math.floor(Math.random() * originalArray.length)]
    );
  };

  useEffect(() => {
    setNewsFromServer(news);
  }, [news]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (newsFromServer.length !== 0) {
      setAllNews(getRandomArray(newsFromServer, 67));
    }
  }, [newsFromServer]);

  useEffect(() => {
    if (allNews.length !== 0) {
      setCurrentNews(allNews.slice(0, 16));
      setIsLoading(true);
    }
  }, [allNews]);

  const countPages = Math.ceil(allNews.length / 16);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const choosePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setCurrentNews(allNews.slice(16 * (pageNumber - 1), 16 * pageNumber));
  };
  const nextPage = () => {
    if (currentPage < countPages) {
      setCurrentPage((prev) => prev + 1);
      setCurrentNews(allNews.slice(16 * currentPage, 16 * (currentPage + 1)));
    } else {
      setCurrentPage(1);
      setCurrentNews(allNews.slice(0, 16));
    }
  };
  const previusPage = () => {
    if (currentPage > 1) {
      setCurrentNews(
        allNews.slice(16 * (currentPage - 2), 16 * (currentPage - 1))
      );
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage(countPages);
      setCurrentNews(allNews.slice(16 * (countPages - 1), 16 * countPages));
    }
  };

  return (
    <div className="container">
      <PagePath
        link="/news"
        linkName="Новини"
        subLink={undefined}
        subLinkName=""
      />
      <h2 className="subtitle">Новини</h2>
      <div className="grid grid-cols-4 gap-[16px]">
        {!isLoading &&
          Array.from({ length: 16 }, (_) => (
            <div className="">
              <ArticleSkeleton />
            </div>
          ))}
        {isLoading &&
          currentNews.map((item) => (
            <div className="mb-[24px]">
              <ArticleContainer article={item} id={item.id} />
            </div>
          ))}
      </div>
      <button
        className="flex items-center mx-auto gap-[16px] mb-[30px]"
        onClick={() => fetchData()}
      >
        <span className="link">Показати більше товарів</span>
        <img src={resetIcon} alt="" />
      </button>
      <Pagination
        lengthNumbers={countPages}
        currentPage={currentPage}
        choosePage={choosePage}
        nextPage={nextPage}
        previusPage={previusPage}
      />
    </div>
  );
};

export default News;
