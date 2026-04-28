/**
 * Exchange Comparison Utility
 * Provides comprehensive data and comparison functions for cryptocurrency exchanges
 */

export interface ExchangeComparisonData {
  name: string;
  slug: string;
  founded: number;
  headquarters: string;
  regulated: boolean;
  publicCompany: boolean;
  users: string;
  coins: number;
  tradingFees: {
    maker: string;
    taker: string;
  };
  spotTrading: boolean;
  futuresTrading: boolean;
  marginTrading: boolean;
  stakingAvailable: boolean;
  mobileApp: boolean;
  proInterface: boolean;
  fiatDeposit: boolean;
  insuranceFund: boolean;
  securityRecord: string;
  kycRequired: boolean;
  rating: number;
}

export interface ExchangeComparison {
  exchange1: ExchangeComparisonData;
  exchange2: ExchangeComparisonData;
  differences: {
    [key: string]: {
      exchange1: any;
      exchange2: any;
    };
  };
}

const exchangesData: Record<string, ExchangeComparisonData> = {
  coinbase: {
    name: "Coinbase",
    slug: "coinbase",
    founded: 2012,
    headquarters: "San Francisco, USA",
    regulated: true,
    publicCompany: true,
    users: "100M+",
    coins: 280,
    tradingFees: {
      maker: "0.4%",
      taker: "0.6%",
    },
    spotTrading: true,
    futuresTrading: false,
    marginTrading: false,
    stakingAvailable: true,
    mobileApp: true,
    proInterface: true,
    fiatDeposit: true,
    insuranceFund: true,
    securityRecord: "Strong - SOC 2 Type II certified",
    kycRequired: true,
    rating: 8.5,
  },
  binance: {
    name: "Binance",
    slug: "binance",
    founded: 2017,
    headquarters: "Grand Cayman",
    regulated: false,
    publicCompany: false,
    users: "200M+",
    coins: 1500,
    tradingFees: {
      maker: "0.1%",
      taker: "0.1%",
    },
    spotTrading: true,
    futuresTrading: true,
    marginTrading: true,
    stakingAvailable: true,
    mobileApp: true,
    proInterface: true,
    fiatDeposit: true,
    insuranceFund: true,
    securityRecord: "Good - Multiple security audits",
    kycRequired: true,
    rating: 8.8,
  },
  kraken: {
    name: "Kraken",
    slug: "kraken",
    founded: 2011,
    headquarters: "San Francisco, USA",
    regulated: true,
    publicCompany: false,
    users: "10M+",
    coins: 300,
    tradingFees: {
      maker: "0.16%",
      taker: "0.26%",
    },
    spotTrading: true,
    futuresTrading: true,
    marginTrading: true,
    stakingAvailable: true,
    mobileApp: true,
    proInterface: true,
    fiatDeposit: true,
    insuranceFund: false,
    securityRecord: "Excellent - Known for security",
    kycRequired: true,
    rating: 8.7,
  },
  bybit: {
    name: "Bybit",
    slug: "bybit",
    founded: 2018,
    headquarters: "Singapore",
    regulated: false,
    publicCompany: false,
    users: "50M+",
    coins: 650,
    tradingFees: {
      maker: "0.1%",
      taker: "0.1%",
    },
    spotTrading: true,
    futuresTrading: true,
    marginTrading: true,
    stakingAvailable: true,
    mobileApp: true,
    proInterface: true,
    fiatDeposit: true,
    insuranceFund: true,
    securityRecord: "Good - Regular security audits",
    kycRequired: true,
    rating: 8.4,
  },
  kucoin: {
    name: "KuCoin",
    slug: "kucoin",
    founded: 2017,
    headquarters: "Seychelles",
    regulated: false,
    publicCompany: false,
    users: "30M+",
    coins: 700,
    tradingFees: {
      maker: "0.1%",
      taker: "0.1%",
    },
    spotTrading: true,
    futuresTrading: true,
    marginTrading: true,
    stakingAvailable: true,
    mobileApp: true,
    proInterface: true,
    fiatDeposit: true,
    insuranceFund: false,
    securityRecord: "Good - Community-focused security",
    kycRequired: false,
    rating: 8.2,
  },
  "gate-io": {
    name: "Gate.io",
    slug: "gate-io",
    founded: 2013,
    headquarters: "Cayman Islands",
    regulated: false,
    publicCompany: false,
    users: "15M+",
    coins: 1400,
    tradingFees: {
      maker: "0.2%",
      taker: "0.2%",
    },
    spotTrading: true,
    futuresTrading: true,
    marginTrading: true,
    stakingAvailable: true,
    mobileApp: true,
    proInterface: true,
    fiatDeposit: true,
    insuranceFund: false,
    securityRecord: "Good - Multiple security layers",
    kycRequired: false,
    rating: 8.1,
  },
  okx: {
    name: "OKX",
    slug: "okx",
    founded: 2017,
    headquarters: "Seychelles",
    regulated: false,
    publicCompany: false,
    users: "40M+",
    coins: 500,
    tradingFees: {
      maker: "0.08%",
      taker: "0.1%",
    },
    spotTrading: true,
    futuresTrading: true,
    marginTrading: true,
    stakingAvailable: true,
    mobileApp: true,
    proInterface: true,
    fiatDeposit: true,
    insuranceFund: true,
    securityRecord: "Good - Advanced security features",
    kycRequired: true,
    rating: 8.3,
  },
  bitget: {
    name: "Bitget",
    slug: "bitget",
    founded: 2018,
    headquarters: "Singapore",
    regulated: false,
    publicCompany: false,
    users: "20M+",
    coins: 400,
    tradingFees: {
      maker: "0.1%",
      taker: "0.1%",
    },
    spotTrading: true,
    futuresTrading: true,
    marginTrading: true,
    stakingAvailable: true,
    mobileApp: true,
    proInterface: true,
    fiatDeposit: true,
    insuranceFund: true,
    securityRecord: "Good - Growing security measures",
    kycRequired: true,
    rating: 8.0,
  },
  mexc: {
    name: "MEXC",
    slug: "mexc",
    founded: 2018,
    headquarters: "Singapore",
    regulated: false,
    publicCompany: false,
    users: "12M+",
    coins: 2000,
    tradingFees: {
      maker: "0.1%",
      taker: "0.1%",
    },
    spotTrading: true,
    futuresTrading: true,
    marginTrading: true,
    stakingAvailable: true,
    mobileApp: true,
    proInterface: true,
    fiatDeposit: true,
    insuranceFund: false,
    securityRecord: "Fair - Standard security protocols",
    kycRequired: false,
    rating: 7.8,
  },
  htx: {
    name: "HTX (formerly Huobi)",
    slug: "htx",
    founded: 2013,
    headquarters: "Singapore",
    regulated: false,
    publicCompany: false,
    users: "5M+",
    coins: 800,
    tradingFees: {
      maker: "0.2%",
      taker: "0.2%",
    },
    spotTrading: true,
    futuresTrading: true,
    marginTrading: true,
    stakingAvailable: true,
    mobileApp: true,
    proInterface: true,
    fiatDeposit: true,
    insuranceFund: true,
    securityRecord: "Good - Established security track record",
    kycRequired: true,
    rating: 7.9,
  },
  phemex: {
    name: "Phemex",
    slug: "phemex",
    founded: 2019,
    headquarters: "Singapore",
    regulated: false,
    publicCompany: false,
    users: "2M+",
    coins: 200,
    tradingFees: {
      maker: "0.05%",
      taker: "0.05%",
    },
    spotTrading: true,
    futuresTrading: true,
    marginTrading: false,
    stakingAvailable: false,
    mobileApp: true,
    proInterface: true,
    fiatDeposit: false,
    insuranceFund: true,
    securityRecord: "Good - Derivatives-focused security",
    kycRequired: false,
    rating: 7.6,
  },
  bitfinex: {
    name: "Bitfinex",
    slug: "bitfinex",
    founded: 2012,
    headquarters: "Hong Kong",
    regulated: false,
    publicCompany: false,
    users: "1M+",
    coins: 150,
    tradingFees: {
      maker: "0.1%",
      taker: "0.2%",
    },
    spotTrading: true,
    futuresTrading: true,
    marginTrading: true,
    stakingAvailable: false,
    mobileApp: true,
    proInterface: true,
    fiatDeposit: true,
    insuranceFund: false,
    securityRecord: "Fair - Past security incidents",
    kycRequired: false,
    rating: 7.3,
  },
  gemini: {
    name: "Gemini",
    slug: "gemini",
    founded: 2015,
    headquarters: "New York, USA",
    regulated: true,
    publicCompany: false,
    users: "5M+",
    coins: 150,
    tradingFees: {
      maker: "0.5%",
      taker: "0.5%",
    },
    spotTrading: true,
    futuresTrading: false,
    marginTrading: false,
    stakingAvailable: true,
    mobileApp: true,
    proInterface: true,
    fiatDeposit: true,
    insuranceFund: true,
    securityRecord: "Excellent - NYSE-grade security",
    kycRequired: true,
    rating: 8.4,
  },
  "crypto-com": {
    name: "Crypto.com",
    slug: "crypto-com",
    founded: 2016,
    headquarters: "Singapore",
    regulated: true,
    publicCompany: false,
    users: "50M+",
    coins: 200,
    tradingFees: {
      maker: "0.4%",
      taker: "0.4%",
    },
    spotTrading: true,
    futuresTrading: false,
    marginTrading: false,
    stakingAvailable: true,
    mobileApp: true,
    proInterface: true,
    fiatDeposit: true,
    insuranceFund: true,
    securityRecord: "Good - Licensed exchange",
    kycRequired: true,
    rating: 8.1,
  },
  "robinhood-crypto": {
    name: "Robinhood Crypto",
    slug: "robinhood-crypto",
    founded: 2015,
    headquarters: "Menlo Park, USA",
    regulated: true,
    publicCompany: true,
    users: "23M+",
    coins: 25,
    tradingFees: {
      maker: "0%",
      taker: "0%",
    },
    spotTrading: true,
    futuresTrading: false,
    marginTrading: false,
    stakingAvailable: false,
    mobileApp: true,
    proInterface: false,
    fiatDeposit: true,
    insuranceFund: true,
    securityRecord: "Excellent - SEC regulated",
    kycRequired: true,
    rating: 7.9,
  },
  "coinbase-advanced": {
    name: "Coinbase Advanced",
    slug: "coinbase-advanced",
    founded: 2012,
    headquarters: "San Francisco, USA",
    regulated: true,
    publicCompany: true,
    users: "100M+",
    coins: 350,
    tradingFees: {
      maker: "0.5%",
      taker: "0.6%",
    },
    spotTrading: true,
    futuresTrading: true,
    marginTrading: false,
    stakingAvailable: true,
    mobileApp: true,
    proInterface: true,
    fiatDeposit: true,
    insuranceFund: true,
    securityRecord: "Strong - SOC 2 Type II certified",
    kycRequired: true,
    rating: 8.6,
  },
  bitstamp: {
    name: "Bitstamp",
    slug: "bitstamp",
    founded: 2011,
    headquarters: "Luxembourg",
    regulated: true,
    publicCompany: false,
    users: "2M+",
    coins: 100,
    tradingFees: {
      maker: "0.5%",
      taker: "0.5%",
    },
    spotTrading: true,
    futuresTrading: false,
    marginTrading: true,
    stakingAvailable: false,
    mobileApp: true,
    proInterface: true,
    fiatDeposit: true,
    insuranceFund: false,
    securityRecord: "Excellent - European regulated",
    kycRequired: true,
    rating: 8.2,
  },
  uphold: {
    name: "Uphold",
    slug: "uphold",
    founded: 2013,
    headquarters: "New York, USA",
    regulated: true,
    publicCompany: false,
    users: "5M+",
    coins: 200,
    tradingFees: {
      maker: "0.45%",
      taker: "0.45%",
    },
    spotTrading: true,
    futuresTrading: false,
    marginTrading: false,
    stakingAvailable: true,
    mobileApp: true,
    proInterface: true,
    fiatDeposit: true,
    insuranceFund: true,
    securityRecord: "Good - MSB licensed",
    kycRequired: true,
    rating: 7.8,
  },
  changelly: {
    name: "Changelly",
    slug: "changelly",
    founded: 2015,
    headquarters: "Prague, Czechia",
    regulated: false,
    publicCompany: false,
    users: "2M+",
    coins: 800,
    tradingFees: {
      maker: "0.5%",
      taker: "0.5%",
    },
    spotTrading: true,
    futuresTrading: false,
    marginTrading: false,
    stakingAvailable: false,
    mobileApp: true,
    proInterface: false,
    fiatDeposit: false,
    insuranceFund: false,
    securityRecord: "Fair - Crypto-to-crypto focused",
    kycRequired: false,
    rating: 7.4,
  },
};

