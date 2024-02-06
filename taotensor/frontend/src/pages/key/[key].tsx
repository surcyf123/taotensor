import TransferTable from "@/components/tables/TransferTable";
import { GET_TRANSFERS_BY_KEY } from "@/gql-queries";
import { usePolkadot } from "@/hooks/usePolkadot";
import Layout from "@/layout";
import { getDataForAccount, getNeuron } from "@/subtensor-utils";
import { useQuery } from "@apollo/client";
import { stringToU8a } from "@polkadot/util";
import { Tabs, Typography } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const { Title } = Typography;
const { TabPane } = Tabs;

const Transfers = ({ activeKey }) => {
  //   Query
  const { loading, error, data } = useQuery(GET_TRANSFERS_BY_KEY, {
    fetchPolicy: "network-only",
    variables: {
      key: activeKey,
    },
  });
  return (
    <>
      <TransferTable
        isLoading={loading}
        data={data && data.transfers}
        viewAs={activeKey}
      ></TransferTable>
    </>
  );
};

export default function Key() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("1");
  const [key, setKey] = useState("");
  const [data, setData] =
    useState<Awaited<ReturnType<typeof getDataForAccount>>>();

  useEffect(() => {
    if (router.isReady) {
      setActiveTab("1");
      setKey(router.query.key as string);
    }
  }, [router.isReady, router.query.key]);

  const { api } = usePolkadot();
  useEffect(() => {
    if (!api || !key) return;
    getDataForAccount(api, key).then((res) => {
      setData(res);
      console.log("data", res);
    });

    (async () => {
      const a = await api.query.subtensorModule.delegates(key);
      console.log("a", a, a.toJSON());
      console.log("key", key, stringToU8a(key));
      // const b = await api?.rpc("delegateInfo_getDelegate", [stringToU8a(key)]);
      // @ts-ignore
      function padArrayBuffer(buffer, newLength) {
        // Create a new ArrayBuffer of the desired length
        const newBuffer = new ArrayBuffer(newLength);

        // Create views to manipulate the content of the buffers
        const srcView = new Uint8Array(buffer);
        const destView = new Uint8Array(newBuffer);

        // Copy the contents from the original buffer to the new buffer
        for (let i = 0; i < srcView.length; i++) {
          destView[i] = srcView[i];
        }

        // Return the new buffer (padded with zeros)
        return destView;
      }
      // const b = await api.rpc.delegateInfo.getDelegates(stringToU8a(key));
      // console.log("b", b);
    })();
  }, [api, key]);
  return (
    <Layout>
      <main>
        <Title>{key}</Title>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <pre>{JSON.stringify(router.query, null, 2)}</pre>
      </main>
      {/* TAbs */}
      <Tabs onChange={setActiveTab}>
        <TabPane tab="Transfer History" key="1">
          {activeTab === "1" && key && <Transfers activeKey={key} />}
        </TabPane>
      </Tabs>
    </Layout>
  );
}
