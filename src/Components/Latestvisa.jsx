import { useEffect, useState } from "react";
import us from "../images/us.jpg";
import VisaCard from "./VisaCard";

const Latestvisa = () => {
  const [visas, setVisa] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setVisa(data))
      .catch(err=>console.log(err));
  }, []);
  return (
    <section data-aos="fade-down" className="mt-14 bg-gray-50 py-5 pb-10 lg:mt-20">
      <div className="w-11/12 mx-auto">
      <p className="text-bidcl text-xl font-bold  text-center">Most requested visa</p>
        <h1 className="text-3xl font-bold lg:text-4xl text-center ">
          Top 5 most requested visas
        </h1>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 gap-y-4">{
            visas.map(visa=> <VisaCard key={visa.id} visa={visa}></VisaCard>)
            }</div>
      </div>
    </section>
  );
};

export default Latestvisa;
<div class="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white">
  <img
    class="w-full h-48 object-cover"
    src="https://via.placeholder.com/400x300"
    alt="Country Image"
  />
  <div class="p-4">
    <h3 class="text-blue-600 font-semibold text-lg hover:underline cursor-pointer">
      Turkish Visa
    </h3>
    <p class="text-gray-700 mt-1">
      From <span class="font-bold">$79</span>
    </p>
    <div class="flex items-center text-sm text-gray-600 mt-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4 mr-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 8v4l3 3"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 6a9 9 0 100 18 9 9 0 000-18z"
        />
      </svg>
      Same business day
    </div>
  </div>
</div>;
