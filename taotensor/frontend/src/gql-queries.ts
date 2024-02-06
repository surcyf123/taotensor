import { gql } from "@apollo/client";

const TRANSFER_FIELDS = gql`
  fragment TransferTableFields on Transfer {
    id
    amount
    from {
      id
    }
    to {
      id
    }
    blockNum
    timestamp
  }
`;

export const GET_TRANSFERS_BY_KEY = gql`
  ${TRANSFER_FIELDS}
  query GetTransfersByKey($key: String!) {
    transfers(
      where: { OR: [{ from: { id_eq: $key } }, { to: { id_eq: $key } }] }
    ) {
      ...TransferTableFields
    }
  }
`;

export const GET_TRANSFERS = gql`
  ${TRANSFER_FIELDS}
  query GetTransfers(
    $amount: BigInt
    $from: String
    $to: String
    $blockNum: Int
    $id: String
    $timestamp_gte: BigInt
    $timestamp_lte: BigInt
  ) {
    transfers(
      where: {
        amount_eq: $amount
        from: { id_eq: $from }
        to: { id_eq: $to }
        blockNum_eq: $blockNum
        id_eq: $id
        timestamp_gte: $timestamp_gte
        timestamp_lte: $timestamp_lte
      }
    ) {
      ...TransferTableFields
    }
  }
`;
