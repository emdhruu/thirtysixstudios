import { useEffect, useRef } from "react";
import canvasImages from "./canvasimages";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const img = new Image();
        img.src = canvasImages[0];
        img.onload = () => {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
        };
      }
    }
  }, []);

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
