"use client";

import { useState, useMemo } from "react";
import SocialShare from "@/components/SocialShare";

interface ETFData {
  ticker: string;
  name: string;
  issuer: string;
  aum: string;
  aumNum: number;
  fee: string;
  feeNum: number;
  flow30d: string;
  flow30dNum: number;
  ytdReturn: string;
  ytdReturnNum: number;
  launchDate: string;
  type: "spot" | "futures" | "ethereum";
}

const ETF_DATA: ETFData[] = [
  { ticker: "IBIT", name: "iShares Bitcoin Trust", issuer: "BlackRock", aum: "$53.2B", aumNum: 53200, fee: "0.25%", feeNum: 0.25, flow30d: "+$2.1B", flow30dNum: 2100, ytdReturn: "+14.2%", ytdReturnNum: 14.2, launchDate: "Jan 2024", type: "spot" },
  { ticker: "FBTC", name: "Fidelity Wise Origin", issuer: "Fidelity", aum: "$19.8B", aumNum: 19800, fee: "0.25%", feeNum: 0.25, flow30d: "+$890M", flow30dNum: 890, ytdReturn: "+13.8%", ytdReturnNum: 13.8, launchDate: "Jan 2024", type: "spot" },
  { ticker: "GBTC", name: "Grayscale Bitcoin Trust", issuer: "Grayscale", aum: "$15.1B", aumNum: 15100, fee: "1.50%", feeNum: 1.50, flow30d: "-$340M", flow30dNum: -340, ytdReturn: "+12.1%", ytdReturnNum: 12.1, launchDate: "Jan 2024", type: "spot" },
  { ticker: "ARKB", name: "ARK 21Shares Bitcoin", issuer: "ARK/21Shares", aum: "$4.8B", aumNum: 4800, fee: "0.21%", feeNum: 0.21, flow30d: "+$220M", flow30dNum: 220, ytdReturn: "+14.0%", ytdReturnNum: 14.0, launchDate: "Jan 2024", type: "spot" },
  { ticker: "BITB", name: "Bitwise Bitcoin ETF", issuer: "Bitwise", aum: "$3.9B", aumNum: 3900, fee: "0.20%", feeNum: 0.20, flow30d: "+$180M", flow30dNum: 180, ytdReturn: "+14.1%", ytdReturnNum: 14.1, launchDate: "Jan 2024", type: "spot" },
  { ticker: "HODL", name: "VanEck Bitcoin Trust", issuer: "VanEck", aum: "$1.3B", aumNum: 1300, fee: "0.20%", feeNum: 0.20, flow30d: "+$45M", flow30dNum: 45, ytdReturn: "+13.9%", ytdReturnNum: 13.9, launchDate: "Jan 2024", type: "spot" },
  { ticker: "BRRR", name: "Valkyrie Bitcoin Fund", issuer: "Valkyrie", aum: "$0.9B", aumNum: 900, fee: "0.25%", feeNum: 0.25, flow30d: "+$22M", flow30dNum: 22, ytdReturn: "+13.6%", ytdReturnNum: 13.6, launchDate: "Jan 2024", type: "spot" },
  { ticker: "ETHA", name: "iShares Ethereum Trust", issuer: "BlackRock", aum: "$3.6B", aumNum: 3600, fee: "0.25%", feeNum: 0.25, flow30d: "+$310M", flow30dNum: 310, ytdReturn: "+8.4%", ytdReturnNum: 8.4, launchDate: "Jul 2024", type: "ethereum" },
  { ticker: "FETH", name: "Fidelity Ethereum Fund", issuer: "Fidelity", aum: "$1.1B", aumNum: 1100, fee: "0.25%", feeNum: 0.25, flow30d: "+$95M", flow30dNum: 95, ytdReturn: "+7.9%", ytdReturnNum: 7.9, launchDate: "Jul 2024", type: "ethereum" },
  { ticker: "BITO", name: "ProShares Bitcoin Strategy", issuer: "ProShares", aum: "$2.1B", aumNum: 2100, fee: "0.95%", feeNum: 0.95, flow30d: "-$55M", flow30dNum: -55, ytdReturn: "+11.3%", ytdReturnNum: 11.3, launchDate: "Oct 2021", type: "futures" },
];

