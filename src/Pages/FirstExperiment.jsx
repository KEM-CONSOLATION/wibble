// import Countdown from "react-countdown";
import Navbar from "../Components/Navbar";
import Video from "../assets/IMG_2347.MP4";

const FirstExperiment = () => {
  // const renderer = ({ days, hours, minutes, seconds, completed }) => {
  //   if (completed) {
  //     return (
  //       <p className="text-[#FCCE06] text-2xl text-center ">
  //         Yippe...its the D Day!
  //       </p>
  //     );
  //   } else {
  //     return (
  //       <div className=" max-w-7xl mx-[10px] flex items-center justify-center lg:mx-auto mt-[50px]">
  //         <div className="text-[#FCCE06] text-2xl grid grid-cols-2 md:grid-cols-4 uppercase text-center items-center place-items-center gap-[20px]">
  //           <div className=" grid gap-[20px] lg:gap-[50px]">
  //             <p className=" font-[900] text-[50px] lg:text-[90px]">{days}</p>
  //             <p className=" font-[400]">Days</p>
  //           </div>
  //           <div className=" grid gap-[20px] lg:gap-[50px]">
  //             <p className=" font-[900] text-[50px] lg:text-[90px]">{hours}</p>
  //             <p className=" font-[400]">Hours</p>
  //           </div>
  //           <div className=" grid gap-[20px] lg:gap-[50px]">
  //             <p className=" font-[900] text-[50px] lg:text-[90px]">
  //               {minutes}
  //             </p>
  //             <p className=" font-[400]">Minutes</p>
  //           </div>
  //           <div className=" grid gap-[20px] lg:gap-[50px]">
  //             <p className=" font-[900] text-[50px] lg:text-[90px]">
  //               {seconds}
  //             </p>
  //             <p className=" font-[400]">Seconds</p>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   }
  // };

  return (
    <div className=" text-white">
      <Navbar />

      {/* <div className=" text-center mt-[40px] md:mt-0">
        <p className="font-bright text-[#FCCE06] font-[700] text-[30px] md:text-[50px] lg:text-[80px] ">
          WEEZAD
        </p>

        <p className="font-bright text-[#FFFFFF] font-[700] text-[20px] md:text-[26px]">
          REVEALING...
        </p>
        <p className="font-bright text-[#FCCE06] font-[700] text-[20px] md:text-[26px]">
          4TH SEPTEMBER 2024
        </p>
      </div> */}

      {/* <div className="mt-4">
        <Countdown date={new Date("2024-09-04T00:00:00")} renderer={renderer} />
      </div> */}

      <div className="relative flex justify-center">
        <video
          className="w-full max-w-[300px] rounded-[20px]"
          loop
          autoPlay
          muted
        >
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-[20px] flex items-center justify-center"></div>
      </div>

      <a href="http://weeglex.net/" target="blank">
        <div className=" my-[20px] flex items-center justify-center">
          <p className="  font-bright bg-[#FCCE06] text-black px-[26px] inline rounded-[5px] py-[10px] text-[20px] cursor-pointer">
            Migrate Now
          </p>
        </div>
      </a>
    </div>
  );
};

export default FirstExperiment;
