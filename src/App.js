import React from 'react';
import logo from './logo.svg';
import './App.css';
import im2 from "./imageinsrc.jpg";
import v1 from "./hans.mp4";
import './style.css';
// import image from '/image/imageinpublic.jpg';
function App() {
  return (
    <div className="App">

      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Your name here</h1>
        <br />
        <img src="./image/imageinpublic.jpg" />

        <br />
        <img src={im2} alt="im2" />
      </div>
      <video width={320} height={240} controls>
        <source src={v1} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
