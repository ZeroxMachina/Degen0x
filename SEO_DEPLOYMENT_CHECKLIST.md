# CryptoDegen SEO Deployment Checklist

## Pre-Deployment Checklist

### Code Quality
- [ ] No TypeScript errors: `npx tsc --noEmit`
- [ ] No linting errors: `npm run lint` (if configured)
- [ ] No build warnings: `npm run build`
- [ ] All SEO files are present:
  - [ ] `src/app/sitemap.ts`
  - [ ] `src/app/robots.ts`
  - [ ] `src/app/layout.tsx`

### SEO Validation
- [ ] Run validation script: `bash scripts/validate-seo.sh`
- [ ] All checks pass (except OG image if not created)
- [ ] Sitemap contains 2,275+ routes
- [ ] No broken import statements
- [ ] SITE_URL constant is correct

### Build Testing
- [ ] Clean build: `rm -rf .next out && npm run build`
- [ ] Build completes without errors
- [ ] Build time is reasonable (< 2 minutes)
- [ ] Output directory exists:
  - [ ] `.next/` or `out/` directory present
  - [ ] `sitemap.xml` file generated (122KB)
  - [ ] `robots.txt` file generated

### Local Testing
- [ ] Start local server: `npm run start`
- [ ] Test sitemap:
  ```bash
  curl http://localhost:3000/sitemap.xml | head -50
  ```
  Should show: `<url><loc>https://cryptodegen.com/</loc>...`
- [ ] Test robots.txt:
  ```bash
  curl http://localhost:3000/robots.txt
  ```
  Should show: `User-agent: * / Allow: /`
- [ ] Test homepage loads: `http://localhost:3000`
- [ ] Check meta tags in page source:
  ```bash
  curl http://localhost:3000 | grep -E "og:|twitter:|canonical"
  ```

### Configuration
- [ ] `next.config.ts` has `output: "export"`
- [ ] `next.config.ts` has `trailingSlash: true`
- [ ] `src/lib/constants.ts` has correct `SITE_URL`
- [ ] `src/lib/constants.ts` has `SITE_NAME`
- [ ] `src/lib/constants.ts` has `SITE_DESCRIPTION`

### Optional: OG Image
- [ ] (Optional) Create `public/og-image.png` (1200x630px)
  - Recommended: Use Canva or Figma
  - See: `SETUP_OG_IMAGE.md`
- [ ] (Optional) If created, uncomment OG image code in `layout.tsx`
- [ ] (Optional) Test OG image:
  - [ ] File exists: `ls -la public/og-image.png`
  - [ ] File size reasonable: < 500KB
  - [ ] Test with: https://www.opengraphcheck.com/

---

## Deployment Checklist

### Pre-Deploy Review
- [ ] All pre-deployment checks passed
- [ ] Ready for production deployment
- [ ] Backup current production (if updating)

### Deploy to Your Platform

#### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel deploy --prod
```
- [ ] Deploy command executed
- [ ] URL provided: `https://...`
- [ ] Build completes on Vercel

#### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=.next/standalone
```
- [ ] Deploy command executed
- [ ] URL provided: `https://...`

#### AWS S3 + CloudFront
```bash
# Build
npm run build

# Upload to S3 (replace bucket name)
aws s3 sync out/ s3://your-bucket-name/ --delete

# Invalidate CloudFront (replace distribution ID)
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```
- [ ] Build created
- [ ] Files uploaded to S3
- [ ] CloudFront cache invalidated

#### Other Hosting
- [ ] Build project: `npm run build`
- [ ] Upload contents of `out/` or `.next/standalone/`
- [ ] Set correct Node.js version (16+) if needed
- [ ] Deploy complete

### Post-Deploy Verification
- [ ] Site loads: Visit `https://cryptodegen.com`
- [ ] Homepage renders: `https://cryptodegen.com/`
- [ ] Sitemap accessible: `https://cryptodegen.com/sitemap.xml`
- [ ] Robots.txt accessible: `https://cryptodegen.com/robots.txt`
- [ ] Meta tags present: Check page source for `og:` tags
- [ ] No 404 errors: Check browser console
- [ ] Mobile responsive: Test on mobile device

