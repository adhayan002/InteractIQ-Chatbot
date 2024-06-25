import { cn } from "@/lib/utils"
import GridPattern from "@/components/magicui/grid-pattern"
function page() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex items-center justify-center">
        <div className="container px-4 md:px-6 text-center">
            <div className="space-y-4">
                <h1 className="text-3xl font-bold mt-10 tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Welcome to Interact<span className="text-primary">IQ</span>
                </h1>
                <p className="mx-auto max-w-4xl text-muted-foreground md:text-xl">
                    Powered by <span>Gemini</span>, InteractIQ is here to provide seamless and intuitive communication tailored just for you. Embrace the power of smart conversation and make your everyday tasks easier, faster, and more enjoyable. 
                </p>
                
            </div>
            
        </div>
        <GridPattern
                    squares={[
                    [4, 4],
                    [5, 1],
                    [8, 2],
                    [6, 6],
                    [10, 5],
                    [13, 3],
                    ]}
                    className={cn(
                    "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-50%] w-full h-[200%] skew-y-12",
                    )}
                />
    </section>
  )
}

export default page