type SortKey = "aumNum" | "feeNum" | "flow30dNum" | "ytdReturnNum";
type FilterType = "all" | "spot" | "ethereum" | "futures";

export default function ETFTrackerClient() {
  const [sortBy, setSortBy] = useState<SortKey>("aumNum");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [filterType, setFilterType] = useState<FilterType>("all");

  const filtered = useMemo(() => {
    let data = filterType === "all" ? ETF_DATA : ETF_DATA.filter((e) => e.type === filterType);
    data = [...data].sort((a, b) => sortDir === "desc" ? b[sortBy] - a[sortBy] : a[sortBy] - b[sortBy]);
    return data;
  }, [sortBy, sortDir, filterType]);

  const totalAUM = ETF_DATA.reduce((s, e) => s + e.aumNum, 0);
  const totalFlows = ETF_DATA.reduce((s, e) => s + e.flow30dNum, 0);
  const spotCount = ETF_DATA.filter((e) => e.type === "spot").length;

  const handleSort = (key: SortKey) => {
    if (sortBy === key) setSortDir((d) => (d === "desc" ? "asc" : "desc"));
    else { setSortBy(key); setSortDir("desc"); }
  };

  const SortIcon = ({ active, dir }: { active: boolean; dir: string }) => (
    <span className={`ml-1 text-[10px] ${active ? "text-[var(--color-primary)]" : "text-[var(--color-text-secondary)]"}`}>
      {active ? (dir === "desc" ? "▼" : "▲") : "⇅"}
    </span>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          <span className="gradient-text">Bitcoin & Crypto ETF Tracker</span>
        </h1>
        <p className="text-[var(--color-text-secondary)] text-lg max-w-3xl">
          Track all Bitcoin and Ethereum ETFs in one place. Compare inflows, AUM, fees, and performance across every major crypto ETF.
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="glass rounded-xl p-5">
          <div className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-1">Total ETF AUM</div>
          <div className="text-2xl font-bold gradient-text">${(totalAUM / 1000).toFixed(1)}B</div>
        </div>
        <div className="glass rounded-xl p-5">
          <div className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-1">30-Day Net Flows</div>
          <div className={`text-2xl font-bold ${totalFlows >= 0 ? "text-green-400" : "text-red-400"}`}>
            {totalFlows >= 0 ? "+" : ""}${(totalFlows / 1000).toFixed(1)}B
          </div>
        </div>
        <div className="glass rounded-xl p-5">
          <div className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-1">Spot BTC ETFs</div>
          <div className="text-2xl font-bold text-[var(--color-text)]">{spotCount}</div>
        </div>
        <div className="glass rounded-xl p-5">
          <div className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-1">Lowest Fee</div>
          <div className="text-2xl font-bold text-blue-400">0.20%</div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {(["all", "spot", "ethereum", "futures"] as FilterType[]).map((t) => (
          <button key={t} onClick={() => setFilterType(t)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              filterType === t
                ? "bg-[var(--color-primary)] text-white"
                : "glass text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
            }`}>
            {t === "all" ? "All ETFs" : t === "spot" ? "Spot BTC" : t === "ethereum" ? "Ethereum" : "Futures"}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="glass rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--glass-border)]">
                <th className="text-left px-4 py-3 text-xs text-[var(--color-text-secondary)] uppercase tracking-wider font-semibold">ETF</th>
                <th className="text-left px-4 py-3 text-xs text-[var(--color-text-secondary)] uppercase tracking-wider font-semibold">Issuer</th>
                <th className="text-right px-4 py-3 text-xs uppercase tracking-wider font-semibold cursor-pointer select-none" onClick={() => handleSort("aumNum")}>
                  <span className="text-[var(--color-text-secondary)]">AUM</span><SortIcon active={sortBy === "aumNum"} dir={sortDir}/>
                </th>
                <th className="text-right px-4 py-3 text-xs uppercase tracking-wider font-semibold cursor-pointer select-none" onClick={() => handleSort("feeNum")}>
                  <span className="text-[var(--color-text-secondary)]">Fee</span><SortIcon active={sortBy === "feeNum"} dir={sortDir}/>
                </th>
                <th className="text-right px-4 py-3 text-xs uppercase tracking-wider font-semibold cursor-pointer select-none" onClick={() => handleSort("flow30dNum")}>
                  <span className="text-[var(--color-text-secondary)]">30D Flow</span><SortIcon active={sortBy === "flow30dNum"} dir={sortDir}/>
                </th>
                <th className="text-right px-4 py-3 text-xs uppercase tracking-wider font-semibold cursor-pointer select-none" onClick={() => handleSort("ytdReturnNum")}>
                  <span className="text-[var(--color-text-secondary)]">YTD Return</span><SortIcon active={sortBy === "ytdReturnNum"} dir={sortDir}/>
                </th>
                <th className="text-right px-4 py-3 text-xs text-[var(--color-text-secondary)] uppercase tracking-wider font-semibold">Type</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((etf) => (
                <tr key={etf.ticker} className="border-b border-[var(--glass-border)] hover:bg-[var(--glass-bg)] transition-colors">
                  <td className="px-4 py-3">
                    <div className="font-bold text-[var(--color-text)]">{etf.ticker}</div>
                    <div className="text-xs text-[var(--color-text-secondary)]">{etf.name}</div>
                  </td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">{etf.issuer}</td>
                  <td className="px-4 py-3 text-right font-mono font-medium text-[var(--color-text)]">{etf.aum}</td>
                  <td className="px-4 py-3 text-right font-mono text-[var(--color-text-secondary)]">{etf.fee}</td>
                  <td className={`px-4 py-3 text-right font-mono font-medium ${etf.flow30dNum >= 0 ? "text-green-400" : "text-red-400"}`}>
                    {etf.flow30d}
                  </td>
                  <td className={`px-4 py-3 text-right font-mono font-medium ${etf.ytdReturnNum >= 0 ? "text-green-400" : "text-red-400"}`}>
                    {etf.ytdReturn}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      etf.type === "spot" ? "bg-green-500/10 text-green-400" :
                      etf.type === "ethereum" ? "bg-blue-500/10 text-blue-400" :
                      "bg-yellow-500/10 text-yellow-400"
                    }`}>
                      {etf.type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Info section */}
      <div className="mt-10 glass rounded-xl p-6">
        <h2 className="text-xl font-bold mb-3 text-[var(--color-text)]">Understanding Crypto ETFs</h2>
        <div className="text-[var(--color-text-secondary)] space-y-3 text-sm leading-relaxed">
          <p>Bitcoin and Ethereum spot ETFs allow investors to gain exposure to cryptocurrency through traditional brokerage accounts without directly holding the underlying assets. Spot ETFs hold the actual cryptocurrency, while futures-based ETFs track derivative contracts.</p>
          <p>Key metrics to evaluate include the expense ratio (annual fee), assets under management (AUM) which indicates fund size and liquidity, and net flows which show whether money is entering or leaving the fund. Larger AUM generally means tighter bid-ask spreads and better execution prices for investors.</p>
          <p>Data shown is for educational purposes only. Past performance does not guarantee future results. Always do your own research before making investment decisions.</p>
        </div>
      </div>

      <div className="mt-6">
        <SocialShare title="Bitcoin & Crypto ETF Tracker — Compare ETF Flows, AUM & Fees" />
      </div>
    </div>
  );
}
