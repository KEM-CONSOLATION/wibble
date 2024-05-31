import { useRef, useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "../assets/catLogo.png";
import Video from "../assets/fonts/VideoLogo.mp4";
import BuyButton from "../assets/Buy_Weegle_Button.svg";
import checkIcon from "../assets/checkIcon.svg";
import DexScreener from "../assets/DexScreener.svg";
import rocket from "../assets/ion_rocket-sharp.svg";
import Coingeco from "../assets/Coingeco.svg";
import CoincapMarket from "../assets/CoincapMarket.svg";
import XIcon from "../assets/XIcon.svg";
import Telegram from "../assets/Telegram.svg";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import { Typewriter } from "react-simple-typewriter";
import ReactPlayer from "react-player";
// import ReactPlayer from "react-player";
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
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.controls = false;
      console.log(videoRef.current.controls);
    }
  }, []);
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
            <img
              src={Logo}
              alt=""
              data-aos="fade-up"
              className="w-full h-auto max-w-full"
            />
            <div className="absolute inset-0 bg-transparent opacity-50 flex items-center justify-center"></div>
          </div>
        </div>
        <div className="md:hidden block text-[#FCCE06] " data-aos="fade-up">
          <p
            className="font-bright text-[#FCCE06] font-[700] text-[40px] sm:text-[90px]"
            style={{
              textShadow:
                "0 0 20px rgba(252, 206, 6, 0.8), 0 0 30px rgba(252, 206, 6, 0.6), 0 0 40px rgba(252, 206, 6, 0.4)",
            }}
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
        <div className=" hidden md:block lg:max-w-[107px] relative">
          <img
            src={Logo}
            alt=""
            data-aos="fade-up"
            className="w-full h-auto max-w-full"
          />
          <div className="absolute inset-0 bg-transparent opacity-50 flex items-center justify-center"></div>
        </div>
        <div className=" flex flex-col items-center">
          <p className=" hidden  mt-[10px] md:mt-0 md:flex items-center gap-[10px] text-white capitalize font-[700] text-[14px] md:text-[30px] font-bright lg:text-[40px]">
            THE{" "}
            <span
              className=" text-[#FCCE06]"
              style={{
                textShadow:
                  "0 0 20px rgba(252, 206, 6, 0.8), 0 0 30px rgba(252, 206, 6, 0.6), 0 0 40px rgba(252, 206, 6, 0.4)",
              }}
            >
              {" "}
              {""}BINANCE
            </span>
            WIBBLE WOBBLE C🐱T
          </p>

          <div className=" flex flex-col items-center justify-center md:hidden">
            <p className="  mt-[10px] text-white capitalize font-[700]  xxs:text-[12px] xs:text-[15px] sm:text-[28px] font-bright ">
              THE{" "}
              <span
                className=" text-[#FCCE06]"
                style={{
                  textShadow:
                    "0 0 20px rgba(252, 206, 6, 0.8), 0 0 30px rgba(252, 206, 6, 0.6), 0 0 40px rgba(252, 206, 6, 0.4)",
                }}
              >
                BINANCE{" "}
              </span>
              WIBBLE WOBBLE C🐱T
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
              style={{
                textShadow:
                  "0 0 20px rgba(252, 206, 6, 0.8), 0 0 30px rgba(252, 206, 6, 0.6), 0 0 40px rgba(252, 206, 6, 0.4)",
              }}
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
            {/* <video
              src={Video}
              className="w-full h-auto max-w-full"
              autoPlay
              loop
              controls={false}
              data-aos="fade-up"
            ></video> */}
            <ReactPlayer
              url={Video}
              playing
              loop
              width="100%"
              height="auto"
              controls={false}
            />
            {/* <video
              ref={videoRef}
              src={Video}
              className="w-full h-auto max-w-full"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              data-aos="fade-up"
            ></video> */}
            <div className="absolute inset-0 bg-transparent opacity-50 flex items-center justify-center"></div>
          </div>
        </div>
      </div>

      <div
        id="about"
        className=" mx-[10px]  md:mx-0  grid gap-[30px] items-center place-items-center"
        data-aos="fade-up"
      >
        <p className=" font-bright text-[30px] lg:text-[70px] font-[700] text-[#FCCE06]">
          ABOUT
        </p>
        <p className=" text-justify text-[18px] lg:text-[30px] font-[600] font-proxima">
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
          <p
            className="font-bright animate-pulse text-[#FCCE06] font-[700] text-[30px] md:text-[50px] lg:text-[70px]"
            style={{
              textShadow:
                "0 0 20px rgba(252, 206, 6, 0.8), 0 0 30px rgba(252, 206, 6, 0.6), 0 0 40px rgba(252, 206, 6, 0.4)",
            }}
          >
            MISSION + ROADMAP
          </p>
        </div>

        <div className="max-w-[935px] mx-auto my-[20px]">
          <div className="grid gap-[20px] font-proxima text-[16px] md:text-[35px] font-[600]">
            <div className="flex items-start gap-[20px]">
              <img src={checkIcon} alt="Check icon" className="" />
              <p className=" text-justify">
                The mission of <span className="text-[#FCCE06]">WEEGLE</span>{" "}
                memcoin is to fun fully dance{" "}
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

        <div className="   ">
          <div className=" py-[40px] flex items-center justify-center animate-bounce">
            <img src={BuyButton} alt="" />
          </div>

          <div className=" py-[20px]" id="buy">
            <p
              className="font-bright animate-pulse text-[#FCCE06] font-[700] text-[30px] md:text-[50px] lg:text-[70px]"
              style={{
                textShadow:
                  "0 0 20px rgba(252, 206, 6, 0.8), 0 0 30px rgba(252, 206, 6, 0.6), 0 0 40px rgba(252, 206, 6, 0.4)",
              }}
            >
              HOW TO BUY $WeeGLE
            </p>
          </div>

          <div className=" grid md:grid-cols-2 mx-[10px] md:mx-0 items-start place-items-center gap-[40px] text-left lg:grid-cols-3">
            <div className=" font-proxima max-w-[444px] text-[14px] lg:text-[16px] font-[500]">
              <p
                className="font-bright text-[#FCCE06] font-[700] text-[20px] md:text-[28px] lg:text-[35px]"
                style={{
                  textShadow:
                    "0 0 20px rgba(252, 206, 6, 0.8), 0 0 30px rgba(252, 206, 6, 0.6), 0 0 40px rgba(252, 206, 6, 0.4)",
                }}
              >
                STEP 1:
              </p>
              <p>Set Up Your Wallet</p>
              <p>- Install MetaMask or Trust Wallet</p>
              <p>- Add the BSC Network to MetaMask: </p>
              <p>
                Open MetaMask, go to Settings {">"} Networks {">"} Add Network
                and input the following details:
              </p>
              <div className=" pl-[4px]">
                <p>- Network Name: Binance Smart Chain</p>
                <p>
                  - New RPC URL:{" "}
                  <a
                    href="https://bsc-dataseed.binance.org/"
                    target="blank"
                    className=" text-[#FCCE06]"
                  >
                    https://bsc-dataseed.binance.org/
                  </a>{" "}
                </p>
                <p>- Chain ID: 56</p>
                <p>- Symbol: BNB</p>
                <p>
                  - Block Explorer URL:{" "}
                  <a
                    href="https://bscscan.com"
                    target="blank"
                    className=" text-[#FCCE06]"
                  >
                    https://bscscan.com
                  </a>
                </p>
              </div>{" "}
            </div>
            <div className=" font-proxima max-w-[444px] text-[14px] lg:text-[16px] font-[500]">
              <p
                className="font-bright text-[#FCCE06] font-[700] text-[20px] md:text-[28px] lg:text-[35px]"
                style={{
                  textShadow:
                    "0 0 20px rgba(252, 206, 6, 0.8), 0 0 30px rgba(252, 206, 6, 0.6), 0 0 40px rgba(252, 206, 6, 0.4)",
                }}
              >
                STEP 2:
              </p>
              <p>Fund Your Wallet with BNB</p>
              <p>
                - Buy BNB: Purchase{" "}
                <span className=" text-[#FCCE06]">Binance</span> Coin (BNB) on
                an exchange such as Binance, Coinbase, or any other platform
                supporting BNB.
              </p>
              <p className=" pt-[10px]">
                - Transfer BNB to Your Wallet: Transfer the purchased BNB to
                your MetaMask or Trust Wallet using your wallet’s BSC address.
              </p>
            </div>
            <div className=" font-proxima max-w-[444px] text-[14px] lg:text-[16px] font-[500]">
              <p
                className="font-bright text-[#FCCE06] font-[700] text-[20px] md:text-[28px] lg:text-[35px]"
                style={{
                  textShadow:
                    "0 0 20px rgba(252, 206, 6, 0.8), 0 0 30px rgba(252, 206, 6, 0.6), 0 0 40px rgba(252, 206, 6, 0.4)",
                }}
              >
                STEP 3:
              </p>
              <p>Connect to PancakeSwap</p>
              <p>
                - Visit PancakeSwap: Open{" "}
                <a
                  className=" text-[#FCCE06]"
                  href="https://pancakeswap.finance"
                  target="blank"
                >
                  https://pancakeswap.finance
                </a>{" "}
                in your browser.
              </p>
              <p className=" pt-[10px]">
                - Connect Your Wallet: Click &apos;Connect Wallet&apos; and
                select MetaMask or Trust Wallet to link your wallet to
                PancakeSwap.
              </p>
            </div>
            <div className=" font-proxima max-w-[444px] text-[14px] lg:text-[16px] font-[500]">
              <p
                className="font-bright text-[#FCCE06] font-[700] text-[20px] md:text-[28px] lg:text-[35px]"
                style={{
                  textShadow:
                    "0 0 20px rgba(252, 206, 6, 0.8), 0 0 30px rgba(252, 206, 6, 0.6), 0 0 40px rgba(252, 206, 6, 0.4)",
                }}
              >
                STEP 4:
              </p>
              <p>
                Swap <span className=" text-[#FCCE06]">BNB</span> for{" "}
                <span className=" text-[#FCCE06]">Weegle</span>
              </p>
              <p>
                - Import Weegle Token: If Weegle isn&apos;t listed by default,
                you&apos;ll need to import it. Click &apos;Select a
                currency&lsquo;, and paste the Weegle contract address.
              </p>
              <p className=" py-[10px]">
                - Adjust Slippage: Set the slippage tolerance (usually between
                1-12%) to accommodate market fluctuations.
              </p>
              <p>
                - Perform the Swap: Enter the amount of BNB you want to exchange
                for Weegle and confirm the transaction. Check all details
                carefully and approve the swap through your wallet.
              </p>
            </div>{" "}
            <div className=" font-proxima max-w-[444px] text-[14px] lg:text-[16px] font-[500]">
              <p
                className="font-bright text-[#FCCE06] font-[700] text-[20px] md:text-[28px] lg:text-[35px]"
                style={{
                  textShadow:
                    "0 0 20px rgba(252, 206, 6, 0.8), 0 0 30px rgba(252, 206, 6, 0.6), 0 0 40px rgba(252, 206, 6, 0.4)",
                }}
              >
                STEP 5:
              </p>
              <p>Add Weegle to Your Wallet</p>

              <p className=" ">
                - Manually Add Weegle: After purchasing, you may need to add
                Weegle to your wallet. In MetaMask or Trust Wallet, go to
                &apos;Add Token,&apos; select &apos;Custom Token,&apos; and
                input the Weegle contract address.
              </p>
            </div>
          </div>
        </div>

        <div className="   ">
          <div className=" py-[40px] flex items-center justify-center animate-bounce">
            <img src={BuyButton} alt="" />
          </div>

          <div className=" py-[20px]" id="tokenomics">
            <p
              className="font-bright animate-pulse text-[#FCCE06] font-[700] text-[30px] md:text-[50px] lg:text-[70px]"
              style={{
                textShadow:
                  "0 0 20px rgba(252, 206, 6, 0.8), 0 0 30px rgba(252, 206, 6, 0.6), 0 0 40px rgba(252, 206, 6, 0.4)",
              }}
            >
              TOKENOMICS
            </p>
          </div>

          <div className=" font-proxima font-[500] grid mx-[10px] md:mx-0 md:grid-cols-2 items-start md:place-items-center gap-[10px] text-left lg:grid-cols-3">
            <div className="  ">
              <div className=" flex items-center gap-[10px] ">
                <img src={icon1} alt="" className=" w-[30px] h-[30px]" />
                <p
                  className="font-bright text-[#FCCE06] font-[700] text-[20px] 2xl:text-[28px]"
                  style={{
                    textShadow:
                      "0 0 20px rgba(252, 206, 6, 0.8), 0 0 30px rgba(252, 206, 6, 0.6), 0 0 40px rgba(252, 206, 6, 0.4)",
                  }}
                >
                  CONFIGURATION
                </p>
              </div>
              <div className="py-[10px] text-[14px] 2xl:text-[16px]">
                <p>870,585,147 $WEEGLE</p>
                <p>Stealth Launch</p>
                <p>Zero Allocations </p>
                <p> Zero Presale </p>
                <p>Zero Taxes </p>
                <p>Auto TBM</p>
              </div>
            </div>
            <div className=" ">
              <div className=" flex items-center gap-[10px]">
                <img src={rocket} alt="" className=" w-[30px] h-[30px]" />
                <p
                  className="font-bright text-[#FCCE06] font-[700] text-[20px]  2xl:text-[28px]"
                  style={{
                    textShadow:
                      "0 0 20px rgba(252, 206, 6, 0.8), 0 0 30px rgba(252, 206, 6, 0.6), 0 0 40px rgba(252, 206, 6, 0.4)",
                  }}
                >
                  LAUNCHCANICS
                </p>
              </div>
              <div className="py-[10px] text-[14px] 2xl:text-[16px]">
                <p>Max Supply: 4,690,000,000</p>
                <p>Total Supply: 4,690,000,000</p>
                <p>Circulating at Launch: 4,690,000,000 </p>
                <p> Contract Revoked/Renounced </p>
                <p>Liquidity Locked for 4.6 Years</p>
                <p>Anti Whale: Less that 1% Post-launch</p>
              </div>
            </div>
            <div className=" ">
              <div className=" flex items-center gap-[10px]">
                <img src={icon2} alt="" className=" w-[30px] h-[30px]" />
                <p
                  className="font-bright text-[#FCCE06] font-[700] text-[20px]  2xl:text-[28px]"
                  style={{
                    textShadow:
                      "0 0 20px rgba(252, 206, 6, 0.8), 0 0 30px rgba(252, 206, 6, 0.6), 0 0 40px rgba(252, 206, 6, 0.4)",
                  }}
                >
                  TOKEN BURN MECHS (TBM)
                </p>
              </div>
              <div className=" py-[10px]">
                <p className=" ">
                  Token Burn Mechanism (TBM): Weegle to Burn Burn Rate: 1% after
                  every 10,000,000,000 Wiggles until Deployment wallet it Empty
                </p>
                <p className=" pt-[10px]">
                  The Token Burn Mechanics is designed to give the token holders
                  the power to decide the value of WEEGLE.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className=" py-[40px] flex items-center justify-center animate-bounce">
            <img src={BuyButton} alt="" />
          </div>

          <div className=" flex items-center justify-between md:justify-center md:gap-[60px]">
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
                <video
                  ref={videoRef}
                  src={Video}
                  className="w-full h-auto max-w-full"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  data-aos="fade-up"
                ></video>

                <div className="absolute inset-0 bg-transparent opacity-50 flex items-center justify-center"></div>
              </div>
              <p
                className="font-bright text-[#FCCE06] font-[700] text-[18px] md:text-[25px] lg:text-[35px] py-[10px]"
                style={{
                  textShadow:
                    "0 0 20px rgba(252, 206, 6, 0.8), 0 0 30px rgba(252, 206, 6, 0.6), 0 0 40px rgba(252, 206, 6, 0.4)",
                }}
              >
                DISCLAIMER
              </p>
            </div>
            <div className="flex items-start  gap-[20px]">
              <img src={checkIcon} alt="Check icon" className="" />
              <p className=" text-justify text-[16px] lg:text-[20px]">
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
              <p className=" text-justify text-[16px] lg:text-[20px]">
                <span className="text-[#FFC700]"> $WEEGLE </span> is a community
                Crypto coin with no intrinsic value or promise of financial
                return. There is not formal team or roadmap
              </p>
            </div>
          </div>
        </div>
      </div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-[#ffffff] text-[#2F160B] px-4 py-2 rounded-full shadow-lg hover:bg-[#47240E]  hover:text-white transition-all duration-300 animate-bounce hover:animate-none"
        >
          Back to Top
        </button>
      )}
    </div>
  );
};

export default LandingPage;
