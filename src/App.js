import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Intro from "./components/Intro/Intro";
import Started from "./components/started/Started";
import Faq from "./components/faq/Faq";
import Features from "./components/features/Features";
import Cursor from "./components/cursor/Cursor";
import CryptoSpending from "./components/crypto-spending/CryptoSpending";
import Footer from "./components/footer/Footer";
import LogoSlider from "./components/logo-slider/LogoSlider";

function App() {
  return (
    <div>
      <Cursor />
      <section className="h-screen" id="home">
        <Navbar />
        <Home />
      </section>
      <section className="h-full md:h-screen py-20" id="intro">
        <Intro />
      </section>

      <div className="py-10">
        <LogoSlider />
      </div>

      <Started />

      {/* sticky scrolling component */}
      <Faq />

      <Features />

      <section className="h-full md:h-screen py-20" id="cryptoSpending">
        <CryptoSpending />
      </section>

      <Footer />
    </div>
  );
}

export default App;
