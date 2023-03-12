import Button from "@/components/common/Button";
import About, { AboutBox } from "@/components/Home/About";
import Aws from "@/components/Home/Aws";
import Frameworks from "@/components/Home/Frameworks";
import Hero from "@/components/Home/Hero";
import Steps from "@/components/Home/Steps";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mvp Development</title>
        <meta name="description" content="Fast, Reliable, and Effective MVP development for your business. Scale your business with our software sprints." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <Steps />
      <div className="w-full flex justify-center items-center mt-20">
        <AboutBox order img="/heroes_rocket.svg" heading="Tech stack" />
      </div>
      <div className="w-full py-[60px] mt-20 lg:pb-[120px] lg:pt-[40px] bg-white flex justify-center items-center flex-col ">
        <Aws />
        <Frameworks />
        <div className="flex mx-auto gap-20 justify- text-center items-center w-[90%] flex-col mt-[100px]">
          <h2 className="text-black max-w-[914px] leading-[1] text-[40px] sm:text-[60px] md:text-[80px] font-base font-dumbledore">
            Build, secure and scale your MVP with true experts.
          </h2>
          <Button>Book sprint call</Button>
        </div>
      </div>
    </>
  );
}
