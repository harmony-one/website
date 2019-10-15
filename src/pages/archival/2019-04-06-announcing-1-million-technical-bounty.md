---
templateKey: blog-post
title: Announcing $1 Million Technical Bounty
date: 2019-04-06T06:53:22.923Z
banner: /images/uploaded/1-sajdocctsfofgy8hnizyeggif_1553670214.gif
tags:
  - harmony
---
_Focused on Tooling & Infrastructure Development_
-------------------------------------------------

We recently completed and paid out our first few technical bounties on Gitcoin. What started as an experiment, has now become an inspiration to engage developers in building the **Harmony ecosystem.**  

![](/images/uploaded/1-sajdocctsfofgy8hnizyeggif_1553670214.gif)

### Goal

At Harmony, we believe in bringing values by first building a solid _foundation_on top of which people can build awesome blockchain products and use cases. To this end, we have strived to focus on the core protocol, and we are proud of [our](https://docs.google.com/document/d/11h4oTxEMiIPWih-QBBGLF6coCAqzBOiCahltDA034AU) [progress](https://github.com/harmony-one/harmony) so far. At the same time, we see that the core protocol that we are building is only a base camp. Our journey — into the vast blockchain wilderness waiting for us — begins here, but we know that we would need more than just a base camp for us to make that journey. A _lot_ more for _10 billion_ people to make that journey.

So we have identified and compiled a list of a few of such key areas that need to be built around our core protocol. And we would like to ask fellow builders to join us. We’re designing this bounty program to make life easier for developers, partners and node operators to interact with Harmony’s blockchain.

> _If you see an area and think “Hey, that’s my home turf!”, please consider joining our effort so that together we can make this journey happen._

### dApp & SDK Pipeline  

### Ethereum Ecosystem Bridge

The account and transaction models (and on-the-wire representation) we use today are [largely taken from Ethereum](https://github.com/harmony-one/harmony/tree/c4a70adc9a2e38a10fbe184c7684915581dbb167), although our consensus protocol — carrying them as payloads — are drastically different. At the same time, we have noticed that the layered nature of Ethereum’s ecosystem enables applications and tools such as Metamask and Truffle to interface with the Ethereum chain without necessarily having to speak the on-the-wire Ethereum protocol: It is sufficient for them to speak [Ethereum’s JSON-RPC](https://github.com/ethereum/wiki/wiki/JSON-RPC).

So we would like to see a JSON-RPC provider that speaks to our protocol and interfaces with our network. Put simply, it would be a [**Web3.js**](https://github.com/ethereum/web3.js/)** for Harmony**, to which Metamask and other Ethereum ecosystem tools and products can talk.

### Harmony SDK

Even if we had our own Web3.js-compatible bridge, it won’t be the only thing that needs to interface with our network. Developer tools such as Truffle are good examples: They often need lower-level, finer-grained access to the network than Web3.js provides. We will also have our own features not readily compatible with stock Ethereum model, and Web3.js is likely to prove inadequate for them.

So we would like a lower-level** SDK/library**, which can talk to the Harmony network speaking and understanding the same protocol and semantics. The Harmony Web3.js bridge mentioned above then could use and let this SDK do the Harmony-specific heavy-lifting and focus properly on being an Ethereum-compatible adaptation layer.

### Tools & Apps (Phase 2)

Once we have the SDK and bridge in place, we would be ready to welcome existing Ethereum dApps and development tools. If you use or develop such dApps and/or tools, we would like to invite you to try our network.

### Node Deployment

Our network needs nodes. Lots of them. But if it were a major hassle to do so, no one would bother. So we want to make it easy and painless to set up and operate a node. This entails, among other things, moving _technical_ obstacles and burdens out of the node operator’s way, so that they wouldn’t have to worry once about them.

The first step would be, of course, painless deployment: If a node operator already had an AWS account, it should be a breeze for them to run nodes there. Same for Azure, Google Compute Platform, Digital Ocean. Same for their own PC at home. And their laptop.

Fully customizing deployment on each of those platforms is painful, so we do not want to go that path. Instead, **we want to provide a Docker image and let node operators easily pull and run it on the container platform of their choice (Docker for Windows, Docker for Mac, AWS ECS/EKS…).**

Being the most familiar with our own Harmony binary, we at Harmony plan to create a standardized and well-documented container image, as an atomic component in deployment options. We would like to invite deployment engineers to take this image and let node operators to run it.

### Node/cluster/network Monitoring

Some node operators are occasional hobbyists, but others are more serious: They put serious amount of resource into node operation, are in for a serious amount time — even indefinitely — and expect an equally serious reward. To them, it is paramount to keep their nodes up and running, and also to make sure that they are in a healthy network. They do not want things or situations to deteriorate — and their reward to diminish — without them knowing. If a bad thing were to happen, they want to find out and do something about it as soon as possible. They want to _monitor_ their nodes and the network.

The catch is, not all node operators are die-hard technologists. We should not expect them to build their own Harmony-protocol-aware monitoring system for their one-million-token node cluster. Instead, we want to give them right tools to use, so that they can easily keep an eye on their investment and return.

On a more technical/tactical level, we think it would be most beneficial if each operator could co-locate their node (or a cluster of nodes) with an ELK (Elasticsearch, Logstash, Kibana) + Elastic Beats (Metricbeat + Filebeat) stack:

*   Metricbeat sends node-system-wide health metrics to Elasticsearch;
*   Filebeat sends node logs to Elasticsearch (both system-wide and Harmony logs);
*   Logstash (optional) aggregates and enriches log/metric with context information;
*   In this case, Beats emit data to Logstash, which then processes the data before sending it to Elasticsearch.
*   Elasticsearch stores and indexes logs (full-text searchable) and metrics (time-searchable);
*   Kibana acts as an operator dashboard; and
*   A monitoring script catches anomalies and alerts operators.

We have a preliminary version that works with PagerDuty, but that was geared toward our own needs, and we would like to invite seasoned devops engineers with ELK stack experience to build a more streamlined, easy-to-deploy-and-use system.

### Here’s a list of the available projects

*   Harmony-Ethereum Bridge: web3.js, **Metamask**, Truffle
*   Harmony Deployment: **Docker**, Kubernetes, tunneling
*   Harmony Ops: Elasticsearch, **Logstash,** Kibana, Beats

### How to get started

We shall update all [Issues and Projects](https://github.com/harmony-one/harmony-open) on our Github. You will soon see these bounties posted on popular bounty networks. Each bounty will have its unique payout value based on the scope and effort required.

The payouts will be in Harmony tokens, which will be disbursed on the successful completion of the bounty. To get started building with us, join our [Discord](http://harmony.one/discord) chat, and feel free to write to us on community@harmony.one

_Shout out to _[_Eugene Kim_](https://medium.com/@harmony_ek)_ for outlining the Technical bounty program for _[_Harmony_](http://harmony.one/)_ and contributing to this post!_
