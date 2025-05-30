import React, { useState, useEffect, useRef } from "react";
import crossWhite from "../../assets/img/header/cross-white.svg";
import logoWhite from "../../assets/img/header/logo-mobile-white.svg";
import arrowDown from "../../assets/img/header/arrow-down-white.svg";
import loginIcon from "../../assets/img/header/login-icon.svg";
import catalogIcon from "../../assets/img/header/catalog-icon.svg";
import basketIcon from "../../assets/img/header/basket-icon-mobile.svg";
import comparIcon from "../../assets/img/header/compar-icon.svg";
import favoritesIcon from "../../assets/img/header/favorites-icon-white.svg";
import insta from "../../assets/img/footer/insta.svg";
import facebook from "../../assets/img/footer/facebook.svg";
import viber from "../../assets/img/footer/viber.svg";
import telegram from "../../assets/img/footer/telegram.svg";
import youtube from "../../assets/img/footer/youtube.svg";
import linkedin from "../../assets/img/footer/linkedin.svg";
import { ModalType } from "../Header/Header";
import { Link } from "react-router-dom";
interface BurgerMenuProps {
  showTheModal: (modalType: ModalType) => void;
  isMobile: boolean;
  showTheModalMobile: (modalType: ModalType) => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({
  showTheModal,
  isMobile,
  showTheModalMobile,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const blockRef = useRef<HTMLDivElement>(null);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [clickOnBtnModal, setClickOnBtnModal] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    // console.log(isModalOpen);
    if (blockRef.current && !blockRef.current.contains(event.target as Node)) {
      setIsVisible(false);
      setIsServicesOpen(false);
      setIsInfoOpen(false);
    }
  };
  useEffect(() => {
    console.log(clickOnBtnModal);
  });
  // useEffect(() => {
  //   if (!isModalOpen) {
  //     setClickOnBtnModal(false);
  //   } else {
  //     setClickOnBtnModal(true);
  //   }
  // }, [isModalOpen]);

  const onClickModalBtn = (modalType: ModalType) => {
    setClickOnBtnModal(true);
    showTheModal(modalType);
    // console.log(clickOnBtnModal);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <button onClick={toggleVisibility} className="">
        <div className="flex flex-col gap-[8px]">
          <div className="bg-[var(--soft)] h-[1.5px] w-[18px] md:w-[20px]"></div>
          <div className="bg-[var(--soft)] h-[1.5px] w-[18px] md:w-[20px]"></div>
          <div className="bg-[var(--soft)] h-[1.5px] w-[18px] md:w-[20px]"></div>
        </div>
      </button>
      <div
        ref={blockRef}
        className={`fixed z-10 w-[274px] xs:w-[424px] top-0 left-0 h-full bg-dark transition-transform duration-500 ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="absolute right-[24px] sm:right-[34px] justify-between flex items-center sm:left-[30px] top-[70px] left-[16px]">
          <Link to="/">
            <img
              src={logoWhite}
              alt=""
              className="w-[124px] h-[32px] sm:w-[160px] sm:h-[41px]"
            />
          </Link>
          <button onClick={toggleVisibility} className="">
            <img src={crossWhite} alt="" />
          </button>
        </div>

        <div className="mt-[150px] text-[var(--some---1)] text flex flex-col gap-[20px] text-[12px] px-[30px]">
          {isMobile && <div className="">ENG / UA</div>}

          <div className="hidden md:flex gap-[4px] items-center">
            <div className="flex text-[16px] gap-[8px] items-center">
              <button
                onClick={() => onClickModalBtn("login")}
                data-type="button"
              >
                <p className="hover:font-bold hover:cursor-pointer">Вхід</p>
              </button>
              <div className="">|</div>
              <button
                onClick={() => onClickModalBtn("sign-up")}
                data-type="button"
              >
                <p className="hover:font-bold hover:cursor-pointer">
                  Реєстрація
                </p>
              </button>
            </div>
          </div>
          <div className="flex md:hidden flex-col gap-[12px] text-[16px]">
            <div
              className="flex gap-[16px] items-center"
              onClick={() => onClickModalBtn("login")}
            >
              <img src={loginIcon} className="w-[24px] h-[24px]" alt="" />
              <div className="flex text-[16px] gap-[8px] items-center">
                <button
                  onClick={() => onClickModalBtn("login")}
                  data-type="button"
                >
                  <p className="hover:font-bold hover:cursor-pointer">Вхід</p>
                </button>
                <div className="">|</div>
                <button
                  onClick={() => onClickModalBtn("sign-up")}
                  data-type="button"
                >
                  <p className="hover:font-bold hover:cursor-pointer">
                    Реєстрація
                  </p>
                </button>
              </div>
            </div>
            <button
              className="flex gap-[16px] items-center"
              onClick={() => showTheModal("catalog")}
              data-type="button"
            >
              <img src={catalogIcon} className="w-[24px] h-[24px]" alt="" />
              <p>Каталог</p>
            </button>
            <button
              className="flex gap-[16px] items-center"
              onClick={() => showTheModal("basket")}
              data-type="button"
            >
              <img src={basketIcon} className="w-[24px] h-[24px]" alt="" />
              <p>Корзина</p>
            </button>
            <button
              className="flex gap-[16px] items-center"
              data-type="button"
              onClick={() => showTheModalMobile("compare")}
            >
              <img src={comparIcon} className="w-[24px] h-[24px]" alt="" />
              <p>Порівняння</p>
            </button>

            <button
              className="flex gap-[16px] items-center"
              onClick={() => showTheModal("favorites")}
              data-type="button"
            >
              <img src={favoritesIcon} className="w-[24px] h-[24px]" alt="" />
              <p>Обране</p>
            </button>
          </div>
          <div className="">
            <button
              className="flex w-full justify-between items-center mb-[16px]"
              onClick={() => setIsInfoOpen((prev) => !prev)}
            >
              <p className="text-[18px]">Інформація</p>
              <img
                src={arrowDown}
                className={`transition-transform duration-500 ${
                  isInfoOpen ? "rotate-180" : "rotate-0"
                }`}
                alt=""
              />
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                isInfoOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="flex flex-col gap-[12px]">
                <a href="">Акції</a>
                <a href="">Кредит</a>
                <a href="">Оплата та доставка</a>
                <a href="">Гарантія</a>
                <a href="">Поширені запитання</a>
                <a href="">Новони</a>
                <a href="">Блог</a>
                <a href="">Про нас</a>
                <a href="">Політика конфеденційності</a>
                <a href="">Контакти</a>
              </div>
            </div>
          </div>
          <div className="">
            <button
              className="flex w-full justify-between items-center mb-[16px] "
              onClick={() => setIsServicesOpen((prev) => !prev)}
            >
              <p className="text-[18px]">Наші сервіси</p>
              <img
                src={arrowDown}
                className={`transition-transform duration-500 ${
                  isServicesOpen ? "rotate-180" : "rotate-0"
                }`}
                alt=""
              />
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                isServicesOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="flex flex-col gap-[12px]">
                <a href="" className="hover:font-semibold">
                  Акції
                </a>
                <a href="">Кредит</a>
                <a href="">Оплата та доставка</a>
                <a href="">Гарантія</a>
                <a href="">Поширені запитання</a>
                <a href="">Новони</a>
                <a href="">Блог</a>
                <a href="">Про нас</a>
                <a href="">Політика конфеденційності</a>
                <a href="">Контакти</a>
              </div>
            </div>
          </div>
          <div className="">
            <p className="mb-[16px] sm:mb-[12px] text-[18px]">Контакти</p>
            <div className="flex flex-col gap-[12px]">
              <p>(067) 11-12-485 - Відділ продажів</p>
              <p>(066) 484-39-22 - Відділ продажів</p>
              <p>(063) 747-33-48 - Відділ продажів</p>
              <p>Дніпро, Європейська, 8 (в минулому Миронова, 8)</p>
              <p>Понеділок-П'ятница 9:00-19:00 Субота-Неділя: з 9:00-16:00</p>
            </div>
          </div>
          <div className="">
            <p className="mb-[16px] sm:mb-[12px] text-[18px]">
              Слідкуйте за нами
            </p>
            <div className="flex gap-[8px]">
              <a href="" className="hover:opacity-[0.8] transition-all">
                <img src={insta} alt="insta" />
              </a>
              <a href="" className="hover:opacity-[0.8] transition-all">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="" className="hover:opacity-[0.8] transition-all">
                <img src={viber} alt="viber" />
              </a>
              <a href="" className="hover:opacity-[0.8] transition-all">
                <img src={telegram} alt="telegram" />
              </a>
              <a href="" className="hover:opacity-[0.8] transition-all">
                <img src={youtube} alt="youtube" />
              </a>
              <a href="" className="hover:opacity-[0.8] transition-all">
                <img src={linkedin} alt="linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