/**
 * Retrieve exchange data by slug
 * @param slug - The exchange slug identifier
 * @returns Exchange comparison data or undefined if not found
 */
export function getExchangeBySlug(
  slug: string
): ExchangeComparisonData | undefined {
  return exchangesData[slug];
}

/**
 * Compare two exchanges and highlight differences
 * @param slug1 - First exchange slug
 * @param slug2 - Second exchange slug
 * @returns Comparison object with differences
 */
export function compareExchanges(
  slug1: string,
  slug2: string
): ExchangeComparison | null {
  const exchange1 = getExchangeBySlug(slug1);
  const exchange2 = getExchangeBySlug(slug2);

  if (!exchange1 || !exchange2) {
    return null;
  }

  const differences: ExchangeComparison["differences"] = {};

  // Compare all keys
  const keys = new Set([
    ...Object.keys(exchange1),
    ...Object.keys(exchange2),
  ]);

  for (const key of keys) {
    const val1 = (exchange1 as any)[key];
    const val2 = (exchange2 as any)[key];

    // Skip slug as it's identical by definition
    if (key === "slug") continue;

    // Deep comparison for objects
    if (typeof val1 === "object" && typeof val2 === "object") {
      if (JSON.stringify(val1) !== JSON.stringify(val2)) {
        differences[key] = { exchange1: val1, exchange2: val2 };
      }
    } else if (val1 !== val2) {
      differences[key] = { exchange1: val1, exchange2: val2 };
    }
  }

  return {
    exchange1,
    exchange2,
    differences,
  };
}

