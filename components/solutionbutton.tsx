"use client";

const SolutionButton = ({ headertext, text, icon }) => {
  return (
    <div className="solutionsbtn w-[100%] xl:w-[80%] md:h-[80%] h-[80%] lg:h-[90%] flex flex-col justify-around">
      <div className=" h-[25%]">
        {icon && (
          <img
            src={icon}
            alt="Icon"
            className="w-[35px] lg:w-[60px] h-[35px] lg:h-[100%] object-contain object-center"
          />
        )}
      </div>
      <div className=" h-[15%]">
        {
          <p className=" font-semibold text-xs md:text-[15px] lg:text-lg text-[#181E4B]">
            {" "}
            {headertext}
          </p>
        }
      </div>
      <div className=" h-[45%]">
        {<p className="  text-xs lg:text-sm text-[#181E4B]"> {text}</p>}
      </div>
    </div>
  );
};

export default SolutionButton;
