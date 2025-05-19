import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  return (
    <>
      <Nav></Nav>

      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
