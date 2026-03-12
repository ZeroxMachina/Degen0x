import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = { title: `Crypto Exchange Insurance Funds Explained (${CURRENT_YEAR}) | ${SITE_NAME}`, description: "Learn how crypto exchange insurance funds work, what they protect against, and which exchanges have the strongest insurance coverage." };

export default function Page() {
  return (
    <LearnPageLayout title="Crypto Exchange Insurance Funds Explained" categoryName="Crypto Exchanges" categorySlug="exchanges" readTime="7 min" intro="Insurance funds protect exchange users from various types of losses, from hacking events to cascading liquidations on derivatives markets. Understanding what insurance covers and what it does not is essential for assessing exchange risk."
      toc={[
        { id: "types", title: "types", level: 2 },
        { id: "types-of-exchange-insurance", title: "Types of Exchange Insurance", level: 2 },
        { id: "safu", title: "safu", level: 2 },
        { id: "safu-and-emergency-funds", title: "SAFU and Emergency Funds", level: 2 },
        { id: "fdic", title: "fdic", level: 2 },
        { id: "fdic-insurance-on-crypto-exchanges", title: "FDIC Insurance on Crypto Exchanges", level: 2 },
        { id: "derivatives-insurance", title: "derivatives-insurance", level: 2 },
        { id: "derivatives-insurance-funds", title: "Derivatives Insurance Funds", level: 2 },
        { id: "coverage-comparison", title: "coverage-comparison", level: 2 },
        { id: "insurance-coverage-by-exchange", title: "Insurance Coverage by Exchange", level: 2 }
      ]}
      faqs={[{question:"Is my crypto insured on exchanges?",answer:"It depends. USD balances on US exchanges are often FDIC insured. Crypto itself may be covered by crime insurance policies but not government insurance. Derivatives positions may be protected by exchange insurance funds against cascading liquidation losses."},{question:"What is Binance SAFU?",answer:"SAFU (Secure Asset Fund for Users) is Binance's emergency insurance fund, funded by allocating 10% of all trading fees. It currently holds over $1 billion and is designed to cover user losses in extreme situations."},{question:"Does insurance cover my personal account being hacked?",answer:"Generally no. Exchange insurance typically covers losses from exchange-level security breaches, not individual account compromises. Protecting your own account with 2FA and strong passwords is your responsibility."}]}
      relatedArticles={[{title:"Exchange Security Checklist",href:"/exchanges/learn/exchange-security-checklist",category:"Exchanges"},{title:"What Is Proof of Reserves",href:"/exchanges/learn/what-is-proof-of-reserves",category:"Exchanges"},{title:"Exchange Hacks History",href:"/exchanges/learn/exchange-hacks-history",category:"Exchanges"}]}
    >
      <section id="types"><h2>Types of Exchange Insurance</h2><p>Exchange insurance comes in several forms. Crime insurance policies cover losses from external hacking, employee theft, and fraudulent transfers — Coinbase and Gemini carry such policies. FDIC insurance protects USD cash balances up to $250,000 at exchanges that hold customer funds in partner banks. Exchange emergency funds (like Binance SAFU) are self-funded reserves designated for covering losses in extreme events. Derivatives insurance funds specifically cover socialized losses from cascading liquidations in futures and options markets.</p></section>
      <section id="safu"><h2>SAFU and Emergency Funds</h2><p>Binance's SAFU is the largest and most well-known exchange emergency fund, holding over $1 billion. It was used to cover $40 million in losses during the 2019 Binance hack, fully reimbursing affected users. OKX maintains a similar risk shield fund. These funds are typically built by allocating a percentage of trading fees and are held in transparent, verifiable wallets. While not the same as traditional insurance, they provide a meaningful safety net for users.</p></section>
      <section id="fdic"><h2>FDIC Insurance on Crypto Exchanges</h2><p>FDIC insurance only covers USD cash balances held at FDIC-member banks, not cryptocurrency holdings. When exchanges like Coinbase or Gemini say they offer FDIC insurance, it applies to the US dollars in your account, not your Bitcoin or Ethereum. If the exchange fails, your USD is protected up to $250,000. Your crypto holdings are not covered by any government insurance program. This distinction is critical and often misunderstood.</p></section>
      <section id="derivatives-insurance"><h2>Derivatives Insurance Funds</h2><p>Derivatives exchanges maintain insurance funds specifically to handle situations where a trader's position is liquidated at a loss greater than their deposited margin. Without insurance funds, these losses would be socialized among profitable traders through auto-deleveraging. Binance, Bybit, OKX, and Deribit all maintain substantial derivatives insurance funds. The size of these funds can fluctuate based on market conditions — they grow during normal periods and may be drawn down during extreme volatility.</p></section>
      <section id="coverage-comparison"><h2>Insurance Coverage by Exchange</h2><p>Coinbase offers FDIC insurance on USD and carries a crime insurance policy for crypto. Gemini provides FDIC on USD and digital asset insurance through Aon. Kraken maintains cold storage reserves but does not publicize specific insurance details. Binance maintains the SAFU fund exceeding $1 billion. BitGo provides $250 million in digital asset insurance for custody clients. When evaluating exchanges, ask specifically what types of losses are covered, what the coverage limits are, and what events trigger payouts.</p></section>
    </LearnPageLayout>
  );
}
