import { BlockProvider } from "@/contexts/BlockContext";
// import "../tailwind.css";
import "../globals.scss";
import { StyleProvider } from "@ant-design/cssinjs";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { App } from "antd";
import { PolkadotProvider } from "@/hooks/usePolkadot";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const graphqlURI =
  process.env.NEXT_PUBLIC_SQUID_GRAPHQL || "http://localhost:4150/graphql";

const client = new ApolloClient({
  uri: graphqlURI,
  cache: new InMemoryCache(),
});

const queryClient = new QueryClient();
export default function MyApp({ Component, pageProps }) {
  return (
    <PolkadotProvider>
      <BlockProvider>
        <StyleProvider hashPriority="high">
          <ApolloProvider client={client}>
            <App>
              <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
                <ReactQueryDevtools initialIsOpen={false} />
              </QueryClientProvider>
            </App>
          </ApolloProvider>
        </StyleProvider>
      </BlockProvider>
    </PolkadotProvider>
  );
}
