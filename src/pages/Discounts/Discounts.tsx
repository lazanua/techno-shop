import { useState, useEffect } from "react";
import DiscountItem from "../../components/DiscountItem/DiscountItem";
import img1 from "../../assets/img/pages/discounts/1.jpg";
import img2 from "../../assets/img/pages/discounts/2.jpg";
import img3 from "../../assets/img/pages/discounts/3.jpg";
import img4 from "../../assets/img/pages/discounts/4.png";
import { motion, AnimatePresence } from "framer-motion";
const Discount = () => {
  const images = [
    "https://usain.ua/blog/wp-content/uploads/2024/10/banner-laptops-2.png",
    "https://usain.ua/blog/wp-content/uploads/2024/10/banner-laptops-e1728416364361-1440x604.jpg",
    "https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/modules/cs2404g0018-700634-gl-cs-co-aw-m16-site-banner-hp-feature-card-desktop-1440x1080.jpg?fmt=png-alpha&wid=1440&hei=1080",
    "https://cdn.thewirecutter.com/wp-content/media/2024/07/laptopstopicpage-2048px-3685-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp",
    "https://assets2.razerzone.com/images/pnx.assets/7fb8deac5d3c73e360bc687ed62be6cf/gaming-laptops-og-image.webp",
  ];

  const [currentSlider, setCurrentSlider] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const discountsSliders = [
    {
      title: "Знижки на ігрові ноутбуки до 40%!",
      text: "Суперціни на геймерські ноутбуки!",
      days: 14,
      img: "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/02/laptop-on-table-with-a-colorful-display.jpg",
    },
    {
      title: "Знижки для робітників до 50%",
      text: "Знижки для робітників до 50%",
      days: 12,
      img: "https://gratisography.com/wp-content/uploads/2019/11/gratisography-laptop-colorful-keys-free-stock-photo-1170x780.jpg",
    },
    {
      title: "Знижки на консолі до 50%",
      text: "Знижки на консолі до 50%",
      days: 8,
      img: "https://cdn.thewirecutter.com/wp-content/media/2024/11/BEST-HANDHELD-GAMING-CONSOLES-2048px-09702-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp",
    },
  ];
  useEffect(() => {
    if (discountsSliders.length <= 1) return;

    const intervalId = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentSlider(
          (prevIndex) => (prevIndex + 1) % discountsSliders.length
        );
        setIsVisible(true);
      }, 300); // Задержка перед показом нового контента
    }, 3000);

    return () => clearInterval(intervalId);
  }, [discountsSliders, 3000]);
  return (
    <div className="mb-[48px]">
      <div className="container">
        <h2 className="subtitle">Акції</h2>
        <div className="grid gap-[16px] grid-cols-1 xl:grid-cols-4 lg:grid-cols-2">
          <DiscountItem
            img={img1}
            title="Купуй монітори ASUS - отримуй знижки до 28%"
          />
          <DiscountItem img={img2} title="Наведи друга - отримай знижку!" />
          <DiscountItem
            img={img3}
            title="Акція! Знижка 40% на ігрові клавіатури"
          />
          <DiscountItem img={img4} title="Знижка 30% на монітор Dell E2016HV" />
        </div>
      </div>
      <div className="bg-dark text-white py-[66px] mt-[24px] mb-[32px]">
        <div className="container">
          <div className="flex justify-between gap-[24px] relative">
            <button
              onClick={() =>
                setCurrentSlider((prev) =>
                  prev === 0 ? discountsSliders.length - 1 : prev - 1
                )
              }
              className="absolute top-[50%] left-[-48px] translate-y-[-50%]"
            >
              <svg
                width="8"
                height="15"
                viewBox="0 0 8 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13.5L1 7.5L7 1.5"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={() =>
                setCurrentSlider((prev) =>
                  prev === discountsSliders.length - 1 ? 0 : prev + 1
                )
              }
              className="absolute right-[-48px] top-[50%] translate-y-[-50%]"
            >
              <svg
                width="8"
                height="15"
                viewBox="0 0 8 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 13.5L7 7.5L1 1.5"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <div className="">
              <AnimatePresence mode="wait">
                {isVisible && (
                  <motion.div
                    key={currentSlider}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="animated-content"
                  >
                    <div className="flex flex-row max-w-[1532px] justify-between items-center">
                      <div className="">
                        <h3 className="mb-[24px] text-semibold text-[32px] leading-[1.12]">
                          {discountsSliders[currentSlider].title}
                        </h3>
                        <p className="leading-[1.56] text-[18px]">
                          {discountsSliders[currentSlider].text}
                        </p>
                        <div
                          className="rounded-[20px] mt-[32px]  text mb-[32px] text-[var(--accenty---red)] text-[14px] max-w-fit py-[8px] px-[16px]"
                          style={{ border: "1px solid var(--accenty---red)" }}
                        >
                          До кінці акції
                          <span className="text-bold text-[16px] ml-[10px]">
                            {discountsSliders[currentSlider].days} днів
                          </span>
                        </div>
                      </div>

                      <img
                        src={discountsSliders[currentSlider].img}
                        className="max-w-[629px]
                h-[355px]
                "
                        alt=""
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-2 gap-[16px] content-center mx-auto">
          <DiscountItem
            img={img1}
            title="Купуй монітори ASUS - отримуй знижки до 28%"
          />
          <DiscountItem img={img2} title="Наведи друга - отримай знижку!" />
          <DiscountItem
            img={img3}
            title="Акція! Знижка 40% на ігрові клавіатури"
          />
          <DiscountItem img={img4} title="Знижка 30% на монітор Dell E2016HV" />
        </div>
      </div>
    </div>
  );
};

export default Discount;
