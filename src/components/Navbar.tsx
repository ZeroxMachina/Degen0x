import Link from 'next/link';

export default function Navbar() {
  const navItems = [
    { label: 'Exchanges', href: '/exchanges' },
    { label: 'Wallets', href: '/wallets' },
    { label: 'DeFi', href: '/defi-lending' },
    { label: 'Staking', href: '/staking' },
    { label: 'Learn', href: '/learn' },
    { label: 'Tools', href: '/tools' },
    { label: 'Compare', href: '/compare' },
    { label: 'NFTs', href: '/nfts' },
    { label: 'Prices', href: '/prices' },
    { label: 'News', href: '/news' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        backgroundColor: '#0d1117',
        borderBottom: '1px solid #30363d',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          padding: '1rem 1.5rem',
          overflow: 'hidden',
        }}
      >
        {/* Logo/Brand */}
        <Link
          href="/"
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#58a6ff',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          degen0x
        </Link>

        {/* Navigation Links Container */}
        <div
          style={{
            display: 'flex',
            gap: '1.5rem',
            overflowX: 'auto',
            overflowY: 'hidden',
            flex: 1,
            paddingRight: '1rem',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            msOverflowStyle: '-ms-autohiding-scrollbar',
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                color: '#e6edf3',
                textDecoration: 'none',
                fontSize: '0.95rem',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                padding: '0.5rem 0',
                borderBottom: '2px solid transparent',
                transition: 'color 0.2s ease, border-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#58a6ff';
                e.currentTarget.style.borderBottomColor = '#58a6ff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#e6edf3';
                e.currentTarget.style.borderBottomColor = 'transparent';
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
