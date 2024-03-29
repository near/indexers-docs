---
sidebar_position: 1
sidebar_label: Overview
---

# Projects overview

Here's a quick overview of Indexer projects::

- [NEAR Indexer for Explorer](https://docs.near.org/tools/indexer-for-explorer): an indexer built on top of the indexer microframework. It watches and stores all events/data from the blockchain to a **PostgreSQL database**.
- [NEAR Lake Framework](https://docs.near.org/concepts/advanced/near-lake-framework): a companion library to NEAR Lake. It allows you to build your own indexer that watches a stream of blocks **from a NEAR Lake data source** and allows you to **create your own logic to process that data**. Keep in mind this is **probably the one you want to use for future projects**, instead of the Indexer Framework. Read [why](https://docs.near.org/concepts/advanced/near-indexer-framework#why-is-it-better-than-near-indexer-framework).
- [NEAR Indexer Framework](https://docs.near.org/concepts/advanced/near-indexer-framework): a micro-framework providing you with a "live" stream of blocks. Useful to handle on-chain real-time "events".
- [NEAR Lake Indexer](https://docs.near.org/concepts/advanced/near-lake-framework): an indexer built on top of the indexer microframework. It watches the blockchain and stores all events/data from the blockchain as **JSON files on AWS S3 or S3 compatible storage**.
