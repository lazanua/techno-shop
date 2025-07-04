import { FC, useState } from "react";
import "./index.css";
import insta from "../../assets/img/footer/insta.svg";
import facebook from "../../assets/img/footer/facebook.svg";
import viber from "../../assets/img/footer/viber.svg";
import telegram from "../../assets/img/footer/telegram.svg";
import youtube from "../../assets/img/footer/youtube.svg";
import linkedin from "../../assets/img/footer/linkedin.svg";
import inputIcon from "../../assets/img/footer/input-icon.svg";
import logo from "../../assets/img/footer/footer-logo.svg";
import card1 from "../../assets/img/footer/card1.svg";
import card2 from "../../assets/img/footer/card2.svg";
const Footer: FC = () => {
  const [userEmail, setUserEmail] = useState("");
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setUserEmail("");
    }
  };
  return (
    <footer>
      <div className="bg-dark py-[16px] md:py-[30px] mt-[24px]">
        <div className="container ">
          <div className="flex xl:flex-nowrap flex-wrap items-start gap-x-[118px] justify-between mb-[10px]">
            <div className="hidden lg:block">
              <h3>Інформація</h3>
              <div className="flex flex-col gap-[12px]">
                <a href="">Акції</a>
                <a href="">Кредит</a>
                <a href="">Оплата та доставка</a>
                <a href="">Гарантія</a>
                <a href="">Часті запитання</a>
                <a href="">Новини</a>
                <a href="">Блог</a>
                <a href="">О нас</a>
                <a href="">Політика конфедиційності</a>
                <a href="">Контакти</a>
              </div>
            </div>
            <div className="hidden lg:block">
              <h3>Послуги та сервіси</h3>
              <div className="flex flex-col gap-[12px]">
                <a href="">Сервісний центр v-comp</a>
                <a href="">Магазин вживаного товара</a>
                <a href="">Покупка вживаного </a>
                <a href="">Ремонт ПК та оргтехніки</a>
                <a href="">Комп'ютерна допомога</a>
                <a href="">Співробітництво</a>
                <a href="">Головна</a>
              </div>
            </div>
            <div className="hidden lg:block">
              <h3>Контакти</h3>
              <div className="flex flex-col gap-[12px] ">
                <div className="">
                  <a href="">(067) 11-12-485</a>
                  <span>— Відділ продажів</span>
                </div>
                <div className="">
                  <a href="">(066) 484-39-22</a>
                  <span>— Відділ продажів</span>
                </div>
                <div className="">
                  <a href="">(063) 747-33-48</a>
                  <span>— Відділ продажів</span>
                </div>
                <div className="leading-[1.5]">
                  Дніпро Європейска, 8 (колишня Міронова 8)
                </div>
                <div className="leading-[1.5]">
                  Понеділок-П'ятниця 9:00-19:00 <br /> Субота-Неділя: з
                  9:00-16:00
                </div>
              </div>
            </div>
            <div className="flex flex-row xl:flex-col gap-x-[25px] lg:items-center xl:items-start items-start justify-between  mx-auto xl:w-auto w-[100%]">
              <div className="socials hidden lg:block">
                <h3>Слідкуйте за нами</h3>
                <div className="flex gap-[8px]">
                  <a href="">
                    <img src={insta} alt="insta" />
                  </a>
                  <a href="">
                    <img src={facebook} alt="facebook" />
                  </a>
                  <a href="">
                    <img src={viber} alt="viber" />
                  </a>
                  <a href="">
                    <img src={telegram} alt="telegram" />
                  </a>
                  <a href="">
                    <img src={youtube} alt="youtube" />
                  </a>
                  <a href="">
                    <img src={linkedin} alt="linkedin" />
                  </a>
                </div>
              </div>
              <div className="mt-[28px] w-[100%] lg:w-[360px]  text-center lg:text-start">
                <h3>Підписуйтесь на наші знижки</h3>
                <div className="flex bg-white justify-between h-[39px] px-[8px] py-[2px] rounded-[6px]">
                  <input
                    type="text"
                    placeholder="Вкажіть ваш e-mail"
                    className="border-none w-[100%]"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e)}
                  />
                  <button
                    className="cursor-pointer"
                    onClick={() => setUserEmail("")}
                  >
                    <img src={inputIcon} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col  gap-y-[16px] lg:flex-row justify-between items-center py-[16px] my-[30px]"
            style={{
              borderBottom: "1px solid #6F738D",
              borderTop: "1px solid #6F738D",
            }}
          >
            <div className="flex gap-[30px] items-center ">
              <img src={logo} alt="" className="hidden xl:block" />
              <p>2008-2025 Інтернет-магазин v-comp.com.ua Всі права захищені</p>
            </div>
            <div className="flex gap-[14px] items-center">
              <img src={card1} className="w-[33px] h-[20px]" alt="" />
              <img src={card2} className="w-[36px] h-[12px]" alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
