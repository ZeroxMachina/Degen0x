'use client';

export function CardSkeleton({ height = 200 }: { height?: number }) {
  return (
    <div className="animate-pulse rounded-xl bg-[#161b22] border border-[#30363d]" style={{ height }}>
      <div className="p-6 space-y-4">
        <div className="h-4 bg-[#21262d] rounded w-1/3" />
        <div className="h-3 bg-[#21262d] rounded w-2/3" />
        <div className="h-3 bg-[#21262d] rounded w-1/2" />
        <div className="flex gap-3 mt-4">
          <div className="h-8 bg-[#21262d] rounded flex-1" />
          <div className="h-8 bg-[#21262d] rounded flex-1" />
          <div className="h-8 bg-[#21262d] rounded flex-1" />
        </div>
      </div>
    </div>
  );
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="animate-pulse rounded-xl bg-[#161b22] border border-[#30363d] p-6">
      <div className="h-4 bg-[#21262d] rounded w-1/4 mb-6" />
      <div className="space-y-3">
        {Array.from({ length: rows }, (_, i) => (
          <div key={i} className="flex gap-4 items-center">
            <div className="h-3 bg-[#21262d] rounded w-8" />
            <div className="h-3 bg-[#21262d] rounded flex-1" />
            <div className="h-3 bg-[#21262d] rounded w-20" />
            <div className="h-3 bg-[#21262d] rounded w-16" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ChartSkeleton() {
  return (
    <div className="animate-pulse rounded-xl bg-[#161b22] border border-[#30363d] p-6" style={{ height: 300 }}>
      <div className="h-4 bg-[#21262d] rounded w-1/4 mb-4" />
      <div className="flex items-end gap-1 h-48">
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className="bg-[#21262d] rounded-t flex-1" style={{ height: `${20 + Math.random() * 80}%` }} />
        ))}
      </div>
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="animate-pulse py-20 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="h-12 bg-[#21262d] rounded w-3/4 mx-auto" />
        <div className="h-6 bg-[#21262d] rounded w-1/2 mx-auto" />
        <div className="flex gap-4 justify-center">
          <div className="h-12 bg-[#21262d] rounded w-40" />
          <div className="h-12 bg-[#21262d] rounded w-40" />
        </div>
      </div>
    </div>
  );
}
