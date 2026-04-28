'use client';

"use client";

import { useState, useMemo } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { ToolStructuredData } from "@/components/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedContent from '@/components/RelatedContent';

import SoftwareApplicationSchema from "@/components/SoftwareApplicationSchema";

interface LendingPosition {
  id: string;
  protocol: "Aave" | "Compound" | "Curve";
  supplied: { asset: string; amount: number; value: number };
  borrowed: { asset: string; amount: number; value: number }[];
  healthFactor: number;
  apy: number;
  chain: "Ethereum" | "Arbitrum" | "Optimism" | "Base" | "Polygon";
}

interface LPPosition {
  id: string;
  protocol: "Uniswap" | "Curve" | "Aave";
  pool: string;
  tokens: { symbol: string; amount: number }[];
  value: number;
  apy: number;
  impermanentLossPercent: number;
  chain: "Ethereum" | "Arbitrum" | "Optimism" | "Base" | "Polygon";
}

interface StakingPosition {
  id: string;
  protocol: "Lido" | "Yearn" | "Maker" | "Aave";
  asset: string;
  amount: number;
  value: number;
  apy: number;
  unlockDate: string;
  chain: "Ethereum" | "Arbitrum" | "Optimism" | "Base" | "Polygon";
}

type Position = LendingPosition | LPPosition | StakingPosition;

const PROTOCOL_COLORS: Record<string, string> = {
  Aave: "#B6509E",
  Compound: "#00D395",
  Curve: "#1E90FF",
  Uniswap: "#FF007A",
  Lido: "#00A3FF",
  Yearn: "#0066FF",
  Maker: "#1AAB9B",
};

const CHAIN_COLORS: Record<string, string> = {
  Ethereum: "#627EEA",
  Arbitrum: "#28A0F0",
  Optimism: "#FF0420",
  Base: "#0052FF",
  Polygon: "#8247E5",
};

function getHealthFactorColor(hf: number): string {
  if (hf >= 2) return "#3fb950"; // green - safe
  if (hf >= 1.5) return "#d29922"; // yellow - warning
  return "#f85149"; // red - danger
}

function isLendingPosition(position: Position): position is LendingPosition {
  return "healthFactor" in position;
}

function isLPPosition(position: Position): position is LPPosition {
  return "impermanentLossPercent" in position;
}

function isStakingPosition(position: Position): position is StakingPosition {
  return !isLendingPosition(position) && !isLPPosition(position);
}

interface AddPositionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (position: Position) => void;
}

