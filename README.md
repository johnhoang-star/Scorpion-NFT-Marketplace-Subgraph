# NFT-Marketplace-Subgraph

graph init
cd .*
graph auth --studio 5a478c7cc1194aef8cbf309bf4317437
yarn codegen
yarn build
yarn deploy

Deployed to https://thegraph.com/explorer/subgraph/goldenstar111/marketplace

Subgraph endpoints:
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/goldenstar111/marketplace

connected address
https://kovan.etherscan.io/address/0x469518b2DB65c822a97552e8FD62b5fC0F823c20#code