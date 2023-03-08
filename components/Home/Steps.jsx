import Image from "next/image";

const Steps = () => {
  return (
    <div className="w-full flex mt-20 sm:mt-28 justify-center items-center flex-col">
      <div className="flex gap-14 sm:gap-20 justify-center items-center flex-col w-[90%]">
        <StepBox
          title="Book sprint call"
          para="Share your project's vision so we can find the best way to build it."
          img="/Larry_call.png"
        />
        <StepBox
          title="Define the scope"
          para="Techincal deep dive into the solution."
          order
          img="/Larry_shopping.svg"
        />
        <StepBox
          title="Recieve roadmap"
          para="Sprints, time and developers needed for your project"
          img="/Larry_map.svg"
        />
        <StepBox
          title="Sprint reviews"
          para="Monthly reviews for quality assurance, and scope congruence ."
          order
          img="/Larry_loadbar.svg"
        />
        <StepBox
          title="Project delivery"
          para="Your mvp software approved and tested !"
          img="/Larry_team.png"
        />
      </div>
    </div>
  );
};

export default Steps;

const StepBox = ({ order, title, img, para }) => {
  return (
    <div
      className={`${
        order ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"
      } bg-white w-full lg:w-[80%] gap-2 lg:gap-10  rounded-[30px] sm:rounded-[96px] px-5 sm:px-[40px] xl:px-[70px] py-[40px] xl:h-[672px] flex justify-between items-center`}
    >
      <div className="w-full flex justify-start items-center text-center lg:text-left lg:items-start flex-col lg:gap-5">
        <h2 className="text-black text-[40px] sm:text-[60px] font-dumbledore font-medium">
          {title}
        </h2>
        <p className="text-black text-xl sm:text-[28px]">{para}</p>
      </div>
      <div className="w-full lg:max-w-none max-w-[500px]">
        <Image width={1000} height={1000} alt="...." src={img} />
      </div>
    </div>
  );
};
