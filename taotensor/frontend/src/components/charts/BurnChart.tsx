import { taoToHuman } from "@/utils";
import { Card } from "antd";
import {
  Label,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatXAxis } from "./utils";
import {
  Netuid,
  getNetuidColor,
  getNetuidLabel,
  netuidColors,
  netuids,
} from "@/constants";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const { burn, burnBlockNum, netuid } = payload[0].payload;
    return (
      <Card size="small">
        <div className="label">{formatXAxis(label)}</div>
        <div className="label" style={{ color: getNetuidColor(netuid) }}>
          {getNetuidLabel(netuid)}: {burn && taoToHuman(burn)} (Block:{" "}
          {burnBlockNum})
        </div>
        {/* <small>
          The block numbers are from what block the burn / difficulty value was
          read from.
        </small> */}
      </Card>
    );
  }

  return null;
};

export default function BurnDifficultyChart({
  data,
  visibleNetuids,
}: {
  data: any;
  visibleNetuids: Netuid[];
}) {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart stackOffset="none" margin={{ left: 30, top: 5 }}>
        {netuids.map((netuid, index) => {
          if (!visibleNetuids.includes(netuid)) {
            return null;
          }
          return (
            <Line
              data={data.filter((d) => d.netuid === netuid)}
              dataKey={"burn"}
              key={netuid}
              yAxisId="left"
              type="monotone"
              stroke={netuidColors[index]}
            />
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
        <YAxis yAxisId="left" width={70}>
          <Label
            angle={-90}
            style={{
              textAnchor: "middle",
            }}
            value={"Burn (Tao)"}
          />
        </YAxis>

        <Tooltip
          //   labelFormatter={(v) => formatXAxis(v.valueOf())}
          //   formatter={(value, name) => [
          //     taoToHuman(value as number) + " ",
          //     getNetuidLabel(Number(name) as Netuid),
          //   ]}
          //   cursor={{ fill: "#808080", fillOpacity: 0.3 }}
          content={
            <CustomTooltip
              active={undefined}
              payload={undefined}
              label={undefined}
            />
          }
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
