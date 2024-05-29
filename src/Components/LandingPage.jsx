import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Video from "../assets/fonts/VideoLogo.mp4";
import BuyButton from "../assets/Buy_Weegle_Button.svg";
import checkIcon from "../assets/checkIcon.svg";
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

      <div className=" grid gap-[30px] items-center place-items-center">
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

      <div className=" py-[40px] flex items-center justify-center">
        <img src={BuyButton} alt="" />
      </div>

      <div className=" text-center">
        <div className=" py-[20px]">
          <p
            className="font-bright text-[#FCCE06] font-[700] text-[30px] md:text-[50px] lg:text-[70px]"
            style={{
              textShadow:
                "0 0 20px rgba(252, 206, 6, 0.8), 0 0 30px rgba(252, 206, 6, 0.6), 0 0 40px rgba(252, 206, 6, 0.4)",
            }}
          >
            MISSION + ROADMAP
          </p>
        </div>

        <div className="max-w-[935px] mx-auto my-[20px]">
          <div className="grid gap-[20px] font-proxima text-[18px] md:text-[35px] font-[600]">
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
          <div className=" py-[40px] flex items-center justify-center">
            <img src={BuyButton} alt="" />
          </div>

          <div className=" py-[20px]">
            <p
              className="font-bright animate-bounce text-[#FCCE06] font-[700] text-[30px] md:text-[50px] lg:text-[70px]"
              style={{
                textShadow:
                  "0 0 20px rgba(252, 206, 6, 0.8), 0 0 30px rgba(252, 206, 6, 0.6), 0 0 40px rgba(252, 206, 6, 0.4)",
              }}
            >
              HOW TO BUY $WeeGLE
            </p>
          </div>

          <div className=" grid md:grid-cols-2 items-start place-items-center gap-[40px] text-left lg:grid-cols-3">
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
                - Connect Your Wallet: Click 'Connect Wallet' and select
                MetaMask or Trust Wallet to link your wallet to PancakeSwap.
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
