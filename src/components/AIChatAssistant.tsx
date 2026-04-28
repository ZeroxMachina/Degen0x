"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const QUICK_PROMPTS = [
  "What's the best exchange for beginners?",
  "How do I stake Ethereum?",
  "Explain DeFi yield farming",
  "What are the safest hardware wallets?",
  "How do crypto taxes work?",
  "What is a memecoin?",
];

const KNOWLEDGE_BASE: Record<string, string> = {
  exchange: `For beginners, we recommend starting with well-established exchanges like Coinbase or Kraken for their user-friendly interfaces and strong security. For more advanced traders, Binance offers lower fees and more trading pairs. Check our full comparison at /exchanges/best for detailed reviews.`,
  stake: `Ethereum staking lets you earn ~3-5% APY by locking ETH to help secure the network. You can stake directly (32 ETH minimum), use liquid staking protocols like Lido (stETH) or Rocket Pool (rETH) with no minimum, or stake through exchanges. Visit our staking guide at /investing/best/staking for step-by-step instructions.`,
  defi: `DeFi yield farming involves providing liquidity to decentralized protocols in exchange for rewards. Common strategies include: lending on Aave/Compound (lower risk, 2-8% APY), providing LP on Uniswap/Curve (medium risk, 5-20%+ APY), or leveraged farming (high risk, variable). Always check our DeFi yields page at /defi-yields for current rates.`,
  wallet: `The safest options are hardware wallets that store keys offline. Top picks: Ledger Nano X (best overall), Trezor Model T (open-source), and BitBox02 (Swiss-made). For hot wallets, MetaMask (browser) and Trust Wallet (mobile) are popular. See our full wallet comparison at /wallets/best/hardware.`,
  tax: `In the US, crypto is taxed as property. You owe capital gains tax when you sell, trade, or spend crypto for profit. Short-term gains (<1 year) are taxed as income; long-term gains (>1 year) get lower rates (0-20%). Mining, staking rewards, and airdrops are taxed as income when received. Use our tax optimizer tool at /tools/tax-optimizer for help.`,
  memecoin: `Memecoins are cryptocurrencies inspired by internet memes or jokes (e.g., DOGE, SHIB, PEPE). They're highly speculative with extreme volatility — some 100x, most go to zero. If you trade them, only risk what you can afford to lose, check liquidity and contract audits, and watch for rug pulls. Read our memecoin strategy guide at /learn/memecoin-trading-strategy.`,
  bitcoin: `Bitcoin (BTC) is the first and largest cryptocurrency, created in 2009 by Satoshi Nakamoto. It has a fixed supply of 21 million coins, making it deflationary. Bitcoin is often called "digital gold" and is used as a store of value. The latest halving reduced mining rewards, potentially driving future price appreciation.`,
  nft: `NFTs (Non-Fungible Tokens) are unique digital assets on a blockchain. They can represent art, collectibles, music, in-game items, and more. Popular marketplaces include OpenSea, Blur, and Magic Eden. Check our NFT analytics page at /nft-analytics for collection data, floor prices, and rarity scoring.`,
  gas: `Gas fees are the cost of executing transactions on a blockchain. Ethereum gas varies by network congestion — check our gas tracker at /gas-tracker for real-time prices. To save on gas: use Layer 2s (Arbitrum, Optimism, Base), time your transactions during low-activity periods, or use gas-optimized protocols.`,
  layer2: `Layer 2 solutions process transactions off the main chain to reduce fees and increase speed. Major L2s include Arbitrum (largest TVL), Optimism (OP Stack), Base (Coinbase), and zkSync (zero-knowledge proofs). They inherit Ethereum's security while offering 10-100x cheaper transactions.`,
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();

  if (lower.includes("exchange") || lower.includes("buy crypto") || lower.includes("beginner"))
    return KNOWLEDGE_BASE.exchange;
  if (lower.includes("stak"))
    return KNOWLEDGE_BASE.stake;
  if (lower.includes("defi") || lower.includes("yield") || lower.includes("farm"))
    return KNOWLEDGE_BASE.defi;
  if (lower.includes("wallet") || lower.includes("hardware") || lower.includes("ledger"))
    return KNOWLEDGE_BASE.wallet;
  if (lower.includes("tax"))
    return KNOWLEDGE_BASE.tax;
  if (lower.includes("meme") || lower.includes("doge") || lower.includes("pepe"))
    return KNOWLEDGE_BASE.memecoin;
  if (lower.includes("bitcoin") || lower.includes("btc"))
    return KNOWLEDGE_BASE.bitcoin;
  if (lower.includes("nft") || lower.includes("collectib"))
    return KNOWLEDGE_BASE.nft;
  if (lower.includes("gas") || lower.includes("fee"))
    return KNOWLEDGE_BASE.gas;
  if (lower.includes("layer 2") || lower.includes("l2") || lower.includes("arbitrum") || lower.includes("optimism"))
    return KNOWLEDGE_BASE.layer2;

  return `Great question! While I'm a basic assistant, degen0x has comprehensive guides on that topic. Try browsing our Learn section at /learn or use the search bar to find specific articles. You can also check our interactive tools at /tools for calculators and analyzers.`;
}

