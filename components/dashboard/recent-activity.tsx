import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: "milestone",
      title: "Milestone Completed",
      description: "E-commerce Website Redesign - Homepage",
      time: "2 hours ago",
      icon: "M",
    },
    {
      id: 2,
      type: "payment",
      title: "Payment Received",
      description: "$1,200 for Mobile App Development",
      time: "Yesterday",
      icon: "P",
    },
    {
      id: 3,
      type: "message",
      title: "New Message",
      description: "From John regarding Brand Identity Design",
      time: "Yesterday",
      icon: "M",
    },
    {
      id: 4,
      type: "screenpipe",
      title: "Screenpipe Session",
      description: "90 minutes session with TechCorp",
      time: "2 days ago",
      icon: "S",
    },
    {
      id: 5,
      type: "project",
      title: "New Project",
      description: "Marketing Campaign for Global Media",
      time: "3 days ago",
      icon: "P",
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex gap-4">
          <Avatar className="h-9 w-9">
            <AvatarFallback className="bg-primary/20 text-primary">{activity.icon}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">{activity.title}</p>
            <p className="text-sm text-muted-foreground">{activity.description}</p>
            <p className="text-xs text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
