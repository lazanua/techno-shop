import { FC } from "react";
import { Link } from "react-router-dom";
import arrowRight from "../../assets/img/product-page/arrow-right.svg";
interface PagePathProps {
  linkName: string;
  link: string | undefined;
  subLinkName: string | undefined;
  subLink: string | undefined;
}
const PagePath: FC<PagePathProps> = ({
  linkName,
  link,
  subLink,
  subLinkName,
}) => {
  return (
    <div className="mt-[32px]">
      <div className="flex gap-[10.5px] items-center mb-[48px]">
        <Link to="/" className="link">
          Головна
        </Link>
        <img src={arrowRight} alt="" />
        <Link to={`${link}`} className="link">
          {linkName}
        </Link>
        {typeof subLink === "string" && (
          <div className="flex gap-[10.5px]">
            <img src={arrowRight} alt="" />
            <Link to={`/${subLink}`} className="link">
              <span className="text text-[--gray-scale---40] ">
                {subLinkName}
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default PagePath;
