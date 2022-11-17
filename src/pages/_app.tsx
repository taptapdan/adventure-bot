import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { NextPageWithLayout, Layout } from '@/components';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // https://nextjs.org/docs/basic-features/layouts
  // Use the layout defined at the page level, if available
  const getLayout = Component.layout ?? ((page) => <Layout>{page}</Layout>);

  return getLayout(<Component {...pageProps} />);
}
