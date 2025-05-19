import React from "react";

const Addvisa = () => {
  const handlesubmit = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const imageurl = form.imageurl.value;
    const age = form.age.value;
    const discription = form.discription.value;
    const time = form.time.value;
    const fee = form.fee.value;
    const data = {name,imageurl,age,discription,fee,time};
    console.log(data)

    fetch('http://localhost:5000/visas',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))

  }
  return (
    <div>
      <div className="card-body bg-base-200 w-8/12 mx-auto mt-10">
      <h1 className="text-center text-3xl font-bold text-travelcl py-3">Add <span className="text-bidcl">visa</span></h1>
        <form onSubmit={handlesubmit} className="fieldset">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="label font-semibold text-sm text-travelcl">Visa title/Country name:</label>
              <input
              required
                type="text"
                className="input w-full"
                placeholder="Enter Country name/Visa title"
                name="name"
              />
            </div>
            <div>
              <label className="label font-semibold text-sm text-travelcl">Country imageURL:</label>
              <input
              required
              name="imageurl"
                type="text"
                className="input w-full"
                placeholder="Enter imageURL of that country"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="label font-semibold text-sm text-travelcl">Min age:</label>
              <input
              required
                type="text"
                className="input w-full"
                placeholder="Enter minimum age to apply"
                name="age"
              />
            </div>
            <div>
              <label className="label text-sm font-semibold text-travelcl">How long it taken:</label>
              <input
              required
                type="text"
                className="input w-full"
                placeholder="Enter time itll take"
                name="time"
              />
            </div>
          </div>
          <div>
              <label className="label font-semibold text-sm text-travelcl">Fee:</label>
              <input
              required
                type="text"
                className="input w-full"
                placeholder="Enter fee"
                name="fee"
              />
            </div>
          <div className="">
            <label className="label font-semibold text-sm text-travelcl">Add discription:</label>
           
            <textarea className="input w-full h-36 lg:h-48" required name="discription" placeholder="Enter a little discription" id=""></textarea>
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
