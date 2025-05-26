import { FC } from "react";
import { Link } from "react-router-dom";

const Page: FC = () => {
  return (
    <div className="container">
      <div className="flex flex-col items-center gap-[16px] h-[462px] justify-center">
        <p className="text-bold text-[140px] text-[var(--action---secondary)]">
          404
        </p>
        <p className="subsubtitle">
          На жаль, сторінку, яку ви запитували, не знайдено.
        </p>
        <p className="text-p-grey max-w-[400px] text-center">
          Неправильно набрана адреса або такої сторінки на сайті більше не
          існує.
        </p>
        <Link to="/">
          <div className="button button-blue w-[173px] text-center">
            Перейти на головну
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Page;
