import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from './layout/AppLayout';
import Homepage from './pages/home/Homepage';
import OfferPage from './pages/offer/OfferPage';
import OfferDetail from './pages/offer/OfferDetail';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/offer" element={<OfferPage />} />
          <Route path="/offer/detail" element={<OfferDetail />} />

        </Route>
        <Route path="*" element={"NOT FOUND"} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

