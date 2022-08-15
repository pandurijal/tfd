import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Fine Dev</title>
        <meta name="description" content="Crafting fine products." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-primary h-screen w-full flex items-center justify-center">
        <a href="https://thefinedev.com">
          <div className="text-white text-center">
            <h1 className="text-8xl font-bold">TFD</h1>
            <h2 className="text-lg">Crafting fine products.</h2>
          </div>
        </a>
      </main>
    </div>
  );
}
