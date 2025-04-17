"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Maximize2, Minimize2 } from "lucide-react"

export function ScreenpipeMonitor() {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <div className={`relative ${isFullscreen ? "fixed inset-0 z-50 bg-background p-6" : ""}`}>
      <div className="relative aspect-video w-full bg-black rounded-lg overflow-hidden border border-border">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-foreground/70">Live screen sharing session</p>
            <div className="w-16 h-16 mx-auto my-4 rounded-full bg-primary/20 animate-pulse"></div>
            <p className="text-sm text-foreground/50">Streaming from John's device</p>
          </div>
        </div>

        {/* Overlay controls */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          <Button variant="secondary" size="icon" onClick={toggleFullscreen}>
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </Button>
        </div>

        {/* Activity indicators */}
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-background/80 px-3 py-1 rounded-full">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="text-xs">Live</span>
        </div>
      </div>
    </div>
  )
}
