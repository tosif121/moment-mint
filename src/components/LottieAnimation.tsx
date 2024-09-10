'use client';
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../lottieAnimation/animation.json';

const LottieAnimation: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <Lottie animationData={animationData} loop={true} style={{ height: '100%', width: '100%' }} />
    </div>
  );
};

export default LottieAnimation;
