import Image from "next/image";
import React from "react";

export default function BlogDetail({ postDetail }) {
  return (
    <>
      <h3 className="text-2xl mb-7 text-center max-w-xl">{postDetail.title}</h3>
      <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] relative rounded-lg overflow-hidden mb-16">
        <Image
          src={`https://picsum.photos/900/600.webp?random=${postDetail.id}`}
          fill
          className="object-cover"
          alt={"Blog Image"}
        />
      </div>
      <p className="sm:px-14">{postDetail.body}</p>
    </>
  );
}
