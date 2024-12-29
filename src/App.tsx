import Canvas from "./Canvas";
import "./index.css";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    // Cleanup Locomotive Scroll instance
    // return () => {
    //   scroll.destroy();
    // };
  }, []);
  return (
    <>
      <div className="w-full relative  text-black min-h-screen ">
        {data[0].map((items, index) => (
          <Canvas details={items} key={index} />
        ))}
        <div className=" w-full h-full p-2 ">
          <nav className="flex w-full justify-between ">
            <div className="text-xl">Thirtysixstudios</div>
            <div className="gap-10 flex">
              {[
                "What we do",
                "Who we are",
                "How we give back",
                "Talk to us",
              ].map((link, index) => (
                <a key={index} href={`${link.toLowerCase()}`}>
                  {link}
                </a>
              ))}
            </div>
          </nav>
          <div className="px-[20%] w-full mt-3 relative z-[1]">
            <div className="w-[50%]">
              <h3 className="text-4xl  leading-[1.3] ">
                At Thirtysixstudio, we build immersive digital experiences for
                brands with a purpose.
              </h3>
              <p className="mt-8 text-base w-[80%]">
                We’re a boutique production studio focused on design, motion,
                and creative technology, constantly reimagining what digital
                craft can do for present-time ads and campaigns.
              </p>
              <p className="mt-8 font-light">Scroll</p>
            </div>
          </div>
          <div className="w-full absolute bottom-0 left-0">
            <h1 className="text-[13rem] font-normal leading-none  pl-4">
              Thirtysixstudio
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full h-screen  relative px-10 mt-32">
        {data[1].map((items, index) => (
          <Canvas details={items} key={index} />
        ))}
        <div className="flex justify-around z-[1]  relative px-[5%] ">
          <h3 className="text-2xl font-semibold">01 --- WHAT WE DO</h3>
          <div className="w-[25%] ">
            <p className="text-3xl font-normal text-left">
              We aim to revolutionize digital production in the advertising
              space, bringing your ideas to life.
            </p>
            <div className="mt-32">
              <p className="text-sm mb-4">
                As a contemporary studio, we use cutting-edge design practices
                and the latest technologies to deliver seamless digital work.
              </p>
              <p className="text-sm">
                Our commitment to creativity, innovation, and simplicity, paired
                with our agile approach, ensures your journey with us is smooth
                and enjoyable from start to finish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
