import { FC } from "react";
import { NewsType } from "../../data/news";
import { Link } from "react-router-dom";
export type { NewsType } from "../../data/news";
import arrowRight from "../../assets/img/elements/arrow-right.svg";
interface NewsProps {
  news: NewsType;
  id: number;
}
const NewsComponent: FC<NewsProps> = ({ news, id }) => {
  return (
    <div className=" w-[242px] sm:w-[371px] shadow">
      <img
        className="xl:w-[371px] w-[100%] h-[209px] mb-[4px] object-cover"
        src={news.img}
        alt=""
      />
      <div className="p-[8px]">
        <h3 className="text-bold text-[16px] leading-[1.25] text-[var(--dark)] mb-[8px] ">
          {news.title}
        </h3>
        <div className="text-p text-[14px] h-[48px] overflow-hidden">
          <p>{news.description}</p>
        </div>
        <div className="flex mt-[8px] justify-between">
          <div className="text text-[10px] text-[var(--gray-scale---20)]">
            {news.date}
          </div>
          <div className="link-wraper flex">
            <Link to={`/news/${id}`}>
              <span className="link">Читати повністю</span>
            </Link>

            <img src={arrowRight} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;
