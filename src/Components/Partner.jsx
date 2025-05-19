import bg from '../images/bg.jpg'
import CircularGallery from "./CircularGallery";
const Partner = () => {
  return (
    <section className="mt-10 lg:mt-20 py-10" 
  >
      <div className=" flex flex-col justify-center items-center">
        <h1 className="text-3xl lg:text-4xl font-bold">
          Recommended <span className="border-b-8 border-bidcl">by</span> 
        </h1>
        <div className="mt-10 relative">
          <CircularGallery bend={5} textColor="#ffffff" borderRadius={0.05} />
        </div>
        <CircularGallery></CircularGallery>
      </div>
    </section>
  );
};

export default Partner;
