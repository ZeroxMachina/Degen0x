"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";

interface TraitInput {
  id: string;
  traitType: string;
  traitValue: string;
  traitCount: string;
}

export default function RarityCheckerPage() {
  const [collectionSize, setCollectionSize] = useState("");
  const [traits, setTraits] = useState<TraitInput[]>([
    { id: "1", traitType: "", traitValue: "", traitCount: "" },
  ]);
  const [results, setResults] = useState<{
    traitRarities: { traitType: string; traitValue: string; percentage: number; score: number }[];
    overallScore: number;
    overallRank: string;
  } | null>(null);

  const addTrait = () => {
    setTraits([
      ...traits,
      { id: Date.now().toString(), traitType: "", traitValue: "", traitCount: "" },
    ]);
  };

  const removeTrait = (id: string) => {
    if (traits.length > 1) {
      setTraits(traits.filter((t) => t.id !== id));
    }
  };

  const updateTrait = (id: string, field: keyof TraitInput, value: string) => {
    setTraits(traits.map((t) => (t.id === id ? { ...t, [field]: value } : t)));
  };

  const calculateRarity = () => {
    const size = parseInt(collectionSize);
    if (!size || size <= 0) return;

    const validTraits = traits.filter(
      (t) => t.traitType && t.traitValue && t.traitCount && parseInt(t.traitCount) > 0
    );
    if (validTraits.length === 0) return;

    const traitRarities = validTraits.map((t) => {
      const count = parseInt(t.traitCount);
      const percentage = (count / size) * 100;
      const score = 1 / (count / size);
      return {
        traitType: t.traitType,
        traitValue: t.traitValue,
        percentage,
        score,
      };
    });

    const overallScore = traitRarities.reduce((sum, t) => sum + t.score, 0);

    let overallRank = "Common";
    if (overallScore > 200) overallRank = "Legendary";
    else if (overallScore > 100) overallRank = "Epic";
    else if (overallScore > 50) overallRank = "Rare";
    else if (overallScore > 20) overallRank = "Uncommon";

    setResults({ traitRarities, overallScore, overallRank });
  };

  const getRarityColor = (percentage: number) => {
    if (percentage <= 1) return "text-yellow-400";
    if (percentage <= 5) return "text-purple-400";
    if (percentage <= 10) return "text-blue-400";
    if (percentage <= 25) return "text-green-400";
    return "text-[var(--color-text-secondary)]";
  };

  const getRarityLabel = (percentage: number) => {
    if (percentage <= 1) return "Legendary";
    if (percentage <= 5) return "Epic";
    if (percentage <= 10) return "Rare";
    if (percentage <= 25) return "Uncommon";
    return "Common";
  };

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "NFTs", href: "/nfts" },
          { label: "Tools", href: "/nfts/tools" },
          { label: "Rarity Checker", href: "#" },
        ]}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">NFT Rarity Checker</h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
        Calculate the rarity score of any NFT based on its traits. Enter the collection size and each
        trait&apos;s occurrence count to get a statistical rarity breakdown and overall rarity ranking.
      </p>

      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Collection Details</h2>
        <div className="mb-6">
          <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
            Total Collection Size
          </label>
          <input
            type="number"
            value={collectionSize}
            onChange={(e) => setCollectionSize(e.target.value)}
            placeholder="e.g., 10000"
            className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2 text-white placeholder-gray-500 focus:border-[var(--color-primary)] focus:outline-none"
          />
        </div>

        <h2 className="text-xl font-semibold text-white mb-4">NFT Traits</h2>
        <div className="space-y-4">
          {traits.map((trait) => (
            <div key={trait.id} className="grid grid-cols-1 md:grid-cols-4 gap-3 items-end">
              <div>
                <label className="block text-xs text-[var(--color-text-secondary)] mb-1">Trait Type</label>
                <input
                  type="text"
                  value={trait.traitType}
                  onChange={(e) => updateTrait(trait.id, "traitType", e.target.value)}
                  placeholder="e.g., Background"
                  className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-[var(--color-primary)] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs text-[var(--color-text-secondary)] mb-1">Trait Value</label>
                <input
                  type="text"
                  value={trait.traitValue}
                  onChange={(e) => updateTrait(trait.id, "traitValue", e.target.value)}
                  placeholder="e.g., Gold"
                  className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-[var(--color-primary)] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs text-[var(--color-text-secondary)] mb-1">
                  Items with Trait
                </label>
                <input
                  type="number"
                  value={trait.traitCount}
                  onChange={(e) => updateTrait(trait.id, "traitCount", e.target.value)}
                  placeholder="e.g., 50"
                  className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-[var(--color-primary)] focus:outline-none"
                />
              </div>
              <button
                onClick={() => removeTrait(trait.id)}
                className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-400 hover:bg-red-500/20 transition-colors"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="mt-4 flex gap-3">
          <button
            onClick={addTrait}
            className="rounded-lg border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-card-hover)] transition-colors"
          >
            + Add Trait
          </button>
          <button
            onClick={calculateRarity}
            className="affiliate-cta rounded-lg px-6 py-2 text-sm font-medium text-white"
          >
            Calculate Rarity
          </button>
        </div>
      </div>

      {results && (
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Rarity Results</h2>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-4 text-center">
              <p className="text-sm text-[var(--color-text-secondary)]">Overall Score</p>
              <p className="text-2xl font-bold text-white">{results.overallScore.toFixed(2)}</p>
            </div>
            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-4 text-center">
              <p className="text-sm text-[var(--color-text-secondary)]">Rarity Rank</p>
              <p className="text-2xl font-bold text-[var(--color-primary)]">{results.overallRank}</p>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-white mb-3">Trait Breakdown</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="text-left py-2 text-sm font-medium text-[var(--color-text-secondary)]">Trait</th>
                  <th className="text-left py-2 text-sm font-medium text-[var(--color-text-secondary)]">Value</th>
                  <th className="text-right py-2 text-sm font-medium text-[var(--color-text-secondary)]">% Have</th>
                  <th className="text-right py-2 text-sm font-medium text-[var(--color-text-secondary)]">Score</th>
                  <th className="text-right py-2 text-sm font-medium text-[var(--color-text-secondary)]">Rarity</th>
                </tr>
              </thead>
              <tbody>
                {results.traitRarities.map((trait, index) => (
                  <tr key={index} className="border-b border-[var(--color-border)]">
                    <td className="py-2 text-sm text-white">{trait.traitType}</td>
                    <td className="py-2 text-sm text-white">{trait.traitValue}</td>
                    <td className="py-2 text-sm text-right text-[var(--color-text-secondary)]">
                      {trait.percentage.toFixed(2)}%
                    </td>
                    <td className="py-2 text-sm text-right text-white">{trait.score.toFixed(2)}</td>
                    <td className={`py-2 text-sm text-right font-medium ${getRarityColor(trait.percentage)}`}>
                      {getRarityLabel(trait.percentage)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-4">
            <h4 className="text-sm font-semibold text-white mb-2">How Rarity Score Works</h4>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              Each trait&apos;s rarity score is calculated as 1 / (trait count / collection size). Rarer
              traits produce higher scores. The overall score is the sum of all individual trait scores.
              Higher overall scores indicate rarer NFTs within the collection.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
