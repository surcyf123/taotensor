import { Netuid, netuids } from "@/constants";
import { raoToTao } from "@/utils";
import { gql, useLazyQuery } from "@apollo/client";
import { Typography } from "antd";
import { DateTime, Duration } from "luxon";
import { useEffect, useState } from "react";
import BurnDifficultyChart from "../BurnChart";
import RegistrationChart from "../RegistrationChart";
import { aggregateGroupData, bucketizeData, fillData } from "../utils";
import { DurationSelectors } from "./DurationSelectors";
import { NetuidCheckboxes } from "./NetuidCheckboxes";

const { Title } = Typography;

const QUERY = gql`
  query RegistrationChartPerNetuid(
    $timestamp_gte: BigInt
    $timestamp_lte: BigInt
  ) {
    neuronRegistereds(
      where: { timestamp_gte: $timestamp_gte, timestamp_lte: $timestamp_lte }
    ) {
      timestamp
      netuid
    }
    burns(
      where: { timestamp_gte: $timestamp_gte, timestamp_lte: $timestamp_lte }
    ) {
      timestamp
      netuid
      burn: amount
      burnBlockNum: blockNum
    }
  }
`;

export const SmartRegistrationChart = () => {
  const [getData, { loading, error, data }] = useLazyQuery(QUERY, {
    fetchPolicy: "network-only",
  });

  const [bucketDuration, setBucketDuration] = useState(
    Duration.fromObject({ hours: 1 })
  );
  const [historyDuration, setHistoryDuration] = useState(
    Duration.fromObject({ weeks: 1 })
  );
  const [visibleNetuids, setVisibleNetuids] = useState(
    netuids as unknown as Netuid[]
  );

  useEffect(() => {
    getData({
      variables: {
        timestamp_gte: DateTime.now().minus(historyDuration).toMillis(),
        timestamp_lte: DateTime.now().toMillis(),
      },
    });
  }, [bucketDuration, historyDuration]);

  let filledData;
  if (data) {
    const burnData = bucketizeData({
      data: [...data.burns].map(
        ({ timestamp, burn, burnBlockNum, netuid }) => ({
          timestamp: Number(timestamp),
          burn: raoToTao(Number(burn)),
          burnBlockNum,
          netuid,
        })
      ),
      bucketSize: bucketDuration.as("milliseconds"),
      interval: [Date.now() - historyDuration.as("milliseconds"), Date.now()],
    });

    filledData = fillData({
      data: burnData,
      valuesToFill: ["burn", "burnBlockNum"],
    });
    console.log("burn data", burnData);
    console.log("filled burn data", filledData);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <DurationSelectors
          bucketDuration={bucketDuration}
          setBucketDuration={setBucketDuration}
          historyDuration={historyDuration}
          setHistoryDuration={setHistoryDuration}
        />
        <NetuidCheckboxes
          visibleNetuids={visibleNetuids}
          setVisibleNetuids={setVisibleNetuids}
        />
      </div>

      {data && (
        <>
          <Title level={4}>Burn Cost</Title>
          <BurnDifficultyChart
            data={filledData}
            visibleNetuids={visibleNetuids}
          ></BurnDifficultyChart>
          <Title level={4}>Registrations</Title>
          <RegistrationChart
            data={aggregateGroupData({
              data: [...data.neuronRegistereds],
              bucketSize: bucketDuration.as("milliseconds"),
              groupBy: "netuid",
            })}
            visibleNetuids={visibleNetuids}
          />
        </>
      )}
    </>
  );
};
