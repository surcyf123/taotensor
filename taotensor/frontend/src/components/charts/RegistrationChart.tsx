import React from "react";
import { scaleTime } from "d3-scale";
import * as d3 from "d3";
import { Netuid, getNetuidLabel, netuidColors, netuids } from "@/constants";
import {
  Bar,
  BarChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// additional d3 imports needed
import { timeFormat } from "d3-time-format";
import {
  timeDay,
  timeHour,
  timeMinute,
  timeMonth,
  timeSecond,
  timeWeek,
  timeYear,
} from "d3-time";
import { formatXAxis } from "./utils";

// format functions from the first script
const formatMillisecond = timeFormat(".%L"),
  formatSecond = timeFormat(":%S"),
  formatMinute = timeFormat("%I:%M"),
  formatHour = timeFormat("%I %p"),
  formatDay = timeFormat("%a %d"),
  formatWeek = timeFormat("%b %d"),
  formatMonth = timeFormat("%B"),
  formatYear = timeFormat("%Y");

function multiFormat(date: Date) {
  return (
    timeSecond(date) < date
      ? formatMillisecond
      : timeMinute(date) < date
      ? formatSecond
      : timeHour(date) < date
      ? formatMinute
      : timeDay(date) < date
      ? formatHour
      : timeMonth(date) < date
      ? timeWeek(date) < date
        ? formatDay
        : formatWeek
      : timeYear(date) < date
      ? formatMonth
      : formatYear
  )(date);
}

export default function RegistrationChart({
  data,
  visibleNetuids,
}: {
  data: any;
  visibleNetuids: Netuid[];
}) {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart
        data={data}
        stackOffset="none"
        margin={{ right: 50, left: 30, top: 5 }}
      >
        {netuids.map((netuid, index) => {
          if (!visibleNetuids.includes(netuid)) {
            return null;
          }
          return (
            <Bar
              key={netuid}
              type="monotone"
              dataKey={netuid}
              stackId="1"
              fill={netuidColors[index]}
            ></Bar>
          );
        })}
        <XAxis
          dataKey="timestamp"
          domain={["dataMin", "dataMax"]}
          type="number"
          scale="time"
          tickFormatter={(v) => formatXAxis(v.valueOf())}
          angle={-45}
          textAnchor="end"
          height={105}
        />
        <YAxis />
        <Tooltip
          labelFormatter={(v) => formatXAxis(v.valueOf())}
          formatter={(value, name) => [
            value + " registrations",
            getNetuidLabel(Number(name) as Netuid),
          ]}
          cursor={{ fill: "#808080", fillOpacity: 0.3 }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
