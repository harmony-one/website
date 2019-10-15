---
templateKey: blog-post
title: Steps for External Nodes to Participate in the Harmony Testnet
date: 2019-03-16T06:50:22.069Z
banner: '/images/uploaded/banners/0-mig7i971i7sa4uh2png_1553673878.png'
tags:
  - harmony
---
Below are the detailed steps for external nodes to join the Harmony Testnet.

#### **Quick FAQs:**

**Q. Is the Harmony Testnet currently a live, running blockchain?**

**A. **Yes! You can see the block explorer here: [https://explorer.harmony.one/#/](https://explorer.harmony.one/#/)

**Q. What is the value of joining?**

**A. **The value in joining our Testnet is to be able to connect your node to our live blockchain and particiapte in consensus. Although, there are no rewards right now, but thank you for helping us to pioneer, Harmonier!   
We will be releasing details about the staking rewards in coming weeks.

**Q. What can external nodes do on the Harmony Testnet?**

**A. **Nodes can join the Harmony Testnet network, create blocks, and process transactions, which can be viewed at [explorer.harmony.one](http://explorer.harmony.one/)

**Q. How can I see what my node has contributed to the Harmony Testnet?**

**A.** As a node operator, you can see the log file via a script that we’ll provide.

#### **You Will Need**

*   A computer with an Internet connection
*   An AWS (Amazon Web Services) account (Note: Initially, this guide will only be for AWS and will be updated in the coming weeks for Mac & Linux.)
*   A credit card (to create a Amazon Web Services account)
*   A phone number that receives either voice calls or text messages (for AWS account)

Questions? Continue to the comprehensive guide that follows the quickstart.

**Quickstart (More detailed instructions follow. This is for experienced users only)**

**Step 1: Spin up a node/instance**

*   Have or create an AWS account
*   Start EC2 instance (t2.micro) using Amazon Linux 2 AMI
*   Security group setting: all ports open to public

**Step 2: Connect the node to the Harmony Testnet**

*   In Terminal, connect to your AWS instance
*   **Run command:  
    curl -O **[**https://raw.githubusercontent.com/harmony-one/harmony/master/scripts/node.sh**](https://raw.githubusercontent.com/harmony-one/harmony/master/scripts/node.sh)  
    (downloads node.sh script, which will automate the process of downloading and running the Harmony binary)
*   **Run command: chmod +x node.sh **  
    (sets the executable permission of the script and ensures that the script is executable)
*   **Final command: sudo ./node.sh**   
    (wrapper script)

### AWS Account Creation and Setup

1.  **Create your account**:  
    [https://portal.aws.amazon.com/billing/signup#/start](https://portal.aws.amazon.com/billing/signup#/start)

![](/images/uploaded/0-op-1ejsup6swoua5png_1553673197.png)

Have a credit card & phone ready.** New users get access to a free one-year**trial, otherwise it will cost ~$0.01 per hour.

**2\. Log in**: Use your email address and password

![](/images/uploaded/0-arqvpyu6wdhffg0upng_1553673256.png)

3\. Click** ‘Launch a virtual machine’ **on your dashboard, then follow these steps:

**Step 1**:

![](/images/uploaded/0-pgkztct140igvjeypng_1553673313.png)

**Step 2:**  

![](/images/uploaded/0-tjnsbac4hjfbxov-png_1553673353.png)

4\. Click **‘Configure Security Group’**

![](/images/uploaded/0-ekuoxwxpcvuqfgqxpng_1553673403.png)

5\. Click the **‘Add Rule’ button**, then select ‘TCP’ and the ‘Source’ should be ‘Anywhere’  

![](/images/uploaded/0-coymhoub7nvldbk6png_1553673447.png)

Add each of these three numbers in ‘Port Range’: 14555, 9000, 9999, and 6000.

6\. Click **‘Review and Launch’ **at the bottom of the screen

![](/images/uploaded/0-ivna49dw7c9b8k1rpng_1553673492.png)

Then click ‘Launch’  

![](/images/uploaded/0-fgq0jxdpx4ngqxh2png_1553673548.png)

7\. When this window pops up, select **‘Create a new key pair,**’ name it, then click ‘Download Key Pair’ to save it locally on your computer. Then click ‘Launch Instance’  

![](/images/uploaded/0-fmopcmnkj3novjiypng_1553673599.png)

If you click ‘View Instances,’ you will see that it takes about a minute for the instance state to indicate that your instance is running.  

![](/images/uploaded/0-3vykhw7ir8ucverwpng_1553673646.png)

If you need additional support, please carefully review the instructions above. [AWS provides similar instructions here](https://docs.aws.amazon.com/quickstarts/latest/vmlaunch/step-1-launch-instance.html). If neither works, connect with us on [Discord](https://harmony.one/discord).

### Connecting to your AWS instance

[Amazon provides a comprehensive guide here](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html).

1.  From your AWS dashboard, click ‘Services’ (top of page) and then ‘EC2’ then ‘Instances’

![](/images/uploaded/0-pgspdhvs6zosmflpng_1553673708.png)

![](/images/uploaded/0-ghudulvvw8ocpwjpng_1553673700.png)

2\. If you’re using a Mac, press the ‘command + spacebar’ keys, then type ‘terminal’ and press the ‘enter’ key. Something like this should appear  

![](/images/uploaded/0-qv8rivdyhi0clntspng_1553673753.png)

You may use your own [SSH (secure shell) client](https://www.ssh.com/ssh/download/) and AWS provides its own [comprehensive SSH guide here](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html).

3\. Change to the directory that you saved your key pair ‘harmonytest.pem’  
Use the command ‘cd’ to change directories.

For example, I saved mine in ‘downloads,’ so I used this **_command: cd downloads_**

Then execute this command: **_chmod 400 harmonytest.pem_**

4\. Click** ‘Connect’** and copy the command to connect to your instance

![](/images/uploaded/0-xxsyhhecsnhv8xanpng_1553673801.png)

5\. Copy and paste the **‘example’ **command to connect to your AWS instance. It should look like this:  

![](/images/uploaded/0-xgwma0p5dpnrkexspng_1553673859.png)

### Install Your Harmony Node

#### Connect your AWS instance to the Harmony Testnet

1.  In Terminal, once connected to you AWS instance, execute this command:  
    **_curl -O https://raw.githubusercontent.com/harmony-one/harmony/master/scripts/node.sh_**  
    (downloads node.sh script, which will automate the process of downloading and running the Harmony binary)

2\. Then execute this command: **_chmod +x node.sh_**  
(sets the executable permission of the script and ensures that the script is executable)

3\. Finally, execute this command: **_sudo ./node.sh_**  
(wrapper script)

### 🎉 Congratulations! 🎉

![](/images/uploaded/0-mig7i971i7sa4uh2png_1553678631.png)

You are now running a node on the [Harmony Testnet](https://explorer.harmony.one/#/) ⛏️

_Thanks to _[_Gavin_](https://medium.com/@gaving)_ for detailing out these instructions!_
