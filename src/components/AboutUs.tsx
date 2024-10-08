'use client';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { activities } from '../data/activities';

const AboutUs: React.FC = () => {
  const slider1 = useRef<Slider | null>(null);
  const slider2 = useRef<Slider | null>(null);

  const settings: React.ComponentProps<typeof Slider> = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    dots: false,
    arrows: false,
    autoplaySpeed: 4000,
    infinite: true,
    pauseOnHover: false,
    cssEase: 'linear',
  };

  const reverseSettings: React.ComponentProps<typeof Slider> = {
    ...settings,
    rtl: true,
  };

  return (
    <div className="min-h-screen text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <p className="text-lg mb-4">
            We're revolutionizing the way people share and monetize their experiences. Our platform allows you to
            capture life's moments in real-time, share them instantly, and earn cryptocurrency while doing so.
          </p>
          <p className="text-lg mb-4">
            With blockchain verification ensuring authenticity and the ability to create unique NFTs, we're not just a
            social platform – we're the future of digital content creation and ownership.
          </p>
          <p className="text-lg">
            Share any moment, anywhere. From daily activities to special celebrations, we've got you covered:
          </p>
        </div>

        <div className="mb-16">
          <Slider {...settings} ref={slider1}>
            {Object.entries(activities).map(([activity, { url }]) => (
              <div key={activity} className="px-2">
                <div className="flex flex-col items-center gap-y-4">
                  <img src={url} alt={activity} className="w-48 h-48 object-cover rounded-lg" />
                  <p className="text-lg">{activity}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div>
          <Slider {...reverseSettings} ref={slider2}>
            {Object.entries(activities).map(([activity, { url }]) => (
              <div key={activity} className="px-2">
                <div className="flex flex-col items-center gap-y-4">
                  <img src={url} alt={activity} className="w-48 h-48 object-cover rounded-lg" />
                  <p className="text-lg">{activity}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
