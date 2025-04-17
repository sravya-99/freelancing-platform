"use client"

import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Mic, MicOff, Video, VideoOff, MessageSquare, PauseCircle, ScreenShare, Share2 } from "lucide-react"
import { useState } from "react"

export function ScreenpipeControls() {
  const [micEnabled, setMicEnabled] = useState(true)
  const [videoEnabled, setVideoEnabled] = useState(true)
  const [recording, setRecording] = useState(true)

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <Button variant={micEnabled ? "default" : "outline"} size="icon" onClick={() => setMicEnabled(!micEnabled)}>
          {micEnabled ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
        </Button>
        <Button
          variant={videoEnabled ? "default" : "outline"}
          size="icon"
          onClick={() => setVideoEnabled(!videoEnabled)}
        >
          {videoEnabled ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4" />}
        </Button>
        <Button variant="outline" size="icon">
          <ScreenShare className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <MessageSquare className="h-4 w-4" />
        </Button>
        <Button variant={recording ? "default" : "outline"} size="icon" onClick={() => setRecording(!recording)}>
          <PauseCircle className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Share2 className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label>Video Quality</Label>
            <span className="text-sm text-muted-foreground">High</span>
          </div>
          <Slider defaultValue={[75]} max={100} step={1} />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label>Frame Rate</Label>
            <span className="text-sm text-muted-foreground">30 fps</span>
          </div>
          <Slider defaultValue={[60]} max={100} step={1} />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="auto-record">Auto Record Session</Label>
          <Switch id="auto-record" checked={recording} onCheckedChange={setRecording} />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="activity-tracking">Activity Tracking</Label>
          <Switch id="activity-tracking" defaultChecked />
        </div>
      </div>

      <div className="pt-4 flex justify-between">
        <Button variant="outline">End Session</Button>
        <Button variant="destructive">Emergency Stop</Button>
      </div>
    </div>
  )
}
