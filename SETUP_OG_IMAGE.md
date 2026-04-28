# Setup Open Graph Image for CryptoDegen

## Quick Setup

### Option 1: Using External Design (Recommended)

1. **Create Image Using Design Tool**
   - Canva: https://www.canva.com/ (free account)
   - Figma: https://www.figma.com/ (free account)
   - Size: **1200x630 pixels**
   - Format: PNG or JPG

2. **Design Requirements**
   - Include CryptoDegen logo/branding
   - Add tagline: "The NerdWallet of Crypto"
   - Incorporate crypto theme (Bitcoin, Ethereum symbols)
   - Use consistent brand colors
   - Ensure text is readable at small sizes
   - Professional appearance for social sharing

3. **Save & Place**
   ```bash
   # Save image as og-image.png
   cp ~/Downloads/og-image.png ./public/og-image.png
   ```

### Option 2: Using Next.js Image Generation (Dynamic)

Create a dynamic OG image generator endpoint:

```typescript
// src/app/api/og/route.tsx
import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        CryptoDegen
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
```

Then update layout.tsx:
```typescript
openGraph: {
  images: [
    {
      url: `${SITE_URL}/api/og`,
      width: 1200,
      height: 630,
    },
  ],
}
```

### Option 3: Using Community Resources

Free OG image templates:
- OpenPeeps: https://www.openpeeps.com/
- Undraw: https://undraw.co/
- Hero Icons: https://heroicons.com/
- System UIcons: https://www.systemuicons.com/

---

## Testing Your OG Image

### Step 1: Verify File Exists
```bash
ls -la public/og-image.png
# Should show: public/og-image.png (size should be reasonable, < 500KB)
```

### Step 2: Build & Test Locally
```bash
npm run build
npm run start

# Visit http://localhost:3000 and check source for og image meta tag
```

### Step 3: Use Online Debuggers

**Open Graph Debugger**
1. Go to: https://www.opengraphcheck.com/
2. Enter: `https://cryptodegen.com`
3. Verify image appears in preview

**Twitter Card Validator**
1. Go to: https://cards-dev.twitter.com/validator
2. Enter: `https://cryptodegen.com`
3. Check preview with image

**LinkedIn Inspector**
1. Go to: https://www.linkedin.com/post-inspector/
2. Enter: `https://cryptodegen.com`
3. Verify thumbnail preview

---

## Per-Category OG Images (Advanced)

For better engagement, create category-specific images:

```typescript
// src/app/exchanges/layout.tsx
export const metadata: Metadata = {
  openGraph: {
    images: [
      {
        url: `${SITE_URL}/og-images/exchanges.png`,
        width: 1200,
        height: 630,
        alt: 'Best Crypto Exchanges',
      },
    ],
  },
};
```

**Image locations to create:**
- `/public/og-images/exchanges.png`
- `/public/og-images/wallets.png`
- `/public/og-images/learn.png`
- `/public/og-images/tools.png`
- `/public/og-images/defi.png`
- `/public/og-images/cards.png`
- `/public/og-images/investing.png`

---

## Automated OG Image Generation

Use Vercel's `@vercel/og` for dynamic social images:

```bash
npm install @vercel/og
```

Create handler:
```typescript
// src/app/api/og/[route]/route.tsx
import { ImageResponse } from '@vercel/og';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const route = searchParams.get('route') || 'exchanges';

  const titles: Record<string, string> = {
    exchanges: 'Best Crypto Exchanges',
    wallets: 'Best Crypto Wallets',
    learn: 'Learn Crypto',
    tools: 'Crypto Tools',
  };

  return new ImageResponse(
    (
      <div style={{
        fontSize: '72px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        width: '1200px',
        height: '630px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontWeight: 'bold',
      }}>
        <div style={{ fontSize: '96px', marginBottom: '20px' }}>🚀</div>
        {titles[route] || 'CryptoDegen'}
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
```

---

## Troubleshooting

### Image not appearing in social previews?

**Check 1: File Path**
```bash
# Verify file exists
ls -la public/og-image.png

# Verify file is accessible
curl https://cryptodegen.com/og-image.png -I
# Should return HTTP 200
```

**Check 2: Build Output**
```bash
# Rebuild to include new assets
rm -rf .next out
npm run build

# Check output directory
ls -la out/og-image.png
```

**Check 3: Meta Tag Rendering**
```bash
# Check page source contains OG tags
curl https://cryptodegen.com | grep "og:image"
# Should show: <meta property="og:image" content="...">
```

**Check 4: Cache Issues**
- Clear social platform cache
- Wait 24 hours for CDN cache to update
- Use debuggers with "refresh cache" option

### File size too large?

Optimize using:
```bash
# Using ImageMagick
convert og-image.png -quality 85 og-image-optimized.png

# Using TinyPNG online
# https://tinypng.com/

# Size recommendation: < 500KB for fast loading
```

---

## Best Practices

✅ **DO:**
- Keep file size under 500KB
- Use readable fonts and contrast
- Include brand colors
- Test across platforms (Facebook, Twitter, LinkedIn)
- Use consistent dimensions (1200x630)
- Add alt text to images
- Update images quarterly

❌ **DON'T:**
- Use text that's too small
- Make images too complex
- Use animated GIFs (not supported everywhere)
- Forget to test on mobile
- Ignore aspect ratio
- Use images with poor compression

---

## Files to Update After Creating OG Image

1. **Uncomment in layout.tsx:**
   ```typescript
   openGraph: {
     images: [
       {
         url: `${SITE_URL}/og-image.png`,
         width: 1200,
         height: 630,
         alt: `${SITE_NAME} - The NerdWallet of Crypto`,
         type: "image/png",
       },
     ],
   }

   twitter: {
     image: `${SITE_URL}/og-image.png`,
   }
   ```

2. **Rebuild:**
   ```bash
   npm run build
   npm run start
   ```

3. **Deploy and test with debuggers**

---

## Further Reading

- OpenGraph Protocol: https://ogp.me/
- Twitter Cards: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards
- Next.js Image Optimization: https://nextjs.org/docs/app/building-your-application/optimizing/images
- SEO Best Practices: https://developers.google.com/search/docs