function AddPositionModal({ isOpen, onClose, onAdd }: AddPositionModalProps) {
  const [positionType, setPositionType] = useState<"lending" | "lp" | "staking">("lending");
  const [protocol, setProtocol] = useState("Aave");
  const [chain, setChain] = useState<"Ethereum" | "Arbitrum" | "Optimism" | "Base" | "Polygon">("Ethereum");
  const [supplied, setSupplied] = useState("");
  const [borrowed, setBorrowed] = useState("");
  const [lpValue, setLpValue] = useState("");
  const [stakingValue, setStakingValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (positionType === "lending" && supplied) {
      const newPos: LendingPosition = {
        id: Date.now().toString(),
        protocol: protocol as "Aave" | "Compound" | "Curve",
        supplied: { asset: "USDC", amount: parseFloat(supplied), value: parseFloat(supplied) },
        borrowed: borrowed ? [{ asset: "ETH", amount: parseFloat(borrowed) / 2000, value: parseFloat(borrowed) }] : [],
        healthFactor: borrowed ? 2.5 : 4.0,
        apy: protocol === "Aave" ? 3.5 : 2.8,
        chain,
      };
      onAdd(newPos);
    } else if (positionType === "lp" && lpValue) {
      const newPos: LPPosition = {
        id: Date.now().toString(),
        protocol: protocol as "Uniswap" | "Curve" | "Aave",
        pool: `${protocol} Pool`,
        tokens: [
          { symbol: "ETH", amount: parseFloat(lpValue) / 2000 },
          { symbol: "USDC", amount: parseFloat(lpValue) },
        ],
        value: parseFloat(lpValue),
        apy: 18.5,
        impermanentLossPercent: Math.random() * 15,
        chain,
      };
      onAdd(newPos);
    } else if (positionType === "staking" && stakingValue) {
      const newPos: StakingPosition = {
        id: Date.now().toString(),
        protocol: protocol as "Lido" | "Yearn" | "Maker" | "Aave",
        asset: protocol === "Lido" ? "stETH" : protocol === "Yearn" ? "yvUSDC" : "MKR",
        amount: parseFloat(stakingValue) / (protocol === "Lido" ? 2000 : 1),
        value: parseFloat(stakingValue),
        apy: protocol === "Lido" ? 3.8 : protocol === "Yearn" ? 12.5 : 5.2,
        unlockDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
        chain,
      };
      onAdd(newPos);
    }

    setSupplied("");
    setBorrowed("");
    setLpValue("");
    setStakingValue("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
      }}
      onClick={onClose}
    >
      <SoftwareApplicationSchema
        url="https://degen0x.com/tools/defi-position-manager"
        name="Multi-Protocol Support"
        description="Multi-Protocol Support"
      />
      <div
        style={{
          background: "#161b22",
          border: "1px solid #30363d",
          borderRadius: "12px",
          padding: "2rem",
          maxWidth: "500px",
          width: "90%",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 style={{ color: "#e6edf3", fontSize: "1.5rem", fontWeight: "700", marginBottom: "1.5rem" }}>
          Add DeFi Position
        </h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", color: "#8b949e", fontSize: "0.9rem", marginBottom: "0.75rem", fontWeight: "600" }}>
              Position Type
            </label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.75rem" }}>
              {["lending", "lp", "staking"].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setPositionType(type as "lending" | "lp" | "staking")}
                  style={{
                    padding: "0.75rem",
                    background: positionType === type ? "rgba(88,166,255,0.2)" : "rgba(48,54,61,0.3)",
                    color: positionType === type ? "#58a6ff" : "#8b949e",
                    border: positionType === type ? "1px solid #58a6ff" : "1px solid #30363d",
                    borderRadius: "6px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {type === "lending" ? "Lending" : type === "lp" ? "LP" : "Staking"}
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", color: "#8b949e", fontSize: "0.9rem", marginBottom: "0.75rem", fontWeight: "600" }}>
              Protocol
            </label>
            <select
              value={protocol}
              onChange={(e) => setProtocol(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem",
                background: "rgba(0,0,0,0.3)",
                border: "1px solid #30363d",
                borderRadius: "6px",
                color: "#e6edf3",
                fontSize: "0.9rem",
                cursor: "pointer",
              }}
            >
              {positionType === "lending" && [
                <option key="Aave" value="Aave">Aave</option>,
                <option key="Compound" value="Compound">Compound</option>,
                <option key="Curve" value="Curve">Curve</option>,
              ]}
              {positionType === "lp" && [
                <option key="Uniswap" value="Uniswap">Uniswap</option>,
                <option key="Curve" value="Curve">Curve</option>,
              ]}
              {positionType === "staking" && [
                <option key="Lido" value="Lido">Lido</option>,
                <option key="Yearn" value="Yearn">Yearn</option>,
                <option key="Maker" value="Maker">Maker</option>,
              ]}
            </select>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", color: "#8b949e", fontSize: "0.9rem", marginBottom: "0.75rem", fontWeight: "600" }}>
              Chain
            </label>
            <select
              value={chain}
              onChange={(e) => setChain(e.target.value as "Ethereum" | "Arbitrum" | "Optimism" | "Base" | "Polygon")}
              style={{
                width: "100%",
                padding: "0.75rem",
                background: "rgba(0,0,0,0.3)",
                border: "1px solid #30363d",
                borderRadius: "6px",
                color: "#e6edf3",
                fontSize: "0.9rem",
                cursor: "pointer",
              }}
            >
              <option value="Ethereum">Ethereum</option>
              <option value="Arbitrum">Arbitrum</option>
              <option value="Optimism">Optimism</option>
              <option value="Base">Base</option>
              <option value="Polygon">Polygon</option>
            </select>
          </div>

          {positionType === "lending" && (
            <>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: "#8b949e", fontSize: "0.9rem", marginBottom: "0.75rem", fontWeight: "600" }}>
                  Supplied Amount (USD)
                </label>
                <input
                  type="number"
                  placeholder="10000"
                  value={supplied}
                  onChange={(e) => setSupplied(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    background: "rgba(0,0,0,0.3)",
                    border: "1px solid #30363d",
                    borderRadius: "6px",
                    color: "#e6edf3",
                    fontSize: "0.9rem",
                  }}
                />
              </div>
              <div style={{ marginBottom: "1.5rem" }}>
                <label style={{ display: "block", color: "#8b949e", fontSize: "0.9rem", marginBottom: "0.75rem", fontWeight: "600" }}>
                  Borrowed Amount (USD)
                </label>
                <input
                  placeholder="0"
                  value={borrowed}
                  onChange={(e) => setBorrowed(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    background: "rgba(0,0,0,0.3)",
                    border: "1px solid #30363d",
                    borderRadius: "6px",
                    color: "#e6edf3",
                    fontSize: "0.9rem",
                  }}
                />
              </div>
            </>
          )}

          {positionType === "lp" && (
            <div style={{ marginBottom: "1.5rem" }}>
              <label style={{ display: "block", color: "#8b949e", fontSize: "0.9rem", marginBottom: "0.75rem", fontWeight: "600" }}>
                Pool Value (USD)
              </label>
              <input
                placeholder="5000"
                value={lpValue}
                onChange={(e) => setLpValue(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  background: "rgba(0,0,0,0.3)",
                  border: "1px solid #30363d",
                  borderRadius: "6px",
                  color: "#e6edf3",
                  fontSize: "0.9rem",
                }}
              />
            </div>
          )}

          {positionType === "staking" && (
            <div style={{ marginBottom: "1.5rem" }}>
              <label style={{ display: "block", color: "#8b949e", fontSize: "0.9rem", marginBottom: "0.75rem", fontWeight: "600" }}>
                Staking Value (USD)
              </label>
              <input
                placeholder="2000"
                value={stakingValue}
                onChange={(e) => setStakingValue(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  background: "rgba(0,0,0,0.3)",
                  border: "1px solid #30363d",
                  borderRadius: "6px",
                  color: "#e6edf3",
                  fontSize: "0.9rem",
                }}
              />
            </div>
          )}

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <button
              type="submit"
              style={{
                padding: "0.75rem",
                background: "rgba(63,185,80,0.2)",
                color: "#3fb950",
                border: "1px solid #3fb950",
                borderRadius: "6px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(63,185,80,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(63,185,80,0.2)";
              }}
            >
              Add Position
            </button>

            <button
              onClick={onClose}
              style={{
                padding: "0.75rem",
                background: "rgba(139,148,158,0.2)",
                color: "#8b949e",
                border: "1px solid #8b949e",
                borderRadius: "6px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(139,148,158,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(139,148,158,0.2)";
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

interface RiskMeterProps {
  healthFactor: number;
}

function RiskMeter({ healthFactor }: RiskMeterProps) {
  const percentage = Math.min((healthFactor / 3) * 100, 100);
  const color = getHealthFactorColor(healthFactor);

  return (
    <div style={{ marginBottom: "1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
        <span style={{ color: "#8b949e", fontSize: "0.85rem", fontWeight: "600" }}>Health Factor</span>
        <span style={{ color, fontSize: "0.85rem", fontWeight: "700" }}>{healthFactor.toFixed(2)}</span>
      </div>
      <div
        style={{
          width: "100%",
          height: "8px",
          background: "rgba(48,54,61,0.4)",
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            height: "100%",
            background: `linear-gradient(90deg, ${color}, ${color})`,
            transition: "width 0.3s ease",
          }}
        />
      </div>
    </div>
  );
}

export default function DefiPositionManagerPage() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [positions, setPositions] = useState<Position[]>([
    {
      id: "1",
      protocol: "Aave",
      supplied: { asset: "USDC", amount: 50000, value: 50000 },
      borrowed: [{ asset: "ETH", amount: 10, value: 20000 }],
      healthFactor: 2.8,
      apy: 3.5,
      chain: "Ethereum",
    } as LendingPosition,
    {
      id: "2",
      protocol: "Uniswap",
      pool: "ETH/USDC",
      tokens: [
        { symbol: "ETH", amount: 5 },
        { symbol: "USDC", amount: 10000 },
      ],
      value: 20000,
      apy: 22.5,
      impermanentLossPercent: 3.2,
      chain: "Ethereum",
    } as LPPosition,
    {
      id: "3",
      protocol: "Lido",
      asset: "stETH",
      amount: 10,
      value: 20000,
      apy: 3.8,
      unlockDate: "2025-04-15",
      chain: "Ethereum",
    } as StakingPosition,
    {
      id: "4",
      protocol: "Compound",
      supplied: { asset: "DAI", amount: 25000, value: 25000 },
      borrowed: [],
      healthFactor: 8.5,
      apy: 2.8,
      chain: "Ethereum",
    } as LendingPosition,
    {
      id: "5",
      protocol: "Curve",
      pool: "3pool",
      tokens: [
        { symbol: "USDC", amount: 3333 },
        { symbol: "USDT", amount: 3333 },
        { symbol: "DAI", amount: 3333 },
      ],
      value: 10000,
      apy: 8.5,
      impermanentLossPercent: 0.5,
      chain: "Polygon",
    } as LPPosition,
  ]);


  const getPositionValue = (p: Position): number => {
    if (isLendingPosition(p)) return p.supplied.value;
    return (p as LPPosition | StakingPosition).value;
  };

  const stats = useMemo(() => {
    const totalValue = positions.reduce((sum, p) => sum + getPositionValue(p), 0);

    let totalLentValue = 0;
    let aggregateHealthFactor = 0;
    let lendingPositionCount = 0;

    positions.forEach((p) => {
      if (isLendingPosition(p)) {
        totalLentValue += p.supplied.value;
        aggregateHealthFactor += p.healthFactor;
        lendingPositionCount++;
      }
    });

    const avgHealthFactor = lendingPositionCount > 0 ? aggregateHealthFactor / lendingPositionCount : 0;

    const lpPositions = positions.filter((p) => isLPPosition(p));
    const avgAPY = lpPositions.length > 0 ? lpPositions.reduce((sum, p) => sum + p.apy, 0) / lpPositions.length : 0;

    const chainExposure: Record<string, number> = {};
    positions.forEach((p) => {
      chainExposure[p.chain] = (chainExposure[p.chain] || 0) + getPositionValue(p);
    });

    return {
      totalValue,
      totalLentValue,
      avgHealthFactor,
      avgAPY,
      positionCount: positions.length,
      chainExposure,
    };
  }, [positions]);

  const addPosition = (position: Position) => {
    setPositions([...positions, position]);
  };

  const removePosition = (id: string) => {
    setPositions(positions.filter((p) => p.id !== id));
  };

  const cardStyle = {
    background: "rgba(22,27,34,0.7)",
    border: "1px solid #30363d",
    borderRadius: "12px",
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0d1117" }}>
      <Header />

      <ToolStructuredData
        title="DeFi Position Manager"
        description="Track and manage DeFi positions across major protocols with health factor monitoring and risk analytics"
        slug="tools/defi-position-manager"
      />

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "2rem 1rem" }}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tools", href: "/tools" },
            { label: "DeFi Position Manager" },
          ]}
        />

        {/* Header */}
        <div style={{ marginTop: "2rem", marginBottom: "2.5rem" }}>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "800",
              color: "#e6edf3",
              letterSpacing: "-0.02em",
              marginBottom: "0.5rem",
            }}
          >
            📊 DeFi Position Manager
          </h1>
          <p style={{ color: "#8b949e", fontSize: "1.1rem", maxWidth: "900px", lineHeight: "1.6" }}>
            Track your lending, LP, and staking positions across Aave, Compound, Uniswap, Curve, Lido, Maker, and Yearn. Monitor health factors, APY, and
            liquidation risk in one comprehensive dashboard.
          </p>
        </div>

        {/* Summary Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          {[
            { label: "Total Value Locked", value: `$${stats.totalValue.toLocaleString("en-US", { maximumFractionDigits: 2 })}`, color: "#58a6ff" },
            { label: "Avg Health Factor", value: stats.avgHealthFactor.toFixed(2), color: getHealthFactorColor(stats.avgHealthFactor) },
            { label: "Avg LP APY", value: `${stats.avgAPY.toFixed(1)}%`, color: "#3fb950" },
            { label: "Total Positions", value: stats.positionCount.toString(), color: "#d29922" },
          ].map((stat) => (
            <div key={stat.label} style={{ ...cardStyle, padding: "1.5rem" }}>
              <div
                style={{
                  color: "#8b949e",
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {stat.label}
              </div>
              <div style={{ color: stat.color, fontSize: "1.75rem", fontWeight: "700" }}>{stat.value}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "2.5rem" }}>
          {/* Left Column - Positions List */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#e6edf3", margin: 0 }}>
                Your Positions
              </h2>
              <button
                onClick={() => setShowAddModal(true)}
                style={{
                  padding: "0.75rem 1.25rem",
                  background: "linear-gradient(135deg, #3fb950, #2ea043)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.opacity = "0.9";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.opacity = "1";
                }}
              >
                + Add Position
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {positions.map((position) => (
                <div
                  key={position.id}
                  style={{
                    ...cardStyle,
                    padding: "1.5rem",
                    borderLeft: `4px solid ${PROTOCOL_COLORS[position.protocol]}`,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                        <div
                          style={{
                            padding: "0.5rem 0.75rem",
                            background: PROTOCOL_COLORS[position.protocol] + "20",
                            color: PROTOCOL_COLORS[position.protocol],
                            borderRadius: "6px",
                            fontSize: "0.85rem",
                            fontWeight: "700",
                          }}
                        >
                          {position.protocol}
                        </div>
                        <div
                          style={{
                            padding: "0.5rem 0.75rem",
                            background: CHAIN_COLORS[position.chain] + "20",
                            color: CHAIN_COLORS[position.chain],
                            borderRadius: "6px",
                            fontSize: "0.85rem",
                            fontWeight: "600",
                          }}
                        >
                          {position.chain}
                        </div>
                      </div>
                      {isLendingPosition(position) && (
                        <h3 style={{ margin: "0.5rem 0 0 0", color: "#e6edf3", fontWeight: "700" }}>
                          Lending Position: {position.supplied.asset}
                        </h3>
                      )}
                      {isLPPosition(position) && (
                        <h3 style={{ margin: "0.5rem 0 0 0", color: "#e6edf3", fontWeight: "700" }}>
                          LP: {position.pool}
                        </h3>
                      )}
                      {isStakingPosition(position) && (
                        <h3 style={{ margin: "0.5rem 0 0 0", color: "#e6edf3", fontWeight: "700" }}>
                          Staking: {position.asset}
                        </h3>
                      )}
                    </div>
                    <button
                      onClick={() => removePosition(position.id)}
                      style={{
                        padding: "0.5rem 0.75rem",
                        background: "rgba(248,81,73,0.2)",
                        color: "#f85149",
                        border: "1px solid #f85149",
                        borderRadius: "6px",
                        fontWeight: "600",
                        fontSize: "0.8rem",
                        cursor: "pointer",
                        transition: "all 0.3s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background = "rgba(248,81,73,0.3)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background = "rgba(248,81,73,0.2)";
                      }}
                    >
                      Remove
                    </button>
                  </div>

                  {isLendingPosition(position) && (
                    <div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                        <div>
                          <div style={{ color: "#6e7681", fontSize: "0.75rem", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                            Supplied
                          </div>
                          <div style={{ color: "#3fb950", fontWeight: "700", fontSize: "1rem" }}>
                            ${position.supplied.value.toLocaleString()}
                          </div>
                        </div>
                        <div>
                          <div style={{ color: "#6e7681", fontSize: "0.75rem", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                            Borrowed
                          </div>
                          <div style={{ color: position.borrowed.length > 0 ? "#f85149" : "#8b949e", fontWeight: "700", fontSize: "1rem" }}>
                            ${position.borrowed.reduce((sum, b) => sum + b.value, 0).toLocaleString()}
                          </div>
                        </div>
                      </div>

                      <RiskMeter healthFactor={position.healthFactor} />

                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                        <div>
                          <div style={{ color: "#6e7681", fontSize: "0.75rem", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                            Supply APY
                          </div>
                          <div style={{ color: "#58a6ff", fontWeight: "600" }}>{position.apy.toFixed(2)}%</div>
                        </div>
                        {position.borrowed.length > 0 && (
                          <div>
                            <div style={{ color: "#6e7681", fontSize: "0.75rem", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                              Borrowed Assets
                            </div>
                            <div style={{ color: "#8b949e", fontSize: "0.9rem" }}>
                              {position.borrowed.map((b) => b.asset).join(", ")}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {isLPPosition(position) && (
                    <div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                        <div>
                          <div style={{ color: "#6e7681", fontSize: "0.75rem", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                            Pool Value
                          </div>
                          <div style={{ color: "#58a6ff", fontWeight: "700", fontSize: "1rem" }}>
                            ${position.value.toLocaleString()}
                          </div>
                        </div>
                        <div>
                          <div style={{ color: "#6e7681", fontSize: "0.75rem", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                            APY
                          </div>
                          <div style={{ color: "#3fb950", fontWeight: "700", fontSize: "1rem" }}>{position.apy.toFixed(1)}%</div>
                        </div>
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                        <div>
                          <div style={{ color: "#6e7681", fontSize: "0.75rem", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                            Tokens
                          </div>
                          <div style={{ color: "#8b949e", fontSize: "0.9rem" }}>
                            {position.tokens.map((t) => t.symbol).join("/")}
                          </div>
                        </div>
                        <div>
                          <div style={{ color: "#6e7681", fontSize: "0.75rem", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                            IL Risk
                          </div>
                          <div style={{ color: position.impermanentLossPercent > 5 ? "#d29922" : "#3fb950", fontWeight: "600" }}>
                            {position.impermanentLossPercent.toFixed(2)}%
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {isStakingPosition(position) && (
                    <div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                        <div>
                          <div style={{ color: "#6e7681", fontSize: "0.75rem", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                            Staking Value
                          </div>
                          <div style={{ color: "#58a6ff", fontWeight: "700", fontSize: "1rem" }}>
                            ${position.value.toLocaleString()}
                          </div>
                        </div>
                        <div>
                          <div style={{ color: "#6e7681", fontSize: "0.75rem", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                            APY
                          </div>
                          <div style={{ color: "#3fb950", fontWeight: "700", fontSize: "1rem" }}>{position.apy.toFixed(2)}%</div>
                        </div>
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                        <div>
                          <div style={{ color: "#6e7681", fontSize: "0.75rem", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                            Asset
                          </div>
                          <div style={{ color: "#8b949e", fontWeight: "600" }}>{position.asset}</div>
                        </div>
                        <div>
                          <div style={{ color: "#6e7681", fontSize: "0.75rem", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                            Unlock Date
                          </div>
                          <div style={{ color: "#8b949e", fontSize: "0.9rem" }}>{new Date(position.unlockDate).toLocaleDateString()}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Risk Dashboard */}
          <div>
            {/* Risk Overview */}
            <div style={{ ...cardStyle, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#e6edf3", marginBottom: "1.5rem" }}>
                📈 Risk Dashboard
              </h2>

              <div style={{ marginBottom: "2rem" }}>
                <div style={{ color: "#8b949e", fontSize: "0.9rem", fontWeight: "600", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Aggregate Health
                </div>
                <RiskMeter healthFactor={stats.avgHealthFactor} />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <div style={{ color: "#8b949e", fontSize: "0.9rem", fontWeight: "600", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Liquidation Price Alerts
                </div>
                <div style={{ ...cardStyle, padding: "1rem", background: "rgba(248,81,73,0.1)", border: "1px solid rgba(248,81,73,0.3)" }}>
                  <div style={{ color: "#8b949e", fontSize: "0.85rem", lineHeight: "1.6" }}>
                    {stats.avgHealthFactor < 1.5 ? (
                      <div style={{ color: "#f85149" }}>
                        ⚠️ High liquidation risk detected. Monitor your positions closely.
                      </div>
                    ) : stats.avgHealthFactor < 2 ? (
                      <div style={{ color: "#d29922" }}>
                        ⚡ Moderate risk. Consider supplying more collateral.
                      </div>
                    ) : (
                      <div style={{ color: "#3fb950" }}>
                        ✓ Safe. Your positions are well-collateralized.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Chain Exposure */}
            <div style={{ ...cardStyle, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#e6edf3", marginBottom: "1.25rem" }}>
                ⛓️ Chain Exposure
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {Object.entries(stats.chainExposure)
                  .sort(([, a], [, b]) => b - a)
                  .map(([chain, value]) => {
                    const percentage = (value / stats.totalValue) * 100;
                    return (
                      <div key={chain}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                          <span style={{ color: "#8b949e", fontSize: "0.9rem", fontWeight: "600" }}>{chain}</span>
                          <span style={{ color: CHAIN_COLORS[chain as keyof typeof CHAIN_COLORS], fontSize: "0.9rem", fontWeight: "700" }}>
                            ${value.toLocaleString("en-US", { maximumFractionDigits: 0 })} ({percentage.toFixed(1)}%)
                          </span>
                        </div>
                        <div
                          style={{
                            width: "100%",
                            height: "6px",
                            background: "rgba(48,54,61,0.4)",
                            borderRadius: "3px",
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              width: `${percentage}%`,
                              height: "100%",
                              background: CHAIN_COLORS[chain as keyof typeof CHAIN_COLORS],
                              transition: "width 0.3s ease",
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* Quick Stats */}
            <div style={{ ...cardStyle, padding: "1.5rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#e6edf3", marginBottom: "1.25rem" }}>
                📊 Quick Stats
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  {
                    label: "Total Lent Value",
                    value: `$${positions.filter((p) => isLendingPosition(p)).reduce((sum, p) => sum + (p as LendingPosition).supplied.value, 0).toLocaleString("en-US", { maximumFractionDigits: 0 })}`,
                    icon: "🏦",
                  },
                  {
                    label: "LP Positions",
                    value: positions.filter((p) => isLPPosition(p)).length.toString(),
                    icon: "🥗",
                  },
                  {
                    label: "Staking Positions",
                    value: positions.filter((p) => isStakingPosition(p)).length.toString(),
                    icon: "🔒",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingTop: "1rem",
                      borderTop: "1px solid #30363d",
                    }}
                  >
                    <span style={{ color: "#8b949e", fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span>{stat.icon}</span>
                      {stat.label}
                    </span>
                    <span style={{ color: "#e6edf3", fontWeight: "700", fontSize: "1rem" }}>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div style={{ ...cardStyle, padding: "2rem", marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#e6edf3", marginBottom: "1.5rem" }}>
            ✨ Key Features
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                icon: "🏛️",
                title: "Multi-Protocol Support",
                desc: "Track positions across Aave, Compound, Curve, Uniswap, Lido, Maker, and Yearn",
              },
              {
                icon: "⛓️",
                title: "Cross-Chain",
                desc: "Monitor positions on Ethereum, Arbitrum, Optimism, Base, and Polygon",
              },
              {
                icon: "📊",
                title: "Health Factor Monitoring",
                desc: "Real-time health factor tracking with color-coded risk levels",
              },
              {
                icon: "💰",
                title: "APY Analytics",
                desc: "Track yield rates and projected earnings across all positions",
              },
              {
                icon: "⚠️",
                title: "Liquidation Alerts",
                desc: "Get alerts when positions approach liquidation thresholds",
              },
              {
                icon: "🎯",
                title: "IL Estimation",
                desc: "Impermanent loss estimates for LP positions",
              },
            ].map((feature, idx) => (
              <div key={idx}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{feature.icon}</div>
                <h3 style={{ color: "#e6edf3", fontWeight: "600", marginBottom: "0.5rem" }}>{feature.title}</h3>
                <p style={{ color: "#8b949e", fontSize: "0.9rem", lineHeight: "1.5", margin: 0 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{ ...cardStyle, padding: "1.25rem", fontSize: "0.85rem", color: "#8b949e", lineHeight: "1.6" }}>
          <strong style={{ color: "#e6edf3" }}>Disclaimer:</strong> This DeFi Position Manager displays simulated position data for demonstration purposes.
          Actual health factors, APY rates, and risk metrics will vary based on real protocol parameters, asset prices, and market conditions. Always verify your
          actual positions directly on the respective protocol platforms. This is not financial advice. DeFi investments carry significant risks including
          liquidation, smart contract exploits, and market volatility.
        </div>
      </div>

      <Footer />

      <AddPositionModal isOpen={showAddModal} onClose={() => setShowAddModal(false)} onAdd={addPosition} />

      <style>{`
        input, select { font-family: inherit; }
        input::placeholder { color: #6e7681; }
        select option { background: #161b22; color: #e6edf3; }
        button:hover { opacity: 0.95; }
      `}</style>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Defi Position Manager",
              "url": "https://degen0x.com/tools/defi-position-manager",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      <RelatedContent category="tools" currentSlug="/tools/defi-position-manager" />
      </div>
  );
}
