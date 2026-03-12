import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Wallet Address Formats Explained (${CURRENT_YEAR}) | degen0x`,
  description: "Understand different crypto wallet address formats including Bitcoin, Ethereum, Solana, and Cosmos. Learn how addresses work and how to avoid sending to wrong addresses.",
};

export default function WalletAddressFormatsPage() {
  return (
    <LearnPageLayout title="Crypto Wallet Address Formats Explained" categoryName="Crypto Wallets" categorySlug="wallets" readTime="7 min read"
      intro="Every blockchain uses its own address format, and understanding these formats is crucial for safely sending and receiving crypto. Sending tokens to a wrong address format can result in permanent loss of funds. From Bitcoin's multiple address types to Ethereum's hexadecimal addresses and Cosmos's bech32 format, each blockchain has distinct conventions. This guide demystifies address formats across major blockchains and teaches you how to verify addresses before sending transactions."
      toc={[
        { id: "address-basics", title: "address-basics", level: 2 },
        { id: "address-basics", title: "Address Basics", level: 2 },
        { id: "bitcoin-addresses", title: "bitcoin-addresses", level: 2 },
        { id: "bitcoin-address-types", title: "Bitcoin Address Types", level: 2 },
        { id: "evm-addresses", title: "evm-addresses", level: 2 },
        { id: "evm-chain-addresses", title: "EVM Chain Addresses", level: 2 },
        { id: "other-formats", title: "other-formats", level: 2 },
        { id: "other-blockchain-formats", title: "Other Blockchain Formats", level: 2 }
      ]}
      faqs={[{ question: "Can I send ETH to a Bitcoin address?", answer: "No. Sending ETH to a Bitcoin address (or vice versa) will result in permanent loss of funds. Different blockchains are completely separate networks, and addresses are not interchangeable. Always verify you are sending to an address on the correct blockchain. Most wallets will prevent you from entering an invalid format, but some cross-chain scenarios (like EVM chains sharing the same format) can be confusing." },
        { question: "Are Ethereum addresses the same on L2s?", answer: "Yes. Your Ethereum address works on all EVM-compatible chains including Arbitrum, Optimism, Base, Polygon, and BNB Chain. Your MetaMask address is the same on all these networks. However, you must ensure you are sending tokens on the correct network. Sending USDC on Ethereum to your address on Arbitrum requires using the Ethereum network, not the Arbitrum network, unless bridging." },
        { question: "What is an ENS name?", answer: "Ethereum Name Service (ENS) maps human-readable names like 'vitalik.eth' to Ethereum addresses. Instead of sharing a long hexadecimal address, you can share your ENS name. Wallets resolve the ENS name to the underlying address. Similar services exist on other chains: Solana Name Service (.sol), Unstoppable Domains (.crypto), and Cosmos name services. Always verify the resolved address before sending large amounts." }]}
      relatedArticles={[{ title: "What Is a Crypto Wallet?", href: "/wallets/learn/what-is-a-crypto-wallet", category: "Wallets" }, { title: "Multi-Chain Wallets", href: "/wallets/learn/multi-chain-wallets", category: "Wallets" }, { title: "Wallet Migration Guide", href: "/wallets/learn/wallet-migration-guide", category: "Wallets" }, { title: "Wallet Types Explained", href: "/wallets/learn/wallet-types-explained", category: "Wallets" }]}
    >
      <section id="address-basics">
        <h2>Address Basics</h2>
        <p>A crypto address is a string of characters derived from your public key using cryptographic hashing. It serves as your identifier on the blockchain, similar to an email address for receiving messages. Addresses include built-in checksum mechanisms that help detect typos, though the specific checksum method varies by blockchain. When you create a wallet, it generates a key pair, and your address is derived from the public portion of that pair.</p>
        <p>Addresses are safe to share publicly since they only allow others to send you funds and view your transaction history. Your private key, which allows spending, cannot be derived from your address. Always copy-paste addresses rather than typing them manually, and verify the first and last several characters after pasting. Clipboard malware that substitutes addresses is a real and common threat in the crypto space.</p>
      </section>

      <section id="bitcoin-addresses">
        <h2>Bitcoin Address Types</h2>
        <p>Bitcoin has multiple address formats that reflect its evolution. Legacy addresses start with &quot;1&quot; (P2PKH) and are the original format. P2SH addresses start with &quot;3&quot; and support multi-signature and SegWit compatibility. Native SegWit (bech32) addresses start with &quot;bc1q&quot; and offer the lowest transaction fees. Taproot addresses start with &quot;bc1p&quot; and enable advanced scripting with improved privacy. Most modern wallets default to Native SegWit for optimal fees.</p>
        <p>All Bitcoin address types are interoperable: you can send between any format. However, using newer formats (bc1q or bc1p) typically results in lower transaction fees because they produce smaller transaction sizes. When setting up a new Bitcoin wallet, choose Native SegWit (bech32) unless you have a specific reason for another format. Some older services may not support bech32 addresses, in which case P2SH addresses provide a compatible alternative.</p>
      </section>

      <section id="evm-addresses">
        <h2>EVM Chain Addresses</h2>
        <p>Ethereum and all EVM-compatible blockchains use the same address format: a 42-character hexadecimal string starting with &quot;0x&quot;, derived from the last 20 bytes of the public key&apos;s Keccak-256 hash. EIP-55 introduces mixed-case checksumming (some letters uppercase, some lowercase) to help detect errors. Your same address works on Ethereum, Arbitrum, Optimism, Base, Polygon, BNB Chain, Avalanche C-Chain, and all other EVM chains.</p>
        <p>While the address is the same across EVM chains, the tokens at that address are chain-specific. Having 1 ETH on Ethereum mainnet does not mean you have 1 ETH on Arbitrum. Each chain maintains its own state independently. This is a common source of confusion when sending tokens, especially when bridges and multi-chain protocols are involved. Always verify both the recipient address and the network before confirming a transaction.</p>
      </section>

      <section id="other-formats">
        <h2>Other Blockchain Formats</h2>
        <p>Solana uses base58-encoded addresses that are 32-44 characters long with no prefix. Cosmos ecosystem chains use bech32 addresses with chain-specific prefixes: &quot;cosmos&quot; for Cosmos Hub, &quot;osmo&quot; for Osmosis, &quot;juno&quot; for Juno. Polkadot uses SS58 encoding with different prefixes per parachain. Tron addresses start with &quot;T&quot;. Cardano (Shelley era) addresses start with &quot;addr1&quot;. Each format has its own validation rules and checksum mechanisms.</p>
        <p>When working across multiple blockchains, use a wallet that clearly displays which network you are operating on. Cross-chain address confusion is one of the most common causes of lost funds. Some blockchains share derivation paths, meaning the same seed phrase generates related addresses on different chains, but this varies by wallet implementation. Always perform a small test transaction when sending to a new address on any blockchain for the first time.</p>
      </section>
    </LearnPageLayout>
  );
}
