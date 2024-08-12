import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import Home_animy from "./components/Home_animy";
import LayeringFromBottomAnime from "./components/LayeringFromBottomAnime";
import "bootstrap/dist/css/bootstrap.min.css";
import Discover from "./components/Discover";
import MiddlePhotosAnime from "./components/MiddlePhotosAnime";
import AfterPhotos from "./components/AfterPhotos";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HomePageAnimation from "./components/homePageAnimation";
import ImagesAnimation from "./components/ImagesAnimation";
import FastWayComp from "./components/FastWayComp";
import StaySafe from "./components/StaySafe";
import Accordian from "./components/Accordian";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div>
      <Navbar />
      <HomePageAnimation />
      <Discover />
      <MiddlePhotosAnime />
      {/* <ImagesAnimation /> */}
      <Accordian />
      <AfterPhotos />
      <StaySafe />
      {/* <LayeringFromBottomAnime /> */}
      <FastWayComp />
    </div>
  );
}

export default App;
