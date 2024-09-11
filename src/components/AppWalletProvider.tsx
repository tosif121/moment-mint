// 'use client';

// import React, { useMemo } from 'react';
// import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
// import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
// import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
// import {
//   PhantomWalletAdapter,
//   SolflareWalletAdapter,
//   LedgerWalletAdapter,
//   TorusWalletAdapter,
//   CoinbaseWalletAdapter,
//   SafePalWalletAdapter,
//   TrustWalletAdapter,
//   MathWalletAdapter,
// } from '@solana/wallet-adapter-wallets';
// import { clusterApiUrl } from '@solana/web3.js';

// require('@solana/wallet-adapter-react-ui/styles.css');

// export default function AppWalletProvider({ children }: { children: React.ReactNode }) {
//   const network = WalletAdapterNetwork.Devnet;
//   const endpoint = useMemo(() => clusterApiUrl(network), [network]);

//   const wallets = useMemo(
//     () => [
//       new PhantomWalletAdapter(),
//       new SolflareWalletAdapter(),
//       new LedgerWalletAdapter(),
//       new TorusWalletAdapter(),
//       new CoinbaseWalletAdapter(),
//       new SafePalWalletAdapter(),
//       new TrustWalletAdapter(),
//       new MathWalletAdapter(),
//     ],
//     []
//   );

//   return (
//     <ConnectionProvider endpoint={endpoint}>
//       <WalletProvider wallets={wallets} autoConnect>
//         <WalletModalProvider>{children}</WalletModalProvider>
//       </WalletProvider>
//     </ConnectionProvider>
//   );
// }

'use client';

import { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  LedgerWalletAdapter,
  TorusWalletAdapter,
  CoinbaseWalletAdapter,
  SafePalWalletAdapter,
  TrustWalletAdapter,
  MathWalletAdapter,
  UnsafeBurnerWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

require('@solana/wallet-adapter-react-ui/styles.css');

export default function AppWalletProvider({ children }: { children: React.ReactNode }) {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new UnsafeBurnerWalletAdapter(),
      new SolflareWalletAdapter(),
      new LedgerWalletAdapter(),
      new TorusWalletAdapter(),
      new CoinbaseWalletAdapter(),
      new SafePalWalletAdapter(),
      new TrustWalletAdapter(),
      new MathWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
