import { netuids } from "@/constants";
import { usePolkadot } from "@/hooks/usePolkadot";
import Layout from "@/layout";
import { getNeuron } from "@/subtensor-utils";
import { Tabs, Typography } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const { Title } = Typography;
const { TabPane } = Tabs;

export default function Uid() {
  const router = useRouter();
  const [uid, setUid] = useState("");
  const [netuidParam, setNetuidParam] = useState("1");
  const [data, setData] = useState({});

  useEffect(() => {
    if (router.isReady) {
      setUid(router.query.uid as string);
      setNetuidParam((router.query.netuid as string) || "1");
    }
  }, [router.isReady, router.query.uid, router.query.netuid]);

  const { api } = usePolkadot();
  useEffect(() => {
    if (!api || !uid) return;
    (async () => {
      const results = {};
      await Promise.all(
        netuids.map(async (netuid) => {
          const neuronData = await getNeuron(api, netuid, uid);
          results[netuid] = neuronData;
        })
      );
      setData(results);
      console.log("data", results);
    })();
  }, [api, uid]);

  const onTabChange = (activeKey) => {
    setNetuidParam(activeKey);
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, netuid: activeKey },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <Layout>
      <main>
        <Title>UID: {uid}</Title>
        <Tabs activeKey={netuidParam} onChange={onTabChange}>
          {netuids.map((netuid, index) => (
            <TabPane tab={`Netuid ${netuid}`} key={netuid}>
              <pre>
                <code>{JSON.stringify(data[netuid], null, 2)}</code>
              </pre>
            </TabPane>
          ))}
        </Tabs>
      </main>
    </Layout>
  );
}
