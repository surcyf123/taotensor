import { MetagraphTable } from "@/components/MetagraphTable";
import { generateNetuidTabs } from "@/utils";
import { Tabs, Typography } from "antd";
import Layout from "../layout";
import { MainContainer } from "@/layout/MainContainer";
import { Netuid } from "@/constants";
const { Title } = Typography;

const netuidTabs = generateNetuidTabs((netuid: Netuid) => (
  <MetagraphTable netuid={netuid} />
));

export default function Metagraph(netuid: Netuid) {
  return (
    <Layout>
      <MainContainer>
        <Title>Metagraph</Title>
        <Tabs defaultActiveKey="1" items={netuidTabs} />
      </MainContainer>
    </Layout>
  );
}
