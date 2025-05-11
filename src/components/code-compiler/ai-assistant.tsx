"use client"

import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface AiAssistantProps {
  suggestion: string
  isGenerating: boolean
  language: string
}

export default function AiAssistant({ suggestion, isGenerating, language }: AiAssistantProps) {
  const [showExplanation, setShowExplanation] = useState(true)
  const [showOptimizations, setShowOptimizations] = useState(true)
  const [showBestPractices, setShowBestPractices] = useState(true)

  const formatSuggestion = (text: string) => {
    if (!text) return []

    const sections = []

    // Case-insensitive and flexible regex for section matching
    if (showExplanation) {
      const explanationMatch = text.match(/Explanation:?\s*([\s\S]*?)(?=(Optimizations:|Best Practices:|$))/i)
      if (explanationMatch && explanationMatch[1].trim()) {
        sections.push({
          title: "Explanation",
          content: explanationMatch[1].trim(),
        })
      }
    }

    if (showOptimizations) {
      const optimizationsMatch = text.match(/Optimizations:?\s*([\s\S]*?)(?=(Best Practices:|$))/i)
      if (optimizationsMatch && optimizationsMatch[1].trim()) {
        sections.push({
          title: "Optimizations",
          content: optimizationsMatch[1].trim(),
        })
      }
    }

    if (showBestPractices) {
      const bestPracticesMatch = text.match(/Best Practices:?\s*([\s\S]*?)$/i)
      if (bestPracticesMatch && bestPracticesMatch[1].trim()) {
        sections.push({
          title: "Best Practices",
          content: bestPracticesMatch[1].trim(),
        })
      }
    }

    // Fallback for unformatted text
    if (sections.length === 0 && text.trim()) {
      sections.push({
        title: "AI Suggestions",
        content: text.trim(),
      })
    }

    return sections
  }

  const formattedSuggestions = formatSuggestion(suggestion)

  return (
    <div className="h-full w-full bg-black p-4 overflow-auto border-t border-gray-800">
      {isGenerating ? (
        <div className="flex items-center justify-center h-full">
          <Loader2 className="h-8 w-8 animate-spin text-purple-400" />
          <span className="ml-2 text-gray-400">Generating AI suggestions...</span>
        </div>
      ) : suggestion ? (
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              variant={showExplanation ? "default" : "outline"}
              className={
                showExplanation ? "bg-purple-800 hover:bg-purple-900 text-white" : "border-gray-800 text-gray-300"
              }
              onClick={() => setShowExplanation(!showExplanation)}
            >
              Explanation
            </Button>
            <Button
              size="sm"
              variant={showOptimizations ? "default" : "outline"}
              className={
                showOptimizations ? "bg-purple-800 hover:bg-purple-900 text-white" : "border-gray-800 text-gray-300"
              }
              onClick={() => setShowOptimizations(!showOptimizations)}
            >
              Optimizations
            </Button>
            <Button
              size="sm"
              variant={showBestPractices ? "default" : "outline"}
              className={
                showBestPractices ? "bg-purple-800 hover:bg-purple-900 text-white" : "border-gray-800 text-gray-300"
              }
              onClick={() => setShowBestPractices(!showBestPractices)}
            >
              Best Practices
            </Button>
          </div>

          {formattedSuggestions.length > 0 ? (
            formattedSuggestions.map((section, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                <h3 className="text-lg font-medium text-purple-400 mb-2">{section.title}</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="whitespace-pre-line text-white">{section.content}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No suggestions available for the current section filters.</p>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-medium text-purple-400 mb-2">AI Assistant</h3>
            <p className="text-gray-300 mb-4">
              Click the "AI Suggestions" button to get personalized code analysis, explanations, and optimization tips.
            </p>
            <p className="text-sm text-gray-500">
              The AI assistant can help you understand your code, suggest improvements, and teach you best practices for{" "}
              {getLanguageName(language)}.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

function getLanguageName(languageId: string): string {
  const languages: Record<string, string> = {
    javascript: "JavaScript",
    typescript: "TypeScript",
    python: "Python",
    java: "Java",
    c: "C",
  }

  return languages[languageId] || languageId
}