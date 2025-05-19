
import { useLoaderData } from "react-router-dom";
import Singlevisa from "./Singlevisa";

const Allpost = () => {
  const allvisas = useLoaderData();
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <div className="breadcrumbs text-sm mb-6">
          <ul className="flex gap-2 text-gray-500">
            <li>
              <a className="text-blue-600 hover:underline" href="/">
                TravelBid
              </a>
            </li>

            <li className="text-black font-medium">All visas</li>
          </ul>
        </div>

        <h1 className="text-3xl font-bold text-travelcl lg:text-4xl text-center ">
          All available{" "}
         visas
        </h1>
       <p className="text-center pt-2 text-gray-500 text-xs md:text-xl  font-bold"> Your Gateway to the World–Fast, Easy, Trusted Visas for Every Journey! <br /> ---</p>

        {/* allposts */}
        <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 gap-y-3 lg:grid-cols-4 gap-2">
          {
            allvisas.map(visa => <Singlevisa key={allvisas._id} visa={visa}></Singlevisa>)
          }
        </div>
      </div>
    </div>
  );
};

export default Allpost;
