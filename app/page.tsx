import MoreButton from "../components/button2";

export default function Home() {
  return (
    <section
      id="home"
      className="w-full h-screen flex justify-center items-center lg:items-end bg-cover bg-center"
      style={{ backgroundImage: "url('/blob.svg')" }}
    >
      <div className=" h-[90%] lg:h-[80%] w-[90%] lg:flex">
        <div className="h-full lg:h-full w-full lg:w-1/2 pt-16 lg:pt-0 flex items-center justify-center lg:justify-end">
          <div className="w-full lg:w-[85%] h-[95%] lg:h-[85%] flex flex-col justify-center items-center lg:items-start">
            <div className="h-8 w-[90%] lg:w-[85%] pt-2 lg:pt-0 flex justify-center lg:justify-start">
              <p className="text-sm md:text-[16px] font-bold text-[#361163]">
                LET US BRING YOUR IDEAS TO LIFE
              </p>
            </div>
            <div className="w-full pt-3 lg:pt-0 md:w-[85%] lg:w-full h-36 flex items-center">
              <p className="font-black leading-[40px] md:leading-[55px] text-[42px] md:text-[48px] text-center lg:text-left lg:text-[50px] xl:text-[55px] text-[#181E4B]">
                <span className="text-[#E752FE]">Software</span> that works for
                you.
              </p>
            </div>
            <div
              className="lg:hidden h-full lg:h-full w-full lg:w-1/2 flex justify-center items-center object-fill bg-no-repeat bg-center"
              style={{
                backgroundImage: "url('/heroimg3.svg')",
              }}
            >
              
            </div>
            <div className=" w-full md:w-[95%] h-20">
              <p className="text-sm md:text-lg lg:text-[15px] xl:text-lg text-center lg:text-start text-[#5E6282]">
                We offer modern software solutions for growing your business by
                creating and maintaining modern websites and applications.
              </p>
            </div>
            <div className="w-[50%] pt-3 lg:pt-0 h-20 lg:h-16 flex items-end justify-center lg:justify-start">
              <MoreButton />
            </div>
          </div>
        </div>
        <div
          className="hidden h-1/2 lg:h-full w-full lg:w-1/2 lg:flex justify-center items-center bg-cover bg-center"
          style={{ backgroundImage: "url('/heroimg3.svg')" }}
        ></div>
      </div>
    </section>
    
  );
}
