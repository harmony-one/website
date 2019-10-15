---
templateKey: blog-post
title: Harmony Project Update 2018–11
date: 2018-12-06T07:11:26.365Z
banner: '/images/uploaded/banners/0-uld3fx7zq9yfunccpng_1553628216.png'
tags:
  - harmony
---
Since our [last newsletter](https://harmony.one/201810-newsletter), we have started _open-sourcing_ our networking stack and exploring _strategic partnership_.

Here’re the highlights:

*   Started to open source our codebase & a new umbrella project called **libunison**_,_
*   Hired 2 new teammates & started targeting 100+ strategic partners,
*   Submitted an [arxiv](https://arxiv.org/abs/1811.02881) **preprint **of neuroscience paper & updated our testnet architecture,
*   Continued growing TGI community & conducting 10+ podcast interviews.

![](/images/uploaded/0-uld3fx7zq9yfunccpng_1553628186.png)

### Open source & networking with libunison

We have identified _data availability_ and _block propagation _to be the **main bottlenecks** of scaling transactions with tens of thousands of (some potentially _malicious_) nodes over the Internet. Our insight is to use the [RaptorQ](https://tools.ietf.org/html/rfc6330) fountain code in conjunction with a forward error correction scheme for broadcasting message blocks, without incurring **round-trip delays** to recover from packet losses, over adversarial networks.

Here we’re launching our open source effort [github.com/harmony-one](http://github.com/harmony-one) with a [go-raptorq](https://github.com/harmony-one/go-raptorq) wrapper under our umbrella project **libunison **(see [our roadmap](http://harmony.one/libunison)).

Our **libunison** is an end-to-end and peer-to-peer networking library for any application that needs to _self-organize an emerging network_ of nodes. The library is built upon existing standardized technologies, including _Host Identity Protocol_ (HIPv2) and _Encryption Security Payload _(ESP), to leverage decades of research, development and deployment insights.

Harmony is open sourcing **libunison** as one of the foundational layers of not only [our network](https://harmony.one/network) but also other performant, decentralized networks such as peer multicasts.

### 2 new teammates & 100+ strategic partners

Our team is growing! [Chao Ma](https://www.linkedin.com/in/mc8305/) (Amazon AI engineer, **Math Ph.D.** at CU Boulder, non-linear analysis researcher) is joining the team to tackle protocol research and statistical consensus. Chao has been researching blockchain algorithms since 2017 and recently implemented a [toy IPFS](https://github.com/chaosma/dfs) for fun.

So did our good friend [Li Jiang](https://www.linkedin.com/in/lijiang2087/) (GSV Capital, logistics startup founder, Northwestern University adjunct, nickname 蒋·和梦·犁). Li has been our evangelist since our **first China trip** in February and finally decided to [jump off the cliff](https://medium.com/@lijiang2087/started-from-the-bottom-now-ad435ecb4aa4) to lead Harmony’s partnership efforts full time. As [the newest node](https://medium.com/harmony-one/meet-the-harmony-team-f211ea407b48) _with awe _on the Harmony team, Li also serves as [“Chief Frisbee Officer”](https://www.youtube.com/watch?time_continue=1&v=bL_yAmJKE1Q)to keep us active in the winter.

We are planning our second token sale. Inspired by these insightful articles [by Multicoin](https://multicoin.capital/2018/10/23/the-evolving-role-of-crypto-investors/) and [by Notation](https://medium.com/notation-capital/notation-blockchain-mining-2-0-dcf46a28f7eb) on _value-adding investors_ as operators, we are asking our new investors to operate Harmony nodes. **Scalability** and **decentralization** are the two most important metrics for Harmony to succeed. We will achieve both by having tens of thousands of nodes, the scale of Bitcoin and Ethereum, run by many _independent entities_ in jurisdictions all over the world.

Having many nodes is key to network **performance** with our sharding approach; meanwhile having independent entities is key to network** security**with our permissionless principle. If you are non-US based and looking to participate in this strategic round, contact us at [harmony.one/partners](http://harmony.one/partners).

### Neuroscience preprint & testnet architecture

Our colleague Prof. Lau has led our team with his research and submitted a paper “[Blockchain and human episodic memory](https://medium.com/harmony-one/blockchain-and-human-episodic-memory-9a6a4ed685ee)” (see [preprint on arxiv](https://arxiv.org/abs/1811.02881)) on relating _brain consciousness _to _blockchain consensus_. We highlight that certain phenomena studied in the brain, namely **metacognition**, reality monitoring, and how perceptual conscious experiences come about, may inspire development in blockchain technology too, specifically regarding **probabilistic consensus protocols**.

Our colleague Ka-yuet Liu, also at UCLA, has published [Data Marketplace for Scientists](https://medium.com/harmony-one/data-marketplace-for-scientists-7666afb68569) in our blog. She highlights a modern economic theory of the [nonrivalry of data](https://www.gsb.stanford.edu/faculty-research/working-papers/nonrivalry-economics-data), concluding that _“blockchain can turn wasteful competition between large-scale science projects into synergy” _among internationally recognized scientists like themselves.

Our [testnet architecture](https://harmony.one/architecture) has been updated to apply the latest research results and progress made by [Ethereum 2.0](https://github.com/ethereum/wiki/wiki/Sharding-FAQs). **Zero-knowledge proofs** by [Starkware](https://multicoin.capital/2018/10/30/our-investment-in-starkware/)are now fast enough to be generated on mobile clients and may be used [to scale blockchains](https://twitter.com/stse/status/1057844527652716544) by many orders of magnitude. [Fraud proofs](https://tokyo2018.scalingbitcoin.org/files/Day1/improving-spv-client-validation-and-security-with-fraud-proofs.pdf) (with _2D erasure codes_ and _interleaved sampling_), [stateless clients](https://eprint.iacr.org/2018/968.pdf) (with algebraic vector commitment), comparing [synchronous](https://research.vmware.com/publications/synchronous-byzantine-agreement-with-expected-o-1-rounds-expected-o-n2-communication-and-optimal-resilience) (with 10 exact round complexity vs previously 29) versus [partially synchronous](https://research.vmware.com/publications/validated-asynchronous-byzantine-agreement-with-optimal-resilience-and-asymptotically-optimal-time-and-word-communication) protocols, and integrating [99% fault tolerance](https://vitalik.ca/general/2018/08/07/99_fault_tolerant.html) (with hybrid **threshold-dependent** and **latency-dependent**consensus) are on our roadmap.

### Growing TGI community & 10+ interviews

Early this month, we had an in-depth _founder interview_ [with Hacker Noon](https://harmony.one/hackernoon), one of the most-read publications **among engineers** and entrepreneurs. On the topic of attracting users and building communities, we answered “_some conversations are multiplicative — we multiply each other’s dreams. And every once in a while, _**_a conversation is exponential_**_, meaning we really build deep belief in each other’s vision and can make it come to life_.”

Furthermore, Spencer writes about [the Future of Scalable Blockchain](https://medium.com/futuresin/ethereum-2-0-and-the-future-of-scalable-blockchain-389cfcc7760c) and compares Harmony to Ethereum 2.0, Dfinity, Cardano and Nervos, complimenting that Harmony’s approach “_is highly cerebral and in tune with the best technology currently available… their spirit of inclusion and entrepreneurship feels a bit more sincere._”

![](/images/uploaded/1-dqvmx0-4glv-khtox1w2kqjpeg_1553628251.jpeg)

We continue to engage a **global community** to share the Harmony story. Here are just a few podcast interviewers and writers we are engaging with. Be sure to check out their work and keep an eye out as our stories will be published soon. Our conversations with these influencers span Silicon Valley, China, SE Asia, India, Australia and Brazil this month. Thanks to [Jon Victor](https://twitter.com/jon_victor_?lang=en) from [The Information](https://www.theinformation.com/), [Joyce Yang](https://twitter.com/JoyceInNYC?lang=en) from [Global Coin Research](https://globalcoinresearch.com/), [Tushar Aggarwal](https://twitter.com/Tushar307?lang=en) from [LunexVC](https://lunex.vc/) & [DecryptAsia](https://decrypt.asia/), [Brad Laurie](https://twitter.com/brad_laurie?lang=en) also known as [BlockchainBrad](https://www.youtube.com/channel/UCbkjUYiPN8P48r0lurEBP8w) and [Gerson Ribeiro](https://www.linkedin.com/in/gersonrfr/) from [Startup de Alto Impacto](https://itunes.apple.com/br/podcast/startups-de-alto-impacto/id1102941013?mt=2) for sharing our journey.

We are also hosting **TGI-Blockchain** on Saturdays now from 12pm to 4pm at our home-office for fellow founders and collaborators to deeply engage with each other. We are inspired by these **builders presenting their works** ([sign up here!](http://harmony.one/tgi)) every Saturday, including [Timeless Protocol](https://www.linkedin.com/in/ziwang0315/), [Rational Mind](http://rationalmind.io/), [Blue Vista](http://bluevista.co/) and [Tara.AI](https://tara.ai/) in recent weeks.

Our team is sharing our learnings globally at a recent talk [in India](https://youtu.be/iH6biQ5kUeY?t=5164) and upcoming events [in Hong Kong](https://twitter.com/harmonyprotocol/status/1062824637401260032) and online with [TokenGazer](https://twitter.com/harmonyprotocol/status/1063250495693742081), as well as meeting our local friends from the [ABC Blockchain](https://harmony.one/abc) and [Xoogler](https://harmony.one/xoogler-lunch) communities.

![](/images/uploaded/1-kbgijhbt58xb8v-cacbohgpng_1553628301.png)

### Essential advice & your help

We’re taking the top two points from [_Y-Combinator’s Essential Startup Advice_](https://harmony.one/yc)(posted next to our coffee machine) to heart: **Launch now, **and **Build something people want**_._

We published [a survey on blockchain testnets](https://medium.com/@leo_hao/https-medium-com-leo-hao-blockchain-testnets-survey-7e0612cf5d72) and we’re laser-focused on building our own public testnet, implementing _information dispersal algorithm_, _state syncing_ and **_resharding_** at the moment.

Lastly, we need your help on hiring _database engineers _to hack **Byzantine agreements** and broadcasts, and on bringing in _strategic investors_ to run Harmony nodes all over the world!

Stephen Tse  
Harmony CEO
