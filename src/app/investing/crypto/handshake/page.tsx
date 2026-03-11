import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Handshake (HNS)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn about Handshake (HNS), the decentralized naming and certificate authority. Discover how it works, tokenomics, use cases, and how to buy HNS.",
};

export default function HandshakePage() {
  return (
    <LearnPageLayout title="What Is Handshake (HNS)? Price, Guide & How to Buy" categoryName="Investing" categorySlug="investing" readTime="8 min read" intro="Handshake is a decentralized, permissionless naming protocol that aims to replace the centralized certificate authority and naming system that underpins the internet. Rather than offering subdomains under existing extensions, Handshake enables the creation and ownership of entirely new top-level domains (TLDs) through an on-chain auction system, directly challenging ICANN's monopoly over internet naming." toc={[{id:"what-is",title:"What Is Handshake?",level:2},{id:"how-it-works",title:"How Does Handshake Work?",level:2},{id:"tokenomics",title:"HNS Tokenomics",level:2},{id:"use-cases",title:"Key Use Cases",level:2},{id:"how-to-buy",title:"How to Buy HNS",level:2},{id:"risks",title:"Risks and Considerations",level:2}]} faqs={[{question:"What is Handshake?",answer:"Handshake is a decentralized protocol for creating and owning internet top-level domains through blockchain auctions, aiming to decentralize DNS and certificate authorities."},{question:"Where can I buy HNS?",answer:"HNS is available on Gate.io and Namebase. It trades against USDT and BTC pairs. Handshake names are auctioned on Namebase or Bob Wallet."},{question:"Is Handshake a good investment?",answer:"Handshake tackles internet infrastructure decentralization, but adoption of alternative TLDs has been slow. This is not financial advice. Do your own research."}]} relatedArticles={[{title:"Best Cryptos to Buy",href:"/investing/best/cryptos-to-buy",category:"Investing"},{title:"How to Invest in Crypto",href:"/investing/learn/how-to-invest-in-crypto",category:"Investing"}]}>
      <h2 id="what-is">What Is Handshake?</h2>
      <p>Handshake was conceived by a team of experienced crypto developers including Joseph Poon (co-creator of the Lightning Network) and Andrew Lee, backed by prominent crypto investors and venture firms. The project tackles a fundamental internet infrastructure challenge: the centralized control of domain names and TLS certificates by ICANN and a small number of certificate authorities. Handshake proposes replacing this centralized trust model with a blockchain-based system where TLD ownership is determined by permissionless auctions.</p>
      <p>Unlike blockchain naming services that operate as subdomains (like .eth under ENS), Handshake enables ownership of root-level TLDs like .wallet, .crypto, or entirely custom extensions. These TLDs are resolved through a peer-to-peer DNS system that replaces the traditional root zone file. The project reserved all existing ICANN TLDs and Alexa top 100,000 domain names to avoid conflicts with the existing internet naming system.</p>

      <h2 id="how-it-works">How Does Handshake Work?</h2>
      <p>Handshake uses a proof-of-work blockchain (BLAKE2b + SHA3 algorithm) to manage TLD auctions and ownership records. Users bid on desired TLDs using a Vickrey auction mechanism, where the highest bidder wins but pays the second-highest bid price. Once won, TLD owners can configure DNS records, create unlimited subdomains, and manage certificates for their entire naming space. The blockchain replaces the ICANN root zone file as the authoritative source for TLD resolution.</p>
      <p>Resolution of Handshake names requires either a Handshake-aware DNS resolver (like HDNS.io), a browser extension, or direct configuration of the system&apos;s DNS settings. Some browsers and resolvers have integrated Handshake name support, but mainstream browser adoption remains limited, which is the primary adoption barrier for the protocol.</p>

      <h2 id="tokenomics">HNS Tokenomics</h2>
      <p>HNS has a total supply of 2.04 billion tokens. A unique aspect of Handshake&apos;s distribution was a massive airdrop to FOSS (Free and Open Source Software) developers with established GitHub accounts, distributing tokens to the open-source community that builds internet infrastructure. HNS is used for bidding on TLD auctions, paying name renewal fees, and mining rewards on the Handshake blockchain. Name registration burns a portion of HNS, creating a deflationary pressure tied to naming demand.</p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>Handshake enables decentralized TLD ownership and management outside ICANN control, censorship-resistant domain names for websites and services, custom TLD creation for brands and communities, peer-to-peer certificate authority replacing centralized TLS issuers, and subdomain distribution from owned TLDs for secondary naming markets.</p>

      <h2 id="how-to-buy">How to Buy HNS</h2>
      <p>To buy HNS, purchase on Gate.io or through Namebase, which also serves as the primary platform for Handshake name auctions. Bob Wallet provides a native Handshake wallet for managing names and tokens. Store HNS in Bob Wallet or supported exchanges.</p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>Mainstream browser adoption of Handshake names remains the critical barrier to widespread usage. The project competes with the deeply entrenched ICANN system that all browsers natively support. Proof-of-work mining has environmental and economic sustainability concerns. The TLD market is speculative with uncertain long-term value for most names. Limited exchange listings reduce token liquidity. ICANN could potentially take legal action against alternative naming systems. Technical complexity of Handshake name resolution limits mainstream accessibility.</p>
    </LearnPageLayout>
  );
}
