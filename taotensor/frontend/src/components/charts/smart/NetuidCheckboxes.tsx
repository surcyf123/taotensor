import { Checkbox } from "antd";
import React from "react";
import { Netuid, netuidColors, netuidLabels, netuids } from "@/constants";

export const NetuidCheckboxes = ({ visibleNetuids, setVisibleNetuids }) => {
  const toggleNetuid = (netuid: Netuid) => {
    if (visibleNetuids.includes(netuid)) {
      setVisibleNetuids(visibleNetuids.filter((n) => n !== netuid));
    } else {
      setVisibleNetuids([...visibleNetuids, netuid]);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {netuidLabels.map((label, index) => (
        <Checkbox
          key={label}
          style={{ marginRight: "10px", color: netuidColors[index] }}
          checked={visibleNetuids.includes(netuids[index])}
          onChange={() => toggleNetuid(netuids[index])}
        >
          <span style={{ marginLeft: "5px" }}>{label}</span>
        </Checkbox>
      ))}
    </div>
  );
};
