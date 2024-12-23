import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  {
    src: 'public/img/a.jpg',
    alt: 'Couple selfie in nature'
  },
  {
    src: 'public/img/b.jpg',
    alt: 'Winter wonderland couple moment'
  },
  {
    src: 'public/img/d.jpg',
    alt: 'Sunny day couple selfie'
  },
  {
    src: 'public/img/e.jpg',
    alt: 'Couple selfie in nature'
  },
  {
    src: 'public/img/f.jpg',
    alt: 'Winter wonderland couple moment'
  },
];

export function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear'
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
  <div className="relative rounded-lg overflow-hidden shadow-xl">
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="outline-none">
          <div className="relative w-full h-0" style={{ paddingBottom: '75%' }}>
            <img
              src={image.src}
              alt={image.alt}
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>

  );
}