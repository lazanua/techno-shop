import { FC } from "react";
import bankIcon from "../../../assets/img/product-page/bank-icon.svg";
import { creaditInfoExample } from "../../../data/creditInfoExample";
const CreditInfo: FC = () => {
  return (
    <div
      className="flex flex-col gap-[24px] max-w-[758px] text-p-grey"
      style={{ color: "var(--dark-grey)" }}
    >
      <div className="subtitle-blue">Умови кредитування</div>
      <div className="flex gap-[12px] items-center">
        <img src={bankIcon} alt="" />
        <span>ПриватБанк</span>
      </div>
      <div className="overflow-auto flex flex-col gap-[20px] max-h-[667px]">
        {creaditInfoExample.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default CreditInfo;
