import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
import Intro from './intro/Intro';
import Articles from './articles/articles';
import Map from "./map/map"
import Gallery from './gallery/gallery';
import Footer from './footer/footer';
import Video from './video/video';
import Road from './road/road';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Intro />
    <Articles /> 
    <Map />
    <Video />
    <Gallery />
    <Road />
    {/* <Footer /> */}
  </React.StrictMode>
);


