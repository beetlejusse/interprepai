"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, CheckCircle } from "lucide-react"

// Template data
const templates = [
  {
    id: "professional-1",
    name: "Executive",
    category: "Traditional",
    industry: ["Business", "Finance", "Management"],
    experienceLevel: ["Mid-level", "Senior"],
    imageUrl: "/templates/template1.avif",
    popular: true,
    atsOptimized: true,
  },
  {
    id: "professional-2",
    name: "Corporate",
    category: "Traditional",
    industry: ["Business", "Finance", "Legal"],
    experienceLevel: ["Entry-level", "Mid-level", "Senior"],
    imageUrl: "/templates/corporate1.png",
    popular: true,
    atsOptimized: true,
  },
  {
    id: "creative-1",
    name: "Modern",
    category: "Creative",
    industry: ["Design", "Marketing", "Media"],
    experienceLevel: ["Entry-level", "Mid-level"],
    imageUrl: "/templates/modern1.webp",
    popular: false,
    atsOptimized: true,
  },
  {
    id: "minimal-1",
    name: "Minimalist",
    category: "Minimal",
    industry: ["Technology", "Design", "Startups"],
    experienceLevel: ["Entry-level", "Mid-level", "Senior"],
    imageUrl: "/templates/minimalist.webp",
    popular: true,
    atsOptimized: true,
  },
  {
    id: "academic-1",
    name: "Academic",
    category: "Traditional",
    industry: ["Education", "Research", "Healthcare"],
    experienceLevel: ["Mid-level", "Senior"],
    imageUrl: "/templates/academic1.webp",
    popular: false,
    atsOptimized: true,
  },
  {
    id: "technical-1",
    name: "Technical",
    category: "Specialized",
    industry: ["Technology", "Engineering", "Data Science"],
    experienceLevel: ["Entry-level", "Mid-level", "Senior"],
    imageUrl: "/templates/tech1.webp",
    popular: true,
    atsOptimized: true,
  },
  {
    id: "creative-2",
    name: "Portfolio",
    category: "Creative",
    industry: ["Design", "Art", "Media"],
    experienceLevel: ["Entry-level", "Mid-level"],
    imageUrl: "/templates/portfolio1.webp",
    popular: false,
    atsOptimized: false,
  },
  {
    id: "professional-3",
    name: "Classic",
    category: "Traditional",
    industry: ["Business", "Finance", "Legal", "Healthcare"],
    experienceLevel: ["Entry-level", "Mid-level", "Senior"],
    imageUrl: "/templates/classic1.webp",
    popular: true,
    atsOptimized: true,
  },
  {
    id: "technical-2",
    name: "Developer",
    category: "Specialized",
    industry: ["Technology", "Engineering"],
    experienceLevel: ["Entry-level", "Mid-level"],
    imageUrl: "/templates/dev1.webp",
    popular: true,
    atsOptimized: true,
  },
  {
    id: "creative-3",
    name: "Innovative",
    category: "Creative",
    industry: ["Marketing", "Design", "Media"],
    experienceLevel: ["Mid-level"],
    imageUrl: "/templates/creative1.webp",
    popular: false,
    atsOptimized: true,
  },
  {
    id: "minimal-2",
    name: "Clean",
    category: "Minimal",
    industry: ["All"],
    experienceLevel: ["Entry-level", "Mid-level", "Senior"],
    imageUrl: "/templates/clean.webp",
    popular: true,
    atsOptimized: true,
  },
  {
    id: "professional-4",
    name: "Professional",
    category: "Traditional",
    industry: ["All"],
    experienceLevel: ["Entry-level", "Mid-level", "Senior"],
    imageUrl: "/templates/professional.webp",
    popular: true,
    atsOptimized: true,
  },
]

interface TemplateGalleryProps {
  onSelectTemplate: (templateId: string) => void
}

export function TemplateGallery({ onSelectTemplate }: TemplateGalleryProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")
  const [industryFilter, setIndustryFilter] = useState<string>("all")
  const [experienceFilter, setExperienceFilter] = useState<string>("all")
  const [atsFilter, setAtsFilter] = useState<boolean>(false)

  // Filter templates based on search and filters
  const filteredTemplates = templates.filter((template) => {
    // Search filter
    if (searchQuery && !template.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }

    // Category filter
    if (categoryFilter !== "all" && template.category !== categoryFilter) {
      return false
    }

    // Industry filter
    if (industryFilter !== "all" && !template.industry.includes(industryFilter)) {
      return false
    }

    // Experience level filter
    if (experienceFilter !== "all" && !template.experienceLevel.includes(experienceFilter)) {
      return false
    }

    // ATS filter
    if (atsFilter && !template.atsOptimized) {
      return false
    }

    return true
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search templates..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Traditional">Traditional</SelectItem>
              <SelectItem value="Creative">Creative</SelectItem>
              <SelectItem value="Minimal">Minimal</SelectItem>
              <SelectItem value="Specialized">Specialized</SelectItem>
            </SelectContent>
          </Select>

          <Select value={industryFilter} onValueChange={setIndustryFilter}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Industries</SelectItem>
              <SelectItem value="Business">Business</SelectItem>
              <SelectItem value="Technology">Technology</SelectItem>
              <SelectItem value="Design">Design</SelectItem>
              <SelectItem value="Marketing">Marketing</SelectItem>
              <SelectItem value="Finance">Finance</SelectItem>
              <SelectItem value="Healthcare">Healthcare</SelectItem>
              <SelectItem value="Education">Education</SelectItem>
              <SelectItem value="Engineering">Engineering</SelectItem>
            </SelectContent>
          </Select>

          <Select value={experienceFilter} onValueChange={setExperienceFilter}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Experience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="Entry-level">Entry-level</SelectItem>
              <SelectItem value="Mid-level">Mid-level</SelectItem>
              <SelectItem value="Senior">Senior</SelectItem>
            </SelectContent>
          </Select>

          <Button
            variant={atsFilter ? "default" : "outline"}
            size="sm"
            className="gap-2"
            onClick={() => setAtsFilter(!atsFilter)}
          >
            <CheckCircle size={16} />
            ATS-Friendly
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredTemplates.map((template) => (
          <Card key={template.id} className="overflow-hidden group hover:border-primary transition-colors">
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src={template.imageUrl || "/placeholder.svg"}
                  alt={template.name}
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button onClick={() => onSelectTemplate(template.id)}>Use Template</Button>
                </div>
                <div className="absolute top-2 right-2 flex gap-1">
                  {template.popular && (
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      Popular
                    </Badge>
                  )}
                  {template.atsOptimized && (
                    <Badge variant="outline" className="bg-background/80">
                      ATS-Optimized
                    </Badge>
                  )}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium">{template.name}</h3>
                <p className="text-sm text-muted-foreground">{template.category}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

