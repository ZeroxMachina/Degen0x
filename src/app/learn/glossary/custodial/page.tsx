import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Does Custodial Mean in Crypto? (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn what custodial means in cryptocurrency, the difference between custodial and non-custodial wallets, and the trade-offs of each approach to asset storage.",
  keywords: ["custodial", "custodial wallet", "custodial vs non-custodial", "crypto custody", "self-custody"],
};

export default function CustodialPage() {
  return (
    <LearnPageLayout title="What Does Custodial Mean?" categoryName="Glossary" categorySlug="learn/glossary" readTime="4 min" intro="In cryptocurrency, custodial refers to any arrangement where a third party holds and manages your private keys on your behalf. When you keep crypto on a centralized exchange like Coinbase or Binance, you are using custodial storage — the exchange controls the private keys and you access your funds through their platform. The alternative, non-custodial (self-custody), means you directly control your own private keys."
      toc={[{ id: "definition", title: "Definition", level: 2 },{ id: "custodial-vs-non-custodial", title: "Custodial vs Non-Custodial", level: 2 },{ id: "trade-offs", title: "Trade-Offs", level: 2 }]}
      faqs={[
        { question: "Is keeping crypto on an exchange custodial?", answer: "Yes, when you store cryptocurrency on a centralized exchange, the exchange holds the private keys to your assets. You have an account balance on their platform, but you do not directly control the underlying keys. This is why the crypto community uses the phrase 'not your keys, not your coins' — if the exchange is hacked, goes bankrupt, or freezes your account, you may lose access to your funds." },
        { question: "Which is safer, custodial or non-custodial?", answer: "Neither is inherently safer — it depends on the individual's technical ability and risk tolerance. Custodial solutions protect against user error (losing keys) but introduce counterparty risk (exchange hacks, bankruptcies like FTX). Non-custodial solutions eliminate counterparty risk but place full responsibility on the user to secure their private keys and seed phrases." },
      ]}
      relatedArticles={[
        { title: "Hot Wallet", href: "/learn/glossary/hot-wallet", category: "Glossary" },
        { title: "Cold Storage", href: "/learn/glossary/cold-storage", category: "Glossary" },
        { title: "Self-Custody Guide", href: "/learn/self-custody-guide", category: "Learn" },
        { title: "Private Key", href: "/learn/glossary/private-key", category: "Glossary" },
      ]}
    >
      <section id="definition"><h2>Definition</h2><p>Custodial means that a third party — typically a centralized exchange, institutional custodian, or managed wallet service — holds and controls the private keys to your cryptocurrency. In traditional finance, custody is standard: your bank holds your money, your broker holds your stocks. In crypto, custodial services operate similarly, managing the technical complexity of key management while providing familiar interfaces like username and password login, customer support, and account recovery options. Institutional custodians like Coinbase Custody, BitGo, and Fireblocks serve businesses and funds that require regulated custody solutions with insurance and compliance features.</p></section>
      <section id="custodial-vs-non-custodial"><h2>Custodial vs Non-Custodial</h2><p>Custodial wallets and services hold your private keys for you — you interact with your crypto through their platform and trust them to secure and return your assets. Non-custodial (self-custody) wallets like MetaMask, Phantom, or hardware wallets give you direct control over your private keys. With non-custodial wallets, only you can authorize transactions and no third party can freeze or confiscate your funds. However, you are solely responsible for securing your seed phrase and private keys — there is no password reset or customer support if you lose access. This fundamental distinction drives many of the philosophical debates in crypto about decentralization, financial sovereignty, and the role of intermediaries.</p></section>
      <section id="trade-offs"><h2>Trade-Offs</h2><p>Custodial solutions offer convenience, familiar user experience, regulatory compliance, and protection against user error — if you forget your password, you can recover your account. They also provide features like fiat on-ramps, integrated trading, and tax reporting. However, they introduce counterparty risk: the collapse of FTX in 2022, Mt. Gox in 2014, and numerous other exchange failures demonstrated that custodial services can lose or misappropriate customer funds. Non-custodial solutions eliminate this counterparty risk entirely but require users to manage their own security, handle backup and recovery, and interact directly with blockchain protocols. Many experienced users adopt a hybrid approach, using custodial exchanges for active trading and non-custodial wallets for long-term storage of significant holdings.</p></section>
    </LearnPageLayout>
  );
}
