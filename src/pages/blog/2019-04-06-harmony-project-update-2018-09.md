---
templateKey: blog-post
title: Harmony Project Update 2018-09
date: 2019-04-06T07:29:04.394Z
banner: '/images/uploaded/banners/0-tv-5pco9jqgsypotpng_1553601382.png'
tags:
  - harmony
---
Dear investors and friends,

Since our last newsletter, we have achieved significant technical milestones and planned a full outreach tour in Asia.

Here’re the event highlights of our four-city hops (see our tour flyer):

*   9/18–9/21 in Singapore (join our wechat SG group): Consensus Conference.
*   9/21–9/27 in Beijing ([BJ group](https://harmony.one/bj)): technical discussion at Tsinghua, fireside chat with Startup Grind, “Scaling Web 3” tech talk, TGI-blockchain entrepreneur gathering.
*   9/27–10/1 in Shanghai ([SH group](https://harmony.one/sh)): Meetups with Angelhacks & Xnode accelerator.
*   9/30–10/3 in Hong Kong ([HK group](https://harmony.one/hk)): Joint events with Hyperion Maps & iHouse Token.

![](/images/uploaded/0-rbkzbqd7mmbr8esspng_1553601137.png)

Our internal testnet has recently achieved **118,357 transactions per second** on 41,440 machines across Amazon, Google, Microsoft cloud. Our consensus algorithm now features all core features of OmniLedger, including ByzCoinX PBFT, _cross shard transactions_, CoSi multi-signatures, state pruning, and block bootstrapping. We extensively studied the latest research paper [RapidChain](https://eprint.iacr.org/2018/460.pdf) (and its [excellent slides](https://cbr.stanford.edu/seminarTalks/zamani.pdf)). We will soon integrate with RapidChain’s improvements including **P2P Kademlia routing**, Cuckoo reconfiguration, erasure code for gossiping, and distributed bootstrapping.

**Michael Arrington** (Techcrunch News and XRP Capital founder) visited our old garage office in June and has been very supportive of our project. Last week Michael visited again to see the full team and [blogged](http://arringtonxrpcapital.com/2018/09/04/silicon-valleys-harmony-ready-to-debut/), _“This is probably the_ **_hottest pre-funded crypto startup_** _in the valley right now, and investors are clamoring for introductions.”_

![](/images/uploaded/0-asbuq4vlgbi8agn6png_1553606872.png)

We completed our branding and new website design. See [this branding guide](https://harmony.one/brand)for the strategy and voice behind our positioning, _“Harmony is building an_ **_open consensus platform_** _to 1,000x the world’s decentralized economies.”_ The new site [harmony.one](http://harmony.one/) (ready by 9/22) now features FAQs and our updated roadmap.

We continued engaging our academic and general communities. On 9/19, we’ll be giving [a technical lecture](https://mp.weixin.qq.com/s/wa0MPGGVMuESNLFRB1uLlg) at [BitTiger](https://www.youtube.com/channel/UCrTVwxlwmn2CJINfuaiLB1Q) (the largest Chinese tech community in Silicon Valley; see [our slides](https://docs.google.com/presentation/d/1MA4b9vnOEKJvXImFEEM8ZM--L8J629Dm4B_kiOaJvJU/edit#slide=id.g41e90799b7_0_0)) on _scaling consensus algorithms_; and, on 10/18, at **Stanford Law School**’s [CodeX Program](https://law.stanford.edu/event/meet-codex-3/) on _computational law_. We also attended [IACR’s Crypto](https://crypto.iacr.org/2018/affevents/cryptocurrencies/page.html) in Santa Barbara with many technical presentations including Algorand and ThunderCore.

On 10/11, at Cryptoeconomics and Security Conference ([CESC](https://cesc.io/)) by **Blockchain at Berkeley**, we’ll be speaking (along with Dfinity and Oasis Labs) on “_Scaling Consensus with Systems and Language Design_”. Our talk abstract is “To build decentralized AI marketplaces with millions tx/sec, an open consensus platform must **scale end-to-end** from protocols to systems and smart contract verification. We’ll focus on integrating the latest research results and putting them _to production_ with 100k nodes.”

![](/images/uploaded/0-tv-5pco9jqgsypotpng_1553607070.png)

We made [an engineering plan](https://harmony.one/protocol-optimization)for the simulation and optimization of the Harmony network, detailing our roadmap for reference implementations, **standardized network parameters** and quantitative models. Jepsen’s [security analysis](https://jepsen.io/analyses/tendermint-0-10-2) on Tendermint was inspirational, discovering multiple bugs on its key-value store, goleveldb and write-ahead logs.  

We follow closely the latest developments in AI data marketplaces. Two recent works stand out. The first work by Oasis Labs, [Sterling](http://www.vldb.org/pvldb/vol11/p2086-hynes.pdf): _A Privacy-Preserving Data Marketplace_, features pricing, **differential privacy** and efficient model training. The second by Bryan Ford’s Lab, [Calypso](https://eprint.iacr.org/2018/209.pdf): _Auditable Sharing of Private Data over Blockchains_, features dynamic identities and **access revocation**.

We have completed the setup of our foundation for issuing Harmony tokens. Our next **fund raising round** will open shortly. To engage a broad community, we intend to allocate a broad set of investors in many geographies. AngelList ex-General Council and [Republic Crypto](https://republic.co/crypto) CEO, [Kendrick Nguyen](https://www.linkedin.com/in/kendrick-nguyen-7145bb5/), visited; we share the vision of bringing _investment opportunities_ to the masses.

Our [**new pitch deck**](http://harmony.one/talk) is ready, expanding our strategies on smart contracts, _formal verification_, research roadmap and decentralized applications. In particular, we’re exploring Certik’s [verification](https://certik.org/keynote.html), Zillqa’s [games](https://github.com/Zilliqa/scilla/blob/master/tests/contracts/zil-game/contract.scilla), Ekiden’s [poker in Rust](https://github.com/ekiden/contract-poker/blob/master/src/poker_contract.rs), ThunderCore’s [kitties](https://github.com/thundercore/cheshire), and [fomo3d](https://etherscan.io/address/0xa62142888aba8370742be823c1782d17a0389da1#code).

Besides [Picolo](https://picolo.network/paper) (storage and structured access), [Hyperion](https://www.hyn.space/wp-content/uploads/2018/08/Atlas-the-spatial-consensus-blockchain-v1.0.pdf) (_decentralized map_) also becomes our **launch partner** to explore scalable protocols with Harmony. We published on a blog “[_Measure of a blockchain: getting metrics that matter_](https://medium.com/harmony-one/measure-of-a-blockchain-getting-metrics-that-matter-d57a1d034839)_,”_ explaining why stress tests, randomized transactions, standard ratios, minimum requirements, **steady state behavior**, and cost are keys to blockchain performance reports.

Prof. [Thang Dinh](http://www.people.vcu.edu/~tndinh/) (billion-scale graph mining, network security, approximation algorithms) has begun collaborating with us on network optimization. Prof. Lau and Prof. Liu [visited us](https://www.instagram.com/p/BnxCYmihEQz/) for three days to [update us on](https://docs.google.com/document/d/1SdxRx6CTBabunCNqJaE_eRNxyp7l7BkldiMI_C1okQ0/edit)NeuroLedger and to explore ideas on data marketplaces.

For hiring, we’re focusing on **systems engineers** with Rust and kernel experience; on **protocol researchers** with expertise in consensus algorithms, fault tolerant design and high performance; and, on **compiler writers** with OCaml and Coq skills for our smart contracts.

Albert Einstein writes, “_In art, and in the higher ranges of science, there is a feeling of_ **_harmony which underlies all endeavor_**_. There is no true greatness in art or science without that sense of harmony._” Lastly, we need your help on the following:

*   Shoutouts for [our events](http://www.huodongxing.com/event/8457230199100) in Singapore, Beijing, Shanghai and Hong Kong.
*   [Hiring](http://harmony.one/hiring) systems engineers, _protocol researchers_ and compiler writers.
*   Sharing this [https://harmony.one/newsletter](https://harmony.one/newsletter) with the public!

  

Stephen Tse  
[Harmony](http://harmony.one/) CEO
