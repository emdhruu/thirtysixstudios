import { useEffect } from "react";
import canvasImages from "./canvasimages";

const Canvas = () => {
  useEffect(() => {
    console.log(canvasImages);
  }, []);

  return (
    <div>
      Canvas
      <canvas id="canvas"></canvas>
    </div>
  );
};
export default Canvas;
