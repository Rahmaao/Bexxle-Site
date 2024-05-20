"use client";

import SolutionButton from "../components/solutionbutton";

export const Solutions = () => {
  return (
    <section id="services" className="w-full h-[135vh] md:h-[70vh] lg:h-[100vh] flex justify-center items-center lg:mb-20 solution-section">
      <div className=" w-[80%] h-full flex flex-col  justify-center">
        <div className=" w-full lg:w-[55%] xl:w-[50%] h-[18%] md:h-[25%] mb-10 md:mb-14 lg:mb-20">
          <p className="text-[30px] pb-3 lg:pb-7 md:text-[40px] text-center lg:text-start font-bold tracking-tighter font-Poppins text-[#181E4B]">
            SOLUTIONS
          </p>
          <p className=" pb-5 lg:pb-0 xl:w-[88%] text-sm md:text-lg lg:text-[15px] xl:text-lg text-center lg:text-start text-[#5E6282]">
            And produce say the ten moments parties. Simple innate summer fat
            appear basket his desire joy. Outward clothes promise at gravity do
            excited. Sufficient particular
          </p>
        </div>
        <div className=" w-full h-[70%] md:h-[65%] grid grid-cols-2 gap-4 md:grid-cols-3">
          <SolutionButton
            headertext="Community Support"
            text="Apps keep work and 
              information right at your 
                fingertips—and Slack keeps it 
                        all securely."
            icon="/icon1.svg"
          />
          <SolutionButton
            headertext="Security First"
            text="Connect the tools you 
            already use to get more from 
            them every time you work."
            icon="/icon2.svg"
          />
          <SolutionButton
            headertext="24/7 Admin Support"
            text="You can work with apps in 
            channels, where they’re a 
            seamless part of the conver."
            icon="/icon3.svg"
          />
          <SolutionButton
            headertext="100+ Themes"
            text="Spend less time tracking 
            down the people needed to 
            get work done."
            icon="/icon4.svg"
          />
          <SolutionButton
            headertext="Fully Integrated"
            text="Skip the follow-ups and 
            back-and -forth. Easily 
            standardize how you collect "
            icon="/icon5.svg"
          />
          <SolutionButton
            headertext="Monthly Update"
            text="Take control of your work day. 
            In a just a few minutes, create 
            a customized workflow "
            icon="/icon6.svg"
          />
        </div>
      </div>
    </section>
  );
}

export default Solutions;
