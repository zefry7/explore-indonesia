import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
import Intro from './intro/Intro';
import Articles from './articles/articles';
import Map from "./map/map"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Intro />
    <Articles /> 
    <Map />
  </React.StrictMode>
);


