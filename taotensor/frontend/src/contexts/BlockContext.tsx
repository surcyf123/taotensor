import { ApiPromise, WsProvider } from "@polkadot/api";

import { finney_wss } from "@/constants";
import { createContext, useEffect, useState } from "react";
import { usePolkadot } from "@/hooks/usePolkadot";

interface BlockState {
  block: number;
}

interface BlockDispatch {
  setBlock: (block: number) => void;
}

export const BlockContext = createContext<BlockState>(null!);
export const BlockDispatchContext = createContext<BlockDispatch>(null!);

export const BlockProvider = ({ children }) => {
  const [block, setBlock] = useState(0);
  const { api } = usePolkadot();

  // Subscribe to balance changes for our account
  useEffect(() => {
    if (!api) return;
    let unsubscribe;
    (async () => {
      unsubscribe = await api.rpc.chain.subscribeNewHeads((header) => {
        // console.log(`new block #${header.number}`, header.toJSON());
        setBlock(header.number.toNumber());
      });
    })();
    return () => unsubscribe();
  }, [api]);

  return (
    <BlockContext.Provider value={{ block }}>
      <BlockDispatchContext.Provider value={{ setBlock }}>
        {children}
      </BlockDispatchContext.Provider>
    </BlockContext.Provider>
  );
};
