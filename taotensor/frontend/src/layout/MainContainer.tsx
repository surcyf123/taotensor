import { theme } from "antd";

export function MainContainer({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div
      style={{
        padding: 24,
        backgroundColor: colorBgContainer,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
