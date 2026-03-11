import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is First Digital USD (FDUSD)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about First Digital USD (FDUSD), the stablecoin backed by cash and Treasuries. Discover FDUSD reserves and how to buy.",
};

export default function FirstDigitalUsdPage() {
  return (
    <LearnPageLayout
      title="What Is First Digital USD (FDUSD)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="First Digital USD (FDUSD) is a stablecoin issued by FD121 Limited, a subsidiary of First Digital Group based in Hong Kong. Backed by cash and US Treasury bills held in segregated reserve accounts, FDUSD gained rapid adoption through its prominent listing on Binance, where it became a primary zero-fee trading pair and a major stablecoin in the Asian crypto market."
      toc={[
        { id: "what-is", title: "What Is First Digital USD?", level: 2 },
        { id: "how-it-works", title: "How Does First Digital USD Work?", level: 2 },
        { id: "tokenomics", title: "FDUSD Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy FDUSD", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        { question: "What is First Digital USD?", answer: "FDUSD is a stablecoin from First Digital Group backed by cash and US Treasuries. It gained prominence through its zero-fee trading pair status on Binance." },
        { question: "Where can I buy FDUSD?", answer: "FDUSD is primarily available on Binance with zero trading fees on select pairs. It is also available on PancakeSwap and other exchanges." },
        { question: "Is First Digital USD a good investment?", answer: "FDUSD maintains a $1 peg. Its primary advantage is zero-fee trading on Binance. For trading purposes, it can save significant costs on Binance compared to other pairs." },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
      ]}
    >
      <section id="what-is"><h2>What Is First Digital USD?</h2><p>First Digital USD (FDUSD) is a stablecoin pegged to the US dollar, issued by FD121 Limited under the regulatory framework of Hong Kong. The stablecoin was launched in June 2023 and quickly grew to a multi-billion dollar market cap, primarily through its adoption on Binance as a preferred trading pair. Binance offered zero trading fees on FDUSD pairs, driving significant volume to the stablecoin.</p><p>FDUSD is deployed on Ethereum and BNB Chain. Its rapid growth was facilitated by Binance's decision to discontinue zero-fee BUSD pairs and redirect that volume toward FDUSD, making it the de facto house stablecoin on the world's largest crypto exchange by volume.</p></section>
      <section id="how-it-works"><h2>How Does First Digital USD Work?</h2><p>FDUSD operates through a standard mint-and-burn mechanism where approved entities deposit US dollars to receive FDUSD tokens and can redeem them at par. Reserves are held in cash deposits and US Treasury bills in segregated accounts managed by a qualified custodian. First Digital publishes regular attestation reports to verify that reserves match or exceed FDUSD in circulation. The issuance process is controlled by FD121 Limited, with minting authority restricted to authorized participants.</p></section>
      <section id="tokenomics"><h2>FDUSD Tokenomics</h2><p>FDUSD has a variable supply driven by demand, with most circulation concentrated on Binance trading pairs. Reserves consist of cash held in segregated bank accounts and short-term US Treasury instruments. The stablecoin's market cap fluctuates with Binance trading activity and the availability of zero-fee promotions. FDUSD can be redeemed 1:1 for US dollars through the First Digital platform by verified institutional users.</p></section>
      <section id="use-cases"><h2>Key Use Cases</h2><p>FDUSD is primarily used as a zero-fee trading pair on Binance, reducing costs for active traders. It also serves as a stablecoin for BNB Chain DeFi protocols, a settlement currency for Binance-based trading operations, and a parking asset for traders between positions. The zero-fee trading advantage makes FDUSD particularly attractive for high-frequency and high-volume traders on Binance.</p></section>
      <section id="how-to-buy"><h2>How to Buy FDUSD</h2><p>FDUSD is most commonly acquired on Binance through zero-fee trading pairs. It can also be purchased on PancakeSwap on BNB Chain. Deposit USD or trade other crypto assets on Binance to acquire FDUSD. Store in any Ethereum or BNB Chain compatible wallet including MetaMask, Trust Wallet, or Ledger.</p></section>
      <section id="risks"><h2>Risks and Considerations</h2><p>FDUSD's adoption is heavily concentrated on Binance, creating platform dependency risk. If Binance changes its fee structure or promotes a different stablecoin, FDUSD demand could decline rapidly. The issuer is relatively new compared to Circle or Tether, with a shorter track record. Hong Kong regulatory framework, while developing, differs from US regulation. Limited transparency compared to more established stablecoins and concentration of trading activity on a single exchange are notable concerns.</p></section>
    </LearnPageLayout>
  );
}
