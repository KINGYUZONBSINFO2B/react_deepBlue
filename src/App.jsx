
import { ExpandIcon } from "lucide-react";
import Conservation from "./components/Conservation";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LatestStories from "./components/LatestStories";
import Marine from "./components/Marine";
import Navbar from "./components/Navbar";
import Expedition from "./components/Expedition";
import Newsletter from "./components/NewsLetter";
import About from "./components/About";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LatestStories />
      <Marine />
      <Conservation />
      <Expedition />
      <About />
      <Newsletter/>
      <Footer />
    </>
  );
};

export default App;
