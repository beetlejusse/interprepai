"use client";

import { SignUp } from "@clerk/nextjs";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <main className="relative flex h-screen w-full items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 overflow-hidden">
      {/* Glowing Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-pink-400 rounded-full opacity-20 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-yellow-400 rounded-full opacity-20 blur-3xl animate-pulse delay-150" />
      </div>

      {/* SignUp Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 w-[90%] max-w-md p-8 rounded-2xl bg-black bg-opacity-50 backdrop-blur-xl shadow-xl border border-gray-700"
      >
        <h1 className="text-3xl sm:text-4xl text-center font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-transparent bg-clip-text mb-6">
          Join <span className="text-white">InterPrepAi</span>
        </h1>
        <p className="text-sm text-center text-gray-400 mb-6">
          Create your account and start preparing smarter, faster, better.
        </p>
        <div className="flex justify-center">
          <SignUp />
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="text-yellow-400 hover:underline hover:text-yellow-300 transition duration-200"
            >
              Sign In
            </Link>
          </p>
        </div>
      </motion.div>
    </main>
  );
}
