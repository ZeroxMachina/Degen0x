import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Deflation in Crypto? (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn what deflation means in cryptocurrency, how deflationary tokenomics work, token burns, and the impact of decreasing supply on token value.",
  keywords: ["deflation crypto", "deflationary token", "token burn", "decreasing supply", "deflationary tokenomics"],
};

export default function DeflationPage() {
  return (
    <LearnPageLayout title="What Is Deflation in Crypto?" categoryName="Glossary" categorySlug="learn/glossary" readTime="4 min" intro="Deflation in cryptocurrency refers to a decrease in the total supply of a token over time, typically achieved through burning mechanisms that permanently remove tokens from circulation. Deflationary tokenomics create scarcity by ensuring that supply decreases or grows slower than demand, theoretically putting upward pressure on the token's price. This is the opposite of inflation, where new tokens are continuously created."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "definition", title: "Definition", level: 2 },
        { id: "mechanisms", title: "mechanisms", level: 2 },
        { id: "deflationary-mechanisms", title: "Deflationary Mechanisms", level: 2 },
        { id: "examples", title: "examples", level: 2 },
        { id: "examples", title: "Examples", level: 2 }
      ]}
      faqs={[
        { question: "Is Bitcoin deflationary?", answer: "Bitcoin is technically disinflationary — its new supply decreases over time through halvings (roughly every 4 years) but new BTC is still being minted until approximately 2140 when the 21 million supply cap is reached. After that, Bitcoin becomes purely deflationary if you account for coins permanently lost due to forgotten keys or sent to unrecoverable addresses. Some estimate 3-4 million BTC are already permanently lost." },
        { question: "Are deflationary tokens always a good investment?", answer: "Not necessarily. While deflation creates scarcity, the value of a token ultimately depends on utility, adoption, and demand. A deflationary token with no real use case will still lose value if demand falls. Additionally, extremely aggressive deflation can harm usability if people hoard tokens rather than use them, similar to how economic deflation can discourage spending." },
      ]}
      relatedArticles={[
        { title: "Burn", href: "/learn/glossary/burn", category: "Glossary" },
        { title: "Inflation", href: "/learn/glossary/inflation", category: "Glossary" },
        { title: "What Is Tokenomics?", href: "/learn/what-is-tokenomics", category: "Learn" },
        { title: "Halving", href: "/learn/glossary/halving", category: "Glossary" },
      ]}
    >
      <section id="definition"><h2>Definition</h2><p>Deflation in cryptocurrency economics means the total circulating supply of a token decreases over time. This contrasts with traditional fiat currencies, which are typically inflationary by design — central banks continuously increase the money supply. Deflationary tokens use programmatic mechanisms to permanently remove tokens from circulation, creating increasing scarcity. The economic theory behind deflationary tokenomics is simple: if demand remains constant or grows while supply shrinks, the value of each remaining token should increase. However, the relationship between supply mechanics and price is more nuanced in practice, influenced by market sentiment, utility, competition, and broader market conditions.</p></section>
      <section id="mechanisms"><h2>Deflationary Mechanisms</h2><p>Several mechanisms create deflationary pressure. Token burns permanently destroy tokens by sending them to an unrecoverable address (a burn address). Ethereum's EIP-1559 burns a portion of every transaction fee, which can make ETH deflationary during periods of high network activity. Buyback-and-burn programs, used by tokens like BNB, use protocol revenue to purchase tokens from the open market and burn them. Some tokens implement a burn tax, where a percentage of every transaction is automatically burned. Fixed supply caps with lost tokens also create practical deflation — Bitcoin's 21 million cap combined with permanently lost coins means the effective supply only decreases over time.</p></section>
      <section id="examples"><h2>Examples</h2><p>Ethereum became deflationary after The Merge and EIP-1559, burning more ETH in transaction fees than is created through staking rewards during periods of high network usage. BNB conducts quarterly auto-burns based on Binance's trading volume, targeting an eventual supply of 100 million BNB (down from 200 million at launch). LUNA Classic (LUNC) implemented a community-driven burn tax after its collapse to reduce the hyperinflated supply. Many DeFi tokens incorporate burn mechanisms into their protocols — for example, MakerDAO burns MKR tokens when loans are repaid, and SushiSwap buys back and burns SUSHI using a portion of trading fees. These mechanisms vary in their impact and effectiveness depending on the token's overall economic design.</p></section>
    </LearnPageLayout>
  );
}
