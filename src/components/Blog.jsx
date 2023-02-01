import Image from "next/image";
import React from "react";

export default function Blog({ item }) {
  return (
    <>
      <div className="w-full h-56 relative rounded-lg overflow-hidden mb-5">
        <Image
          src={`https://picsum.photos/340/224.webp?random=${item.id}`}
          fill
          className="object-cover"
          alt={"Blog Image"}
        />
      </div>
      <h3 className="text-2xl mb-2">
        {item.title.substring(0, 50)} {item.title.length <= 50 ? "" : "..."}
      </h3>
      <p className="text-white/60">
        {item.body.substring(0, 120)} {item.body.length <= 120 ? "" : "..."}
      </p>
    </>
  );
}
