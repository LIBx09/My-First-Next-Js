import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-zinc-400 text-xl tex dark:bg-zinc-900  flex px-4 items-center border-b-2">
      <Link href={"/"} className="font-semibold h-16 flex items-center">
        (❁´◡`❁) Book Bondhu
      </Link>
      <nav className="ml-auto">
        <ul className="flex space-x-4">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/dashboard"}>Dashboard</Link>
          </li>
          <li>
            <Link href={"/login"}>Login</Link>
          </li>
          <li>
            <Link href={"/register"}>Register</Link>
          </li>
          <li>
            <Link href={"/stories"}>Stories</Link>
          </li>
          <li>
            <Link href={"/tutorials"}>Tutorials</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
