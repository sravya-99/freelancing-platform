"use client"

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "@/components/ui/chart"

export function AnalyticsOverview() {
  const data = [
    { date: "Mon", commits: 4, tasks: 3, hours: 6 },
    { date: "Tue", commits: 7, tasks: 5, hours: 8 },
    { date: "Wed", commits: 5, tasks: 4, hours: 7 },
    { date: "Thu", commits: 10, tasks: 6, hours: 9 },
    { date: "Fri", commits: 8, tasks: 7, hours: 8 },
    { date: "Sat", commits: 3, tasks: 2, hours: 4 },
    { date: "Sun", commits: 1, tasks: 1, hours: 2 },
  ]

  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
        <XAxis dataKey="date" stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip
          contentStyle={{
            backgroundColor: "#1F2937",
            borderColor: "#374151",
            borderRadius: "0.375rem",
            fontSize: "0.875rem",
          }}
        />
        <Legend />
        <Area type="monotone" dataKey="commits" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
        <Area type="monotone" dataKey="tasks" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
        <Area type="monotone" dataKey="hours" stackId="1" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.6} />
      </AreaChart>
    </ResponsiveContainer>
  )
}
