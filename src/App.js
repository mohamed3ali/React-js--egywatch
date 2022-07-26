import React from 'react'
import "./index.css";
import Header from './component/header';
import Productss from './component/products';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./component/DataProvider";
import Details from './component/Details';
import Cart from './component/Cart';
function App() {
  return (
    <DataProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/products" element={<Productss />} />
          <Route path="/products/:id" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </DataProvider>
  )
}
export default App