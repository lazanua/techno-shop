import React, { useRef } from "react";
import "./index.css";

interface ZoomImageProps {
  src: string;
  width: number;
  height: number;
}

const ZoomImage: React.FC<ZoomImageProps> = ({ src, width, height }) => {
  const zoomContainerRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = zoomContainerRef.current;
    if (container) {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;

      const zoomImage = container.querySelector(
        ".zoom-image"
      ) as HTMLImageElement;
      if (zoomImage) {
        zoomImage.style.transformOrigin = `${x}% ${y}%`;
      }
    }
  };

  return (
    <div
      className="zoom-container transition-all"
      ref={zoomContainerRef}
      onMouseMove={handleMouseMove}
    >
      <img
        src={src}
        className={`zoom-image cursor-pointer h-[${height}px] w-[${width}px] object-contain`}
      />
    </div>
  );
};

export default ZoomImage;
