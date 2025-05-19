import { GoClock } from "react-icons/go";
import { useLoaderData } from "react-router-dom";

const Allpost = () => {
  const allvisas = useLoaderData();
  console.log(allvisas)
  const {name,imageurl,time,fee} = allvisas;
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
          <div className="max-w-xs rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-1 mx-auto group">
            <img
              className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
              src={imageurl}
              alt="Country Image"
            />
            <div className="p-4">
              <h3 className="text-blue-600 font-semibold text-lg hover:underline cursor-pointer">
                {name}
              </h3>
              <p className="text-gray-700 mt-1">
                From <span className="font-bold">${fee}</span>
              </p>
              <div className="flex items-center text-sm text-gray-600 mt-2">
                <GoClock />
                {time}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allpost;
