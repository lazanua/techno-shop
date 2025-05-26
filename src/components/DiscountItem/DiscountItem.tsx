import { FC } from "react";

const DiscountItem: FC<{ img: string; title: string }> = ({ img, title }) => {
  return (
    <div className="">
      <img src={img} alt="" className="mb-[16px] w-[371px] h-[209px]" />
      <div className="flex flex-col gap-[10px]">
        <p className="subtitle-blue h-[48px] max-w-[371px]">{title}</p>
        <div className="max-w-fit border text text-[var(--gray-scale---60)] text-[14px] px-[16px] py-[8px] rounded-[20px]">
          До кінця акції
          <span className="text-[16px] text-bold text-[var(--accenty---red)] leading-[1.25] ml-[10px]">
            14 днів
          </span>
        </div>
        <button className="hover:underline text-bold text-left">
          Дивитись детальніше
        </button>
      </div>
    </div>
  );
};

export default DiscountItem;
