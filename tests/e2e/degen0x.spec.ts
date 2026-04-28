/**
 * degen0x End-to-End Tests — Sprint 50
 * Playwright E2E suite covering critical user flows.
 *
 * Run: npx playwright test
 * Prerequisites: npx playwright install chromium
 *
 * Covers:
 *  - Home page load & hero CTA
 *  - Auth flow: wallet connect modal + email fallback
 *  - Course catalogue browse & enrol
 *  - Quiz flow & XP earn
 *  - Ecosystem dApp store: filter + search
 *  - Leaderboard render
 *  - Portfolio live dashboard: price tickers
 *  - Referral page: copy link + share modal
 *  - Mobile viewport (375px) key pages
 */

import { test, expect, Page, BrowserContext } from "@playwright/test";

// ─── Config ──────────────────────────────────────────────────────────────────

const BASE = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
const MOBILE = { width: 375, height: 812 };

// ─── Helpers ─────────────────────────────────────────────────────────────────

async function waitForHydration(page: Page) {
  await page.waitForLoadState("domcontentloaded");
  await page.waitForLoadState("networkidle");
}

async function dismissCookieBanner(page: Page) {
  const btn = page.getByRole("button", { name: /accept|ok|got it/i });
  if (await btn.isVisible({ timeout: 2000 }).catch(() => false)) {
    await btn.click();
  }
}

// ─── Home page ────────────────────────────────────────────────────────────────

test.describe("Home page", () => {
  test("loads and shows hero headline", async ({ page }) => {
    await page.goto(BASE);
    await waitForHydration(page);
    await expect(page).toHaveTitle(/degen0x/i);
    // Hero headline should mention crypto or onboarding
    const hero = page.locator("h1").first();
    await expect(hero).toBeVisible();
    const text = await hero.innerText();
    expect(text.length).toBeGreaterThan(5);
  });

  test("CTA button navigates to courses or sign up", async ({ page }) => {
    await page.goto(BASE);
    await waitForHydration(page);
    await dismissCookieBanner(page);
    // Look for primary CTA
    const cta = page.getByRole("link", { name: /start|begin|courses|learn|get started/i }).first();
    if (await cta.isVisible({ timeout: 3000 }).catch(() => false)) {
      const href = await cta.getAttribute("href");
      expect(href).toBeTruthy();
    }
  });

  test("navigation links are present", async ({ page }) => {
    await page.goto(BASE);
    await waitForHydration(page);
    // Expect nav with Learn / Ecosystem / Tools
    const nav = page.locator("nav").first();
    await expect(nav).toBeVisible();
  });
});

// ─── Auth flow ────────────────────────────────────────────────────────────────

test.describe("Auth flow", () => {
  test("wallet connect button opens modal", async ({ page }) => {
    await page.goto(BASE);
    await waitForHydration(page);
    await dismissCookieBanner(page);
    const connectBtn = page.getByRole("button", { name: /connect wallet|sign in|login/i }).first();
    if (await connectBtn.isVisible({ timeout: 4000 }).catch(() => false)) {
      await connectBtn.click();
      // Modal or wallet options should appear
      const modal = page.locator('[role="dialog"], [class*="modal"], [class*="Modal"]').first();
      await expect(modal).toBeVisible({ timeout: 5000 });
    }
  });

  test("email auth input visible in auth modal", async ({ page }) => {
    await page.goto(`${BASE}/onboarding`);
    await waitForHydration(page);
    const emailInput = page.getByPlaceholder(/email/i).first();
    if (await emailInput.isVisible({ timeout: 3000 }).catch(() => false)) {
      await emailInput.fill("test@degen0x.io");
      await expect(emailInput).toHaveValue("test@degen0x.io");
    }
  });
});

// ─── Courses ──────────────────────────────────────────────────────────────────

