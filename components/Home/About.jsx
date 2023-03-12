import Image from "next/image";

const About = () => {
  return (
    <div className="w-full flex mt-20 justify-center items-center flex-col">
      <div className="flex gap-16 justify-center items-center flex-col w-[90%]">
        <AboutBox order img="/heroes_talking.svg" heading="Package" />
        <AboutBox
          img="/heroes_meeting.svg"
          heading="Software sprints"
          desc={["Documented code.", "Delivered in 4 weeks."]}
        />
        <AboutBox
          img="/hero_calendar.svg"
          heading="Pay as you go"
          desc={[
            "Smaller payments.",
            "Pay one sprint at a time.",
          ]}
        />
        <AboutBox
          img="/hero_call.svg"
          heading="Unlimited sprints"
          desc={["Dedicated developers.", "Dedicated results."]}
        />
        <AboutBox
          img="/heroes_stairs_white_flag.svg"
          heading="Sprints"
          order
        />
      </div>
    </div>
  );
};

export default About;

export const AboutBox = ({ black, order, img, heading, desc }) => {
  return (
    <div
      className={`flex justify-center items-center ${
        order
          ? "flex-col lg:flex-row-reverse w-full lg:w-[80%]"
          : "flex-col lg:flex-row w-full"
      } gap-5`}
    >
      <div className={`w-[85%] md:w-full lg:max-w-none max-w-[450px]`}>
        <Image
          width={700}
          height={600}
          style={{ objectFit: "contain" }}
          src={img}
          alt="..."
        />
      </div>
      <div
        className={` w-full flex justify-start items-center lg:text-left text-center lg:items-start flex-col gap-8`}
      >
        <h2
          className={`${black ? "text-black" : "text-white"} ${
            desc?.length > 0
              ? "text-[50px] sm:text-[80px] xl:text-[68px] "
              : `text-[50px] sm:text-[96px] xl:text-[75pxpx]`
          } font-dumbledore leading-[1.1]`}
        >
          {heading}
        </h2>
        <div className="flex justify-start items-center lg:items-start flex-col gap-2">
          {desc?.map((elem, idx) => {
            return (
              <p
                className="leading-[1] text-white text-base xl:text-xl"
                key={elem + idx}
              >
                {elem}
              </p>
            );
          })}{" "}
        </div>
      </div>
    </div>
  );
};
