import { useState } from "react";
import Button from "../common/Button";
import TimerModal from "../common/TimerModal";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <>
          <div
            className="fixed left-0 top-0 right-0 bottom-0 bg-black z-10 opacity-20"
            onClick={() => setShowModal(false)}
          />
          <TimerModal closeModal={() => setShowModal(false)} />
        </>
      )}
      {/* md:min-h-[650px] md:h-[80vh] h-screen */}
      <div className=" min-h-[650px]  rounded-br-[7vw] rounded-bl-[7vw] overflow-hidden w-full  flex justify-center items-center relative isolate">
        <video
          src="/hero_video.mp4"
          autoPlay
          playsInline
          muted
          loop
          className="w-full h-full absolute left-0 top-0 -z-10 object-cover"
        ></video>
        <div className="w-full flex justify-center items-center bg-black bg-opacity-40 py-[40px]">
          <div className="w-[90%] flex justify-start items-center md:text-left text-center md:items-start flex-col gap-5">
            <h1 className="text-white font-black text-[30px] sm:text-[40px] md:text-[48px] leading-[1] max-w-[800px]">
              MVP Software Development
              <br /> for your business
            </h1>
            <p className="text-white mt-2 text-base sm:text-xl md:text-2xl font-regular leading-[1.2] max-w-[700px]">
              Launch your MVP with <b>Fast</b>, <b>Reliable</b>, <br /> and{" "}
              <b>Effective</b> software sprints.
            </p>
            <Button onClick={() => setShowModal(true)}>Book sprint call</Button>

            {/* <TimerModal short /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
