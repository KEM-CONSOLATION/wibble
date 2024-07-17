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
import { RiArrowUpDoubleLine } from "react-icons/ri";
import Navbar from "./Navbar";

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
    <div className="  relative text-white">
      <Navbar />
      <div className="relative max-w-[638px] mx-auto">
        <img src={WeegleGIF} alt="" />
        <div className="absolute inset-0 bg-transparent opacity-50 flex items-center justify-center"></div>
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

          <div className=" font-proxima font-[500] grid  md:grid-cols-2 items-start  gap-[10px] text-left lg:grid-cols-2 place-items-center">
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
                <p>Zero Presale </p>
                <p>Zero Taxes </p>
                <p>Anti Bot</p>
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
                <p>Airdrop 4.4% to Binance Community </p>
                <p>Liqiudity Locked for 4 years</p>
                <p>Anti Whale (1.1% Max wallet, 1% Max Transaction limit) </p>
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
          className="fixed bottom-4 right-4 bg-[#FCCE06] text-[#2F160B] px-4 py-4 rounded-full shadow-lg hover:bg-[#47240E] hover:text-white transition-all duration-300 animate-bounce hover:animate-none"
        >
          <RiArrowUpDoubleLine className="text-2xl" />
        </button>
      )}
    </div>
  );
};

export default LandingPage;
