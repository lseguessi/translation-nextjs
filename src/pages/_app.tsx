import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import GlobalStyle from '../styles/globalStyles';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(App);
