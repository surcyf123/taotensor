import { api } from "@/api";
import { faShield } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import { Table, Tag } from "antd";
import Link from "next/link";

import { Netuid, blockTime, netuids } from "@/constants";
import { usePolkadot } from "@/hooks/usePolkadot";
import { getAllNetuidEmissionValues } from "@/subtensor-utils";
import { displayAccount, taoToHuman } from "@/utils";
import { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";

interface DataItem {
  uid: number;
  stake: number;
  rank: number;
  trust: number;
  consensus: number;
  incentive: number;
  dividends: number;
  emission: number;
  vtrust: number;
  isValidator: 0 | 1;
  updated: number;
  active: 0 | 1;
  axon: string;
  hotkey: string;
  coldkey: string;
}
function calcDailyRewards(emissionValueForSubnet, uidTaoEmission: number) {
  const totalTaoEmissionPerDay = (3600 * 24) / blockTime;
  const totalTaoEmissionForSubnetPerDay =
    emissionValueForSubnet * totalTaoEmissionPerDay;
  const totalTaoEmisisonForUidPerDay =
    uidTaoEmission * totalTaoEmissionForSubnetPerDay;
  return totalTaoEmisisonForUidPerDay;
}

const fixed5Renderer = (value: any, record: any, index: number) => {
  return <span title={value}>{value.toFixed(5)}</span>;
};

export const MetagraphTable = ({ netuid }: { netuid: Netuid }) => {
  const { api: pApi } = usePolkadot();
  const [emissionValueForSubnet, setEmissionValueForSubnet] =
    useState<number>();

  useEffect(() => {
    if (pApi) {
      (async () => {
        const emissionValues = await getAllNetuidEmissionValues(pApi);
        const emissionValue = emissionValues[netuids.indexOf(netuid)];
        setEmissionValueForSubnet(emissionValue);
      })();
    }
    [pApi];
  });

  const columns: ColumnsType<DataItem> = [
    {
      title: "#",
      dataIndex: "pos",
      key: "pos",
      render: (text: any, record: any, index: number) => index + 1,
    },
    {
      title: "UID",
      dataIndex: "uid",
      sorter: (a, b) => a.uid - b.uid,
      render: (text: any, record: any, index: number) => {
        // link to /uid?netuid=record.netuid with next link
        return (
          <Link href={`/uid/${record.uid}?netuid=${netuid}`}>{record.uid}</Link>
        );
      },
    },
    {
      title: "Stake (τ)",
      dataIndex: "stake",
      sorter: (a, b) => a.stake - b.stake,
      render(value, record, index) {
        return taoToHuman(value, { decimals: false, symbol: false });
      },
    },
    {
      title: "Status",
      dataIndex: "active",
      filters: [
        {
          text: "Activity",
          value: "Submenu",
          children: [
            {
              text: "Active",
              value: "active",
            },
            {
              text: "Inactive",
              value: "inactive",
            },
          ],
        },
        {
          text: "Validator permit",
          value: "validator",
          children: [
            {
              text: "Yes",
              value: "validator",
            },
            {
              text: "No",
              value: "novalidator",
            },
          ],
        },
      ],
      onFilter: (value, record) => {
        console.log("h", value, record);
        if (value == "active") {
          return record.active == 1;
        }
        if (value == "inactive") {
          return record.active == 0;
        }
        if (value == "validator") {
          return record.isValidator == 1;
        }
        if (value == "novalidator") {
          return record.isValidator == 0;
        }
        return true;
      },
      // Render active / inactive label
      render: (text: any, record: any, index: number) => {
        let container: React.ReactNode[] = [];
        record.active == "1"
          ? container.push(<Tag color="green">Active</Tag>)
          : container.push(<Tag color="red">Inactive</Tag>);
        record.isValidator == "1" &&
          container.push(<FontAwesomeIcon icon={faShield}></FontAwesomeIcon>);
        return (
          <div className="flex flex-row gap-2 items-center">{container}</div>
        );
      },
    },
    {
      title: "Rank",
      dataIndex: "rank",
      sorter: (a, b) => a.rank - b.rank,
      render: fixed5Renderer,
    },
    {
      title: "Trust",
      dataIndex: "trust",
      sorter: (a, b) => a.trust - b.trust,
      render: fixed5Renderer,
    },
    {
      title: "VTrust",
      dataIndex: "vtrust",
      sorter: (a, b) => a.vtrust - b.vtrust,
      render: fixed5Renderer,
    },
    {
      title: "Consensus",
      dataIndex: "consensus",
      sorter: (a, b) => a.consensus - b.consensus,
      render: fixed5Renderer,
    },
    {
      title: "Incentive",
      dataIndex: "incentive",
      sorter: (a, b) => a.incentive - b.incentive,
      render: fixed5Renderer,
    },
    {
      title: "Dividends",
      dataIndex: "dividends",
      sorter: (a, b) => a.dividends - b.dividends,
      render: fixed5Renderer,
    },
    // emissions
    {
      title: "Emission",
      dataIndex: "emission",
      sorter: (a, b) => a.emission - b.emission,
      render: (text: any, record: any, index: number) => (
        <span title={record.emission}>{taoToHuman(record.emission)}</span>
      ),
    },
    {
      title: "Updated",
      dataIndex: "updated",
      sorter: (a, b) => a.updated - b.updated,
    },
    {
      title: "Axon",
      dataIndex: "axon",
      sorter: (a, b) => a.axon.localeCompare(b.axon),
    },
    {
      title: "Hotkey",
      dataIndex: "hotkey",
      sorter: (a, b) => a.hotkey.localeCompare(b.hotkey),
      render: (text: any, record: any, index: number) => {
        return displayAccount(record.hotkey);
      },
    },
    {
      title: "Coldkey",
      dataIndex: "coldkey",
      sorter: (a, b) => a.coldkey.localeCompare(b.coldkey),
      render: (text: any, record: any, index: number) => {
        return displayAccount(record.coldkey);
      },
    },
    {
      title: "Daily rewards",
      dataIndex: "daily_rewards",
      // Sorting by emission as they will have the same order as daily rewards.
      sorter: (a, b) => a.emission - b.emission,
      render(value, record, index) {
        return taoToHuman(
          calcDailyRewards(emissionValueForSubnet, record.emission)
        );
      },
    },
  ];

  const { isLoading, error, data } = useQuery({
    queryKey: ["metagraph", netuid],
    queryFn: () => api.get.metagraph(netuid),
  });

  if (error) {
    console.error(error);
    return <div>Something went wrong</div>;
  }

  return (
    <Table
      scroll={{
        x: true,
      }}
      size="small"
      loading={isLoading}
      dataSource={isLoading ? undefined : data.table_data}
      columns={columns}
      pagination={{ pageSize: 50 }}
      // pagination={false} must be virtualized for performance to work
    />
  );
};
