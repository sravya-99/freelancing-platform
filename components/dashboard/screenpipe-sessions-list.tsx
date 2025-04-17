import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Eye } from "lucide-react"

export function ScreenpipeSessionsList() {
  const sessions = [
    {
      id: 1,
      project: "E-commerce Website Redesign",
      client: "Acme Inc.",
      date: "Dec 10, 2023",
      duration: "1h 45m",
      status: "Completed",
      size: "1.2 GB",
    },
    {
      id: 2,
      project: "Mobile App Development",
      client: "TechCorp",
      date: "Dec 8, 2023",
      duration: "2h 15m",
      status: "Completed",
      size: "1.8 GB",
    },
    {
      id: 3,
      project: "Brand Identity Design",
      client: "StartupX",
      date: "Dec 5, 2023",
      duration: "1h 20m",
      status: "Completed",
      size: "950 MB",
    },
    {
      id: 4,
      project: "E-commerce Website Redesign",
      client: "Acme Inc.",
      date: "Dec 1, 2023",
      duration: "1h 30m",
      status: "Completed",
      size: "1.1 GB",
    },
    {
      id: 5,
      project: "Marketing Campaign",
      client: "Global Media",
      date: "Nov 28, 2023",
      duration: "45m",
      status: "Completed",
      size: "500 MB",
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Project</TableHead>
          <TableHead>Client</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Duration</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Size</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sessions.map((session) => (
          <TableRow key={session.id}>
            <TableCell className="font-medium">{session.project}</TableCell>
            <TableCell>{session.client}</TableCell>
            <TableCell>{session.date}</TableCell>
            <TableCell>{session.duration}</TableCell>
            <TableCell>
              <Badge variant="outline">{session.status}</Badge>
            </TableCell>
            <TableCell>{session.size}</TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-2">
                <Button variant="ghost" size="icon">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
