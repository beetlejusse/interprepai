"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Play, Save, Sparkles, Settings, Upload } from "lucide-react"
import CodeEditor from "@/components/code-compiler/code-editor"
import OutputPanel from "@/components/code-compiler/output-panel"
import AiAssistant from "@/components/code-compiler/ai-assistant"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

const LANGUAGES = [
  { id: "javascript", name: "JavaScript", defaultCode: "console.log('Hello, World!');" },
  {
    id: "typescript",
    name: "TypeScript",
    defaultCode: "const greeting: string = 'Hello, World!';\nconsole.log(greeting);",
  },
  { id: "python", name: "Python", defaultCode: "print('Hello, World!')" },
  {
    id: "java",
    name: "Java",
    defaultCode:
      'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}',
  },
  {
    id: "c",
    name: "C",
    defaultCode: '#include <stdio.h>\n\nint main() {\n  printf("Hello, World!\\n");\n  return 0;\n}',
  },
]

export default function CodeCompiler() {
  const [language, setLanguage] = useState(LANGUAGES[0].id)
  const [code, setCode] = useState(LANGUAGES[0].defaultCode)
  const [output, setOutput] = useState("")
  const [isRunning, setIsRunning] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [aiSuggestion, setAiSuggestion] = useState("")
  const [activeTab, setActiveTab] = useState("editor")

  useEffect(() => {
    const selectedLanguage = LANGUAGES.find((lang) => lang.id === language)
    if (selectedLanguage) {
      setCode(selectedLanguage.defaultCode)
    }
  }, [language])

  const runCode = async () => {
    setIsRunning(true)
    setOutput("")
    setActiveTab("output")

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (language === "javascript") {
        try {
          const originalConsoleLog = console.log
          let output = ""

          console.log = (...args) => {
            output +=
              args.map((arg) => (typeof arg === "object" ? JSON.stringify(arg, null, 2) : String(arg))).join(" ") + "\n"
          }

          const result = new Function(code)()

          console.log = originalConsoleLog

          setOutput(output || String(result || "Code executed successfully."))
        } catch (error) {
          setOutput(`Error: ${error.message}`)
        }
      } else {
        // For other languages, show a simulated response
        setOutput(`[${language.toUpperCase()} Compiler] Code executed successfully.\n\nOutput:\nHello, World!`)
      }
    } catch (error) {
      setOutput(`Error: ${error.message}`)
    } finally {
      setIsRunning(false)
    }
  }

  const getAiSuggestion = async () => {
    setIsGenerating(true)
    setAiSuggestion("")
    setActiveTab("ai")

    try {
      const { text } = await generateText({
        model: openai("gpt-4o"),
        prompt: `I have the following ${LANGUAGES.find((lang) => lang.id === language)?.name} code:\n\n${code}\n\nPlease provide suggestions to improve this code, explain what it does, and offer any optimizations or best practices I should follow.`,
      })

      setAiSuggestion(text)
    } catch (error) {
      setAiSuggestion(`Error generating suggestions: ${error.message}`)
    } finally {
      setIsGenerating(false)
    }
  }

  const saveCode = () => {
    const blob = new Blob([code], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `code.${language}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const loadCode = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const code = new TextDecoder().decode(e.target.result as ArrayBuffer)
        setCode(code)
      }
      reader.readAsArrayBuffer(file)
    }
  }

  return (
    <div className="flex flex-col h-full gap-4 mt-2 p-4">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
        <div className="flex items-center gap-2">
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-[180px] bg-black border-gray-800 text-white">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent className="bg-black border-gray-800">
              {LANGUAGES.map((lang) => (
                <SelectItem key={lang.id} value={lang.id} className="text-white">
                  {lang.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            variant="default"
            onClick={runCode}
            disabled={isRunning}
            className="bg-green-700 hover:bg-green-800 text-white"
          >
            {isRunning ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Running
              </>
            ) : (
              <>
                <Play className="mr-2 h-4 w-4" />
                Run Code
              </>
            )}
          </Button>

          <Button
            variant="outline"
            onClick={getAiSuggestion}
            disabled={isGenerating}
            className="border-purple-700 text-purple-400 hover:bg-purple-900/20"
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                AI Suggestions
              </>
            )}
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={saveCode} className="border-gray-800 hover:bg-gray-900 text-white">
            <Save className="mr-2 h-4 w-4" />
            Save
          </Button>

          <Button
            variant="outline"
            className="border-gray-800 hover:bg-gray-900 text-white"
            onClick={() => document.getElementById("file-upload").click()}
          >
            <Upload className="mr-2 h-4 w-4" />
            Load
          </Button>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={loadCode}
            accept=".js,.ts,.py,.java,.c,.cpp"
          />

          <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-900">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
        <TabsList className="bg-black border border-gray-800 rounded-md py-6">
          <TabsTrigger value="editor" className="data-[state=active]:bg-gray-900 data-[state=active]:text-white">
            Editor
          </TabsTrigger>
          <TabsTrigger value="output" className="data-[state=active]:bg-gray-900 data-[state=active]:text-white">
            Output
          </TabsTrigger>
          <TabsTrigger value="ai" className="data-[state=active]:bg-gray-900 data-[state=active]:text-white">
            AI Assistant
          </TabsTrigger>
        </TabsList>

        <div className="flex-1 mt-2 overflow-hidden rounded-md border border-gray-800">
          <TabsContent value="editor" className="h-full m-0 data-[state=active]:flex-1">
            <CodeEditor code={code} setCode={setCode} language={language} />
          </TabsContent>

          <TabsContent value="output" className="h-full m-0 data-[state=active]:flex-1">
            <OutputPanel output={output} isRunning={isRunning} />
          </TabsContent>

          <TabsContent value="ai" className="h-full m-0 data-[state=active]:flex-1">
            <AiAssistant suggestion={aiSuggestion} isGenerating={isGenerating} language={language} />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
