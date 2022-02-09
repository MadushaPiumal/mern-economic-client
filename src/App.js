import "./App.css";
import Container from "@mui/material/Container";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import AboutUsScreen from "./Screens/AboutUsScreen";
import CentreScreen from "./Screens/CentreScreen";
import ProductScreen from "./Screens/ProductScreen";
import SingleProductScreen from "./Screens/SingleProductScreen";
import ProductgraphScreen from "./Screens/ProductgraphScreen";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route exact path="/" element={<HomeScreen/>} />
          <Route exact path="/Home" element={<HomeScreen/>} />
          <Route exact path="/centre" element={<HomeScreen/>} />
          <Route exact path="/About-Us" element={<AboutUsScreen/>} />
          <Route exact path="/centre/:centreId" element={<CentreScreen/>} />
          <Route exact path="/Products" element={<ProductScreen/>} />
          <Route exact path="/Product/:productId" element={<SingleProductScreen/>} />
          <Route exact path="/graph/:centreId/:itemId" element={<ProductgraphScreen/>} />
        </Routes>
      </Container>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
