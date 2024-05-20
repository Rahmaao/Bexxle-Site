"use client";

export const About = () => {
  return (
    <>
      <section id="about" className="w-full h-[100vh] bg-white flex justify-center items-center lg:mb-10">
        <div className=" w-full h-full lg:h-[90%] flex flex-col lg:flex-row">
          <div className="w-full lg:w-[50%] h-[50%] md:h-[45%] lg:h-full flex flex-col justify-center">
            <div className="order-2 lg:order-1 w-full h-[85%] lg:h-[60%] flex justify-center lg:justify-end">
              <div className=" w-[90%] md:w-[80%] h-full flex flex-col justify-center">
                <p className="text-[30px] pb-3 lg:pb-7 md:text-[40px] text-center lg:text-start font-bold tracking-tighter font-Poppins text-[#181E4B]">
                  ABOUT US
                </p>
                <p className=" pb-5 lg:pb-0 xl:w-[88%] text-sm md:text-lg lg:text-[15px] xl:text-lg text-center lg:text-start text-[#5E6282]">
                  And produce say the ten moments parties. Simple innate summer
                  fat appear basket his desire joy. Outward clothes promise at
                  gravity do excited. Sufficient particular impossible by
                  reasonable oh expression is. Yet preference connection
                  unpleasant yet melancholy but end appearance. And excellence
                  partiality estimating terminated day everything.
                </p>
              </div>
            </div>
            <img
              src="/circles-left.svg"
              alt=""
              className="order-1 lg:order-2 lg:w-[300px] h-[70px] w-[100px] md:w-[180px] md:h-[120px] lg:h-[180px]"
            />
          </div>
          <div className="w-full lg:w-[50%] h-[50%] md:h-[55%] lg:h-full flex flex-col xl:flex-row items-end xl:items-start">
            <div className="order-1 lg:order-2 xl:order-1 w-full h-[85%] lg:h-full flex justify-center lg:items-center">
              <div className="h-full md:w-[60%] lg:h-[85%] lg:w-[85%] xl:h-[80%] w-[80%] xl:w-full flex justify-center items-center">
                <div className="w-[90%] h-[90%] flex">
                  <div className="w-[50%] h-full">
                    <div className="h-[50%] w-full border-r-[1px] border-b-[1px] border-[#E0E0E0] flex justify-center items-center">
                      <div className="about-boxes w-[85%] md:w-[80%] lg:w-[85%] lg:h-[85%] h-[90%] sm:h-[80%] bg-[#FAFAFA] border rounded-2xl border-[#E752FE] flex flex-col justify-center">
                        <p className="text-[25px] md:text-[30px] lg:text-[40px] text-center tracking-wide font-Poppins text-[#E752FE]">
                          20+
                        </p>
                        <p className="text-[10px] md:text-sm tracking-wider lg:text-[15px] text-center text-[#E752FE]">
                          Completed <br /> Projects
                        </p>
                      </div>
                    </div>
                    <div className="h-[50%] w-full border-r-[1px] border-t-[1px] border-[#E0E0E0] flex justify-center items-center">
                      <div className="about-boxes w-[85%] md:w-[80%] lg:w-[85%] lg:h-[85%] h-[90%] sm:h-[80%] bg-[#FAFAFA] border rounded-2xl border-[#E752FE] flex flex-col justify-center">
                        <p className="text-[25px] md:text-[30px] lg:text-[40px] text-center tracking-wide font-Poppins text-[#E752FE]">
                          15+
                        </p>
                        <p className="text-[10px] md:text-sm tracking-wider lg:text-[15px] text-center text-[#E752FE]">
                        Happy <br /> Clients
                        </p>
                      </div>{" "}
                    </div>
                  </div>
                  <div className="w-[50%] h-full">
                    <div className="h-[50%] w-full border-l-[1px] border-b-[1px] border-[#E0E0E0] flex justify-center items-center">
                      <div className="about-boxes w-[85%] md:w-[80%] lg:w-[85%] lg:h-[85%] h-[90%] sm:h-[80%] bg-[#FAFAFA] border rounded-2xl border-[#E752FE] flex flex-col justify-center">
                        <p className="text-[25px] md:text-[30px] lg:text-[40px] text-center tracking-wide font-Poppins text-[#E752FE]">
                          7+
                        </p>
                        <p className="text-[10px] md:text-sm tracking-wider lg:text-[15px] text-center text-[#E752FE]">
                           Businesses<br /> Helped 
                        </p>
                      </div>{" "}
                    </div>
                    <div className="h-[50%] w-full border-l-[1px] border-t-[1px] border-[#E0E0E0] flex justify-center items-center">
                      <div className="about-boxes w-[85%] md:w-[80%] lg:w-[85%] lg:h-[85%] h-[90%] sm:h-[80%] bg-[#FAFAFA] border rounded-2xl border-[#E752FE] flex flex-col justify-center">
                        <p className="text-[25px] md:text-[30px] lg:text-[40px] text-center tracking-wide font-Poppins text-[#E752FE]">
                          25+
                        </p>
                        <p className="text-[10px] md:text-sm tracking-wider lg:text-[15px] text-center text-[#E752FE]">
                          Offices through <br /> out GLOB
                        </p>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="/circles-right.svg"
              alt=""
              className="order-2 lg:order-1 xl:order-2 xl:w-[180px] h-[70px] w-[130px] md:w-[250px] md:h-[120px] xl:h-[220px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
