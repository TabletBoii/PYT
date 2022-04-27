
import React from "react";
import AdminPanelMenu from "../admin-panel-menu/admin-panel-menu";
import TourAgentPage from "./components/TouropMenu/touragent-page";
import {Route, Routes} from "react-router-dom";
import FeedBackPage from "./components/FeedbackMenu/feedback-page";
import HotelPage from "./components/HotelMenu/hotel-page";
import TourPage from "./components/TourMenu/tour-page";



export default function AdminPanel() {
  return(
      <div>
        <AdminPanelMenu/>
        <Routes>
          <Route path="/tourAgents" element={<TourAgentPage />}/>
          <Route path="/feedback" element={<FeedBackPage />}/>
          <Route path="/hotel-page" element={<HotelPage />}/>
          <Route path="/tour-page" element={<TourPage />}/>
        </Routes>
      </div>


  )
}
