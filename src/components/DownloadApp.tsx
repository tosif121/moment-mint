'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import Lottie from 'lottie-react';
import animationData from '../lottieAnimation/animation_4.json';

const DownloadApp: React.FC = () => {
  return (
    <div className="min-h-screen p-16 text-white flex justify-center items-center bg-black">
      <div className="m-auto container flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 flex justify-center items-center relative">
          <div className="relative w-full max-w-md lg:max-w-lg me-auto">
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
              className="group w-full relative sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-violet-500 to-blue-500 text-white text-lg sm:text-xl rounded-md shadow hover:from-violet-600 hover:to-blue-600 inline-block transition duration-500 overflow-hidden hover:scale-110"
            >
              <span className="relative z-10 flex items-center justify-center ">
                <FontAwesomeIcon icon={faGooglePlay} className="mr-3 text-2xl" />
                Download App
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
