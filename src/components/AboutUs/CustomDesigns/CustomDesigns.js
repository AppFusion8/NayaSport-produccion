import React from 'react';
import Slider from 'react-slick';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../../assets/img/slide1.png';
import img2 from '../../../assets/img/slide2.png';
import Title from '../../Globals/Title/Title';

const CustomDesigns = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const images = [img1, img2];

    return (
        <div>
            <br></br>
            <Title title="DISEÑOS PERSONALIZADOS" />
            <Slider {...settings}>
                {images.map((url, index) => (
                    <div key={index}>
                        <img src={url} alt={`Slide ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CustomDesigns;
