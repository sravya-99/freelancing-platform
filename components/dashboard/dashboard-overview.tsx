"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "@/components/ui/chart"

export function DashboardOverview() {
  const data = [
    { name: "Jan", earnings: 4000, hours: 24 },
    { name: "Feb", earnings: 3000, hours: 18 },
    { name: "Mar", earnings: 5000, hours: 30 },
    { name: "Apr", earnings: 2780, hours: 16 },
    { name: "May", earnings: 1890, hours: 12 },
    { name: "Jun", earnings: 2390, hours: 14 },
    { name: "Jul", earnings: 3490, hours: 22 },
    { name: "Aug", earnings: 4000, hours: 24 },
    { name: "Sep", earnings: 6000, hours: 36 },
    { name: "Oct", earnings: 5500, hours: 32 },
    { name: "Nov", earnings: 7000, hours: 42 },
    { name: "Dec", earnings: 8500, hours: 50 },
  ]

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: 10,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
        <XAxis dataKey="name" stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#6B7280"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#1F2937",
            borderColor: "#374151",
            borderRadius: "0.375rem",
            fontSize: "0.875rem",
          }}
        />
        <Line
          type="monotone"
          dataKey="earnings"
          stroke="#3B82F6"
          strokeWidth={2}
          dot={{ r: 4, strokeWidth: 2 }}
          activeDot={{ r: 6, strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
