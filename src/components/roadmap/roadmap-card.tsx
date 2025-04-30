"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, ThumbsUp } from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface RoadmapSection {
  title: string
  items: {
    name: string
    description: string
    difficulty: "beginner" | "intermediate" | "advanced"
    resources?: {
      title: string
      url: string
      type: "article" | "video" | "course" | "book"
    }[]
  }[]
}

interface RoadmapCardProps {
  title: string
  description: string
  sections: RoadmapSection[]
}

export default function RoadmapCard({ title, description, sections }: RoadmapCardProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})

  useEffect(() => {
    if (sections.length > 0) {
      setOpenSections({ [sections[0].title]: true })
    }
  }, [sections])

  const [votes, setVotes] = useState<Record<string, number>>(
    sections.reduce((acc, section) => {
      const items = section.items.reduce(
        (itemAcc, item) => ({ ...itemAcc, [item.name]: Math.floor(Math.random() * 50) }),
        {},
      )
      return { ...acc, ...items }
    }, {}),
  )

  const [progress, setProgress] = useState<number>(0)

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }))
  }

  const handleVote = (itemName: string) => {
    setVotes((prev) => ({ ...prev, [itemName]: (prev[itemName] || 0) + 1 }))
  }

  const totalItems = sections.reduce((acc, section) => acc + section.items.length, 0)

  return (
    <Card className="bg-gray-900 border-gray-800 shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl font-bold text-white">{title}</CardTitle>
            <CardDescription className="text-gray-400 mt-1">{description}</CardDescription>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400 mb-1">Progress</div>
            <Progress value={progress} className="w-32 h-2" />
            <div className="text-xs text-gray-500 mt-1">{progress}% complete</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          {sections.map((section, index) => (
            <Collapsible
              key={section.title}
              open={openSections[section.title]}
              onOpenChange={() => toggleSection(section.title)}
              className="border border-gray-800 rounded-lg overflow-hidden"
            >
              <CollapsibleTrigger asChild>
                <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-800 transition-colors">
                  <div className="flex items-center gap-2">
                    <div className="bg-gray-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                      {index + 1}
                    </div>
                    <h3 className="font-medium text-white">{section.title}</h3>
                    <Badge variant="outline" className="ml-2 text-xs">
                      {section.items.length} items
                    </Badge>
                  </div>
                  {openSections[section.title] ? (
                    <ChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="divide-y divide-gray-800">
                  {section.items.map((item, itemIndex) => (
                    <div key={item.name} className="p-4 bg-gray-900">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <div className="text-sm text-gray-400">
                            {index + 1}.{itemIndex + 1}
                          </div>
                          <h4 className="font-medium text-white">{item.name}</h4>
                          <Badge
                            variant={
                              item.difficulty === "beginner"
                                ? "default"
                                : item.difficulty === "intermediate"
                                  ? "secondary"
                                  : "destructive"
                            }
                            className="ml-2 text-xs capitalize"
                          >
                            {item.difficulty}
                          </Badge>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-400 hover:text-white"
                          onClick={() => handleVote(item.name)}
                        >
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          <span>{votes[item.name] || 0}</span>
                        </Button>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{item.description}</p>

                      {item.resources && item.resources.length > 0 && (
                        <div className="mt-3">
                          <h5 className="text-sm font-medium text-gray-300 mb-2">Resources:</h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {item.resources.map((resource) => (
                              <a
                                key={resource.title}
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                <span>{resource.title}</span>
                                <Badge variant="outline" className="ml-1 text-[10px] py-0 h-4">
                                  {resource.type}
                                </Badge>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
