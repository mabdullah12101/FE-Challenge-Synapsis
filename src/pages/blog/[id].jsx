import BlogDetail from "@/components/BlogDetail";
import Comments from "@/components/Comments";
import Layout from "@/layouts";
import { getPostComments } from "@/stores/actions/comment";
import { getPostDetail } from "@/stores/actions/post";
import React from "react";

export default function Detail(props) {
  const { postDetail, postComments } = props;

  return (
    <Layout title={"Detail Blog"}>
      <div className="flex flex-col items-center px-7 sm:px-14 md:px-32 lg:px-52 xl:px-80">
        <BlogDetail postDetail={postDetail} />

        <section className="w-full mt-20">
          <h4 className="text-xl">Comments</h4>
          {postComments.length > 0 ? (
            <div className="pt-10 px-5">
              <Comments postComments={postComments} />
            </div>
          ) : (
            <div className="flex justify-center text-lg py-14">
              <h5>No Comments</h5>
            </div>
          )}
        </section>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const id = context.query.id;
  const resultPostDetail = await getPostDetail(id);
  const resultPostComments = await getPostComments(id);

  return {
    props: {
      postDetail: resultPostDetail.data,
      postComments: resultPostComments.data,
    },
  };
}
