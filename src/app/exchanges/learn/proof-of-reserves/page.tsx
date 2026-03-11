import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Proof of Reserves Explained (${CURRENT_YEAR}): How Exchanges Prove Solvency`,
  description: "Learn what proof of reserves means, how it works with Merkle trees, which exchanges publish PoR, and why it matters for exchange transparency.",
};

const toc = [
  { id: "what-is-por", title: "What Is Proof of Reserves", level: 2 },
  { id: "how-it-works", title: "How Proof of Reserves Works", level: 2 },
  { id: "which-exchanges", title: "Which Exchanges Publish PoR", level: 2 },
  { id: "limitations", title: "Limitations of Proof of Reserves", level: 2 },
  { id: "what-to-look-for", title: "What to Look For", level: 2 },
];

const faqs = [
  { question: "Does proof of reserves guarantee my funds are safe?", answer: "No. Proof of reserves shows that an exchange holds enough assets to cover customer balances at a specific point in time. It does not guarantee ongoing solvency, protection against future hacks, or that the exchange is not borrowing funds temporarily for the audit. It is one important data point, not a complete guarantee." },
  { question: "Which exchange pioneered proof of reserves?", answer: "Kraken was one of the first major exchanges to implement cryptographic proof of reserves, working with auditors to develop a Merkle tree-based system. After the FTX collapse in 2022, many other exchanges including Binance, OKX, and Bybit quickly implemented their own PoR systems." },
  { question: "How often should exchanges publish proof of reserves?", answer: "There is no standard, but more frequent is better. Some exchanges publish monthly, others quarterly. Ideally, proof of reserves would be real-time or near-real-time, though the technical and logistical challenges make this difficult." },
];

export default function ProofOfReservesPage() {
  return (
    <LearnPageLayout
      title="Proof of Reserves Explained: Exchange Transparency"
      categoryName="Crypto Exchanges"
      categorySlug="exchanges"
      readTime="9 min"
      intro="After the FTX collapse revealed that customer funds were being misused, proof of reserves became a critical transparency standard for crypto exchanges. This guide explains how proof of reserves works, which exchanges implement it, and what its limitations are."
      toc={toc}
      faqs={faqs}
      relatedArticles={[
        { title: "Exchange Hacks History", href: "/exchanges/learn/exchange-hacks-history", category: "Exchanges" },
        { title: "How to Choose an Exchange", href: "/exchanges/learn/how-to-choose-exchange", category: "Exchanges" },
        { title: "Exchange Security Tips", href: "/exchanges/learn/exchange-security-tips", category: "Exchanges" },
      ]}
    >
      <h2 id="what-is-por">What Is Proof of Reserves?</h2>
      <p>
        Proof of reserves (PoR) is a cryptographic method that allows an exchange to prove it
        holds enough assets to cover all customer deposits. At its core, PoR answers a simple
        question: does this exchange actually have the money it claims to hold on behalf of
        its users? The concept became urgently important after FTX was revealed to have been
        insolvent while appearing healthy from the outside.
      </p>
      <p>
        A proper proof of reserves system demonstrates two things: the total amount of customer
        liabilities (what the exchange owes) and the total assets held in reserve (what the
        exchange actually holds). If reserves exceed or equal liabilities, the exchange is
        considered solvent with respect to customer funds.
      </p>

      <h2 id="how-it-works">How Proof of Reserves Works</h2>
      <p>
        The most common implementation uses Merkle trees, a cryptographic data structure. Each
        customer&apos;s balance is included as a leaf in the tree, hashed for privacy. Users can
        verify their own balance is included without seeing anyone else&apos;s data. The root
        hash represents the total of all customer balances. The exchange then demonstrates
        control of on-chain wallet addresses holding at least that total amount.
      </p>
      <p>
        More advanced implementations include zk-SNARK proofs that verify solvency without
        revealing individual balances, real-time reserve tracking through on-chain monitoring,
        and third-party auditor verification. The technology is evolving rapidly toward more
        robust and frequent verification methods.
      </p>

      <h2 id="which-exchanges">Which Exchanges Publish PoR</h2>
      <p>
        Major exchanges with proof of reserves programs include Binance (Merkle tree + on-chain
        wallet verification), Kraken (cryptographic audit with third-party verification), OKX
        (monthly PoR reports), Bybit (Merkle tree verification), and Bitget (regular PoR
        publications). Coinbase, as a publicly traded company, provides equivalent transparency
        through SEC-mandated financial audits.
      </p>
      <p>
        Not all PoR implementations are equally rigorous. Some only show a snapshot of assets
        without proving liabilities. Others lack independent third-party verification. When
        evaluating an exchange&apos;s PoR, look for both asset and liability proofs, independent
        auditor involvement, and the ability to verify your own inclusion.
      </p>

      <h2 id="limitations">Limitations of Proof of Reserves</h2>
      <p>
        Proof of reserves has important limitations. It is a point-in-time snapshot; an exchange
        could borrow funds for the audit and return them afterward. It does not capture
        off-chain liabilities like loans, legal obligations, or operational expenses. It does
        not verify the quality of assets (some reserves may be in illiquid tokens). It does not
        prevent internal mismanagement or fraud between audit periods.
      </p>

      <h2 id="what-to-look-for">What to Look For</h2>
      <p>
        When evaluating an exchange&apos;s proof of reserves, check whether it includes both
        assets and liabilities, whether a reputable third-party auditor is involved, how
        frequently reports are published, whether you can independently verify your own balance
        inclusion, and whether the reserves cover 100% or more of liabilities across all asset
        types.
      </p>
      <p>
        Proof of reserves should be one factor in your exchange evaluation alongside regulatory
        standing, security track record, insurance coverage, and corporate transparency. No
        single metric guarantees safety.
      </p>
    </LearnPageLayout>
  );
}
