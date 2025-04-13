import React from 'react';

const PrivacyPolicy = () => {
  const policies = [
    {
      title: 'Information Collection',
      content: 'We collect information you provide directly to us when you use our services.',
    },
    {
      title: 'Use of Information',
      content: 'We use the information we collect to provide, maintain, and improve our services.',
    },
    {
      title: 'Information Sharing',
      content:
        'We do not share personal information with companies, organizations, or individuals outside of our platform except in specific circumstances.',
    },
    {
      title: 'Data Security',
      content: 'We use blockchain technology to ensure the authenticity and security of your shared moments.',
    },
    {
      title: 'Your Rights',
      content: 'You have the right to access, correct, or delete your personal information at any time.',
    },
  ];

  return (
    <div className="min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
        <div className="space-y-6">
          {policies.map((policy, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-2">{policy.title}</h2>
              <p>{policy.content}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>Last updated: 13-April-2025</p>
          <p>If you have any questions about our Privacy Policy, please contact us.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
