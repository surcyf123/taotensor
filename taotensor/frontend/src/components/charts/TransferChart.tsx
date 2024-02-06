import { taoToHuman } from "@/utils";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatXAxis } from "./utils";

export default function TransferChart({ data }: { data: any }) {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={data}>
        <CartesianGrid
          strokeDasharray="4 3"
          strokeWidth={1}
          strokeOpacity={0.8}
          horizontal={true}
          vertical={false}
        />{" "}
        <Bar type="monotone" dataKey="amount" fill="#1677ff" />
        <XAxis
          dataKey="timestamp"
          axisLine={false}
          padding={{ left: 0 }}
          minTickGap={100}
          tickFormatter={formatXAxis}
        />
        <YAxis dataKey="amount" padding={{ top: 0 }} />
        <Tooltip
          labelFormatter={(value) => formatXAxis(value)}
          formatter={(value) => [taoToHuman(value as number), "Amount"]}
          cursor={{ fill: "#808080", fillOpacity: 0.3 }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
