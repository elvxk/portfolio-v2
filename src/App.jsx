import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />

      <ScrollToTop
        className="h-8 w-8 text-brown rounded-full flex justify-center items-center bg-black hover:bg-blue"
        component={<ion-icon name="chevron-up-outline"></ion-icon>}
        smooth
      />
    </>
  );
};

export default App;
