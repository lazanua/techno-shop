import { FC } from "react";
import arrowRight from "../../assets/img/pages/news/arrow-right.svg";
import arrowLeft from "../../assets/img/pages/news/arrow-left.svg";

interface PaginationProps {
  lengthNumbers: number;
  currentPage: number;
  choosePage: (index: number) => void;
  nextPage: () => void;
  previusPage: () => void;
}
const Pagination: FC<PaginationProps> = ({
  lengthNumbers,
  currentPage,
  choosePage,
  nextPage,
  previusPage,
}) => {
  // const [currentPages, setCurrentPages] = useState<number[]>([1]);

  // useEffect(() => {
  //   if (lengthNumbers >= 3) {
  //     setCurrentPages([1, 2, 3]);
  //   } else {
  //     setCurrentPages(lengthNumbers === 1 ? [1] : [2]);
  //   }
  // }, []);

  return (
    <div className="">
      <div className="flex justify-center items-center gap-[40px]">
        <button
          className="flex items-center gap-[19px]"
          onClick={() => previusPage()}
        >
          <img src={arrowLeft} alt="" />
          <span className="link">Назад</span>
        </button>
        <div className="flex">
          {/* {currentPages.map((index) => (
            <button
              className={`${
                currentPage === index + 1 && "bg-[var(--soft)]"
              } text text-[var(--action---secondary)] cursor-pointer hover:bg-[var(--soft)] text-[16px] leading-[1.25] py-[11px] px-[30px]`}
              key={index}
              onClick={() => choosePage(index)}
            >
              {index}
            </button>
          ))} */}
          {Array.from({ length: lengthNumbers }, (_, index) => (
            <button
              className={`${
                currentPage === index + 1 && "bg-[var(--soft)]"
              } text text-[var(--action---secondary)] cursor-pointer hover:bg-[var(--soft)] text-[16px] leading-[1.25] py-[11px] px-[30px]`}
              key={index}
              onClick={() => choosePage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          className="flex items-center gap-[19px]"
          onClick={() => nextPage()}
        >
          <span className="link">Вперед</span>
          <img src={arrowRight} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
