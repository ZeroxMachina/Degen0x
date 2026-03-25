export default function CoursesLoading() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Breadcrumb skeleton */}
      <div className="flex items-center gap-2 mb-6">
        <div style={{ background: 'var(--color-border)', width: 48, height: 14, borderRadius: 4 }} className="animate-pulse" />
        <div style={{ background: 'var(--color-border)', width: 8, height: 14, borderRadius: 4 }} className="animate-pulse" />
        <div style={{ background: 'var(--color-border)', width: 48, height: 14, borderRadius: 4 }} className="animate-pulse" />
        <div style={{ background: 'var(--color-border)', width: 8, height: 14, borderRadius: 4 }} className="animate-pulse" />
        <div style={{ background: 'var(--color-border)', width: 64, height: 14, borderRadius: 4 }} className="animate-pulse" />
      </div>

      {/* Title skeleton */}
      <div style={{ background: 'var(--color-border)', width: 320, height: 36, borderRadius: 8 }} className="animate-pulse mb-3" />
      <div style={{ background: 'var(--color-border)', width: 480, height: 16, borderRadius: 6 }} className="animate-pulse mb-8" />

      {/* Course cards skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 'var(--glass-radius-sm)', padding: 24 }}>
            <div style={{ background: 'var(--color-border)', width: 48, height: 48, borderRadius: 12 }} className="animate-pulse mb-4" />
            <div style={{ background: 'var(--color-border)', width: '75%', height: 20, borderRadius: 6 }} className="animate-pulse mb-3" />
            <div style={{ background: 'var(--color-border)', width: '100%', height: 12, borderRadius: 4 }} className="animate-pulse mb-2" />
            <div style={{ background: 'var(--color-border)', width: '90%', height: 12, borderRadius: 4 }} className="animate-pulse mb-4" />
            <div className="flex gap-2">
              <div style={{ background: 'var(--color-border)', width: 60, height: 24, borderRadius: 12 }} className="animate-pulse" />
              <div style={{ background: 'var(--color-border)', width: 48, height: 24, borderRadius: 12 }} className="animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
