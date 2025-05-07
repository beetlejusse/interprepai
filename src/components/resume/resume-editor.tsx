"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordian";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/seprator";
import { Switch } from "@/components/ui/switch";
import { ChevronRight, ChevronLeft, Plus, Trash2, MoveUp, MoveDown, Sparkles, Palette, Type, Layout } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

// Define interfaces for type safety
interface ResumeData {
  personal: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    location: string;
    website: string;
    linkedin: string;
  };
  summary: {
    content: string;
  };
  experience: Array<{
    id: string;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
  }>;
  education: Array<{
    id: string;
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  skills: Array<{
    id: string;
    name: string;
    level: string;
  }>;
  projects: Array<{
    id: string;
    name: string;
    description: string;
    url: string;
    startDate: string;
    endDate: string;
  }>;
}

interface ResumeEditorProps {
  templateId: string;
  resumeData: ResumeData;
  onUpdateResumeData: (data: ResumeData) => void;
  onUpdateProgress: (progress: number) => void;
  onComplete: () => void;
}

// Sub-component for Experience Section (example)
interface ExperienceSectionProps {
  experience: ResumeData["experience"];
  onChange: (experience: ResumeData["experience"]) => void;
}

function ExperienceSection({ experience, onChange }: ExperienceSectionProps) {
  const handleExperienceChange = useCallback((index: number, field: string, value: string | boolean) => {
    const updatedExperience = [...experience];
    updatedExperience[index] = { ...updatedExperience[index], [field]: value };
    onChange(updatedExperience);
  }, [experience, onChange]);

  const addExperience = useCallback(() => {
    onChange([
      ...experience,
      {
        id: uuidv4(),
        title: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        current: false,
        description: "",
      },
    ]);
  }, [experience, onChange]);

  const removeExperience = useCallback((index: number) => {
    const updatedExperience = [...experience];
    updatedExperience.splice(index, 1);
    onChange(updatedExperience);
  }, [experience, onChange]);

  const moveExperience = useCallback((index: number, direction: "up" | "down") => {
    const updatedExperience = [...experience];
    const newIndex = direction === "up" ? index - 1 : index + 1;
    if (newIndex >= 0 && newIndex < updatedExperience.length) {
      [updatedExperience[index], updatedExperience[newIndex]] = [updatedExperience[newIndex], updatedExperience[index]];
      onChange(updatedExperience);
    }
  }, [experience, onChange]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Work Experience</h2>
        <p className="text-muted-foreground">Add your work history, starting with your most recent position</p>
      </div>
      <Accordion type="multiple" defaultValue={["exp0"]} className="space-y-4">
        {experience.map((exp, index) => (
          <AccordionItem key={exp.id} value={`exp${index}`} className="border rounded-lg p-2">
            <div className="flex items-center justify-between">
              <AccordionTrigger className="hover:no-underline">
                <div className="text-left">
                  <h3 className="font-medium">
                    {exp.title || exp.company ? `${exp.title}${exp.company ? ` at ${exp.company}` : ""}` : `Position ${index + 1}`}
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
                    e.stopPropagation();
                    removeExperience(index);
                  }}
                  disabled={experience.length === 1}
                  aria-label={`Remove experience ${index + 1}`}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    moveExperience(index, "up");
                  }}
                  disabled={index === 0}
                  aria-label={`Move experience ${index + 1} up`}
                >
                  <MoveUp className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    moveExperience(index, "down");
                  }}
                  disabled={index === experience.length - 1}
                  aria-label={`Move experience ${index + 1} down`}
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
                  <Label htmlFor={`start-date-${index}`}>Start Date</Label>
                  <Input
                    id={`start-date-${index}`}
                    placeholder="MM/YYYY"
                    value={exp.startDate}
                    onChange={(e) => handleExperienceChange(index, "startDate", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor={`end-date-${index}`} className={exp.current ? "text-muted-foreground" : ""}>
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
  );
}

