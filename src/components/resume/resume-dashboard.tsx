"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TemplateGallery } from "@/components/resume/template-gallery"
import { ResumeEditor } from "@/components/resume/resume-editor"
import { ResumePreview } from "@/components/resume/resume-preview"
import { Progress } from "@/components/ui/progress"
import { FileText, Download, Settings, ChevronRight, CheckCircle2, Circle } from "lucide-react"

export function ResumeDashboard() {
  const [activeTab, setActiveTab] = useState("templates")
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [completionProgress, setCompletionProgress] = useState(0)

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId)
    setActiveTab("editor")
    // Initialize with some progress when template is selected
    setCompletionProgress(10)
  }

  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  const updateProgress = (newProgress: number) => {
    setCompletionProgress(newProgress)
  }

  return (
    <div className="container max-w-screen-2xl py-6 space-y-6 ">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Resume Builder</h1>
          <p className="text-muted-foreground">Create a professional resume in minutes</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex flex-col mr-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Completion</span>
              <span className="text-sm font-medium text-primary">{completionProgress}%</span>
            </div>
            <Progress value={completionProgress} className="w-[200px]" />
          </div>

          <Button variant="outline" size="sm" className="gap-2">
            <Settings size={16} />
            <span className="hidden sm:inline">Settings</span>
          </Button>

          <Button variant="outline" size="sm" className="gap-2">
            <FileText size={16} />
            <span className="hidden sm:inline">Save</span>
          </Button>

          <Button size="sm" className="gap-2">
            <Download size={16} />
            <span className="hidden sm:inline">Export</span>
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className={`flex items-center ${activeTab === "templates" ? "text-primary" : "text-muted-foreground"}`}>
          <CheckCircle2 size={16} className={activeTab !== "templates" ? "text-primary" : ""} />
          <span className="ml-2">Choose Template</span>
        </div>
        <ChevronRight size={16} className="text-muted-foreground" />
        <div className={`flex items-center ${activeTab === "editor" ? "text-primary" : "text-muted-foreground"}`}>
          {activeTab === "editor" || activeTab === "preview" ? (
            <CheckCircle2 size={16} className={activeTab !== "editor" ? "text-primary" : ""} />
          ) : (
            <Circle size={16} />
          )}
          <span className="ml-2">Edit Content</span>
        </div>
        <ChevronRight size={16} className="text-muted-foreground" />
        <div className={`flex items-center ${activeTab === "preview" ? "text-primary" : "text-muted-foreground"}`}>
          {activeTab === "preview" ? <CheckCircle2 size={16} /> : <Circle size={16} />}
          <span className="ml-2">Preview & Export</span>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="editor" disabled={!selectedTemplate}>
            Editor
          </TabsTrigger>
          <TabsTrigger value="preview" disabled={!selectedTemplate || completionProgress < 50}>
            Preview
          </TabsTrigger>
        </TabsList>

        <TabsContent value="templates" className="mt-6">
          <TemplateGallery onSelectTemplate={handleTemplateSelect} />
        </TabsContent>

        <TabsContent value="editor" className="mt-6">
          {selectedTemplate && (
            <ResumeEditor
              templateId={selectedTemplate}
              onUpdateProgress={updateProgress}
              onComplete={() => setActiveTab("preview")}
            />
          )}
        </TabsContent>

        <TabsContent value="preview" className="mt-6">
          {selectedTemplate && completionProgress >= 50 && <ResumePreview templateId={selectedTemplate} />}
        </TabsContent>
      </Tabs>
    </div>
  )
}

