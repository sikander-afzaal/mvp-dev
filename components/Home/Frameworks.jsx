import Image from "next/image";

const Frameworks = () => {
  return (
    <div className="w-full mt-[70px] sm:mt-[100px] md:mt-[150px] flex justify-center items-center">
      <div className="bg-darkBlue rounded-[10vw] py-[40px] md:py-[80px] px-5 sm:px-[60px] lg:px-[120px] flex justify-center items-center flex-col w-[90%]">
        <h2 className="text-white font-dumbledore font-medium text-[40px] sm:text-[60px] lg:text-[80px]">
          Frameworks
        </h2>
        <div className="mt-[50px] lg:mt-[100px] flex justify-center items-center w-full flex-col gap-20">
          <FrameBox
            img={"/react_icon.svg"}
            title="React"
            para="Best frameworks for scaling"
          />
          <FrameBox
            img={"/query_icon.svg"}
            title="React Query"
            para="Best library for Async calls"
          />
          <FrameBox
            img={"/recoil_icon.svg"}
            title="Recoil"
            para="Best library for state managment"
          />
          <FrameBox
            img={"/node_icon.svg"}
            title="Node"
            para="Most used backend language."
          />
        </div>
      </div>
    </div>
  );
};

export default Frameworks;

const FrameBox = ({ img, title, para }) => {
  return (
    <div className="text-center lg:text-left flex lg:flex-row flex-col justify-start items-center gap-6 sm:gap-10 w-full">
      <Image src={img} width={192} height={192} alt="..." />
      <div className="flex justify-start items-center lg:items-start flex-col gap-2">
        <h3 className="text-white font-dumbledore text-[50px] sm:text-[70px] leading-[1] font-medium ">
          {title}
        </h3>
        <p className="text-white text-xl sm:text-[24px]">{para}</p>
      </div>
    </div>
  );
};
