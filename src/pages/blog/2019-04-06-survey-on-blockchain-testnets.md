---
templateKey: blog-post
title: Survey on Blockchain Testnets
banner: /images/uploaded/banners/1-worytav2spubn0-0s58p4wpng_1553625799.png
date: 2018-11-02T07:19:00.000Z
tags:
  - harmony
---
![](/images/uploaded/1-worytav2spubn0-0s58p4wpng_1553625759.png)

Many blockchain network projects have testnets launched. The testnet can be used as a preview of the upcoming main net, or as a testbed for developers/users to try out the blockchain.

I did a survey of a few blockchain testnets, including the old-timers like Bitcoin, Ethereum, and newcomers like Zilliqa, and QuarkChain. Based on the study, I elaborate on the critical components for a successful testnet by discussing the lessons learned and key takeaways.

I conducted this survey from a new user/developer’s perspective which covers the onboarding documentation, wallet, coin/token acquire, and network status monitoring. I didn’t test smart contracts in those testnets. Some testnets also support mining, but they are not covered as well.

Bitcoin and Ethereum have the most mature testnets. For the new blockchains, we can still learn from their strategies on how to release an MVP testnet to the community.

### Summary

In summary, Ethereum has the best testnet support with three testnets available and the easy-to-follow guidance. It shows how active the community is. One smart idea from Ethereum Rinkeby testnet is they asked for a sharing on a social network as a way to request the test tokens.

Bitcoin has a powerful command line tool bitcoin-cli, and many different wallets support, but it lacks clear guidance for beginner to start. Coinbase has provided a wiki page to describe how to begin on bitcoin testnet though, but lack of details. For example, I have to search again and again to find working ways to obtain coins for the testnet.

EOS seems to have the testnet support with a document on their website, but the setup process is somehow complicated. It requires the installation of additional software like scatter to create an account.

The newcomers, Thundercore, Zilliqa, and Quarkchain all did a decent job in providing easy-to-follow guidance of their testnets. I can easily create an account, monitor the blockchain, and request tokens. Zillia and Quarkchain provide easy web-based wallet setup. Dfinity has no testnet available to try yet even though they announced the testnet support. Thundercore is an Ethereum compatible blockchain so that metamask is used as the wallet. Additional links and notes for each testnet can be found at the end of this document.

There are two main groups of users of a testnet. One is the dApp developers that need to test the smart contract execution and the performance of the network. Another group is the miner that want to join the network to earn coins/tokens later.

The testnet mainly serve three purposes. The first one is to give developers/users an environment to test their applications or experience the blockchain network. The second purpose is to demonstrate the engineering progress or showcase the performance of the blockchain network. The last one is to do marketing and promotion.

### Key Components

There are a few components of the testnet, based on my ranking of importance. I’ll elaborate my learning in each element.

#### Documentation

