import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>shall we play a game?</title>
      </Head>

      <div className="h-screen grid place-items-center">
        <div className="grid md:grid-cols-2 grid-cols-1 place-items-center max-w-7xl space-x-6">
          <div className="hidden md:block">
            <Image
              className="rounded-2xl max-h-screen w-auto"
              src="/TheDragonOfWantley.jpg"
              alt=""
              width={827}
              height={1117}
            />
          </div>

          <div className="text-center">
            <h1 className="text-3xl">adventure bot</h1>
            <p>A Choose Your Own Adventure Bot</p>

            <p className="my-8">
              <Image src="/game/GameDiv.png" alt="" width={1600} height={76} />
            </p>

            <p>
              Played within GitHub Issues. Runs as a GitHub App, using the
              GitHub SDK, GitHub Webhooks, and Node.
            </p>

            <p className="my-4">
              <a className="underline" href={process.env.REPO_URL}>
                view code
              </a>
            </p>

            <p className="my-8">
              <Image src="/game/GameDiv.png" alt="" width={1600} height={76} />
            </p>

            <p>
              <a
                className="py-3 px-5 bg-gray-800 hover:bg-gray-700 text-white rounded"
                href={`${process.env.GAME_URL}/issues/new`}
              >
                Play The Adventure!
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
