import { FC } from "react";
import telephoneIcon from "../../../assets/img/header/telephone-icon.svg";
import viberIcon from "../../../assets/img/header/viber-icon.svg";
import telegramIcon from "../../../assets/img/header/telegram-icon.svg";
const PhoneNumbers: FC<{ mobile: boolean }> = ({ mobile }) => {
  return (
    <div className="">
      <div
        className={`md:absolute md:right-0 md:top-[44px] w-[288px] p-[16px] bg-white ${
          mobile ? "" : "shadow"
        }`}
      >
        <div className="block md:hidden subtitle-blue md-[24px]">
          Наші телефони
        </div>
        <div className="flex flex-col mt-[4px] subtitle-blue">
          <a href="tel:+1234567890" className="flex gap-[20px]">
            <img src={telephoneIcon} alt="" />
            <span>(067) 11-12-485</span>
          </a>
          <a href="tel:+1234567890" className="flex gap-[20px]">
            <img src={telephoneIcon} alt="" />
            <span>(066) 484-39-22</span>
          </a>
          <div className="flex gap-[15px]">
            <a href="tel:+1234567890" className="flex gap-[15px]">
              <img className="mr-[5px]" src={telephoneIcon} alt="" />
              <span>(063) 747-33-48</span>
            </a>
            <div className="flex gap-[14px] items-center">
              <a href="">
                <img className="w-[18px] h-[20px]" src={viberIcon} alt="" />
              </a>
              <a href="">
                <img className="w-[20px] h-[16px]" src={telegramIcon} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-[10px] items-center mt-[30px]">
          <div className="h-[1px] w-[100%] bg-[var(--gray-scale---20)]"></div>
          <div className="text text-[10px] leading-[1.2] text-[var(--gray-scale---20)]">
            або
          </div>
          <div className="h-[1px] w-[100%] bg-[var(--gray-scale---20)]"></div>
        </div>
        <div className="flex flex-col gap-[16px] mt-[24px]">
          <div className="subsubtitle self-start">Передзвоніть мені</div>
          <input
            type="text"
            placeholder="Ваше ім'я"
            className="py-[10px] px-[8px]"
          />
          <input
            type="number"
            placeholder="Ваш номер телефону"
            className="py-[10px] px-[8px]"
          />
          <button className="button button-blue">Замовити дзвінок</button>
        </div>
      </div>
    </div>
  );
};

export default PhoneNumbers;
