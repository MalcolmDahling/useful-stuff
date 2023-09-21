import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import '@/styles/global.css';
import Layout from '@/components/Layout/Layout';
import '@/styles/globalStyle.css';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>Useful Stuff</title>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}
