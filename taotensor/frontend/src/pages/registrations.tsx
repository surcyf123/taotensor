import { SmartRegistrationChart } from "@/components/charts/smart/SmartBurnAndRegistrationsChart";
import { MainContainer } from "@/layout/MainContainer";
import {
  getBurnAmounts,
  getDifficulties,
  getRecycleAmounts,
} from "@/subtensor-utils";
import { formatCompact, generateNetuidTabs, taoToHuman } from "@/utils";
import { Space, Statistic, Tabs } from "antd";
import { useEffect, useState } from "react";
import { usePolkadot } from "../hooks/usePolkadot";
import Layout from "../layout";

export default function Registrations(netuid: number) {
  const { api } = usePolkadot();
  const [difficulties, setDifficulties] =
    useState<Awaited<ReturnType<typeof getDifficulties>>>();
  const [recycleAmounts, setRecycleAmounts] =
    useState<Awaited<ReturnType<typeof getRecycleAmounts>>>();
  const [burnAmounts, setBurnAmouns] =
    useState<Awaited<ReturnType<typeof getBurnAmounts>>>();

  useEffect(() => {
    if (api) {
      (async () => {
        const [difficulties, recycleAmounts, burnAmounts] = await Promise.all([
          getDifficulties(api),
          getRecycleAmounts(api),
          getBurnAmounts(api),
        ]);
        setDifficulties(difficulties);
        setRecycleAmounts(recycleAmounts);
        setBurnAmouns(burnAmounts);
      })();
    }
  }, [api]);

  const netuidTabs = generateNetuidTabs((netuid, index) => {
    return (
      <>
        {/* <Title> Registrations {netuid}</Title> */}
        <div className="flex gap-10">
          <Statistic
            title="Current Registration Difficulty"
            value={difficulties && formatCompact(difficulties[index])}

            // precision={0}
            // suffix="τ"
          />
          <Statistic
            title="Total Recycle Amount"
            value={
              recycleAmounts &&
              taoToHuman(recycleAmounts[index], { from: "rao" })
            }
          ></Statistic>
          <Statistic
            title="Current Burn Amount"
            value={
              burnAmounts && taoToHuman(burnAmounts[index], { from: "rao" })
            }
          ></Statistic>
        </div>
      </>
    );
  });

  return (
    <Layout>
      <main>
        <Space direction="vertical" style={{ width: "100%" }}>
          <MainContainer>
            <Tabs defaultActiveKey="1" items={netuidTabs} />
          </MainContainer>
          <MainContainer>
            <SmartRegistrationChart></SmartRegistrationChart>
          </MainContainer>
        </Space>
      </main>
    </Layout>
  );
}
