/**
 * Newsletter Subscription System
 * Resend integration for email marketing, drip campaigns, and subscriber management
 * Sprint 24 — Content Agent
 */

// ── Types ──────────────────────────────────────────────────────────────────

export interface Subscriber {
  id: string;
  email: string;
  name?: string;
  subscribedAt: number;
  confirmed: boolean;
  preferences: SubscriberPreferences;
  tags: string[];
  source: 'homepage' | 'blog' | 'tools' | 'popup' | 'api';
}

export interface SubscriberPreferences {
  weeklyDigest: boolean;
  priceAlerts: boolean;
  newFeatures: boolean;
  defiUpdates: boolean;
  nftNews: boolean;
  tradingTips: boolean;
  frequency: 'daily' | 'weekly' | 'monthly';
}

export interface EmailCampaign {
  id: string;
  name: string;
  subject: string;
  previewText: string;
  template: EmailTemplate;
  audience: AudienceSegment;
  scheduledAt?: number;
  sentAt?: number;
  stats: CampaignStats;
}

export interface CampaignStats {
  sent: number;
  delivered: number;
  opened: number;
  clicked: number;
  unsubscribed: number;
  bounced: number;
}

export interface AudienceSegment {
  name: string;
  filters: SegmentFilter[];
  estimatedSize: number;
}

export interface SegmentFilter {
  field: string;
  operator: 'equals' | 'contains' | 'gt' | 'lt' | 'in';
  value: string | number | string[];
}

export type EmailTemplate =
  | 'weekly-digest'
  | 'price-alert'
  | 'welcome'
  | 'feature-announcement'
  | 'defi-roundup'
  | 'nft-drops'
  | 'market-recap';

// ── Drip Campaign Definitions ──────────────────────────────────────────────

export interface DripStep {
  delay: number; // hours after previous step
  template: EmailTemplate;
  subject: string;
  condition?: 'opened_previous' | 'clicked_previous' | 'always';
}

export interface DripCampaign {
  id: string;
  name: string;
  trigger: 'signup' | 'tag_added' | 'manual';
  steps: DripStep[];
  active: boolean;
}

export const DEFAULT_DRIP_CAMPAIGNS: DripCampaign[] = [
  {
    id: 'welcome-series',
    name: 'Welcome Series',
    trigger: 'signup',
    active: true,
    steps: [
      { delay: 0, template: 'welcome', subject: 'Welcome to degen0x — Your Crypto Edge Starts Here', condition: 'always' },
      { delay: 24, template: 'feature-announcement', subject: 'Discover Our Top 5 Tools for Crypto Analysis', condition: 'always' },
      { delay: 72, template: 'defi-roundup', subject: 'This Week in DeFi — Top Yields & Opportunities', condition: 'opened_previous' },
      { delay: 168, template: 'weekly-digest', subject: 'Your First Weekly Digest is Here', condition: 'always' },
    ],
  },
  {
    id: 'defi-onboarding',
    name: 'DeFi Onboarding',
    trigger: 'tag_added',
    active: true,
    steps: [
      { delay: 0, template: 'defi-roundup', subject: 'Getting Started with DeFi on degen0x', condition: 'always' },
      { delay: 48, template: 'feature-announcement', subject: 'How to Track DeFi Yields Like a Pro', condition: 'always' },
      { delay: 120, template: 'defi-roundup', subject: 'Advanced DeFi Strategies — Yield Farming Guide', condition: 'clicked_previous' },
    ],
  },
];

// ── Email Template Renderer ──────────────────────────────────────────────

