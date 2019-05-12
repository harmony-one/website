---
templateKey: blog-post
title: Peer Discovery in Harmony Network
banner: /images/uploaded/banners/0-b-3lq-yong-qht5lpng_1553627799.png
date: 2018-11-15T08:14:00.000Z
tags:
  - harmony
---
Peer discovery is one of the essential mechanisms in a decentralized network for new nodes to join the network. A blockchain network is a decentralized network with thousands of nodes. And it is not uncommon for nodes to join or leave the network at any time. In this post, we review the peer discovery mechanism in Bitcoin and Ethereum blockchain network in details.

Here, we present the peer discovery protocol in Harmony blockchain based on our current design in the whitepaper.

### Peers discovery in BTC network

The primary way to discover peers in the bitcoin network is to connect to a list of BTC nodes that are previously connected. However, for the initial connection, the node has to use a publicly known DNS feed to retrieve a list of IP addresses of long-running stable nodes. The fallback mechanism is to use a list of hard-coded IP addresses in the Bitcoin node software. For example, seed.bitcoinstats.com domain name resolves to a whole list of IP addresses. [http://bitcoinstats.com/network/dns-servers/](http://bitcoinstats.com/network/dns-servers/) maintains a list of DNS servers run by volunteers.

The bitcoinstats.com domain is registered by Dynadot, LLC on January 15th, 2011. The following example lists a few well-known bitcoin nodes.

![](/images/uploaded/1-maczwo-ne5-5oxw8zkob6qpng_1553627555.png)

Every bitcoin node has to handle a “_getaddr_” message. The node will respond to the “_getaddr_” message with a 23% of randomly chosen IP addresses known by the node based on their recentness in the last 3 hours. And the maximum is 2,500 IP addresses. Theoretically, a node may know all of the IP addresses of all the nodes in the bitcoin network by repeated querying its neighbors. Bitcoin already addressed this issue by only sending one “_getaddr_” response per connection.

New bitcoin node first establishes a TCP connection on port 8333. It starts a “handshake” process by transmitting a “_version_” message, which contains basic identifying information, including: protocol\_version, local service, nTime, addrYou, addrMe, subversion, startingHeight, etc. (Github: [https://github.com/bitcoin/bitcoin/blob/e74649e95122c9c61aadf607461cf701c3953f88/src/net\_processing.cpp#L334](https://github.com/bitcoin/bitcoin/blob/e74649e95122c9c61aadf607461cf701c3953f88/src/net_processing.cpp#L334)). The peer node responds with “_verack”_ to acknowledge and establish a connection, and optionally sends its own “_version”_ message to reciprocate the connection and connect back as a peer. Once one or more connections are established, the new node will send an _addr_ message containing its own IP address to its neighbors. The neighbors will, in turn, forward the _addr_ message to their neighbors, ensuring that the newly connected node becomes well known and better connected.

### Peer discovery in ETH network

Peer discovery in Ethereum network uses a similar mechanism as in the Bitcoin network. There are a few hardcoded bootnodes in the Ethereum node software, for example, [https://github.com/ethereum/go-ethereum/blob/master/params/bootnodes.go#L23-L31](https://github.com/ethereum/go-ethereum/blob/master/params/bootnodes.go#L23-L31)

The peer discovery algorithm in Ethereum is based on the [Kademlia](https://pdos.csail.mit.edu/~petar/papers/maymounkov-kademlia-lncs.pdf)Distributed Hash Table (DHT) protocol. Different from the original Kademlia, it uses only the “**_PING_**” and “_FIND\_NODE_” RPCs of Kademlia protocol on a 256 bits of IDs. Every node maintains a hash table of neighbor nodes using the XOR metric. [Node discovery protocol v4](https://github.com/ethereum/devp2p/blob/master/discv4.md) provides details on the Kademila-like DHT that stores information about Ethereum nodes. The Kademlia structure was chosen because it yields a topology of low diameter. Rchain has a good wiki write-up about the ETH node discovery protocol at [here](https://rchain.atlassian.net/wiki/spaces/CORE/pages/15564804/Ethereum+P2P+Node+Discovery+and+Routing).

Similarly, [RapidChain](https://eprint.iacr.org/2018/460.pdf) claims to use the Kademlia routing mechanism for inter-committee communication. That is probably useful to avoid leader-based or client-driven cross-shard transaction.

### Peer Discovery in Harmony Network

As with Bitcoin and Ethereum, peer discovery is needed when new nodes are trying to connect to the Harmony Network.

There are two scenarios. For initial connection, the new node has to use DNSfeed to get a list of IP addresses of well-known nodes to join the network. For re-join, the node may use a list of previously connected nodes to start.

To connect to peers, nodes have to do a “handshake”. The handshake is a **_PING_** message. The ping message includes the protocol version, IP address of the node, public key (256 bits of Hash value). The peer node responds with a **_PONG_** message to confirm the connection with requester and send back a list of other peers as well. The peer node may also send a **_PING_** message to create a connection with the new node. A question here is how to avoid every new node trying to connect to the same peer node. The answer is peer node may reject the connection after responding with the pong message if the peer connection exceeds a certain number, say, 20. Eventually, each node in the network will maintain 20 concurrent connections to neighbor nodes, and they form the p2p network. Another unanswered question here is how to manage the p2p network within one committee, instead of a global level p2p network.

Since Harmony is a sharded blockchain, new nodes will be placed into an active node list at first after finishing a PoS verification via the beacon chain. The verification process starts when a new node create a transaction to deposit some coins to system accounts. The transaction is routed to the beacon chain after the new node establishes the first connection. Beacon chain nodes run consensus and verified the transaction to approve it. Once the transaction is approved, the new node can join in the network in a waiting list. The beacon chain will run VRF/VDF to generate unbiased randomness in order to do committee configuration. The re-sharding algorithm will place new nodes into different committee based on the randomness and the Bounded Cuckoo Rules. There is a higher probability for new nodes to join the committee with more nodes according to the Cuckoo Rules, thus to avoid the attack on committees with fewer number of nodes.

For testnet launch, since we mainly care about spot instance offline and rejoin, we may implement a simple hash algorithm to place the node into committee. We will simplify the entire process. We will use a separate node to represent the beacon chain. The leader nodes launches and contacts the beacon chain. For the first N nodes contacting the beacon chain, they are used as the leaders in each committee.

#### Sequence Diagram

![](/images/uploaded/0-b-3lq-yong-qht5lpng_1553627790.png)

We look forward to engaging with our community on our design and implementation. For questions, please reach out to me at [leo@harmony.one](mailto://leo@harmony.one).

Follow the development progress of Harmony.one:

*   [Website](https://harmony.one/)
*   [Github](https://github.com/harmony-one)
*   [Medium](https://medium.com/harmony-one)
*   [LinkedIn](https://www.linkedin.com/company/harmony-protocol/)
*   [Twitter](https://twitter.com/harmonyprotocol)
*   [Telegram](https://t.me/harmony_one)
