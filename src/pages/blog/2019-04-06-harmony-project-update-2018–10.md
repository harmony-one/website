---
templateKey: blog-post
title: Harmony Project Update 2018–10
date: 2019-04-06T07:22:18.053Z
banner: '/images/uploaded/banners/0-f5m9xyjuefm9bc9opng_1553622885.png'
tags:
  - harmony
---
Dear investors and friends,

Since our [last newsletter](https://harmony.one/201809-newsletter), we have [spoken at 20+ events](http://harmony.one/deck) in Asia and Silicon Valley. As we move towards launching our testnet by the end of this year, we are now focusing on _scaling smart contracts_ via sharding.

![](/images/uploaded/0-f5m9xyjuefm9bc9opng_1553622731.png)

We found a train with our name on it!  

We packed in 100+ meetings during [our 3-week Asia tour](https://medium.com/harmony-one/catch-harmony-at-sf-blockchain-week-c0690e3e9023) and at [San Francisco Blockchain Week](https://sfblockchainweek.io/).

Our main talk, [_Scaling via Systems and Language Design_](http://harmony.one/design), at CESC (by Blockchain at Berkeley) covered our approach for bringing research results to **large-scale production**. There we urged that smart contracts must be _safe, easy and fast _to write for mass adoption of decentralization.

![](/images/uploaded/0-ekbu6mh4h3u7-gqepng_1553623367.png)

In the coming weeks, we are designing our testnet architecture, integrating **Omniledger + Rapidchain + Chainspace**, for sharding with consensus and contracts (see our [research notes](https://harmony.one/sharding)).  

In particular, the following novel approaches by the top researchers stand out. [_Arbitrum_](https://offchainlabs.com/Arbitrum-USENIX.pdf)_: Scalable, Private Smart Contracts_invents a virtual machine that supports the **bisection protocol** for O(1) verification. [_Blockmania_](https://arxiv.org/abs/1809.01620)_: from Block DAGs to Consensus Simultaneously _achieves O(N²) message complexity compared to O(N⁴) for PBFT. [_PolyShard_](https://arxiv.org/pdf/1809.10361.pdf)_: Coded Sharding Achieves Linearly Scaling Efficiency and Security _matches the theoretic upper bound Θ(N) for **sharding security**.  

We have vastly expanded on our low-level architecture. In our technical blog [_Harmony’s Networking Story_](https://medium.com/harmony-one/harmonys-networking-story-7a83fb6f13ed)_, _we explain our approach using _HIPv2_ (id/loc, discovery, mobility, multi-homing, NAT traversal), _RaptorQ_ (reliable, **efficient multicast/unicast**), and _UDP Transport_ (with DCCP/QUIC-inspired congestion control).

Harmony [recently engaged](https://medium.com/harmony-one/harmony-partners-with-gaming-industry-leader-animoca-e29f4624c055) in a mutual investment partnership with _Animoca, a_ publicly traded developer and publisher of internationally recognized mobile games and brands including Garfield, Doraemon and Astro Boy. We share [Animoca’s vision](https://smallcaps.com.au/animoca-brands-new-partners-secure-blockchain-gaming/) that gaming will drive large scale adoption for blockchain technology. Blockchain enables new features for games such as _true ownership_ and _transferability_ of in-game items and currencies, and provably fair **game mechanics**. Moreover, these features can be deployed into games with existing user bases for **immediate adoption** rather than starting from scratch.

![](/images/uploaded/0-7okrh4g-lygjo3kcpng_1553624400.png)

During one late-night walking the streets in Shanghai, the team came up with the Chinese translation of our project name Harmony: 和梦俪. The word [和](https://baike.baidu.com/item/%E5%92%8C/1692925)(hé) means **join and share**, [梦](https://baike.baidu.com/item/%E6%A2%A6/10862909)(mèng) means **dream and vision**_, while _[俪](https://baike.baidu.com/item/%E4%BF%AA) (lì) means **people and together**. The meanings embody our [company culture and values](http://harmony.one/culture).

Lastly, we need your help on hiring mathematicians to solve [PolyShard](https://arxiv.org/pdf/1809.10361.pdf) and [Zexe](https://eprint.iacr.org/2018/962)!

Stephen Tse  
[Harmony](http://harmony.one/) CEO
