import { getPost } from "@/stores/actions/post";
import Layout from "@/layouts";
// import Head from "next/head";
import { useRouter } from "next/router";
import Blog from "@/components/blog";
import Pagination from "@/components/Pagination";
// import { Inter } from "@next/font/google";
// import styles from "@/styles/Home.module.css";

// const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const router = useRouter();
  // console.log(props.params);
  const handlePagination = (event) => {
    router.push(`?page=${event.selected + 1}`);
    // console.log(event.selected + 1);
  };
  // console.log(props.headers);
  return (
    <>
      {/* <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gradient-to-b from-[#374151] to-[#111827]">
        {props.listUser.map((item) => (
          <h1 className="text-red-500 text-2xl font-bold" key={item.id}>
            {item.title}
          </h1>
        ))}
      </main> */}
      <Layout title={"Home"}>
        <section className="grid grid-cols-3 gap-x-7 gap-y-14">
          {props.listUser.map((item) => (
            <div key={item.id}>
              <Blog item={item} />
            </div>
          ))}
        </section>

        <div className="mt-10 flex justify-center items-center">
          <Pagination
            handlePagination={handlePagination}
            totalPage={props.totalPage}
          />
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  // console.log(context);

  let params = context.query;
  params.page = params.page ? +params.page : 1;
  const result = await getPost(params.page);
  // console.log(result["headers"]);

  // console.log(JSON.parse(JSON.stringify(result)));

  return {
    props: {
      listUser: result.data,
      totalPage: result["headers"]["x-pagination-pages"],
      params,
      // headers: result.headers,
    },
  };
}
