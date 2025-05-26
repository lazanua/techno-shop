import { FC } from "react";
import { Parametr } from "../../data/products";
interface ParametrProps {
  value: Parametr;
  index: number;
}

const ParametrComponent: FC<ParametrProps> = ({ value, index }) => {
  return (
    <div
      className={`flex justify-between px-[16px] py-[8px] text-400 leding-[1.43] text-[14px] text-[var(--gray-scale---60) w-[100%]] ${
        index % 2 === 0 && "bg-[var(--soft)]"
      }`}
    >
      <div className="">{value.name}</div>
      <div className="">{value.value}</div>
    </div>
  );
};

export default ParametrComponent;
