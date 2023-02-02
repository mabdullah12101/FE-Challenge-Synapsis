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
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={data.gender}
              onChange={onChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            {/* <!-- Modal footer --> */}
            <div className="flex justify-end items-center pt-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
