import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggleOpenHandler} />
      <Navbar toggle={toggleOpenHandler} />
    </>
  );
};

export default Home;
