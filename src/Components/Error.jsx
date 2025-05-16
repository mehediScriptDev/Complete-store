import { Link } from "react-router-dom";
import image from "../images/error-404.gif";
import TextPressure from "./TextPressure";

const Error = () => {
  return (
    <section className="">
        <section className="w-10/12 mx-auto flex  flex-col justify-center items-center mt-10">
      <div style={{ position: "relative", height: "300px" }}>
        <TextPressure
          speed={1}
          enableShadows={true}
          enableOnHover={false}
          className="custom-class text-center"
          
        >
          Page Not Found
        </TextPressure>
      </div>
      {/* <div className="flex justify-center items-center">
        <img className="" src={image} alt="" />
      </div>
      <Link to={"/"} className="btn ">
        back
      </Link> */}
    </section>
    </section>
  );
};

export default Error;
