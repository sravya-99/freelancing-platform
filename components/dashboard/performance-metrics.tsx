"use client"

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Legend,
} from "@/components/ui/chart"

export function PerformanceMetrics() {
  const data = [
    {
      subject: "Code Quality",
      current: 85,
      average: 70,
      fullMark: 100,
    },
    {
      subject: "Productivity",
      current: 92,
      average: 80,
      fullMark: 100,
    },
    {
      subject: "Task Completion",
      current: 78,
      average: 75,
      fullMark: 100,
    },
    {
      subject: "Communication",
      current: 88,
      average: 65,
      fullMark: 100,
    },
    {
      subject: "Timeliness",
      current: 82,
      average: 72,
      fullMark: 100,
    },
    {
      subject: "Client Satisfaction",
      current: 90,
      average: 78,
      fullMark: 100,
    },
  ]

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid stroke="#374151" />
        <PolarAngleAxis dataKey="subject" tick={{ fill: "#9CA3AF", fontSize: 12 }} />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar name="Your Performance" dataKey="current" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
        <Radar name="Team Average" dataKey="average" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.6} />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  )
}
