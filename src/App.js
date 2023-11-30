import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import NewsRoom from "./components/NewsRoom";
import ExpoloreDot from "./components/ExploreDot";
// import Resourse from "./components/Resourse";
// import Secretary from "./components/Secretary";

import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <NewsRoom />
      <br />
      <br />
      <ExpoloreDot />
      {/* <Resourse /> */}
      {/* <Secretary /> */}
      <Footer />
    </div>
  );
};

export default App;
