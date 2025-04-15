"use client";

import { LandingPage } from "@/components/LandingPage";
import BlurFade from "@/components/ui/blur-fade";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { GlowingStarsBackgroundCard } from "@/components/ui/glowing-stars";

export default function Home() {
  const features = [
    {
      title: "Lightning Fast",
      description: "Optimized for performance with instant load times",
      icon: "⚡",
    },
    {
      title: "Secure by Design",
      description: "Built with enterprise-grade security features",
      icon: "🔒",
    },
    {
      title: "Intuitive UI",
      description: "Beautiful interfaces that just make sense",
      icon: "🎨",
    },
    {
      title: "24/7 Support",
      description: "Our team is always here to help you",
      icon: "🛟",
    },
  ];

  return (
    <main className="bg-black min-h-[100vh] pb-24 relative">
      <LandingPage />
      <div className="bg-black relative bottom-20">
        <BlurFade delay={1.25}>
          <NeonGradientCard
            className="max-w-[1000px] max-h-fit mx-auto"
            borderSize={1}
            neonColors={{
              firstColor: "yellow , orange",
              secondColor: "blue, green",
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/dashboard.png"
                alt="Dashboard Image"
                width={1000}
                height={563}
                quality={95}
                priority={true}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFdwI2QOQvhwAAAABJRU5ErkJggg=="
              />
            </div>
          </NeonGradientCard>
        </BlurFade>
      </div>

      {/* Metrics */}
      <div className="mt-[-40px] px-4 md:px-10 max-w-6xl mx-auto text-white text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-xl font-semibold"
        >
          <div>
            <span className="text-yellow-400 text-3xl block">1,000+</span>
            Problems Solved
          </div>
          <div>
            <span className="text-green-400 text-3xl block">500+</span>
            Companies Covered
          </div>
          <div>
            <span className="text-blue-400 text-3xl block">10,000+</span>
            Users Registered
          </div>
        </motion.div>
      </div>

      {/* Feature Cards */}
      <h2 className="text-4xl md:text-6xl font-bold text-center text-white mb-16 mt-20">
        Powerful Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {features.map((feature, idx) => (
          <GlowingStarsBackgroundCard key={idx} className="min-h-[220px]">
            <div className="flex flex-col h-full justify-start">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          </GlowingStarsBackgroundCard>
        ))}
      </div>

      {/* Testimonials */}
      <div className="mt-20 px-6 md:px-10 max-w-5xl mx-auto">
        <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-8">
          Loved by Learners Worldwide ❤️
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 text-white">
          <NeonGradientCard
            borderSize={1}
            neonColors={{ firstColor: "cyan", secondColor: "purple" }}
          >
            <div className="p-4">
              “InterPrepAi helped me land my dream job at Google! The mock
              interviews and topic filtering is next-level.” –{" "}
              <span className="text-yellow-300">Ananya S.</span>
            </div>
          </NeonGradientCard>
          <NeonGradientCard
            borderSize={1}
            neonColors={{ firstColor: "pink", secondColor: "orange" }}
          >
            <div className="p-4">
              “I love how organized and user-friendly it is. It’s like LeetCode
              + Resume builder in one!” –{" "}
              <span className="text-green-300">Ravi K.</span>
            </div>
          </NeonGradientCard>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg shadow-yellow-300/30 px-6 py-3 text-base font-bold hover:scale-105 transition">
          <a href="/sign-up">Join InterPrepAi Now 🚀</a>
        </Button>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <h2 className="text-white text-sm font-bold text-center">
          Made with ❤️ by{" "}
          <a
            href="https://github.com/beetlejusse"
            className="underline hover:text-yellow-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            beetlejusse
          </a>
        </h2>
      </div>
    </main>
  );
}
