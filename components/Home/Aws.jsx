import Image from "next/image";

const Aws = () => {
  return (
    <div className="flex justify-center items-center   w-full">
      <div className="flex justify-center flex-col items-center gap-16 w-[90%]">
        <Image
          src={"/aws_logo.png"}
          alt="..."
          width={200}
          height={200}
          style={{ objectFit: "contain" }}
        />
        {/* <Image
          src={"/aws_framework.png"}
          alt="..."
          width={1000}
          height={1000}
          style={{ objectFit: "contain" }}
        /> */}
        <div className="flex lg:flex-row flex-col justify-center items-center lg:items-start gap-10 w-full">
          <AwsFeatBox text="Operational Excellence" />
          <AwsFeatBox text="Security" />
          <AwsFeatBox text="Reliability" />
          <AwsFeatBox text="Performance Efficiency" />
          <AwsFeatBox text="Cost Optimization" />
        </div>
      </div>
    </div>
  );
};

export default Aws;

const AwsFeatBox = ({ img, text }) => {
  return (
    <div className="flex justify-center items-center flex-col gap-6">
      <div className="w-[140px] bg-emerald-300 rounded-md aspect-square"></div>
      {/* <Image src={img} width={140} height={200} style={{objectFit:"contain"}}/> */}
      <h4 className="text-black w-min text-center leading-[1.2] text-[22px] font-bold">
        {text}
      </h4>
    </div>
  );
};
