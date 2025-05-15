import banner from "../images/banner.jpg";

const Banner = () => {
  return (
    <section
      className="min-h-screen relative w-full flex justify-center"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="relative z-10 flex justify-center flex-col gap-y-2 items-center text-white">
        <h1 className="font-bold text-4xl">Legalizations and apostilles without hassle</h1>
        <h1>AuthenticationHQ is everything you need to legalize documents for use in any country of the World</h1>
      </div>
    </section>
  );
};

export default Banner;
