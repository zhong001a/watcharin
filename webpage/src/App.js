import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from './layout/AppLayout';
import Homepage from './page/Hompage';
import Offer from './page/Offer';
import Shop from './page/Shop';
import AllOffer from './page/AllOffer';
import Product from './page/Product';
import SingleOffer from './page/SingleOffer';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/offer/:id" element={<SingleOffer />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product" element={<Product />} />
          <Route path="/alloffer" element={<AllOffer />} />
        </Route>
        <Route path="*" element={"NOT FOUND"} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

