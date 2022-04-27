import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import {MemoryRouter} from "react-router-dom";


render(
    <MemoryRouter>
      <App/>
    </MemoryRouter>,
    document.getElementById('root')
);

