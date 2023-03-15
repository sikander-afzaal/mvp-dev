import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Button from "../common/WhiteBtn";

const Footer = () => {
  return (
    <footer className="bg-darkBlue  w-full flex  justify-center items-center">
      <div className="flex lg:flex-row flex-col justify-center items-center w-full gap-16 ">
        <div className="flex lg:px-0 px-16 w-full justify-center bg-white  pt-12 pb-10 lg:py-24 lg:rounded-tr-[80px] lg:rounded-br-[80px] items-center flex-col gap-10 lg:gap-16">
          <Image
            src="/rocket.svg"
            style={{ objectFit: "contain" }}
            width={280}
            height={280}
            alt=""
          />
          <div className=" flex justify-center items-center gap-3">
            <a
              href="#"
              className="bg-black rounded-full w-[40px] flex justify-center items-center text-white cursor-pointer text-2xl aspect-square"
              target={"blank"}
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-black rounded-full w-[40px] flex justify-center items-center text-white cursor-pointer text-2xl aspect-square"
              target={"blank"}
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-black rounded-full w-[40px] flex justify-center items-center text-white cursor-pointer text-2xl aspect-square"
              target={"blank"}
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="w-full flex max-w-[90%] lg:p-0 pb-8 lg:max-w-none justify-start items-center text-center lg:text-left lg:items-start  flex-col gap-12 lg:gap-16">
          <div className="flex justify-start items-center lg:items-start gap-5 flex-col">
            <h3 className="uppercase font-dumbledore text-[40px] font-normal leading-[1] text-white">
              Central Offices
            </h3>
            <p className="text-white text-base leading-[1]">
              Anillo Perif, 3720, Jardines del Pedrigal, Mexico City
            </p>
          </div>
          <div className="flex justify-start items-center lg:items-start gap-5 flex-col">
            <h3 className="uppercase font-dumbledore text-[40px] font-normal leading-[1] text-white">
              Contact Email
            </h3>
            <p className="text-white text-base leading-[1]">
              company@mvpdevelopment.net
            </p>
          </div>
          <div className="flex justify-start items-center lg:items-start gap-5 flex-col">
            <h3 className="uppercase font-dumbledore text-[40px] font-normal leading-[1] text-white">
              Call Booking
            </h3>
            <p className="text-white text-base leading-[1]">
              <Button>Book Context Call</Button>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
