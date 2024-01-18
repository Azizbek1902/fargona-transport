import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import NewsRoom from "./components/NewsRoom";
import Survey from "./components/Survey";
import ExpoloreDot from "./components/ExploreDot";
// import Resourse from "./components/Resourse";
// import Secretary from "./components/Secretary";

import "./App.css";
import Images from "./components/Images";
import Footer from "./components/Footer";
import YoutubeVideo from "./components/YoutubeVideo";

const App = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <NewsRoom />
      <Survey />
      <br />
      <br />
      <ExpoloreDot />
      <YoutubeVideo />
      <Images />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default App;
