/**
 * A/B Testing Framework
 * Handles deterministic variant assignment, conversion tracking, and experiment analytics
 */

export interface Variant {
  id: string;
  name: string;
  weight: number;
}

export interface Experiment {
  id: string;
  name: string;
  description: string;
  variants: Variant[];
  startDate: Date;
  endDate?: Date;
}

export interface ConversionEvent {
  experimentId: string;
  variantId: string;
  timestamp: number;
  eventType: string;
  metadata?: Record<string, any>;
}

export interface ExperimentResults {
  experimentId: string;
  variants: {
    [variantId: string]: {
      conversions: number;
      conversionRate: number;
      visits: number;
    };
  };
  totalVisitors: number;
}

export interface ABTestConfig {
  experiments: Experiment[];
  visitorId: string;
  cookieDomain?: string;
  cookieExpiry?: number;
}

/**
 * Simple hash function for deterministic variant assignment
 */
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

/**
 * Weighted random selection based on hash
 */
function selectVariantByWeight(
  experimentId: string,
  visitorId: string,
  variants: Variant[]
): string {
  const hashValue = hashString(`${experimentId}-${visitorId}`);
  const totalWeight = variants.reduce((sum, v) => sum + v.weight, 0);
  const normalizedHash = hashValue % totalWeight;

  let cumulativeWeight = 0;
  for (const variant of variants) {
    cumulativeWeight += variant.weight;
    if (normalizedHash < cumulativeWeight) {
      return variant.id;
    }
  }

  return variants[0].id;
}

/**
 * Get the visitor ID, creating one if necessary
 */
function getOrCreateVisitorId(): string {
  if (typeof window === 'undefined') {
    return '';
  }

  const cookieName = 'ab_test_visitor_id';
  const cookies = document.cookie.split(';');

  // Try to find existing visitor ID
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === cookieName && value) {
      return decodeURIComponent(value);
    }
  }

  // Create new visitor ID
  const newId = `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  setCookie(cookieName, newId, 365);
  return newId;
}

/**
 * Set a cookie value
 */
function setCookie(name: string, value: string, days: number = 365): void {
  if (typeof window === 'undefined') {
    return;
  }

  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/`;
}

/**
 * Get a cookie value
 */
function getCookie(name: string): string | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [cookieName, value] = cookie.trim().split('=');
    if (cookieName === name && value) {
      return decodeURIComponent(value);
    }
  }
  return null;
}

/**
 * Get assigned variant for an experiment
 */
export function getVariant(experimentId: string, variants: Variant[]): string {
  if (typeof window === 'undefined') {
    return variants[0].id;
  }

  const visitorId = getOrCreateVisitorId();
  const cookieName = `ab_variant_${experimentId}`;

  // Check if variant already assigned
  let variantId = getCookie(cookieName);
  if (variantId) {
    return variantId;
  }

  // Assign new variant
  variantId = selectVariantByWeight(experimentId, visitorId, variants);
  setCookie(cookieName, variantId, 365);

  return variantId;
}

/**
 * Track a conversion event
 */
export function trackConversion(
  experimentId: string,
  variantId: string,
  eventType: string = 'conversion',
  metadata?: Record<string, any>
): void {
  if (typeof window === 'undefined') {
    return;
  }

  const event: ConversionEvent = {
    experimentId,
    variantId,
    timestamp: Date.now(),
    eventType,
    metadata,
  };

  // Store in localStorage
  const storageKey = `ab_events_${experimentId}`;
  const existingEventsJson = localStorage.getItem(storageKey) || '[]';
  const events = JSON.parse(existingEventsJson);
  events.push(event);

  // Keep only last 1000 events per experiment
  if (events.length > 1000) {
    events.splice(0, events.length - 1000);
  }

  localStorage.setItem(storageKey, JSON.stringify(events));
}

/**
 * Get results for an experiment
 */
export function getExperimentResults(
  experimentId: string,
  variants: Variant[]
): ExperimentResults {
  if (typeof window === 'undefined') {
    return {
      experimentId,
      variants: {},
      totalVisitors: 0,
    };
  }

  const storageKey = `ab_events_${experimentId}`;
  const eventsJson = localStorage.getItem(storageKey) || '[]';
  const events: ConversionEvent[] = JSON.parse(eventsJson);

  // Count unique visitors per variant
  const variantVisits: Record<string, Set<string>> = {};
  const variantConversions: Record<string, number> = {};

  for (const variant of variants) {
    variantVisits[variant.id] = new Set();
    variantConversions[variant.id] = 0;
  }

  // Process events
  for (const event of events) {
    if (variants.some((v) => v.id === event.variantId)) {
      variantVisits[event.variantId].add(event.experimentId);
      if (event.eventType === 'conversion') {
        variantConversions[event.variantId]++;
      }
    }
  }

  // Calculate results
  const results: Record<
    string,
    { conversions: number; conversionRate: number; visits: number }
  > = {};

  for (const variant of variants) {
    const visits = variantVisits[variant.id].size;
    const conversions = variantConversions[variant.id];
    results[variant.id] = {
      conversions,
      conversionRate: visits > 0 ? (conversions / visits) * 100 : 0,
      visits,
    };
  }

  // Total unique visitors
  const allVisitors = new Set(
    Object.values(variantVisits).flatMap((set) => Array.from(set))
  );

  return {
    experimentId,
    variants: results,
    totalVisitors: allVisitors.size,
  };
}

