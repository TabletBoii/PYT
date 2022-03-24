import React from 'react';
import {render} from 'react-dom';
import './index.css';
import { MemoryRouter, Route, Routes} from "react-router-dom";
import App from './App';

import ChooseATour from "./pages/choose-a-tour/choose-a-tour";
import AdminPanelAuth from "./pages/admin-panel/admin-panel-auth";
import AppPanel from "./pages/appPanel/app-panel";
import BackComponent from './pages/backButton/back'

render(
      <MemoryRouter >
        <BackComponent/>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="choose-a-tour" element={<ChooseATour />} />
          <Route path="admin-panel" element={<AdminPanelAuth />} />
          <Route path="app-panel" element={<AppPanel />} />
        </Routes>
      </MemoryRouter>
    ,
    document.getElementById('root')
);

