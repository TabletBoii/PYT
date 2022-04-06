import React from 'react';

import './Homepage.css'
import {Link} from "react-router-dom";
import chooseComponent from "../../res/chooseComponent.png";
import adminComponent from "../../res/adminComponent.png";
import appComponent from "../../res/appComponent.png";

export default function Homepage() {
  return(
      <nav>
        <Link to="/choose-a-tour"><input type="image" className="chooseComponent" src={chooseComponent} alt="chooseComponent"/></Link>
        <Link to="/admin-panel-auth"><input type="image" className="adminComponent" src={adminComponent} alt="adminComponent"/></Link>
        <Link to="/app-panel"><input type="image" className="appComponent" src={appComponent} alt="error"/></Link>
      </nav>
  )
}