import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import History from "./pages/History";
import Shop from "./pages/Shop";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/his" element={<History />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
