import firstimg from "../images/uk.png";
import us from "../images/sc.png";
import china from "../images/us.png";
import other from "../images/other.png";
import CountUp from "./CountUp";

const Visa = () => {
  return (
    <section className="mt-10">
      <div>
        <h1 className="text-2xl font-bold lg:text-4xl text-center">
          Explore all <span className="border-b-8 border-bidcl">visa</span>
        </h1>
        <div className="mt-10 w-10/12 mx-auto flex justify-evenly items-center gap-2">
          <div className="border-dashed border-bidcl border-2 flex flex-col justify-center items-center gap-y-1 rounded-2xl p-10">
            <div>
              <img src={firstimg} alt="cardimage" />
            </div>
            <h1 className="text-3xl font-bold">
              <CountUp
                from={0}
                to={100}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
            </h1>
            <p className="text-2xl text-gray-500 font-semibold">UK Visa</p>
          </div>
          <div className="border-dashed border-bidcl border-2 flex flex-col justify-center items-center gap-y-1 rounded-2xl p-10">
            <div>
              <img src={us} alt="cardimage" />
            </div>
            <h1 className="text-3xl font-bold">20,746</h1>
            <p className="text-2xl text-gray-500 font-semibold">UK Visa</p>
          </div>
          <div className="border-dashed border-bidcl border-2 flex flex-col justify-center items-center gap-y-1 rounded-2xl p-10">
            <div>
              <img src={china} alt="cardimage" />
            </div>
            <h1 className="text-3xl font-bold">20,746</h1>
            <p className="text-2xl text-gray-500 font-semibold">UK Visa</p>
          </div>
          <div className="border-dashed border-bidcl border-2 flex flex-col justify-center items-center gap-y-1 rounded-2xl p-10">
            <div>
              <img src={other} alt="cardimage" />
            </div>
            <h1 className="text-3xl font-bold">20,746</h1>
            <p className="text-2xl text-gray-500 font-semibold">UK Visa</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visa;
