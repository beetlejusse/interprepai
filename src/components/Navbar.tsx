"use client";
import React from "react";
import { RainbowButton } from "./ui/rainbow-button";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { SignedIn, UserButton } from "@clerk/nextjs";

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
        <Link href={"/code-compiler"}>
          <Button
            className="bg-amber-400 text-black rounded-2xl flex gap-2 font-seminold h-10 text-sm tracking-wider px-4 hover:bg-white/80 transition-colors duration-200"
          >
            Practice Code
          </Button>
        </Link>
        <Link href={"/dashboard"}>
          <Button
            className="bg-white text-black rounded-2xl flex gap-2 font-seminold h-10 text-sm tracking-wider px-4 hover:bg-white/80 transition-colors duration-200"
          >
            Dashboard
          </Button>
        </Link>
        <SignedIn>
          <UserButton/>
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
