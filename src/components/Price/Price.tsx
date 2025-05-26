import { FC } from "react";

const Price: FC<{ price: number; discountedPrice: number | undefined }> = ({
  price,
  discountedPrice,
}) => {
  return (
    <div className="">
      <div className="flex flex-col">
        {discountedPrice && (
          <div className="text-bold text-[12px] text-[var(--gray-scale---40)] ">
            <span className="line-through mr-[2px]">{price}</span>
            <span className="text-[8px]">грн.</span>
          </div>
        )}
        <div className="flex items-center gap-[12px] ">
          <div className="text-[var(--accenty---red)] text-[28px] text leading-[0.86] ml-[12px]">
            {discountedPrice ? discountedPrice : price}
            <span className="ml-[2px] text text-[12px]">грн.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
