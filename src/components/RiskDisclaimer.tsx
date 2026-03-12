import Link from "next/link";

interface RiskDisclaimerProps {
  variant?: "default" | "investing" | "tools" | "tax" | "defi";
}

const MESSAGES: Record<NonNullable<RiskDisclaimerProps["variant"]>, string> = {
  default:
    "Cryptocurrency investments are highly volatile and carry significant risk. The content on this page is for informational purposes only and does not constitute financial, investment, legal, or tax advice. Always conduct your own research (DYOR) and consult a qualified financial advisor before making any investment decisions. Never invest more than you can afford to lose.",
  investing:
    "Past performance is not indicative of future results. Cryptocurrency markets are highly volatile. All investment information on this page is for educational purposes only and is not personalized financial advice. Consult a licensed financial advisor before investing. Capital is at risk.",
  tools:
    "Results from this tool are estimates based on the inputs provided and do not guarantee actual returns. Cryptocurrency markets change rapidly. This tool does not constitute financial advice. Always verify calculations independently and consult a qualified advisor.",
  tax:
    "Tax rules for cryptocurrency vary by jurisdiction and change frequently. This tool provides general estimates for informational purposes only and is not tax advice. Consult a licensed tax professional or CPA for advice specific to your situation.",
  defi:
    "DeFi protocols involve smart contract risk, liquidity risk, and impermanent loss. Rates and yields shown are estimates and can change at any time. This information is not financial advice. Always audit protocol documentation and understand the risks before depositing funds.",
};

export default function RiskDisclaimer({ variant = "default" }: RiskDisclaimerProps) {
  return (
    <aside
      role="note"
      aria-label="Risk disclaimer"
      className="my-6 rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-3"
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 shrink-0 text-amber-500" aria-hidden="true">
          ⚠
        </span>
        <p className="text-xs leading-relaxed text-[var(--color-text-secondary)]">
          <strong className="font-semibold text-amber-500/90">Disclaimer: </strong>
          {MESSAGES[variant]}{" "}
          <Link
            href="/methodology"
            className="underline underline-offset-2 hover:text-[var(--color-text)] transition-colors"
          >
            See our methodology
          </Link>
          {" and "}
          <Link
            href="/terms"
            className="underline underline-offset-2 hover:text-[var(--color-text)] transition-colors"
          >
            terms of use
          </Link>
          .
        </p>
      </div>
    </aside>
  );
}
