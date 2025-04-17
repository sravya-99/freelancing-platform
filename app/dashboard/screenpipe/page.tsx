import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScreenpipeMonitor } from "@/components/dashboard/screenpipe-monitor"
import { ScreenpipeSessionsList } from "@/components/dashboard/screenpipe-sessions-list"
import { ScreenpipeControls } from "@/components/dashboard/screenpipe-controls"

export default function ScreenpipePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Screenpipe</h1>
          <p className="text-muted-foreground">Monitor and manage your screen sharing sessions</p>
        </div>
        <div className="flex items-center gap-2">
          <Button>Start New Session</Button>
        </div>
      </div>

      <Tabs defaultValue="monitor" className="space-y-4">
        <TabsList>
          <TabsTrigger value="monitor">Live Monitor</TabsTrigger>
          <TabsTrigger value="sessions">Past Sessions</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="monitor" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Monitoring Session</CardTitle>
              <CardDescription>E-commerce Website Redesign - with Acme Inc.</CardDescription>
            </CardHeader>
            <CardContent>
              <ScreenpipeMonitor />
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Session Controls</CardTitle>
              </CardHeader>
              <CardContent>
                <ScreenpipeControls />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Session Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Client</p>
                    <p>Acme Inc.</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Project</p>
                    <p>E-commerce Website Redesign</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Duration</p>
                    <p>01:24:36</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Status</p>
                    <p className="text-green-500">Active</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Participants</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs">JD</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs">AI</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs">SM</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sessions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Past Sessions</CardTitle>
              <CardDescription>View and manage your previous monitoring sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <ScreenpipeSessionsList />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
