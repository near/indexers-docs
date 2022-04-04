---
sidebar_position: 1
---

# Indexers Doc

Welcome to the Indexers Doc. Here you will find everything you might need about indexers.

In order to help everyone to understand the concept of indexer and to provide you with all the inputs so you can build your own indexer.

:::info Disclaimer

Explanation on this page assumes you have a certain level of understanding of the blockhains.

:::


## What is indexer?

### Blockchains and it's nature

Blockchain data is optimized for serialized **writes**, one block at a time, as the chain is being created. Querying the blockchain for data about a specific block or account is a fairly straightforward or "narrow" query. However, querying data across many blocks can be cumbersome because we have to aggregate results from multiple single-block queries. We can consider these *"wide" queries*.

Giving the fact that a blockchain itself is a database and smart-contract (decentralized application, dApp) is an application that runs on a virtual machine inside a blockchain, we need to understand that smart-contract should be considered as a "backend". While some applications might consist only of smart-contract, in most cases it is not even possible.

Smart-contracts are limited in terms of interactions. By "interactions" we mean things that became very common in the real-world, like user notifications, integration with third-party applications, etc.

However, the nature of a blockchain is that it must be deterministic. The feature of a blockchain that it knows about the state at a given time, and for blockchains the time is a block. Think of it as about snapshots. A blockchain does snapshots of it's state on every block. We as users can call smart-contract for a specific block, and a blockchain guarantees us to be executed with the same result for the same block any time we call it.

The deterministic nature of a blockchain closes it from outer world variables. It is totally impossible to perform a call to some API from within a smart-contract. A blockchain and a smart-contract are closed from outer world

![Blockchain closed from outer world](/docs/intro/blockchain.png)

Blockchains are great at providing a way to apply the requested changes to the state in a decentralized manner. However, in order to observe the changes, you need to actively pull the information from the network.

Instead of abstractive explanations let's look at the example.

:::note Example dApp

Say, we have a smart-contract that is selling e-books. Once a user bought a book we want to send him a copy via email.

:::


The dApp has a helper deployed somewhere off-chain, and this helper has a code that can send an email with a copy of an e-book. But would we trigger the helper?

### Getting the data from a blockchain from the outer world

NEAR blockchain implements a [JSON-RPC endpoint](https://docs.near.org/docs/api/rpc) for everyone to interact with the blockchain. Throught the JSON-RPC API users can call smart-contracts triggering them to be executed with a given parameters. Also, users can view the data from the blockchain.

So, continuing with our example we can make our helper to pull a [Block](https://docs.near.org/docs/api/rpc/block-chunk#block) every second, then pull all the [Chunks](https://docs.near.org/docs/api/rpc/block-chunk#chunk) and analyze the Transactions included in the Block to check if there is a transaction to our smart-contract with "buy an e-book" function call. If we observe such a Transaction we need to ensure it is successful to prevent sending the e-book to the user if the "buy e-book" Transaction has failed.

After all this action we can trigger the helper's code to send user an email with the e-book they bought.

This approach is so called *pull model* of getting the data. There is nothing wrong with this approach, sometimes you might find it as not the most comfortable or reliable approach though.

Also, not all the data is available through the JSON-RPC. *Local Receipts* for example are not available through the JSON-RPC, because they are not stored in the NEAR node internal database.

### Indexer

A blockchain indexer is an implementation of the *push model* of getting the data. Instead of actively pulling the data from the source, your helper waits for the data to be sent to it. The data is as full as it could be and the helper can start analyzing it immediately, and ideally the data is full enough to avoid any additional pulling any details.

Getting back to our example, the helper becomes **an indexer** that receives every *Block* along with **Chunks**, **Transactions** with its statuses, etc. In the same way the helper analyzes the data and triggers the code to send user an email with the e-book they bought.

![Indexer is streaming the data from the blockchain](/docs/intro/indexer.png)

:::info An indexer concept

An indexer listens to the *stream of data as it's being written on chain* and can then be immediately filtered and processed to detect interesting events or patterns.

:::


## Indexers and "wide" queries

The term *"wide" queries* was mentioned in the beginning of this document. Here's a recap:

:::note "Wide" queries definition

To query data across many blocks requires the aggregation of results from multiple single-block queries. We can consider these *"wide" queries*.

:::

Because indexers listen to the *stream of data* from the blockchain and the data can be immediately filtered and processed according the defined requirements, they can be used to simplify the "wide" queries execution. For example, this stream of data can then be written to a permanent database for later data analysis using a convenient query language like SQL. That is what [Indexer for Explorer](./projects/near-indexer-for-explorer.mdx) is doing.

Another example that highlights the need for a "wide query" is when you use a seed phrase to recover one or more accounts. Since a seed phrase essentially represents a signing key pair, the recovery is for all accounts that share the associated public key. Therefore, when a seed phrase is used to recover an account via [NEAR Wallet](https://wallet.near.org), the query requires that all accounts with a matching public key are found and recovered. [NEAR Indexer for Explorer](./projects/near-indexer-for-explorer.mdx) is storing this data to permanent database and this allows [NEAR Wallet](https://wallet.near.org) to perform such "wide queries". This is impossible to achieve using JSON-RPC only.

## Summary

We hope this article gives you an understanding of an indexer concept. Also, we hope now you can easily decide whether you need an indexer for your application.

## What's next?

We encourage you to learn more about the [indexer projects](./projects/overview.md). Please, proceed to [Tutorials](/tutorials/intro) section to learn how to build an indexer on practise.

