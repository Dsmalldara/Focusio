import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import React from "react";

function Homesection() {
  return (
    <section className="md:px-0 md:pt-[4rem] relative  px-6  pt-6 grid md:grid-cols-2 gap-8 grid-rows-[auto_auto] mx-auto  overflow-hidden">
        {/* <div className='bg-[#d5f3f1] blur-3xl filter aspect-square absolute md:block hidden ml-[-6rem]   -z-20 h-full'/> */}
        {/* <div className="bg-[#d5f3f1] absolute top-0 blur-3xl filter aspect-square   h-full md:hidden block border border-green-700  -z-20" /> */}
      <div className="relative ">
        <h3 className="flex font-inter font-[700] md:leading-[60px] leading-12 text-[40px] md:text-[60px]">
          We are here to increase your productivity
        </h3>
        <div className="">
          <img src="/vector1.png" alt="credit image"  className="md:w-[20rem] w-[12rem] pt-2 md:pt-5"/>
        </div>
          <p className="text-[18px] leading-[20px] pt-5 md:w-[80%] md:px-2 px-4 md:mr-auto">
          Let's make your work more organize and easily using the Taskio Dashboard with many of the latest features in managing work every day.
          </p>
          <div className="pt-5 flex gap-8">
          <Button className="button-radius bg-[#54BD95] hover:bg-[#59b994]">
            Get started
          </Button>
            <div>
            <div className="flex items-center cursor-pointer">
              <span className=" mr-1">
              <img src="/Play.png" alt="credit image" />
              </span>
              <span className="text-[18px] leading-[20px]">View Demo</span>
              </div>
            </div>
          </div>
      </div>
      <div>
        <img src="/creditimage.png" alt="credit image" />
      </div>
   
    </section>
  );
}

export default Homesection;
