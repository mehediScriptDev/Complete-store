import { Link } from "react-router-dom";
import image from "../images/error-404.gif";
import TextPressure from "./TextPressure";

const Error = () => {
  return (
    <section className="w-10/12 mx-auto flex flex-col justify-center items-center mt-10">
      <div style={{ position: "relative", height: "300px" }}>
        <TextPressure
        className="text-black text-5xl"
          text="Page not found"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="black"
          strokeColor="#ff0000"
          minFontSize={50}
        />
      </div>
      {/* <div className="flex justify-center items-center">
        <img className="" src={image} alt="" />
      </div>
      <Link to={"/"} className="btn ">
        back
      </Link> */}
    </section>
  );
};

export default Error;
