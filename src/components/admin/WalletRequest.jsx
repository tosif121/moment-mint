import React, { useState, useEffect } from 'react';

const WalletRequest = () => {
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [faucetBalance, setFaucetBalance] = useState(null);

  useEffect(() => {
    fetchtBalance();
  }, []);

  const fetchtBalance = async () => {
    try {
      const response = await fetch('http://localhost:5000/faucet-balance');
      const data = await response.json();
      setFaucetBalance(data.balance);
    } catch (error) {
      console.error('Error fetching faucet balance:', error);
    }
  };

  const handleRequest = async () => {
    if (!address || !amount || parseFloat(amount) <= 0) {
      setMessage('Please enter a valid address and amount.');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('http://localhost:5000/request-sol', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ recipientAddress: address, amount: parseFloat(amount) }),
      });

      const result = await response.json();
      if (result.success) {
        setMessage(result.message);
        fetchtBalance();  // Update faucet balance after successful request
      } else {
        setMessage(result.error || 'Error requesting SOL.');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Request Dummy SOL</h2>
      {faucetBalance !== null && (
        <p className="mb-4 text-gray-600">Faucet Balance: {faucetBalance} SOL</p>
      )}
      <input
        type="text"
        placeholder="Wallet Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="number"
        placeholder="Amount (SOL)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        min="0"
        step="0.1"
      />
      <button 
        onClick={handleRequest}
        disabled={isLoading}
        className={`w-full p-2 rounded-md text-white font-semibold
          ${isLoading 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
          }`}
      >
        {isLoading ? 'Requesting...' : 'Request SOL'}
      </button>
      {message && (
        <div className={`mt-4 p-3 rounded-md ${
          message.includes('Error')
            ? 'bg-red-100 text-red-700 border border-red-300'
            : 'bg-green-100 text-green-700 border border-green-300'
        }`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default WalletRequest;