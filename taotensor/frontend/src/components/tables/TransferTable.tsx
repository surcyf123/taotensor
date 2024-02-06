import {
  blockExplorerQuery,
  displayAccount,
  displayTaoAndRao,
  taoToHuman,
} from "@/utils";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { DateTime } from "luxon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table, Tag, Tooltip, Typography } from "antd";

const { Text } = Typography;
import { ColumnsType } from "antd/es/table";
import Link from "next/link";

interface Transfer {
  from: string;
  to: string;
  amount: number;
  id: number;
  blockNum: number;
}
const columns = ({ viewAs }: { viewAs?: string }): ColumnsType<Transfer> => {
  let c: ColumnsType<Transfer> = [
    {
      title: "Block #",
      dataIndex: "blockNum",
      key: "blockNum",
      render(value, record, index) {
        return (
          <div style={{ whiteSpace: "nowrap" }}>
            {value}
            <Link
              title="View on Block Explorer"
              href={blockExplorerQuery(value)}
              style={{ marginLeft: ".5rem" }}
            >
              {/* <Tag color="blue"> */}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              {/* </Tag> */}
            </Link>
          </div>
        );
      },
    },
  ];
  c.push(
    ...[
      {
        title: "Age",
        dataIndex: "timestamp",
        key: "timestamp",
        render: (value: any, record: any, index: number) => {
          const d = DateTime.fromMillis(Number(value));
          return (
            <Tooltip title={d.toFormat("yyyy-MM-dd HH:mm:ss")}>
              {d.toRelative()}
            </Tooltip>
          );
        },
      },
      {
        title: "From",
        dataIndex: "from",
        key: "from",
        render: (value: any, record: any, index: number) =>
          displayAccount(value.id),
      },
      {
        title: "To",
        dataIndex: "to",
        key: "to",
        render: (value: any, record: any, index: number) =>
          displayAccount(value.id),
      },
    ]
  );
  if (!viewAs) {
    c.push({
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (value: any, record: any, index: number) =>
        displayTaoAndRao(value),
    });
  } else {
    c.push({
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (value: any, record: any, index: number) => {
        const amount = taoToHuman(value, { from: "rao" });
        if (viewAs === record.to.id) {
          return <Text type="success">+ {amount}</Text>;
        } else {
          return <Text type="danger">- {amount}</Text>;
        }
      },
    });
  }

  return c;
};
export default function TransferTable({
  isLoading,
  data,
  viewAs,
}: {
  isLoading: boolean;
  data: Transfer[];
  viewAs?: string;
}) {
  return (
    <Table
      scroll={{
        x: true,
      }}
      size="small"
      loading={isLoading}
      dataSource={isLoading ? undefined : data}
      columns={columns({ viewAs })}
      pagination={{ pageSize: 50 }}
    />
  );
}
