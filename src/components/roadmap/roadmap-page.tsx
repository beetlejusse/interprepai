"use client"

import { useState } from "react"
import { roadmapData } from "@/data/roadmap-data"
import RoadmapCard from "./roadmap-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function RoadmapPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const allRoadmaps = Object.keys(roadmapData)

  const filteredRoadmaps = allRoadmaps.filter((key) =>
    roadmapData[key].title.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          Tech Learning Roadmaps
        </h1>
        <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
          Comprehensive guides to help you master various technologies and skills in the most efficient way possible.
        </p>

        <Tabs defaultValue="web-development" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8 bg-gray-900">
            <TabsTrigger value="web-development">Web Dev</TabsTrigger>
            <TabsTrigger value="ai-ml">AI & ML</TabsTrigger>
            <TabsTrigger value="mobile-dev">Mobile Dev</TabsTrigger>
            <TabsTrigger value="devops">DevOps</TabsTrigger>
            <TabsTrigger value="dsa">DSA</TabsTrigger>
          </TabsList>

          {allRoadmaps.map((category) => (
            <TabsContent key={category} value={category} className="space-y-8">
              <RoadmapCard
                title={roadmapData[category].title}
                description={roadmapData[category].description}
                sections={roadmapData[category].sections}
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