// Main ResumeEditor Component
export function ResumeEditor({ templateId, resumeData, onUpdateResumeData, onUpdateProgress, onComplete }: ResumeEditorProps) {
  const [activeSection, setActiveSection] = useState<"personal" | "summary" | "experience" | "education" | "skills" | "projects" | "customization">("personal");
  const [customization, setCustomization] = useState({
    colors: { primary: "#3b82f6", secondary: "#6b7280", accent: "#8b5cf6" },
    fonts: { heading: "Inter", body: "Inter" },
    layout: "standard",
  });

  // Calculate completion progress
  const progress = useMemo(() => {
    let filledFields = 0;
    let totalFields = 0;

    const personalFields = Object.values(resumeData.personal);
    filledFields += personalFields.filter((val) => val !== "").length;
    totalFields += personalFields.length;

    filledFields += resumeData.summary.content.trim() !== "" ? 1 : 0;
    totalFields += 1;

    resumeData.experience.forEach((exp) => {
      const expFields = [exp.title, exp.company, exp.location, exp.startDate, exp.description];
      filledFields += expFields.filter((val) => val.trim() !== "").length;
      totalFields += expFields.length;
    });

    resumeData.education.forEach((edu) => {
      const eduFields = [edu.degree, edu.institution, edu.location, edu.startDate];
      filledFields += eduFields.filter((val) => val.trim() !== "").length;
      totalFields += eduFields.length;
    });

    resumeData.skills.forEach((skill) => {
      filledFields += skill.name.trim() !== "" ? 1 : 0;
      totalFields += 1;
    });

    return Math.min(100, Math.round((filledFields / totalFields) * 100));
  }, [resumeData]);

  useEffect(() => {
    onUpdateProgress(progress);
  }, [progress, onUpdateProgress]);

  const handlePersonalInfoChange = useCallback((field: keyof ResumeData["personal"], value: string) => {
    onUpdateResumeData({
      ...resumeData,
      personal: { ...resumeData.personal, [field]: value },
    });
  }, [resumeData, onUpdateResumeData]);

  const handleSummaryChange = useCallback((value: string) => {
    onUpdateResumeData({
      ...resumeData,
      summary: { content: value },
    });
  }, [resumeData, onUpdateResumeData]);

  const handleExperienceChange = useCallback((experience: ResumeData["experience"]) => {
    onUpdateResumeData({ ...resumeData, experience });
  }, [resumeData, onUpdateResumeData]);

  const handleEducationChange = useCallback((education: ResumeData["education"]) => {
    onUpdateResumeData({ ...resumeData, education });
  }, [resumeData, onUpdateResumeData]);

  const handleSkillsChange = useCallback((skills: ResumeData["skills"]) => {
    onUpdateResumeData({ ...resumeData, skills });
  }, [resumeData, onUpdateResumeData]);

  const handleProjectsChange = useCallback((projects: ResumeData["projects"]) => {
    onUpdateResumeData({ ...resumeData, projects });
  }, [resumeData, onUpdateResumeData]);

  const handleColorChange = useCallback((colorType: keyof typeof customization.colors, value: string) => {
    // Validate hex color
    const isValidHex = /^#[0-9A-F]{6}$/i.test(value);
    if (isValidHex) {
      setCustomization((prev) => ({
        ...prev,
        colors: { ...prev.colors, [colorType]: value },
      }));
    }
  }, []);

  const handleFontChange = useCallback((fontType: keyof typeof customization.fonts, value: string) => {
    setCustomization((prev) => ({
      ...prev,
      fonts: { ...prev.fonts, [fontType]: value },
    }));
  }, []);

  const handleLayoutChange = useCallback((layout: string) => {
    setCustomization((prev) => ({ ...prev, layout }));
  }, []);

  const handleNext = useCallback(() => {
    const sections = ["personal", "summary", "experience", "education", "skills", "projects", "customization"];
    const currentIndex = sections.indexOf(activeSection);
    if (currentIndex < sections.length - 1) {
      setActiveSection(sections[currentIndex + 1] as typeof activeSection);
    } else {
      onComplete();
    }
  }, [activeSection, onComplete]);

  const handlePrevious = useCallback(() => {
    const sections = ["personal", "summary", "experience", "education", "skills", "projects", "customization"];
    const currentIndex = sections.indexOf(activeSection);
    if (currentIndex > 0) {
      setActiveSection(sections[currentIndex - 1] as typeof activeSection);
    }
  }, [activeSection]);

  const generateAISummary = useCallback(() => {
    const aiSummary = `Experienced professional with expertise in ${resumeData.skills
      .map((s) => s.name)
      .filter(Boolean)
      .join(", ")}. Proven track record in ${resumeData.experience
      .map((e) => e.title)
      .filter(Boolean)
      .join(" and ")} at leading organizations. Focused on delivering high-quality results and advancing career in relevant fields.`;
    handleSummaryChange(aiSummary);
  }, [resumeData, handleSummaryChange]);

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
              {["personal", "summary", "experience", "education", "skills", "projects", "customization"].map((section) => (
                <Button
                  key={section}
                  variant={activeSection === section ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveSection(section as typeof activeSection)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Button>
              ))}
            </div>
            <Separator className="my-4" />
            <div className="space-y-1">
              <h3 className="font-medium text-sm mb-2">Optional Sections</h3>
              {["Certifications", "Languages", "References", "Custom Section"].map((section) => (
                <Button key={section} variant="ghost" className="w-full justify-start text-muted-foreground">
                  <Plus className="mr-2 h-4 w-4" />
                  {section}
                </Button>
              ))}
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
                  {[
                    { id: "firstName", label: "First Name" },
                    { id: "lastName", label: "Last Name" },
                    { id: "email", label: "Email", type: "email" },
                    { id: "phone", label: "Phone" },
                    { id: "location", label: "Location", placeholder: "City, State" },
                    { id: "website", label: "Website (Optional)", placeholder: "https://yourwebsite.com" },
                    { id: "linkedin", label: "LinkedIn (Optional)", placeholder: "https://linkedin.com/in/yourprofile", colSpan: true },
                  ].map(({ id, label, type, placeholder, colSpan }) => (
                    <div key={id} className={`space-y-2 ${colSpan ? "md:col-span-2" : ""}`}>
                      <Label htmlFor={id}>{label}</Label>
                      <Input
                        id={id}
                        type={type}
                        placeholder={placeholder}
                        value={resumeData.personal[id as keyof ResumeData["personal"]]}
                        onChange={(e) => handlePersonalInfoChange(id as keyof ResumeData["personal"], e.target.value)}
                      />
                    </div>
                  ))}
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
              <ExperienceSection experience={resumeData.experience} onChange={handleExperienceChange} />
            )}
            {/* Other sections (Education, Skills, Projects, Customization) follow similar patterns */}
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
  );
}