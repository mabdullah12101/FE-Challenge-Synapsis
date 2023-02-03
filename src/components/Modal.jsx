import React from "react";

export default function Modal({ modal, header, body }) {
  return (
    <div
      tabIndex="-1"
      aria-hidden="true"
      className={`fixed ${
        modal ? "block" : "hidden"
      } top-0 left-0 right-0 z-50 w-full overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full bg-black/40`}
    >
      <div className="relative w-1/3 mx-auto h-full max-w-2xl md:h-auto">
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
