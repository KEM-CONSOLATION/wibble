import Countdown from "react-countdown";
import Navbar from "../Components/Navbar";

const ThirdExperiment = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <p className="text-[#FCCE06] text-2xl text-center ">
          Yippe...its the D Day!
        </p>
      );
    } else {
      return (
        <div className=" max-w-7xl mx-[10px] flex items-center justify-center lg:mx-auto mt-[50px]">
          <div className="text-[#FCCE06] text-2xl grid grid-cols-2 md:grid-cols-4 uppercase text-center items-center place-items-center gap-[20px]">
            <div className=" grid gap-[20px] lg:gap-[50px]">
              <p className=" font-[900] text-[50px] lg:text-[90px]">{days}</p>
              <p className=" font-[400]">Days</p>
            </div>
            <div className=" grid gap-[20px] lg:gap-[50px]">
              <p className=" font-[900] text-[50px] lg:text-[90px]">{hours}</p>
              <p className=" font-[400]">Hours</p>
            </div>
            <div className=" grid gap-[20px] lg:gap-[50px]">
              <p className=" font-[900] text-[50px] lg:text-[90px]">
                {minutes}
              </p>
              <p className=" font-[400]">Minutes</p>
            </div>
            <div className=" grid gap-[20px] lg:gap-[50px]">
              <p className=" font-[900] text-[50px] lg:text-[90px]">
                {seconds}
              </p>
              <p className=" font-[400]">Seconds</p>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className=" text-white">
      <Navbar />

      <div className=" text-center mt-[40px] md:mt-0">
        <p className="font-bright text-[#FCCE06] font-[700] text-[30px] md:text-[50px] lg:text-[80px] ">
          EXPERIMENT 3
        </p>

        <p className="font-bright text-[#FFFFFF] font-[700] text-[20px] md:text-[26px]">
          REVEALING...
        </p>
        <p className="font-bright text-[#FCCE06] font-[700] text-[20px] md:text-[26px]">
          4TH NOVEMBER 2024
        </p>
      </div>

      <div className="mt-4">
        <Countdown date={new Date("2024-11-04T00:00:00")} renderer={renderer} />
      </div>
    </div>
  );
};

export default ThirdExperiment;
