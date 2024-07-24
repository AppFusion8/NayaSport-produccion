import React from 'react';
import Footer from '../components/Globals/Footer/Footer';
import Header from '../components/Globals/Header/Header';
import WhatsApp from '../components/Globals/WhatsApp/WhatsApp';
import BannerUniform from '../components/Uniforms/BannerUniform/BannerUniform';
import FormUniform from '../components/Uniforms/FormUniform/FormUniform';


function Uniforms() {
  return (
    <div className='container-background'>
      <Header />
      <BannerUniform />
      <FormUniform />
      <Footer />
      <WhatsApp />
    </div>
  )
}

export default Uniforms
