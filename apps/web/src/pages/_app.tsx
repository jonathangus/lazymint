import type { AppProps } from 'next/app';
import React from 'react';
import Web3Provider from '../components/Web3Provider';
import { NotificationsProvider } from 'reapop';
import NotificationHandler from '../components/NotificationHandler';
import LazyMintStepsContext from '../context/LazyMintStepsContext';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [step, setStep] = useState(0);

  return (
    <NotificationsProvider>
      <Web3Provider>
        <LazyMintStepsContext.Provider value={[step, setStep]}>
          <Component {...pageProps} />
        </LazyMintStepsContext.Provider>
        <NotificationHandler />
      </Web3Provider>
    </NotificationsProvider>
  );
}

export default MyApp;
