import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FnClock from './FnClock'
import ClsClock from "./ClsClock"
import MouseTracker from "./MouseTracker"
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
    <div>
    {/* <FnClock date={new Date()}/> */}
    {/* <ClsClock /> */}
    <MouseTracker />
    </div>,
  document.getElementById('root')
);


reportWebVitals();
