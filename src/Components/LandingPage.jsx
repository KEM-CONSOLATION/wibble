import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BuyButton from "../assets/Buy_Weegle_Button.svg";
import checkIcon from "../assets/checkIcon.svg";
import DexScreener from "../assets/DexScreener.png";
import rocket from "../assets/ion_rocket-sharp.svg";
import Coingeco from "../assets/Coingeco.png";
import CoincapMarket from "../assets/CoincapMarket.png";
import XIcon from "../assets/XIcon.png";
import Telegram from "../assets/Telegram.png";
import WeegleGIF from "../assets/WIGGLEEGG.gif";
import icon1 from "../assets/icon1.svg";
// import icon2 from "../assets/icon2.svg";
import { Typewriter } from "react-simple-typewriter";
import { RiArrowUpDoubleLine } from "react-icons/ri";

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
    <div className=" max-w-[1920px] 2xl:mx-auto lg:mx-[40px] mx-[10px] mt-[10px] relative text-white">
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
            className={`${menuOpen ? "block" : "hidden"} md:block mt-2 lg:mt-0`}
          >
            <div className="mt-[10px] md:mt-0 font-proxima font-[700] text-[18px] lg:text-[30px] text-[#FCCE06] grid text-center md:flex items-center justify-center gap-[10px] lg:gap-[40px]">
              <p className=" hover:text-white">
                <a href="#about">ABOUT</a>{" "}
              </p>
              <p className=" hover:text-white">
                {" "}
                <a href="#tokenomics">TOKENOMICS</a>{" "}
              </p>
              <p className=" hover:text-white">
                {" "}
                <a href="#buy">HOW TO BUY</a>{" "}
              </p>
              <p className=" hover:text-white">
                <a href="#weegles">WEEGLES</a>
              </p>
            </div>
          </div>
          <div className=" hidden md:block text-[#FCCE06] " data-aos="fade-up">
            <p
              className="font-bright text-[#FCCE06] font-[700] text-[50px]
              md:text-[50px] lg:text-[180px]"
            >
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

          <div className="relative max-w-[638px]">
            <img src={WeegleGIF} alt="" />
            <div className="absolute inset-0 bg-transparent opacity-50 flex items-center justify-center"></div>
          </div>
        </div>
      </div>

      <div
        id="about"
        className=" mx-[10px]  2xl:mx-40  grid gap-[30px] items-center place-items-center"
        data-aos="fade-up"
      >
        <p className=" font-bright text-[30px] lg:text-[70px] font-[600] text-[#FCCE06]">
          ABOUT
        </p>
        <p className=" text-justify text-[18px] lg:text-[30px]  font-proxima">
          The <span className=" text-[#FCCE06]">$WEEGLE</span> memecoin was born
          out of the imperative need to showcase the resilient nature of
          <span className=" text-[#FCCE06]"> Binance</span>. A case that can be
          likened to “a <span className=" text-[#FCCE06]">cat</span> with nine
          (9) lives” Its no longer news that, no matter what is thrown at
          Binance or her founder, the entity can only ‘Weeble Wobble , But They
          Won’t Fall Down’
        </p>
        <p className="text-justify text-[18px] lg:text-[30px] font-[600] font-proxima">
          {" "}
          Extending beyond the <span className="text-[#FCCE06]">Binance </span>
          story, <span className="text-[#FCCE06]">$WEEGLE</span> is now a
          representative of the community&apos;s collective efforts to
          supporting <span className=" text-[#FCCE06]">Binance </span> to keep
          leading the Charge.
        </p>
      </div>

      <div className=" animate-bounce py-[40px] flex items-center justify-center">
        <img src={BuyButton} alt="" />
      </div>

      <div className=" text-center">
        <div className=" py-[20px]" id="weegles">
          <p className="font-bright text-[#FCCE06] font-[700] text-[30px] md:text-[50px] lg:text-[70px]">
            MISSION
          </p>
        </div>

        <div className="max-w-[935px] mx-auto my-[20px]">
          <div className="grid gap-[20px] font-proxima text-[18px] lg:text-[30px] font-[600]">
            <div className="flex items-start gap-[20px]">
              <img src={checkIcon} alt="Check icon" className="" />
              <p className=" text-justify">
                The mission of <span className="text-[#FCCE06]">WEEGLE</span>{" "}
                memecoin is to funfully dance{" "}
                <span className="text-[#FCCE06]">‘Binance’</span> meme culture
                back into popularity.
              </p>
            </div>
            <div className="flex items-start gap-[20px]">
              <img src={checkIcon} alt="Check icon" className="" />
              <p className=" text-justify">
                The Roadmap is{" "}
                <span className="text-[#FCCE06]">WEEGLE WEEGLE WEEGLE</span> to
                the moon
              </p>
            </div>
          </div>
        </div>

        <div className="    mx-[10px]  2xl:mx-40">
          <div className=" py-[40px] flex items-center justify-center animate-bounce">
            <img src={BuyButton} alt="" />
          </div>

          <div className=" py-[20px]" id="buy">
            <p className="font-bright  text-[#FCCE06] font-[700] text-[30px] md:text-[50px] lg:text-[70px]">
              HOW TO BUY $WEEGLE
            </p>
          </div>

          <div className="flex justify-center items-center ">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[40px] text-center font-proxima text-[18px] lg:text-[30px] mx-[10px] md:mx-0">
              <div>
                <p className="font-bright text-[#FCCE06] font-[700] text-[20px] md:text-[28px] lg:text-[35px]">
                  STEP 1:
                </p>
                <p>Download Trust Wallet and Set up</p>
              </div>
              <div>
                <p className="font-bright text-[#FCCE06] font-[700] text-[20px] md:text-[28px] lg:text-[35px]">
                  STEP 2:
                </p>
                <p>Fund Your Wallet with BNB</p>
              </div>
              <div>
                <p className="font-bright text-[#FCCE06] font-[700] text-[20px] md:text-[28px] lg:text-[35px]">
                  STEP 3:
                </p>
                <p>Once wallet is funded, tap on the in-App browser</p>
              </div>
              <div>
                <p className="font-bright text-[#FCCE06] font-[700] text-[20px] md:text-[28px] lg:text-[35px]">
                  STEP 4:
                </p>
                <p>
                  Input the DEX URL{" "}
                  <a
                    href="https://pancakeswap.finance"
                    className="text-[#FCCE06]"
                  >
                    https://pancakeswap.finance
                  </a>
                </p>
              </div>
              <div>
                <p className="font-bright text-[#FCCE06] font-[700] text-[20px] md:text-[28px] lg:text-[35px]">
                  STEP 5:
                </p>
                <p>
                  Connect your wallet, and ensure you&apos;re on the Binance
                  chain
                </p>
              </div>
              <div>
                <p className="font-bright text-[#FCCE06] font-[700] text-[20px] md:text-[28px] lg:text-[35px]">
                  STEP 6:
                </p>
                <p>
                  At the top we have BNB. at the bottom we select token we want
                  to buy
                </p>
              </div>
              <div>
                <p className="font-bright text-[#FCCE06] font-[700] text-[20px] md:text-[28px] lg:text-[35px]">
                  STEP 7:
                </p>
                <p>
                  Get the contract address of the $WEEGLE token and paste on
                  select token beneath
                </p>
              </div>
              <div>
                <p className="font-bright text-[#FCCE06] font-[700] text-[20px] md:text-[28px] lg:text-[35px]">
                  STEP 8:
                </p>
                <p>
                  Trade (if transaction doesn&apos;t go through, increase
                  slippage if needed)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" mx-[10px]  2xl:mx-[40px]  mt-[20px]">
          <div className=" py-[40px] flex items-center justify-center animate-bounce">
            <img src={BuyButton} alt="" />
          </div>

          <div className=" py-[20px]" id="tokenomics">
            <p className="font-bright  text-[#FCCE06] font-[700] text-[30px] md:text-[50px] lg:text-[70px]">
              TOKENOMICS
            </p>
          </div>

          <div className=" font-proxima font-[500] grid mx-[10px] md:mx-0 md:grid-cols-2 items-start  gap-[10px] text-left lg:grid-cols-2 place-items-center">
            <div className="  ">
              <div className=" flex items-center gap-[10px] ">
                <img src={icon1} alt="" className=" w-[30px] h-[30px]" />
                <p className="font-bright text-[#FCCE06] font-[700]  text-[20px] lg:text-[35px]">
                  CONFIGURATION
                </p>
              </div>
              <div className="py-[10px] text-[18px] lg:text-[30px]">
                <p>4,444,444,444 $WEEGLE</p>
                <p>Stealth Launch</p>
                <p>Zero % Team Allocations</p>
                <p>4.44% Airdrop to Binance Community </p>
                {/* <p>5% Airdrop to Weegle to earn players </p> */}
                <p> Zero Presale </p>
                <p>Zero Taxes </p>
                {/* <p>Auto TBM</p> */}
              </div>
            </div>
            <div className=" ">
              <div className=" flex items-center gap-[10px]">
                <img src={rocket} alt="" className=" w-[30px] h-[30px]" />
                <p className="font-bright text-[#FCCE06] font-[700] text-[20px] lg:text-[35px]">
                  LAUNCHCANICS
                </p>
              </div>
              <div className="py-[10px] text-[18px] lg:text-[30px]">
                <p>Max Supply:4,444,444,444</p>
                <p>⁠Total Supply:4,444,444,444</p>
                <p>Circulating Supply at Launch: 4,444,444,444 </p>
                <p> Contract Revoked/Renounced </p>
                <p>Liqiudity Locked for 4 years</p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className=" py-[40px] flex items-center justify-center animate-bounce">
            <img src={BuyButton} alt="" />
          </div>

          <div className=" flex items-center gap-[10px] justify-center md:gap-[60px]">
            <img src={XIcon} alt="" className=" w-[40px] h-[40px]" />
            <img src={Telegram} alt="" className=" w-[40px] h-[40px]" />
            <img src={CoincapMarket} alt="" className=" w-[40px] h-[40px]" />
            <img src={Coingeco} alt="" className=" w-[40px] h-[40px]" />
            <img src={DexScreener} alt="" className=" w-[40px] h-[40px]" />
          </div>
        </div>

        <div className=" py-[60px] max-w-6xl mx-auto">
          <div className="">
            <div className=" flex items-center gap-[10px] justify-center">
              <div className="relative max-w-[40px]" data-aos="fade-up">
                <img src={WeegleGIF} alt="" />
                <div className="absolute inset-0 bg-transparent opacity-50 flex items-center justify-center"></div>
              </div>
              <p className=" font-bright text-[30px] lg:text-[70px] font-[700] text-[#FCCE06]">
                DISCLAIMER
              </p>
            </div>
            <div className="flex items-start  gap-[20px]">
              <img src={checkIcon} alt="Check icon" className="" />
              <p className=" text-justify text-[18px] lg:text-[30px]">
                <span className="text-[#FFC700]"> $WEEGLE </span>is not part of
                the <span className="text-[#FFC700]">Binance</span> website or
                <span className="text-[#FFC700]"> Binance</span> Inc. This site
                is NOT endorsed by{" "}
                <span className="text-[#FFC700]">Binance</span> in any way.{" "}
                <span className="text-[#FFC700]">Binance</span> is a trademark
                of Binance Inc.
              </p>
            </div>

            <div className="flex items-start  py-[10px] gap-[20px] ">
              <img src={checkIcon} alt="Check icon" className="" />
              <p className=" text-justify text-[18px] lg:text-[30px]">
                <span className="text-[#FFC700]"> $WEEGLE </span> is a community
                Crypto coin with no intrinsic value or promise of financial
                return. There is no formal team. The crypto project is for
                entertainment purposes only.
              </p>
            </div>
          </div>
        </div>
      </div>

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-[#ffffff] text-[#2F160B] px-4 py-4 rounded-full shadow-lg hover:bg-[#47240E] hover:text-white transition-all duration-300 animate-bounce hover:animate-none"
        >
          <RiArrowUpDoubleLine className="text-2xl" />
        </button>
      )}
    </div>
  );
};

export default LandingPage;
