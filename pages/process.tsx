"use client";

export const Process = () => {
  return (
    <section className="w-full h-[100vh] md:h-[90vh] lg:h-[105vh] xl:h-[135vh] flex justify-center items-center lg:mb-16 process-section">
      <div className="w-[95%] md:w-[80%] h-full flex flex-col justify-center lg:justify-start items-center md:items-start">
        <div className="w-[90%] md:w-full lg:w-[55%] xl:w-[50%] md:h-[25%]">
          <p className="text-[30px] pb-3 lg:pb-7 md:text-[40px] text-center lg:text-start font-bold tracking-tighter font-Poppins text-[#181E4B]">
            <span className="text-[#E752FE]">BEXXLE&apos;S</span> PROCESSES
          </p>
          <p className="pb-5 lg:pb-0 xl:w-[88%] text-sm md:text-lg lg:text-[15px] xl:text-lg text-center lg:text-start text-[#5E6282]">
            And produce say the ten moments parties. Simple innate summer fat appear basket his desire joy. Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is.
          </p>
        </div>
        <div
          className="hidden xl:block relative w-full h-[65%] md:h-[75%] lg:h-[65%] bg-white bg-contain bg-top bg-no-repeat"
          style={{ backgroundImage: "url('/wave.svg')" }}
        >
          <div className="w-56 h-44 absolute top-[385px] left-[200px] bg-transparent flex flex-col select-none group">
            <div className="w-full h-[65%] flex">
              <div className="w-[70%] h-full flex flex-col">
                <div className="w-16 h-16 bg-process hover:bg-process2 bg-contain bg-center bg-no-repeat transition-all duration-500 group-hover:bg-process2"></div>
                <div className="w-full h-10 flex items-end">
                  <p className="text-sm text-black font-bold">Project Discovery Call</p>
                </div>
              </div>
              <div className="w-[25%] h-full flex justify-center items-center">
                <p className="numero text-[140px] text-[#707070] opacity-15">1</p>
              </div>
            </div>
            <div className="w-full h-[35%]">
              <p className="text-[13px] text-[#181E4B]">
                Party we years to order allow asked of. We so opinion friends me message as delight.
              </p>
            </div>
          </div>

          <div className="w-60 h-44 absolute top-[230px] left-[620px] bg-transparent flex flex-col select-none group">
            <div className="w-full h-[65%] flex">
              <div className="w-[70%] h-full flex flex-col">
                <div className="w-16 h-16 bg-process hover:bg-process2 bg-contain bg-center bg-no-repeat transition-all duration-500 group-hover:bg-process2"></div>
                <div className="w-full h-10 flex items-end">
                  <p className="text-sm text-black font-bold">Project Discovery Call</p>
                </div>
              </div>
              <div className="w-[30%] h-full flex justify-center items-center">
                <p className="numero text-[140px] text-[#707070] opacity-15">2</p>
              </div>
            </div>
            <div className="w-full h-[35%]">
              <p className="text-[13px] text-[#181E4B]">
                His defective nor convinced residence own. Connection has put impossible own apartments boisterous.
              </p>
            </div>
          </div>

          <div className="w-60 h-44 absolute top-[-15px] left-[980px] bg-transparent flex flex-col select-none group">
            <div className="w-full h-[65%] flex">
              <div className="w-[70%] h-full flex flex-col">
                <div className="w-16 h-16 bg-process hover:bg-process2 bg-contain bg-center bg-no-repeat transition-all duration-500 group-hover:bg-process2"></div>
                <div className="w-full h-10 flex items-end">
                  <p className="text-sm text-black font-bold">Project Discovery Call</p>
                </div>
              </div>
              <div className="w-[30%] h-full flex justify-center items-center">
                <p className="numero text-[140px] text-[#707070] opacity-15">3</p>
              </div>
            </div>
            <div className="w-full h-[35%]">
              <p className="text-[13px] text-[#181E4B]">
                From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly.
              </p>
            </div>
          </div>
        </div>
        <div
          className="hidden lg:block xl:hidden relative w-full h-[65%] bg-white bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/wave2.svg')" }}
        ></div>
        <div
          className="md:block hidden lg:hidden relative w-full h-[55%] bg-white bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/wave3.svg')" }}
        ></div>
        <div
          className="block md:hidden relative w-full h-[65%] bg-white bg-contain bg-top bg-no-repeat"
          style={{ backgroundImage: "url('/wave3.svg')", backgroundSize: "345px 400px" }}
        ></div>
      </div>
    </section>
  );
}

export default Process;
