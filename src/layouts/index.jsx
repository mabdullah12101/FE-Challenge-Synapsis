import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
        className="bg-gradient-to-b from-[#374151] to-[#111827] text-white px-10 sm:px-10 md:px-20 lg:px-20 xl:px-44 font-patrick"
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
