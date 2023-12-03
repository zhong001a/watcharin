import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from './layout/AppLayout';
import Homepage from './page/Hompage';

import Offer from './page/Offer';


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/offer" element={<Offer />} />
        </Route>
        <Route path="*" element={"NOT FOUND"} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

