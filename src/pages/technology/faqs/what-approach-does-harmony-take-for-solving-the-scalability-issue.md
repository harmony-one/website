---
templateKey: faq
question: What approach does Harmony take for solving the scalability issue? 
answer: On protocol layer, we adopt a sharding-based consensus protocol which scales as the number of nodes increases in the network. Each shard contains hundreds of nodes and employs a fast BFT algorithm to reach consensus within seconds. On network layer, we rely on the QUIC protocol to deliver messages faster when possible. On system level, we studies UniKernel to further scale the performance of the OS on a single node.
order: 3
---