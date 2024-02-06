import { hyperParametersList } from "@/constants";
import { usePolkadot } from "@/hooks/usePolkadot";
import { taoToHuman, queryAllHyperParams, raoToTao } from "@/utils";
import { Descriptions, Statistic, Table } from "antd";
import DescriptionsItem from "antd/es/descriptions/Item";
import { useEffect, useState } from "react";

const columns = [
  {
    title: "Hyperparameter",
    dataIndex: "hyperparameter",
  },
  {
    title: "Value",
    dataIndex: "value",
  },
];

const formatMap = {
  Burn: (value: number) => taoToHuman(value, { from: "rao" }),
};

export const HyperParameters = ({ netuid }: { netuid: number }) => {
  const { api } = usePolkadot();
  const [hyperParameters, setHyperParameters] = useState<
    Record<string, string>
  >({});
  useEffect(() => {
    if (!api) return;
    (async () => {
      const hypers = await Promise.all(queryAllHyperParams(api!, netuid));
      const hyperObject = hyperParametersList.reduce((obj, curr, index) => {
        if (formatMap[curr]) {
          // As number is currently true for all hypers, but can potentially change in the future
          let n = hypers[index].toJSON() as number;
          obj[curr] = formatMap[curr](n);
        } else {
          obj[curr] = hypers[index].toHuman();
        }
        return obj;
      }, {});
      setHyperParameters(hyperObject);
    })();
  }, [api, netuid]);

  const data = Object.entries(hyperParameters).map(([key, value]) => ({
    hyperparameter: key,
    value: value,
  }));

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ x: true }}
      ></Table>
      {/* <Descriptions bordered>
        {Object.entries(hyperParameters).map(([key, value]) => (
          // <Statistic title={key} value={value}></Statistic>
          <DescriptionsItem label={key}>{value}</DescriptionsItem>
        ))}
      </Descriptions> */}
    </div>
  );
};
