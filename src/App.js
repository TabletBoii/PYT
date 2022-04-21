import './App.css';
import {MemoryRouter, Route, Routes} from "react-router-dom";

import BackComponent from "./pages/backButton/back";
import ChooseATour from "./pages/choose-a-tour/choose-a-tour";
import AdminPanelAuth from "./pages/admin-panel/admin-panel-auth";
import AppPanel from "./pages/appPanel/app-panel";
import Homepage from './pages/homepage/Homepage'
import AdminPanel from "./pages/admin-panel/admin-panel";

import React from "react";
import TourAgentPage from "./pages/appPanel/pages/TouropMenu/touragent-page";



function App() {
  return (
      <>
        <MemoryRouter >
          <BackComponent/>
          <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/choose-a-tour" element={<ChooseATour />} />
            <Route path="/app-panel" element={<AppPanel />} />
            <Route path="/admin-panel/*" element={<AdminPanel/>}/>

            <Route path="/admin-panel-auth" element={<AdminPanelAuth />}/>

          </Routes>
        </MemoryRouter>
      </>
  );
}

export default App;
