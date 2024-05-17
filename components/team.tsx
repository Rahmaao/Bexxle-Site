"use client";

const TeamCard = ({ headertext, text, subtext, img }) => {
  return (
    <div
      className="w-[100%] lg:w-[90%] xl:w-[60%] h-[180px] md:h-[250px] bg-center bg-no-repeat flex flex-col justify-evenly rounded-lg items-center bg-[#ECEEFF]"
      style={{ backgroundImage: "url('/Shape.svg')", backgroundSize: "150%" }}
    >
      <div
        className="h-[45%] w-[60%] md:w-[70%] lg:w-[55%] xl:w-[70%] rounded-lg bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${img})` }}
      ></div>

      <div className="text-center">
        {
          <p className=" font-bold text-[15px] lg:text-[22px] text-[#3E4581]">
            {" "}
            {headertext}
          </p>
        }
      </div>
      <div className="w-[85%] text-center">
        {
          <p className=" font-medium text-xs lg:text-sm text-[#3E4581]">
            {" "}
            {text}
          </p>
        }
      </div>
      <div className="w-[95%] text-center">
        {
          <p className=" font-semibold text-xs lg:text-sm text-[#3E4581]">
            {" "}
            {subtext}
          </p>
        }
      </div>
    </div>
  );
};

export default TeamCard;
