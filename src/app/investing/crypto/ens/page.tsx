import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Ethereum Name Service (ENS)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn about Ethereum Name Service (ENS), the decentralized domain name system for Ethereum. Discover how it works, tokenomics, use cases, and how to buy ENS.",
};

export default function EnsPage() {
  return (
    <LearnPageLayout title="What Is Ethereum Name Service (ENS)? Price, Guide & How to Buy" categoryName="Investing" categorySlug="investing" readTime="9 min read" intro="Ethereum Name Service (ENS) is the decentralized naming system for Ethereum that maps human-readable names like 'vitalik.eth' to machine-readable identifiers such as Ethereum addresses, content hashes, and metadata. ENS has become critical Web3 infrastructure, with millions of registered .eth domains serving as digital identities, wallet addresses, and decentralized website hosts across the Ethereum ecosystem." toc={[{id:"what-is",title:"What Is ENS?",level:2},{id:"how-it-works",title:"How Does ENS Work?",level:2},{id:"tokenomics",title:"ENS Tokenomics",level:2},{id:"use-cases",title:"Key Use Cases",level:2},{id:"how-to-buy",title:"How to Buy ENS",level:2},{id:"risks",title:"Risks and Considerations",level:2}]} faqs={[{question:"What is ENS?",answer:"ENS is the decentralized naming system for Ethereum, mapping human-readable .eth names to wallet addresses, content hashes, and other identifiers as core Web3 identity infrastructure."},{question:"Where can I buy ENS?",answer:"ENS is available on Binance, Coinbase, OKX, Bybit, and Uniswap. It trades against USDT, USDC, and ETH pairs."},{question:"Is ENS a good investment?",answer:"ENS is the established domain name standard for Ethereum with strong adoption, but domain registration revenue fluctuates with market cycles. This is not financial advice. Do your own research."}]} relatedArticles={[{title:"Best Cryptos to Buy",href:"/investing/best/cryptos-to-buy",category:"Investing"},{title:"How to Invest in Crypto",href:"/investing/learn/how-to-invest-in-crypto",category:"Investing"},{title:"Ethereum",href:"/investing/crypto/ethereum",category:"Investing"}]}>
      <h2 id="what-is">What Is ENS?</h2>
      <p>Ethereum Name Service was created by Nick Johnson and launched in 2017 as the native naming protocol for the Ethereum ecosystem. ENS operates as a set of smart contracts on Ethereum that function similarly to the traditional DNS (Domain Name System) of the internet, but for blockchain addresses and decentralized resources. The .eth domain has become the most recognized and widely used blockchain domain extension, adopted by millions of users as their primary Web3 identity.</p>
      <p>ENS domains serve multiple purposes beyond simple address resolution. They function as portable digital identities across Web3 applications, decentralized website hosting through IPFS integration, and social identity markers displayed in wallets, marketplaces, and social platforms. Major wallets, exchanges, and dApps integrate ENS resolution, making .eth names universally recognized across the Ethereum ecosystem and increasingly across other chains through CCIP-Read and ENSv2 expansion.</p>

      <h2 id="how-it-works">How Does ENS Work?</h2>
      <p>ENS operates through a registry contract that maps domain names to resolver contracts. Users register .eth names through the ENS app or registrar, paying annual renewal fees in ETH. The resolver contract stores records associated with each name, including Ethereum addresses, other cryptocurrency addresses, content hashes for IPFS-hosted websites, text records for social profiles, and arbitrary key-value data. Name resolution is supported natively by all major Ethereum wallets and dApps.</p>
      <p>ENS supports subdomains, allowing name owners to create unlimited subdomains like team.company.eth. The protocol is evolving with ENSv2, which aims to bring ENS to Layer 2 networks for cheaper registration and management while maintaining the security of Ethereum mainnet for the root registry. CCIP-Read enables cross-chain name resolution, extending ENS utility beyond Ethereum.</p>

      <h2 id="tokenomics">ENS Tokenomics</h2>
      <p>ENS has a total supply of 100 million tokens, distributed through an airdrop to early .eth domain holders and contributors. The ENS DAO governs the protocol, controlling the treasury funded by domain registration and renewal fees. ENS token holders vote on protocol upgrades, fee structures, treasury allocation, and ecosystem grants. The DAO treasury accumulates ETH from ongoing domain registrations, creating a sustainable funding mechanism for protocol development.</p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>ENS enables human-readable Ethereum wallet addresses replacing hex strings, portable Web3 digital identity across all Ethereum applications, decentralized website hosting through IPFS content hash resolution, multi-chain address resolution for receiving tokens on various networks, and subdomain management for organizations and communities.</p>

      <h2 id="how-to-buy">How to Buy ENS</h2>
      <p>To buy ENS, purchase on Binance, Coinbase, or OKX, or swap ETH for ENS on Uniswap. Store ENS in MetaMask or a hardware wallet. Delegate your ENS tokens to participate in DAO governance. Registering a .eth domain on the ENS app is also recommended for experiencing the protocol firsthand.</p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>Domain registration revenue is cyclical and dependent on Ethereum ecosystem growth and new user onboarding. Competition from multi-chain naming services like SPACE ID and Unstoppable Domains could fragment the market. ENS registration on Ethereum mainnet is expensive during high gas periods, though ENSv2 aims to address this. Trademark and name squatting disputes lack established resolution frameworks. The DAO governance model requires ongoing community participation for effective decision-making.</p>
    </LearnPageLayout>
  );
}
