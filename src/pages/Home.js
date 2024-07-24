import React from "react";
import Header from "../components/Globals/Header/Header";
import WhatsApp from "../components/Globals/WhatsApp/WhatsApp";
import HomeBanner from "../components/Home/HomeBanner/HomeBanner";
import SliderHome from "../components/Home/SliderHome/SliderHome";
import Messenger from "../components/Globals/Messenger/Messenger";

function Home() {
  return (
    <div >
      <Header />
      <HomeBanner />
      <SliderHome />
      <WhatsApp />
      <Messenger />
    </div>

  )
}

export default Home;
