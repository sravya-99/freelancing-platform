import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              The Future of <span className="gradient-text">Freelancing</span> is Here
            </h1>
            <p className="text-xl text-foreground/80 max-w-lg">
              Srazuka connects clients with top freelancers through real-time monitoring, data analytics, and secure
              crypto payments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
            <div className="pt-6 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 border-2 border-background"
                  />
                ))}
              </div>
              <p className="text-sm text-foreground/70">Joined by 2,000+ freelancers and clients</p>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="w-full h-[400px] md:h-[500px] relative rounded-lg overflow-hidden border border-border/50 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-background z-10"></div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Srazuka Platform Dashboard"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 p-4 bg-card border border-border rounded-lg shadow-lg max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <p className="text-sm font-medium">Live Monitoring Active</p>
              </div>
              <div className="h-1 w-full bg-secondary mb-2">
                <div className="h-1 w-3/4 bg-primary"></div>
              </div>
              <p className="text-xs text-foreground/70">Project completion: 75%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
