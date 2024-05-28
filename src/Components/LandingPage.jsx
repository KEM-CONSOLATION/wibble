import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Video from "../assets/fonts/VideoLogo.mp4";
const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    AOS.init({
      duration: 1000,
      once: true,
    });
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div className="max-w-6xl mx-auto mt-[10px] relative text-white">
      <div className=" grid items-center lg:flex lg:items-start gap-[10px]">
        <div className=" max-w-[100px] mx-auto lg:max-w-[107px]">
          <video
            src={Video}
            className="w-full h-auto max-w-full"
            autoPlay
            muted
            loop
            data-aos="fade-up"
          ></video>
        </div>
        <div className=" flex flex-col items-center">
          <p className="  flex items-center gap-[10px] text-white capitalize font-[700] text-[14px] sm:text-[20px] md:text-[30px] font-bright lg:text-[42px]">
            THE <span className=" text-[#FCCE06]"> {""}BINANCE</span> WIBBLE
            WOBBLE
            <span className=" flex items-center gap-[10px]">
              c{"  "}
              <div className=" max-w-[20px] lg:max-w-[30px]">
                <video
                  src={Video}
                  className="w-full h-auto max-w-full"
                  autoPlay
                  muted
                  loop
                  data-aos="fade-up"
                ></video>
              </div>
            </span>
            t
          </p>

          <div className=" font-proxima font-[700] text-[18px] lg:text-[30px] text-[#FCCE06] grid grid-cols-2 md:flex items-center justify-center gap-[10px] lg:gap-[40px]">
            <p>HOME </p>
            <p> TOKENOMICS </p>
            <p> HOW TO BUY </p>
            <p>WEEGLES</p>
          </div>
          <div className=" text-[#FCCE06]">
            <p
              className="font-bright text-[#FCCE06] font-[700] text-[50px] md:text-[50px] lg:text-[200px]"
              style={{
                textShadow:
                  "0 0 20px rgba(252, 206, 6, 0.8), 0 0 30px rgba(252, 206, 6, 0.6), 0 0 40px rgba(252, 206, 6, 0.4)",
              }}
            >
              WEEGLE
            </p>
          </div>

          <div className=" max-w-[638px]">
            <video
              src={Video}
              className="w-full h-auto max-w-full"
              autoPlay
              muted
              loop
              data-aos="fade-up"
            ></video>
          </div>
        </div>
      </div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-[#2F160B] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#47240E] transition-all duration-300 animate-bounce hover:animate-none"
        >
          Back to Top
        </button>
      )}
    </div>
  );
};

export default LandingPage;
