import { ReactElement, useEffect } from "react";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Services from "./pages/services/services";
import Contacts from "./pages/contacts/contacts";

function App(): ReactElement {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
