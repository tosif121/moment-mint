'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import Lottie from 'lottie-react';
import animationData from '../lottieAnimation/animation_4.json';

const DownloadApp: React.FC = () => {
  return (
    <div className="min-h-screen p-16 text-white flex justify-center items-center bg-black">
      <div className="mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 flex justify-center items-center relative">
          <div className="relative w-full max-w-md lg:max-w-lg mx-auto">
            <Lottie animationData={animationData} loop={true} style={{ height: '100%', width: '100%' }} />
          </div>
        </div>

        <div className="lg:w-1/2 flex flex-col items-start lg:items-start text-center lg:text-left">
          <h2 className="text-5xl font-bold mb-6 lg:mb-8">Download the SolEarn App</h2>
          <p className="text-lg text-gray-300 mb-10 lg:mb-12">
            Experience the ultimate way to earn with Solana and USDC! Download the app to get started on your journey.
          </p>

          <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-6">
            <a
              href="#"
              className="flex items-center bg-green-600 text-white text-lg font-bold py-4 px-6 rounded-xl shadow-lg hover:bg-green-700 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faGooglePlay} className="mr-3 text-2xl" />
              Download for Android
            </a>
            <a
              href="#"
              className="flex items-center bg-gray-700 text-white text-lg font-bold py-4 px-6 rounded-xl shadow-lg hover:bg-gray-800 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faApple} className="mr-3 text-2xl" />
              Download for iOS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
