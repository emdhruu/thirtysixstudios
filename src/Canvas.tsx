import { useEffect, useRef, useState } from "react";
import canvasImages from "./canvasimages";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Canvas = ({
  details,
}: {
  details: {
    startIndex: number;
    numImages: number;
    duration: number;
    size: number;
    top: number;
    left: number;
    zIndex: number;
  };
}) => {
  const { startIndex, numImages, duration, size, top, left, zIndex } = details;
  const [index, setIndex] = useState({ value: startIndex });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useGSAP(() => {
    gsap.to(index, {
      value: startIndex + numImages - 1,
      duration: duration,
      repeat: -1,
      ease: "linear",
      onUpdate: () => {
        setIndex({ value: Math.round(index.value) });
      },
    });
  });

  useEffect(() => {
    const scale = window.devicePixelRatio;
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const img = new Image();
        img.src = canvasImages[index.value];
        img.onload = () => {
          canvas.width = canvas.offsetWidth * scale;
          canvas.height = canvas.offsetHeight * scale;
          canvas.style.width = canvas.offsetWidth + "px";
          canvas.style.height = canvas.offsetHeight + "px";
          ctx.scale(scale, scale);
          ctx.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
        };
      }
    }
  }, [index]);

  return (
    <div>
      <canvas
        data-scroll
        data-scroll-speed={Math.random().toFixed(1)}
        id="canvas"
        ref={canvasRef}
        className="absolute"
        style={{
          width: `${size * 1.2}px`,
          height: `${size * 1.2}px`,
          top: `${top}%`,
          left: `${left}%`,
          zIndex: `${zIndex}`,
        }}
      ></canvas>
    </div>
  );
};
export default Canvas;
