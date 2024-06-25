import { Chatbot } from "@/components/Chatbot";
import FlipText from "@/components/magicui/flip-text";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center p-14 overflow-hidden">
      <FlipText
        className="text-2xl font-bold tracking-[-0.1em] text-black md:text-7xl md:leading-[5rem]"
        word="Welcome!"
      />
      <Chatbot/>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
        )}
      />
    </main>
  );
}
