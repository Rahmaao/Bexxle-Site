"use client";

export const Quote = () => {
  return (
    <section id="contact" className="w-full h-[100vh] md:h-[70vh] lg:h-[100vh] bg-white flex justify-center items-center mb-10 md:mb-32 quote-section">
      <div className=" w-[80%] h-full flex flex-col border rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] justify-evenly md:justify-between items-center">
        <div className=" w-full lg:w-[55%] xl:w-[50%] h-[10%] md:h-[18%] flex flex-col justify-center items-center">
          <p className="text-[30px] md:text-[40px] text-center lg:text-start font-bold tracking-tighter font-Poppins text-[#181E4B]">
            Want a Solution?
          </p>
          <p className="text-[15] md:text-[20px] text-center lg:text-start font-bold tracking-tighter font-Poppins text-[#181E4B]">
            Request a <span className="text-[#E752FE]">Quote</span> Now
          </p>
        </div>
        <div className=" w-full h-[70%] md:h-[75%] flex justify-center items-center">
          <div className="w-[90%] xl:w-[75%] h-full flex flex-col justify-around">
            <div className="w-full h-[30%] md:h-[25%] flex flex-col md:flex-row justify-between">
              <div className=" w-full md:w-[48%] h-[45%] md:h-[70%] flex flex-col justify-between">
                <label
                  className="block font-semibold text-sm md:text-lg text-[#3E4581] mb-2"
                  htmlFor="input-field"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="input-field"
                  className="input-field appearance-none rounded-none border-b-2 border-gray-300 w-full py-2 leading-tight focus:outline-none focus:border-[#E752FE]"
                  placeholder="Jane"
                />
              </div>
              <div className=" w-full md:w-[48%] h-[45%] md:h-[70%] flex flex-col justify-between">
                <label
                  className="block font-semibold text-sm md:text-lg text-[#3E4581] mb-2"
                  htmlFor="input-field"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="input-field"
                  className="input-field appearance-none rounded-none border-b-2 border-gray-300 w-full py-2 leading-tight focus:outline-none focus:border-[#E752FE]"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="w-full h-[30%] md:h-[25%] flex flex-col md:flex-row justify-between">
              <div className=" w-full md:w-[48%] h-[45%] md:h-[70%] flex flex-col justify-between">
                <label
                  className="block font-semibold text-sm md:text-lg text-[#3E4581] mb-2"
                  htmlFor="input-field"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="input-field"
                  className="input-field appearance-none rounded-none border-b-2 border-gray-300 w-full py-2 leading-tight focus:outline-none focus:border-[#E752FE]"
                  placeholder="janedoe@gmail.com"
                />
              </div>
              <div className=" w-full md:w-[48%] h-[45%] md:h-[70%] flex flex-col justify-between">
                <label
                  className="block font-semibold text-sm md:text-lg text-[#3E4581] mb-2"
                  htmlFor="input-field"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="input-field"
                  className="input-field appearance-none rounded-none border-b-2 border-gray-300 w-full py-2 leading-tight focus:outline-none focus:border-[#E752FE]"
                  placeholder="+23470876487165"
                />
              </div>
            </div>
            <div className="w-full h-[25%] flex flex-col justify-between">
              <label
                className="block font-semibold text-sm md:text-lg text-[#3E4581] mb-2"
                htmlFor="input-field"
              >
                Describe the type of solution you need
              </label>
              <input
                type="text"
                id="input-field"
                className="input-field appearance-none rounded-none border-b-2 border-gray-300 w-full py-2 leading-tight focus:outline-none focus:border-[#E752FE]"
                placeholder="Message"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quote;
