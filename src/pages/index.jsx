import { getPost } from "@/stores/actions/post";
import Layout from "@/layouts";
import { useRouter } from "next/router";
import Blog from "@/components/blog";
import Pagination from "@/components/Pagination";

export default function Home(props) {
  const router = useRouter();
  const handlePagination = (event) => {
    router.push(`?page=${event.selected + 1}`);
  };
  return (
    <>
      <Layout title={"Home"}>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-14">
          {props.listUser.map((item) => (
            <div
              key={item.id}
              className="cursor-pointer"
              onClick={() => router.push(`/blog/${item.id}`)}
            >
              <Blog item={item} />
            </div>
          ))}
        </section>

        <div className="mt-20 flex justify-center items-center">
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
  let params = context.query;
  params.page = params.page ? +params.page : 1;
  const result = await getPost(params.page);

  return {
    props: {
      listUser: result.data,
      totalPage: result["headers"]["x-pagination-pages"],
      params,
    },
  };
}
