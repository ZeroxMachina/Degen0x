import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Tax Reporting Requirements ${CURRENT_YEAR} - What the IRS Requires`,
  description: `Understand crypto tax reporting requirements for ${CURRENT_YEAR}. IRS rules, 1099 forms, FBAR obligations, and what you must disclose on your tax return.`,
  alternates: { canonical: "/taxes/learn/reporting-requirements" },
};

const toc = [
  { id: "irs-requirements", title: "IRS Reporting Rules", level: 2 },
  { id: "1099-forms", title: "1099 Forms", level: 2 },
  { id: "digital-asset-question", title: "Digital Asset Question", level: 2 },
  { id: "fbar-fincen", title: "FBAR & Foreign Reporting", level: 2 },
  { id: "enforcement", title: "IRS Enforcement", level: 2 },
];

const faqs = [
  { question: "Do I have to report crypto on my taxes?", answer: "Yes. If you sold, traded, spent, or received cryptocurrency during the tax year, you must report it. Even if you only purchased crypto, you must answer the digital asset question on Form 1040. Failure to report crypto activity can result in penalties, interest, and potential criminal prosecution." },
  { question: "What is the crypto question on Form 1040?", answer: "Since 2019, Form 1040 has included a question about digital assets. The current version asks whether you received, sold, sent, exchanged, or otherwise acquired any digital assets. You must answer 'Yes' or 'No.' Answering 'No' when you should answer 'Yes' is considered false reporting." },
  { question: "Do I need to file an FBAR for crypto on foreign exchanges?", answer: "This is an evolving area. FinCEN has indicated that crypto held on foreign exchanges may need to be reported on FBAR (FinCEN Form 114) if the aggregate value exceeds $10,000 at any point during the year. The rules are being finalized. To be safe, many advisors recommend reporting foreign-held crypto on FBAR." },
];

export default function ReportingRequirementsPage() {
  return (
    <LearnPageLayout
      title="Crypto Tax Reporting Requirements"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="10 min"
      intro="The IRS has steadily expanded cryptocurrency reporting requirements over recent years. Understanding what you must report, which forms to file, and how the IRS tracks crypto activity helps you stay compliant and avoid penalties."
      toc={toc}
      faqs={faqs}
      relatedArticles={[
        { title: "How to File Crypto Taxes", href: "/taxes/learn/how-to-file", category: "Taxes" },
        { title: "IRS Form 8949 Guide", href: "/taxes/learn/irs-form-8949", category: "Taxes" },
        { title: "Complete Crypto Tax Guide", href: "/taxes/learn/crypto-tax-guide", category: "Taxes" },
      ]}
    >
      <section id="irs-requirements" className="mb-10">
        <h2>IRS Reporting Rules</h2>
        <p>
          The IRS requires taxpayers to report all cryptocurrency transactions on their tax
          returns. Capital gains and losses from selling, trading, or spending crypto must be
          reported on Form 8949 and Schedule D. Income from mining, staking, airdrops, and
          payments must be reported as ordinary income on the appropriate schedule.
        </p>
        <p>
          Even if you do not receive any tax forms from an exchange, you are still legally
          required to report all crypto activity. The obligation to report is on the taxpayer
          regardless of whether a third party has reported the information to the IRS. Ignorance
          of the reporting requirements is not considered a valid defense.
        </p>
      </section>

      <section id="1099-forms" className="mb-10">
        <h2>1099 Forms for Crypto</h2>
        <p>
          Exchanges may issue various 1099 forms. Form 1099-MISC reports miscellaneous income
          (like staking rewards or referral bonuses) over $600. Form 1099-B reports proceeds
          from broker transactions. Starting with the 2025 tax year, the new Form 1099-DA will
          specifically report digital asset transactions including cost basis information.
        </p>
        <p>
          Receiving a 1099 means the IRS also received a copy. Not reporting income shown on a
          1099 will trigger an IRS notice. Conversely, not receiving a 1099 does not mean you
          are exempt from reporting. Many exchanges have not historically issued 1099s, but the
          new broker reporting rules will expand coverage significantly starting in 2025.
        </p>
      </section>

      <section id="digital-asset-question" className="mb-10">
        <h2>The Digital Asset Question</h2>
        <p>
          Form 1040 prominently asks: "At any time during the tax year, did you: (a) receive
          (as a reward, award, or payment for property or services); or (b) sell, exchange, gift,
          or otherwise dispose of a digital asset?" You must answer Yes if any of these apply.
          You should answer No only if your only activity was holding crypto you already owned.
        </p>
        <p>
          Answering "Yes" does not by itself create a tax liability but signals to the IRS
          that you should have corresponding crypto reporting elsewhere in your return. Answering
          "No" when you should answer "Yes" is considered a false statement on a tax return and
          can carry penalties. The question casts a wide net intentionally.
        </p>
      </section>

      <section id="fbar-fincen" className="mb-10">
        <h2>FBAR and Foreign Account Reporting</h2>
        <p>
          If you hold cryptocurrency on exchanges based outside the United States, you may need
          to report those accounts on FinCEN Form 114 (FBAR) if the aggregate value of all
          foreign financial accounts exceeds $10,000 at any time during the year. FinCEN has
          announced that it intends to include crypto assets in FBAR reporting requirements.
        </p>
        <p>
          Additionally, Form 8938 (FATCA) may require reporting of foreign-held crypto for
          taxpayers meeting higher thresholds ($50,000+ at year-end or $75,000+ during the
          year for domestic filers). Self-custody crypto in hardware wallets is generally not
          considered a foreign account. The rules in this area are still being finalized, so
          check current IRS and FinCEN guidance or consult a tax professional.
        </p>
      </section>

      <section id="enforcement" className="mb-10">
        <h2>IRS Enforcement</h2>
        <p>
          The IRS has dramatically increased crypto enforcement. It has sent letters to over
          10,000 taxpayers identified as having crypto accounts but not reporting activity. It
          uses blockchain analytics firms like Chainalysis to trace transactions. John Doe
          summons have been issued to major exchanges requiring them to disclose customer data.
        </p>
        <p>
          Penalties for crypto tax non-compliance include accuracy-related penalties (20% of
          underpayment), failure-to-file penalties (5% per month up to 25%), civil fraud penalties
          (75% of underpayment), and in extreme cases, criminal prosecution for tax evasion. The
          statute of limitations is generally three years but extends to six years for substantial
          understatement and has no limit for fraud.
        </p>
      </section>
    </LearnPageLayout>
  );
}
