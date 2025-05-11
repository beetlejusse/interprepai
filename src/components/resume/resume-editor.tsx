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

// Sub-component for Experience Section
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
    <>
      <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Work Experience</h2>
        <p className="text-muted-foreground">Add your work history, starting with your most recent position</p>
      </div>
      <Accordion type="multiple" defaultValue={["exp0"]} className="space-y-4">
        {experience.map((exp, index) => (
          <AccordionItem key={exp.id} value={`exp${index}`} className="border rounded-lg p-2">
            qwerty
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
                    type="date"
                    placeholder="MM/YYYY"
                    pattern="^(0[1-9]|1[0-2])\/[0-9]{4}$"
                    value={exp.startDate}
                    onChange={(e) => handleExperienceChange(index, "startDate", e.target.value)}
                    title="Please enter a date in MM/YYYY format"
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
                    type="date"
                    placeholder="MM/YYYY"
                    pattern="^(0[1-9]|1[0-2])\/[0-9]{4}$"
                    value={exp.endDate}
                    onChange={(e) => handleExperienceChange(index, "endDate", e.target.value)}
                    disabled={exp.current}
                    title="Please enter a date in MM/YYYY format"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label >Description</Label>
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
    </>
  );
}

// Sub-component for Education Section
interface EducationSectionProps {
  education: ResumeData["education"];
  onChange: (education: ResumeData["education"]) => void;
}

function EducationSection({ education, onChange }: EducationSectionProps) {
  const handleEducationChange = useCallback((index: number, field: string, value: string) => {
    const updatedEducation = [...education];
    updatedEducation[index] = { ...updatedEducation[index], [field]: value };
    onChange(updatedEducation);
  }, [education, onChange]);

  const addEducation = useCallback(() => {
    onChange([
      ...education,
      {
        id: uuidv4(),
        degree: "",
        institution: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  }, [education, onChange]);

  const removeEducation = useCallback((index: number) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    onChange(updatedEducation);
  }, [education, onChange]);

  const moveEducation = useCallback((index: number, direction: "up" | "down") => {
    const updatedEducation = [...education];
    const newIndex = direction === "up" ? index - 1 : index + 1;
    if (newIndex >= 0 && newIndex < updatedEducation.length) {
      [updatedEducation[index], updatedEducation[newIndex]] = [updatedEducation[newIndex], updatedEducation[index]];
      onChange(updatedEducation);
    }
  }, [education, onChange]);

  return (
    <>
      <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Education</h2>
        <p className="text-muted-foreground">Add your educational background, starting with your most recent degree</p>
      </div>
      <Accordion type="multiple" defaultValue={["edu0"]} className="space-y-4">
        {education.map((edu, index) => (
          <AccordionItem key={edu.id} value={`edu${index}`} className="border rounded-lg p-2">
            <div className="flex items-center justify-between">
              <AccordionTrigger className="hover:no-underline">
                <div className="text-left">
                  <h3 className="font-medium">
                    {edu.degree || edu.institution ? `${edu.degree}${edu.institution ? `, ${edu.institution}` : ""}` : `Education ${index + 1}`}
                  </h3>
                  {edu.startDate && (
                    <p className="text-sm text-muted-foreground">
                      {edu.startDate} - {edu.endDate || "Present"}
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
                    removeEducation(index);
                  }}
                  disabled={education.length === 1}
                  aria-label={`Remove education ${index + 1}`}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    moveEducation(index, "up");
                  }}
                  disabled={index === 0}
                  aria-label={`Move education ${index + 1} up`}
                >
                  <MoveUp className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    moveEducation(index, "down");
                  }}
                  disabled={index === education.length - 1}
                  aria-label={`Move education ${index + 1} down`}
                >
                  <MoveDown className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <AccordionContent className="pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor={`degree-${index}`}>Degree</Label>
                  <Input
                    id={`degree-${index}`}
                    placeholder="e.g., Bachelor of Science"
                    value={edu.degree}
                    onChange={(e) => handleEducationChange(index, "degree", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`institution-${index}`}>Institution</Label>
                  <Input
                    id={`institution-${index}`}
                    placeholder="e.g., University of Example"
                    value={edu.institution}
                    onChange={(e) => handleEducationChange(index, "institution", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`location-${index}`}>Location</Label>
                  <Input
                    id={`location-${index}`}
                    placeholder="City, State"
                    value={edu.location}
                    onChange={(e) => handleEducationChange(index, "location", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`start-date-${index}`}>Start Date</Label>
                  <Input
                    id={`start-date-${index}`}
                    type="date"
                    placeholder="MM/YYYY"
                    pattern="^(0[1-9]|1[0-2])\/[0-9]{4}$"
                    value={edu.startDate}
                    onChange={(e) => handleEducationChange(index, "startDate", e.target.value)}
                    title="Please enter a date in MM/YYYY format"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`end-date-${index}`}>End Date (or Expected)</Label>
                  <Input
                    id={`end-date-${index}`}
                    type="date"
                    placeholder="MM/YYYY"
                    pattern="^(0[1-9]|1[0-2])\/[0-9]{4}$"
                    value={edu.endDate}
                    onChange={(e) => handleEducationChange(index, "endDate", e.target.value)}
                    title="Please enter a date in MM/YYYY format"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor={`description-${index}`}>Description (Optional)</Label>
                  <Textarea
                    id={`description-${index}`}
                    placeholder="e.g., Relevant coursework, honors, or activities"
                    className="min-h-[150px]"
                    value={edu.description}
                    onChange={(e) => handleEducationChange(index, "description", e.target.value)}
                  />
                  <p className="text-sm text-muted-foreground">
                    Tip: Include notable achievements or relevant details.
                  </p>
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
    </>
  );
}

// Sub-component for Skills Section
interface SkillsSectionProps {
  skills: ResumeData["skills"];
  onChange: (skills: ResumeData["skills"]) => void;
}

function SkillsSection({ skills, onChange }: SkillsSectionProps) {
  const handleSkillChange = useCallback((index: number, field: string, value: string) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = { ...updatedSkills[index], [field]: value };
    onChange(updatedSkills);
  }, [skills, onChange]);

  const addSkill = useCallback(() => {
    onChange([
      ...skills,
      {
        id: uuidv4(),
        name: "",
        level: "Intermediate",
      },
    ]);
  }, [skills, onChange]);

  const removeSkill = useCallback((index: number) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    onChange(updatedSkills);
  }, [skills, onChange]);

  const moveSkill = useCallback((index: number, direction: "up" | "down") => {
    const updatedSkills = [...skills];
    const newIndex = direction === "up" ? index - 1 : index + 1;
    if (newIndex >= 0 && newIndex < updatedSkills.length) {
      [updatedSkills[index], updatedSkills[newIndex]] = [updatedSkills[newIndex], updatedSkills[index]];
      onChange(updatedSkills);
    }
  }, [skills, onChange]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Skills</h2>
        <p className="text-muted-foreground">Add your technical and professional skills</p>
      </div>
      <Accordion type="multiple" defaultValue={["skill0"]} className="space-y-4">
        {skills.map((skill, index) => (
          <AccordionItem key={skill.id} value={`skill${index}`} className="border rounded-lg p-2">
            <div className="flex items-center justify-between">
              <AccordionTrigger className="hover:no-underline">
                <div className="text-left">
                  <h3 className="font-medium">{skill.name || `Skill ${index + 1}`}</h3>
                  <p className="text-sm text-muted-foreground">{skill.level}</p>
                </div>
              </AccordionTrigger>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeSkill(index);
                  }}
                  disabled={skills.length === 1}
                  aria-label={`Remove skill ${index + 1}`}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    moveSkill(index, "up");
                  }}
                  disabled={index === 0}
                  aria-label={`Move skill ${index + 1} up`}
                >
                  <MoveUp className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    moveSkill(index, "down");
                  }}
                  disabled={index === skills.length - 1}
                  aria-label={`Move skill ${index + 1} down`}
                >
                  <MoveDown className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <AccordionContent className="pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor={`skill-name-${index}`}>Skill Name</Label>
                  <Input
                    id={`skill-name-${index}`}
                    placeholder="e.g., JavaScript"
                    value={skill.name}
                    onChange={(e) => handleSkillChange(index, "name", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`skill-level-${index}`}>Proficiency Level</Label>
                  <Select
                    value={skill.level}
                    onValueChange={(value) => handleSkillChange(index, "level", value)}
                  >
                    <SelectTrigger id={`skill-level-${index}`}>
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Beginner">Beginner</SelectItem>
                      <SelectItem value="Intermediate">Intermediate</SelectItem>
                      <SelectItem value="Advanced">Advanced</SelectItem>
                      <SelectItem value="Expert">Expert</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Button variant="outline" className="w-full gap-2" onClick={addSkill}>
        <Plus size={16} />
        Add Another Skill
      </Button>
    </div>
  );
}

