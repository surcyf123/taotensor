import { raoToTao, taoToHuman } from "@/utils";
import { Typography } from "antd";
import { DateTime, Duration } from "luxon";
import TransferChart from "../TransferChart";

import { useLazyQuery } from "@apollo/client";

import { useEffect } from "react";
import { GET_TRANSFERS } from "@/gql-queries";
import { aggregateData } from "../utils";

const { Title } = Typography;

let bucketDuration = Duration.fromObject({ hours: 1 });
let historyDuration = Duration.fromObject({ hours: 24 });

export const SmartTransferChart = () => {
  const [getTransfers, { loading, error, data }] = useLazyQuery(GET_TRANSFERS, {
    fetchPolicy: "network-only",
  });
  useEffect(() => {
    getTransfers({
      variables: {
        timestamp_gte: DateTime.now().minus(historyDuration).toMillis(),
        timestamp_lte: DateTime.now().toMillis(),
      },
    });
  }, []);
  if (data) console.log("data tranfers", data);

  return (
    <>
      {data && (
        <>
          <Title>TAO Transfer Stats</Title>
          {/* desc */}
          <p>
            The amount of TAO transferred per hour. The data is based directly
            on blockchain data.
          </p>
          <TransferChart
            data={aggregateData({
              data: data.transfers,
              bucketSize: bucketDuration.as("milliseconds"),
              transform: raoToTao,
              valueKey: "amount",
            })}
          ></TransferChart>
          Number of transfers: {data && data.transfers.length}
          <br />
          TAO Volume:{" "}
          {data &&
            taoToHuman(
              data.transfers.reduce(
                (acc, cur) => acc + raoToTao(Number(cur.amount)),
                0
              )
            )}
        </>
      )}
    </>
  );
};
