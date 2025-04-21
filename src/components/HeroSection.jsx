import hero from "../assets/images/hero.png";

const HeroSection = () => {
  return (
    <div className="w-full">
      <img
        src={hero}
        alt="Hero"
        className="w-full h-auto object-cover max-h-[90vh]"
      />
    </div>
  );
};

export default HeroSection;
