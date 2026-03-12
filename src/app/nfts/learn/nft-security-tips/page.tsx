import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `NFT Security Best Practices: Protect Your Digital Assets (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn how to protect your NFTs from scams, phishing attacks, and theft. This comprehensive guide covers wallet security, smart contract safety, and essential security practices.",
};

export default function NftSecurityTipsPage() {
  return (
    <LearnPageLayout
      title="NFT Security Best Practices"
      categoryName="NFTs"
      categorySlug="nfts"
      readTime="12 min"
      intro="The irreversible nature of blockchain transactions makes NFT security critically important. Once an NFT is stolen or a malicious transaction is signed, there is no customer support to reverse it. Scams in the NFT space are sophisticated and constantly evolving, from phishing sites that mimic legitimate marketplaces to malicious smart contracts that drain wallets. This guide covers everything you need to know to protect your digital assets."
      toc={[
        { id: "wallet-security", title: "wallet-security", level: 2 },
        { id: "wallet-security-fundamentals", title: "Wallet Security Fundamentals", level: 2 },
        { id: "common-scams", title: "common-scams", level: 2 },
        { id: "common-nft-scams-and-how-to-avoid-them", title: "Common NFT Scams and How to Avoid Them", level: 2 },
        { id: "smart-contract-safety", title: "smart-contract-safety", level: 2 },
        { id: "smart-contract-safety", title: "Smart Contract Safety", level: 2 },
        { id: "marketplace-safety", title: "marketplace-safety", level: 2 },
        { id: "marketplace-safety-practices", title: "Marketplace Safety Practices", level: 2 },
        { id: "hardware-wallets", title: "hardware-wallets", level: 2 },
        { id: "using-hardware-wallets-for-nfts", title: "Using Hardware Wallets for NFTs", level: 2 },
        { id: "incident-response", title: "incident-response", level: 2 },
        { id: "what-to-do-if-you-are-compromised", title: "What to Do If You Are Compromised", level: 2 }
      ]}
      faqs={[
        {
          question: "What is the most common way NFTs are stolen?",
          answer:
            "Phishing attacks are by far the most common method. Attackers create fake websites that mimic legitimate marketplaces or project sites, then trick users into signing malicious transactions that transfer their NFTs to the attacker. Always verify URLs and never click links from unsolicited messages.",
        },
        {
          question: "Should I use a hardware wallet for NFTs?",
          answer:
            "Yes, especially for valuable NFTs. Hardware wallets like Ledger keep your private keys offline, meaning even if your computer is compromised, your assets are safe. Use a hot wallet for daily transactions and a hardware wallet for long-term storage of valuable items.",
        },
        {
          question: "Is it safe to connect my wallet to NFT websites?",
          answer:
            "Connecting your wallet (viewing your address) is generally safe. The danger comes from signing transactions. Always read what you are approving before signing. Use tools like Pocket Universe or Wallet Guard that simulate transactions and warn you of suspicious activity.",
        },
        {
          question: "Can stolen NFTs be recovered?",
          answer:
            "In most cases, no. Blockchain transactions are irreversible. Some marketplaces like OpenSea flag stolen items, preventing their resale on that platform, but the thief can still sell on other platforms or transfer to another wallet. Prevention is far more effective than recovery.",
        },
        {
          question: "How do I verify a legitimate NFT project website?",
          answer:
            "Check the project's official Twitter or Discord for the verified website link. Cross-reference with the collection page on OpenSea or other marketplaces. Be wary of Google ads that may lead to fake sites. Bookmark legitimate sites rather than searching for them each time.",
        },
      ]}
      relatedArticles={[
        { title: "How to Buy NFTs", href: "/nfts/learn/how-to-buy-nfts", category: "NFTs" },
        { title: "NFT Storage Solutions", href: "/nfts/learn/nft-storage", category: "NFTs" },
        { title: "What Are NFTs?", href: "/nfts/learn/what-are-nfts", category: "NFTs" },
      ]}
    >
      <h2 id="wallet-security">Wallet Security Fundamentals</h2>
      <p>
        Your seed phrase (recovery phrase) is the master key to your entire wallet. Anyone who obtains
        it has complete control over all assets in that wallet. Write it down on physical paper or
        engrave it on metal, and store it in a secure location like a safe or safety deposit box. Never
        store your seed phrase digitally, in screenshots, cloud storage, password managers, or email
        drafts. These are all vulnerable to hacking.
      </p>
      <p>
        Use a unique, strong password for each wallet and exchange account. Enable two-factor
        authentication everywhere it is available, preferring authenticator apps over SMS which can be
        SIM-swapped. Consider using a dedicated device or browser profile for crypto transactions to
        minimize the risk of malicious browser extensions or clipboard hijacking malware.
      </p>

      <h2 id="common-scams">Common NFT Scams and How to Avoid Them</h2>
      <p>
        Phishing websites are the biggest threat. Scammers create pixel-perfect copies of OpenSea, Blur,
        or project mint pages. The URL is slightly different, like opensea.io.xyz instead of opensea.io.
        These sites prompt you to sign a transaction that appears legitimate but actually transfers your
        NFTs to the attacker. Always type marketplace URLs directly or use bookmarks.
      </p>
      <p>
        Discord and Twitter DMs are common attack vectors. Scammers impersonate project team members,
        marketplace support, or fellow collectors. They send links to fake mint pages, claim you won a
        prize, or offer to help with a technical issue. Legitimate teams will never DM you first asking
        you to connect your wallet or sign transactions. Disable DMs from non-friends in Discord servers.
      </p>

      <h2 id="smart-contract-safety">Smart Contract Safety</h2>
      <p>
        Before approving any transaction, read the details carefully in your wallet popup. A legitimate
        purchase should show the NFT contract address, the token ID, and the payment amount. Be
        suspicious of transactions requesting unlimited token approvals, setApprovalForAll permissions
        for unfamiliar contracts, or any interaction with contracts you do not recognize.
      </p>
      <p>
        Use transaction simulation tools like Pocket Universe, Wallet Guard, or Blowfish that preview
        what a transaction will do before you sign it. These tools flag suspicious transactions and show
        you exactly what assets will leave and enter your wallet. Revoking unnecessary smart contract
        approvals regularly using tools like Revoke.cash reduces your attack surface.
      </p>

      <h2 id="marketplace-safety">Marketplace Safety Practices</h2>
      <p>
        Only interact with verified collections on marketplaces. Look for verification badges and
        cross-reference the contract address with official project channels. Scammers frequently create
        copycat collections with similar names and artwork. The contract address is the only reliable
        identifier, not the collection name or images.
      </p>
      <p>
        Be cautious of NFTs that appear in your wallet unexpectedly. Airdrop scams send worthless
        tokens to your wallet, and when you try to interact with them (list, transfer, or sell), the
        transaction triggers a malicious contract that drains your other assets. If you receive an NFT
        you did not buy or mint, the safest approach is to ignore it entirely.
      </p>

      <h2 id="hardware-wallets">Using Hardware Wallets for NFTs</h2>
      <p>
        A hardware wallet like Ledger Nano X or Trezor stores your private keys on a secure chip that
        never exposes them to your computer or the internet. Every transaction must be physically
        confirmed on the device, preventing remote attackers from moving your assets even if your
        computer is fully compromised.
      </p>
      <p>
        The best practice is to use a burner wallet (hot wallet with minimal funds) for minting and
        daily transactions, then transfer valuable NFTs to your hardware wallet for long-term storage.
        This limits your exposure when interacting with new contracts. If the burner wallet is
        compromised, your main collection remains safe on the hardware wallet.
      </p>

      <h2 id="incident-response">What to Do If You Are Compromised</h2>
      <p>
        If you suspect your wallet is compromised, act immediately. Transfer remaining assets to a new,
        secure wallet as fast as possible. Do not use the same seed phrase or device. Revoke all smart
        contract approvals from the compromised wallet. Report the theft to the marketplace where the
        NFTs were listed so they can flag the stolen items.
      </p>
      <p>
        Document everything for potential law enforcement reporting, including transaction hashes,
        wallet addresses involved, and screenshots of the scam. While recovery is unlikely, reporting
        helps authorities track and eventually prosecute serial scammers. Learn from the incident and
        implement stronger security measures going forward, starting with a hardware wallet if you
        were not already using one.
      </p>
    </LearnPageLayout>
  );
}
