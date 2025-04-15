import type { Metadata } from "next";
import CodeCompiler from "@/components/code-compiler/code-compiler";

export const metadata: Metadata = {
  title: "AI Code Compiler",
  description: "A modern AI-powered code compiler with dark theme",
};

export default function HomePage() {
  return (
    <>
      <CodeCompiler />
    </>
  );
}
