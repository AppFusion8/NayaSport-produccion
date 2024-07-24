import React from 'react'
import Banner from '../../../assets/BannerUniformes.jpeg'
import '../Uniforms.css'

export default function BannerUniform() {
  return (
    <div className='banner-uniform'>
        <img src={Banner} alt='banner'/>
    </div>
  )
}
