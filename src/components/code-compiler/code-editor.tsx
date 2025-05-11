"use client"

import { useEffect, useRef, useState } from "react"
import { EditorView, basicSetup } from "codemirror"
import { EditorState } from "@codemirror/state"
import { javascript } from "@codemirror/lang-javascript"
import { python } from "@codemirror/lang-python"
import { java } from "@codemirror/lang-java"
import { cpp } from "@codemirror/lang-cpp"
import { oneDark } from "@codemirror/theme-one-dark"

interface CodeEditorProps {
  code: string
  setCode: (code: string) => void
  language: string
}

export default function CodeEditor({ code, setCode, language }: CodeEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)
  const editorViewRef = useRef<EditorView | null>(null)
  const [editorReady, setEditorReady] = useState(false)

  // Get language extension based on selected language
  const getLanguageExtension = (lang: string) => {
    switch (lang) {
      case "javascript":
        return javascript({ jsx: false })
      case "typescript":
        return javascript({ typescript: true })
      case "python":
        return python()
      case "java":
        return java()
      case "c":
        return cpp()
      default:
        return javascript({ jsx: false })
    }
  }

  // Custom theme extension to ensure true black background
  const customTheme = EditorView.theme({
    "&": {
      backgroundColor: "#000000",
      color: "#ffffff",
      height: "100%",
    },
    ".cm-content": {
      caretColor: "#a78bfa",
      fontFamily: "monospace",
      fontSize: "14px",
      padding: "16px 0",
    },
    ".cm-gutters": {
      backgroundColor: "#000000",
      color: "#6b7280",
      border: "none",
    },
    ".cm-activeLineGutter": {
      backgroundColor: "#121212",
    },
    ".cm-activeLine": {
      backgroundColor: "#121212",
    },
    ".cm-selectionMatch": {
      backgroundColor: "#1f1f1f",
    },
    ".cm-cursor": {
      borderLeftColor: "#a78bfa",
    },
    ".cm-line": {
      padding: "0 16px",
    },
    ".cm-scroller": {
      overflow: "auto",
    },
  })

  useEffect(() => {
    const initializeEditor = async () => {
      if (!editorRef.current) return

      // Clean up previous editor instance if it exists
      if (editorViewRef.current) {
        editorViewRef.current.destroy()
      }

      // Create a new editor state
      const state = EditorState.create({
        doc: code,
        extensions: [
          basicSetup,
          getLanguageExtension(language),
          oneDark,
          customTheme,
          EditorView.updateListener.of((update) => {
            if (update.changes) {
              setCode(update.state.doc.toString())
            }
          }),
        ],
      })

      // Create a new editor view
      const view = new EditorView({
        state,
        parent: editorRef.current,
      })

      editorViewRef.current = view
      setEditorReady(true)
    }

    initializeEditor()

    return () => {
      if (editorViewRef.current) {
        editorViewRef.current.destroy()
      }
    }
  }, [language, setCode])

  // Update editor content when code prop changes
  useEffect(() => {
    if (editorViewRef.current && editorReady) {
      const currentContent = editorViewRef.current.state.doc.toString()
      if (code !== currentContent) {
        editorViewRef.current.dispatch({
          changes: {
            from: 0,
            to: currentContent.length,
            insert: code,
          },
        })
      }
    }
  }, [code, editorReady])

  return (
    <div className="h-full w-full bg-black text-white overflow-hidden">
      <div ref={editorRef} className="h-full w-full" />
    </div>
  )
}