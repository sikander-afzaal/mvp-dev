import Image from "next/image";

const Aws = () => {
  return (
    <div className="flex justify-center items-center   w-full">
      <div className="flex justify-center flex-col items-center gap-16 w-[90%]">
        <Image
          src={"/aws_logo.png"}
          alt="logo"
          width={200}
          height={200}
          style={{ objectFit: "contain" }}
        />
        <div className="flex lg:flex-row flex-col justify-center items-center lg:items-start gap-12 w-full">
          <AwsFeatBox
            img={"/aws_performance.png"}
            text="Operational Excellence"
          />
          <AwsFeatBox img={"/aws_security.png"} text="Security" />
          <AwsFeatBox img={"/aws_reliability.png"} text="Reliability" />
        </div>
        <div className="flex lg:flex-row flex-col justify-center items-center lg:items-start gap-12 w-full">
          <AwsFeatBox
            img={"/aws_performance.png"}
            text="Performance Efficiency"
          />
          <AwsFeatBox
            img={"/aws_cost_optimization.png"}
            text="Cost Optimization"
          />
        </div>
      </div>
    </div>
  );
};

export default Aws;

const AwsFeatBox = ({ img, text }) => {
  return (
    <div className="flex justify-center items-center flex-col gap-6">
      <Image
        src={img}
        width={140}
        height={200}
        style={{ objectFit: "contain" }}
        alt="feat"
      />
      <h4 className="text-black w-min text-center leading-[1.2] text-[22px] font-bold">
        {text}
      </h4>
    </div>
  );
};
