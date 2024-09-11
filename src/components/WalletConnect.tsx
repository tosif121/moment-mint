// import React, { useState, useEffect } from 'react';
// import { useWallet } from '@solana/wallet-adapter-react';
// import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
// import { Connection, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';

// const WalletConnect: React.FC = () => {
//   const { wallet, connected, publicKey, sendTransaction, disconnect } = useWallet(); // Add 'disconnect'
//   const [balance, setBalance] = useState<number | null>(null);

//   // Connect to the Devnet
//   const connection = new Connection('https://api.devnet.solana.com');

//   useEffect(() => {
//     const fetchBalance = async () => {
//       if (connected && publicKey) {
//         try {
//           const balanceLamports = await connection.getBalance(publicKey);
//           const balanceSol = balanceLamports / 1e9; // Convert lamports to SOL
//           setBalance(balanceSol);
//         } catch (error) {
//           console.error('Error fetching balance:', error);
//         }
//       }
//     };

//     fetchBalance();
//   }, [connected, publicKey, connection]);

//   const handleWithdraw = async () => {
//     if (!publicKey) return;

//     try {
//       const transaction = new Transaction().add(
//         SystemProgram.transfer({
//           fromPubkey: publicKey,
//           toPubkey: new PublicKey('7nJyGZEKgNQFdGQ81LFBDoZNfp29Xmrvt34ye45hHx5D'), // Replace with recipient public key
//           lamports: 0.01 * 1e9, // Withdraw 0.01 SOL (dummy SOL in Devnet)
//         })
//       );

//       const signature = await sendTransaction(transaction, connection);
//       await connection.confirmTransaction(signature);

//       alert('Withdrawal of 0.01 SOL successful!');
//     } catch (error) {
//       console.error('Transaction failed:', error);
//     }
//   };

//   return (
//     <div>
//       <WalletMultiButton />
//       {connected && wallet && (
//         <div>
//           <p>Connected to: {wallet.adapter.name}</p>
//           <p>Balance: {balance !== null ? `${balance} SOL` : 'Loading...'}</p>
//           <button onClick={handleWithdraw} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
//             Withdraw 0.01 SOL (Devnet)
//           </button>
//           <button onClick={disconnect} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
//             Disconnect Wallet
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WalletConnect;

import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

function WalletConnect() {
  return (
    <div>
      <WalletMultiButton className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-violet-500 to-blue-500 text-white text-lg sm:text-xl rounded-md shadow inline-block transition duration-500" />
    </div>
  );
}

export default WalletConnect;
