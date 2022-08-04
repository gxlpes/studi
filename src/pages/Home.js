import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";
import HeroSection from "../components/HomeSection/HeroSection";

const Home = () => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleOpenHandler = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <Sidebar isOpen={isClicked} toggle={toggleOpenHandler} />
      <Navbar toggle={toggleOpenHandler} />
      <HeroSection />
    </>
  );
};

export default Home;
