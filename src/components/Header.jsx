import React from "react";
import Navlink from "./Navlink";

export default function Header() {
  return (
    <header className="flex justify-center items-center pt-10 pb-20">
      <ul className="flex text-xl gap-x-12">
        <li>
          <Navlink href={"/"}>Home</Navlink>
        </li>
        <li>
          <Navlink href={"/user"}>User</Navlink>
        </li>
      </ul>
    </header>
  );
}
