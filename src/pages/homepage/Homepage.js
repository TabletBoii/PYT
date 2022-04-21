import React from 'react';

import './Homepage.css'
import {useNavigate} from "react-router-dom";
import chooseComponent from "../../res/chooseComponent.png";
import adminComponent from "../../res/adminComponent.png";
import appComponent from "../../res/appComponent.png";



export default function Homepage() {
  const history = useNavigate()
  return(
      <div>
        <input type="image" className="chooseComponent" src={chooseComponent} alt="chooseComponent" onClick={()=>history('/choose-a-tour')}/>
        <input type="image" className="adminComponent" src={adminComponent} alt="adminComponent" onClick={()=>history('/admin-panel-auth')}/>
        <input type="image" className="appComponent" src={appComponent} alt="error" onClick={()=>history('/app-panel')}/>
      </div>
  )
}