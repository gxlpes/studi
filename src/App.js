import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Sidebar />
      <Navbar />
    </Router>
  );
}

export default App;
