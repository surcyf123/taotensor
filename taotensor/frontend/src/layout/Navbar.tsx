import SearchBar from "@/components/SearchBar";
import { BlockContext } from "@/contexts/BlockContext";
import { numberWithCommas } from "@/utils";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Layout, Menu, theme } from "antd";
import "antd/dist/reset.css";
import { useContext } from "react";
const { Header } = Layout;

export default function Navbar({ siderCollapsed, setCollapsed }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { block } = useContext(BlockContext);
  return (
    <Header
      className="flex flex-row"
      style={{
        padding: 0,
        background: colorBgContainer,
        gap: "1rem",
      }}
    >
      <Button
        type="text"
        icon={siderCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!siderCollapsed)}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
      {/* <Menu theme="dark" mode="horizontal" /> */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 1,
            maxWidth: "800px",
          }}
        >
          <SearchBar></SearchBar>
        </div>
      </div>

      <div
        className="ml-auto pr-1"
        style={{
          marginLeft: "auto",
          display: "flex",
          alignItems: "center",
          marginRight: ".5rem",
          whiteSpace: "nowrap",
        }}
      >
        <FontAwesomeIcon
          icon={faCube}
          style={{ marginRight: ".25rem" }}
        ></FontAwesomeIcon>
        <span
          className="ml-20 bg-black text-white"
          style={{
            lineHeight: 1.5714285714285714,
          }}
        >
          {numberWithCommas(block)}
        </span>
        {/* TAO/USDT {currentPrice} */}
      </div>
    </Header>
  );
}
