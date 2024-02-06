import { generateNetuidTabs } from "@/utils";
import { Statistic, Tabs, Typography } from "antd";
import Layout from "../layout";
import { HyperParameters } from "@/components/HyperParameters";
import { MainContainer } from "@/layout/MainContainer";
const { Title } = Typography;

const netuidTabs = generateNetuidTabs((netuid) => {
  return (
    <>
      <Title> Hyper Parameters - netuid {netuid}</Title>
      <HyperParameters netuid={netuid}></HyperParameters>
    </>
  );
});

export default function HyperParametersPage() {
  return (
    <Layout>
      <MainContainer>
        <Tabs defaultActiveKey="1" items={netuidTabs} />
      </MainContainer>
    </Layout>
  );
}
