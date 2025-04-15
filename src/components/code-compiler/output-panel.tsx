"use client"

import { Loader2 } from "lucide-react"

interface OutputPanelProps {
  output: string
  isRunning: boolean
}

export default function OutputPanel({ output, isRunning }: OutputPanelProps) {
  return (
    <div className="h-full w-full bg-black p-4 font-mono text-sm overflow-auto border-t border-gray-800">
      {isRunning ? (
        <div className="flex items-center justify-center h-full">
          <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
          <span className="ml-2 text-gray-400">Running code...</span>
        </div>
      ) : output ? (
        <pre className="whitespace-pre-wrap text-white">{output}</pre>
      ) : (
        <div className="flex items-center justify-center h-full text-gray-500">
          <p>Run your code to see output here</p>
        </div>
      )}
    </div>
  )
}