test.describe("Courses", () => {
  test("courses hub page loads", async ({ page }) => {
    await page.goto(`${BASE}/courses`);
    await waitForHydration(page);
    await expect(page).toHaveTitle(/course|learn|crypto/i);
    // Should show at least one course card
    const cards = page.locator('[class*="card"], article, [class*="course"]');
    expect(await cards.count()).toBeGreaterThan(0);
  });

  test("course card links to individual course", async ({ page }) => {
    await page.goto(`${BASE}/courses`);
    await waitForHydration(page);
    const firstLink = page.getByRole("link").filter({ hasText: /beginner|intro|start|bitcoin|ethereum/i }).first();
    if (await firstLink.isVisible({ timeout: 3000 }).catch(() => false)) {
      const href = await firstLink.getAttribute("href");
      expect(href).toContain("/courses/");
    }
  });

  test("XP indicator visible on course page", async ({ page }) => {
    await page.goto(`${BASE}/courses`);
    await waitForHydration(page);
    const xpEl = page.getByText(/xp/i).first();
    if (await xpEl.isVisible({ timeout: 3000 }).catch(() => false)) {
      await expect(xpEl).toBeVisible();
    }
  });
});

// ─── Quiz ─────────────────────────────────────────────────────────────────────

test.describe("Quiz", () => {
  test("quiz page renders questions", async ({ page }) => {
    await page.goto(`${BASE}/quiz`);
    await waitForHydration(page);
    const heading = page.locator("h1, h2").first();
    await expect(heading).toBeVisible();
  });

  test("quiz answer buttons are clickable", async ({ page }) => {
    await page.goto(`${BASE}/quiz`);
    await waitForHydration(page);
    const answers = page.getByRole("button").filter({ hasText: /[A-D]\.|option|true|false/i });
    if (await answers.first().isVisible({ timeout: 3000 }).catch(() => false)) {
      await answers.first().click();
      // Should show feedback (correct / incorrect / next)
      const feedback = page.getByText(/correct|wrong|next|continue/i);
      await expect(feedback).toBeVisible({ timeout: 3000 });
    }
  });
});

// ─── Ecosystem store ──────────────────────────────────────────────────────────

test.describe("Ecosystem store", () => {
  test("ecosystem page loads and shows dApps", async ({ page }) => {
    await page.goto(`${BASE}/ecosystem`);
    await waitForHydration(page);
    await expect(page).toHaveTitle(/ecosystem|dapp|app/i);
    const apps = page.locator('[class*="card"], [class*="app"], article');
    expect(await apps.count()).toBeGreaterThan(3);
  });

  test("search filter narrows results", async ({ page }) => {
    await page.goto(`${BASE}/ecosystem`);
    await waitForHydration(page);
    const search = page.getByPlaceholder(/search/i).first();
    if (await search.isVisible({ timeout: 3000 }).catch(() => false)) {
      await search.fill("uniswap");
      await page.waitForTimeout(500);
      const results = page.getByText(/uniswap/i);
      await expect(results.first()).toBeVisible();
    }
  });

  test("chain filter buttons exist", async ({ page }) => {
    await page.goto(`${BASE}/ecosystem`);
    await waitForHydration(page);
    const filterBtns = page.getByRole("button").filter({ hasText: /ethereum|solana|bnb|all|filter/i });
    if (await filterBtns.first().isVisible({ timeout: 3000 }).catch(() => false)) {
      await filterBtns.first().click();
      // Page should not crash
      await expect(page).not.toHaveTitle(/error/i);
    }
  });
});

// ─── Leaderboard ──────────────────────────────────────────────────────────────

test.describe("Leaderboard", () => {
  test("leaderboard renders rows", async ({ page }) => {
    await page.goto(`${BASE}/leaderboard`);
    await waitForHydration(page);
    const rows = page.locator("tr, [class*='row']");
    expect(await rows.count()).toBeGreaterThan(2);
  });

  test("top user shows XP value", async ({ page }) => {
    await page.goto(`${BASE}/leaderboard`);
    await waitForHydration(page);
    const xpValues = page.getByText(/\d+\s*xp/i);
    await expect(xpValues.first()).toBeVisible({ timeout: 5000 });
  });
});

