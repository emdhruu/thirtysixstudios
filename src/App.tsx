import Canvas from "./Canvas";
import "./index.css";

const App = () => {
  return (
    <>
      <div className="w-full bg-black text-white min-h-screen">
        <Canvas startIndex={0} />
        <Canvas startIndex={152} />
        <Canvas startIndex={302} />
      </div>
    </>
  );
};
export default App;
