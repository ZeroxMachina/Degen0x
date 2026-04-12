'use client';

import { useState } from 'react';

export default function CryptoProfitCalculator() {
  const [investmentAmount, setInvestmentAmount] = useState<number>(1000);
  const [buyPrice, setBuyPrice] = useState<number>(50);
  const [sellPrice, setSellPrice] = useState<number>(75);
  const [quantity, setQuantity] = useState<number>(20);
  const [tradingFeePercent, setTradingFeePercent] = useState<number>(0.5);
  const [taxRatePercent, setTaxRatePercent] = useState<number>(0);
  const [useQuantity, setUseQuantity] = useState<boolean>(false);

  // Calculate based on either investment amount or quantity
  const calcQuantity = useQuantity ? quantity : investmentAmount / buyPrice;
  const buyTotal = calcQuantity * buyPrice;
  const buyFee = buyTotal * (tradingFeePercent / 100);
  const totalCostBasis = buyTotal + buyFee;

  const sellTotal = calcQuantity * sellPrice;
  const sellFee = sellTotal * (tradingFeePercent / 100);
  const sellNetProceeds = sellTotal - sellFee;

  const profitBeforeTax = sellNetProceeds - totalCostBasis;
  const taxAmount = Math.max(0, profitBeforeTax * (taxRatePercent / 100));
  const profitAfterTax = profitBeforeTax - taxAmount;

  const roi = totalCostBasis > 0 ? ((profitAfterTax / totalCostBasis) * 100) : 0;
  const percentageGain = totalCostBasis > 0 ? ((sellNetProceeds / totalCostBasis - 1) * 100) : 0;

  const isProfit = profitAfterTax > 0;
  const profitColor = isProfit ? '#22c55e' : '#f85149';

  return (
    <div style={{
      background: '#0d1117',
      color: '#e6edf3',
      padding: '32px 24px',
      borderRadius: 12,
      border: '1px solid #30363d',
      marginBottom: 32,
    }}>
      <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 24, color: '#e6edf3' }}>
        Interactive Profit Calculator
      </h3>

      {/* Input Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: 20,
        marginBottom: 24,
      }}>
        {/* Toggle between investment amount and quantity */}
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            cursor: 'pointer',
            fontSize: 14,
            color: '#c9d1d9',
          }}>
            <input
              type="checkbox"
              checked={useQuantity}
              onChange={(e) => setUseQuantity(e.target.checked)}
              style={{ cursor: 'pointer', width: 16, height: 16 }}
            />
            Use quantity instead of investment amount
          </label>
        </div>

        {/* Investment Amount or Quantity */}
        {!useQuantity ? (
          <div>
            <label style={{ display: 'block', marginBottom: 8, fontSize: 14, fontWeight: 600, color: '#e6edf3' }}>
              Investment Amount (USD)
            </label>
            <input
              type="number"
              value={investmentAmount}
              onChange={(e) => setInvestmentAmount(parseFloat(e.target.value) || 0)}
              style={{
                width: '100%',
                padding: '10px 12px',
                background: '#161b22',
                border: '1px solid #30363d',
                borderRadius: 6,
                color: '#e6edf3',
                fontSize: 14,
              }}
            />
          </div>
        ) : (
          <div>
            <label style={{ display: 'block', marginBottom: 8, fontSize: 14, fontWeight: 600, color: '#e6edf3' }}>
              Quantity (Coins)
            </label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseFloat(e.target.value) || 0)}
              step="0.01"
              style={{
                width: '100%',
                padding: '10px 12px',
                background: '#161b22',
                border: '1px solid #30363d',
                borderRadius: 6,
                color: '#e6edf3',
                fontSize: 14,
              }}
            />
          </div>
        )}

        {/* Buy Price */}
        <div>
          <label style={{ display: 'block', marginBottom: 8, fontSize: 14, fontWeight: 600, color: '#e6edf3' }}>
            Buy Price (USD)
          </label>
          <input
            type="number"
            value={buyPrice}
            onChange={(e) => setBuyPrice(parseFloat(e.target.value) || 0)}
            step="0.01"
            style={{
              width: '100%',
              padding: '10px 12px',
              background: '#161b22',
              border: '1px solid #30363d',
              borderRadius: 6,
              color: '#e6edf3',
              fontSize: 14,
            }}
          />
        </div>

        {/* Sell Price */}
        <div>
          <label style={{ display: 'block', marginBottom: 8, fontSize: 14, fontWeight: 600, color: '#e6edf3' }}>
            Sell Price (USD)
          </label>
          <input
            type="number"
            value={sellPrice}
            onChange={(e) => setSellPrice(parseFloat(e.target.value) || 0)}
            step="0.01"
            style={{
              width: '100%',
              padding: '10px 12px',
              background: '#161b22',
              border: '1px solid #30363d',
              borderRadius: 6,
              color: '#e6edf3',
              fontSize: 14,
            }}
          />
        </div>

        {/* Trading Fee */}
        <div>
          <label style={{ display: 'block', marginBottom: 8, fontSize: 14, fontWeight: 600, color: '#e6edf3' }}>
            Trading Fee (%) <span style={{ color: '#8b949e', fontWeight: 400 }}>optional</span>
          </label>
          <input
            type="number"
            value={tradingFeePercent}
            onChange={(e) => setTradingFeePercent(parseFloat(e.target.value) || 0)}
            step="0.1"
            min="0"
            max="100"
            style={{
              width: '100%',
              padding: '10px 12px',
              background: '#161b22',
              border: '1px solid #30363d',
              borderRadius: 6,
              color: '#e6edf3',
              fontSize: 14,
            }}
          />
        </div>

        {/* Tax Rate */}
        <div>
          <label style={{ display: 'block', marginBottom: 8, fontSize: 14, fontWeight: 600, color: '#e6edf3' }}>
            Tax Rate (%) <span style={{ color: '#8b949e', fontWeight: 400 }}>optional</span>
          </label>
          <input
            type="number"
            value={taxRatePercent}
            onChange={(e) => setTaxRatePercent(parseFloat(e.target.value) || 0)}
            step="0.1"
            min="0"
            max="100"
            style={{
              width: '100%',
              padding: '10px 12px',
              background: '#161b22',
              border: '1px solid #30363d',
              borderRadius: 6,
              color: '#e6edf3',
              fontSize: 14,
            }}
          />
        </div>
      </div>

      {/* Results Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 16,
        marginTop: 32,
        paddingTop: 32,
        borderTop: '1px solid #30363d',
      }}>
        <div style={{
          background: '#161b22',
          padding: 16,
          borderRadius: 8,
          border: '1px solid #30363d',
        }}>
          <div style={{ fontSize: 12, color: '#8b949e', marginBottom: 6, fontWeight: 600 }}>
            Quantity
          </div>
          <div style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3' }}>
            {calcQuantity.toFixed(6)}
          </div>
          <div style={{ fontSize: 11, color: '#8b949e', marginTop: 4 }}>coins</div>
        </div>

        <div style={{
          background: '#161b22',
          padding: 16,
          borderRadius: 8,
          border: '1px solid #30363d',
        }}>
          <div style={{ fontSize: 12, color: '#8b949e', marginBottom: 6, fontWeight: 600 }}>
            Total Cost Basis
          </div>
          <div style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3' }}>
            ${totalCostBasis.toFixed(2)}
          </div>
          <div style={{ fontSize: 11, color: '#8b949e', marginTop: 4 }}>
            {investmentAmount > 0 && `${(totalCostBasis / investmentAmount * 100).toFixed(1)}% of invested`}
          </div>
        </div>

        <div style={{
          background: '#161b22',
          padding: 16,
          borderRadius: 8,
          border: '1px solid #30363d',
        }}>
          <div style={{ fontSize: 12, color: '#8b949e', marginBottom: 6, fontWeight: 600 }}>
            Total Proceeds
          </div>
          <div style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3' }}>
            ${sellNetProceeds.toFixed(2)}
          </div>
          <div style={{ fontSize: 11, color: '#8b949e', marginTop: 4 }}>after fees</div>
        </div>

        <div style={{
          background: '#161b22',
          padding: 16,
          borderRadius: 8,
          border: '1px solid #30363d',
        }}>
          <div style={{ fontSize: 12, color: '#8b949e', marginBottom: 6, fontWeight: 600 }}>
            Trading Fees
          </div>
          <div style={{ fontSize: 18, fontWeight: 700, color: '#ff9896' }}>
            -${(buyFee + sellFee).toFixed(2)}
          </div>
          <div style={{ fontSize: 11, color: '#8b949e', marginTop: 4 }}>
            {(buyFee + sellFee > 0) && `${((buyFee + sellFee) / (buyTotal + sellTotal) * 100).toFixed(2)}%`}
          </div>
        </div>

        <div style={{
          background: '#161b22',
          padding: 16,
          borderRadius: 8,
          border: '1px solid #30363d',
        }}>
          <div style={{ fontSize: 12, color: '#8b949e', marginBottom: 6, fontWeight: 600 }}>
            Taxes Owed
          </div>
          <div style={{ fontSize: 18, fontWeight: 700, color: '#ff9896' }}>
            -${taxAmount.toFixed(2)}
          </div>
          <div style={{ fontSize: 11, color: '#8b949e', marginTop: 4 }}>
            {(taxAmount > 0) && `on ${taxRatePercent}% of gains`}
          </div>
        </div>

        <div style={{
          background: '#161b22',
          padding: 16,
          borderRadius: 8,
          border: `1px solid ${profitColor}`,
          gridColumn: 'span 1',
        }}>
          <div style={{ fontSize: 12, color: '#8b949e', marginBottom: 6, fontWeight: 600 }}>
            Net Profit/Loss
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: profitColor }}>
            {isProfit ? '+' : '-'}${Math.abs(profitAfterTax).toFixed(2)}
          </div>
          <div style={{ fontSize: 11, color: '#8b949e', marginTop: 4 }}>
            after all costs
          </div>
        </div>

        <div style={{
          background: '#161b22',
          padding: 16,
          borderRadius: 8,
          border: `1px solid ${profitColor}`,
        }}>
          <div style={{ fontSize: 12, color: '#8b949e', marginBottom: 6, fontWeight: 600 }}>
            ROI
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: profitColor }}>
            {isProfit ? '+' : '-'}{Math.abs(roi).toFixed(2)}%
          </div>
          <div style={{ fontSize: 11, color: '#8b949e', marginTop: 4 }}>
            return on investment
          </div>
        </div>

        <div style={{
          background: '#161b22',
          padding: 16,
          borderRadius: 8,
          border: `1px solid ${profitColor}`,
        }}>
          <div style={{ fontSize: 12, color: '#8b949e', marginBottom: 6, fontWeight: 600 }}>
            Gain/Loss %
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: profitColor }}>
            {isProfit ? '+' : '-'}{Math.abs(percentageGain).toFixed(2)}%
          </div>
          <div style={{ fontSize: 11, color: '#8b949e', marginTop: 4 }}>
            price movement
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div style={{
        marginTop: 24,
        padding: 16,
        background: '#161b22',
        border: '1px solid #30363d',
        borderRadius: 8,
        fontSize: 13,
        color: '#c9d1d9',
        lineHeight: 1.6,
      }}>
        <strong style={{ color: '#58a6ff' }}>How to use:</strong> Enter your investment amount (or quantity), buy and sell prices, and optional trading fees and tax rates. The calculator automatically updates all metrics including total profit/loss, ROI, and percentage gain. Trading fees apply on both buy and sell. Taxes only apply to profits.
      </div>
    </div>
  );
}
