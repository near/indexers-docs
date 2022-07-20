---
sidebar_position: 4
---

# NEAR Indexer Framework

:::note GitHub repo

https://github.com/near/nearcore/tree/master/chain/indexer

:::


:::caution You might be looking for NEAR Lake Framework

Our team has released [NEAR Lake Framework](./near-lake-framework) to replace NEAR Indexer one. Please, consider the latter as a low-level tool. 

:::


## Description

NEAR Indexer Framework is a crate in [nearcore](https://github.com/near/nearcore) and the crate name is `near-indexer`.

`near-indexer` is a micro-framework, which provides you with a stream of blocks that are recorded on NEAR network. It is useful to handle real-time "events" on the chain.

## Rationale

As scaling dApps enter NEAR’s mainnet, an issue may arise: how do they quickly and efficiently access state from our deployed smart contracts, and cut out the cruft? Contracts may grow to have complex data structures and querying the network RPC may not be the optimal way to access state data. The NEAR Indexer Framework allows for streams to be captured and indexed in a customized manner. The typical use-case is for this data to make its way to a relational database. Seeing as this is custom per project, there is engineering work involved in using this framework.

NEAR Indexer is already in use for several new projects, namely, we index all the events for NEAR Blockchain Explorer, and we also dig into Access Keys and index all of them for NEAR Wallet passphrase recovery and multi-factor authentication. With NEAR Indexer you can do high-level aggregation as well as low-level introspection of all the events inside the blockchain.

We are going to build more Indexers in the future, and will also consider building Indexer integrations with streaming solutions like Kafka, RabbitMQ, ZeroMQ, and NoSQL databases. Feel free to [join our discussions](https://github.com/nearprotocol/nearcore/issues/2996).

See the [example](https://github.com/nearprotocol/nearcore/tree/master/tools/indexer/example) for further technical details.

- [`near-examples/indexer-tx-watcher-example`](https://github.com/near-examples/indexer-tx-watcher-example) NEAR Indexer example that watches for transaction for specified accounts/contracts

:::info NEAR Indexer Framework usage

The most famous projet build on top of NEAR Indexer Framework is [NEAR Indexer for Explorer](./near-indexer-for-explorer)

:::
