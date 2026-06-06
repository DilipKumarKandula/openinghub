"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface JobsChartProps {
  data: {
    name: string;
    jobs: number;
  }[];
}

export default function JobsChart({
  data,
}: JobsChartProps) {
  return (
    <div className="h-[350px] w-full">
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <BarChart data={data}>
          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="jobs" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}