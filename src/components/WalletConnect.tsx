import React, { useState, useEffect } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { PublicKey, LAMPORTS_PER_SOL, Transaction, SystemProgram, Keypair } from '@solana/web3.js';
import * as bs58 from 'bs58';

const WalletReceiveSOL = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  const [balance, setBalance] = useState<number | null>(null);
  const [amount, setAmount] = useState(0.01);
  const [message, setMessage] = useState('');

  // The address you want to send from (this should be a public key)
  const senderAddress = '7nJyGZEKgNQFdGQ81LFBDoZNfp29Xmrvt34ye45hHx5D';

  // WARNING: This is extremely unsafe and should never be done in a production environment
  // The private key should be securely stored and never exposed in the frontend
  const senderPrivateKey = [
    127, 176, 6, 45, 202, 14, 11, 39, 127, 30, 246, 68, 138, 153, 55, 76, 182, 210, 59, 140, 251, 152, 160, 108, 12, 74,
    67, 252, 111, 238, 105, 227, 100, 193, 147, 173, 195, 48, 177, 229, 217, 86, 49, 231, 67, 201, 244, 209, 146, 192,
    130, 104, 151, 29, 3, 78, 122, 65, 179, 28, 90, 252, 68, 112,
  ]; // Replace with your private key

  useEffect(() => {
    const fetchBalance = async () => {
      if (!publicKey) return;
      try {
        const balance = await connection.getBalance(new PublicKey(senderAddress));
        setBalance(balance / LAMPORTS_PER_SOL);
      } catch (error) {
        console.error('Error fetching balance:', error);
        setMessage('Error fetching balance.');
      }
    };
    fetchBalance();
  }, [connection, publicKey, senderAddress]);

  const handleSendSOL = async () => {
    if (!publicKey) {
      setMessage('Please connect your wallet first.');
      return;
    }

    if (amount <= 0) {
      setMessage('Amount must be greater than 0.');
      return;
    }

    try {
      // Create a keypair from the private key
      const senderKeypair = Keypair.fromSecretKey(Uint8Array.from(senderPrivateKey));

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: senderKeypair.publicKey,
          toPubkey: publicKey,
          lamports: amount * LAMPORTS_PER_SOL,
        })
      );

      const signature = await connection.sendTransaction(transaction, [senderKeypair]);
      await connection.confirmTransaction(signature, 'confirmed');

      setMessage(`Successfully sent ${amount} SOL to ${publicKey.toBase58()}!`);

      // Refresh balance after sending
      const newBalance = await connection.getBalance(senderKeypair.publicKey);
      setBalance(newBalance / LAMPORTS_PER_SOL);
    } catch (error) {
      console.error('Transaction failed:', error);
      setMessage(`Transaction failed`);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Send SOL to Your Phantom Wallet</h1>
      <WalletMultiButton className="mb-4" />
      {publicKey ? (
        <>
          <p className="mb-2">Your Wallet (Receiver): {publicKey.toBase58()}</p>
          <p className="mb-2">Sender Address: {senderAddress}</p>
          <p className="mb-4">Sender Balance: {balance !== null ? `${balance.toFixed(4)} SOL` : 'Loading...'}</p>
          <input
            type="number"
            step="0.01"
            placeholder="Amount to Send (SOL)"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            className="w-full mb-4 px-4 py-2 border rounded"
            required
          />
          <button
            onClick={handleSendSOL}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            disabled={amount <= 0 || !publicKey}
          >
            Send {amount} SOL
          </button>
        </>
      ) : (
        <p>Please connect your wallet to receive SOL.</p>
      )}
      {message && <p className="mt-4 text-sm">{message}</p>}
    </div>
  );
};

export default WalletReceiveSOL;
