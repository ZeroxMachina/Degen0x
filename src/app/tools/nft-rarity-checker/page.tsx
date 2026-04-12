'use client';

import { useState, useMemo, useCallback } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

interface NFTCollection {
  id: string;
  name: string;
  floorPrice: number;
  totalSupply: number;
  holders: number;
  image: string;
}

interface TraitInput {
  category: string;
  value: string;
  rarity: number;
}

const collections: NFTCollection[] = [
  {
    id: 'bored-apes',
    name: 'Bored Ape Yacht Club',
    floorPrice: 32.5,
    totalSupply: 10000,
    holders: 7234,
    image: '🦍',
  },
  {
    id: 'cryptopunks',
    name: 'CryptoPunks',
    floorPrice: 68.3,
    totalSupply: 10000,
    holders: 3421,
    image: '👤',
  },
  {
    id: 'azuki',
    name: 'Azuki',
    floorPrice: 11.2,
    totalSupply: 10000,
    holders: 5123,
    image: '👹',
  },
  {
    id: 'pudgy-penguins',
    name: 'Pudgy Penguins',
    floorPrice: 8.9,
    totalSupply: 8888,
    holders: 4567,
    image: '🐧',
  },
  {
    id: 'degods',
    name: 'DeGods',
    floorPrice: 5.4,
    totalSupply: 11000,
    holders: 3892,
    image: '💀',
  },
  {
    id: 'moonbirds',
    name: 'Moonbirds',
    floorPrice: 6.7,
    totalSupply: 10000,
    holders: 3245,
    image: '🌙',
  },
];

const traitCategories = ['Background', 'Skin', 'Eyes', 'Mouth', 'Hat', 'Accessory'];

const rarityDistribution: Record<string, Record<string, number>> = {
  Background: {
    'Blue': 15,
    'Red': 8,
    'Green': 12,
    'Purple': 5,
    'Gold': 2,
  },
  Skin: {
    'Light': 20,
    'Medium': 25,
    'Dark': 18,
    'Alien': 4,
    'Holographic': 1,
  },
  Eyes: {
    'Normal': 30,
    'Angry': 15,
    'Sleepy': 12,
    'Sunglasses': 8,
    'Laser': 2,
  },
  Mouth: {
    'Neutral': 25,
    'Smile': 20,
    'Tongue': 10,
    'Cigar': 6,
    'Hologram': 1,
  },
  Hat: {
    'None': 35,
    'Cap': 18,
    'Crown': 8,
    'Halo': 4,
    'Legendary': 1,
  },
  Accessory: {
    'None': 40,
    'Chain': 20,
    'Pendant': 12,
    'Ring': 6,
    'Artifact': 2,
  },
};

