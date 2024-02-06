import React, { useEffect, useState } from "react";
import { Cascader, Input, Select, Space, notification } from "antd";

const { Search } = Input;

const { Option } = Select;

import { useRouter } from "next/router";

const searchByOptions = [
  {
    label: "Transfer",
    options: [
      { label: "Block Number", value: "transfer_block_num" },
      { label: "Block Hash", value: "transfer_block_hash" },
      { label: "Amount (Rao)", value: "transfer_amount" },
      { label: "From Account", value: "transfer_from" },
      { label: "To Account", value: "transfer_to" },
    ],
  },
  {
    label: "Account",
    options: [{ label: "Hotkey/Coldkey", value: "key" }],
  },
];

// transform searchByOptions to a lookup table for value to label
const searchByOptionsLookup = searchByOptions.reduce((acc, cur) => {
  const { options } = cur;
  options.forEach((option) => {
    acc[option.value] = option.label;
  });
  return acc;
}, {});

export default function SearchBar() {
  // const [loading, setLoading] = useState(false);
  // router
  const router = useRouter();

  const [searchBy, _setSearchBy] = useState("");
  const [searchValue, _setSearchValue] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (router.isReady) {
      console.log("searchByQuery", router.query.searchBy);
      const searchByQuery =
        (router.query.searchBy as string) ?? (searchBy || "key");
      _setSearchBy(searchByQuery);

      const searchValueQuery = router.query.q as string;
      searchValueQuery && _setSearchValue(searchValueQuery);
    }
  }, [router.isReady, router.query, searchBy]);

  const setSearchBy = (value: string) => {
    _setSearchBy(value);
    router.replace({
      query: { ...router.query, searchBy: value },
    });
  };

  // const setSearchValue = (value: string) => {
  //   _setSearchValue(value);
  //   router.replace({
  //     query: { ...router.query, q: value },
  //   });
  // };

  const selectAfter = (
    <Select
      value={searchBy}
      onSelect={(value) => {
        setSearchBy(value);
      }}
      options={searchByOptions}
      style={{ width: 150 }}
    ></Select>
  );

  return (
    <>
      <Search
        value={searchValue}
        onChange={(e) => {
          _setSearchValue(e.target.value);
        }}
        addonBefore={selectAfter}
        placeholder={"Search by " + searchByOptionsLookup[searchBy]}
        // loading={loading}
        enterButton="GO"
        status={error ? "error" : undefined}
        onSearch={async (q) => {
          setError("");
          console.log(searchBy, q);
          if (
            searchBy == "key" ||
            searchBy == "transfer_from" ||
            searchBy == "transfer_to"
          ) {
            if (q.length != 48) {
              let e = "Account addresses must be 48 characters long";
              setError(e);
              notification.open({
                message: "Invalid Input",
                type: "error",
                description: e,
                placement: "bottomRight",
                onClick: () => {
                  console.log("Notification Clicked!");
                },
              });
              return;
            }
            router.push("/key/" + q);
            return;
          }

          if (
            searchBy == "transfer_amount" ||
            searchBy === "transfer_block_num"
          ) {
            // convert to number
            q = q.replaceAll(",", "");
            // set
            // _setSearchValue(q);
          }
          router.push({
            pathname: "/search",
            query: { searchBy, q },
          });
        }}
      />
    </>
  );
}