The guidance document serves as the starting point for new users or developers to the network. It has to be dedicated to the testnet to reduce the confusion. I recommend using a dedicated subdomain name such as [https://testnet.myblockchain](https://testnet.myblockchain/) as the entry point of the testnet. The testnet guidance may also be posted to other media like medium/twitter; however, it is imperative to maintain the official starting point on our website. It may contain the latest release announcement of testnet. Also, it may add warning or disclaimer to the prominent place on the page. For example, Bitcoin has no official testnet guidance as I can only find a page from coinbase.com as the starting point. Ethereum has an excellent post on medium.com to help new users to start. ThunderCore has a page to drive developers to their testnet. Both Quarkchain and Zilliqa dedicated a subdomain to the testnet.

#### Registration Form

Thundercore requires login via google/facebook to access the resources of the testnet, which is a good idea to collect user emails/identities for further marketing purpose. Also, it may prevent malicious users from abuse the testnet. Zilliqa uses a google form requesting new users to register to acquire ZIL token. Similarly, I think it is a good idea to ask users to login/register to our testnets with a validated email address. The collected emails can help the company build the marketing audience.

#### Wallet

Each testnet requires a valid wallet to join/use the testnet. Bitcoin and Ethereum have many wallet software support, such as bitpay.com, metamask, etc. EOS requires a scatter account setup. Quarkchain and Zilliqa support web-based wallets, which is both easy to access and easy to develop. Thundercore is fully Ethereum compatible, so it supports metamask wallet by default. A new blockchain company can start with web-based wallet support as it is easy to develop a platform-agnostic software on the browser.

Moreover, the web-based wallet doesn’t require the user to install additional software, so that it is fast to start. The tradeoff is that the company has to host all the user data on the database servers and maintain the communication with the browsers on the user side. Going long term, the blockchain community or the company may develop a similar plugin like metamask as the cross-platform wallet software.

#### Faucet

The faucet is used to dispense coin/token in testnets. One brilliant design of Rinkeby Ethereum testnet is to request the user input the link of a twitter or facebook post with hashtags of Rinkeby and Ethereum to receive test token from the network. The social network link is like a free promotion and an excellent social network marketing strategy. Another design consideration is to throttle the number of tokens deposited to the user’s account in a certain period, such as 1 unit of coin/token per 12 hours or 3 per 24 hours. It is essential to make it explicit to users that the test tokens are worthless and the network may be reset anytime.

#### Dashboard

Dashboard or blockchain explorer display the current status of the test net, including the number of shards, the number of nodes, the number of transactions per seconds (TPS), search for the account, search for blocks. It is mainly a dynamic web-based presentation and search interface. Search functionality should be helpful for the dApp developers to understand how the network process the transaction and debug. Quarkchain has a dashboard to display each shard’s stats. However, there is currently no dashboard that can trace a cross-shard transaction and demonstrate cross-shard smart-contract execution.

#### Mining Node Software

Miners want to join in the network by running the node software on their machines. The testnet should have the capability to support dynamic nodes online/offline as an essential requirement of the system. The blockchain software shall consider the running environment and platform compatibility of the node software. Depending on the open source strategy, it may release binary node software to start or source code of the node software. Together with the mining node software, it is useful to provide a node management CLI tool to manage the mining node application. An RPC based communication can be established between mining node application and the management CLI tool.

#### Demo dApp

It would be a cool idea to demonstrate a dApp on the network. It also provides developers with some learning material.

### Resource Links

#### Bitcoin testnet

*   What is a test net?

[https://support.coinbase.com/customer/en/portal/articles/1973566-what-is-the-testnet-](https://support.coinbase.com/customer/en/portal/articles/1973566-what-is-the-testnet-)

*   How to set up a full node?

[https://bitcoin.org/en/full-node#what-is-a-full-node](https://bitcoin.org/en/full-node#what-is-a-full-node)

*   How to join in test net?

[https://medium.com/@lopp/how-to-solo-mine-on-bitcoin-s-testnet-6073c917b495](https://medium.com/@lopp/how-to-solo-mine-on-bitcoin-s-testnet-6073c917b495)

*   How to create a testnet wallet?

Install Bitpay [https://copay.io/](https://copay.io/)

*   How to request test coin from a faucet?

[https://coinfaucet.eu/en/btc-testnet/](https://coinfaucet.eu/en/btc-testnet/)

[https://testnet-faucet.mempool.co](https://testnet-faucet.mempool.co/)

*   How to explore the Bitcoin testnet?

[https://live.blockcypher.com/btc-testnet/](https://live.blockcypher.com/btc-testnet/)

*   Takeaways:

There is no step-by-step guidance on how to join in a bitcoin testnet, even though the coinbase page can be a good starting point. It still takes quite some time like a few hours to search and join in a testnet. It is not easy to get some test coin. I have to google it and find the right website to get some test coin. The bitcoin cli tool is potent, but lack of some beginner’s guide. It is not clear or easy to mine your test coin using just a simple setup.

#### Ethereum testnet

*   Ethereum Dashboard

[https://www.rinkeby.io/#stats](https://www.rinkeby.io/#stats)

*   Beginner’s guide for Ethereum testnet

[https://medium.com/compound-finance/the-beginners-guide-to-using-an-ethereum-test-network-95bbbc85fc1d](https://medium.com/compound-finance/the-beginners-guide-to-using-an-ethereum-test-network-95bbbc85fc1d)

*   Ethereum Wallet

Metamask is easy to use and install. [https://metamask.io/](https://metamask.io/)

*   How to acquire Ether on the TestNet?

Rinkeby TestNet [https://faucet.rinkeby.io/](https://faucet.rinkeby.io/)

Use social post include the address to acquire Ether

*   Takeaways:

Rinkeby is an excellent way to spread the message of a testnet using twitter/facebook post and #hashtags.

*   Another Ethereum TestNet

[https://kovan-testnet.github.io/website/](https://kovan-testnet.github.io/website/)

#### EOS testnet

*   What is EOS Testnet? CryptoKylin testnet

[https://www.cryptokylin.io/](https://www.cryptokylin.io/)

*   How to create EOS test account?

[https://get-scatter.com/](https://get-scatter.com/)

*   Takeaways:

#### Thunder testnet

*   ThunderCore TestNet can use the metamask wallet
*   How to acquire test tokens on Thunder Testnet?

[https://www.thundercore.com/get-thunder-test-tokens](https://www.thundercore.com/get-thunder-test-tokens)

*   How to do dApp developer on Thunder Network?

[https://www.thundercore.com/developers](https://www.thundercore.com/developers)

[https://www.thundercore.com/build-dapps-on-thundercore](https://www.thundercore.com/build-dapps-on-thundercore)

*   Takeaways:

It is an excellent way to collect the email address or GitHub account when users request test tokens. Immediately the website provides guides to developers on how to develop dApp on thunder network and how to migrate Ethereum dApp. The website tutorial looks not professional though.

#### Zilliqa testnet

*   What is Zilliqa Testnet v2.0?

[https://blog.zilliqa.com/zilliqa-testnet-v2-0-codename-d24-ea7ca75adc70](https://blog.zilliqa.com/zilliqa-testnet-v2-0-codename-d24-ea7ca75adc70)

*   How to create a wallet of Zilliqa?

Goto [https://wallet.zilliqa.com](https://wallet.zilliqa.com/)

It is using a web form from Google to collect email.

*   Takeaways:

Collect email! Web wallet interface is simple and easy to start. Can only send/recv ZIL from web wallet fro now. The web wallet has links to all communication channels.

#### Quarkchain testnet

*   Testnet starting guide

[https://medium.com/quarkchain-official/quarkchain-testnet-1-0-bottom-quark-2ee8665ce5b1](https://medium.com/quarkchain-official/quarkchain-testnet-1-0-bottom-quark-2ee8665ce5b1)

*   Testnet Website

[https://testnet.quarkchain.io](https://testnet.quarkchain.io/)

*   Takeaways:

It has a bug report email to testnet@quarkchain.io, and rewards QKC for the bug report. It currently has only 7 clusters, 231 nodes on us west showed on the map. There is a link to a youtube video on the peak performance in the testnet.

#### Dfinity testnet

*   How to join the mining network

[https://mining.dfinity.org/](https://mining.dfinity.org/)

*   No testnet available for public testing yet.

We look forward to engaging with our community on our design and implementation. For questions, please reach out to me at [leo@harmony.one](mailto://leo@harmony.one).

Follow the development progress of Harmony.one:

*   [Website](https://harmony.one/)
*   [Github](https://github.com/harmony-one)
*   [Medium](https://medium.com/harmony-one)
*   [LinkedIn](https://www.linkedin.com/company/harmony-protocol/)
*   [Twitter](https://twitter.com/harmonyprotocol)
*   [Telegram](https://t.me/harmony_one)
