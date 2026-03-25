"use client";

import { useState, useEffect, useMemo } from "react";

// ── Constants ────────────────────────────────────────────────────────────────

const BTC_MAX_SUPPLY = 21_000_000;
const GENESIS_DATE = new Date("2009-01-03T18:15:05Z");
const BLOCK_TIME_SECONDS = 600; // 10 minutes average

// Halving schedule: { block height → reward in BTC }
const HALVINGS: { height: number; reward: number; date: Date }[] = [
  { height: 0,       reward: 50,       date: new Date("2009-01-03T00:00:00Z") },
  { height: 210_000, reward: 25,       date: new Date("2012-11-28T00:00:00Z") },
  { height: 420_000, reward: 12.5,     date: new Date("2016-07-09T00:00:00Z") },
  { height: 630_000, reward: 6.25,     date: new Date("2020-05-11T00:00:00Z") },
  { height: 840_000, reward: 3.125,    date: new Date("2024-04-20T00:00:00Z") },
  { height: 1_050_000, reward: 1.5625, date: new Date("2028-04-01T00:00:00Z") }, // estimated
];

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Estimate current block height based on elapsed time since genesis */
function estimateBlockHeight(): number {
  const secondsElapsed = (Date.now() - GENESIS_DATE.getTime()) / 1000;
  return Math.floor(secondsElapsed / BLOCK_TIME_SECONDS);
}

/** Calculate total BTC issued up to a given block height */
function btcMinedAtHeight(height: number): number {
  let totalMined = 0;
  for (let i = 0; i < HALVINGS.length; i++) {
    const start = HALVINGS[i].height;
    const end = i + 1 < HALVINGS.length ? HALVINGS[i + 1].height : Infinity;
    const reward = HALVINGS[i].reward;
    if (height <= start) break;
    const blocksInEra = Math.min(height - start, end - start);
    totalMined += blocksInEra * reward;
  }
  return Math.min(totalMined, BTC_MAX_SUPPLY);
}

/** Get current halving era info */
function getCurrentEra(height: number) {
  for (let i = HALVINGS.length - 1; i >= 0; i--) {
    if (height >= HALVINGS[i].height) {
      const nextHalvingHeight =
        i + 1 < HALVINGS.length ? HALVINGS[i + 1].height : HALVINGS[i].height + 210_000;
      const blocksRemaining = nextHalvingHeight - height;
      const daysRemaining = Math.floor((blocksRemaining * BLOCK_TIME_SECONDS) / 86_400);
      const nextHalvingDate = new Date(
        Date.now() + blocksRemaining * BLOCK_TIME_SECONDS * 1_000
      );
      return {
        era: i + 1,
        reward: HALVINGS[i].reward,
        nextReward: i + 1 < HALVINGS.length ? HALVINGS[i + 1].reward : HALVINGS[i].reward / 2,
        nextHalvingHeight,
        blocksRemaining,
        daysRemaining,
        nextHalvingDate,
      };
    }
  }
  return null;
}

