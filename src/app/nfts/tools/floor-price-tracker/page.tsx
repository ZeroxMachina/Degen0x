"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";

interface CollectionEntry {
  id: string;
  name: string;
  floorPrice: string;
  previousFloor: string;
  currency: string;
  itemsOwned: string;
}

export default function FloorPriceTrackerPage() {
  const [collections, setCollections] = useState<CollectionEntry[]>([
    { id: "1", name: "", floorPrice: "", previousFloor: "", currency: "ETH", itemsOwned: "1" },
  ]);
  const [ethPrice, setEthPrice] = useState("3000");
  const [solPrice, setSolPrice] = useState("150");
  const [calculated, setCalculated] = useState(false);

  const addCollection = () => {
    setCollections([
      ...collections,
      { id: Date.now().toString(), name: "", floorPrice: "", previousFloor: "", currency: "ETH", itemsOwned: "1" },
    ]);
  };

  const removeCollection = (id: string) => {
    if (collections.length > 1) {
      setCollections(collections.filter((c) => c.id !== id));
    }
  };

  const updateCollection = (id: string, field: keyof CollectionEntry, value: string) => {
    setCollections(collections.map((c) => (c.id === id ? { ...c, [field]: value } : c)));
  };

  const getUsdPrice = (price: number, currency: string) => {
    if (currency === "ETH") return price * parseFloat(ethPrice || "0");
    if (currency === "SOL") return price * parseFloat(solPrice || "0");
    return price;
  };

  const calculate = () => {
    setCalculated(true);
  };

  const validCollections = collections.filter(
    (c) => c.name && c.floorPrice && parseFloat(c.floorPrice) > 0
  );

  const totalValueUsd = validCollections.reduce((sum, c) => {
    const floor = parseFloat(c.floorPrice) || 0;
    const items = parseInt(c.itemsOwned) || 1;
    return sum + getUsdPrice(floor, c.currency) * items;
  }, 0);

  const totalPreviousUsd = validCollections.reduce((sum, c) => {
    const prev = parseFloat(c.previousFloor) || parseFloat(c.floorPrice) || 0;
    const items = parseInt(c.itemsOwned) || 1;
    return sum + getUsdPrice(prev, c.currency) * items;
  }, 0);

  const totalChange = totalPreviousUsd > 0 ? ((totalValueUsd - totalPreviousUsd) / totalPreviousUsd) * 100 : 0;

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "NFTs", href: "/nfts" },
          { label: "Tools", href: "/nfts/tools" },
          { label: "Floor Price Tracker", href: "#" },
        ]}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">NFT Floor Price Tracker</h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
        Track and calculate the floor price value of your NFT portfolio. Enter your collections, their
        current and previous floor prices, and get a full portfolio overview with USD valuations and
        price change tracking.
      </p>

      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Token Prices (USD)</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">ETH Price</label>
            <input
              type="number"
              value={ethPrice}
              onChange={(e) => setEthPrice(e.target.value)}
              placeholder="3000"
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2 text-white placeholder-gray-500 focus:border-[var(--color-primary)] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">SOL Price</label>
            <input
              type="number"
              value={solPrice}
              onChange={(e) => setSolPrice(e.target.value)}
              placeholder="150"
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2 text-white placeholder-gray-500 focus:border-[var(--color-primary)] focus:outline-none"
            />
          </div>
        </div>

        <h2 className="text-xl font-semibold text-white mb-4">Your Collections</h2>
        <div className="space-y-4">
          {collections.map((col) => (
            <div key={col.id} className="grid grid-cols-1 md:grid-cols-6 gap-3 items-end">
              <div className="md:col-span-2">
                <label className="block text-xs text-[var(--color-text-secondary)] mb-1">Collection Name</label>
                <input
                  type="text"
                  value={col.name}
                  onChange={(e) => updateCollection(col.id, "name", e.target.value)}
                  placeholder="e.g., Bored Apes"
                  className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-[var(--color-primary)] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs text-[var(--color-text-secondary)] mb-1">Floor Price</label>
                <input
                  type="number"
                  step="0.001"
                  value={col.floorPrice}
                  onChange={(e) => updateCollection(col.id, "floorPrice", e.target.value)}
                  placeholder="15.5"
                  className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-[var(--color-primary)] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs text-[var(--color-text-secondary)] mb-1">Prev Floor</label>
                <input
                  type="number"
                  step="0.001"
                  value={col.previousFloor}
                  onChange={(e) => updateCollection(col.id, "previousFloor", e.target.value)}
                  placeholder="14.0"
                  className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-[var(--color-primary)] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs text-[var(--color-text-secondary)] mb-1">Chain</label>
                <select
                  value={col.currency}
                  onChange={(e) => updateCollection(col.id, "currency", e.target.value)}
                  className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm text-white focus:border-[var(--color-primary)] focus:outline-none"
                >
                  <option value="ETH">ETH</option>
                  <option value="SOL">SOL</option>
                </select>
              </div>
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="block text-xs text-[var(--color-text-secondary)] mb-1">Qty</label>
                  <input
                    type="number"
                    value={col.itemsOwned}
                    onChange={(e) => updateCollection(col.id, "itemsOwned", e.target.value)}
                    placeholder="1"
                    className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-[var(--color-primary)] focus:outline-none"
                  />
                </div>
                <button
                  onClick={() => removeCollection(col.id)}
                  className="self-end rounded-lg border border-red-500/30 bg-red-500/10 px-2 py-2 text-sm text-red-400 hover:bg-red-500/20 transition-colors"
                >
                  X
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex gap-3">
          <button
            onClick={addCollection}
            className="rounded-lg border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-card-hover)] transition-colors"
          >
            + Add Collection
          </button>
          <button
            onClick={calculate}
            className="affiliate-cta rounded-lg px-6 py-2 text-sm font-medium text-white"
          >
            Calculate Portfolio
          </button>
        </div>
      </div>

      {calculated && validCollections.length > 0 && (
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Portfolio Summary</h2>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-4 text-center">
              <p className="text-sm text-[var(--color-text-secondary)]">Total Value</p>
              <p className="text-2xl font-bold text-white">${totalValueUsd.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
            </div>
            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-4 text-center">
              <p className="text-sm text-[var(--color-text-secondary)]">Change</p>
              <p className={`text-2xl font-bold ${totalChange >= 0 ? "text-green-400" : "text-red-400"}`}>
                {totalChange >= 0 ? "+" : ""}{totalChange.toFixed(2)}%
              </p>
            </div>
            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-4 text-center">
              <p className="text-sm text-[var(--color-text-secondary)]">Collections</p>
              <p className="text-2xl font-bold text-white">{validCollections.length}</p>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-white mb-3">Collection Breakdown</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="text-left py-2 text-sm font-medium text-[var(--color-text-secondary)]">Collection</th>
                  <th className="text-right py-2 text-sm font-medium text-[var(--color-text-secondary)]">Floor</th>
                  <th className="text-right py-2 text-sm font-medium text-[var(--color-text-secondary)]">Change</th>
                  <th className="text-right py-2 text-sm font-medium text-[var(--color-text-secondary)]">Qty</th>
                  <th className="text-right py-2 text-sm font-medium text-[var(--color-text-secondary)]">Value (USD)</th>
                </tr>
              </thead>
              <tbody>
                {validCollections.map((col) => {
                  const floor = parseFloat(col.floorPrice) || 0;
                  const prev = parseFloat(col.previousFloor) || floor;
                  const change = prev > 0 ? ((floor - prev) / prev) * 100 : 0;
                  const items = parseInt(col.itemsOwned) || 1;
                  const valueUsd = getUsdPrice(floor, col.currency) * items;

                  return (
                    <tr key={col.id} className="border-b border-[var(--color-border)]">
                      <td className="py-2 text-sm text-white">{col.name}</td>
                      <td className="py-2 text-sm text-right text-white">
                        {floor} {col.currency}
                      </td>
                      <td className={`py-2 text-sm text-right font-medium ${change >= 0 ? "text-green-400" : "text-red-400"}`}>
                        {change >= 0 ? "+" : ""}{change.toFixed(2)}%
                      </td>
                      <td className="py-2 text-sm text-right text-[var(--color-text-secondary)]">{items}</td>
                      <td className="py-2 text-sm text-right text-white">
                        ${valueUsd.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
