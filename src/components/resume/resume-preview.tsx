"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, FileText, Printer, Share2, Edit, CheckCircle, AlertCircle } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/seprator"

interface ResumePreviewProps {
  templateId: string
  resumeData: any
}

export function ResumePreview({ templateId, resumeData }: ResumePreviewProps) {
  const [exportFormat, setExportFormat] = useState("pdf")

  // Helper function to format contact info
  const formatContactInfo = () => {
    const { email, phone, location } = resumeData.personal
    return [email, phone, location].filter(Boolean).join(" • ")
  }

  // Helper function to split description into bullet points
  const formatDescription = (description: string) => {
    return description
      .split("\n")
      .filter((line) => line.trim())
      .map((line) => line.trim().replace(/^- /, ""))
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-muted p-4 flex justify-between items-center">
              <div>
                <h3 className="font-medium">Preview</h3>
                <p className="text-sm text-muted-foreground">This is how your resume will look</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Printer size={16} />
                  <span className="hidden sm:inline">Print</span>
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Edit size={16} />
                  <span className="hidden sm:inline">Edit</span>
                </Button>
              </div>
            </div>

            <div className="p-6 flex justify-center">
              <div className="w-full max-w-[800px] aspect-[1/1.414] bg-white rounded-md shadow-lg overflow-hidden">
                <div className="w-full h-full p-8 flex flex-col">
                  <div className="mb-6">
                    <h1 className="text-3xl font-bold text-black">
                      {resumeData.personal.firstName} {resumeData.personal.lastName}
                    </h1>
                    <p className="text-gray-700">{resumeData.experience[0]?.title || "Professional"}</p>
                    <div className="flex flex-wrap gap-2 mt-2 text-sm text-gray-600">
                      <span>{formatContactInfo()}</span>
                    </div>
                  </div>

                  {resumeData.summary.content && (
                    <div className="mb-4">
                      <h2 className="text-xl font-bold text-black border-b border-gray-300 pb-1 mb-2">
                        Professional Summary
                      </h2>
                      <p className="text-gray-700 text-sm">{resumeData.summary.content}</p>
                    </div>
                  )}

                  {resumeData.experience.length > 0 && (
                    <div className="mb-4">
                      <h2 className="text-xl font-bold text-black border-b border-gray-300 pb-1 mb-2">Work Experience</h2>
                      {resumeData.experience.map((exp: any, index: number) => (
                        <div key={exp.id} className="mb-3">
                          <div className="flex justify-between">
                            <h3 className="font-bold text-gray-800">{exp.title}</h3>
                            <span className="text-sm text-gray-600">
                              {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <p className="text-gray-700">{exp.company}</p>
                            <span className="text-sm text-gray-600">{exp.location}</span>
                          </div>
                          {exp.description && (
                            <ul className="list-disc list-inside text-sm text-gray-700 mt-1">
                              {formatDescription(exp.description).map((point, i) => (
                                <li key={i}>{point}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {resumeData.education.length > 0 && (
                    <div className="mb-4">
                      <h2 className="text-xl font-bold text-black border-b border-gray-300 pb-1 mb-2">Education</h2>
                      {resumeData.education.map((edu: any, index: number) => (
                        <div key={edu.id} className="mb-2">
                          <div className="flex justify-between">
                            <h3 className="font-bold text-gray-800">{edu.degree}</h3>
                            <span className="text-sm text-gray-600">
                              {edu.startDate} - {edu.endDate}
                            </span>
                          </div>
                          <p className="text-gray-700">{edu.institution}</p>
                          {edu.description && (
                            <p className="text-sm text-gray-700 mt-1">{edu.description}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {resumeData.skills.length > 0 && (
                    <div>
                      <h2 className="text-xl font-bold text-black border-b border-gray-300 pb-1 mb-2">Skills</h2>
                      <div className="flex flex-wrap gap-2">
                        {resumeData.skills.map((skill: any) => (
                          <Badge key={skill.id} variant="outline" className="bg-gray-100 text-gray-800">
                            {skill.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-1 space-y-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Export Resume</h3>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Format</label>
                <Select value={exportFormat} onValueChange={setExportFormat}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pdf">PDF Document (.pdf)</SelectItem>
                    <SelectItem value="docx">Word Document (.docx)</SelectItem>
                    <SelectItem value="txt">Plain Text (.txt)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full gap-2">
                <Download size={16} />
                Download Resume
              </Button>

              <Separator />

              <div className="space-y-2">
                <h4 className="font-medium">Other Options</h4>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="gap-2">
                    <Printer size={16} />
                    Print
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Share2 size={16} />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Resume Analysis</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-medium">ATS-Friendly</h4>
                  <p className="text-sm text-muted-foreground">
                    Your resume is optimized for Applicant Tracking Systems
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-medium">Good Length</h4>
                  <p className="text-sm text-muted-foreground">Your resume is an appropriate length (1 page)</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                <div>
                  <h4 className="font-medium">Action Verbs</h4>
                  <p className="text-sm text-muted-foreground">
                    Consider using more action verbs in your experience descriptions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                <div>
                  <h4 className="font-medium">Quantifiable Achievements</h4>
                  <p className="text-sm text-muted-foreground">
                    Add more metrics and numbers to highlight your achievements
                  </p>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                View Full Analysis
              </Button>
            </div>
          </CardContent>
        </Card>

        <TooltipProvider>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Tips & Resources</h3>

              <div className="space-y-3">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center justify-between cursor-help border-b pb-2">
                      <span className="font-medium">Tailor for each job</span>
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p>Customize your resume for each job application by matching keywords from the job description.</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center justify-between cursor-help border-b pb-2">
                      <span className="font-medium">Use action verbs</span>
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p>
                      Start bullet points with action verbs like "Developed," "Implemented," or "Led" to make your
                      achievements stand out.
                    </p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center justify-between cursor-help border-b pb-2">
                      <span className="font-medium">Quantify results</span>
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p>Include numbers and percentages to quantify your achievements and demonstrate your impact.</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center justify-between cursor-help">
                      <span className="font-medium">Keep it concise</span>
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p>
                      Aim for a one-page resume unless you have extensive relevant experience that requires more space.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </CardContent>
          </Card>
        </TooltipProvider>
      </div>
    </div>
  )
}