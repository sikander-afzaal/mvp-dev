import Image from "next/image";

const Aws = () => {
  return (
    <div className="flex justify-center items-center mt-20  w-full">
      <div className="flex justify-center flex-col items-center gap-16 w-[90%]">
        <Image
          src={"/aws_logo.png"}
          alt="..."
          width={200}
          height={200}
          style={{ objectFit: "contain" }}
        />
        <Image
          src={"/aws_framework.png"}
          alt="..."
          width={1000}
          height={1000}
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default Aws;
