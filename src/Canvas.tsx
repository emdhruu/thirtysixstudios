import { useEffect, useRef, useState } from "react";
import canvasImages from "./canvasimages";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Canvas = ({ startIndex }: { startIndex: number }) => {
  const [index, setIndex] = useState({ value: startIndex });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useGSAP(() => {
    gsap.to(index, {
      value: startIndex + 149,
      duration: 3,
      repeat: -1,
      ease: "linear",
      onUpdate: () => {
        setIndex({ value: Math.round(index.value) });
      },
    });
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const img = new Image();
        img.src = canvasImages[index.value];
        img.onload = () => {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
        };
      }
    }
  }, [index]);

  return (
    <div>
      <canvas
        id="canvas"
        ref={canvasRef}
        className="w-[18rem] h-[18rem]"
      ></canvas>
    </div>
  );
};
export default Canvas;
