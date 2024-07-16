import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import "aos/dist/aos.css";
import WeegleGIF from "../assets/WIGGLEEGG.gif";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  return (
    <div>
      <div className=" flex items-center justify-between">
        <div className=" flex items-center justify-start md:hidden">
          <div className=" lg:hidden block max-w-[40px] relative">
            <img src={WeegleGIF} alt="" />
            <div className="absolute inset-0 bg-transparent opacity-50 flex items-center justify-center"></div>
          </div>
        </div>
        <div className="md:hidden block text-[#FCCE06] " data-aos="fade-up">
          <p className="font-bright text-[#FCCE06] font-[700] text-[40px] sm:text-[90px]">
            <Typewriter
              words={["WEEGLE"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={300}
              delaySpeed={1000}
            />
          </p>
        </div>
        <div className=" md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`text-white text-3xl focus:outline-none ${
              !menuOpen ? "animate-none" : "animate-none"
            }`}
          >
            ☰
          </button>
        </div>
      </div>
      <div className=" grid items-center md:flex md:items-start md:justify-center place-items-center  gap-[10px]">
        <div className=" hidden md:block max-w-[107px] relative">
          <img src={WeegleGIF} alt="" />
          <div className="absolute inset-0 bg-transparent opacity-50 flex items-center justify-center"></div>
        </div>
        <div className=" flex flex-col items-center">
          <p className=" hidden  mt-[10px] md:mt-0 md:flex items-center gap-[10px] text-white capitalize font-[700] text-[14px] md:text-[30px] font-bright lg:text-[40px]">
            THE <span className=" text-[#FCCE06]"> {""}BINANCE</span>
            WEEBLE WOBBLE C🐱T
          </p>

          <div className=" flex flex-col items-center justify-center md:hidden">
            <p className="  mt-[10px] text-white capitalize font-[700]  xxs:text-[12px] xs:text-[15px] sm:text-[28px] font-bright ">
              THE <span className=" text-[#FCCE06]">BINANCE </span>
              WEEBLE WOBBLE C🐱T
            </p>
          </div>
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } md:block mt-2 lg:mt-0 `}
          >
            <div className="mt-[10px] md:mt-0 font-proxima font-[700] text-[18px] lg:text-[18px] text-[#FCCE06] grid text-center md:flex items-center justify-center gap-[10px] lg:gap-[40px]  ">
              <p className=" hover:text-white">
                <a href="/#about">ABOUT</a>{" "}
              </p>
              <p className=" hover:text-white">
                {" "}
                <a href="/#tokenomics">TOKENOMICS</a>{" "}
              </p>
              <p className=" hover:text-white">
                {" "}
                <a href="/#buy">HOW TO BUY</a>{" "}
              </p>
              <p className=" hover:text-white">
                <a href="/#weegles">WEEGLES</a>
              </p>
              <Link to="/experiment1">
                <p className=" hover:text-white">EXPERIMENT 1.</p>
              </Link>
              <Link to="/experiment2">
                <p className=" hover:text-white">EXPERIMENT 2.</p>{" "}
              </Link>
              <Link to="/experiment3">
                <p className=" hover:text-white">EXPERIMENT 3.</p>{" "}
              </Link>
            </div>
          </div>
          {!["/experiment1", "/experiment2", "/experiment3"].includes(
            location.pathname
          ) && (
            <div className="hidden md:block text-[#FCCE06]" data-aos="fade-up">
              <p className="font-bright text-[#FCCE06] font-[700] text-[50px] md:text-[50px] lg:text-[180px]">
                <Typewriter
                  words={["WEEGLE"]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={300}
                  delaySpeed={1000}
                />
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
