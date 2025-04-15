"use client"

import type React from "react"

import { useRef, useEffect } from "react"

interface FallbackEditorProps {
  code: string
  setCode: (code: string) => void
  language: string
}

export default function FallbackEditor({ code, setCode, language }: FallbackEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.value = code
    }
  }, [code])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value)
  }

  return (
    <div className="h-full w-full bg-black text-white p-4 relative">
      <textarea
        ref={textareaRef}
        className="w-full h-full bg-black text-white font-mono text-sm p-4 resize-none focus:outline-none focus:ring-1 focus:ring-purple-700 border border-gray-800 rounded-md"
        onChange={handleChange}
        defaultValue={code}
        spellCheck="false"
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
      />
      <div className="absolute bottom-4 right-4 text-xs text-gray-500">
        {language.charAt(0).toUpperCase() + language.slice(1)}
      </div>
    </div>
  )
}
