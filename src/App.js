import './App.css';
import { useContext  } from 'react'
import {MemoryRouter, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import { animated, useTransition } from 'react-spring'

import 'bootstrap/dist/css/bootstrap.min.css';

import BackComponent from "./pages/backButton/back";
import ChooseATour from "./pages/choose-a-tour/choose-a-tour";
import AdminPanelAuth from "./pages/admin-panel/admin-panel-auth";
import AppPanel from "./pages/appPanel/app-panel";
import Homepage from './pages/homepage/Homepage'
import AdminPanel from "./pages/admin-panel/admin-panel";

import React from "react";


function App(){

  const history = useLocation()
  const transitions = useTransition(history, {

    from: {opacity: 0, translate:"-100px, 0px"},
    enter: { opacity: 1, delay:100, translate:"0px, 0px" },

  })
  return transitions((props, item) => (
      <>
        <BackComponent/>
        <animated.div style={props}>


          <Routes history={item}>
            <Route path="/" element={<Homepage />}/>
            <Route path="/choose-a-tour" element={<ChooseATour />} />
            <Route path="/app-panel" element={<AppPanel />} />

            <Route path="/admin-panel-auth" element={<AdminPanelAuth />}/>

          </Routes>

        </animated.div>
        <Routes>
          <Route path="/admin-panel/*" element={<AdminPanel/>}/>
        </Routes>
      </>

  ));
}

export default App;