---

## Google Search Console Setup

### Step 1: Add Property
- [ ] Go to: https://search.google.com/search-console
- [ ] Click "Add property"
- [ ] Choose "URL prefix"
- [ ] Enter: `https://cryptodegen.com`
- [ ] Verify ownership (DNS, HTML file, or Google Tag Manager)

### Step 2: Submit Sitemap
- [ ] In GSC, go to "Sitemaps"
- [ ] Click "Add sitemaps"
- [ ] Enter: `https://cryptodegen.com/sitemap.xml`
- [ ] Wait for "Parsing successful" message

### Step 3: Check Robots.txt
- [ ] In GSC, go to "Index coverage"
- [ ] Verify no crawl errors
- [ ] Check "Coverage" report

### Step 4: Monitor
- [ ] Wait 24-48 hours for initial crawl
- [ ] Check "Coverage" for indexed pages
- [ ] Review "Performance" for impressions
- [ ] Check "Mobile usability" report

---

## Social Media Testing

### Open Graph (All Platforms)
- [ ] Test with: https://www.opengraphcheck.com/
- [ ] Verify title appears
- [ ] Verify description appears
- [ ] (If OG image created) Verify image appears

### Twitter
- [ ] Test with: https://cards-dev.twitter.com/validator
- [ ] Verify preview appears
- [ ] Verify image shows (if created)
- [ ] Try tweeting link to verify preview

### Facebook
- [ ] Share link on Facebook
- [ ] Verify preview appears
- [ ] Verify image appears (if created)
- [ ] Check "Debugger" for any warnings

### LinkedIn
- [ ] Test with: https://www.linkedin.com/post-inspector/
- [ ] Verify preview
- [ ] Try posting to verify live preview

### Telegram, WhatsApp, Discord
- [ ] Share link in each platform
- [ ] Verify preview appears correctly

---

## Performance Monitoring

### Google PageSpeed Insights
- [ ] Go to: https://pagespeed.web.dev/
- [ ] Test `https://cryptodegen.com`
- [ ] Review Core Web Vitals:
  - [ ] LCP (Largest Contentful Paint): < 2.5s
  - [ ] FID (First Input Delay): < 100ms
  - [ ] CLS (Cumulative Layout Shift): < 0.1
- [ ] Mobile score target: > 80
- [ ] Desktop score target: > 90

### Google Search Console
- [ ] Monitor "Core Web Vitals"
- [ ] Track "Performance" metrics
- [ ] Check "Coverage" report monthly
- [ ] Review "Enhancement" reports

### Monitoring Services (Optional)
- [ ] Datadog: https://www.datadoghq.com/
- [ ] New Relic: https://newrelic.com/
- [ ] Sentry: https://sentry.io/

---

## Monthly Maintenance

### Week 1: Review Google Search Console
- [ ] Check "Coverage" for issues
- [ ] Review "Performance" metrics
- [ ] Check "Mobile usability"
- [ ] Look for "Core Web Vitals" issues

### Week 2: Content Review
- [ ] Check top 10 performing pages
- [ ] Verify no broken links
- [ ] Review for outdated information
- [ ] Plan content updates

### Week 3: Technical Audit
- [ ] Check 404 errors
- [ ] Review crawl errors
- [ ] Verify SSL certificate
- [ ] Check server response times

### Week 4: SEO Analysis
- [ ] Review keywords ranking
- [ ] Check backlink profile
- [ ] Monitor competitor activity
- [ ] Plan keyword improvements

---

## Quarterly Maintenance

