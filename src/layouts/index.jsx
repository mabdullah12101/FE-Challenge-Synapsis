import Head from "next/head";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        id="container"
        className="bg-gradient-to-b from-[#374151] to-[#111827] text-white px-44 pt-10 pb-96 font-patrick"
      >
        {/* <header></header> */}
        <main>{children}</main>
        {/* <footer></footer> */}
      </div>
    </>
  );
}
