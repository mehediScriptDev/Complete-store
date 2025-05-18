import React from "react";

const Addvisa = () => {
  return (
    <div>
      <div className="card-body bg-base-200 w-8/12 mx-auto mt-10">
        <form className="fieldset">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
                <label className="label">Visa title/Country name</label>
            <input type="email" className="input w-full" placeholder="Email" />
            </div>
           <div>
             <label className="label">Country imageURL</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter imageURL of that country"
            />
           </div>
          </div>

          <button className="btn hover:bg-bidcl text-white bg-travelcl duration-300 mt-4">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addvisa;