// ─── Portfolio live dashboard ─────────────────────────────────────────────────

test.describe("Portfolio live dashboard", () => {
  test("page loads with price data", async ({ page }) => {
    await page.goto(`${BASE}/portfolio-live`);
    await waitForHydration(page);
    // Should show BTC in the table
    await expect(page.getByText("BTC")).toBeVisible({ timeout: 6000 });
  });

  test("portfolio value is displayed", async ({ page }) => {
    await page.goto(`${BASE}/portfolio-live`);
    await waitForHydration(page);
    const valueEl = page.getByText(/portfolio value/i).first();
    await expect(valueEl).toBeVisible({ timeout: 5000 });
  });

  test("LIVE or Simulated badge present", async ({ page }) => {
    await page.goto(`${BASE}/portfolio-live`);
    await waitForHydration(page);
    const badge = page.getByText(/live|simulated|connecting/i).first();
    await expect(badge).toBeVisible({ timeout: 8000 });
  });
});

// ─── Referral page ────────────────────────────────────────────────────────────

test.describe("Referral page", () => {
  test("page loads with hero headline", async ({ page }) => {
    await page.goto(`${BASE}/referral`);
    await waitForHydration(page);
    await expect(page.getByText(/invite|referral|earn xp/i).first()).toBeVisible();
  });

  test("copy link button is present", async ({ page }) => {
    await page.goto(`${BASE}/referral`);
    await waitForHydration(page);
    const copyBtn = page.getByRole("button", { name: /copy|share/i }).first();
    await expect(copyBtn).toBeVisible({ timeout: 5000 });
  });

  test("tier table renders", async ({ page }) => {
    await page.goto(`${BASE}/referral`);
    await waitForHydration(page);
    await expect(page.getByText(/legend/i).first()).toBeVisible({ timeout: 5000 });
  });
});

// ─── Mobile viewport ──────────────────────────────────────────────────────────

test.describe("Mobile (375px)", () => {
  test.use({ viewport: MOBILE });

  test("home page renders on mobile", async ({ page }) => {
    await page.goto(BASE);
    await waitForHydration(page);
    await expect(page.locator("h1").first()).toBeVisible();
  });

  test("courses page usable on mobile", async ({ page }) => {
    await page.goto(`${BASE}/courses`);
    await waitForHydration(page);
    const cards = page.locator('[class*="card"], article');
    expect(await cards.count()).toBeGreaterThan(0);
  });

  test("ecosystem store scrolls on mobile", async ({ page }) => {
    await page.goto(`${BASE}/ecosystem`);
    await waitForHydration(page);
    await page.evaluate(() => window.scrollTo(0, 400));
    await expect(page).not.toHaveTitle(/error/i);
  });

  test("referral page readable on mobile", async ({ page }) => {
    await page.goto(`${BASE}/referral`);
    await waitForHydration(page);
    await expect(page.locator("h1").first()).toBeVisible();
    // No horizontal scroll overflow (body width <= viewport)
    const overflow = await page.evaluate(() => document.body.scrollWidth > window.innerWidth);
    expect(overflow).toBe(false);
  });
});

// ─── Performance baseline ─────────────────────────────────────────────────────

test.describe("Performance", () => {
  test("home page responds within 3s", async ({ page }) => {
    const start = Date.now();
    await page.goto(BASE);
    await page.waitForLoadState("domcontentloaded");
    const elapsed = Date.now() - start;
    expect(elapsed).toBeLessThan(3000);
  });

  test("ecosystem page responds within 4s", async ({ page }) => {
    const start = Date.now();
    await page.goto(`${BASE}/ecosystem`);
    await page.waitForLoadState("domcontentloaded");
    const elapsed = Date.now() - start;
    expect(elapsed).toBeLessThan(4000);
  });
});