// Sub-component for Projects Section
interface ProjectsSectionProps {
  projects: ResumeData["projects"];
  onChange: (projects: ResumeData["projects"]) => void;
}

function ProjectsSection({ projects, onChange }: ProjectsSectionProps) {
  const handleProjectChange = useCallback((index: number, field: string, value: string) => {
    const updatedProjects = [...projects];
    updatedProjects[index] = { ...updatedProjects[index], [field]: value };
    onChange(updatedProjects);
  }, [projects, onChange]);

  const addProject = useCallback(() => {
    onChange([
      ...projects,
      {
        id: uuidv4(),
        name: "",
        description: "",
        url: "",
        startDate: "",
        endDate: "",
      },
    ]);
  }, [projects, onChange]);

  const removeProject = useCallback((index: number) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    onChange(updatedProjects);
  }, [projects, onChange]);

  const moveProject = useCallback((index: number, direction: "up" | "down") => {
    const updatedProjects = [...projects];
    const newIndex = direction === "up" ? index - 1 : index + 1;
    if (newIndex >= 0 && newIndex < updatedProjects.length) {
      [updatedProjects[index], updatedProjects[newIndex]] = [updatedProjects[newIndex], updatedProjects[index]];
      onChange(updatedProjects);
    }
  }, [projects, onChange]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Projects</h2>
        <p className="text-muted-foreground">Add notable projects to showcase your work</p>
      </div>
      <Accordion type="multiple" defaultValue={["proj0"]} className="space-y-4">
        {projects.map((proj, index) => (
          <AccordionItem key={proj.id} value={`proj${index}`} className="border rounded-lg p-2">
            <div className="flex items-center justify-between">
              <AccordionTrigger className="hover:no-underline">
                <div className="text-left">
                  <h3 className="font-medium">{proj.name || `Project ${index + 1}`}</h3>
                  {proj.startDate && (
                    <p className="text-sm text-muted-foreground">
                      {proj.startDate} - {proj.endDate || "Present"}
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
                    removeProject(index);
                  }}
                  disabled={projects.length === 1}
                  aria-label={`Remove project ${index + 1}`}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    moveProject(index, "up");
                  }}
                  disabled={index === 0}
                  aria-label={`Move project ${index + 1} up`}
                >
                  <MoveUp className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    moveProject(index, "down");
                  }}
                  disabled={index === projects.length - 1}
                  aria-label={`Move project ${index + 1} down`}
                >
                  <MoveDown className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <AccordionContent className="pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor={`project-name-${index}`}>Project Name</Label>
                  <Input
                    id={`project-name-${index}`}
                    placeholder="e.g., Personal Portfolio"
                    value={proj.name}
                    onChange={(e) => handleProjectChange(index, "name", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`project-url-${index}`}>Project URL (Optional)</Label>
                  <Input
                    id={`project-url-${index}`}
                    placeholder="e.g., https://github.com/yourproject"
                    value={proj.url}
                    onChange={(e) => handleProjectChange(index, "url", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`start-date-${index}`}>Start Date</Label>
                  <Input
                    id={`start-date-${index}`}
                    type="date"
                    placeholder="MM/YYYY"
                    pattern="^(0[1-9]|1[0-2])\/[0-9]{4}$"
                    value={proj.startDate}
                    onChange={(e) => handleProjectChange(index, "startDate", e.target.value)}
                    title="Please enter a date in MM/YYYY format"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`end-date-${index}`}>End Date (or Ongoing)</Label>
                  <Input
                    id={`end-date-${index}`}
                    type="date"
                    placeholder="MM/YYYY"
                    pattern="^(0[1-9]|1[0-2])\/[0-9]{4}$"
                    value={proj.endDate}
                    onChange={(e) => handleProjectChange(index, "endDate", e.target.value)}
                    title="Please enter a date in MM/YYYY format"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor={`description-${index}`}>Description</Label>
                  <Textarea
                    id={`description-${index}`}
                    placeholder="Describe the project, your role, and technologies used"
                    className="min-h-[150px]"
                    value={proj.description}
                    onChange={(e) => handleProjectChange(index, "description", e.target.value)}
                  />
                  <p className="text-sm text-muted-foreground">
                    Tip: Highlight your contributions and the impact of the project.
                  </p>
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
  );
}

