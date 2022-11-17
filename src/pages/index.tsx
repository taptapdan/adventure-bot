import Head from 'next/head';
import { PageContent, PageTitle } from '@/components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pulse</title>
      </Head>

      <PageTitle>Euclidian</PageTitle>

      <PageContent>
        <div>hello</div>
      </PageContent>
    </>
  );
}
