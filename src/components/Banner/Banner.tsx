import { useState, useEffect, useRef } from "react";
import styles from "./index.module.css"; // Не забудьте создать и подключить CSS файл

const images = [
  "https://usain.ua/blog/wp-content/uploads/2024/10/banner-laptops-2.png",
  "https://usain.ua/blog/wp-content/uploads/2024/10/banner-laptops-e1728416364361-1440x604.jpg",
  "https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/modules/cs2404g0018-700634-gl-cs-co-aw-m16-site-banner-hp-feature-card-desktop-1440x1080.jpg?fmt=png-alpha&wid=1440&hei=1080",
  "https://cdn.thewirecutter.com/wp-content/media/2024/07/laptopstopicpage-2048px-3685-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp",
  "https://assets2.razerzone.com/images/pnx.assets/7fb8deac5d3c73e360bc687ed62be6cf/gaming-laptops-og-image.webp",
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    startInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const startInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
  };

  const handleButtonClick = (index: number) => {
    setCurrentIndex(index);
    startInterval();
  };

  return (
    <div className="lg:h-[400px] md:h-[310px] h-[201px] xl:w-[90%] w-[100%] 2xl:w-[1145px] relative z-0">
      <div className={styles.slider}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`${styles.slide} ${
              index === currentIndex ? styles.active : ""
            } w-[1145px] h-[400px] object-cover`}
          />
        ))}
      </div>
      <div
        className={`absolute z-10 sm:left-[40px] sm:right-0 right-[40px] flex gap-[4px] bottom-[12px]  sm:bottom-[40px]`}
      >
        {Array.from({ length: images.length }, (_, index) => (
          <button
            key={index}
            className={`rounded-full w-[9px] h-[9px] transition-all ${
              index === currentIndex
                ? "bg-white"
                : "bg-[var(--action---secondary)]"
            }`}
            onClick={() => handleButtonClick(index)}
          ></button>
        ))}
      </div>
      <div
        className={`absolute z-10 right-[16px] sm:left-[40px] sm:right-0 top-[40px] flex flex-col gap-[6px] md:gap-[32px] items-end sm:items-start`}
      >
        <p className={`text-900 text-[28px] md:text-[48px] text-white `}>
          TEXT BANNER
        </p>
        <p
          className={`text-400 text-[14px] md:text-[18px] text-white mb-[6px] md:mb-0`}
        >
          BANNER DESCRIPTION SMALL TEXT
        </p>
        <button
          className={`hover:bg-[#EB3838] text-white py-[16px] text-center w-[121px] md:w-[165px] rounded-[4px] bg-[var(--accenty---red)] text-900 text-[10px] `}
        >
          BANNER BUTTON
        </button>
      </div>
    </div>
  );
};

export default Banner;
