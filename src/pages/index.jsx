import { getUser } from "../stores/actions/users";
import Head from "next/head";
import axios from "../utils/axios";
// import Image from "next/image";
// import { Inter } from "@next/font/google";
// import styles from "@/styles/Home.module.css";

// const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  // console.log(props.headers);
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {props.listUser.map((item) => (
          <h1 className="text-red-500 text-2xl font-bold" key={item.id}>
            {item.name}
          </h1>
        ))}
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const result = await getUser();
  console.log(result);

  // console.log(JSON.parse(JSON.stringify(result)));

  return {
    props: {
      listUser: result.data,
      // headers: result.headers,
    },
  };
}
