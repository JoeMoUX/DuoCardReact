import React from "react";
import {
  CardOption,
  Features,
  Footer,
  Header,
  Possibility,
} from "../../containers";
import { Tabs } from "../../components";
import "./home.css";
import TestGround from "../../components/TestGround";

const Home = (props) => {
  return (
    <div className="home">
      <Header />

      <Features />
      <Possibility />

      <Tabs />
      <CardOption />
      {/* <TestGround /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
