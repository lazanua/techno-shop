import React, { useRef, useEffect } from "react";
import scrollBtn from "../../assets/img/product-page/scroll-btn.svg";

interface ImageScrollProps {
  images: string[];
  changeImage: (index: number) => void;
}

const ImagesScroll: React.FC<ImageScrollProps> = ({ images, changeImage }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollAmount = 180;

  const handleWheel = (event: WheelEvent) => {
    if (event.deltaY < 0) {
      containerRef.current?.scrollBy({ top: -50 });
    } else {
      containerRef.current?.scrollBy({
        top: 50,
      });
    }
    event.preventDefault();
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel);
      return () => {
        container.removeEventListener("wheel", handleWheel);
      };
    }
  }, []);

  const scrollUp = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ top: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollDown = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ top: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      className="relative"
    >
      <button onClick={scrollUp} className="absolute top-[16px] left-[50%]">
        <img src={scrollBtn} className="rotate-180" alt="" />
      </button>
      <div
        ref={containerRef}
        style={{
          height: "580px",
          overflowY: "hidden",
        }}
      >
        <div className="flex flex-col gap-[8px]">
          {images.map((image, index) => (
            <button key={index} onClick={() => changeImage(index)}>
              <img src={image} alt="" className="w-[162px] h-[162px]" />
            </button>
          ))}
        </div>
      </div>
      <button
        className="absolute bottom-[16px] left-[50%] translate-x-[-50%]"
        onClick={scrollDown}
      >
        <img src={scrollBtn} alt="" />
      </button>
    </div>
  );
};

export default ImagesScroll;
