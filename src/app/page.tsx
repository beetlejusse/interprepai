import { LandingPage } from "@/components/LandingPage";
import BlurFade from "@/components/ui/blur-fade";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black h-[calc(100vh-58px)]">
      <LandingPage />
      <div className="bg-black relative bottom-16">
        <BlurFade delay={0.25 * 5}>
          <NeonGradientCard
            className="max-w-[1000px] h-fit mx-auto"
            borderSize={1}
            neonColors={{
              firstColor: "yellow , orange",
              secondColor: "blue, green",
            }}
          >
            <Image
              src={"/dashboard.png"}
              alt="Image"
              width={1920}
              height={1080}
            ></Image>
          </NeonGradientCard>
        </BlurFade>
      </div>
    </main>
  );
}
