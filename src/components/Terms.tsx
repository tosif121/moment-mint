import React from 'react';

const Terms = () => {
  const terms = [
    { title: 'Acceptance of Terms', content: 'By accessing or using our platform, you agree to be bound by these Terms and Conditions.' },
    { title: 'User Responsibilities', content: 'You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account.' },
    { title: 'Content Ownership', content: 'You retain ownership rights to the content you share on our platform. By sharing content, you grant us a license to use, modify, and display it.' },
    { title: 'Prohibited Activities', content: 'You agree not to engage in any activity that interferes with or disrupts the platform or violates any applicable laws.' },
    { title: 'Cryptocurrency and NFTs', content: 'The value of cryptocurrency and NFTs can be volatile. You acknowledge the risks associated with digital assets.' },
  ];

  return (
    <div className="min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Terms and Conditions</h1>
        <div className="space-y-6">
          {terms.map((term, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-2">{term.title}</h2>
              <p>{term.content}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center text-gray-400">
        <p>Last updated: 13-April-2025</p>
        <p>By using our platform, you agree to these Terms and Conditions.</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;