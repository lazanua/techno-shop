import React, { useRef, useState } from "react";

const slides = ["1", "2", "3", "4", "5"]; // замени на свой контент

const MobileSlider: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<null | "left" | "right">(null);
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (isAnimating) return;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isAnimating || touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;

    if (delta > 40) {
      animateSlide("right");
    } else if (delta < -40) {
      animateSlide("left");
    }

    touchStartX.current = null;
  };

  const animateSlide = (dir: "left" | "right") => {
    setIsAnimating(true);
    setDirection(dir);

    setTimeout(() => {
      setIndex((prev) =>
        dir === "left"
          ? (prev + 1) % slides.length
          : (prev - 1 + slides.length) % slides.length
      );
      setDirection(null);
      setIsAnimating(false);
    }, 300); // продолжительность анимации
  };

  const getSlideAt = (offset: number) => {
    return slides[(index + offset + slides.length) % slides.length];
  };

  const slideTranslate =
    direction === "left"
      ? "-translate-x-[66.66%]"
      : direction === "right"
      ? "translate-x-[0%]"
      : "-translate-x-[33.33%]";

  return (
    <div
      className="w-full overflow-hidden py-4"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={`flex w-full transition-transform duration-300 ease-in-out ${slideTranslate}`}
      >
        {[getSlideAt(-1), getSlideAt(0), getSlideAt(1)].map((item, i) => {
          const isActive = i === 1;
          return (
            <div
              key={i}
              className={`w-1/3 flex justify-center items-center flex-shrink-0 transition-all duration-300
                ${
                  isActive
                    ? "scale-100 opacity-100 z-10"
                    : "scale-90 opacity-40 z-0"
                }
              `}
            >
              <div className="w-11/12 h-48 rounded-xl bg-gray-300 flex items-center justify-center text-2xl font-bold shadow-md">
                {item}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileSlider;
