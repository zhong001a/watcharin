import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from './layout/AppLayout';
import Product from './pages/Product';
import Indexs from './pages/select/indexs';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>

          <Route path="product" element={<Product />} />
          <Route path="step" element={<Indexs />} />
        </Route>
        <Route path="*" element={"NOT FOUND"} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

