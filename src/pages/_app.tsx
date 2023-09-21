import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import '@/styles/global.css';
import Layout from '@/components/Layout/Layout';
import '@/styles/globalStyle.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}
