import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>shall we play a game?</title>
      </Head>

      <div className="grid h-screen place-items-center">
        <div className="relative">
          <Image
            className="rounded-2xl max-w-5xl"
            src="/taptapbot.jpg"
            alt=""
            width={3840}
            height={2160}
          />
          <div className="absolute bottom-0 right-0 mx-6 my-6 p-6 bg-gray-100 rounded-2xl text-2xl">
            shall we play a game?
          </div>
        </div>
      </div>
    </>
  );
}
