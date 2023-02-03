import React from "react";

export default function Modal({ modal, header, body }) {
  return (
    <div
      tabIndex="-1"
      aria-hidden="true"
      className={`fixed ${
        modal ? "block" : "hidden"
      } top-0 left-0 right-0 z-50 w-full overflow-x-hidden overflow-y-auto inset-0 h-modal h-full bg-black/40`}
    >
      <div className="relative w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 mx-auto  max-w-2xl h-auto">
        {/* <!-- Modal content --> */}
        <div className="relative  rounded-lg shadow bg-gray-700 mt-10">
          {/* <!-- Modal header --> */}
          {header}
          {/* <!-- Modal body --> */}
          {body}
        </div>
      </div>
    </div>
  );
}
