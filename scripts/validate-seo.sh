#!/bin/bash

##############################################################################
# CryptoDegen SEO Validation Script
#
# This script validates the SEO infrastructure setup and identifies issues
# Usage: bash scripts/validate-seo.sh
##############################################################################

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Counters
CHECKS_PASSED=0
CHECKS_FAILED=0
CHECKS_WARNING=0

# Helper functions
check_pass() {
  echo -e "${GREEN}✓${NC} $1"
  ((CHECKS_PASSED++))
}

check_fail() {
  echo -e "${RED}✗${NC} $1"
  ((CHECKS_FAILED++))
}

check_warn() {
  echo -e "${YELLOW}⚠${NC} $1"
  ((CHECKS_WARNING++))
}

# Header
echo -e "${BLUE}╔════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║    CryptoDegen SEO Infrastructure Validator        ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════╝${NC}"
echo ""

# Check 1: Sitemap file exists
echo -e "${BLUE}📋 Checking Sitemap Setup...${NC}"
if [ -f "src/app/sitemap.ts" ]; then
  check_pass "Sitemap file exists (src/app/sitemap.ts)"

  # Check for key elements
  if grep -q "export default function sitemap" src/app/sitemap.ts; then
    check_pass "Sitemap has default export function"
  else
    check_fail "Sitemap missing default export function"
  fi

  if grep -q "MetadataRoute.Sitemap" src/app/sitemap.ts; then
    check_pass "Sitemap uses correct TypeScript type"
  else
    check_fail "Sitemap missing MetadataRoute.Sitemap type"
  fi

  if grep -q "SITE_URL" src/app/sitemap.ts; then
    check_pass "Sitemap uses SITE_URL from constants"
  else
    check_fail "Sitemap should use SITE_URL from constants"
  fi

  if grep -q "changeFrequency" src/app/sitemap.ts; then
    check_pass "Sitemap includes changeFrequency settings"
  else
    check_fail "Sitemap should include changeFrequency"
  fi

  if grep -q "priority" src/app/sitemap.ts; then
    check_pass "Sitemap includes priority levels"
  else
    check_fail "Sitemap should include priority"
  fi
else
  check_fail "Sitemap file not found (src/app/sitemap.ts)"
fi
echo ""

# Check 2: Robots.txt file exists
echo -e "${BLUE}🤖 Checking Robots.txt Setup...${NC}"
if [ -f "src/app/robots.ts" ]; then
  check_pass "Robots.txt file exists (src/app/robots.ts)"

  if grep -q "export default function robots" src/app/robots.ts; then
    check_pass "Robots.txt has default export function"
  else
    check_fail "Robots.txt missing default export function"
  fi

  if grep -q "MetadataRoute.Robots" src/app/robots.ts; then
    check_pass "Robots.txt uses correct TypeScript type"
  else
    check_fail "Robots.txt missing MetadataRoute.Robots type"
  fi

  if grep -q "sitemap" src/app/robots.ts; then
    check_pass "Robots.txt references sitemap"
  else
    check_fail "Robots.txt should reference sitemap"
  fi
else
  check_fail "Robots.txt file not found (src/app/robots.ts)"
fi
echo ""

# Check 3: Layout metadata
echo -e "${BLUE}📱 Checking Layout Metadata...${NC}"
if [ -f "src/app/layout.tsx" ]; then
  check_pass "Layout file exists (src/app/layout.tsx)"

  if grep -q "metadataBase: new URL(SITE_URL)" src/app/layout.tsx; then
    check_pass "Layout sets metadataBase"
  else
    check_fail "Layout should set metadataBase with SITE_URL"
  fi

  if grep -q "openGraph" src/app/layout.tsx; then
    check_pass "Layout configures openGraph metadata"
  else
    check_fail "Layout should configure openGraph"
  fi

  if grep -q "twitter:" src/app/layout.tsx; then
    check_pass "Layout configures Twitter metadata"
  else
    check_fail "Layout should configure Twitter metadata"
  fi

  if grep -q "canonical" src/app/layout.tsx; then
    check_pass "Layout sets canonical URL"
  else
    check_fail "Layout should set canonical URL"
  fi

  if grep -q '"index": true' src/app/layout.tsx; then
    check_pass "Layout allows indexing (robots: index: true)"
  else
    check_warn "Layout should allow indexing"
  fi
