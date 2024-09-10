import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useState, useEffect } from 'react';
import { Connection, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';

const WalletConnect = () => {
  const { wallet, connect, disconnect, connected, publicKey, sendTransaction } = useWallet();
  const [balance, setBalance] = useState(null);

  // Connect to the Devnet
  const connection = new Connection('https://api.devnet.solana.com');

  useEffect(() => {
    const fetchBalance = async () => {
      if (connected && publicKey) {
        try {
          const balanceLamports = await connection.getBalance(new PublicKey(publicKey));
          const balanceSol = balanceLamports / 1e9; // Convert lamports to SOL
          setBalance(balanceSol);
        } catch (error) {
          console.error('Error fetching balance:', error);
        }
      }
    };

    fetchBalance();
  }, [connected, publicKey]);

  const handleWithdraw = async () => {
    if (!publicKey) return;

    try {
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new PublicKey('YOUR_PUBLIC_KEY_HERE'), // Replace with recipient public key
          lamports: 0.01 * 1e9, // Withdraw 0.01 SOL (dummy SOL in Devnet)
        })
      );

      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature);

      alert('Withdrawal of 0.01 SOL successful!');
    } catch (error) {
      console.error('Transaction failed:', error);
    }
  };

  return (
    <div>
      <WalletMultiButton />
      {connected && wallet && (
        <div>
          <p>Connected to: {wallet.adapter.name}</p>
          <p>Balance: {balance !== null ? `${balance} SOL` : 'Loading...'}</p>
          <button onClick={handleWithdraw} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
            Withdraw 0.01 SOL (Devnet)
          </button>
        </div>
      )}
    </div>
  );
};

export default WalletConnect;
  