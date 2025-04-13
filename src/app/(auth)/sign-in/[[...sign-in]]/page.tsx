"use client";

import { SignIn } from "@clerk/nextjs";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="relative flex h-screen w-full items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-yellow-400 rounded-full opacity-20 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-400 rounded-full opacity-20 blur-3xl animate-pulse delay-150" />
      </div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 w-[90%] max-w-md p-8 rounded-2xl bg-black bg-opacity-50 backdrop-blur-xl shadow-xl border border-gray-700"
      >
        <h1 className="text-3xl sm:text-4xl text-center font-extrabold bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 text-transparent bg-clip-text mb-6">
          Welcome Back to <span className="text-white">InterPrepAi</span>
        </h1>
        <p className="text-sm text-center text-gray-400 mb-6">
          Login to your dashboard and continue your interview prep journey.
        </p>

        <div className="flex justify-center">
          <SignIn forceRedirectUrl="/main" />
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Don&apos;t have an account?{" "}
            <Link
              href="/sign-up"
              className="text-yellow-400 hover:underline hover:text-yellow-300 transition duration-200"
            >
              Sign up now
            </Link>
          </p>
        </div>
      </motion.div>
    </main>
  );
}
