import type React from "react"
import { Inter } from "next/font/google"
import "./global.css"
import { ThemeProvider } from "@/components/theme-provider"
import ResumePage from "./page"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dark`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <ResumePage />
        </ThemeProvider>
      </body>
    </html>
  )
}
