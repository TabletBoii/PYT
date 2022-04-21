
import React from "react";
import AdminPanelMenu from "../admin-panel-menu/admin-panel-menu";
import BackComponent from "../backButton/back";
import TourAgentPage from "../appPanel/pages/TouropMenu/touragent-page";
import {Route, Routes} from "react-router-dom";



export default function AdminPanel() {
  return(
      <div>
        <AdminPanelMenu/>
        <Routes>
          <Route path="/tourAgents" element={<TourAgentPage />}/>
        </Routes>
      </div>


  )
}
