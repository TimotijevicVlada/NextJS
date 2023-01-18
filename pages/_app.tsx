import '@/styles/globals.css';
import type { AppProps } from 'next/app';

//redux
import { Provider } from 'react-redux';
import { store } from '../redux/store';

//components
import Layout from '@/components/Layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}