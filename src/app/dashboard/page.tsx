"use client";

import { useState } from "react";
import "./globals.css"; 
import {Activity, CheckCircle, ChevronRight, Code,FileText, MessageSquare, Sparkles, Star, TrendingUp } from "lucide-react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeProvider } from "@/components/theme-provider";  
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  const [progress, setProgress] = useState(68);

  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/90">
        <main className="container px-4 py-6 md:py-8">
          <div className="grid gap-4 md:grid-cols-4 mb-8">
            <Card className="bg-gradient-to-br from-background to-background/80 border border-purple-500/20 shadow-lg shadow-purple-500/5">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center">
                  <Star className="mr-2 h-4 w-4 text-yellow-500" />
                  Practice Sessions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">24</div>
                <div className="flex items-center text-xs text-emerald-500 font-medium">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  +4 from last week
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-background to-background/80 border border-blue-500/20 shadow-lg shadow-blue-500/5">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-blue-500" />
                  Questions Completed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">142</div>
                <div className="flex items-center text-xs text-emerald-500 font-medium">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  +12 from last week
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-background to-background/80 border border-emerald-500/20 shadow-lg shadow-emerald-500/5">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center">
                  <MessageSquare className="mr-2 h-4 w-4 text-emerald-500" />
                  Mock Interviews
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">8</div>
                <div className="flex items-center text-xs text-emerald-500 font-medium">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  +2 from last week
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-background to-background/80 border border-rose-500/20 shadow-lg shadow-rose-500/5">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center">
                  <Sparkles className="mr-2 h-4 w-4 text-rose-500" />
                  Readiness Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">78%</div>
                <div className="flex items-center text-xs text-emerald-500 font-medium">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  +5% from last week
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3">
            {/* Progress Section */}
            <Card className="md:col-span-2 bg-gradient-to-br from-background to-background/80 border-t border-t-indigo-500/30 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="mr-2 h-6 w-1 rounded-full bg-indigo-500"></div>
                  Your Progress
                </CardTitle>
                <CardDescription>
                  Track your interview preparation journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">
                        Overall Completion
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {progress}%
                      </div>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-blue-500"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500"></div>
                        <div className="text-sm font-medium">Technical</div>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-muted-foreground">
                          85% complete
                        </div>
                        <Badge
                          variant="outline"
                          className="text-[10px] h-5 bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                        >
                          Advanced
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500"></div>
                        <div className="text-sm font-medium">Behavioral</div>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue-400 to-indigo-500"
                          style={{ width: "72%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-muted-foreground">
                          72% complete
                        </div>
                        <Badge
                          variant="outline"
                          className="text-[10px] h-5 bg-blue-500/10 text-blue-500 border-blue-500/20"
                        >
                          Intermediate
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-500"></div>
                        <div className="text-sm font-medium">System Design</div>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-purple-400 to-pink-500"
                          style={{ width: "45%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-muted-foreground">
                          45% complete
                        </div>
                        <Badge
                          variant="outline"
                          className="text-[10px] h-5 bg-purple-500/10 text-purple-500 border-purple-500/20"
                        >
                          Beginner
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-background to-background/80 border-t border-t-purple-500/30 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="mr-2 h-6 w-1 rounded-full bg-purple-500"></div>
                  Recommended
                </CardTitle>
                <CardDescription>Based on your progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-purple-500/5 to-background p-4 transition-all hover:border-purple-500/30 hover:shadow-md">
                    <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-purple-500/10 blur-xl group-hover:bg-purple-500/20"></div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10 text-purple-500 group-hover:bg-purple-500/20">
                        <Code className="h-5 w-5" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          System Design Basics
                        </p>
                        <p className="text-xs text-muted-foreground">
                          5 topics to review
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 rounded-full"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-blue-500/5 to-background p-4 transition-all hover:border-blue-500/30 hover:shadow-md">
                    <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-blue-500/10 blur-xl group-hover:bg-blue-500/20"></div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-500 group-hover:bg-blue-500/20">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          Behavioral Questions
                        </p>
                        <p className="text-xs text-muted-foreground">
                          3 new questions added
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 rounded-full"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-emerald-500/5 to-background p-4 transition-all hover:border-emerald-500/30 hover:shadow-md">
                    <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-emerald-500/10 blur-xl group-hover:bg-emerald-500/20"></div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500/20">
                        <Activity className="h-5 w-5" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          Algorithm Challenge
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Daily coding problem
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 rounded-full"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="w-full">
                  View All Recommendations
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Upcoming Interviews & Recent Activity */}
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            {/* Upcoming Interviews */}
            <Card className="bg-gradient-to-br from-background to-background/80 border-t border-t-blue-500/30 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="mr-2 h-6 w-1 rounded-full bg-blue-500"></div>
                  Upcoming Interviews
                </CardTitle>
                <CardDescription>
                  Your scheduled mock interviews
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-blue-500/5 to-background p-4 transition-all hover:border-blue-500/30 hover:shadow-md">
                    <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-blue-500/10 blur-xl group-hover:bg-blue-500/20"></div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 flex-col items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-500/20">
                        <span className="text-xs font-semibold">MAY</span>
                        <span className="text-lg font-bold leading-none">
                          02
                        </span>
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          Frontend Developer Interview
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Tomorrow at 10:00 AM
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-blue-500/20 text-blue-500 hover:bg-blue-500/10"
                      >
                        Prepare
                      </Button>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-purple-500/5 to-background p-4 transition-all hover:border-purple-500/30 hover:shadow-md">
                    <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-purple-500/10 blur-xl group-hover:bg-purple-500/20"></div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 flex-col items-center justify-center rounded-xl bg-purple-500/10 text-purple-500 group-hover:bg-purple-500/20">
                        <span className="text-xs font-semibold">MAY</span>
                        <span className="text-lg font-bold leading-none">
                          05
                        </span>
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          System Design Interview
                        </p>
                        <p className="text-xs text-muted-foreground">
                          May 5, 2025 at 2:00 PM
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-purple-500/20 text-purple-500 hover:bg-purple-500/10"
                      >
                        Prepare
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="w-full">
                  View All Interviews
                </Button>
              </CardFooter>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-gradient-to-br from-background to-background/80 border-t border-t-emerald-500/30 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="mr-2 h-6 w-1 rounded-full bg-emerald-500"></div>
                  Recent Activity
                </CardTitle>
                <CardDescription>
                  Your recent preparation activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="mb-4 w-full justify-start">
                    <TabsTrigger value="all" className="rounded-full">
                      All
                    </TabsTrigger>
                    <TabsTrigger value="practice" className="rounded-full">
                      Practice
                    </TabsTrigger>
                    <TabsTrigger value="interviews" className="rounded-full">
                      Interviews
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="all" className="space-y-4 mt-2">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                          <Code className="h-5 w-5" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-2 border-background bg-background">
                          <span className="flex h-full w-full items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-emerald-50">
                            +5
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          Completed "Binary Search Trees" practice
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Today at 9:42 AM
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                          <MessageSquare className="h-5 w-5" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-2 border-background bg-background">
                          <span className="flex h-full w-full items-center justify-center rounded-full bg-blue-500 text-[10px] font-bold text-blue-50">
                            +10
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          Completed mock interview with Alex
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Yesterday at 2:15 PM
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10 text-purple-500">
                          <FileText className="h-5 w-5" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-2 border-background bg-background">
                          <span className="flex h-full w-full items-center justify-center rounded-full bg-purple-500 text-[10px] font-bold text-purple-50">
                            +3
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          Added notes to "System Design Basics"
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Yesterday at 11:30 AM
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="practice" className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                          <Code className="h-5 w-5" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-2 border-background bg-background">
                          <span className="flex h-full w-full items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-emerald-50">
                            +5
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          Completed "Binary Search Trees" practice
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Today at 9:42 AM
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="interviews" className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                          <MessageSquare className="h-5 w-5" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-2 border-background bg-background">
                          <span className="flex h-full w-full items-center justify-center rounded-full bg-blue-500 text-[10px] font-bold text-blue-50">
                            +10
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          Completed mock interview with Alex
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Yesterday at 2:15 PM
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="w-full">
                  View All Activity
                </Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}