### Q1/Q2/Q3/Q4 Full Audit
- [ ] Full site crawl with Screaming Frog
- [ ] Run Lighthouse audit
- [ ] Check all meta descriptions
- [ ] Verify all OG tags
- [ ] Review internal linking
- [ ] Check for duplicate content
- [ ] Verify XML sitemaps
- [ ] Update robots.txt if needed

### Content Updates
- [ ] Update stale content
- [ ] Add new pages to sitemap
- [ ] Update meta descriptions
- [ ] Refresh images
- [ ] Update publish dates

### Link Audit
- [ ] Review backlinks
- [ ] Check for toxic links
- [ ] Monitor competitor backlinks
- [ ] Identify new linking opportunities

---

## Issues & Fixes

### If Pages Not Appearing in Search Results

Check in order:
1. [ ] Pages exist in sitemap (sitemap.xml)
2. [ ] Robots.txt not blocking the page
3. [ ] Page has proper title and description
4. [ ] Page is not canonicalized to another page
5. [ ] No robots meta tag preventing indexing
6. [ ] Check Google Search Console for errors
7. [ ] Check Core Web Vitals aren't too poor
8. [ ] Manual request indexing in GSC

### If Sitemap Not Being Crawled

Check in order:
1. [ ] Sitemap accessible: `https://cryptodegen.com/sitemap.xml`
2. [ ] Robots.txt references correct URL
3. [ ] Submit manually in Google Search Console
4. [ ] Check XML syntax (use XML validator)
5. [ ] Check sitemap doesn't exceed 50MB
6. [ ] Check URL count not over 50,000 (or split into multiple)

### If Build Fails

1. [ ] Check Node.js version: `node --version` (should be 16+)
2. [ ] Clear cache: `rm -rf node_modules .next out`
3. [ ] Reinstall: `npm install`
4. [ ] Check for TypeScript errors: `npx tsc --noEmit`
5. [ ] Check for import errors
6. [ ] Review error message carefully

### If OG Image Not Showing

1. [ ] File exists: `ls -la public/og-image.png`
2. [ ] File is < 500KB
3. [ ] Uncommented in layout.tsx
4. [ ] SITE_URL is correct
5. [ ] Rebuilt project: `npm run build`
6. [ ] Use OG debugger to validate
7. [ ] Clear social platform cache

---

## Rollback Plan (If Needed)

If issues arise after deployment:

1. [ ] Identify the issue
2. [ ] Prepare fix locally
3. [ ] Test fix thoroughly
4. [ ] Rebuild: `npm run build`
5. [ ] Deploy fix
6. [ ] Verify deployment
7. [ ] Monitor for 24 hours

### Fast Rollback
If critical issue:
1. [ ] Revert to previous production version
2. [ ] Monitor site
3. [ ] Create fix
4. [ ] Redeploy when ready

---

## Documentation & Notes

### Keep Updated
- [ ] Document any custom configurations
- [ ] Update SITE_URL if domain changes
- [ ] Update meta descriptions if needed
- [ ] Document any deviations from setup

### Team Communication
- [ ] Notify team of deployment
- [ ] Share this checklist with team
- [ ] Document any special considerations
- [ ] Share Google Search Console access

### Backups
- [ ] Keep backup of previous version
- [ ] Document deployment date
- [ ] Keep deployment logs
- [ ] Version control all changes

---

## Sign-Off

- [ ] All checks completed
- [ ] Ready for production
- [ ] Deployment approved by: ________________
- [ ] Date: ________________
- [ ] Deployed by: ________________
- [ ] Deployment date: ________________
- [ ] Time deployed: ________________

---

## Support Resources

- **Quick Help**: `SEO_README.md`
- **Detailed Guide**: `SEO_INFRASTRUCTURE.md`
- **OG Image Setup**: `SETUP_OG_IMAGE.md`
- **Validation Script**: `bash scripts/validate-seo.sh`
- **Google SEO Guide**: https://developers.google.com/search/docs
- **Next.js Docs**: https://nextjs.org/docs/app/api-reference/file-conventions/metadata

---

Good luck with your deployment! 🚀
