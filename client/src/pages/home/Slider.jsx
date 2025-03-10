// import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Slide = () => {

    const images = [
        'https://tripjive.com/wp-content/uploads/2024/11/Sundarbans-boat-tour-2-1068x610.jpg',
        'https://tripjive.com/wp-content/uploads/2024/11/Sundarbans-wildlife-5-1068x610.jpg',
        'https://tripjive.com/wp-content/uploads/2024/09/reasons-to-visit-Coxs-Bazar-1068x610.jpg',
        'https://usercontent.one/wp/www.sunshineseeker.com/wp-content/uploads/2023/10/Bali-itinerary-tegalalang-rice-terraces.webp?media=1735909273',
        'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1404/Pura-Saraswati-Temple,-Ubud,-Bali.jpg',
    ]

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false
    }
    return (
        <div className="slider-container w-full h-full">
            <Slider {...settings}>
                {
                    images.map((img, idx) => <div key={idx}>
                        <div className='min-h-[90vh] min-w-[90vw] bg-cover bg-top' style={{ backgroundImage: `url(${img})` }}></div>
                    </div>)
                }
            </Slider>
        </div>
    );
};

export default Slide;