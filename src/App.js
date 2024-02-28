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

function App() {
  return (
    <div>
      <Cursor/>
      <section id="home">
        <Navbar />
        <Home />
      </section>
      <section className="h-full md:h-screen" id="intro">
        <Intro />
      </section>

      <section>
        <Started />
      </section>

      {/* sticky scrolling component */}
      <Faq />
      
      {/* <Features/> */}
      
      <section className="h-full md:h-screen" id="cryptoSpending">
        <CryptoSpending/>
      </section>

      <section>
        <Footer/>
      </section>
    </div>
  );
}

export default App;
