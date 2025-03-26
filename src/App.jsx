import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
