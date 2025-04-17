import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export function MilestonePayments() {
  const milestones = [
    {
      id: 1,
      project: "E-commerce Website Redesign",
      milestone: "Homepage and Product Listings",
      amount: "$1,200.00",
      status: "Released",
      progress: 100,
      dueDate: "Dec 5, 2023",
    },
    {
      id: 2,
      project: "E-commerce Website Redesign",
      milestone: "Shopping Cart and Checkout",
      amount: "$1,500.00",
      status: "In Escrow",
      progress: 75,
      dueDate: "Dec 15, 2023",
    },
    {
      id: 3,
      project: "Mobile App Development",
      milestone: "User Authentication",
      amount: "$800.00",
      status: "Released",
      progress: 100,
      dueDate: "Dec 1, 2023",
    },
    {
      id: 4,
      project: "Mobile App Development",
      milestone: "Core Functionality",
      amount: "$1,800.00",
      status: "In Escrow",
      progress: 60,
      dueDate: "Dec 20, 2023",
    },
    {
      id: 5,
      project: "Brand Identity Design",
      milestone: "Logo and Brand Guidelines",
      amount: "$950.00",
      status: "Pending",
      progress: 90,
      dueDate: "Dec 12, 2023",
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Project</TableHead>
          <TableHead>Milestone</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Progress</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Due Date</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {milestones.map((milestone) => (
          <TableRow key={milestone.id}>
            <TableCell className="font-medium">{milestone.project}</TableCell>
            <TableCell>{milestone.milestone}</TableCell>
            <TableCell>{milestone.amount}</TableCell>
            <TableCell>
              <div className="flex flex-col gap-1 w-32">
                <Progress value={milestone.progress} className="h-2" />
                <span className="text-xs text-muted-foreground">{milestone.progress}%</span>
              </div>
            </TableCell>
            <TableCell>
              <Badge
                variant={
                  milestone.status === "Released"
                    ? "default"
                    : milestone.status === "In Escrow"
                      ? "secondary"
                      : "outline"
                }
              >
                {milestone.status}
              </Badge>
            </TableCell>
            <TableCell>{milestone.dueDate}</TableCell>
            <TableCell className="text-right">
              {milestone.status === "Pending" && (
                <Button size="sm" variant="outline">
                  Request Release
                </Button>
              )}
              {milestone.status === "In Escrow" && (
                <Button size="sm" variant="outline">
                  View Details
                </Button>
              )}
              {milestone.status === "Released" && (
                <Button size="sm" variant="ghost">
                  View Receipt
                </Button>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