else
  check_fail "Layout file not found (src/app/layout.tsx)"
fi
echo ""

# Check 4: Constants file
echo -e "${BLUE}⚙️  Checking Constants...${NC}"
if [ -f "src/lib/constants.ts" ]; then
  check_pass "Constants file exists (src/lib/constants.ts)"

  if grep -q "SITE_URL" src/lib/constants.ts; then
    check_pass "Constants exports SITE_URL"
  else
    check_fail "Constants should export SITE_URL"
  fi

  if grep -q "SITE_NAME" src/lib/constants.ts; then
    check_pass "Constants exports SITE_NAME"
  else
    check_fail "Constants should export SITE_NAME"
  fi

  if grep -q "SITE_DESCRIPTION" src/lib/constants.ts; then
    check_pass "Constants exports SITE_DESCRIPTION"
  else
    check_fail "Constants should export SITE_DESCRIPTION"
  fi
else
  check_fail "Constants file not found (src/lib/constants.ts)"
fi
echo ""

# Check 5: Next.js configuration
echo -e "${BLUE}⚡ Checking Next.js Configuration...${NC}"
if [ -f "next.config.ts" ]; then
  check_pass "next.config.ts exists"

  if grep -q '"export"' next.config.ts; then
    check_pass "Output set to 'export' for static generation"
  else
    check_warn "Output should be set to 'export' for static hosting"
  fi

  if grep -q "trailingSlash" next.config.ts; then
    check_pass "trailingSlash configured"
  else
    check_warn "trailingSlash should be configured for consistency"
  fi
else
  check_fail "next.config.ts not found"
fi
echo ""

# Check 6: OG Image
echo -e "${BLUE}🖼️  Checking Open Graph Image...${NC}"
if [ -f "public/og-image.png" ] || [ -f "public/og-image.jpg" ]; then
  check_pass "OG image exists (public/og-image.*)"
else
  check_warn "OG image not found - create public/og-image.png (1200x630px) for social sharing"
fi
echo ""

# Check 7: JSON-LD Schema
echo -e "${BLUE}📊 Checking Structured Data...${NC}"
if grep -q "@context.*schema.org" src/app/layout.tsx; then
  check_pass "Layout includes JSON-LD structured data"
else
  check_warn "Layout should include JSON-LD schema.org data"
fi
echo ""

# Check 8: Page count in sitemap
echo -e "${BLUE}📄 Checking Sitemap Routes...${NC}"
ROUTE_COUNT=$(grep -o '"/[^"]*"' src/app/sitemap.ts | wc -l)
if [ "$ROUTE_COUNT" -gt 0 ]; then
  check_pass "Sitemap contains ~$ROUTE_COUNT routes"
  if [ "$ROUTE_COUNT" -gt 2000 ]; then
    check_pass "Sitemap is comprehensive (2,000+ pages)"
  elif [ "$ROUTE_COUNT" -gt 1000 ]; then
    check_warn "Sitemap has $ROUTE_COUNT routes - consider adding more"
  fi
else
  check_fail "Could not determine route count in sitemap"
fi
echo ""

# Summary
echo -e "${BLUE}╔════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║                    SUMMARY                         ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════╝${NC}"
echo -e "${GREEN}Passed: ${CHECKS_PASSED}${NC}"
echo -e "${YELLOW}Warnings: ${CHECKS_WARNING}${NC}"
echo -e "${RED}Failed: ${CHECKS_FAILED}${NC}"
echo ""

# Exit code based on failures
if [ $CHECKS_FAILED -eq 0 ]; then
  echo -e "${GREEN}✓ SEO infrastructure validation passed!${NC}"
  echo ""
  echo "Next steps:"
  echo "1. Build the project: npm run build"
  echo "2. Test sitemap at: http://localhost:3000/sitemap.xml"
  echo "3. Test robots.txt at: http://localhost:3000/robots.txt"
  echo "4. Create OG image: public/og-image.png (1200x630px)"
  echo "5. Deploy to production"
  exit 0
else
  echo -e "${RED}✗ Please fix the above issues before deploying${NC}"
  exit 1
fi
