import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function ProjectsList() {
  const projects = [
    {
      id: 1,
      name: "E-commerce Website Redesign",
      client: "Acme Inc.",
      progress: 75,
      status: "In Progress",
      dueDate: "Dec 15, 2023",
      avatar: "AI",
    },
    {
      id: 2,
      name: "Mobile App Development",
      client: "TechCorp",
      progress: 40,
      status: "In Progress",
      dueDate: "Jan 20, 2024",
      avatar: "TC",
    },
    {
      id: 3,
      name: "Brand Identity Design",
      client: "StartupX",
      progress: 90,
      status: "Review",
      dueDate: "Dec 5, 2023",
      avatar: "SX",
    },
    {
      id: 4,
      name: "Marketing Campaign",
      client: "Global Media",
      progress: 20,
      status: "In Progress",
      dueDate: "Feb 10, 2024",
      avatar: "GM",
    },
  ]

  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <div key={project.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarFallback>{project.avatar}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">{project.name}</h3>
              <p className="text-sm text-muted-foreground">{project.client}</p>
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-1 w-32">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{project.progress}%</span>
            </div>
            <Progress value={project.progress} className="h-2" />
          </div>
          <div className="flex items-center gap-2">
            <Badge variant={project.status === "Review" ? "outline" : "default"}>{project.status}</Badge>
          </div>
        </div>
      ))}
    </div>
  )
}
