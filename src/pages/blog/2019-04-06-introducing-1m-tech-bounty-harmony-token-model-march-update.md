---
templateKey: blog-post
title: 'Introducing $1M Tech Bounty & Harmony Token Model, March Update'
banner: /images/uploaded/banners/0-uz-wbuov0mlih5nijpg_1553671364.jpg
date: 2019-03-15T06:51:00.000Z
tags:
  - harmony
---
_Originally published on_ [_Medium_](https://medium.com/harmony-one/introducing-harmony-token-model-1m-tech-bounties-march-update-ec605314fbc8)_._

__

Dear investors and friends,

We launched **Harmony Testnet 2.0**! Since our [last newsletter](https://harmony.one/201902-newsletter), we have:

1. Launched **$1M Tech Bounty** for Harmony-Ethereum Bridge and ops tooling
2. Simulated the Harmony Token model with **15% annualized returns** for staking
3. Signed up 120 new node operators, researched for IEOs & launchpads
4. **Won EthDenver Hackathon**, and participated in dbcrypto AMA, #Outliers Seattle, ABC Scalability panel
5. Upcoming: IEEE Future Technology panel, Berkeley’s ZKProof workshop

![](/images/uploaded/0-uz-wbuov0mlih5nijpg_1553671272.jpg)

_Winning Most Innovative Award; and, celebrating with ETHDenver hackers_  

**$1M Technical Bounty & Testnet 2.0**

We are excited to announce [Harmony Technical Bounty](https://medium.com/harmony-one/announcing-1million-technical-bounties-c5ea23de023d) worth $1M US dollars to be paid in Harmony tokens. Our goal is to develop **better tools and easier onboarding** for developers, partners and node operators, with bounties including:

* Harmony-Ethereum Bridge: web3.js, **Metamask**, Truffle
* Harmony Deployment: **Docker**, Kubernetes, firewalls
* Harmony Ops: Elasticsearch, **Logstash,** Kibana, Beats

See the [recent payout](https://twitter.com/harmonyprotocol/status/1105582202694164480) to our contributors! The specifications for our bounties will be posted on [harmony.one/github](https://github.com/harmony-one/) and bounty networks such as [Gitcoin](https://gitcoin.co/explorer?idx_status=open&order_by=-_val_usd_db).

![](/images/uploaded/0-sxwosolmelyu447ajpg_1553671435.jpg)

_Whiteboarding on consensus, cross-shard txs and defense against single-shard attacks_  

Harmony Testnet 2.0 is now ready, featuring:

* Instructions for [running nodes on home networks](https://github.com/harmony-one/harmony/blob/master/specs/p2p/nat-hole-punching-spike.md) with NAT Port Mapping Protocol (NAT-PMP), Port Control Protocol (PCP), and Internet Gateway Device (IGD) Control Protocol
* Deployment of **Solidity smart contracts**, [demo apps](https://github.com/harmony-one/demo-apps) such as lottery and asset trading
* Full persistence with [archival node](https://github.com/harmony-one/harmony/tree/master/cmd/archival), on-chain transaction storage
* Beacon-shard syncing, proof-of-concept **Verifiable Delay Function** (VDF)

For our investors and contributors, we’re developing the genesis block and a custodial process. Our [key generation](https://github.com/harmony-one/key-generation) features a hybrid signature of ECDSA (**cold keys** for staking) and BLS (**hot keys** for block validation).

**Token Economics & Annualized Returns**

We are simulating the _macro-economics_ of Harmony tokens in Python (to be open sourced in coming weeks). Our goal is to **secure** and **decentralize** the Harmony network by incentivizing thousands of staking nodes.

Harmony nodes can earn **15% annualized returns** by joining early and bootstrapping our network. Our simulation shows that Harmony nodes turn profitable at **2.5% annual inflation**. We’re getting positive feedback from many **staking-as-a-service** companies like [Chorus.One](http://chorus.one/), [Blockdaemon](https://blockdaemon.com/) and [Staked.us](http://staked.us/) as well as our foundational nodes.

![](/images/uploaded/0-ibsgavw7ggbt-szejpg_1553671519.jpg)

↵

_Harmony nodes earn 15% annually in early participation_

Since February, we have **120 additional node signups** and 10 external nodes on our testnet. See [harmony.one/coinlist](http://harmony.one/coinlist) and [harmony.one/opentoken](http://harmony.one/opentoken) for investment details.

We’ve been analyzing the **Initial Exchange Offerings** (IEOs) and launchpads of Binance, Bitmax, Huobi and OKEx. They [shoulder the responsibility](https://www.ccn.com/initial-exchange-offerings-restore-agility-to-blockchains-original-fundraising-m) of fundraising and compliance, while engaging the community and investors. We see top projects like **Celer** (see this detailed [Binance research report](https://info.binance.com/en/research/CELR-2019-03-05.html)) raising the standard for the industry.

**Trading Assets & Sharing Data**

Harmony helps businesses build marketplaces of **fungible tokens** ([energy credits](https://blog.oceanprotocol.com/get-rewarded-putting-household-energy-data-to-good-use-63c7ce7ac3b0), security offerings) and **non-fungible assets** ([game collectibles](https://medium.com/sandbox-game/token-standards-in-the-sandbox-61832992b45b), [real estate](https://blog.enigma.co/decentralizing-credit-with-enigma-440c6648b4d8)). We’re developing zero-knowledge proofs for **data sharing** (ad exchanges, [credit ratings](https://medium.com/harborhq/harbor-launch-and-hub-e76908207680)) while preserving the consumer’s privacy.

![](/images/uploaded/1-sajdocctsfofgy8hnizyeggif_1553670214.gif)

↵

_Harmony’s full state-sharding enables high-volume trading of assets_

Instead of kings and corporations, “[Markets are Eating the World](https://www.ribbonfarm.com/2019/02/28/markets-are-eating-the-world/)” argues that protocols provide fair **market rules without rulers**. We are learning from our partners the need for peer-to-peer energy _credit trading_ and for maximizing renewable _energy usage_ in their grids.

As [Ray Dalio explains](https://www.youtube.com/watch?v=PHe0bXAIuk0), credit runs our modern economic machine. In emerging markets like Indonesia and Vietnam, complete credit bureaus (like Equifax) are missing, leading to over **10% default rate**. [Decentralized credit](https://blog.enigma.co/decentralizing-credit-with-enigma-440c6648b4d8)gives people _control over_ their credit scoring while enabling lenders to lower interest rates.

**Use Cases for Zero-knowledge Proofs**

We are learning from **Zether** ([Bulletproof on EVM](https://crypto.stanford.edu/~buenz/papers/zether.pdf) at $1.51 per transaction) and **zkwasm** ([zk-snarks on browser](https://community.zkproof.org/t/zksnarks-in-webassembly-running-demo-and-discussion/30) with WebAssembly) by QED-it. Harmony is exploring _zero-knowledge proofs_ not just for privacy but also [protecting our Proof-of-Stake](https://twitter.com/stse/status/1098755055186894848) from targeted attacks.

Harmony can help **securely share** data from multiple hospital sources. Multiparty computation (MPC) is the state of art for the [privacy-preserving record linkage](https://bmcmedgenomics.biomedcentral.com/articles/10.1186/s12920-018-0396-0) problem in biomedical data analysis. The current benchmark there is **deduplicating 10 million record** across 1,000 different databases in about _30 min_.

Zero-knowledge proofs can **qualify you for a service** or membership without revealing your private data or identity. [JP Morgan is experimenting](https://www.coindesk.com/jp-morgan-is-quietly-testing-cutting-edge-ethereum-privacy-tech) with [AZTEC protocol](https://medium.com/aztec-protocol/confidential-transactions-have-arrived-a-dive-into-the-aztec-protocol-a1794c00c009) for syndicating loans and proving credit-worthiness. [ING is prototyping](https://www.coindesk.com/banking-giant-ing-quietly-becoming-serious-blockchain-innovator) with a similar zero-knowledge _set membership_ and _range proofs_.

![](/images/uploaded/0-cghudfwqdrcbyjkkjpg_1553671614.jpg)

↵

_Protocol developers at #Outliers in Seattle; and, Harvard Blockchain Summit panel_

**Most Innovative & Whiteboarding**

Our team has been speaking to developers in Seattle, Silicon Valley, Denver, and Boston.

In [\#Outliers / Seattle](https://twitter.com/harmonyprotocol/status/1104102690248810496) (with MIT Media Labs & CryptoKitties), we discussed future protocol developments on a panel with Prysmatic Labs and NEO. At [Harvard Blockchain Summit](https://twitter.com/harmonyprotocol/status/1100254621652738053) and [Cryptonite](https://twitter.com/harmonyprotocol/status/1102011447494635520), we spoke about building _real_applications alongside Harbor, Bakkt and Augur.

At ETHDenver, our cofounder Nicolas won the [Most Innovative Award](https://twitter.com/harmonyprotocol/status/1097605163303395328) at the official hackathon (packed with 2,000 buidlers) for putting together an on-chain **price oracle** called [Delfi](https://docs.google.com/presentation/d/1LJRWL8ucrwfh7olUJigO5Z9UA-av6SyDmCPZ7KpZA5A/mobilepresent?slide=id.g4cd34557aa_0_402). We competed with 120 teams and were judged by [Eric Voorhees](https://twitter.com/ErikVoorhees) at Shapeshift, [Nadav Hollander](https://twitter.com/NadavAHollander) at Dharma, [Mariano Conti](https://twitter.com/nanexcool) at MakerDAO, and author [Andreas Antonopoulos](https://twitter.com/aantonop).

Our team finished a [deep dive whiteboarding session](https://medium.com/@gaving/rj-answers-alexs-in-depth-questions-about-harmony-a3e81e527a28) to discuss our consensus, randomness and networking design (watch the [full video](https://www.youtube.com/watch?v=dgr1GLV1gzM&feature=youtu.be)). With [dbcrypto](http://dbcrypto.io/), we hosted a Telegram AMA garnering 70,000 impressions from the global community. We also spoke as a panelist at ABC’s “[How To Solve Blockchain Scalability with Better Consensus](https://www.meetup.com/ABC-Blockchain-Community-Meetup/events/259693724).”

![](/images/uploaded/0-gvimfl0gocdxo8ibjpg_1553671692.jpg)

↵

_70k+ impressions and 460+ comments with Harmony-dbcrypto AMA_

We look forward to participating on a panel at the [IEEE Future Technology Summit](http://www.ieee-futuretechnology.com/html/program.html) on April 6 with Celer and Quarkchain, and engaging with Zcash and Interstellar at Berkeley’s [ZKProof workshop](https://zkproof.org/workshop2/main.html#about) on April 10–12.

Lastly, we need your help _staking our nodes_ and _hunting our $1M in bounties_!

![](/images/uploaded/1-cpzcvftrkgsaswh7f6ryhgpng_1553338989.png)

Stephen Tse\
Harmony CEO
