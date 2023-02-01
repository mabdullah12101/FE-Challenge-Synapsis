import Image from "next/image";
import React from "react";

export default function Comments({ postComments }) {
  return (
    <>
      {postComments.map((item) => (
        <div key={item.id} className="flex mb-10 gap-x-4">
          <div className="w-[55px] h-[55px] relative">
            <Image
              src={`https://robohash.org/${item.id}?size=55x55`}
              alt="photo profile"
              fill
            />
          </div>
          <div>
            <h5 className="text-lg text-white/90 mb-2">{item.name}</h5>
            <p className="text-white/60">{item.body}</p>
          </div>
        </div>
      ))}
    </>
  );
}
