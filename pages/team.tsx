"use client";

import TeamCard from "../components/team";

export const Team = () => {
  return (
    <section id="team" className="w-full min-h-screen flex justify-center items-center mb-20 team-section">
      <div className="w-[80%] flex flex-col justify-evenly">
        <div className="w-full lg:w-[55%] xl:w-[50%]">
          <p className="text-[30px] pb-3 lg:pb-7 md:text-[40px] text-center lg:text-start font-bold tracking-tighter font-Poppins text-[#181E4B]">
            OUR TEAM
          </p>
          <p className="pb-5 lg:pb-0 xl:w-[88%] text-sm md:text-lg lg:text-[15px] xl:text-lg text-center lg:text-start text-[#5E6282]">
            And produce say the ten moments parties. Simple innate summer fat
            appear basket his desire joy. Outward clothes promise at gravity do
            excited. Sufficient particular
          </p>
        </div>
        <div className="w-full grid grid-cols-2 gap-4 md:grid-cols-3 md:my-10">
          <TeamCard
            headertext="Mariam Adele"
            text="Software Engineer"
            subtext="Co-Founder & CEO"
            img="/lucas.jpg"
          />
          <TeamCard
            headertext="Derin Adams"
            text="Software Engineer"
            subtext="Co-Founder & CTO"
            img="/lucas.jpg"
          />
          <TeamCard
            headertext="Halima Akinsola"
            text="Frontend Engineer"
            subtext="Lead, Frontend Engineering Team"
            img="/lucas.jpg"
          />
          <TeamCard
            headertext="Hafeez Adebola"
            text="Backend Engineer"
            subtext="Lead, Backend Engineering Team"
            img="/man.jpg"
          />
          <TeamCard
            headertext="Chidi Ofunne"
            text="Frontend Developer"
            subtext="Frontend Engineering Team"
            img="/man.jpg"
          />
          <TeamCard
            headertext="Abigail Etuk"
            text="Backend Engineer"
            subtext="Backend Engineering Team"
            img="/lucas.jpg"
          />
          <TeamCard
            headertext="Sandra Onyeka"
            text="UI/UX Designer"
            subtext="Lead, Design Team"
            img="/lucas.jpg"
          />
          <TeamCard
            headertext=" Ahmed Hassan"
            text="UI/UX Designer"
            subtext="Design Team"
            img="/man.jpg"
          />
          <TeamCard
            headertext="Ella Zedane"
            text="Project Manager"
            subtext="Project Management Team"
            img="/lucas.jpg"
          />
          <TeamCard
            headertext="William Smith"
            text="Legal Adviser"
            subtext="Legal Team"
            img="/man.jpg"
          />
        </div>
      </div>
    </section>
  );
}

export default Team;
