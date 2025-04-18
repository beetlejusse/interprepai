"use client";
import React from "react";
import SheetData from "@/components/main/sheetData";

export default function MainPage() {
  return (
    <main className="w-[100vw] h-fit pt-7 bg-black  ">
      <div className=" w-full h-full min-h-screen bg-black rounded-lg pb-5">
        <SheetData />
      </div>
    </main>
  );
}
