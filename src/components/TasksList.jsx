import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function TaskList() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [error, setError] = useState(null);

  const tasks = [
    {
      id: 1,
      title: 'Test a new app',
      payment: '5 SOL',
      description: 'Test our new mobile app and provide feedback.',
      deadline: '2024-09-10',
    },
    {
      id: 2,
      title: 'Review a website',
      payment: '2 SOL',
      description: 'Review the website and provide suggestions.',
      deadline: '2024-09-15',
    },
    // Add more tasks here
  ];

  const connectWallet = async () => {
    if (window.solana && window.solana.isPhantom) {
      try {
        const response = await window.solana.connect();
        setWalletAddress(response.publicKey.toString());
        setError(null); // Clear any previous error
      } catch (error) {
        setError('Wallet connection failed. Please try again.');
        console.error('Wallet connection failed', error);
      }
    } else {
      setError('Phantom Wallet is not installed. Please install it.');
    }
  };

  useEffect(() => {
    if (window.solana && window.solana.isPhantom) {
      window.solana
        .connect({ onlyIfTrusted: true })
        .then(({ publicKey }) => {
          setWalletAddress(publicKey.toString());
          setError(null); // Clear any previous error
        })
        .catch((error) => {
          setError('Failed to connect to Phantom Wallet.');
          console.error('Error connecting to wallet', error);
        });
    } else {
      setError('Phantom Wallet is not installed.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Task Marketplace</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {!walletAddress ? (
        <button
          onClick={connectWallet}
          className="px-6 py-3 bg-blue-500 text-white rounded-md shadow hover:bg-blue-700"
        >
          Connect Phantom Wallet
        </button>
      ) : (
        <p className="mb-4">Connected Wallet: {walletAddress}</p>
      )}
      <div>
        {tasks.length === 0 ? (
          <p>No tasks available.</p>
        ) : (
          <ul className="space-y-4">
            {tasks.map((task) => (
              <li key={task.id} className="p-4 bg-white rounded-md shadow">
                <h2 className="text-xl font-semibold">{task.title}</h2>
                <p className="text-gray-700">{task.description}</p>
                <p className="text-green-500">Payment: {task.payment}</p>
                <p className="text-gray-500">Deadline: {task.deadline}</p>
                <Link href={`/tasks/${task.id}`} className="text-blue-500 underline">
                  View Details
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
