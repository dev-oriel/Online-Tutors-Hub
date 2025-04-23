import hero from "../assets/images/hero.png";
import heroPhone from "../assets/images/hero-phone.png";

const HeroSection = () => {
  return (
    <div className="w-full">
      {/* Desktop Hero Image */}
      <img
        src={hero}
        alt="Hero"
        className="hidden sm:block w-full h-auto object-cover max-h-[90vh]"
      />

      {/* Mobile Hero Image */}
      <img
        src={heroPhone}
        alt="Hero Mobile"
        className="block sm:hidden w-full h-auto object-cover max-h-[100vh]"
      />
    </div>
  );
};

export default HeroSection;
