import './App.css';
import Header from "./layouts/header/header";
import HomePage from "./pages/home/homePage";
import Footer from "./layouts/footer/footer";
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Catalog from "./pages/catalog/catalog";
import DetailProductPage from "./pages/detail-product-page/detailProductPage";

function App() {
  return (
      <Router>
          <Header/>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/catalog" element={<Catalog/>}/>
              <Route path="/catalog/:id" element={<DetailProductPage/>}/>
          </Routes>
          <Footer/>
      </Router>
  )
}

export default App;
