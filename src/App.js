import "./App.scss";
import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/hero/Hero";
import { Carousel } from "./components/carousel/Carousel";
import { Features } from "./components/features/Features";
import { Integrations } from "./components/integrations/Integrations";
import { Reviews } from "./components/customer/Reviews";
import { ContactUs } from "./components/contactUs/Contactus";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Carousel />
      <Features />
      <Integrations />
      <Reviews />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
