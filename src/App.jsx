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
        style={{
          background: "#2e2e2e",
          borderRadius: "100px",
        }}
        className="flex justify-center items-center text-brown"
        component={<ion-icon name="chevron-up-outline"></ion-icon>}
        smooth
      />
    </>
  );
};

export default App;
