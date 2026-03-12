import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { Product, FAQ } from "@/lib/types";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Crypto Wallet Protection ${CURRENT_YEAR} - Insurance for Wallet Security`,
  description:
    "Compare the best crypto wallet protection insurance. Coverage against wallet hacks, phishing attacks, and private key compromise from leading providers.",
};

const products: Product[] = [
  {
    name: "Nexus Mutual",
    slug: "nexus-mutual",
    rating: 4.5,
    description:
      "Nexus Mutual offers custody cover that extends to self-custody wallets in specific scenarios. Their coverage protects against losses from wallet software vulnerabilities and certain types of smart contract wallet exploits, though standard hot wallet compromises are generally excluded.",
    pros: ["Coverage for smart contract wallet exploits", "Deep capital pool", "Established claim process"],
    cons: ["Limited self-custody wallet coverage", "Does not cover user error or phishing", "KYC required"],
    fees: "3-8% annually",
    bestFor: "Smart contract wallet users",
    affiliateUrl: "https://degen0x.com/go/nexus-mutual",
    category: "insurance",
    featured: true,
  },
  {
    name: "Coincover",
    slug: "coincover",
    rating: 4.3,
    description:
      "Coincover is a centralized insurance provider specializing in crypto wallet protection. They offer both B2C and B2B solutions, providing recovery services for lost keys and insurance against theft for supported wallet providers.",
    pros: ["Key recovery services included", "Partners with major wallet providers", "Traditional insurance backing"],
    cons: ["Centralized provider", "Only works with partner wallets", "Premium pricing"],
    fees: "Varies by provider",
    bestFor: "Users wanting key recovery plus insurance",
    affiliateUrl: "https://degen0x.com/go/coincover",
    category: "insurance",
  },
  {
    name: "InsurAce",
    slug: "insurace",
    rating: 4.0,
    description:
      "InsurAce provides wallet cover that protects against losses from smart contract wallet vulnerabilities and certain custodial risks. Their multi-chain approach allows coverage to be purchased for wallets on various blockchain networks.",
    pros: ["No KYC for purchasing cover", "Multi-chain wallet coverage", "Bundle with DeFi coverage"],
    cons: ["Limited wallet-specific coverage options", "Newer in wallet protection space", "Smaller capital pool"],
    fees: "2-6% annually",
    bestFor: "Multi-chain wallet protection",
    affiliateUrl: "https://degen0x.com/go/insurace",
    category: "insurance",
  },
];

const faqs: FAQ[] = [
  {
    question: "Does wallet insurance cover lost seed phrases?",
    answer: "Most crypto insurance does not cover losses due to lost seed phrases, as this is considered user error. Some providers like Coincover offer key recovery services alongside insurance, but this typically only works with supported wallets that implement their recovery mechanism. Prevention through proper seed phrase backup remains the best protection against key loss.",
  },
  {
    question: "Am I covered if my wallet is compromised through phishing?",
    answer: "Generally, no. Wallet insurance typically does not cover losses from phishing attacks or social engineering, as these are considered user-side security failures rather than wallet software vulnerabilities. Insurance covers bugs in the wallet software itself or smart contract wallet exploits.",
  },
  {
    question: "What types of wallet vulnerabilities are covered?",
    answer: "Coverage typically includes bugs in smart contract wallets (like multisig wallets), vulnerabilities in wallet software that allow unauthorized access, and in some cases, supply chain attacks on hardware wallet firmware. Standard private key compromises from malware on user devices are typically excluded.",
  },
  {
    question: "Is hardware wallet insurance available?",
    answer: "Direct insurance for hardware wallet vulnerabilities is limited. Some providers cover smart contract interactions initiated through hardware wallets, but insurance specifically for hardware device failures or firmware exploits is rare. Manufacturers like Ledger have introduced their own recovery services as an alternative.",
  },
];

export default function WalletProtectionPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Insurance", href: "/insurance" },
        { label: "Best", href: "/insurance/best" },
        { label: "Wallet Protection", href: "/insurance/best/wallet-protection" },
      ]} />
      <AffiliateDisclosure />
      <div className="max-w-4xl mb-12">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Best Crypto Wallet Protection of {CURRENT_MONTH} {CURRENT_YEAR}</h1>
        <p className="text-xl text-[var(--color-text-secondary)] mb-6">
          Self-custody means full control over your crypto, but it also means full responsibility for security. Wallet protection insurance provides a safety net against wallet software vulnerabilities and certain types of compromise.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Crypto wallet protection is one of the most nuanced areas of crypto insurance. Unlike exchange cover or protocol cover, wallet protection deals with the intersection of software security, user behavior, and key management. Most coverage focuses on vulnerabilities in the wallet software itself rather than user-side security failures like phishing or lost keys. Smart contract wallets like multisigs and account abstraction wallets are generally better covered than standard EOA wallets.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          We reviewed wallet protection options based on the scope of coverage, supported wallet types, claim conditions, and whether additional security services like key recovery are included. Here are the best wallet protection solutions for {CURRENT_YEAR}.
        </p>
      </div>
      <div className="space-y-6 mb-12">
        {products.map((product, index) => (
          <ProductCard key={product.slug} product={product} rank={index + 1} categorySlug="insurance" />
        ))}
      </div>
      <section className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Security Best Practices Beyond Insurance</h2>
        <div className="space-y-3 text-[var(--color-text-secondary)]">
          <p>While insurance provides financial protection, prevention is always the first line of defense. Here are essential wallet security practices:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-[var(--color-text)]">Use hardware wallets</strong> for large holdings to keep private keys offline and away from internet-connected devices.</li>
            <li><strong className="text-[var(--color-text)]">Store seed phrases securely</strong> using metal backups in multiple physical locations. Never store them digitally.</li>
            <li><strong className="text-[var(--color-text)]">Use multisig wallets</strong> for significant holdings, requiring multiple keys to authorize transactions.</li>
            <li><strong className="text-[var(--color-text)]">Verify transaction details</strong> on your hardware wallet screen before signing. Never blindly sign transactions.</li>
            <li><strong className="text-[var(--color-text)]">Keep wallet software updated</strong> to patch known vulnerabilities, but verify updates through official channels.</li>
          </ul>
        </div>
      </section>
      <FAQSection faqs={faqs} />
    </div>
  );
}
