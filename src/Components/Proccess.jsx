import { RiMailSendLine } from "react-icons/ri";
import { LuPackageCheck } from "react-icons/lu";
import { GiCommercialAirplane } from "react-icons/gi";

const Proccess = () => {
  return (
    <section data-aos="fade-up" className="mt-10 bg-gray-100 py-5">
      <div className="w-11/12 mx-auto">
        <h1 className="text-3xl font-bold lg:text-4xl text-center ">
          <span className="border-b-4 rounded-lg border-bidcl">How</span>
          <span> it works?</span>
        </h1>
        <p className="text-center text-[17px] py-2 font-bold">
          In just 3 simple steps:
        </p>
        <p className="text-center text-gray-400">
          Request your visa through our website of the mobile application Submit
          your documents at the embassy <br />
          Have a safe flight!
        </p>

        <div className="flex justify-center items-center lg:justify-evenly sm:flex-row flex-col  gap-y-3 mt-9 md:mt-16 lg:flex-row md:gap-5">
          <div className="border-2 border-gray-200 py-3 px-10 space-y-2">
            <RiMailSendLine className="text-8xl text-travelcl" />
            <p className="text-2xl font-bold">1 Apply</p>
          </div>
          <div className="border-2 border-gray-200 py-3 px-10 space-y-2">
            <LuPackageCheck className="text-8xl text-travelcl" />
            <p className="text-2xl font-bold">2 Pack</p>
          </div>
          <div className="border-2 border-gray-200 py-3 px-10 space-y-2">
            <GiCommercialAirplane className="text-8xl text-travelcl" />
            <p className="text-2xl font-bold">3 Fly</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proccess;
