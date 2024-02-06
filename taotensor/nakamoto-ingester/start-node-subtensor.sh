#!/bin/bash

cd /home/ubuntu/subtensor/target/release

./node-subtensor \
          --base-path /data2/nakamoto-chain-state \
          --chain /home/ubuntu/taotensor/nakamoto-ingester/raw_spec_nakamoto.json \
          --rpc-external --rpc-cors all \
          --ws-external --no-mdns --unsafe-rpc-external \
          --ws-max-connections 10000 --in-peers 500 --out-peers 500 \
          --sync Full \
          --pruning=archive