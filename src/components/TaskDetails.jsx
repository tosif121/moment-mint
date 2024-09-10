import { Connection, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import { useState, useEffect } from 'react';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Metaplex } from '@metaplex-foundation/js';

export default function TaskDetails({ id }) {
  const [taskCompleted, setTaskCompleted] = useState(false);
  const [nftMetadata, setNftMetadata] = useState(null);
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();

  const metaplex = Metaplex.make(connection);

  // Sample task details (in a real app, this would come from a database or API)
  const task = {
    id,
    title: 'Test a new app',
    payment: '5',
    description: 'Test our new mobile app and provide feedback.',
    deadline: '2024-09-10',
  };

  useEffect(() => {
    if (publicKey) {
      fetchNFT();
    }
  }, [publicKey]);

  const fetchNFT = async () => {
    if (!publicKey) return;

    try {
      const nfts = await metaplex.nfts().findAllByOwner({ owner: publicKey });
      if (nfts.length > 0) {
        setNftMetadata(nfts[0]);
      }
    } catch (error) {
      console.error('Failed to fetch NFT:', error);
    }
  };

  const handleCompleteTask = async () => {
    if (!publicKey) {
      console.log('Please connect your wallet first.');
      return;
    }

    try {
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new PublicKey('HcUCKraQ2ireKdYf2ATnf8Ht6H8rPjSu1JwWqo41LrMw'), // Replace with actual recipient's public key
          lamports: parseFloat(task.payment) * 1e9, // Convert SOL to lamports
        })
      );

      const { signature } = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature);

      setTaskCompleted(true);
      console.log('Task completed and payment sent.');

      // After successful payment, fetch updated NFT
      await fetchNFT();
    } catch (error) {
      console.error('Transaction failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">{task.title}</h1>
      <p>{task.description}</p>
      <p>Payment: {task.payment} SOL</p>
      <p>Deadline: {task.deadline}</p>
      <WalletMultiButton className="mt-4" />
      {publicKey && (
        <button
          onClick={handleCompleteTask}
          className={`mt-4 px-6 py-3 ${
            taskCompleted ? 'bg-gray-400' : 'bg-green-500'
          } text-white rounded shadow hover:bg-green-700`}
          disabled={taskCompleted}
        >
          {taskCompleted ? 'Task Completed' : 'Complete Task & Receive Payment'}
        </button>
      )}
      {nftMetadata && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold">NFT Metadata</h2>
          <pre className="bg-gray-200 p-4 rounded">{JSON.stringify(nftMetadata, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
