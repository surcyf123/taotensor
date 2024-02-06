package com.taotensor.NakamotoIngester;

import org.rocksdb.*;

import java.util.ArrayList;
import java.util.List;

public class App {
    public static void main(String[] args) {
        System.out.println("Starting Ingester...");

        // a static method that loads the RocksDB C++ library.
        RocksDB.loadLibrary();
        System.out.println("Loaded RocksDB C++ library successfully.");

        final List<ColumnFamilyDescriptor> columnFamilyDescriptors = new ArrayList<>();
        // add default column family
        columnFamilyDescriptors.add(new ColumnFamilyDescriptor(RocksDB.DEFAULT_COLUMN_FAMILY));
        // add other column families
        for (int i = 0; i <= 11; i++) {
            columnFamilyDescriptors.add(new ColumnFamilyDescriptor(("col" + i).getBytes()));
        }

        for (ColumnFamilyDescriptor cfd : columnFamilyDescriptors) {
            System.out.println("Column family name: " + new String(cfd.getName()));
        }

        // Create list to hold column family handles
        List<ColumnFamilyHandle> columnFamilyHandles = new ArrayList<>();
        final DBOptions options = new DBOptions().setCreateIfMissing(false);

        RocksDB db = null;
        try {
            db = RocksDB.open(
                    options,
                    "/data2/nakamoto_nightly_snapshot_2023-05-02",
                    columnFamilyDescriptors,
                    columnFamilyHandles);

            System.out.println("Loaded RocksDB");
            // print the stats
            System.out.println(db.getProperty("rocksdb.stats"));

        } catch (RocksDBException e) {
            System.out.println("Error loading RocksDB");
            System.out.println(e);
        }

        System.out.println("Attempting to iterate");
        try {
            for (int i = 0; i < columnFamilyHandles.size(); i++) {
                System.out.println("Reading column family: " + new String(columnFamilyDescriptors.get(i).getName()));
                RocksIterator iterator = db.newIterator(columnFamilyHandles.get(i));
                for (iterator.seekToFirst(); iterator.isValid(); iterator.next()) {
                    System.out.println("key: " + new String(iterator.key()) + ", value: " + new String(iterator.value()));
                }
                iterator.close();
            }
        } catch (Exception e) {
            // Handle the exception here
            e.printStackTrace();
        }


        // always close column family handles before closing the db itself
        for (ColumnFamilyHandle cfh : columnFamilyHandles) {
            cfh.close();
        }

        if (db != null) {
            db.close();
        }
    }
}
