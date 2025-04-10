"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordian"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ChevronRight,
  ChevronLeft,
  Plus,
  Trash2,
  MoveUp,
  MoveDown,
  Sparkles,
  Palette,
  Type,
  Layout,
} from "lucide-react"
import { Separator } from "@/components/ui/seprator"
import { Switch } from "@/components/ui/switch"

interface ResumeEditorProps {
  templateId: string
  onUpdateProgress: (progress: number) => void
  onComplete: () => void
}

export function ResumeEditor({ templateId, onUpdateProgress, onComplete }: ResumeEditorProps) {
  const [activeSection, setActiveSection] = useState("personal")
  const [resumeData, setResumeData] = useState({
    personal: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
      website: "",
      linkedin: "",
    },
    summary: {
      content: "",
    },
    experience: [
      {
        id: "exp1",
        title: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        current: false,
        description: "",
      },
    ],
    education: [
      {
        id: "edu1",
        degree: "",
        institution: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
    skills: [{ id: "skill1", name: "", level: "Intermediate" }],
    projects: [
      {
        id: "proj1",
        name: "",
        description: "",
        url: "",
        startDate: "",
        endDate: "",
      },
    ],
    certifications: [],
    languages: [],
    references: [],
    customSections: [],
  })

  const [customization, setCustomization] = useState({
    colors: {
      primary: "#3b82f6",
      secondary: "#6b7280",
      accent: "#8b5cf6",
    },
    fonts: {
      heading: "Inter",
      body: "Inter",
    },
    layout: "standard",
  })

  // Calculate completion progress
  useEffect(() => {
    let filledFields = 0
    let totalFields = 0

    // Personal info
    const personalFields = Object.values(resumeData.personal)
    filledFields += personalFields.filter((val) => val.trim() !== "").length
    totalFields += personalFields.length

    // Summary
    filledFields += resumeData.summary.content.trim() !== "" ? 1 : 0
    totalFields += 1

    // Experience
    resumeData.experience.forEach((exp) => {
      const expFields = [exp.title, exp.company, exp.location, exp.startDate, exp.description]
      filledFields += expFields.filter((val) => val.trim() !== "").length
      totalFields += expFields.length
    })

    // Education
    resumeData.education.forEach((edu) => {
      const eduFields = [edu.degree, edu.institution, edu.location, edu.startDate]
      filledFields += eduFields.filter((val) => val.trim() !== "").length
      totalFields += eduFields.length
    })

    // Skills
    resumeData.skills.forEach((skill) => {
      filledFields += skill.name.trim() !== "" ? 1 : 0
      totalFields += 1
    })

    const progress = Math.min(100, Math.round((filledFields / totalFields) * 100))
    onUpdateProgress(progress)
  }, [resumeData, onUpdateProgress])

  const handlePersonalInfoChange = (field: string, value: string) => {
    setResumeData((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        [field]: value,
      },
    }))
  }

  const handleSummaryChange = (value: string) => {
    setResumeData((prev) => ({
      ...prev,
      summary: {
        content: value,
      },
    }))
  }

  const handleExperienceChange = (index: number, field: string, value: string | boolean) => {
    setResumeData((prev) => {
      const updatedExperience = [...prev.experience]
      updatedExperience[index] = {
        ...updatedExperience[index],
        [field]: value,
      }
      return {
        ...prev,
        experience: updatedExperience,
      }
    })
  }

  const addExperience = () => {
    setResumeData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: `exp${prev.experience.length + 1}`,
          title: "",
          company: "",
          location: "",
          startDate: "",
          endDate: "",
          current: false,
          description: "",
        },
      ],
    }))
  }

  const removeExperience = (index: number) => {
    setResumeData((prev) => {
      const updatedExperience = [...prev.experience]
      updatedExperience.splice(index, 1)
      return {
        ...prev,
        experience: updatedExperience,
      }
    })
  }

  const handleEducationChange = (index: number, field: string, value: string) => {
    setResumeData((prev) => {
      const updatedEducation = [...prev.education]
      updatedEducation[index] = {
        ...updatedEducation[index],
        [field]: value,
      }
      return {
        ...prev,
        education: updatedEducation,
      }
    })
  }

  const addEducation = () => {
    setResumeData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: `edu${prev.education.length + 1}`,
          degree: "",
          institution: "",
          location: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    }))
  }

  const removeEducation = (index: number) => {
    setResumeData((prev) => {
      const updatedEducation = [...prev.education]
      updatedEducation.splice(index, 1)
      return {
        ...prev,
        education: updatedEducation,
      }
    })
  }

  const handleSkillChange = (index: number, field: string, value: string) => {
    setResumeData((prev) => {
      const updatedSkills = [...prev.skills]
      updatedSkills[index] = {
        ...updatedSkills[index],
        [field]: value,
      }
      return {
        ...prev,
        skills: updatedSkills,
      }
    })
  }

  const addSkill = () => {
    setResumeData((prev) => ({
      ...prev,
      skills: [...prev.skills, { id: `skill${prev.skills.length + 1}`, name: "", level: "Intermediate" }],
    }))
  }

  const removeSkill = (index: number) => {
    setResumeData((prev) => {
      const updatedSkills = [...prev.skills]
      updatedSkills.splice(index, 1)
      return {
        ...prev,
        skills: updatedSkills,
      }
    })
  }

  const handleProjectChange = (index: number, field: string, value: string) => {
    setResumeData((prev) => {
      const updatedProjects = [...prev.projects]
      updatedProjects[index] = {
        ...updatedProjects[index],
        [field]: value,
      }
      return {
        ...prev,
        projects: updatedProjects,
      }
    })
  }

  const addProject = () => {
    setResumeData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          id: `proj${prev.projects.length + 1}`,
          name: "",
          description: "",
          url: "",
          startDate: "",
          endDate: "",
        },
      ],
    }))
  }

  const removeProject = (index: number) => {
    setResumeData((prev) => {
      const updatedProjects = [...prev.projects]
      updatedProjects.splice(index, 1)
      return {
        ...prev,
        projects: updatedProjects,
      }
    })
  }

  const handleColorChange = (colorType: string, value: string) => {
    setCustomization((prev) => ({
      ...prev,
      colors: {
        ...prev.colors,
        [colorType]: value,
      },
    }))
  }

  const handleFontChange = (fontType: string, value: string) => {
    setCustomization((prev) => ({
      ...prev,
      fonts: {
        ...prev.fonts,
        [fontType]: value,
      },
    }))
  }

  const handleLayoutChange = (layout: string) => {
    setCustomization((prev) => ({
      ...prev,
      layout,
    }))
  }

  const handleNext = () => {
    const sections = ["personal", "summary", "experience", "education", "skills", "projects", "customization"]
    const currentIndex = sections.indexOf(activeSection)

    if (currentIndex < sections.length - 1) {
      setActiveSection(sections[currentIndex + 1])
    } else {
      onComplete()
    }
  }

  const handlePrevious = () => {
    const sections = ["personal", "summary", "experience", "education", "skills", "projects", "customization"]
    const currentIndex = sections.indexOf(activeSection)

    if (currentIndex > 0) {
      setActiveSection(sections[currentIndex - 1])
    }
  }

  const generateAISummary = () => {
    // Simulate AI-generated summary
    const aiSummary =
      "Experienced software engineer with a proven track record of developing scalable applications and leading cross-functional teams. Skilled in JavaScript, React, and Node.js with a focus on creating intuitive user experiences and optimizing application performance."

    handleSummaryChange(aiSummary)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="md:col-span-1">
        <Card>
          <CardContent className="p-4">
            <div className="space-y-1 mb-4">
              <h3 className="font-medium">Resume Sections</h3>
              <p className="text-sm text-muted-foreground">Complete each section</p>
            </div>

            <div className="space-y-1">
              <Button
                variant={activeSection === "personal" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveSection("personal")}
              >
                Personal Information
              </Button>
              <Button
                variant={activeSection === "summary" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveSection("summary")}
              >
                Professional Summary
              </Button>
              <Button
                variant={activeSection === "experience" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveSection("experience")}
              >
                Work Experience
              </Button>
              <Button
                variant={activeSection === "education" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveSection("education")}
              >
                Education
              </Button>
              <Button
                variant={activeSection === "skills" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveSection("skills")}
              >
                Skills
              </Button>
              <Button
                variant={activeSection === "projects" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveSection("projects")}
              >
                Projects
              </Button>
              <Button
                variant={activeSection === "customization" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveSection("customization")}
              >
                Customization
              </Button>
            </div>

            <Separator className="my-4" />

            <div className="space-y-1">
              <h3 className="font-medium text-sm mb-2">Optional Sections</h3>
              <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                <Plus className="mr-2 h-4 w-4" />
                Certifications
              </Button>
              <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                <Plus className="mr-2 h-4 w-4" />
                Languages
              </Button>
              <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                <Plus className="mr-2 h-4 w-4" />
                References
              </Button>
              <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                <Plus className="mr-2 h-4 w-4" />
                Custom Section
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="md:col-span-3">
        <Card>
          <CardContent className="p-6">
            {activeSection === "personal" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold">Personal Information</h2>
                  <p className="text-muted-foreground">Add your contact details</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={resumeData.personal.firstName}
                      onChange={(e) => handlePersonalInfoChange("firstName", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={resumeData.personal.lastName}
                      onChange={(e) => handlePersonalInfoChange("lastName", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={resumeData.personal.email}
                      onChange={(e) => handlePersonalInfoChange("email", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={resumeData.personal.phone}
                      onChange={(e) => handlePersonalInfoChange("phone", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      placeholder="City, State"
                      value={resumeData.personal.location}
                      onChange={(e) => handlePersonalInfoChange("location", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Website (Optional)</Label>
                    <Input
                      id="website"
                      placeholder="https://yourwebsite.com"
                      value={resumeData.personal.website}
                      onChange={(e) => handlePersonalInfoChange("website", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="linkedin">LinkedIn (Optional)</Label>
                    <Input
                      id="linkedin"
                      placeholder="https://linkedin.com/in/yourprofile"
                      value={resumeData.personal.linkedin}
                      onChange={(e) => handlePersonalInfoChange("linkedin", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeSection === "summary" && (
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold">Professional Summary</h2>
                    <p className="text-muted-foreground">Write a compelling summary of your skills and experience</p>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2" onClick={generateAISummary}>
                    <Sparkles size={16} />
                    AI Assist
                  </Button>
                </div>

                <div className="space-y-2">
                  <Textarea
                    placeholder="Summarize your professional background, key skills, and career goals in 3-5 sentences."
                    className="min-h-[200px]"
                    value={resumeData.summary.content}
                    onChange={(e) => handleSummaryChange(e.target.value)}
                  />
                  <p className="text-sm text-muted-foreground">
                    Tip: Keep your summary concise and focused on your most relevant qualifications.
                  </p>
                </div>
              </div>
            )}

            {activeSection === "experience" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold">Work Experience</h2>
                  <p className="text-muted-foreground">
                    Add your work history, starting with your most recent position
                  </p>
                </div>

                <Accordion type="multiple" defaultValue={["exp0"]} className="space-y-4">
                  {resumeData.experience.map((exp, index) => (
                    <AccordionItem key={exp.id} value={`exp${index}`} className="border rounded-lg p-2">
                      <div className="flex items-center justify-between">
                        <AccordionTrigger className="hover:no-underline">
                          <div className="text-left">
                            <h3 className="font-medium">
                              {exp.title || exp.company
                                ? `${exp.title}${exp.company ? ` at ${exp.company}` : ""}`
                                : `Position ${index + 1}`}
                            </h3>
                            {exp.startDate && (
                              <p className="text-sm text-muted-foreground">
                                {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                              </p>
                            )}
                          </div>
                        </AccordionTrigger>
                        <div className="flex items-center gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={(e) => {
                              e.stopPropagation()
                              removeExperience(index)
                            }}
                            disabled={resumeData.experience.length === 1}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={(e) => {
                              e.stopPropagation()
                              // Move up logic
                            }}
                            disabled={index === 0}
                          >
                            <MoveUp className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={(e) => {
                              e.stopPropagation()
                              // Move down logic
                            }}
                            disabled={index === resumeData.experience.length - 1}
                          >
                            <MoveDown className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <AccordionContent className="pt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor={`job-title-${index}`}>Job Title</Label>
                            <Input
                              id={`job-title-${index}`}
                              value={exp.title}
                              onChange={(e) => handleExperienceChange(index, "title", e.target.value)}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor={`company-${index}`}>Company</Label>
                            <Input
                              id={`company-${index}`}
                              value={exp.company}
                              onChange={(e) => handleExperienceChange(index, "company", e.target.value)}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor={`location-${index}`}>Location</Label>
                            <Input
                              id={`location-${index}`}
                              placeholder="City, State or Remote"
                              value={exp.location}
                              onChange={(e) => handleExperienceChange(index, "location", e.target.value)}
                            />
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <Label htmlFor={`start-date-${index}`}>Start Date</Label>
                            </div>
                            <Input
                              id={`start-date-${index}`}
                              placeholder="MM/YYYY"
                              value={exp.startDate}
                              onChange={(e) => handleExperienceChange(index, "startDate", e.target.value)}
                            />
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <Label
                                htmlFor={`end-date-${index}`}
                                className={exp.current ? "text-muted-foreground" : ""}
                              >
                                End Date
                              </Label>
                              <div className="flex items-center gap-2">
                                <Switch
                                  id={`current-job-${index}`}
                                  checked={exp.current}
                                  onCheckedChange={(checked) => handleExperienceChange(index, "current", checked)}
                                />
                                <Label htmlFor={`current-job-${index}`} className="text-sm">
                                  Current Job
                                </Label>
                              </div>
                            </div>
                            <Input
                              id={`end-date-${index}`}
                              placeholder="MM/YYYY"
                              value={exp.endDate}
                              onChange={(e) => handleExperienceChange(index, "endDate", e.target.value)}
                              disabled={exp.current}
                            />
                          </div>

                          <div className="space-y-2 md:col-span-2">
                            <Label htmlFor={`description-${index}`}>Description</Label>
                            <Textarea
                              id={`description-${index}`}
                              placeholder="Describe your responsibilities and achievements"
                              className="min-h-[150px]"
                              value={exp.description}
                              onChange={(e) => handleExperienceChange(index, "description", e.target.value)}
                            />
                            <p className="text-sm text-muted-foreground">
                              Tip: Use bullet points and action verbs to highlight your accomplishments.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <Button variant="outline" className="w-full gap-2" onClick={addExperience}>
                  <Plus size={16} />
                  Add Another Position
                </Button>
              </div>
            )}

            {activeSection === "education" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold">Education</h2>
                  <p className="text-muted-foreground">Add your educational background</p>
                </div>

                <Accordion type="multiple" defaultValue={["edu0"]} className="space-y-4">
                  {resumeData.education.map((edu, index) => (
                    <AccordionItem key={edu.id} value={`edu${index}`} className="border rounded-lg p-2">
                      <div className="flex items-center justify-between">
                        <AccordionTrigger className="hover:no-underline">
                          <div className="text-left">
                            <h3 className="font-medium">
                              {edu.degree || edu.institution
                                ? `${edu.degree}${edu.institution ? ` at ${edu.institution}` : ""}`
                                : `Education ${index + 1}`}
                            </h3>
                            {edu.startDate && (
                              <p className="text-sm text-muted-foreground">
                                {edu.startDate} - {edu.endDate}
                              </p>
                            )}
                          </div>
                        </AccordionTrigger>
                        <div className="flex items-center gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={(e) => {
                              e.stopPropagation()
                              removeEducation(index)
                            }}
                            disabled={resumeData.education.length === 1}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={(e) => {
                              e.stopPropagation()
                              // Move up logic
                            }}
                            disabled={index === 0}
                          >
                            <MoveUp className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={(e) => {
                              e.stopPropagation()
                              // Move down logic
                            }}
                            disabled={index === resumeData.education.length - 1}
                          >
                            <MoveDown className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <AccordionContent className="pt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor={`degree-${index}`}>Degree/Certificate</Label>
                            <Input
                              id={`degree-${index}`}
                              placeholder="e.g., Bachelor of Science in Computer Science"
                              value={edu.degree}
                              onChange={(e) => handleEducationChange(index, "degree", e.target.value)}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor={`institution-${index}`}>Institution</Label>
                            <Input
                              id={`institution-${index}`}
                              placeholder="e.g., University of California"
                              value={edu.institution}
                              onChange={(e) => handleEducationChange(index, "institution", e.target.value)}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor={`edu-location-${index}`}>Location</Label>
                            <Input
                              id={`edu-location-${index}`}
                              placeholder="City, State or Country"
                              value={edu.location}
                              onChange={(e) => handleEducationChange(index, "location", e.target.value)}
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <div className="space-y-2">
                              <Label htmlFor={`edu-start-date-${index}`}>Start Date</Label>
                              <Input
                                id={`edu-start-date-${index}`}
                                placeholder="MM/YYYY"
                                value={edu.startDate}
                                onChange={(e) => handleEducationChange(index, "startDate", e.target.value)}
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor={`edu-end-date-${index}`}>End Date</Label>
                              <Input
                                id={`edu-end-date-${index}`}
                                placeholder="MM/YYYY or Present"
                                value={edu.endDate}
                                onChange={(e) => handleEducationChange(index, "endDate", e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="space-y-2 md:col-span-2">
                            <Label htmlFor={`edu-description-${index}`}>Description (Optional)</Label>
                            <Textarea
                              id={`edu-description-${index}`}
                              placeholder="Relevant coursework, achievements, activities, etc."
                              value={edu.description}
                              onChange={(e) => handleEducationChange(index, "description", e.target.value)}
                            />
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <Button variant="outline" className="w-full gap-2" onClick={addEducation}>
                  <Plus size={16} />
                  Add Another Education
                </Button>
              </div>
            )}

            {activeSection === "skills" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold">Skills</h2>
                  <p className="text-muted-foreground">Add your key skills and proficiency levels</p>
                </div>

                <div className="space-y-4">
                  {resumeData.skills.map((skill, index) => (
                    <div key={skill.id} className="flex items-center gap-2">
                      <div className="flex-1">
                        <Input
                          placeholder="Skill name (e.g., JavaScript, Project Management)"
                          value={skill.name}
                          onChange={(e) => handleSkillChange(index, "name", e.target.value)}
                        />
                      </div>

                      <Select value={skill.level} onValueChange={(value) => handleSkillChange(index, "level", value)}>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Proficiency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Beginner">Beginner</SelectItem>
                          <SelectItem value="Intermediate">Intermediate</SelectItem>
                          <SelectItem value="Advanced">Advanced</SelectItem>
                          <SelectItem value="Expert">Expert</SelectItem>
                        </SelectContent>
                      </Select>

                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeSkill(index)}
                        disabled={resumeData.skills.length === 1}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full gap-2" onClick={addSkill}>
                  <Plus size={16} />
                  Add Another Skill
                </Button>
              </div>
            )}

            {activeSection === "projects" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold">Projects</h2>
                  <p className="text-muted-foreground">Add relevant projects that showcase your skills</p>
                </div>

                <Accordion type="multiple" defaultValue={["proj0"]} className="space-y-4">
                  {resumeData.projects.map((project, index) => (
                    <AccordionItem key={project.id} value={`proj${index}`} className="border rounded-lg p-2">
                      <div className="flex items-center justify-between">
                        <AccordionTrigger className="hover:no-underline">
                          <div className="text-left">
                            <h3 className="font-medium">{project.name || `Project ${index + 1}`}</h3>
                            {project.startDate && (
                              <p className="text-sm text-muted-foreground">
                                {project.startDate} - {project.endDate}
                              </p>
                            )}
                          </div>
                        </AccordionTrigger>
                        <div className="flex items-center gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={(e) => {
                              e.stopPropagation()
                              removeProject(index)
                            }}
                            disabled={resumeData.projects.length === 1}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <AccordionContent className="pt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor={`project-name-${index}`}>Project Name</Label>
                            <Input
                              id={`project-name-${index}`}
                              value={project.name}
                              onChange={(e) => handleProjectChange(index, "name", e.target.value)}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor={`project-url-${index}`}>Project URL (Optional)</Label>
                            <Input
                              id={`project-url-${index}`}
                              placeholder="https://..."
                              value={project.url}
                              onChange={(e) => handleProjectChange(index, "url", e.target.value)}
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <div className="space-y-2">
                              <Label htmlFor={`project-start-date-${index}`}>Start Date</Label>
                              <Input
                                id={`project-start-date-${index}`}
                                placeholder="MM/YYYY"
                                value={project.startDate}
                                onChange={(e) => handleProjectChange(index, "startDate", e.target.value)}
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor={`project-end-date-${index}`}>End Date</Label>
                              <Input
                                id={`project-end-date-${index}`}
                                placeholder="MM/YYYY or Present"
                                value={project.endDate}
                                onChange={(e) => handleProjectChange(index, "endDate", e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="space-y-2 md:col-span-2">
                            <Label htmlFor={`project-description-${index}`}>Description</Label>
                            <Textarea
                              id={`project-description-${index}`}
                              placeholder="Describe the project, your role, and the technologies used"
                              className="min-h-[150px]"
                              value={project.description}
                              onChange={(e) => handleProjectChange(index, "description", e.target.value)}
                            />
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <Button variant="outline" className="w-full gap-2" onClick={addProject}>
                  <Plus size={16} />
                  Add Another Project
                </Button>
              </div>
            )}

            {activeSection === "customization" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold">Customize Your Resume</h2>
                  <p className="text-muted-foreground">Personalize the look and feel of your resume</p>
                </div>

                <Tabs defaultValue="colors" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="colors" className="gap-2">
                      <Palette size={16} />
                      Colors
                    </TabsTrigger>
                    <TabsTrigger value="fonts" className="gap-2">
                      <Type size={16} />
                      Fonts
                    </TabsTrigger>
                    <TabsTrigger value="layout" className="gap-2">
                      <Layout size={16} />
                      Layout
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="colors" className="mt-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="primary-color">Primary Color</Label>
                        <div className="flex gap-2">
                          <input
                            type="color"
                            id="primary-color"
                            value={customization.colors.primary}
                            onChange={(e) => handleColorChange("primary", e.target.value)}
                            className="w-10 h-10 rounded cursor-pointer"
                          />
                          <Input
                            value={customization.colors.primary}
                            onChange={(e) => handleColorChange("primary", e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="secondary-color">Secondary Color</Label>
                        <div className="flex gap-2">
                          <input
                            type="color"
                            id="secondary-color"
                            value={customization.colors.secondary}
                            onChange={(e) => handleColorChange("secondary", e.target.value)}
                            className="w-10 h-10 rounded cursor-pointer"
                          />
                          <Input
                            value={customization.colors.secondary}
                            onChange={(e) => handleColorChange("secondary", e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="accent-color">Accent Color</Label>
                        <div className="flex gap-2">
                          <input
                            type="color"
                            id="accent-color"
                            value={customization.colors.accent}
                            onChange={(e) => handleColorChange("accent", e.target.value)}
                            className="w-10 h-10 rounded cursor-pointer"
                          />
                          <Input
                            value={customization.colors.accent}
                            onChange={(e) => handleColorChange("accent", e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h3 className="font-medium mb-2">Color Presets</h3>
                      <div className="flex flex-wrap gap-2">
                        <Button
                          variant="outline"
                          className="h-10 w-10 p-0 rounded-full"
                          style={{ backgroundColor: "#3b82f6" }}
                          onClick={() => {
                            handleColorChange("primary", "#3b82f6")
                            handleColorChange("secondary", "#6b7280")
                            handleColorChange("accent", "#8b5cf6")
                          }}
                        />
                        <Button
                          variant="outline"
                          className="h-10 w-10 p-0 rounded-full"
                          style={{ backgroundColor: "#10b981" }}
                          onClick={() => {
                            handleColorChange("primary", "#10b981")
                            handleColorChange("secondary", "#6b7280")
                            handleColorChange("accent", "#06b6d4")
                          }}
                        />
                        <Button
                          variant="outline"
                          className="h-10 w-10 p-0 rounded-full"
                          style={{ backgroundColor: "#f43f5e" }}
                          onClick={() => {
                            handleColorChange("primary", "#f43f5e")
                            handleColorChange("secondary", "#6b7280")
                            handleColorChange("accent", "#ec4899")
                          }}
                        />
                        <Button
                          variant="outline"
                          className="h-10 w-10 p-0 rounded-full"
                          style={{ backgroundColor: "#6366f1" }}
                          onClick={() => {
                            handleColorChange("primary", "#6366f1")
                            handleColorChange("secondary", "#6b7280")
                            handleColorChange("accent", "#8b5cf6")
                          }}
                        />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="fonts" className="mt-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="heading-font">Heading Font</Label>
                        <Select
                          value={customization.fonts.heading}
                          onValueChange={(value) => handleFontChange("heading", value)}
                        >
                          <SelectTrigger id="heading-font">
                            <SelectValue placeholder="Select font" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Inter">Inter</SelectItem>
                            <SelectItem value="Roboto">Roboto</SelectItem>
                            <SelectItem value="Montserrat">Montserrat</SelectItem>
                            <SelectItem value="Open Sans">Open Sans</SelectItem>
                            <SelectItem value="Playfair Display">Playfair Display</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="body-font">Body Font</Label>
                        <Select
                          value={customization.fonts.body}
                          onValueChange={(value) => handleFontChange("body", value)}
                        >
                          <SelectTrigger id="body-font">
                            <SelectValue placeholder="Select font" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Inter">Inter</SelectItem>
                            <SelectItem value="Roboto">Roboto</SelectItem>
                            <SelectItem value="Montserrat">Montserrat</SelectItem>
                            <SelectItem value="Open Sans">Open Sans</SelectItem>
                            <SelectItem value="Lato">Lato</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h3 className="font-medium mb-2">Font Size</h3>
                      <div className="flex items-center gap-4">
                        <span className="text-sm">Smaller</span>
                        <input type="range" min="1" max="3" step="1" defaultValue="2" className="flex-1" />
                        <span className="text-sm">Larger</span>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="layout" className="mt-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                          customization.layout === "standard" ? "border-primary bg-primary/10" : ""
                        }`}
                        onClick={() => handleLayoutChange("standard")}
                      >
                        <div className="aspect-[8.5/11] bg-background border rounded-md mb-2 p-2">
                          <div className="w-full h-[15%] bg-muted rounded-sm mb-2"></div>
                          <div className="w-full h-[10%] bg-muted rounded-sm mb-2"></div>
                          <div className="w-full h-[60%] bg-muted rounded-sm"></div>
                        </div>
                        <h3 className="font-medium text-center">Standard</h3>
                      </div>

                      <div
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                          customization.layout === "modern" ? "border-primary bg-primary/10" : ""
                        }`}
                        onClick={() => handleLayoutChange("modern")}
                      >
                        <div className="aspect-[8.5/11] bg-background border rounded-md mb-2 p-2">
                          <div className="flex h-full">
                            <div className="w-1/3 h-full bg-muted rounded-sm mr-2"></div>
                            <div className="w-2/3 h-full">
                              <div className="w-full h-[20%] bg-muted rounded-sm mb-2"></div>
                              <div className="w-full h-[70%] bg-muted rounded-sm"></div>
                            </div>
                          </div>
                        </div>
                        <h3 className="font-medium text-center">Modern</h3>
                      </div>

                      <div
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                          customization.layout === "creative" ? "border-primary bg-primary/10" : ""
                        }`}
                        onClick={() => handleLayoutChange("creative")}
                      >
                        <div className="aspect-[8.5/11] bg-background border rounded-md mb-2 p-2">
                          <div className="w-full h-[20%] bg-muted rounded-sm mb-2"></div>
                          <div className="flex h-[70%] gap-2">
                            <div className="w-2/3 h-full bg-muted rounded-sm"></div>
                            <div className="w-1/3 h-full bg-muted rounded-sm"></div>
                          </div>
                        </div>
                        <h3 className="font-medium text-center">Creative</h3>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h3 className="font-medium mb-2">Section Order</h3>
                      <p className="text-sm text-muted-foreground mb-2">Drag and drop to reorder sections</p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 border rounded-md bg-background">
                          <span>Personal Information</span>
                          <div className="flex items-center gap-1">
                            <Button variant="ghost" size="icon">
                              <MoveUp className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <MoveDown className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md bg-background">
                          <span>Professional Summary</span>
                          <div className="flex items-center gap-1">
                            <Button variant="ghost" size="icon">
                              <MoveUp className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <MoveDown className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md bg-background">
                          <span>Work Experience</span>
                          <div className="flex items-center gap-1">
                            <Button variant="ghost" size="icon">
                              <MoveUp className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <MoveDown className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md bg-background">
                          <span>Education</span>
                          <div className="flex items-center gap-1">
                            <Button variant="ghost" size="icon">
                              <MoveUp className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <MoveDown className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md bg-background">
                          <span>Skills</span>
                          <div className="flex items-center gap-1">
                            <Button variant="ghost" size="icon">
                              <MoveUp className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <MoveDown className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            )}

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={activeSection === "personal"}
                className="gap-2"
              >
                <ChevronLeft size={16} />
                Previous
              </Button>

              <Button onClick={handleNext} className="gap-2">
                {activeSection === "customization" ? "Preview Resume" : "Next"}
                {activeSection !== "customization" && <ChevronRight size={16} />}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

