
import { useLoaderData } from "react-router-dom";
import Singlevisa from "./Singlevisa";

const Allpost = () => {
  const allvisas = useLoaderData();
  return (
    <div>
      <h1>{allvisas.length}</h1>

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

        {/* allposts */}
        <div>
          {
            allvisas.map(singlevisa=> <Singlevisa  singlevisa='singlevisa'></Singlevisa>)
          }
        </div>
      </div>
    </div>
  );
};

export default Allpost;