export default function AIChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hey degen! 👋 I'm the degen0x assistant. Ask me anything about crypto — exchanges, wallets, DeFi, taxes, or trading strategies. I'll point you to the best resources!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const handleSend = (text?: string) => {
    const msg = text || input.trim();
    if (!msg) return;

    const userMsg: Message = { role: "user", content: msg, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getResponse(msg);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: response, timestamp: new Date() },
      ]);
      setIsTyping(false);
    }, 600 + Math.random() * 800);
  };

  const msgCount = messages.filter((m) => m.role === "user").length;

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{
          background: "linear-gradient(135deg, #6366f1, #06b6d4)",
          border: "2px solid rgba(255,255,255,0.1)",
        }}
        aria-label="Toggle AI assistant"
      >
        {isOpen ? (
          <svg width="22" height="22" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" /></svg>
        ) : (
          <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
        )}
        {msgCount === 0 && !isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          style={{
            background: "#161b22",
            border: "1px solid #30363d",
            height: "520px",
            maxHeight: "calc(100vh - 140px)",
          }}
        >
          {/* Header */}
          <div
            className="p-4 flex items-center gap-3"
            style={{
              background: "linear-gradient(135deg, #6366f1, #06b6d4)",
            }}
          >
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-lg">🤖</div>
            <div>
              <div className="text-white font-bold text-sm">degen0x Assistant</div>
              <div className="text-white/70 text-xs">Your crypto guide • Always online</div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ scrollbarWidth: "thin" }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className="max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed"
                  style={{
                    background: msg.role === "user" ? "#6366f1" : "#1c2330",
                    color: msg.role === "user" ? "white" : "#e6edf3",
                    borderBottomRightRadius: msg.role === "user" ? "4px" : "16px",
                    borderBottomLeftRadius: msg.role === "assistant" ? "4px" : "16px",
                    border: msg.role === "assistant" ? "1px solid #30363d" : "none",
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="rounded-2xl px-4 py-3 text-sm" style={{ background: "#1c2330", border: "1px solid #30363d" }}>
                  <span className="inline-flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#8b949e] animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-[#8b949e] animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-[#8b949e] animate-bounce" style={{ animationDelay: "300ms" }} />
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          {messages.length <= 2 && (
            <div className="px-4 pb-2 flex flex-wrap gap-1.5">
              {QUICK_PROMPTS.slice(0, 3).map((p) => (
                <button
                  key={p}
                  onClick={() => handleSend(p)}
                  className="text-xs px-3 py-1.5 rounded-full transition-colors"
                  style={{ background: "#6366f115", color: "#818cf8", border: "1px solid #6366f130" }}
                >
                  {p}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t" style={{ borderColor: "#30363d" }}>
            <div className="flex gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about crypto..."
                className="flex-1 rounded-xl px-4 py-2.5 text-sm outline-none"
                style={{
                  background: "#0d1117",
                  color: "#e6edf3",
                  border: "1px solid #30363d",
                }}
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim()}
                className="px-4 rounded-xl text-white font-semibold text-sm transition-opacity disabled:opacity-40"
                style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)" }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
