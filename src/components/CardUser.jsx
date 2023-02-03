import Image from "next/image";
import React, { useState } from "react";

export default function CardUser({ data, handleModal }) {
  const [id, setId] = useState();

  return (
    <>
      {data.map((item) => (
        <div
          className="flex justify-between items-center bg-gray-700 p-5 rounded-xl shadow-md hover:bg-gray-600"
          key={item.id}
        >
          <div className="flex gap-x-4">
            <div className="relative w-10 h-10">
              <Image
                src={`https://robohash.org/${item.id}?size=40x40`}
                alt="Photo Profile"
                fill
              />
            </div>
            <div>
              <p className="truncate">{item.name}</p>
              <p className="text-gray-400 truncate">
                {item.email.substring(0, 15)}{" "}
                {item.email.length <= 15 ? "" : "..."}
              </p>
            </div>
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => setId(id === item.id ? false : item.id)}
              onBlur={() =>
                setTimeout(() => {
                  setId(false);
                }, 300)
              }
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
              </svg>
            </button>

            <div
              className={`z-10 ${
                id === item.id ? "block" : "hidden"
              } absolute right-0 list-none  divide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-700`}
            >
              <ul className="py-2" aria-labelledby="dropdownButton">
                <li>
                  <a
                    className="block px-4 py-2 text-sm  hover:bg-gray-600 text-gray-200 hover:text-white cursor-pointer"
                    onClick={() => handleModal("editUser", item)}
                  >
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    className="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white cursor-pointer"
                    onClick={() => handleModal("deleteUser", item)}
                  >
                    Delete
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
