"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "@/components/ui/chart"

export function WalletOverview() {
  const data = [
    { month: "Jan", earnings: 2500, pending: 500, escrow: 1000 },
    { month: "Feb", earnings: 3200, pending: 800, escrow: 1500 },
    { month: "Mar", earnings: 4100, pending: 1200, escrow: 2000 },
    { month: "Apr", earnings: 3800, pending: 900, escrow: 1800 },
    { month: "May", earnings: 4500, pending: 1100, escrow: 2200 },
    { month: "Jun", earnings: 5200, pending: 1300, escrow: 2500 },
    { month: "Jul", earnings: 6100, pending: 1500, escrow: 3000 },
    { month: "Aug", earnings: 5800, pending: 1400, escrow: 2800 },
    { month: "Sep", earnings: 6500, pending: 1600, escrow: 3200 },
    { month: "Oct", earnings: 7200, pending: 1800, escrow: 3500 },
    { month: "Nov", earnings: 8100, pending: 2000, escrow: 4000 },
    { month: "Dec", earnings: 8500, pending: 2100, escrow: 4200 },
  ]

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
        <XAxis dataKey="month" stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
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
          formatter={(value) => [`$${value}`, undefined]}
        />
        <Legend />
        <Line type="monotone" dataKey="earnings" stroke="#3B82F6" strokeWidth={2} activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="pending" stroke="#10B981" strokeWidth={2} />
        <Line type="monotone" dataKey="escrow" stroke="#8B5CF6" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}
