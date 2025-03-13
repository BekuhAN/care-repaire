import { ReactElement } from "react";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";

function App(): ReactElement {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        {/* <Route path="/contacts" element={<Contacts />}></Route> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
