import { raoToTao } from "@/utils";
import { DateTime } from "luxon";

export const formatXAxis = (tickItem: number) => {
  // Convert timestamp from milliseconds to a human-readable format using Luxon
  return DateTime.fromMillis(tickItem).toFormat("yyyy-MM-dd HH:mm");
};

export function fullOuterJoinOnTimestamp(a, b) {
  // Combine the two datasets and extract unique timestamps
  const timestamps = Array.from(
    new Set([...a, ...b].map((item) => item.timestamp))
  );

  // Map over the unique timestamps and find the corresponding items in both datasets
  return timestamps.map((timestamp) => {
    const itemA = a.find((item) => item.timestamp === timestamp) || {};
    const itemB = b.find((item) => item.timestamp === timestamp) || {};

    return { ...itemA, ...itemB };
  });
}

type DataEntry = {
  timestamp: number;
  [key: string]: any;
};

export function innerJoinOnTimestamp(
  a: DataEntry[],
  b: DataEntry[]
): DataEntry[] {
  // Find the common timestamps in both datasets
  const timestamps = Array.from(
    new Set(a.map((item) => item.timestamp))
  ).filter((timestamp) => b.some((item) => item.timestamp === timestamp));

  // Map over the common timestamps and find the corresponding items in both datasets
  return timestamps.map((timestamp) => {
    const itemA = a.find((item) => item.timestamp === timestamp)!;
    const itemB = b.find((item) => item.timestamp === timestamp)!;

    return { ...itemA, ...itemB };
  });
}

import { bisect, scaleTime } from "d3";

/**
 * Iterates over the array of objects and copies over the latest recorded value
 * for each specified key if the current object is missing that value.
 */
export function fillData({
  data,
  valuesToFill,
}: {
  data: DataEntry[];
  valuesToFill: string[];
}): DataEntry[] {
  // Define an object to store the latest recorded values
  const latestValues: { [key: string]: any } = {};

  // Iterate over the data
  data.forEach((entry) => {
    // Iterate over the keys to fill
    valuesToFill.forEach((key) => {
      // If the current entry is missing the key, copy over the latest value
      if (entry[key] === undefined && latestValues[key] !== undefined) {
        entry[key] = latestValues[key];
      } else if (entry[key] !== undefined) {
        // Otherwise, update the latest value
        latestValues[key] = entry[key];
      }
    });
  });

  return data;
}

export function bucketizeData({
  data,
  bucketSize,
  interval,
  filter,
}: {
  data: DataEntry[];
  bucketSize: number;
  interval: [number, number];
  filter?: (entry: DataEntry) => boolean;
}): DataEntry[] {
  // Calculate the number of buckets
  const numOfBuckets = Math.floor((interval[1] - interval[0]) / bucketSize);

  // Create a time scale for the given interval
  const timeScale = scaleTime()
    .domain(interval)
    .rangeRound([interval[0], numOfBuckets * bucketSize]);

  // Get the bucket timestamps
  const buckets = timeScale.ticks(numOfBuckets).map((d) => d.getTime());

  // Create a map to hold the bucketized data
  const bucketMap = new Map<number, DataEntry>();

  data.forEach((entry) => {
    if (filter && !filter(entry)) {
      debugger;
      return;
    }
    // Find the index of the rightmost value less than or equal to the timestamp
    const i = bisect(buckets, entry.timestamp);
    // Find the closest bucket timestamp
    const bucketTimestamp =
      i === 0
        ? buckets[i]
        : i < buckets.length &&
          Math.abs(buckets[i] - entry.timestamp) <
            Math.abs(buckets[i - 1] - entry.timestamp)
        ? buckets[i]
        : buckets[i - 1];

    // Get the existing data in the bucket (if any)
    const existingData = bucketMap.get(bucketTimestamp) || {};

    // Merge the existing data with the new entry
    const mergedData = {
      ...existingData,
      ...entry,
      timestamp: bucketTimestamp,
    };

    // Store the merged data back into the map
    bucketMap.set(bucketTimestamp, mergedData);
  });

  // Convert the map to an array
  const bucketizedData = Array.from(bucketMap.values());

  console.log("bucketizedData", bucketizedData);
  return bucketizedData;
}

export function aggregateData({
  data,
  bucketSize,
  valueKey,
  transform,
}: {
  data: any;
  bucketSize: number;
  /** The values under this key must be a number. If the key is omitted each entry will be the value of 1 */
  valueKey?: string;
  /** A function to transform the valueKey, e.g. from rao to tao */
  transform?: (x: number) => number;
}) {
  const groupedData = data.reduce((acc, curr) => {
    // Create a bucket by truncating the timestamp to the nearest bucketSize.
    const timestamp = Math.floor(curr.timestamp / bucketSize) * bucketSize;

    if (!acc[timestamp]) {
      acc[timestamp] = { timestamp, count: 0 };
      valueKey && (acc[timestamp][valueKey] = 0);
    }

    // It's good to check if curr[valueKey] is a valid number
    valueKey && (acc[timestamp][valueKey] += Number(curr[valueKey]));
    acc[timestamp].count += 1;

    return acc;
  }, {});

  // Convert the grouped data into an array and calculate the average amount.
  const aggregatedData = Object.values(groupedData).map((d: any) => ({
    timestamp: d.timestamp,
    [valueKey || "amount"]: valueKey
      ? d.count > 0
        ? transform
          ? transform(d[valueKey])
          : d[valueKey] / d.count
        : 0 // Protect against division by 0
      : d.count,
  }));

  console.log("aggregatedData", aggregatedData);
  return aggregatedData;
}

export function aggregateGroupData({
  data,
  bucketSize,
  groupBy,
}: {
  data: any;
  bucketSize: number;
  groupBy: string;
}) {
  const groupedData = data.reduce((acc, curr) => {
    // Create a bucket by truncating the timestamp to the nearest bucketSize.
    const timestamp = Math.floor(curr.timestamp / bucketSize) * bucketSize;
    const groupKey = `${curr[groupBy]}`;

    // Initialize bucket if it doesn't exist
    if (!acc[timestamp]) {
      acc[timestamp] = { timestamp };
    }

    // Initialize group count if it doesn't exist
    if (!acc[timestamp][groupKey]) {
      acc[timestamp][groupKey] = 0;
    }

    // Increment count for the specific group
    acc[timestamp][groupKey] += 1;

    return acc;
  }, {});

  // Convert the grouped data into an array
  const aggregatedData = Object.values(groupedData);

  console.log("aggregatedGroupData", aggregatedData);
  return aggregatedData;
}
