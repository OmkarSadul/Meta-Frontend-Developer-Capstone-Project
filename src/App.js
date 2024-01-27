import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// import GoToTop from "./components/GoToTop/GoToTop";
import Menu from "./components/Menu/Menu";
import Reservation from "./components/Reservation/Reservation";
import HomePage from "./components/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} Component={HomePage}/>
        <Route path="/reservation" element={<Reservation/>} Component={Reservation}/>
      </Routes>
      <Footer />
      {/* <GoToTop/> */}
    </>
  );
}

export default App;
