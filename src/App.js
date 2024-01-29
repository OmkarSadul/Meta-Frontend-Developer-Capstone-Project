import "./App.css";
import Header from "./components/Header/Header";
// import GoToTop from "./components/GoToTop/GoToTop";
import Reservation from "./components/Reservation/Reservation";
import HomePage from "./components/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import OrderOnline from "./components/OrderOnline/OrderOnline";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} Component={HomePage}/>
        <Route path="/reservation" element={<Reservation/>} Component={Reservation}/>
        <Route path="/orderOnline" element={<OrderOnline/>} Component={OrderOnline}/>
      </Routes>
      {/* <GoToTop/> */}
    </>
  );
}

export default App;
