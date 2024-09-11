'use client';
import React from 'react';
import Lottie from 'lottie-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserPlus,
  faSearch,
  faTasks,
  faMoneyBillWave,
  faCertificate,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';
import animationData from '../lottieAnimation/animation_2.json';

const HowItWorks: React.FC = () => {
  const steps = [
    { icon: faUserPlus, title: 'Sign Up', description: 'Create your profile based on your skills and interests.' },
    { icon: faSearch, title: 'Explore Tasks', description: 'Find real tasks like surveys, testing, and research.' },
    { icon: faTasks, title: 'Complete the Task', description: 'Follow the instructions and submit your work.' },
    {
      icon: faMoneyBillWave,
      title: 'Get Paid Instantly',
      description: 'Payment in Solana or USDC is released via smart contract.',
    },
    {
      icon: faCertificate,
      title: 'Earn an NFT Certificate',
      description: 'Each task completed earns you a blockchain-based certificate.',
    },
    {
      icon: faChartLine,
      title: 'Build Your Reputation',
      description: 'Get rated and unlock higher-paying opportunities.',
    },
  ];

  return (
    <div className="min-h-screen p-16 text-white flex flex-col justify-evenly">
      <div className="m-auto container">
        <h2 className="text-5xl font-bold text-center mb-16">How to Earn with SolEarn</h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-[#1b1b25] group backdop-blur-lg rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-110 hover:bg-purple-500/20"
                >
                  <div className="bg-[#272731] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <FontAwesomeIcon
                      icon={step.icon}
                      className="text-2xl shadow-sm text-[#8639ff] transition-colors duration-300 group-hover:text-white"
                      width={35}
                      height={35}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center">
            <div className="w-full max-w-md">
              <Lottie animationData={animationData} loop={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
