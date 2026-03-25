export default function CryptoInheritancePlanningLoading() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '40px 20px 80px' }}>
        {/* Breadcrumb skeleton */}
        <div className="flex items-center gap-2 mb-6">
          <div style={{ background: 'var(--color-border)', width: 48, height: 14, borderRadius: 4 }} className="animate-pulse" />
          <div style={{ background: 'var(--color-border)', width: 8, height: 14, borderRadius: 4 }} className="animate-pulse" />
          <div style={{ background: 'var(--color-border)', width: 48, height: 14, borderRadius: 4 }} className="animate-pulse" />
          <div style={{ background: 'var(--color-border)', width: 8, height: 14, borderRadius: 4 }} className="animate-pulse" />
          <div style={{ background: 'var(--color-border)', width: 140, height: 14, borderRadius: 4 }} className="animate-pulse" />
        </div>

        {/* Category badges skeleton */}
        <div className="flex gap-3 mb-5">
          <div style={{ background: 'var(--color-border)', width: 100, height: 30, borderRadius: 6 }} className="animate-pulse" />
          <div style={{ background: 'var(--color-border)', width: 72, height: 30, borderRadius: 6 }} className="animate-pulse" />
          <div style={{ background: 'var(--color-border)', width: 120, height: 30, borderRadius: 6 }} className="animate-pulse" />
        </div>

        {/* Title skeleton */}
        <div style={{ background: 'var(--color-border)', width: '90%', height: 40, borderRadius: 8 }} className="animate-pulse mb-3" />
        <div style={{ background: 'var(--color-border)', width: '60%', height: 40, borderRadius: 8 }} className="animate-pulse mb-8" />

        {/* Meta info skeleton */}
        <div style={{ background: 'var(--color-border)', width: 280, height: 14, borderRadius: 4, marginBottom: 40, paddingBottom: 24, borderBottomWidth: 1 }} className="animate-pulse" />

        {/* Table of Contents skeleton */}
        <div style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 12, padding: 24, marginBottom: 40 }}>
          <div style={{ background: 'var(--color-border)', width: 140, height: 18, borderRadius: 4 }} className="animate-pulse mb-4" />
          {[1,2,3,4,5,6,7].map(i => (
            <div key={i} style={{ background: 'var(--color-border)', width: `${60 + Math.random() * 30}%`, height: 14, borderRadius: 4 }} className="animate-pulse mb-3" />
          ))}
        </div>

        {/* Content section skeletons */}
        {[1,2,3].map(section => (
          <div key={section} style={{ marginBottom: 48 }}>
            <div style={{ background: 'var(--color-border)', width: '70%', height: 28, borderRadius: 6, marginBottom: 24, paddingBottom: 16 }} className="animate-pulse" />
            {[1,2,3].map(p => (
              <div key={p} style={{ marginBottom: 16 }}>
                <div style={{ background: 'var(--color-border)', width: '100%', height: 14, borderRadius: 4 }} className="animate-pulse mb-2" />
                <div style={{ background: 'var(--color-border)', width: '95%', height: 14, borderRadius: 4 }} className="animate-pulse mb-2" />
                <div style={{ background: 'var(--color-border)', width: '80%', height: 14, borderRadius: 4 }} className="animate-pulse" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
