"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "@/components/ui/chart"

export function TaskAnalytics() {
  const data = [
    { name: "Design", completed: 12, inProgress: 5, blocked: 2 },
    { name: "Frontend", completed: 8, inProgress: 7, blocked: 1 },
    { name: "Backend", completed: 10, inProgress: 4, blocked: 0 },
    { name: "Testing", completed: 6, inProgress: 8, blocked: 3 },
    { name: "Deployment", completed: 4, inProgress: 2, blocked: 1 },
  ]

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
        <XAxis dataKey="name" stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
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
        <Bar dataKey="completed" stackId="a" fill="#10B981" />
        <Bar dataKey="inProgress" stackId="a" fill="#3B82F6" />
        <Bar dataKey="blocked" stackId="a" fill="#EF4444" />
      </BarChart>
    </ResponsiveContainer>
  )
}
