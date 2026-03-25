/**
 * Playwright configuration — degen0x E2E suite
 * Sprint 50
 *
 * Run: npx playwright test
 * Run single file: npx playwright test tests/e2e/degen0x.spec.ts
 * Run headed: npx playwright test --headed
 * Show report: npx playwright show-report
 */

import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  testMatch: "**/*.spec.ts",

  // Parallelise across workers
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,

  reporter: [
    ["html", { outputFolder: "playwright-report", open: "never" }],
    ["list"],
  ],

  use: {
    baseURL: process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    // Give CI a bit more headroom
    actionTimeout: 15_000,
    navigationTimeout: 20_000,
  },

  projects: [
    // Desktop Chromium (primary)
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    // Firefox sanity
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    // Mobile Chrome (375px)
    {
      name: "mobile-chrome",
      use: { ...devices["Pixel 5"] },
    },
  ],

  // Start Next.js dev server before tests if not already running
  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: true,
    timeout: 60_000,
    stderr: "pipe",
  },
});
