import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from "./components/Body";
import context from "./contextapi/useContext";
import { useState } from "react";

function App() {
  const [petData, setPetData] = useState([]);
  return (
    <div className="flex flex-col min-h-screen">
      <context.Provider value={{ petData, setPetData }}>
        <Navbar />
        <Body />
        <Footer />
      </context.Provider>
    </div>
  );
}

export default App;
