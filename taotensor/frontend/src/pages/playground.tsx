import { Input, Result, Typography } from "antd";
const { Title } = Typography;

/** Returned as owner if owner is queried for a coldkey (which doesnt have one) */

// import polkadot
import { usePolkadot } from "@/hooks/usePolkadot";
import Layout from "@/layout";
import { useEffect, useState } from "react";
import { foundationColdkey, foundationHotkey } from "@/constants";
import { MainContainer } from "@/layout/MainContainer";

const { Search } = Input;

export default function Playground() {
  // use block context
  const { api } = usePolkadot();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<any | null>(null);
  const [address, setAddress] = useState<string | null>(null);

  const onSearch = async (address: string) => {
    console.log(address);
    setIsLoading(true);
    setError(null);
    setResult(null);
    setAddress(address);
    let netuid = 3;
    try {
      const res = await Promise.all([
        api?.query.system.account(address),
        api?.query.subtensorModule.owner(address),
        api?.query.subtensorModule.totalHotkeyStake(address),
        api?.query.subtensorModule.totalColdkeyStake(address),
        api?.query.subtensorModule.delegates(address),
        api?.query.subtensorModule.stake(address, foundationColdkey),
        api?.query.subtensorModule.axons(netuid, address),
        api?.query.subtensorModule.prometheus(netuid, address),

        api?.query.subtensorModule.totalStake(),
        api?.query.subtensorModule.blockEmission(),
        api?.query.subtensorModule.totalIssuance(),
        api?.query.subtensorModule.servingRateLimit(netuid),
        api?.query.subtensorModule.txRateLimit(),
        // Network Parameters
        api?.query.subtensorModule.networksAdded(netuid),
        api?.query.subtensorModule.totalNetworks(),
        api?.query.subtensorModule.networkModality(netuid),
        api?.query.subtensorModule.networkConnect(1, 3), // how to use this?
        api?.query.subtensorModule.emissionValues(netuid),

        api?.query.subtensorModule.networksAdded(3), // lookup if a network exists?, gives true or false

        api?.rpc("subnetInfo_getSubnetsInfo"),
        api?.rpc("delegateInfo_getDelegates"),
        api?.rpc.rpc.methods(),
        api?.rpc.state.getMetadata(),
        // api?.rpc.delegateInfo.getDelegates(),
        //
        //
        //
      ]);

      console.log(api?.query.subtensorModule);
      // @ts-ignore
      const json = res.map((res) => res?.toHuman?.());
      const res2 = {
        account: json[0],
        owner: json[1],
        totalHotkeyStake: json[2],
        totalColdkeyStake: json[3],
        delegates: json[4],
        stake: json[5],
        axons: json[6],
        prometheus: json[7],
        totalStake: json[8],
        blockEmission: json[9],
        totalIssuance: json[10],
        servingRateLimit: json[11],
        txRateLimit: json[12],
        networksAdded: json[13],
        totalNetworks: json[14],
        networkModality: json[15],
        networkConnect: json[16],
        emissionValues: json[17],
        networksAdded2: json[18],
        // subnetInfo_getSubnetsInfo: res[19],
        // delegateInfo_getDelegates: res[20],
        rpcMethods: res[21],
        metadata: res[22],
        // rpcMethods2: res[23],
      };
      console.log(res2);
      setResult(res2);
    } catch (e) {
      if (e instanceof Error) {
        console.log(e);
        setError(e.message.split(":: ").pop()!);
      } else {
        setError("Unknown error");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    onSearch(foundationHotkey);
  }, []);

  return (
    <Layout>
      <MainContainer>
        <Title>Playground</Title>
        <p>
          foundation hotkey: {foundationHotkey}
          <br></br>foundation coldkey: {foundationColdkey}
        </p>
        <Search
          className="mb-2"
          placeholder="Enter a coldkey"
          onSearch={onSearch}
          allowClear
          enterButton="Lookup"
          loading={isLoading}
          status={error ? "error" : undefined}
        />
        {error && (
          <Result
            status="error"
            title="Lookup failed"
            subTitle={error}
          ></Result>
        )}
        {result ? (
          <>
            {/* <Descriptions title="Coldkey" bordered={false} layout="vertical">
              <Descriptions.Item label="Adress">{address}</Descriptions.Item>
              <Descriptions.Item label="Free">
                {result.data.free.toString()}
              </Descriptions.Item>
              <Descriptions.Item label="Reserved">
                {result.data.reserved.toString()}
              </Descriptions.Item>
              <Descriptions.Item label="Frozen misc">
                {result.data.miscFrozen.toString()}
              </Descriptions.Item>
              <Descriptions.Item label="Frozen fee">
                {result.data.feeFrozen.toString()}
              </Descriptions.Item>
            </Descriptions> */}
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </>
        ) : null}
      </MainContainer>
    </Layout>
  );
}
