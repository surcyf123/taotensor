import TradingViewWidget from "@/components/TradingViewWidget";
import { Space, Statistic, Typography } from "antd";
import Layout from "../layout";
import { SmartTransferChart } from "@/components/charts/smart/SmartTransferChart";
import { MainContainer } from "@/layout/MainContainer";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/api";
import { raoToHuman, taoToHuman } from "@/utils";

const { Title } = Typography;

const useBackend = (key, route) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [key, route],
    queryFn: route,
  });
  return { isLoading, error, data } as {
    isLoading: boolean;
    error: any;
    data: any;
  };
};

const ApiStatistic = ({ title, route, format }) => {
  const { isLoading, error, data } = useBackend(title, route);

  return (
    <Statistic
      title={title}
      value={data && `${format(data)}`}
      loading={isLoading}
    ></Statistic>
  );
};

export default function Home() {
  return (
    <Layout>
      <MainContainer style={{ marginBottom: "1rem" }}>
        <Space>
          <ApiStatistic
            title="Transfer Fee"
            route={api.get.transferFee}
            format={(res) => raoToHuman(res.transferFee)}
          />
          <ApiStatistic
            title="Total Stake"
            route={api.get.totalStake}
            format={(res) =>
              taoToHuman(res.totalStake, { from: "rao", decimals: false })
            }
          />
          <ApiStatistic
            title="Total Issuance"
            route={api.get.totalIssuance}
            format={(res) =>
              taoToHuman(res.totalIssuance, { from: "rao", decimals: false })
            }
          />
          <ApiStatistic
            title="Total Stake Percentage"
            route={api.get.totalStakePercentage}
            format={(res) =>
              Math.round(res.totalStakePercentage * 100) / 100 + "%"
            }
          />
          <ApiStatistic
            title="Average Validator APR"
            route={api.get.averageValidatorAPR}
            format={(res) =>
              Math.round(res.averageValidatorAPR * 100) / 100 + "%"
            }
          />
        </Space>
      </MainContainer>
      <MainContainer>
        <TradingViewWidget></TradingViewWidget>
        <SmartTransferChart></SmartTransferChart>
      </MainContainer>
    </Layout>
  );
}
