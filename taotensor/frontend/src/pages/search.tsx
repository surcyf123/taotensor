import TransferTable from "@/components/tables/TransferTable";
import { taoToRao } from "@/utils";
import { Typography } from "antd";
import Layout from "../layout";
const { Title } = Typography;

import { GET_TRANSFERS } from "@/gql-queries";
import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { MainContainer } from "@/layout/MainContainer";

export default function Search(netuid: number) {
  const [getTransfers, { loading, error, data }] = useLazyQuery(GET_TRANSFERS, {
    fetchPolicy: "network-only",
  });

  const router = useRouter();
  const { query } = router;

  const { searchBy, q: input } = query;

  useEffect(() => {
    (async () => {
      if (input == "") {
        await getTransfers();
        return;
      }
      if (searchBy == "transfer_amount") {
        const res = await getTransfers({
          variables: { amount: input as unknown as number },
        });
      } else if (searchBy == "transfer_from") {
        const res = await getTransfers({
          variables: { from: input },
        });
      } else if (searchBy == "transfer_to") {
        const res = await getTransfers({
          variables: { to: input },
        });
      } else if (searchBy == "transfer_block_num") {
        const res = await getTransfers({
          variables: { blockNum: Number(input) },
        });
      } else if (searchBy == "transfer_block_hash") {
        const res = await getTransfers({
          variables: { id: input },
        });
      } else {
        console.log("Not implement", searchBy);
      }
    })();
  }, [searchBy, input, getTransfers]);

  return (
    <Layout>
      <MainContainer>
        <Title>Results</Title>
        <TransferTable
          data={data?.transfers}
          isLoading={loading}
        ></TransferTable>
      </MainContainer>
    </Layout>
  );
}
