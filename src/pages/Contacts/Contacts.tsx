import { useState, useEffect } from "react";
import MapComponent from "../../components/MapComponent/MapComponent";
import icon1 from "../../assets/img/pages/contacts/icon1.svg";
import icon2 from "../../assets/img/pages/contacts/icon2.svg";
import icon3 from "../../assets/img/pages/contacts/icon3.svg";
import icon4 from "../../assets/img/pages/contacts/icon4.svg";
import icon5 from "../../assets/img/pages/contacts/icon5.svg";
import viber from "../../assets/img/pages/contacts/viber.svg";
import telegram from "../../assets/img/pages/contacts/telegram.svg";
import marker from "../../assets/img/pages/contacts/marker.svg";
const Contacts = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function calculateHeight(screenWidth: number): number {
    if (screenWidth > 1280) {
      return 754;
    }
    if (screenWidth < 1280 && screenWidth > 768) {
      return (754 / 4) * 3;
    }
    if (screenWidth > 640 && screenWidth < 768) {
      return 754 / 2;
    }
    return 203;
  }

  return (
    <div className="container">
      <h2 className="subtitle">Контакти</h2>
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-y-[24px]">
        <div className="bg-dark text-white p-[30px] text-[14px] leading-[1.43]">
          <div className="flex flex-col gap-[24px]">
            <div className="flex sm:flex-row flex-col gap-x-[40px] items-start">
              <div className="flex items-center gap-[16px] sm:mb-0 mb-[16px]">
                <img src={icon1} alt="" />
                <p className="text-[16px] text-bold block sm:hidden">
                  Контактні номери
                </p>
              </div>

              <div className="flex sm:flex-row flex-col gap-x-[40px]">
                <div className="">
                  <p className="mb-[16px]">Відділ продажу</p>
                  <div className="flex flex-col gap-[12px]">
                    <a href="tel:+1234567890">(067) 11-12-485</a>
                    <a href="tel:+1234567890">(066) 484-39-22</a>
                    <div className="flex gap-[9px] items-center">
                      <a href="tel:+1234567890">(063) 747-33-48</a>
                      <a href="">
                        <img src={viber} alt="" />
                      </a>
                      <a href="">
                        <img src={telegram} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="">
                  <p className="mb-[16px]">Сервісний центр</p>
                  <div className="flex flex-col gap-[12px]">
                    <div className="flex gap-[9px] items-center">
                      <a href="tel:+1234567890">(097) 097 33 03</a>
                      <a href="">
                        <img src={viber} alt="" />
                      </a>
                    </div>

                    <a href="tel:+1234567890">(066) 097 33 03</a>
                    <a href="tel:+1234567890">(093) 097 33 03</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-x-[40px] sm:flex-row flex-col items-start ">
              <div className="flex items-center gap-[16px] sm:mb-0 mb-[16px]">
                <img src={icon2} alt="" />
                <p className="text-[16px] text-bold block sm:hidden">E-mail</p>
              </div>

              <div className=" flex xl:flex-row flex-col gap-x-[40px]">
                <div className="flex flex-col gap-[24px]">
                  <div className="flex flex-col gap-[12px]">
                    <p>Інтернет-продажі</p>
                    <a
                      href=""
                      className="hover:underline text-[16px] text-bold"
                    >
                      yurij.kovika@v-comp.com.ua
                    </a>
                  </div>
                  <div className="flex flex-col gap-[12px]">
                    <p>Ремонт техніки (сервісний центр) </p>
                    <a
                      href=""
                      className="hover:underline text-[16px] text-bold"
                    >
                      a.ovsyannikov@v-comp.com.ua
                    </a>
                  </div>
                  <div className="flex flex-col gap-[12px]">
                    <p>
                      Відділ корпоративних продажів (рахунки з НДС, без НДС){" "}
                    </p>
                    <a
                      href=""
                      className="hover:underline text-[16px] text-bold"
                    >
                      o.ryabiy@v-comp.com.ua
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-[24px] max-w-fit">
                  <div className="flex flex-col gap-[12px]">
                    <p>Покупка вживаного</p>
                  </div>
                  <div className="flex flex-col gap-[12px]">
                    <p>Жалоби та пропозиції</p>
                    <a href="" className="text-[16px] text-bold">
                      v.krasnoschok@v-comp.com.ua
                    </a>
                    <a href="" className="text-[16px] text-bold">
                      a.krasnoschok@v-comp.com.ua
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-[40px]  items-start">
              <img src={icon3} alt="" />
              <div className="">
                <p className="mb-[4px]">Понеділок-П'ятниця 9:00-19:00</p>
                <p>Субота-Неділя: з 9:00-16:00</p>
              </div>
            </div>
            <div className="flex gap-[40px] items-center">
              <img src={icon4} alt="" />
              <p>г. Днепр, ул. Европейская, 8 (бывшая Миронова 8)</p>
            </div>
            <div className="flex items-center gap-[46px]">
              <img src={icon5} alt="" />
              <a href="" className="text-bold text-[16px]">
                yurij.kovika
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-[766px]">
          <MapComponent
            width={700}
            height={calculateHeight(width)}
            img={marker}
            iconHeight={58}
            iconWidth={39}
          />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
