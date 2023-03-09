import Button from "../common/Button";

const Hero = () => {
  return (
    <div className=" md:min-h-[650px] md:h-[80vh] h-screen rounded-br-[7vw] rounded-bl-[7vw] overflow-hidden w-full  flex justify-center items-center relative isolate">
      <video
        src="/hero_video.mp4"
        playsInline
        muted
        autoPlay
        loop
        className="w-full h-full absolute left-0 top-0 -z-10 object-cover"
      ></video>
      <div className="w-full flex justify-center items-center bg-black bg-opacity-40 py-[40px]">
        <div className="w-[90%] flex justify-start items-center md:text-left text-center md:items-start flex-col gap-5">
          <h1 className="text-white font-extrabold text-[30px] sm:text-[40px] md:text-[48px] leading-[1] max-w-[800px]">
            MVP Software Development for your startup
          </h1>
          <p className="text-white mt-2 text-base sm:text-xl md:text-2xl font-semibold leading-[1.2] max-w-[700px]">
            Launch your MVP with <strong>Fast</strong>,{" "}
            <strong>Reliable</strong>, and <strong>Effective</strong> software
            sprints.
          </p>
          <Button>Book a sprint call</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
