import { Card, CardContent } from "@/components/ui/card"
import { Bot } from "lucide-react"

export function AiSummary() {
  return (
    <Card className="bg-secondary/30 border-primary/20">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <div className="bg-primary/20 p-2 rounded-full">
            <Bot className="h-5 w-5 text-primary" />
          </div>
          <div className="space-y-4">
            <p className="text-sm">
              <strong>Weekly Summary:</strong> You've made significant progress on the E-commerce Website Redesign
              project, completing 3 milestones and logging 28.5 hours this week. The client has approved all
              deliverables so far.
            </p>
            <p className="text-sm">
              <strong>Performance Insights:</strong> Your productivity is 15% higher than last week, with most work
              completed during morning hours (9am-12pm). The Mobile App Development project requires attention as it's
              currently 5% behind schedule.
            </p>
            <p className="text-sm">
              <strong>Financial Update:</strong> You've earned $3,200 this week with $1,800 in pending milestone
              approvals. Your hourly rate average has increased by $5 compared to last month.
            </p>
            <p className="text-sm">
              <strong>Recommendation:</strong> Schedule a Screenpipe session with TechCorp to discuss the Mobile App
              Development timeline and allocate at least 10 hours to this project next week to get back on schedule.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
