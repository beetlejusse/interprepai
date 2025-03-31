"use client";
import React from "react";
import { RainbowButton } from "./ui/rainbow-button";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="bg-black flex border-b-2 border-zinc-900  justify-between items-center p-2">
      <Link href={"/"} className="text-white flex gap-2">
        <h1 className="font-semibold text-2xl ml-2">InterPrepAi</h1>
      </Link>
      <div className="text-white flex gap-3 items-center">
        <Link href={"/resume-builder"}>
          <RainbowButton
            className={` flex gap-2 font-seminold h-10 text-sm tracking-wider px-4`}
          >
            Resume Builder
          </RainbowButton>
        </Link>
        <Link href={"#"}>
          <Button
            className={`bg-white text-black rounded-2xl flex gap-2 font-seminold h-10 text-sm tracking-wider px-4`}
          >
            Dashboard
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