/**
 * Pre-defined experiments configuration
 */
export const PREDEFINED_EXPERIMENTS: Experiment[] = [
  {
    id: 'hero_cta',
    name: 'Hero CTA Text',
    description: 'Test different call-to-action button text on hero section',
    variants: [
      { id: 'compare_exchanges', name: 'Compare Exchanges', weight: 33 },
      { id: 'find_exchange', name: 'Find Your Exchange', weight: 33 },
      { id: 'start_comparing', name: 'Start Comparing', weight: 34 },
    ],
    startDate: new Date('2026-03-01'),
  },
  {
    id: 'pricing_display',
    name: 'Pricing Display',
    description: 'Test monthly vs annual first pricing display',
    variants: [
      { id: 'monthly', name: 'Monthly First', weight: 50 },
      { id: 'annual_first', name: 'Annual First', weight: 50 },
    ],
    startDate: new Date('2026-03-01'),
  },
  {
    id: 'social_proof',
    name: 'Social Proof Type',
    description: 'Test different social proof elements',
    variants: [
      { id: 'trust_badges', name: 'Trust Badges', weight: 33 },
      { id: 'user_count', name: 'User Count', weight: 33 },
      { id: 'review_stars', name: 'Review Stars', weight: 34 },
    ],
    startDate: new Date('2026-03-01'),
  },
  {
    id: 'newsletter_popup',
    name: 'Newsletter Popup Trigger',
    description: 'Test different triggers for newsletter signup popup',
    variants: [
      { id: 'exit_intent', name: 'Exit Intent', weight: 33 },
      { id: 'scroll_50', name: 'Scroll 50%', weight: 33 },
      { id: 'time_delay_30s', name: 'Time Delay (30s)', weight: 34 },
    ],
    startDate: new Date('2026-03-01'),
  },
  {
    id: 'tool_layout',
    name: 'Tool Layout',
    description: 'Test different layout options for comparison tools',
    variants: [
      { id: 'grid_3col', name: '3 Column Grid', weight: 33 },
      { id: 'grid_2col', name: '2 Column Grid', weight: 33 },
      { id: 'list_view', name: 'List View', weight: 34 },
    ],
    startDate: new Date('2026-03-01'),
  },
];

/**
 * Initialize all predefined experiments
 */
export function initializeExperiments(): void {
  if (typeof window === 'undefined') {
    return;
  }

  for (const experiment of PREDEFINED_EXPERIMENTS) {
    // Trigger variant assignment for each experiment
    getVariant(experiment.id, experiment.variants);
  }
}

/**
 * Get all active variants for current visitor
 */
export function getAllVariants(): Record<string, string> {
  if (typeof window === 'undefined') {
    return {};
  }

  const variants: Record<string, string> = {};

  for (const experiment of PREDEFINED_EXPERIMENTS) {
    variants[experiment.id] = getVariant(experiment.id, experiment.variants);
  }

  return variants;
}

/**
 * Get all experiment results
 */
export function getAllExperimentResults(): ExperimentResults[] {
  return PREDEFINED_EXPERIMENTS.map((experiment) =>
    getExperimentResults(experiment.id, experiment.variants)
  );
}

/**
 * Clear all A/B testing data (for testing/development)
 */
export function clearABTestData(): void {
  if (typeof window === 'undefined') {
    return;
  }

  // Clear cookies
  const cookiesToClear = [
    'ab_test_visitor_id',
    ...PREDEFINED_EXPERIMENTS.map((exp) => `ab_variant_${exp.id}`),
  ];

  for (const cookieName of cookiesToClear) {
    setCookie(cookieName, '', -1);
  }

  // Clear localStorage events
  for (const experiment of PREDEFINED_EXPERIMENTS) {
    localStorage.removeItem(`ab_events_${experiment.id}`);
  }
}

/**
 * Get experiment by ID
 */
export function getExperimentById(
  experimentId: string
): Experiment | undefined {
  return PREDEFINED_EXPERIMENTS.find((exp) => exp.id === experimentId);
}

/**
 * Find variant by ID in an experiment
 */
export function getVariantById(
  experimentId: string,
  variantId: string
): Variant | undefined {
  const experiment = getExperimentById(experimentId);
  if (!experiment) return undefined;
  return experiment.variants.find((v) => v.id === variantId);
}
