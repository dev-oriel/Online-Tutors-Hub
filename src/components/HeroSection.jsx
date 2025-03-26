import hero from "../assets/images/hero.png";

const HeroSection = () => {
  return (
    <div
      className="w-full h-screen bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default HeroSection;
