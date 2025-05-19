import React from "react";

const Addvisa = () => {
  return (
    <div>
      <div className="card-body bg-base-200 w-8/12 mx-auto mt-10">
      <h1 className="text-center text-3xl font-bold text-travelcl py-3">Add <span className="text-bidcl">visa</span></h1>
        <form className="fieldset">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="label font-semibold text-sm">Visa title/Country name:</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter Country name/Visa title"
                name="name"
              />
            </div>
            <div>
              <label className="label font-semibold text-sm">Country imageURL:</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter imageURL of that country"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="label font-semibold text-sm">Min age:</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter minimum age to apply"
                name="age"
              />
            </div>
            <div>
              <label className="label text-sm font-semibold">How long it taken:</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter time itll take"
                name="time"
              />
            </div>
          </div>
          <div className="">
            <label className="label font-semibold text-sm">Add discription:</label>
           
            <textarea className="input w-full" name="discription" placeholder="Enter a little discription" id=""></textarea>
          </div>

          <button className="btn hover:bg-bidcl text-white bg-travelcl duration-300 mt-4">
            Add request
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addvisa;
