import type { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import LearnPage from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Custodial vs Non-Custodial Wallets (${CURRENT_YEAR}) - Key Differences | ${SITE_NAME}`,
  description: `Custodial vs non-custodial wallets explained for ${CURRENT_YEAR}. Learn who holds your keys, the security trade-offs, and which type is right for you.`,
  alternates: { canonical: "/wallets/learn/custodial-vs-non-custodial" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const toc = [
  { id: "overview", title: "Custodial vs Non-Custodial: Overview", level: 2 },
  { id: "custodial", title: "What Are Custodial Wallets?", level: 2 },
  { id: "non-custodial", title: "What Are Non-Custodial Wallets?", level: 2 },
  { id: "comparison", title: "Key Differences Compared", level: 2 },
  { id: "which-to-use", title: "Which Should You Use?", level: 2 },
];

const faqs = [
  { question: "Is Coinbase custodial or non-custodial?", answer: "The Coinbase exchange app is custodial: Coinbase holds your private keys. Coinbase Wallet (a separate app) is non-custodial: you hold your own keys. This distinction is important because the exchange app exposes you to exchange-level risks (hacks, insolvency), while the self-custody wallet gives you full control." },
  { question: "What does 'not your keys, not your coins' mean?", answer: "This popular crypto phrase means that if you do not control the private keys to your cryptocurrency (i.e., you use a custodial wallet), you do not truly own the crypto. The custodian can freeze, seize, or lose access to your funds. True ownership requires holding your own private keys in a non-custodial wallet." },
  { question: "Can I lose my crypto with a non-custodial wallet?", answer: "Yes, if you lose your seed phrase and cannot access your wallet, your funds are permanently lost. There is no customer support or recovery process. This is the trade-off of self-custody: you gain full control but also full responsibility for securing your keys." },
];

const relatedArticles = [
  { title: "What Is a Crypto Wallet?", href: "/wallets/learn/what-is-a-crypto-wallet", category: "Wallets" },
  { title: "Seed Phrase Explained", href: "/wallets/learn/seed-phrase-explained", category: "Wallets" },
  { title: "Best Wallets for Beginners", href: "/wallets/best/beginners", category: "Wallets" },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wallets', item: 'https://degen0x.com/wallets' },
    { '@type': 'ListItem', position: 3, name: 'Learn', item: 'https://degen0x.com/wallets/learn' },
    { '@type': 'ListItem', position: 4, name: 'Custodial Vs Non Custodial', },
  ],
};

export default function CustodialVsNonCustodialPage() {
  return (
    <LearnPage
      title="Custodial vs Non-Custodial Wallets: Who Holds Your Keys?"
      categoryName="Crypto Wallets"
      categorySlug="wallets"
      readTime="7 min"
      intro="The most fundamental question in crypto wallets is: who controls the private keys? Custodial wallets let a third party manage your keys, while non-custodial (self-custody) wallets give you full control. This guide explains the differences, trade-offs, and when to use each type."
      toc={toc}
      faqs={faqs}
      relatedArticles={relatedArticles}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <h2 id="overview">Custodial vs Non-Custodial: Overview</h2>
      <p>
        The key difference is simple: in a custodial wallet, a third party (usually an exchange) holds your
        private keys. In a non-custodial wallet, you hold your own private keys. This distinction determines
        who has ultimate control over your cryptocurrency. With custodial wallets, you rely on the provider&apos;s
        security and solvency. With non-custodial wallets, you have complete sovereignty but also complete
        responsibility.
      </p>

      <h2 id="custodial">What Are Custodial Wallets?</h2>
      <p>
        Custodial wallets are services where a company holds your private keys on your behalf. The most common
        examples are cryptocurrency exchange accounts: when you buy crypto on Coinbase, Binance, or Kraken and
        leave it on the exchange, you are using a custodial wallet. The exchange holds the keys and you access
        your balance through your account login.
      </p>
      <p>
        The advantage of custodial wallets is convenience and recoverability. If you forget your password, customer
        support can help you regain access. The interface is familiar, resembling traditional banking apps. The
        disadvantage is significant: you are trusting the custodian with your assets. Exchange hacks (Mt. Gox,
        FTX) have resulted in billions of dollars in user losses. Custodians can also freeze your account, require
        identity verification, and are subject to government seizure orders.
      </p>

      <h2 id="non-custodial">What Are Non-Custodial Wallets?</h2>
      <p>
        Non-custodial wallets (also called self-custody wallets) give you exclusive control of your private keys.
        Examples include MetaMask, Phantom, Trust Wallet, Exodus, Ledger, and Trezor. When you create one of these
        wallets, you receive a seed phrase that only you know. No company stores your keys or has access to your
        funds.
      </p>
      <p>
        The advantage is true ownership and sovereignty. No one can freeze your account, deny you access, or
        control your funds. You can interact directly with decentralized protocols without intermediaries. The
        disadvantage is responsibility: if you lose your seed phrase, your funds are gone forever. There is no
        customer support that can recover your keys. You are your own bank, with all the power and risk that entails.
      </p>

      <h2 id="comparison">Key Differences Compared</h2>
      <p>
        Control: Custodial wallets mean the company controls your keys; non-custodial means you do. Recovery:
        Custodial wallets can be recovered through customer support; non-custodial wallets can only be recovered
        with your seed phrase. DeFi Access: Non-custodial wallets connect directly to dApps; custodial wallets
        generally cannot. Privacy: Non-custodial wallets require no KYC; custodial wallets usually require identity
        verification. Risk: Custodial wallets carry exchange/counterparty risk; non-custodial wallets carry personal
        key management risk.
      </p>

      <h2 id="which-to-use">Which Should You Use?</h2>
      <p>
        Most experienced crypto users recommend a combination. Use a custodial exchange for buying and selling
        crypto with fiat currency (the on-ramp and off-ramp), but transfer assets you plan to hold long-term
        to a non-custodial wallet. For DeFi, NFTs, and dApp interaction, non-custodial wallets are required.
      </p>
      <p>
        For beginners, starting with a custodial exchange is fine while you learn the basics. As your holdings
        and knowledge grow, transition to a self-custody wallet. The ideal setup is a hardware wallet (Ledger or
        Trezor) for long-term storage and a software wallet (MetaMask or Phantom) for active use, with an exchange
        account solely for fiat on/off ramping.
      </p>
    </LearnPage>
  );
}
