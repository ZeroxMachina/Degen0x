'use client';

"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";

export default function CompoundStakingCalculatorPage() {
  const [amount, setAmount] = useState("10000");
  const [apy, setApy] = useState("3.5");
  const [fee, setFee] = useState("10");
  const [duration, setDuration] = useState("36");
  const [compounding, setCompounding] = useState("daily");
  const [monthlyAdd, setMonthlyAdd] = useState("0");

  const principal = Number(amount);
  const grossRate = Number(apy) / 100;
  const feeRate = Number(fee) / 100;
  const netRate = grossRate * (1 - feeRate);
  const months = Number(duration);
  const monthly = Number(monthlyAdd);

  let compFreq = 365;
  if (compounding === "weekly") compFreq = 52;
  if (compounding === "monthly") compFreq = 12;
  if (compounding === "none") compFreq = 1;

  const years = months / 12;

  // Compound calculation with regular contributions
  const ratePerPeriod = netRate / compFreq;
  const totalPeriods = compFreq * years;

  // Future value of lump sum with compounding
  const fvLumpSum = principal * Math.pow(1 + ratePerPeriod, totalPeriods);

  // Future value of periodic contributions (monthly)
  let fvContributions = 0;
  if (monthly > 0) {
    const monthlyRate = netRate / 12;
    const totalMonths = months;
    fvContributions = monthly * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);
  };

  const totalContributions = principal + monthly * months;
  const finalValue = fvLumpSum + fvContributions;
  const totalRewards = finalValue - totalContributions;

  // Simple interest comparison
  const simpleRewards = principal * netRate * years + monthly * months * netRate * (years / 2);
  const compoundingBonus = totalRewards - simpleRewards;

  // No-fee comparison
  const noFeeFinal = principal * Math.pow(1 + grossRate / compFreq, totalPeriods);
  const feeImpact = noFeeFinal - fvLumpSum;

  const hasValues = principal > 0 && grossRate > 0 && months > 0;

  // Build breakdown table
  const yearlyBreakdown: { year: number; value: number; rewards: number }[] = [];
  if (hasValues) {
    const totalYears = Math.ceil(months / 12);
    for (let y = 1; y <= totalYears; y++) {
      const yMonths = Math.min(y * 12, months);
      const yYears = yMonths / 12;
      const yPeriods = compFreq * yYears;
      const yFvLump = principal * Math.pow(1 + ratePerPeriod, yPeriods);
      let yFvContrib = 0;
      if (monthly > 0) {
        const monthlyRate = netRate / 12;
        yFvContrib = monthly * ((Math.pow(1 + monthlyRate, yMonths) - 1) / monthlyRate);
      };
      const yTotal = yFvLump + yFvContrib;
      const yContributed = principal + monthly * yMonths;
      yearlyBreakdown.push({
        year: y,
        value: yTotal,
        rewards: yTotal - yContributed,
      });
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Investing", href: "/investing" },
          { label: "Staking", href: "/investing/staking" },
          { label: "Compound Staking Calculator", href: "/investing/staking/calculators/compound-staking-calculator" },
        ]}
      />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Compound Staking Calculator</h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8">
        See how compounding supercharges your staking returns over time. Compare daily, weekly, and
        monthly compounding frequencies and add regular contributions to model your staking growth.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-1">
              Initial Stake ($)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2 text-[var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-1">
              Gross APY (%)
            </label>
            <input
              value={apy}
              onChange={(e) => setApy(e.target.value)}
              step="0.1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-1">
              Platform Fee (% of rewards)
            </label>
            <input
              value={fee}
              onChange={(e) => setFee(e.target.value)}
              step="1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-1">
              Duration (months)
            </label>
            <input
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-1">
              Compounding Frequency
            </label>
            <select
              value={compounding}
              onChange={(e) => setCompounding(e.target.value)}
            >
              <option value="daily">Daily (stETH rebasing)</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="none">No compounding (simple interest)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-1">
              Monthly Contribution ($) <span className="text-[var(--color-text-secondary)] font-normal">- optional</span>
            </label>
            <input
              value={monthlyAdd}
              onChange={(e) => setMonthlyAdd(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-4">Compound Results</h2>
            {hasValues ? (
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-[var(--color-text-secondary)]">Total Contributions</span>
                  <span className="text-sm text-[var(--color-text)]">
                    ${totalContributions.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[var(--color-text-secondary)]">Final Value</span>
                  <span className="text-sm font-semibold text-[var(--color-text)]">
                    ${finalValue.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[var(--color-text-secondary)]">Total Rewards (after fees)</span>
                  <span className="text-sm font-semibold text-[var(--color-success)]">
                    ${totalRewards.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[var(--color-text-secondary)]">Effective APY (after fees)</span>
                  <span className="text-sm text-[var(--color-text)]">{(netRate * 100).toFixed(2)}%</span>
                </div>
                <div className="border-t border-[var(--color-border)] my-2" />
                <div className="flex justify-between">
                  <span className="text-sm text-[var(--color-text-secondary)]">Compounding Bonus</span>
                  <span className="text-sm text-[var(--color-primary)]">
                    +${Math.max(0, compoundingBonus).toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[var(--color-text-secondary)]">Total Fee Impact</span>
                  <span className="text-sm text-[var(--color-danger)]">
                    -${feeImpact.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </span>
                </div>
              </div>
            ) : (
              <p className="text-sm text-[var(--color-text-secondary)]">
                Fill in the details to see your compound staking results.
              </p>
            )}
          </div>

          {/* Yearly Breakdown */}
          {hasValues && yearlyBreakdown.length > 0 && (
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
              <h2 className="text-lg font-semibold text-[var(--color-text)] mb-4">Year-by-Year Growth</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left text-xs font-semibold text-[var(--color-text-secondary)] pb-2">Year</th>
                      <th className="text-right text-xs font-semibold text-[var(--color-text-secondary)] pb-2">Value</th>
                      <th className="text-right text-xs font-semibold text-[var(--color-text-secondary)] pb-2">Rewards</th>
                    </tr>
                  </thead>
                  <tbody>
                    {yearlyBreakdown.map((row) => (
                      <tr key={row.year} className="border-t border-[var(--color-border)]/50">
                        <td className="py-2 text-sm text-[var(--color-text)]">{row.year}</td>
                        <td className="py-2 text-sm text-[var(--color-text)] text-right">
                          ${row.value.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                        </td>
                        <td className="py-2 text-sm text-[var(--color-success)] text-right">
                          +${row.rewards.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Educational Content */}
      <div className="mt-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">The Power of Compounding in Staking</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Compounding in staking occurs when your earned rewards are automatically restaked, allowing
          you to earn rewards on your rewards. Over long time periods, compounding can significantly
          boost total returns compared to simple interest.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Different staking mechanisms compound at different rates. Lido&apos;s stETH rebases daily,
          effectively compounding rewards every day. Value-accruing tokens like rETH also compound
          continuously since the exchange rate appreciates as rewards accumulate. Centralized
          platforms may compound less frequently depending on how they distribute rewards.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          Adding regular contributions amplifies the compounding effect further. Dollar-cost averaging
          into a staking position over time combines the benefits of regular investing with compound
          staking returns. Even modest monthly contributions can lead to substantial growth over
          multi-year time horizons.
        </p>
      </div>

      <p className="text-xs text-[var(--color-text-secondary)] mt-6">
        * This calculator provides estimates for educational purposes only. Actual staking rewards
        vary based on network conditions, validator performance, protocol changes, and market
        dynamics. Past yields do not guarantee future returns.
      </p>
    </div>
  );
}
