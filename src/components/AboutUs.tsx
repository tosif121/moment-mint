import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro, faCoins, faLock, faDiamond } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
  const aboutData = {
    'At Collage': '🎓',
    'At Farm': '🌾',
    'At Home': '🏠',
    'At Temple': '🕌',
    'At Traffic': '🚦',
    Attending: '🎟️',
    Baking: '🍞',
    Celebration: '🎉',
    Chilling: '🛋️',
    'Class Bunk': '🏫❌',
    Cleaning: '🧹',
    Communting: '🚇',
    Going: '🚶‍♂️',
    Grooming: '💇‍♂️',
    Hangout: '👯‍♂️',
    'Independence Day': '🇮🇳',
    Janmashtami: '🎊',
    Learning: '📚',
    Listening: '🎧',
    Meditating: '🧘‍♂️',
    Cooking: '🍳',
    Cycling: '🚴‍♀️',
    Dancing: '💃',
    Designing: '🎨',
    Drinking: '🍹',
    Eating: '🍽️',
    Engagement: '💍',
    Enjoying: '😊',
    Exercising: '🏋️‍♂️',
    Gaming: '🎮',
    'Ganesh Chaturthi': '🐘',
    Gardening: '🌿',
    Meeting: '👥',
    Nothing: '😴',
    Partying: '🥳',
    'Playing Garba': '🪔',
    Playing: '🎲',
    Praying: '🙏',
    Rafting: '🚣‍♂️',
    Reading: '📖',
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          {Object.entries(aboutData).map(([activity, emoji], index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-4 text-center">
              <span className="text-4xl mb-2 block">{emoji}</span>
              <span className="text-sm">{activity}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: faCameraRetro, title: 'Capture Moments', description: 'Share your experiences as they happen' },
            { icon: faCoins, title: 'Earn Crypto', description: 'Get rewarded for your content' },
            { icon: faLock, title: 'Blockchain Verified', description: 'Ensure authenticity of shared moments' },
            { icon: faDiamond, title: 'Create NFTs', description: 'Turn special moments into digital assets' },
          ].map((feature, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 text-center">
              <FontAwesomeIcon
                icon={feature.icon}
                className="text-2xl mb-4 text-blue-500 m-auto"
                width={30}
                height={30}
              />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