export default function NFTRarityChecker() {
  const [selectedCollection, setSelectedCollection] = useState<string>('bored-apes');
  const [traits, setTraits] = useState<TraitInput[]>([
    { category: 'Background', value: '', rarity: 0 },
    { category: 'Skin', value: '', rarity: 0 },
  ]);

  const collection = useMemo(
    () => collections.find((c) => c.id === selectedCollection) || collections[0],
    [selectedCollection]
  );

  const calculateRarityScore = useCallback((traitList: TraitInput[]): number => {
    if (traitList.length === 0) return 0;

    const validTraits = traitList.filter((t) => t.value && t.rarity > 0);
    if (validTraits.length === 0) return 0;

    const totalRarity = validTraits.reduce((sum, trait) => sum + trait.rarity, 0);
    const averageRarity = totalRarity / validTraits.length;

    // Convert percentage rarity to score (inverse relationship - lower % = higher score)
    const baseScore = Math.max(0, 100 - averageRarity);

    // Apply weighting based on number of traits
    const weightFactor = Math.min(1 + validTraits.length * 0.1, 1.3);

    return Math.round(baseScore * weightFactor);
  }, []);

  const rarityScore = useMemo(() => calculateRarityScore(traits), [traits, calculateRarityScore]);

  const priceEstimate = useMemo(() => {
    const multiplier = 1 + (rarityScore / 100) * 3; // 1x to 4x floor price
    return (collection.floorPrice * multiplier).toFixed(2);
  }, [rarityScore, collection.floorPrice]);

  const handleAddTrait = useCallback(() => {
    setTraits([
      ...traits,
      { category: traitCategories[0], value: '', rarity: 0 },
    ]);
  }, [traits]);

  const handleRemoveTrait = useCallback((index: number) => {
    setTraits(traits.filter((_, i) => i !== index));
  }, [traits]);

  const handleTraitChange = useCallback(
    (index: number, field: string, value: string | number) => {
      const updated = [...traits];
      updated[index] = { ...updated[index], [field]: value };

      // Update rarity percentage based on trait value
      if (field === 'value') {
        const traitValues = rarityDistribution[updated[index].category];
        if (traitValues && traitValues[value]) {
          updated[index].rarity = traitValues[value];
        }
      }

      setTraits(updated);
    },
    [traits]
  );

  const getRarityTier = (rarity: number): { label: string; color: string } => {
    if (rarity < 1) return { label: 'Legendary', color: '#FFD700' };
    if (rarity < 5) return { label: 'Epic', color: '#A335EE' };
    if (rarity < 15) return { label: 'Rare', color: '#0070DD' };
    if (rarity < 30) return { label: 'Uncommon', color: '#1EFF00' };
    return { label: 'Common', color: '#9D9D9D' };
  };

  const rarityTier = useMemo(() => {
    const avgRarity = traits
      .filter((t) => t.value && t.rarity > 0)
      .reduce((sum, t) => sum + t.rarity, 0) / (traits.filter((t) => t.value).length || 1);
    return getRarityTier(avgRarity);
  }, [traits]);

  return (
    <div style={{
      background: 'var(--color-bg)',
      color: 'var(--color-text)',
      minHeight: '100vh',
      padding: '32px 24px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <Breadcrumb
          items={[
            { label: 'Tools', href: '/tools' },
            { label: 'NFT Rarity Checker', href: '#' },
          ]}
        />

        <div style={{ marginTop: '32px', marginBottom: '48px' }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: '700',
            marginBottom: '8px',
            background: 'linear-gradient(135deg, #00D9FF, #0099FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            NFT Rarity Checker
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px' }}>
            Analyze NFT trait rarity, estimate prices, and discover undervalued assets
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '48px' }}>
          {/* Collection Selector */}
          <div style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            padding: '24px',
            gridColumn: 'span 2',
          }}>
            <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
              Select Collection
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '12px',
            }}>
              {collections.map((coll) => (
                <button
                  key={coll.id}
                  onClick={() => setSelectedCollection(coll.id)}
                  style={{
                    background: selectedCollection === coll.id
                      ? 'linear-gradient(135deg, #00D9FF, #0099FF)'
                      : 'var(--color-border)',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '12px',
                    cursor: 'pointer',
                    color: selectedCollection === coll.id ? '#000' : 'var(--color-text)',
                    fontWeight: '600',
                    fontSize: '14px',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    if (selectedCollection !== coll.id) {
                      e.currentTarget.style.background = 'var(--color-border)';
                      e.currentTarget.style.opacity = '0.8';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCollection !== coll.id) {
                      e.currentTarget.style.background = 'var(--color-border)';
                      e.currentTarget.style.opacity = '1';
                    }
                  }}
                >
                  {coll.image} {coll.name.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Collection Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
              marginTop: '24px',
              paddingTop: '24px',
              borderTop: '1px solid var(--color-border)',
            }}>
              <div>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '12px', marginBottom: '4px' }}>
                  Floor Price
                </p>
                <p style={{ fontSize: '20px', fontWeight: '700' }}>
                  Ξ {collection.floorPrice}
                </p>
              </div>
              <div>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '12px', marginBottom: '4px' }}>
                  Total Supply
                </p>
                <p style={{ fontSize: '20px', fontWeight: '700' }}>
                  {collection.totalSupply.toLocaleString()}
                </p>
              </div>
              <div>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '12px', marginBottom: '4px' }}>
                  Holders
                </p>
                <p style={{ fontSize: '20px', fontWeight: '700' }}>
                  {collection.holders.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Rarity Score Display */}
          <div style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <h3 style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '12px' }}>
              Rarity Score
            </h3>
            <div style={{
              fontSize: '64px',
              fontWeight: '700',
              color: rarityTier.color,
              marginBottom: '12px',
            }}>
              {rarityScore}
            </div>
            <div style={{
              display: 'inline-block',
              padding: '8px 16px',
              background: rarityTier.color,
              color: '#000',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: '600',
            }}>
              {rarityTier.label}
            </div>

            {/* Rarity Gauge */}
            <svg
              viewBox="0 0 200 120"
              style={{ width: '100%', marginTop: '24px', maxWidth: '180px' }}
            >
              <path
                d="M 30 100 A 70 70 0 0 1 170 100"
                stroke="var(--color-border)"
                strokeWidth="8"
                fill="none"
              />
              <path
                stroke={rarityTier.color}
                strokeDasharray={`${(rarityScore / 100) * 220} 220`}
                style={{ transition: 'stroke-dasharray 0.3s' }}
              />
              <circle cx={100 + 70 * Math.cos((rarityScore / 100) * Math.PI - Math.PI)} cy={100 + 70 * Math.sin((rarityScore / 100) * Math.PI - Math.PI)} r="4" fill={rarityTier.color} />
            </svg>
          </div>

          {/* Price Estimate */}
          <div style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '12px', marginBottom: '8px' }}>
              Estimated Price
            </p>
            <p style={{ fontSize: '32px', fontWeight: '700', marginBottom: '8px' }}>
              Ξ {priceEstimate}
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '12px',
              color: 'var(--color-text-secondary)',
            }}>
              <span>Floor: Ξ {collection.floorPrice}</span>
              <span>Multiplier: {((Number(priceEstimate) / collection.floorPrice).toFixed(2))}x</span>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '48px' }}>
          {/* Trait Input Panel */}
          <div style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            padding: '24px',
          }}>
            <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
              Add Traits
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {traits.map((trait, index) => (
                <div key={index} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '12px', alignItems: 'end' }}>
                  <select
                    value={trait.category}
                    onChange={(e) => handleTraitChange(index, 'category', e.target.value)}
                    style={{
                      background: 'var(--color-bg)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '8px',
                      padding: '10px',
                      color: 'var(--color-text)',
                      fontSize: '14px',
                      cursor: 'pointer',
                    }}
                  >
                    {traitCategories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  <select
                    value={trait.value}
                    onChange={(e) => handleTraitChange(index, 'value', e.target.value)}
                    style={{
                      background: 'var(--color-bg)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '8px',
                      padding: '10px',
                      color: 'var(--color-text)',
                      fontSize: '14px',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="">Select trait</option>
                    {Object.keys(rarityDistribution[trait.category] || {}).map((val) => (
                      <option key={val} value={val}>
                        {val}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={() => handleRemoveTrait(index)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#FF6B6B',
                      cursor: 'pointer',
                      fontSize: '18px',
                      padding: '0',
                    }}
                  >
                    ✕
                  </button>
                </div>
              ))}
              <button
                onClick={handleAddTrait}
                style={{
                  background: 'var(--color-border)',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px',
                  color: 'var(--color-text)',
                  cursor: 'pointer',
                  fontWeight: '600',
                  transition: 'all 0.2s',
                  marginTop: '8px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #00D9FF, #0099FF)';
                  e.currentTarget.style.color = '#000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--color-border)';
                  e.currentTarget.style.color = 'var(--color-text)';
                }}
              >
                + Add Trait
              </button>
            </div>
          </div>

          {/* Trait Rarity Breakdown */}
          <div style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            padding: '24px',
          }}>
            <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
              Trait Rarity Breakdown
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {traits
                .filter((t) => t.value && t.rarity > 0)
                .map((trait, index) => {
                  const tier = getRarityTier(trait.rarity);
                  return (
                    <div
                      key={index}
                      style={{
                        background: 'var(--color-bg)',
                        border: `1px solid ${tier.color}`,
                        borderRadius: '8px',
                        padding: '12px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <div>
                        <p style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                          {trait.category}
                        </p>
                        <p style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>
                          {trait.value}
                        </p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '12px', color: tier.color, fontWeight: '600' }}>
                          {tier.label}
                        </div>
                        <p style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                          {trait.rarity}% of collection
                        </p>
                      </div>
                    </div>
                  );
                })}
              {traits.filter((t) => t.value && t.rarity > 0).length === 0 && (
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', textAlign: 'center', padding: '24px 0' }}>
                  Add traits to see rarity breakdown
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Educational Section */}
        <div style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: '12px',
          padding: '24px',
        }}>
          <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
            How NFT Rarity Works
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#00D9FF', marginBottom: '8px' }}>
                Trait Rarity
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                Rarity is determined by how frequently a trait appears in the collection. Traits present in less than 1% of NFTs are legendary, while common traits appear in over 30% of the collection.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#00D9FF', marginBottom: '8px' }}>
                Trait Weighting
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                Our algorithm weighs each trait's rarity equally. NFTs with multiple rare traits have exponentially higher rarity scores and value. The more rare traits combined, the higher the multiplier.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#00D9FF', marginBottom: '8px' }}>
                Rarity Sniping
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                Advanced traders use rarity data to identify undervalued NFTs. An NFT with a high rarity score but listed below market value is a potential snipe opportunity.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#00D9FF', marginBottom: '8px' }}>
                Price Correlation
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                Rarity scores typically correlate with floor prices, but market sentiment, cultural relevance, and project momentum also influence prices. Use this tool as a starting point for analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
