import { useEffect, useState } from "react";
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
  const [copied, setCopied] = useState(false);
  const [copied2, setCopied2] = useState(false);
  const textToCopy = "0xd06CA2caA7Ee6B98E37BcF965244324760bFF286";
  const textToCopy2 =
    "0x164f9200678d21deef16b89f231d8efdff5550a39f2ca4625687dfb93ff271e7";
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

  const handleCopy = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  const handleCopy2 = () => {
    navigator.clipboard
      .writeText(textToCopy2)
      .then(() => {
        setCopied2(true);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
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

        <div className=" text-center">
          <p className="  font-bright text-[20px] lg:text-[30px] font-[600] text-[#FCCE06]">
            The WEEGLE Cat Transition
          </p>
          <p className=" text-justify text-[18px] lg:text-[30px]  font-proxima ">
            In the world of digital finance, resilience and adaptability are
            paramount. Just as a{" "}
            <span className=" text-[#FCCE06] font-[600]">cat</span> with (9)nine
            lives embodies the spirit of enduring and thriving through
            adversity, the{" "}
            <span className=" text-[#FCCE06] font-[600]">WEEGLE X</span>{" "}
            represents a new chapter in our journey, echoing the steadfast
            nature of its predecessor.
          </p>
        </div>
        <div className=" text-center">
          <p className="  font-bright text-[20px] lg:text-[30px] font-[600] text-[#FCCE06]">
            The Legacy of $WEEGLE
          </p>
          <p className=" text-justify text-[18px] lg:text-[30px]  font-proxima ">
            Born out of the need to highlight Binance&apos;s unyielding
            resilience,{" "}
            <span className=" text-[#FCCE06] font-[600]">WEEGLE</span> was a
            tribute to the platform&apos;s ability to &ldquo;
            <span className=" text-[#FCCE06] font-[600]">Weeble Wobble</span>,
            But Never Fall Down.&rdquo; The token&apos;s design was simple yet
            powerful: no team allocations, no presale, and zero taxes. It was an
            embodiment of a community rallying behind Binance, celebrating its
            ability to weather any storm.
          </p>
        </div>

        <div className=" text-center">
          <p className="  font-bright text-[20px] lg:text-[30px] font-[600] text-[#FCCE06]">
            Introducing WEEGLE X
          </p>
          <p className=" text-justify text-[18px] lg:text-[30px]  font-proxima ">
            As we move forward, we’re excited to unveil the next evolution in
            our journey:{" "}
            <span className=" text-[#FCCE06] font-[600]">WEEGLE X</span>. Much
            like the mythic cat with nine lives,{" "}
            <span className=" text-[#FCCE06] font-[600]">WEEGLE X</span>{" "}
            symbolizes the rebirth and continued resilience of our community and
            ecosystem. Join us in this exciting chapter as we continue to
            champion resilience and community spirit. Welcome to the future of
            <span className=" text-[#FCCE06] font-[600]"> WEEGLE Cat X</span>
          </p>
        </div>
      </div>

      <div className=" animate-bounce py-[40px] flex items-center justify-center">
        <a
          href="https://pancakeswap.finance/swap?outputCurrency=0xd06CA2caA7Ee6B98E37BcF965244324760bFF286"
          target="blank"
        >
          <img src={BuyButton} alt="" />
        </a>
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

        <div
          className="max-w-6xl mx-[10px] my-20 lg:mx-auto "
          data-aos="fade-up"
        >
          <p className=" font-bright text-[20px] md:text-[30px] font-[700] text-[#FCCE06] uppercase">
            $WEEGLE X CONTRACT
          </p>

          <div className="text-center font-[600] font-Inter text-white ">
            <div className="">
              <p className="mb-[20px] text-[20px] lowercase  overflow-x-auto">
                {textToCopy2}
              </p>
            </div>
            <p
              className="bg-[#FCCE06] text-black px-[26px] inline rounded-[5px] py-[10px] text-[20px] cursor-pointer"
              onClick={handleCopy2}
            >
              Copy
            </p>

            <p className=" font-[400] text-[14px] mt-[30px] italic">
              {copied2 && "Hash has been Copied to clipboard"}
            </p>
          </div>
        </div>

        <div
          className="max-w-6xl mx-[10px] my-20 lg:mx-auto "
          data-aos="fade-up"
        >
          <p className=" font-bright text-[20px] md:text-[30px] font-[700] text-[#FCCE06]">
            OLD $WEEGLE CONTRACT
          </p>

          <div className="text-center font-[600] font-Inter text-white ">
            <div className="">
              <p className="mb-[20px] text-[20px] lowercase  overflow-x-auto">
                {textToCopy}
              </p>
            </div>
            <p
              className="bg-[#FCCE06] text-black px-[26px] inline rounded-[5px] py-[10px] text-[20px] cursor-pointer"
              onClick={handleCopy}
            >
              Copy
            </p>

            <p className=" font-[400] text-[14px] mt-[30px] italic">
              {copied && "Contract Address has been Copied to clipboard"}
            </p>
          </div>
        </div>

        <div className="    mx-[10px]  2xl:mx-40">
          <div className=" py-[40px] flex items-center justify-center animate-bounce">
            <a
              href="https://pancakeswap.finance/swap?outputCurrency=0xd06CA2caA7Ee6B98E37BcF965244324760bFF286"
              target="blank"
            >
              <img src={BuyButton} alt="" />
            </a>
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
            <a
              href="https://pancakeswap.finance/swap?outputCurrency=0xd06CA2caA7Ee6B98E37BcF965244324760bFF286"
              target="blank"
            >
              <img src={BuyButton} alt="" />
            </a>
          </div>

          <div className=" py-[20px]" id="tokenomics">
            <p className="font-bright  text-[#FCCE06] font-[700] text-[30px] md:text-[50px] lg:text-[70px]">
              TOKENOMICS
            </p>
          </div>

          <div className=" font-proxima font-[500] grid  md:grid-cols-2 items-start  gap-[10px] text-left lg:grid-cols-2 md:place-items-center">
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
                <p>Total Supply:4,444,444,444</p>
                <p>Airdrop 4.4% to Binance Community </p>
                <p>Liqiudity Locked for 4 years</p>
                <p>Anti Whale (1.1% Max wallet, 1% Max Transaction limit) </p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className=" py-[40px] flex items-center justify-center animate-bounce">
            <a
              href="https://pancakeswap.finance/swap?outputCurrency=0xd06CA2caA7Ee6B98E37BcF965244324760bFF286"
              target="blank"
            >
              <img src={BuyButton} alt="" />
            </a>
          </div>

          <div className=" flex items-center gap-[10px] justify-center md:gap-[60px]">
            <a href="https://x.com/weeglebnb" target="blank">
              <img src={XIcon} alt="" className=" w-[40px] h-[40px]" />
            </a>
            <a href="https://t.me/weegleCAT" target="blank">
              <img src={Telegram} alt="" className=" w-[40px] h-[40px]" />
            </a>
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