function fmtBTC(n: number): string {
  return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

// ── Component ────────────────────────────────────────────────────────────────

export default function BitcoinSupplyTracker() {
  const [blockHeight, setBlockHeight] = useState(0);
  const [tick, setTick] = useState(0);

  // Update block height estimate every 30 seconds
  useEffect(() => {
    setBlockHeight(estimateBlockHeight());
    const interval = setInterval(() => {
      setBlockHeight(estimateBlockHeight());
      setTick((t) => t + 1);
    }, 30_000);
    return () => clearInterval(interval);
  }, []);

  const stats = useMemo(() => {
    if (blockHeight === 0) return null;
    const mined = btcMinedAtHeight(blockHeight);
    const remaining = BTC_MAX_SUPPLY - mined;
    const pctMined = (mined / BTC_MAX_SUPPLY) * 100;
    const era = getCurrentEra(blockHeight);
    return { mined, remaining, pctMined, era, blockHeight };
  }, [blockHeight]);

  if (!stats) {
    return (
      <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 animate-pulse">
        <div className="h-4 bg-[#30363d] rounded w-1/3 mb-3" />
        <div className="h-8 bg-[#30363d] rounded w-2/3" />
      </div>
    );
  }

  const { mined, remaining, pctMined, era } = stats;

  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 my-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-[#e6edf3] font-bold text-lg">₿ Bitcoin Supply Tracker</h3>
          <p className="text-[#8b949e] text-xs mt-0.5">
            Live estimate · Block ~{stats.blockHeight.toLocaleString()}
          </p>
        </div>
        <span className="flex items-center gap-1.5 text-xs text-[#3fb950] font-semibold">
          <span className="inline-block w-2 h-2 rounded-full bg-[#3fb950] animate-pulse" />
          LIVE
        </span>
      </div>

      {/* Supply Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-[#8b949e] mb-2">
          <span>0</span>
          <span className="text-[#ffa657] font-semibold">{pctMined.toFixed(3)}% mined</span>
          <span>21,000,000</span>
        </div>
        <div className="h-4 bg-[#0d1117] rounded-full overflow-hidden border border-[#30363d]">
          <div
            className="h-full rounded-full transition-all duration-1000"
            style={{
              width: `${pctMined}%`,
              background: "linear-gradient(90deg, #f9826c, #ffa657)",
            }}
          />
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
        <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-3 text-center">
          <p className="text-[#8b949e] text-xs mb-1">Mined</p>
          <p className="text-[#ffa657] font-bold text-base">{fmtBTC(mined)}</p>
          <p className="text-[#8b949e] text-xs">BTC</p>
        </div>
        <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-3 text-center">
          <p className="text-[#8b949e] text-xs mb-1">Remaining</p>
          <p className="text-[#58a6ff] font-bold text-base">{fmtBTC(remaining)}</p>
          <p className="text-[#8b949e] text-xs">BTC</p>
        </div>
        <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-3 text-center">
          <p className="text-[#8b949e] text-xs mb-1">Block Reward</p>
          <p className="text-[#3fb950] font-bold text-base">{era?.reward}</p>
          <p className="text-[#8b949e] text-xs">BTC / block</p>
        </div>
        <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-3 text-center">
          <p className="text-[#8b949e] text-xs mb-1">Next Halving</p>
          <p className="text-[#e6edf3] font-bold text-base">
            {era?.daysRemaining != null ? (
              era.daysRemaining > 365
                ? `~${Math.round(era.daysRemaining / 365)}y`
                : `${era.daysRemaining}d`
            ) : "—"}
          </p>
          <p className="text-[#8b949e] text-xs">
            {era?.nextHalvingDate
              ? era.nextHalvingDate.toLocaleDateString("en-US", { month: "short", year: "numeric" })
              : ""}
          </p>
        </div>
      </div>

      {/* Halving Info Strip */}
      {era && (
        <div className="bg-[#0d1117] border border-[#ffa657]/20 rounded-lg px-4 py-3 flex flex-wrap gap-4 text-sm">
          <div>
            <span className="text-[#8b949e]">Era: </span>
            <span className="text-[#e6edf3] font-semibold">Halving #{era.era}</span>
          </div>
          <div>
            <span className="text-[#8b949e]">Blocks to next halving: </span>
            <span className="text-[#ffa657] font-semibold">
              {era.blocksRemaining.toLocaleString()}
            </span>
          </div>
          <div>
            <span className="text-[#8b949e]">Reward after halving: </span>
            <span className="text-[#79c0ff] font-semibold">{era.nextReward} BTC</span>
          </div>
        </div>
      )}

      <p className="text-[#8b949e] text-xs mt-4 text-center">
        Supply estimated from block height calculation · updates every 30s · max supply: 21,000,000 BTC
      </p>
    </div>
  );
}
