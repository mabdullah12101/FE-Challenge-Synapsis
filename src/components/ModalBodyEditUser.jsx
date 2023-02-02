import React from "react";
import Input from "./Input";

export default function ModalBodyEditUser({
  data,
  onChange,
  onSubmit,
  closeModal,
}) {
  return (
    <>
      {Object.keys(data).length > 0 ? (
        <div className="p-6 space-y-6">
          <form className="space-y-6" onSubmit={onSubmit}>
            <Input
              label={"Name"}
              id={"name"}
              name={"name"}
              type={"text"}
              value={data.name}
              onChange={onChange}
            />
            <Input
              label={"Email"}
              id={"email"}
              name={"email"}
              type={"email"}
              value={data.email}
              onChange={onChange}
            />

            <label
              htmlFor="gender"
              className="block mb-2 text-sm font-medium text-white"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              className=" text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              value={data.gender}
              onChange={onChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            {/* <!-- Modal footer --> */}
            <div className="flex justify-end items-center pt-6 space-x-2 border-t rounded-b border-gray-600">
              <button
                type="button"
                className="focus:ring-4 focus:outline-none rounded-lg border text-sm font-medium px-5 py-2.5 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
