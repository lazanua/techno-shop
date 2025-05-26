import { FC } from "react";

const Tab2: FC = () => {
  return (
    <div className="">
      <div className="text-[var(--dark-grey)] mb-[12px]">
        Введіть вашу адресу
      </div>
      <div className="flex gap-[16px]">
        <input
          type="text"
          className="border px-[8px] py-[13px]"
          placeholder="Вулиця"
        />
        <input
          type="text"
          className="border px-[8px] py-[13px]"
          placeholder="Дім"
        />
        <input
          type="text"
          className="border px-[8px] py-[13px]"
          placeholder="Квартира"
        />
      </div>
    </div>
  );
};

export default Tab2;
