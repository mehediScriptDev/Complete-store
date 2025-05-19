import { GoClock } from "react-icons/go";
import { Link } from "react-router-dom";

const VisaCard = ({ visa }) => {
  const { country, title, price, delivery, image } = visa;
  return (
    <section>
    <Link to={'/allvisa'}>
      <div className="max-w-xs rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-1 mx-auto group">
        <img
          className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
          src={image}
          alt="Country Image"
        />
        <div className="p-4">
          <h3 className="text-blue-600 font-semibold text-lg hover:underline cursor-pointer">
            {title}
          </h3>
          <p className="text-gray-700 mt-1">
            From <span className="font-bold">${price}</span>
          </p>
          <div className="flex items-center text-sm text-gray-600 mt-2">
            <GoClock />
            {delivery}
          </div>
        </div>
      </div></Link>
    </section>
  );
};

export default VisaCard;
