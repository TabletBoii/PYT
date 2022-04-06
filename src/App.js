import './App.css';
import {MemoryRouter, Route, Routes} from "react-router-dom";

import BackComponent from "./pages/backButton/back";
import ChooseATour from "./pages/choose-a-tour/choose-a-tour";
import AdminPanelAuth from "./pages/admin-panel/admin-panel-auth";
import AppPanel from "./pages/appPanel/app-panel";
import Homepage from './pages/homepage/Homepage'
import AdminPanel from "./pages/admin-panel/admin-panel";



function App() {
  return (
      <>
        <MemoryRouter >
          <BackComponent/>
          <Routes>
            <Route path="/" exact element={<Homepage />}/>
            <Route path="/choose-a-tour" exact element={<ChooseATour />} />
            <Route path="/app-panel" exact element={<AppPanel />} />
            <Route path="/admin-panel-auth" exact element={<AdminPanelAuth />}/>
          </Routes>
        </MemoryRouter>
      </>
  );
}

export default App;