/**
 * Get top exchanges ranked by a specific criteria
 * @param criteria - The field to rank by (rating, coins, users, founded, etc.)
 * @param limit - Maximum number of results (default: 10)
 * @returns Sorted array of exchanges
 */
export function getTopExchangesBy(
  criteria: keyof ExchangeComparisonData,
  limit: number = 10
): ExchangeComparisonData[] {
  const exchanges = Object.values(exchangesData);

  // Sort by criteria
  const sorted = exchanges.sort((a, b) => {
    const aVal = (a as any)[criteria];
    const bVal = (b as any)[criteria];

    // Handle numeric values
    if (typeof aVal === "number" && typeof bVal === "number") {
      return bVal - aVal;
    }

    // Handle string values (e.g., "100M+" should be compared numerically)
    if (criteria === "users") {
      const aNum = parseInt((aVal as string).replace(/\D/g, "")) || 0;
      const bNum = parseInt((bVal as string).replace(/\D/g, "")) || 0;
      return bNum - aNum;
    }

    // Handle rating
    if (criteria === "rating") {
      return Number(bVal) - Number(aVal);
    }

    // Fallback to string comparison
    return String(bVal).localeCompare(String(aVal));
  });

  return sorted.slice(0, limit);
}

/**
 * Get all available exchanges
 * @returns Array of all exchange data
 */
export function getAllExchanges(): ExchangeComparisonData[] {
  return Object.values(exchangesData);
}

/**
 * Filter exchanges by criteria
 * @param predicate - Function to test each exchange
 * @returns Filtered array of exchanges
 */
export function filterExchanges(
  predicate: (exchange: ExchangeComparisonData) => boolean
): ExchangeComparisonData[] {
  return Object.values(exchangesData).filter(predicate);
}

/**
 * Get exchanges that offer specific features
 * @param features - Object with boolean feature flags
 * @returns Array of exchanges offering all specified features
 */
export function getExchangesByFeatures(features: Partial<ExchangeComparisonData>): ExchangeComparisonData[] {
  return Object.values(exchangesData).filter((exchange) => {
    for (const [key, value] of Object.entries(features)) {
      if ((exchange as any)[key] !== value) {
        return false;
      }
    }
    return true;
  });
}

export default {
  getExchangeBySlug,
  compareExchanges,
  getTopExchangesBy,
  getAllExchanges,
  filterExchanges,
  getExchangesByFeatures,
};
