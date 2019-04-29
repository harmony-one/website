---
templateKey: blog-post
title: 'Measure of a blockchain: getting metrics that matter'
date: 2019-04-06T07:30:17.571Z
banner: '/images/uploaded/banners/0-k6kmecycm5xal3l7png_1553600109.png'
tags:
  - harmony
---
It has been nearly 10 years since the publication of the Bitcoin whitepaper and its revolutionary proof-of-work consensus protocol. Its novelty and success, along with that of the cryptocurrency it backs, have triggered a firestorm of research rallying around the problems of an open blockchain. Today, that research is pointed largely in two directions: **privacy and scale.**  

Let’s talk about scale. Specifically, the scalability of throughput.  

Bitcoin’s [seven transactions per second](https://en.wikipedia.org/wiki/Bitcoin_scalability_problem) limit has become something of a joke in blockchain news. However, contrary to popular belief, blockchains are not inherently limited in their ability to handle a large rate of transactions. Proposals for increasing a blockchain’s throughput include:  

*   [**Leveraging efficient closed-participation algorithms**](https://eprint.iacr.org/2016/917.pdf) in an open-participation blockchain.
*   [**Simulating the expensive part**](https://dfinity.org/pdf-viewer/library/dfinity-consensus.pdf) of consensus through randomness beacons.
*   Limiting the resource costs of consensus through [**representative sharding**](https://eprint.iacr.org/2017/406.pdf).
*   Reducing coordination costs by [**making protocols asynchronous**](https://eprint.iacr.org/2016/199.pdf).
*   Reducing bandwidth requirements by [**using more efficient cryptographic primitives**](https://www.usenix.org/system/files/conference/usenixsecurity16/sec16_paper_kokoris-kogias.pdf).
*   Improving bandwidth utilization by [**leveraging past advances in peer-to-peer protocols**](https://eprint.iacr.org/2018/460.pdf).

The list goes on, and by all expectations it will continue getting longer. These improvements clearly have some impact on the scalability of a blockchain. How much impact do they have? That part is less clear. Even if all groups report their exact testing environment, those environments would almost certainly differ from one another, and it would be difficult to determine how those differences impact the final reported metrics.  

This problem is not unique to blockchain. Every engineering field needs to deal with dual motivations in innovation and reporting. Every field needs to balance R&D’s needs to focus on differentiation against consumers’ needs to easily compare what’s being provided. If we want to address this problem in blockchain, it would be worthwhile to investigate how these other fields deal with similar problems.  

Interestingly, the reporting issues of blockchain technologies today seem especially reminiscent of the [issues faced by online transaction processing systems](https://jimgray.azurewebsites.net/BenchmarkHandbook/chapter2.pdf) in the 1980s. In a market driven by enormous expectations of growth, large and small companies alike entered a frenzy of research to improve throughput and to characterize their offerings. With each vendor running their own tests to suit their own systems, comparisons between systems were unreliable at best. It was through a few key events spanning four years that the online transaction processing (OLTP) market managed to escape this trap. Let’s briefly take a look.  

It started with a publication by [Anon et al](http://www.hpl.hp.com/techreports/tandem/TR-85.2.pdf), a collaboration of Tandem Computers employees plus nineteen professionals in industry and academia. The publication recommended three standard performance tests corresponding to expected use cases based on a real bank’s situation. The test was simple and sufficiently realistic, and, importantly, it required the vendor the report the cost of owning equipment equivalent to benchmarked system. After publication in Datamation magazine, the test quickly gained credence as an industry standard. It was a very promising standard, and it was quickly butchered in the market by abusable ambiguities.

It wasn’t until three years afterwards that market analyst Omri Serlin was able to get consensus from eight companies to form a standards body, the Transaction Processing Performance Council (TPC). After having been “officially” formed by announcement over the Business Wire, the council gained another eighteen members within five months. Within another year, the council published its first standard, the TPC-A, which addressed the ambiguities of Anon et al’s paper. The TPC-A standard has since been superseded by TPC-C and TPC-H, which [remain major DBMS benchmarking standards](https://en.wikipedia.org/wiki/Benchmark_%28computing%29#Industry_standard_%28audited_and_verifiable%29) today. Perhaps a testament to their ubiquity, you can observe [large companies shaming one another](https://aws.amazon.com/blogs/big-data/fact-or-fiction-google-big-query-outperforms-amazon-redshift-as-an-enterprise-data-warehouse/) based on the TPC’s guidance.

![](/images/uploaded/0-k6kmecycm5xal3l7png_1553599919.png)

_Introducing standardization pushes research into more focused areas, hopefully towards greater collaboration and cohesion in research and development. Image source: Chiral fluid dynamics with explicit propagation of the Polyakov loop, Herald et al., 2013. The paper is on particle physics, not blockchain or benchmarking._

**If there’s one thing you should take away from this, it’s that consensus matters.** Both Anon et al and the TPC ended up with a widely-adopted standard only as the collective output of a large number of industry and academic professionals. The TPC’s [more detailed account](https://jimgray.azurewebsites.net/BenchmarkHandbook/chapter2.pdf) makes it clear that this collaboration contributed greatly to the final result, and it’s difficult to imagine that the Council would remain a _council_ if the massive costs of collaboration were not worthwhile.

_If there’s a second thing you should take away, it’s that the TPC is doing something right as far as benchmarking goes._

A [deeper look at the TPC-C](http://www.tpc.org/tpcc/) suggests that its success is not unwarranted. The standard starts from fundamentals, focuses on guarantees and claims, and requires simple reports of easy-to-use metrics. The TPC-C is built from the ground up to satisfy the consumer’s need to easily compare solutions. In retrospect it should be entirely obvious that this is the whole point of a standard benchmark, to get metrics that matter to users, not to show off nuance.

So what can we learn from TPC-C? What’s missing from existing blockchain performance reports? Here’s a short list.

*   **Stress tests**. Tests should focus on the guarantees a blockchain claims to provide. Blockchains should provide at least [ACID](https://en.wikipedia.org/wiki/ACID_%28computer_science%29) guarantees, and they should include very strong durability tests.
*   **Randomized transactions**. Transactions should be sufficiently randomized so proposed blockchains cannot be optimized for highly specialized scenarios. Blockchains should not just be specialized to handle the kinds of transactions that have occurred in the past.
*   **Standard ratios**. Certain ratios should be standardized between the number of clients, number of accounts, size of transactions, and the size of blocks. Fixed ratios make it easier to identify and compare scaling properties.
*   **Minimum requirements**. Some minimum requirements should be imposed on transaction latency and blockchain durability. Without minimum requirements, otherwise-useful metrics can be pushed to arbitrarily extremes. Latency, for example, can be made deceptively low if the entire blockchain is run on a single node with no network communication overhead.
*   **Steady state behavior**. Tests should be executed for a long enough time period for the blockchain to reach some steady state. Metrics collected during only periods of high volatility are not usefully indicative of performance at runtime.
*   **Cost**. The cost of the testing environment should be published, along with the anticipated cost of continuing to run the system for a period of several years. This prevents false comparisons between benchmarks executed on very high and low performance systems.

There’s a limit to the parallels. A blockchain is not a database, though the two do seem rather similar. Blockchain users have unique concerns encompassing, for example, privacy, decentralization, and smart contract performance. Each of these concerns comes with new metrics, and each new metric comes with new loopholes. There is a lot of work to be done in coming up with a standard blockchain benchmark. The potential rewards, though, are massive: greater cohesion to the research, easier validation of new protocols and blockchain projects, and ultimately a substantially greater adoption rate as a result of metrics-driven feedback between users and developers.

If this sounds interesting to you, you should [follow us](https://medium.com/harmony-one). If this sounds _really_interesting to you, you should [work with us](http://harmony.one/hiring). If you’re in the Bay Area, [we should chat](http://harmony.one/contact).
