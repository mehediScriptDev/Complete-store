import React from 'react';
import { GoClock } from "react-icons/go";
const Singlevisa = ({singlevisa}) => {
  const {name,imageurl,time,fee,_id} = singlevisa;
  console.log(name)
    return (
        <section>
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
        </section>
    );
};

export default Singlevisa;