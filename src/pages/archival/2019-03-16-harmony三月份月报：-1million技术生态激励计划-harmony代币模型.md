---
templateKey: blog-post
title: Harmony三月份月报：$1million技术生态激励计划 & Harmony代币模型
banner: /images/uploaded/banners/0-ayz33qp64eedf15ujpg_1553678888.jpg
date: 2019-03-16T06:48:25.723Z
tags:
  - harmony
---
亲爱的Harmony社区朋友们,

继[上一次的月报](https://harmony.one/201903-newsletter)，我们的testnet更新到2.0版本! 同时，我们:

1. 启动了$1million技术生态激励计划(Tech Bounty)，以加强Harmony技术生态的完整性以及开发者工具的易用性，致力于帮助开发者快速从Ethereum迁移到Harmony。
2. 新增120个基石节点维护者。
3. 我们的COO Nicolas在EthDenver黑客马拉松中赢得了“最具创意奖”; 在dbcrypto社区做了一场反响热烈的“你问我答”AMA; 我们的成员Nick White在Outliers Seattle活动上作为嘉宾介绍了Harmony项目；以及我们的Rongjian在ABC Scalability panel上讲解了sharding技术的细节。
4. Upcoming: IEEE Future Technology panel, Berkeley’s ZKProof workshop

![](/images/uploaded/0-ayz33qp64eedf15ujpg_1553678778.jpg)

_COO Nicolas在EthDenver大会上获得“最具创意奖”_  

### **$1million技术生态激励计划**

我们正式启动了 [Harmony技术生态激励计划](https://medium.com/harmony-one/announcing-1million-technical-bounties-c5ea23de023d)，将用价值一百万美元的Harmony Token作为奖励激励社区的开发者对Harmony技术生态进行完善，主要目的是构建Harmony的开发者工具及技术生态圈，让开发者，合作伙伴以及共识节点维护者都有更多更好的工具来使用，让迁移到Harmony的过程更加顺畅。计划涉及范围：

* 开发者工具类，如web3.js, Metamask, Truffle类的开发或迁移
* 节点部署类: Docker, Kubernetes, Firewalls等设施的开发
* 节点维护类: Elasticsearch, Logstash**,** Kibana, Beats等设施的整合

具体细节我们将在Github[harmony.one/github](https://github.com/harmony-one/)和[Gitcoin](https://gitcoin.co/explorer?idx_status=open&order_by=-_val_usd_db)上发布，也欢迎随时和我们团队探讨具体细节。

![](/images/uploaded/0-sxwosolmelyu447ajpg_1553671435.jpg)

_Rongjian向Near Protocol的CEO介绍Harmony的分片方案，共识算法，以及网络层优化_

### **Harmony Testnet 2.0**

除了更稳定的系统和更多的协议，在Testnet 2.0中，我们完成了以下内容：

* 添加局域网节点支持和[教程](https://github.com/harmony-one/harmony/blob/master/specs/p2p/nat-hole-punching-spike.md)，包括NAT Port Mapping Protocol (NAT-PMP)，Port Control Protocol (PCP)，以及Internet Gateway Device (IGD) Control Protocol。
* 支持部署Solidity智能合约, 并测试了[博彩类应用](https://github.com/harmony-one/demo-apps), 以及链上数据存储功能。
* Genesis分片结构和bootstrap方案；staking智能合约以及和再分片过程的衔接。
* 实现了分布式随机数产生器（DRG），包括Verifiable Random Function（VRF）的开发和原型版Verifiable Delay Function (VDF)的引入，使得测试网可以产生安全可靠的随机数，以达到安全的分片过程，同时保证博彩或游戏类应用随机过程的安全和公平。
* 实现了Hot key和Cold key双秘钥的绑定，让节点运行者可以在参与共识的同时，保护其Stake代币的安全。

### **代币经济模型和节点年化收益**

在过去几周我们对Harmony代币的经济模型进行了建模，以提前预测主网上线后的代币经济活动，并更好地指导主网经济模型的设计。Harmony代币模型设计的原则有两方面：1. 保证主网的安全性； 2. 最大程度促进节点分散程度，即去中心化。我们在和几家Staking-as-a-Service公司（[Chorus.One](http://chorus.one/), [Blockdaemon](https://blockdaemon.com/) and [Staked.us](http://staked.us/)）讨论合作方案。

在之前的一个月, 我们新增了120个基石节点的维护者，我们的testnet也入驻了10个外部节点。

### **虚拟资产和数据交易**

Harmony将建立一个开放且保护用户隐私的虚拟资产和数据交易平台，以**fungible tokens** ([energy credits](https://blog.oceanprotocol.com/get-rewarded-putting-household-energy-data-to-good-use-63c7ce7ac3b0), security offerings)和**non-fungible assets**([game collectibles](https://medium.com/sandbox-game/token-standards-in-the-sandbox-61832992b45b), [real estate](https://blog.enigma.co/decentralizing-credit-with-enigma-440c6648b4d8))的形式让更多资产上链交易. 我们将利用 zero-knowledge proofs 等技术在保护用户隐私的情况下实现资产上链和数据共享。我们在和多家机构和公司商讨资产上链合作，并将在近期公布细节，敬请大家关注。

![](/images/uploaded/1-sajdocctsfofgy8hnizyeggif_1553670214.gif)

_Harmony的深层分片技术将助力大规模资产和数据的交易_

**社区活动和技术分享**  

![](/images/uploaded/0-4dtshdrenuo-eqdvjpg_1553679236.jpg)

_Nick在西雅图Outliers大会介绍Harmony; Sahil在Harvard区块链峰会讨论区块链前景_

在努力开发核心协议之余，我们团队成员也去到了Seattle, Silicon Valley, Denver, 以及Boston等地分享对区块链技术和行业的看法。

在西雅图 [\#Outliers](https://twitter.com/harmonyprotocol/status/1104102690248810496)大会上, Nick介绍了Harmony区块链的深度分片技术和系统构架，同期参会的还有Prysmatic labs，NEO等项目. 在[Harvard区块链峰会](https://twitter.com/harmonyprotocol/status/1100254621652738053)和[Cryptonite](https://twitter.com/harmonyprotocol/status/1102011447494635520)上, Sahil和来自Harbor, Bakkt，Augur等项目的创始人讨论何如让实际的区块链应用落地。

在以太坊最大的开发者大会EthDenver上, Harmony的联合创始人Nicolas的项目Delfi获得[最具创意奖](https://twitter.com/harmonyprotocol/status/1097605163303395328)，在这个有两千多人参加的区块链开发者盛会上，Nicolas及团队设计的链上资产价格预言机[Delfi](https://docs.google.com/presentation/d/1LJRWL8ucrwfh7olUJigO5Z9UA-av6SyDmCPZ7KpZA5A/mobilepresent?slide=id.g4cd34557aa_0_402)击败了120个其他项目，被诸多评委（Shapeshift的[Eric Voorhees](https://twitter.com/ErikVoorhees), Dharma的[Nadav Hollander](https://twitter.com/NadavAHollander), MakerDAO的[Mariano Conti](https://twitter.com/nanexcool), [Andreas Antonopoulos](https://twitter.com/aantonop)）评为最有突破性创意的项目.

同时我们在Near Protocol的技术分享系列节目中做了一次关于Harmony的[深度技术讨论](https://medium.com/@gaving/rj-answers-alexs-in-depth-questions-about-harmony-a3e81e527a28)，讨论包括Harmony的深度分片方案，安全随机数的产生，VDF的用法，Erasure Code在网络优化中的作用等 ([full video](https://www.youtube.com/watch?v=dgr1GLV1gzM&feature=youtu.be))。我们在[dbcrypto](http://dbcrypto.io/)上做了一次AMA活动，社区反响热烈，累计有7万次浏览。此外Rongjian出席了由硅谷最大的区块链技术社区ABC组织的技术讨论活动“[How To Solve Blockchain Scalability with Better Consensus](https://www.meetup.com/ABC-Blockchain-Community-Meetup/events/259693724).”_。_下个月，我们将出席 [IEEE Future Technology Summit](http://www.ieee-futuretechnology.com/html/program.html)，同Celer, Quarkchain等顶尖项目同台做技术分享。

最后，在我们紧张开发核心协议的同时，希望有更多的社区同伴加入到Harmony的基石节点计划中，让在今年年中即将上线的Harmony主网更加安全可靠！

![](/images/uploaded/1-cpzcvftrkgsaswh7f6ryhgpng_1553338989.png)

Stephen Tse\
Harmony CEO
