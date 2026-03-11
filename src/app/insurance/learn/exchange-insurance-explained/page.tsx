import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Are Your Funds Insured on Exchanges? (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn what insurance crypto exchanges actually provide. FDIC coverage for USD, crime insurance, self-funded reserves like SAFU, and what is NOT covered.",
  keywords: ["exchange insurance", "crypto exchange FDIC", "Coinbase insurance", "Binance SAFU", "crypto exchange protection"],
};

export default function ExchangeInsuranceExplainedPage() {
  return (
    <LearnPageLayout
      title="Are Your Funds Insured on Exchanges?"
      categoryName="Crypto Insurance"
      categorySlug="insurance"
      readTime="10 min read"
      intro="One of the most common misconceptions in crypto is that funds on exchanges are fully insured. While major exchanges do provide some level of protection, the coverage is far more limited than most users realize. Understanding exactly what is and is not insured on crypto exchanges is essential for making informed decisions about where and how to store your digital assets."
      toc={[
        { id: "fdic-coverage", title: "FDIC Coverage for USD Balances", level: 2 },
        { id: "crime-insurance", title: "Exchange Crime Insurance", level: 2 },
        { id: "self-funded", title: "Self-Funded Reserves (SAFU & Others)", level: 2 },
        { id: "not-covered", title: "What Exchanges Do NOT Insure", level: 2 },
        { id: "exchange-comparison", title: "Insurance by Exchange", level: 2 },
        { id: "protecting-yourself", title: "Protecting Yourself Beyond Insurance", level: 2 },
      ]}
      faqs={[
        { question: "Is my crypto insured on Coinbase?", answer: "Coinbase maintains crime insurance covering a portion of crypto held in hot wallets against theft by hackers or employees. USD balances are held in FDIC-insured banks up to $250,000. However, crypto held in cold storage and losses from your own account compromise are not covered." },
        { question: "What is Binance SAFU?", answer: "SAFU (Secure Asset Fund for Users) is Binance's self-funded emergency insurance reserve. Binance allocates a percentage of trading fees to SAFU. It has been used to cover user losses from hacks, most notably the 2019 $40 million hack where SAFU covered all affected users." },
        { question: "Does FDIC insurance cover Bitcoin?", answer: "No. FDIC insurance only covers US dollar deposits held in bank accounts, up to $250,000. Cryptocurrency holdings are not deposits and are not covered by FDIC insurance under any circumstances, even if held on a FDIC-insured exchange." },
        { question: "What happens if an exchange goes bankrupt?", answer: "If an exchange goes bankrupt, crypto holdings may be treated as part of the bankruptcy estate. Users become unsecured creditors and may recover only a fraction of their assets, as seen with FTX and Mt. Gox. Exchange insurance typically does not cover insolvency." },
      ]}
      relatedArticles={[
        { title: "Complete Guide to Crypto Insurance", href: "/insurance/learn/crypto-insurance-guide", category: "Insurance" },
        { title: "Rug Pull Protection", href: "/insurance/learn/rug-pull-protection", category: "Insurance" },
        { title: "Best Crypto Exchanges", href: "/exchanges/best", category: "Exchanges" },
      ]}
    >
      <h2 id="fdic-coverage">FDIC Coverage for USD Balances</h2>
      <p>
        Several US-based exchanges hold customer USD balances in FDIC-insured bank accounts, providing up to $250,000 in protection per depositor against bank failure. Coinbase, Gemini, and Kraken offer this for USD cash balances. However, this protection only covers the cash portion of your account, not any cryptocurrency. If the bank holding your exchange&apos;s USD reserves fails, FDIC coverage applies. If the exchange itself fails or is hacked, FDIC insurance does not apply because it only protects against bank insolvency. This distinction is critical: your dollars have some protection, but your crypto has none under FDIC.
      </p>

      <h2 id="crime-insurance">Exchange Crime Insurance</h2>
      <p>
        Some exchanges carry commercial crime insurance policies that cover specific scenarios. Coinbase has disclosed a crime insurance policy that covers a portion of crypto assets held in hot storage against losses from theft, including cybersecurity breaches and employee theft. Gemini maintains similar coverage through Lloyd&apos;s of London and other insurers. These policies typically cover hot wallet hacks and internal fraud but have significant limitations. The insured amount is usually far less than the total assets held, the policies may not cover all types of attacks, and they never cover losses from individual user account compromises like phishing or password theft.
      </p>

      <h2 id="self-funded">Self-Funded Reserves (SAFU &amp; Others)</h2>
      <p>
        Binance&apos;s SAFU fund is the most well-known self-funded reserve, established in 2018 with a commitment to allocate 10% of trading fees. When Binance was hacked for 7,000 BTC in 2019, SAFU covered all affected users in full. Other exchanges maintain similar reserves: OKX has a reserve fund, and Bitget has a protection fund. These self-funded reserves provide a layer of protection but are not the same as regulated insurance. The exchange controls the fund and decides when to deploy it. There is no external guarantee of the fund&apos;s solvency, and in a catastrophic event exceeding the fund&apos;s balance, users would absorb the remaining losses.
      </p>

      <h2 id="not-covered">What Exchanges Do NOT Insure</h2>
      <p>
        No exchange insurance covers market losses from price declines. Individual account compromises from phishing, SIM swaps, or password theft are the user&apos;s responsibility. Losses from sending crypto to wrong addresses or wrong networks are not covered. Most importantly, exchange insolvency or bankruptcy is typically not covered by any insurance, as the FTX collapse demonstrated. Some exchanges also exclude coverage for certain jurisdictions, specific asset types, or losses above certain thresholds. The terms and conditions of exchange insurance are rarely transparent and may change without notice.
      </p>

      <h2 id="exchange-comparison">Insurance by Exchange</h2>
      <p>
        Coinbase offers FDIC coverage on USD and crime insurance on hot wallet crypto. Gemini provides FDIC coverage and Lloyd&apos;s of London crime insurance. Kraken offers FDIC coverage on USD but limited disclosure on crypto insurance. Binance relies on the SAFU self-funded reserve. OKX maintains an undisclosed reserve fund. Decentralized exchanges generally offer no insurance, though DeFi insurance protocols can cover some DEX contracts. The amount of insurance relative to total assets held varies significantly and is often not publicly disclosed. When choosing an exchange, consider the insurance coverage as one factor alongside security practices, regulation, and reputation.
      </p>

      <h2 id="protecting-yourself">Protecting Yourself Beyond Insurance</h2>
      <p>
        Do not rely solely on exchange insurance. Use hardware wallets for long-term storage of significant holdings. Enable all available security features including two-factor authentication, withdrawal whitelists, and anti-phishing codes. Diversify across multiple exchanges to reduce concentration risk. Consider third-party DeFi insurance from protocols like Nexus Mutual for coverage that exchanges do not provide. Keep only trading amounts on exchanges and move the rest to self-custody. Monitor exchange proof-of-reserves reports where available. The FTX collapse taught the industry that even large, seemingly reputable exchanges can fail, and relying on exchange insurance alone is insufficient.
      </p>
    </LearnPageLayout>
  );
}
