import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Getting Paid in Crypto as a Freelancer (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Guide to freelancing with crypto payments. How to invoice in crypto, manage volatility, handle taxes, and find crypto-paying clients as a freelancer.",
};

export default function CryptoFreelancingPage() {
  return (
    <LearnPageLayout title="Getting Paid in Crypto as a Freelancer" categoryName="Crypto Spending" categorySlug="spending" readTime="8 min read"
      intro="Freelancers working with crypto-native companies, DAOs, and international clients are increasingly receiving payment in cryptocurrency. Crypto payments offer instant global settlement, lower transaction fees than international wire transfers, and access to clients worldwide without banking complications. However, freelancing with crypto introduces unique challenges around invoicing, volatility management, tax reporting, and financial planning that require specific strategies."
      toc={[
        { id: "getting-started", title: "Getting Started", level: 2 },
        { id: "invoicing", title: "Invoicing and Payment", level: 2 },
        { id: "volatility", title: "Managing Volatility", level: 2 },
        { id: "taxes", title: "Tax and Financial Planning", level: 2 },
      ]}
      faqs={[
        { question: "How do I find clients that pay in crypto?", answer: "Web3-native companies and DAOs commonly pay contributors in crypto. Platforms like Gitcoin, Dework, Layer3, and Superteam connect freelancers with crypto-paying opportunities. Remote job boards like CryptoJobsList, Web3 Career, and Remote3 list crypto-compensated positions. Contributing to DAOs through bounties and grants is another pathway. Networking in crypto Discord communities and Twitter also leads to opportunities." },
        { question: "Should I accept payment in stablecoins or volatile crypto?", answer: "Stablecoins (USDC, USDT, DAI) provide predictable income without volatility risk and are recommended for your operating expenses portion. If you believe in the long-term value of a volatile crypto (ETH, SOL), accepting a portion of payment in that asset is effectively investing part of your income. A common approach is receiving 50-70% in stablecoins for expenses and 30-50% in other crypto as an investment." },
        { question: "How do I invoice for crypto payments?", answer: "Use invoicing tools that support crypto: Request Network, Bitwage, and Gilded create professional invoices with crypto payment options. You can also use traditional invoicing tools (FreshBooks, Invoice Ninja) and include your wallet address and payment instructions. Always specify the cryptocurrency, amount (or fiat equivalent with conversion terms), and the blockchain network to avoid payment errors." },
      ]}
      relatedArticles={[
        { title: "Crypto Salary Guide", href: "/spending/learn/crypto-salary-guide", category: "Spending" },
        { title: "Crypto Budgeting", href: "/spending/learn/crypto-budgeting", category: "Spending" },
        { title: "Stablecoin Spending", href: "/spending/learn/stablecoin-spending", category: "Spending" },
      ]}
    >
      <h2 id="getting-started">Getting Started</h2>
      <p>To start freelancing with crypto payments, you need a wallet setup, a strategy for finding clients, and an understanding of the payment landscape. Set up wallets on the most common payment chains: Ethereum (and its L2s like Arbitrum, Optimism, and Base), Solana, and Polygon cover most crypto-paying clients. Use a hardware wallet for larger balances and a software wallet (MetaMask, Phantom) for receiving payments. Register on crypto freelancing platforms: Dework is a Web3-native task management and bounty platform where DAOs post work opportunities. Gitcoin funds open-source contributions through grants and bounties. Layer3 gamifies web3 contributions with quests and bounties. Superteam connects freelancers with Solana ecosystem opportunities. Build a portfolio that demonstrates Web3 familiarity: even traditional skills (design, writing, marketing, development) are more valuable in Web3 if you understand the ecosystem. Contributing to open-source projects, writing about Web3 topics, or participating in hackathons builds credibility. Start with smaller projects to build reputation and trust before pursuing larger engagements.</p>

      <h2 id="invoicing">Invoicing and Payment</h2>
      <p>Professional invoicing for crypto payments requires clarity to avoid misunderstandings and payment errors. Every invoice should specify: the service description and deliverables, the amount in fiat currency (your pricing anchor) and the cryptocurrency equivalent, the specific cryptocurrency and blockchain network for payment (do not assume the client knows which network to use), your wallet address (double-check it every time), the exchange rate source and conversion timing (rate at time of invoice, time of payment, or a specific date), and payment terms (net 15, net 30, upon completion). Use crypto-native invoicing tools for the best experience. Request Network creates on-chain invoices that track payment status automatically. Bitwage enables companies to convert fiat payroll to crypto payments, useful when working with companies that do not natively pay in crypto. Gilded provides crypto accounting and invoicing for businesses. For simpler setups, create a standard invoice template with your crypto payment details and send via email or messaging. Always confirm receipt of payment by checking the blockchain transaction, and keep invoice records organized for tax reporting. Consider milestone-based payment structures for larger projects to reduce risk for both parties.</p>

      <h2 id="volatility">Managing Volatility</h2>
      <p>If you receive payment in volatile cryptocurrencies (ETH, SOL, BTC), managing price volatility is essential for financial stability. The simplest approach is converting to stablecoins or fiat immediately upon receipt. Set up automatic conversions on your exchange: when crypto hits your exchange wallet, it converts to USDC or your fiat currency automatically. This provides income predictability equivalent to fiat payment. A more nuanced approach is the split strategy: convert enough to stablecoins or fiat to cover your monthly expenses (rent, food, bills, taxes) and hold the remainder in crypto as an investment. For example, if your monthly expenses are $4,000 and you earn $6,000 in ETH, convert $4,000 to stablecoins and hold $2,000 in ETH. This covers your needs while maintaining crypto exposure. Use dollar-cost averaging in reverse: rather than converting all at once, sell small amounts regularly to smooth out the conversion price. Set rules in advance: decide your conversion strategy before receiving payment, not after. Emotional decisions during price swings lead to poor outcomes. Build a stablecoin emergency fund of three to six months of expenses to provide a buffer during periods when crypto values decline significantly.</p>

      <h2 id="taxes">Tax and Financial Planning</h2>
      <p>Crypto freelancing income has the same tax obligations as fiat freelancing income, with additional complexity. In most jurisdictions, crypto received as payment for services is taxable income at the fair market value on the date of receipt. This means you need to record the fiat value of every crypto payment you receive. If you later sell the crypto at a different price, you also realize a capital gain or loss on the difference. Self-employment tax applies to freelancing income regardless of whether it is received in crypto or fiat. In the US, this means approximately 15.3% in self-employment taxes on top of income tax. Make quarterly estimated tax payments to avoid underpayment penalties. Use crypto tax software (CoinTracker, Koinly, TokenTax) to track income, conversions, and capital gains automatically. Set aside 25-40% of each payment for taxes immediately upon receipt by converting that portion to stablecoins in a separate wallet or account. This prevents the situation where you owe taxes on income received as crypto that subsequently dropped in value. Maintain detailed records: every payment received, every conversion, every expense paid in crypto. Good record-keeping is essential for accurate tax filing and audit defense. Consider working with an accountant familiar with both freelancing and cryptocurrency tax requirements.</p>
    </LearnPageLayout>
  );
}
