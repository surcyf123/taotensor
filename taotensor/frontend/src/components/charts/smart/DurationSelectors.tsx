import { Select } from "antd";
import { Duration } from "luxon";
import React from "react";

const { Option } = Select;

export const DurationSelectors = ({
  bucketDuration,
  setBucketDuration,
  historyDuration,
  setHistoryDuration,
}) => {
  return (
    <div style={{ marginBottom: 10, display: "flex", alignItems: "center" }}>
      <span style={{ marginRight: 10 }}>Granularity:</span>
      <Select
        defaultValue="1h"
        style={{ marginRight: 20 }}
        value={bucketDuration.toISO()}
        onChange={(value) => setBucketDuration(Duration.fromISO(value))}
      >
        <Option value="PT1H">1 hour</Option>
        <Option value="PT6H">6 hours</Option>
        <Option value="P1D">1 day</Option>
      </Select>

      <span style={{ marginRight: 10 }}>History Duration:</span>
      <Select
        defaultValue="1w"
        value={historyDuration.toISO()}
        onChange={(value) => setHistoryDuration(Duration.fromISO(value))}
      >
        <Option value="P1W">1 week</Option>
        <Option value="P1M">1 month</Option>
        <Option value="P6M">6 months</Option>
        <Option value="P1Y">1 year</Option>
      </Select>
    </div>
  );
};
