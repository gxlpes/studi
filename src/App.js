import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Home />
    </Router>
  );
}

export default App;
