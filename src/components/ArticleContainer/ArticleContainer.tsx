import { FC } from "react";
import { NewsType } from "../NewsComponent/NewsComponent";
import { Link } from "react-router-dom";
interface ArticleContainerProps {
  article: NewsType;
  id: number | undefined;
}
const ArticleContainer: FC<ArticleContainerProps> = ({ article, id }) => {
  return (
    <Link to={`/news/${id}`} onClick={() => window.scrollTo(0, 0)}>
      <div className="">
        <div className="w-[242px] xl:w-[370px] h-[292px] xl:h-auto">
          <img
            className="w-[242px] xl:w-[371px] h-[136px] xl:h-[209px] mb-[4px] object-cover"
            src={article.img}
            alt=""
          />
          <div className="p-[8px]">
            <h3 className="text-bold text-[16px] leading-[1.25] text-[var(--dark)] mb-[8px] ">
              {article.title}
            </h3>
            <div className="text-p text-[14px] h-[50px] overflow-hidden">
              <p>{article.description}</p>
            </div>
            <div className="flex mt-[8px] justify-between">
              <div className=" text text-[10px] text-[var(--gray-scale---20)]">
                Новини, {article.date}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleContainer;
