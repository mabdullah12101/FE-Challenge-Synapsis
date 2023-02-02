import React from "react";

export default function Input({ label, type, name, id, value, onChange }) {
  return (
    <div>
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-white">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}