export function renderEmailTemplate(template: EmailTemplate, data: Record<string, unknown>): string {
  const baseStyle = `
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: #0d1117;
    color: #e6edf3;
  `;

  const headerHtml = `
    <div style="background: linear-gradient(135deg, #6366f1, #06b6d4); padding: 24px; text-align: center;">
      <h1 style="color: white; font-size: 24px; font-weight: 800; margin: 0;">degen0x</h1>
      <p style="color: rgba(255,255,255,0.8); font-size: 13px; margin: 8px 0 0 0;">Your Crypto Intelligence Hub</p>
    </div>
  `;

  const footerHtml = `
    <div style="background: #161b22; padding: 20px; text-align: center; border-top: 1px solid #30363d;">
      <p style="color: #8b949e; font-size: 12px; margin: 0 0 8px 0;">
        You're receiving this because you subscribed to degen0x updates.
      </p>
      <a href="{{unsubscribe_url}}" style="color: #58a6ff; font-size: 12px; text-decoration: none;">Unsubscribe</a>
      <span style="color: #30363d; margin: 0 8px;">|</span>
      <a href="{{preferences_url}}" style="color: #58a6ff; font-size: 12px; text-decoration: none;">Manage Preferences</a>
    </div>
  `;

  const templates: Record<EmailTemplate, string> = {
    'weekly-digest': `
      ${headerHtml}
      <div style="padding: 24px;">
        <h2 style="color: #e6edf3; font-size: 20px;">Weekly Crypto Digest</h2>
        <p style="color: #8b949e;">Here's what moved the markets this week.</p>
        <div style="background: #161b22; border: 1px solid #30363d; border-radius: 8px; padding: 16px; margin: 16px 0;">
          <h3 style="color: #3fb950; font-size: 14px; margin: 0 0 8px 0;">Top Movers</h3>
          <p style="color: #e6edf3; font-size: 13px;">{{top_movers}}</p>
        </div>
        <div style="background: #161b22; border: 1px solid #30363d; border-radius: 8px; padding: 16px; margin: 16px 0;">
          <h3 style="color: #58a6ff; font-size: 14px; margin: 0 0 8px 0;">DeFi Highlights</h3>
          <p style="color: #e6edf3; font-size: 13px;">{{defi_highlights}}</p>
        </div>
        <a href="https://degen0x.com" style="display: inline-block; background: linear-gradient(135deg, #6366f1, #06b6d4); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-top: 16px;">
          View Full Dashboard
        </a>
      </div>
      ${footerHtml}
    `,
    'welcome': `
      ${headerHtml}
      <div style="padding: 24px;">
        <h2 style="color: #e6edf3; font-size: 20px;">Welcome to degen0x!</h2>
        <p style="color: #8b949e; line-height: 1.6;">You now have access to 800+ pages of crypto analytics, live market data, DeFi yields, NFT tracking, and more — all in one place.</p>
        <div style="margin: 20px 0;">
          <div style="background: #161b22; border: 1px solid #30363d; border-radius: 8px; padding: 12px 16px; margin: 8px 0;">
            <strong style="color: #6366f1;">Live Price Feeds</strong>
            <span style="color: #8b949e;"> — Real-time data from CoinGecko + Binance WebSocket</span>
          </div>
          <div style="background: #161b22; border: 1px solid #30363d; border-radius: 8px; padding: 12px 16px; margin: 8px 0;">
            <strong style="color: #3fb950;">DeFi Yield Tracker</strong>
            <span style="color: #8b949e;"> — Compare yields across 17+ protocols</span>
          </div>
          <div style="background: #161b22; border: 1px solid #30363d; border-radius: 8px; padding: 12px 16px; margin: 8px 0;">
            <strong style="color: #d29922;">NFT Analytics</strong>
            <span style="color: #8b949e;"> — Floor prices, rarity tools, whale alerts</span>
          </div>
        </div>
        <a href="https://degen0x.com/tools" style="display: inline-block; background: linear-gradient(135deg, #6366f1, #06b6d4); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">
          Explore Tools
        </a>
      </div>
      ${footerHtml}
    `,
    'price-alert': `${headerHtml}<div style="padding:24px;"><h2 style="color:#e6edf3;">Price Alert Triggered</h2><p style="color:#8b949e;">{{alert_message}}</p></div>${footerHtml}`,
    'feature-announcement': `${headerHtml}<div style="padding:24px;"><h2 style="color:#e6edf3;">New Feature: {{feature_name}}</h2><p style="color:#8b949e;">{{feature_description}}</p></div>${footerHtml}`,
    'defi-roundup': `${headerHtml}<div style="padding:24px;"><h2 style="color:#e6edf3;">DeFi Weekly Roundup</h2><p style="color:#8b949e;">{{defi_summary}}</p></div>${footerHtml}`,
    'nft-drops': `${headerHtml}<div style="padding:24px;"><h2 style="color:#e6edf3;">Upcoming NFT Drops</h2><p style="color:#8b949e;">{{nft_drops}}</p></div>${footerHtml}`,
    'market-recap': `${headerHtml}<div style="padding:24px;"><h2 style="color:#e6edf3;">Market Recap</h2><p style="color:#8b949e;">{{market_recap}}</p></div>${footerHtml}`,
  };

  return `<div style="${baseStyle}">${templates[template] || templates['welcome']}</div>`;
}

// ── Resend API Integration ──────────────────────────────────────────────

const RESEND_API_BASE = 'https://api.resend.com';

export interface ResendConfig {
  apiKey: string;
  fromEmail: string;
  fromName: string;
  replyTo?: string;
}

/**
 * Send a single email via Resend API
 */
export async function sendEmail(
  config: ResendConfig,
  to: string,
  subject: string,
  html: string,
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    const response = await fetch(`${RESEND_API_BASE}/emails`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${config.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `${config.fromName} <${config.fromEmail}>`,
        to: [to],
        subject,
        html,
        reply_to: config.replyTo,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return { success: false, error: error.message || 'Failed to send email' };
    }

    const data = await response.json();
    return { success: true, messageId: data.id };
  } catch (error) {
    return { success: false, error: 'Network error sending email' };
  }
}

/**
 * Add subscriber to Resend audience
 */
export async function addToAudience(
  config: ResendConfig,
  audienceId: string,
  subscriber: { email: string; firstName?: string; lastName?: string },
): Promise<{ success: boolean; contactId?: string; error?: string }> {
  try {
    const response = await fetch(`${RESEND_API_BASE}/audiences/${audienceId}/contacts`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${config.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: subscriber.email,
        first_name: subscriber.firstName,
        last_name: subscriber.lastName,
        unsubscribed: false,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return { success: false, error: error.message || 'Failed to add subscriber' };
    }

    const data = await response.json();
    return { success: true, contactId: data.id };
  } catch (error) {
    return { success: false, error: 'Network error adding subscriber' };
  }
}

// ── Subscriber Validation ──────────────────────────────────────────────

export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function getDefaultPreferences(): SubscriberPreferences {
  return {
    weeklyDigest: true,
    priceAlerts: true,
    newFeatures: true,
    defiUpdates: false,
    nftNews: false,
    tradingTips: false,
    frequency: 'weekly',
  };
}
