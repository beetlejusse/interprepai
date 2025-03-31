import { LandingPage } from "@/components/LandingPage";
import BlurFade from "@/components/ui/blur-fade";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black h-[calc(100vh-58px)]">
      <LandingPage />
      <div className="bg-black relative bottom-24">
        <BlurFade delay={0.25 * 5}>
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
    </main>
  );
}
