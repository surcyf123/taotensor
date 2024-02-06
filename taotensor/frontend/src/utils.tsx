import React from "react";
import {
  Netuid,
  hyperParametersList,
  netuid_labels,
  raoFactor,
} from "./constants";
import { TabsProps } from "antd";
import { ApiPromise } from "@polkadot/api";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

export const generateNetuidTabs: (
  fn: (netuid: Netuid, index: number) => React.ReactNode
) => TabsProps["items"] = (fn) => {
  return netuid_labels.map((netuid, i) => {
    return {
      label: netuid.label,
      key: netuid.key,
      children: fn(Number(netuid.key) as Netuid, i),
    };
  });
};

export const queryAllHyperParams = (api: ApiPromise, netuid) =>
  hyperParametersList.map((hyperParameter) => {
    const snake = hyperParameter[0].toLowerCase() + hyperParameter.slice(1);
    console.log(hyperParameter, snake);
    return api.query.subtensorModule[snake](netuid);
  });

export const numberWithCommas = (x: number) => {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};

const defaultTaoFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "TAO",
  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});
const noDecimalsTaoFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "TAO",
  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export const taoToRao = (tao: number) => tao * raoFactor;
export function raoToTao(rao: bigint): bigint;
export function raoToTao(rao: number): number;
export function raoToTao(rao: bigint | number): bigint | number {
  if (typeof rao === "bigint") {
    return rao / BigInt(raoFactor);
  }
  return rao / Number(raoFactor);
}

export const taoToHuman = (
  value: number,

  {
    decimals = true,
    from = "tao",
    symbol = true,
  }: {
    decimals?: boolean;
    from?: "rao" | "tao";
    symbol?: boolean;
  } = {}
) => {
  let tao;
  if (from === "rao") {
    tao = raoToTao(value);
  } else {
    tao = value;
  }

  const parts = decimals
    ? defaultTaoFormatter.formatToParts(tao)
    : noDecimalsTaoFormatter.formatToParts(tao);
  return parts
    .map((v) => v.value)
    .join("")
    .replace("TAO", symbol ? " τ" : "");
};

export const raoToHuman = (rao: number) => {
  const parts = defaultTaoFormatter.formatToParts(rao);
  console.log(parts);
  const a = parts
    .slice(0, -2) // remove the last two parts, which are the decimal separator and the cents
    .map((v) => v.value);

  console.log(a);
  // Move currency to back
  let first = a[0];
  a[0] = a.at(-1)!;
  a[a.length - 1] = first;
  return a.join("").replace("TAO", "Rao");
};

export const displayTaoAndRao = (rao: number) => {
  return (
    <>
      {taoToHuman(rao, { from: "rao" })}
      <small style={{ display: "block" }}>{raoToHuman(rao)}</small>
    </>
  );
};

let compactFormatter = Intl.NumberFormat("en", {
  notation: "compact",
  maximumFractionDigits: 0,
});
export const formatCompact = (n: number) => compactFormatter.format(n);

let scientificFormatter = Intl.NumberFormat("en", {
  notation: "scientific",
  maximumFractionDigits: 0,
});
export const formatScientific = (n: number) => scientificFormatter.format(n);

export const blockExplorerQuery = (query: string) => {
  return `https://polkadot.js.org/apps/?rpc=wss://entrypoint-finney.opentensor.ai:443#/explorer/query/${query}`;
};

/**
 * Does not give the exact time, but gives a rough estimate. From block 1 to block 1_000_000, it is one minute off.
 * @param block
 * @returns
 */
export const finneyBlockToMilliseconds = (block: number) => {
  let timeAt1 = 1_679_338_080_009;
  // 12 seconds per block
  return timeAt1 + block * 12 * 1000;
};

import { Tooltip } from "antd";

export const displayAccount = (account: string) => {
  // ellipsis css style to show 10 characters, then ellipsis, make all copyable
  return (
    // Copy account icon
    <div style={{ display: "flex", alignItems: "center" }}>
      {/* <svg
        onClick={() => {
          navigator.clipboard.writeText(account);
        }}
        style={{
          cursor: "pointer",
          marginRight: "0.5rem",
          verticalAlign: "middle",
        }}
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        className="bi bi-clipboard"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M4 1.5A1.5 1.5 0 0 1 5.5 0h5A1.5 1.5 0 0 1 12
        1.5v1h1a2 2 0 0 1 2 2v9.5A1.5 1.5 0 0 1 13.5
        15h-11A1.5 1.5 0 0 1 1 13.5V3a2 2 0 0 1 2-2h1v-.5zM4
        2h5a.5.5 0 0 1 .5.5v.5H3v-.5A.5.5 0 0 1 3.5
        2zm7 4H5v7h6V6zm-4 1.5a.5.5 0 0 1 .5-.5h2a.5.5
        0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"
        />
      </svg> */}
      <Link href={`/key/${account}`}>
        <span
          style={{
            verticalAlign: "middle",
            display: "inline-block",
            width: "10ch",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
          title={account}
        >
          {account}
        </span>
      </Link>
      {/* Font awesome copy icon */}

      <Tooltip title={"Copied address"} trigger="click">
        <FontAwesomeIcon
          icon={faCopy}
          onClick={() => navigator.clipboard.writeText(account)}
          style={{
            cursor: "pointer",
            marginLeft: "0.5rem",
          }}
        ></FontAwesomeIcon>
      </Tooltip>
    </div>
  );
};
