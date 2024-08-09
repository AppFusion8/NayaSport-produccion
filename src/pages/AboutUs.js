import React from 'react';
import Footer from '../components/Globals/Footer/Footer';
import Header from '../components/Globals/Header/Header';
import WhatsApp from '../components/Globals/WhatsApp/WhatsApp';
import CustomDesigns from '../components/AboutUs/CustomDesigns/CustomDesigns';
import MisionVision from '../components/AboutUs/MisionVision/MisionVision';
import Messenger from '../components/Globals/Messenger/Messenger';


function AboutUs() {
  return (
    <div className='container-background'>
      <Header />
      <CustomDesigns />
      <MisionVision />
      <Footer />
      <WhatsApp />
      <Messenger />
    </div>
  )
}

export default AboutUs