// Sub-component for Customization Section
interface CustomizationSectionProps {
  customization: {
    colors: { primary: string; secondary: string; accent: string };
    fonts: { heading: string; body: string };
    layout: string;
  };
  onChange: (customization: CustomizationSectionProps["customization"]) => void;
}

function CustomizationSection({ customization, onChange }: CustomizationSectionProps) {
  const handleColorChange = useCallback((colorType: keyof typeof customization.colors, value: string) => {
    const isValidHex = /^#[0-9A-F]{6}$/i.test(value);
    if (isValidHex) {
      onChange({
        ...customization,
        colors: { ...customization.colors, [colorType]: value },
      });
    }
  }, [customization, onChange]);

  const handleFontChange = useCallback((fontType: keyof typeof customization.fonts, value: string) => {
    onChange({
      ...customization,
      fonts: { ...customization.fonts, [fontType]: value },
    });
  }, [customization, onChange]);

  const handleLayoutChange = useCallback((layout: string) => {
    onChange({ ...customization, layout });
  }, [customization, onChange]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Customize Resume</h2>
        <p className="text-muted-foreground">Personalize the appearance of your resume</p>
      </div>
      <div className="space-y-8">
        {/* Colors */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Palette size={20} />
            <h3 className="font-medium">Colors</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { id: "primary", label: "Primary Color" },
              { id: "secondary", label: "Secondary Color" },
              { id: "accent", label: "Accent Color" },
            ].map(({ id, label }) => (
              <div key={id} className="space-y-2">
                <Label htmlFor={`color-${id}`}>{label}</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id={`color-${id}`}
                    type="text"
                    placeholder="#3b82f6"
                    value={customization.colors[id as keyof typeof customization.colors]}
                    onChange={(e) => handleColorChange(id as keyof typeof customization.colors, e.target.value)}
                  />
                  <input
                    type="color"
                    value={customization.colors[id as keyof typeof customization.colors]}
                    onChange={(e) => handleColorChange(id as keyof typeof customization.colors, e.target.value)}
                    className="w-10 h-10 border rounded"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Fonts */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Type size={20} />
            <h3 className="font-medium">Fonts</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { id: "heading", label: "Heading Font" },
              { id: "body", label: "Body Font" },
            ].map(({ id, label }) => (
              <div key={id} className="space-y-2">
                <Label htmlFor={`font-${id}`}>{label}</Label>
                <Select
                  value={customization.fonts[id as keyof typeof customization.fonts]}
                  onValueChange={(value) => handleFontChange(id as keyof typeof customization.fonts, value)}
                >
                  <SelectTrigger id={`font-${id}`}>
                    <SelectValue placeholder="Select font" />
                  </SelectTrigger>
                  <SelectContent>
                    {["Inter", "Roboto", "Open Sans", "Lato", "Montserrat"].map((font) => (
                      <SelectItem key={font} value={font}>{font}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>
        </div>
        {/* Layout */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Layout size={20} />
            <h3 className="font-medium">Layout</h3>
          </div>
          <div className="space-y-2">
            <Label htmlFor="layout">Resume Layout</Label>
            <Select
              value={customization.layout}
              onValueChange={handleLayoutChange}
            >
              <SelectTrigger id="layout">
                <SelectValue placeholder="Select layout" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Standard</SelectItem>
                <SelectItem value="two-column">Two-Column</SelectItem>
                <SelectItem value="compact">Compact</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
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

    resumeData.projects.forEach((proj) => {
      const projFields = [proj.name, proj.description, proj.startDate];
      filledFields += projFields.filter((val) => val.trim() !== "").length;
      totalFields += projFields.length;
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

  const handleCustomizationChange = useCallback((customization: CustomizationSectionProps["customization"]) => {
    setCustomization(customization);
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
            {/* <Separator className="my-4" /> */}
            {/* <div className="space-y-1">
              <h3 className="font-medium text-sm mb-2">Optional Sections</h3>
              {["Certifications", "Languages", "References", "Custom Section"].map((section) => (
                <Button key={section} variant="ghost" className="w-full justify-start text-muted-foreground">
                  <Plus className="mr-2 h-4 w-4" />
                  {section}
                </Button>
              ))}
            </div> */}
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
            {activeSection === "education" && (
              <EducationSection education={resumeData.education} onChange={handleEducationChange} />
            )}
            {activeSection === "skills" && (
              <SkillsSection skills={resumeData.skills} onChange={handleSkillsChange} />
            )}
            {activeSection === "projects" && (
              <ProjectsSection projects={resumeData.projects} onChange={handleProjectsChange} />
            )}
            {activeSection === "customization" && (
              <CustomizationSection customization={customization} onChange={handleCustomizationChange} />
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
  );
}