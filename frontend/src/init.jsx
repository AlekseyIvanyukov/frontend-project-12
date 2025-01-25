import React from 'react';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Provider as RollbarProvider, ErrorBoundary } from '@rollbar/react';
import App from './App.jsx';
import resources from './Locales/index.js';
import filter from 'leo-profanity';

const init = async () => {
  filter.add(filter.getDictionary('ru'));
  filter.add(filter.getDictionary('en'));
  const i18n = i18next.createInstance();
  await i18n
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'ru',
    });
  const rollbarConfig = {
    // accessToken: process.env.REACT_APP_ROLLBAR_TOKEN,
    environment: 'production',
  };
  return (
    <RollbarProvider config={rollbarConfig}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </RollbarProvider>
  );
};

export default init;