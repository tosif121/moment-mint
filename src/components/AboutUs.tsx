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
    beforeChange: (current: number, next: number) => {
      if (slider2.current) {
        slider2.current.slickGoTo(current);
      }
    },
  };

  const reverseSettings: React.ComponentProps<typeof Slider> = {
    ...settings,
    rtl: true,
    beforeChange: (current: number, next: number) => {
      if (slider1.current) {
        slider1.current.slickGoTo(current);
      }
    },
  };

  return (
    <div className="min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8">
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

        <Slider {...settings} ref={slider1}>
          {Object.keys(activities).map((activity, index) => (
            <div key={index} className="my-10">
              <div className="flex flex-col items-center gap-y-4">
                <img src={activities[activity].url} alt={activity} />
                <p>{activity}</p>
              </div>
            </div>
          ))}
        </Slider>

        <Slider {...reverseSettings} ref={slider2}>
          {Object.keys(activities).map((activity, index) => (
            <div key={index}>
              <div className="flex flex-col items-center gap-y-4">
                <img src={activities[activity].url} alt={activity} />
                <p>{activity}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AboutUs;
