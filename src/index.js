import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
import Intro from './intro/Intro';
import Articles from './articles/articles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Intro />
    <Articles /> 
  </React.StrictMode>
);


