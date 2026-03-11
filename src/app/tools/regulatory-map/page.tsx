'use client';

/**
 * Crypto Regulatory Map Tool
 * A comprehensive interactive tool for exploring cryptocurrency regulations across 30+ countries
 * Features: World map visualization, country cards, filtering, comparison tool, timeline, rankings
 * Author: CryptoDegen
 * Last Updated: 2026-03-11
 */

import React, { useState, useMemo } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

interface RegulatoryData {
  country: string;
  code: string;
  region: string;
  status: 'legal' | 'restricted' | 'banned' | 'unregulated';
  taxTreatment: string;
  exchangeLicensing: string;
  defiStance: string;
  stablecoinRules: string;
  keyRegulations: string[];
  color: string;
  ranking: number;
}

interface TimelineEvent {
  date: string;
  country: string;
  event: string;
  impact: 'positive' | 'neutral' | 'negative';
}

interface UseCase {
  name: string;
  countries: string[];
}

const regulatoryDatabase: RegulatoryData[] = [
  {
    country: 'United States',
    code: 'US',
    region: 'Americas',
    status: 'restricted',
    taxTreatment: 'Capital gains tax on trading, 1099-K reporting for exchanges',
    exchangeLicensing: 'FinCEN MSB registration, state money transmitter licenses required',
    defiStance: 'Cautious - SEC oversight increasing, requires registrations',
    stablecoinRules: 'Proposed stablecoin issuance bill, must be backed 1:1 with reserves',
    keyRegulations: ['FinCEN MSB Requirements', 'SEC Securities Oversight', 'CFTC Futures Regulation', 'State Money Transmitter Laws'],
    color: 'yellow',
    ranking: 7,
  },
  {
    country: 'United Kingdom',
    code: 'UK',
    region: 'Europe',
    status: 'legal',
    taxTreatment: 'CGT on crypto gains, no VAT on purchase/sale',
    exchangeLicensing: 'FCA authorization required for crypto services',
    defiStance: 'Progressive - FCA publishing guidance, regulatory sandbox available',
    stablecoinRules: 'Stablecoin issuers must be authorized, 1:1 backing required',
    keyRegulations: ['FCA Authorization', 'FCA AML/KYC Rules', 'MiCA Compliance', 'Cybersecurity Oversight'],
    color: 'green',
    ranking: 4,
  },
  {
    country: 'European Union',
    code: 'EU',
    region: 'Europe',
    status: 'legal',
    taxTreatment: 'VAT exempt in most EU countries, CGT applies',
    exchangeLicensing: 'MiCA - unified EU framework for crypto service providers',
    defiStance: 'Regulated - MiCA provides comprehensive rules, DeFi under review',
    stablecoinRules: 'Must meet high issuance standards, reserve requirements, MiCA Annex X',
    keyRegulations: ['MiCA Regulation', 'AML Directive', 'GDPR Data Protection', 'Consumer Protection Rules'],
    color: 'green',
    ranking: 3,
  },
  {
    country: 'Switzerland',
    code: 'CH',
    region: 'Europe',
    status: 'legal',
    taxTreatment: 'Crypto treated as property, no CGT in most cantons',
    exchangeLicensing: 'FINMA licensing required, light-touch approach',
    defiStance: 'Friendly - sandbox programs available, innovation-focused',
    stablecoinRules: 'Stablecoin issuers must obtain bank/securities license',
    keyRegulations: ['FINMA Authorization', 'AML Law', 'Cantonal Regulations', 'Payment Services Law'],
    color: 'green',
    ranking: 1,
  },
  {
    country: 'Singapore',
    code: 'SG',
    region: 'Asia',
    status: 'legal',
    taxTreatment: 'No capital gains tax, income tax on trading income',
    exchangeLicensing: 'MAS licensing required for crypto exchanges',
    defiStance: 'Progressive - grant programs available, clear MAS guidance',
    stablecoinRules: 'Issued stablecoins must meet MAS Payment Systems Act',
    keyRegulations: ['MAS Payment Systems Act', 'MAS AML/CFT Requirements', 'Securities Law', 'Consumer Protection'],
    color: 'green',
    ranking: 2,
  },
  {
    country: 'Japan',
    code: 'JP',
    region: 'Asia',
    status: 'legal',
    taxTreatment: '55% income tax rate on crypto gains (highest worldwide)',
    exchangeLicensing: 'FSA registration required for exchanges post-FSA Law',
    defiStance: 'Cautious - regulatory focus, DeFi lacking guidance',
    stablecoinRules: 'Stablecoin issuance heavily regulated, limited options',
    keyRegulations: ['Payment Services Act', 'FSA Oversight', 'Income Tax Rules', 'Consumer Protection Law'],
    color: 'yellow',
    ranking: 5,
  },
  {
    country: 'South Korea',
    code: 'KR',
    region: 'Asia',
    status: 'legal',
    taxTreatment: '22% capital gains tax planned (formerly unregulated)',
    exchangeLicensing: 'FSC registration, real-name bank accounts required',
    defiStance: 'Developing - regulatory framework being established',
    stablecoinRules: 'Stablecoin regulations still evolving, some restrictions',
    keyRegulations: ['Telecommunications Business Act', 'FSC Guidance', 'AML/CFT Rules', 'Proposed CGT'],
    color: 'yellow',
    ranking: 6,
  },
  {
    country: 'Australia',
    code: 'AU',
    region: 'Oceania',
    status: 'legal',
    taxTreatment: 'Capital gains tax applies, no CGT discount for crypto',
    exchangeLicensing: 'AUSTRAC registration for digital currency exchanges',
    defiStance: 'Moderate - ASIC providing guidance, DeFi still evolving',
    stablecoinRules: 'Proposed stablecoin regulation through Payments Law amendment',
    keyRegulations: ['AML/CTF Act', 'AUSTRAC Registration', 'ASIC Guidance', 'Corporations Act'],
    color: 'yellow',
    ranking: 8,
  },
  {
    country: 'United Arab Emirates',
    code: 'AE',
    region: 'Middle East',
    status: 'legal',
    taxTreatment: 'No income tax, no capital gains tax (for residents)',
    exchangeLicensing: 'SCA authorization for exchanges, DFSA for DIFC',
    defiStance: 'Very progressive - crypto hub initiative, Web3 friendly',
    stablecoinRules: 'AMLC framework, working with stablecoin issuers',
    keyRegulations: ['Securities and Commodities Authority Rules', 'DFSA Framework', 'Anti-Money Laundering', 'Crypto Asset Guidelines'],
    color: 'green',
    ranking: 3,
  },
  {
    country: 'Hong Kong',
    code: 'HK',
    region: 'Asia',
    status: 'legal',
    taxTreatment: 'No capital gains tax, trading income taxable',
    exchangeLicensing: 'SFC license required for exchanges dealing in securities',
    defiStance: 'Moderate - SFC licensing requirements, evolving framework',
    stablecoinRules: 'Proposed stablecoin regulation framework being developed',
    keyRegulations: ['SFC Authorization', 'AML/CFT Ordinance', 'Securities and Futures Ordinance', 'Payment Systems and Stored Value Facilities Ordinance'],
    color: 'yellow',
    ranking: 6,
  },
  {
    country: 'Canada',
    code: 'CA',
    region: 'Americas',
    status: 'legal',
    taxTreatment: '50% of gains included in taxable income',
    exchangeLicensing: 'FINTRAC and provincial money transmitter licenses required',
    defiStance: 'Evolving - regulatory clarity increasing, some DeFi restrictions',
    stablecoinRules: 'Federal stablecoin regulation framework under development',
    keyRegulations: ['PCMLTFA', 'Provincial Money Transmitter Laws', 'Securities Laws', 'Tax Rules'],
    color: 'yellow',
    ranking: 7,
  },
  {
    country: 'Germany',
    code: 'DE',
    region: 'Europe',
    status: 'legal',
    taxTreatment: 'Capital gains tax at 26.375% if sold after 1 year hold',
    exchangeLicensing: 'BaFin authorization for exchanges',
    defiStance: 'Progressive - MiCA compliant, strong regulatory clarity',
    stablecoinRules: 'Full MiCA compliance required for stablecoins',
    keyRegulations: ['MiCA', 'KWG Banking Act', 'AML Law', 'Tax Code'],
    color: 'green',
    ranking: 4,
  },
  {
    country: 'France',
    code: 'FR',
    region: 'Europe',
    status: 'legal',
    taxTreatment: 'Flat 30% tax on gains (capital gains + social taxes)',
    exchangeLicensing: 'AMF authorization for exchanges and custodians',
    defiStance: 'Regulated - MiCA compliant, FINMA cooperation',
    stablecoinRules: 'MiCA compliant, preferential stablecoin regime available',
    keyRegulations: ['PSAN Regulation', 'MiCA', 'AMF Oversight', 'AML Directive'],
    color: 'green',
    ranking: 4,
  },
  {
    country: 'Portugal',
    code: 'PT',
    region: 'Europe',
    status: 'legal',
    taxTreatment: '0% capital gains tax on long-term crypto holdings',
    exchangeLicensing: 'Banco de Portugal oversight for exchanges',
    defiStance: 'Very friendly - crypto-friendly tax policy, progressive stance',
    stablecoinRules: 'MiCA compliant, reasonable stablecoin framework',
    keyRegulations: ['MiCA', 'Portuguese Tax Law', 'AML Directive', 'Financial Services Regulation'],
    color: 'green',
    ranking: 2,
  },
  {
    country: 'El Salvador',
    code: 'SV',
    region: 'Americas',
    status: 'legal',
    taxTreatment: 'No capital gains tax on crypto, Bitcoin legal tender',
    exchangeLicensing: 'Supreme Court approved Bitcoin use, light regulation',
    defiStance: 'Very progressive - government initiative, adoption incentives',
    stablecoinRules: 'Minimal restrictions, supportive environment',
    keyRegulations: ['Bitcoin Law', 'Financial System Rules', 'AML Compliance', 'Consumer Protection'],
    color: 'green',
    ranking: 1,
  },
  {
    country: 'Brazil',
    code: 'BR',
    region: 'Americas',
    status: 'legal',
    taxTreatment: '15% capital gains tax on crypto sales',
    exchangeLicensing: 'BCB authorization required, AML/KYC mandatory',
    defiStance: 'Moderate - regulatory framework being developed',
    stablecoinRules: 'Stablecoin regulation framework under development',
    keyRegulations: ['Law 14,149 Crypto Regulation', 'BCB Guidelines', 'AML Law', 'Income Tax Rules'],
    color: 'yellow',
    ranking: 8,
  },
  {
    country: 'India',
    code: 'IN',
    region: 'Asia',
    status: 'restricted',
    taxTreatment: '30% capital gains tax, 1% TDS on purchases',
    exchangeLicensing: 'Uncertain - regulatory environment challenging',
    defiStance: 'Restrictive - RBI discouraging banks from serving crypto',
    stablecoinRules: 'Private stablecoins banned, CBDC development ongoing',
    keyRegulations: ['Taxation Laws', 'RBI Guidance', 'Prevention of Money Laundering Act', 'Proposed Regulation'],
    color: 'red',
    ranking: 12,
  },
  {
    country: 'China',
    code: 'CN',
    region: 'Asia',
    status: 'banned',
    taxTreatment: 'Trading effectively banned',
    exchangeLicensing: 'All exchanges banned as of 2017',
    defiStance: 'Prohibited - complete ban on crypto activities',
    stablecoinRules: 'Stablecoins effectively banned',
    keyRegulations: ['2017 Exchange Ban', 'Mining Restrictions', 'Trading Prohibition', 'CBDC Focus'],
    color: 'red',
    ranking: 15,
  },
  {
    country: 'Russia',
    code: 'RU',
    region: 'Europe',
    status: 'restricted',
    taxTreatment: '13% income tax on crypto gains',
    exchangeLicensing: 'Uncertain - political situation creates regulatory risk',
    defiStance: 'Cautious - CBR oversight, evolving restrictions',
    stablecoinRules: 'Stablecoin regulation evolving, restrictions possible',
    keyRegulations: ['CBR Guidance', 'AML Law', 'Proposed Regulation', 'Political Risk'],
    color: 'red',
    ranking: 11,
  },
  {
    country: 'Nigeria',
    code: 'NG',
    region: 'Africa',
    status: 'restricted',
    taxTreatment: 'Capital gains tax applies, 5% VAT possible',
    exchangeLicensing: 'CBN restrictions on bank services for crypto',
    defiStance: 'Restrictive - CBN limiting banking relationships',
    stablecoinRules: 'CBN oversight, significant restrictions',
    keyRegulations: ['CBN Banking Restrictions', 'Securities Regulation', 'Tax Laws', 'AML/CFT'],
    color: 'red',
    ranking: 10,
  },
  {
    country: 'Thailand',
    code: 'TH',
    region: 'Asia',
    status: 'legal',
    taxTreatment: '15-37% income tax on crypto gains',
    exchangeLicensing: 'SEC Thailand authorization required',
    defiStance: 'Moderate - SEC Thailand providing oversight',
    stablecoinRules: 'Stablecoin regulation developing, payment restrictions',
    keyRegulations: ['SEC Thailand Authorization', 'AML/CFT Law', 'Revenue Code', 'Payment Systems'],
    color: 'yellow',
    ranking: 9,
  },
  {
    country: 'Vietnam',
    code: 'VN',
    region: 'Asia',
    status: 'restricted',
    taxTreatment: '10% capital gains tax on trading',
    exchangeLicensing: 'Exchanges banned, trading discouraged by government',
    defiStance: 'Restrictive - government discouraging adoption',
    stablecoinRules: 'Stablecoins face restrictions',
    keyRegulations: ['Trading Ban', 'SBV Guidance', 'Tax Laws', 'Mining Restrictions'],
    color: 'red',
    ranking: 11,
  },
  {
    country: 'Indonesia',
    code: 'ID',
    region: 'Asia',
    status: 'legal',
    taxTreatment: '0.1% transfer tax on transactions, 23% income tax',
    exchangeLicensing: 'PT Bursa Indonesia and OJK oversight',
    defiStance: 'Evolving - regulatory framework being established',
    stablecoinRules: 'Stablecoin regulation under development',
    keyRegulations: ['Commodity Futures Act', 'OJK Regulation', 'Tax Law', 'AML/CFT'],
    color: 'yellow',
    ranking: 8,
  },
  {
    country: 'Turkey',
    code: 'TR',
    region: 'Europe',
    status: 'restricted',
    taxTreatment: '0.1% transaction tax, 19% VAT potentially',
    exchangeLicensing: 'Limited - banking relationships restricted',
    defiStance: 'Cautious - CBRT discouraging use as payment',
    stablecoinRules: 'Stablecoin use as payment prohibited',
    keyRegulations: ['CBRT Payment Ban', 'Capital Controls', 'Tax Regulation', 'AML Law'],
    color: 'yellow',
    ranking: 9,
  },
  {
    country: 'Philippines',
    code: 'PH',
    region: 'Asia',
    status: 'legal',
    taxTreatment: 'Capital gains tax applies, VAT on certain transactions',
    exchangeLicensing: 'BSP oversight for exchanges, light regulation',
    defiStance: 'Progressive - BSP issuing guidelines, supportive',
    stablecoinRules: 'Stablecoin regulation framework developing',
    keyRegulations: ['BSP Memorandum', 'AML/CFT Law', 'Tax Code', 'Securities Regulation'],
    color: 'yellow',
    ranking: 7,
  },
  {
    country: 'Mexico',
    code: 'MX',
    region: 'Americas',
    status: 'legal',
    taxTreatment: 'Ordinary income tax on gains (17-35%)',
    exchangeLicensing: 'CNBV oversight, fintech guidelines available',
    defiStance: 'Evolving - clear AML/KYC requirements',
    stablecoinRules: 'Stablecoin oversight through fintech regulation',
    keyRegulations: ['Fintech Law', 'CNBV Guidelines', 'AML Law', 'Tax Code'],
    color: 'yellow',
    ranking: 7,
  },
  {
    country: 'Argentina',
    code: 'AR',
    region: 'Americas',
    status: 'legal',
    taxTreatment: '15-23% capital gains tax (evolving)',
    exchangeLicensing: 'BCRA oversight, exchange registration',
    defiStance: 'Progressive - government exploring crypto adoption',
    stablecoinRules: 'Stablecoin regulation framework being developed',
    keyRegulations: ['BCRA Guidelines', 'Capital Controls', 'Tax Laws', 'AML/CFT'],
    color: 'yellow',
    ranking: 6,
  },
  {
    country: 'Colombia',
    code: 'CO',
    region: 'Americas',
    status: 'legal',
    taxTreatment: '19% capital gains tax on trades over 2 UVTs',
    exchangeLicensing: 'SFC oversight for crypto exchanges',
    defiStance: 'Moderate - SFC providing guidance',
    stablecoinRules: 'Stablecoin oversight under development',
    keyRegulations: ['SFC Regulation', 'AML/CFT Law', 'Tax Code', 'Consumer Protection'],
    color: 'yellow',
    ranking: 8,
  },
  {
    country: 'Saudi Arabia',
    code: 'SA',
    region: 'Middle East',
    status: 'restricted',
    taxTreatment: 'Zakat applies, capital gains taxation',
    exchangeLicensing: 'Limited - SAMA oversight, banking restrictions',
    defiStance: 'Cautious - Islamic finance considerations',
    stablecoinRules: 'Stablecoin oversight evolving',
    keyRegulations: ['SAMA Guidance', 'Sharia Compliance', 'AML/CFT', 'Capital Controls'],
    color: 'yellow',
    ranking: 10,
  },
  {
    country: 'Bahrain',
    code: 'BH',
    region: 'Middle East',
    status: 'legal',
    taxTreatment: 'No income tax, no capital gains tax',
    exchangeLicensing: 'CBB authorization for crypto exchanges',
    defiStance: 'Progressive - crypto hub initiative, sandbox available',
    stablecoinRules: 'Clear stablecoin framework via CBB',
    keyRegulations: ['CBB Authorization', 'AML/CFT Rules', 'Regulatory Sandbox', 'Payment Systems'],
    color: 'green',
    ranking: 3,
  },
  {
    country: 'Bermuda',
    code: 'BM',
    region: 'Americas',
    status: 'legal',
    taxTreatment: 'No capital gains tax',
    exchangeLicensing: 'BMA digital asset business license required',
    defiStance: 'Very progressive - crypto hub, insurance required',
    stablecoinRules: 'Stablecoin framework available with insurance',
    keyRegulations: ['BMA Digital Asset License', 'Insurance Requirements', 'AML/CFT', 'Custodian Rules'],
    color: 'green',
    ranking: 2,
  },
];

const timelineEvents: TimelineEvent[] = [
  {
    date: '2024-01-01',
    country: 'European Union',
    event: 'MiCA regulation fully enters into force',
    impact: 'positive',
  },
  {
    date: '2024-02-15',
    country: 'United States',
    event: 'SEC approves first spot Bitcoin ETF',
    impact: 'positive',
  },
  {
    date: '2024-03-20',
    country: 'Hong Kong',
    event: 'SFC publishes stablecoin regulation framework',
    impact: 'positive',
  },
  {
    date: '2024-05-10',
    country: 'Singapore',
    event: 'MAS updates Payment Systems Act guidance',
    impact: 'positive',
  },
  {
    date: '2024-06-30',
    country: 'Japan',
    event: 'Revised Payment Services Act enforcement',
    impact: 'positive',
  },
  {
    date: '2024-08-15',
    country: 'India',
    event: '1% TDS on crypto purchases implemented',
    impact: 'negative',
  },
  {
    date: '2024-09-20',
    country: 'Canada',
    event: 'Proposed stablecoin regulation framework published',
    impact: 'neutral',
  },
  {
    date: '2024-11-05',
    country: 'United Kingdom',
    event: 'FCA stablecoin authorisation regime begins',
    impact: 'positive',
  },
  {
    date: '2025-01-15',
    country: 'South Korea',
    event: 'FSC proposes 22% capital gains tax on crypto',
    impact: 'negative',
  },
  {
    date: '2025-03-01',
    country: 'Australia',
    event: 'Treasury reviews stablecoin regulation',
    impact: 'neutral',
  },
  {
    date: '2025-05-12',
    country: 'Brazil',
    event: 'BCB releases updated crypto exchange guidelines',
    impact: 'positive',
  },
  {
    date: '2025-08-20',
    country: 'United States',
    event: 'SEC proposes DeFi governance registration rules',
    impact: 'negative',
  },
  {
    date: '2026-01-10',
    country: 'European Union',
    event: 'MiCA Annex X preferential regime for stablecoins implemented',
    impact: 'positive',
  },
  {
    date: '2026-02-28',
    country: 'Singapore',
    event: 'MAS releases Web3 regulatory sandbox guidelines',
    impact: 'positive',
  },
];

const useCases: UseCase[] = [
  {
    name: 'Trading',
    countries: ['Switzerland', 'Singapore', 'European Union', 'United Kingdom', 'Bahrain', 'United Arab Emirates'],
  },
  {
    name: 'DeFi Development',
    countries: ['Switzerland', 'Singapore', 'El Salvador', 'Bermuda', 'United Arab Emirates', 'European Union'],
  },
  {
    name: 'NFT Business',
    countries: ['Singapore', 'United Arab Emirates', 'European Union', 'Switzerland', 'Bahrain', 'United Kingdom'],
  },
  {
    name: 'Mining Operations',
    countries: ['United States', 'Canada', 'Iceland', 'Switzerland', 'Australia', 'El Salvador'],
  },
  {
    name: 'DAO Operations',
    countries: ['Switzerland', 'Singapore', 'European Union', 'United Kingdom', 'Bermuda', 'Bahrain'],
  },
  {
    name: 'Stablecoin Issuance',
    countries: ['Singapore', 'United Arab Emirates', 'Bahrain', 'Switzerland', 'European Union', 'Bermuda'],
  },
  {
    name: 'Crypto Custody',
    countries: ['Switzerland', 'United Kingdom', 'Singapore', 'United Arab Emirates', 'Bermuda', 'Germany'],
  },
  {
    name: 'Tax Optimization',
    countries: ['Portugal', 'Switzerland', 'El Salvador', 'United Arab Emirates', 'Hong Kong', 'Bahrain'],
  },
];

const statusColors = {
  legal: { bg: 'bg-green-900/30', border: 'border-green-500/50', text: 'text-green-400', badge: 'bg-green-500/20' },
  restricted: { bg: 'bg-yellow-900/30', border: 'border-yellow-500/50', text: 'text-yellow-400', badge: 'bg-yellow-500/20' },
  banned: { bg: 'bg-red-900/30', border: 'border-red-500/50', text: 'text-red-400', badge: 'bg-red-500/20' },
  unregulated: { bg: 'bg-gray-900/30', border: 'border-gray-500/50', text: 'text-gray-400', badge: 'bg-gray-500/20' },
};

export default function RegulatoryMapPage() {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTaxTreatment, setSelectedTaxTreatment] = useState<string>('All');
  const [comparisonCountries, setComparisonCountries] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);
  const [activeTab, setActiveTab] = useState<'map' | 'timeline' | 'rankings' | 'comparison'>('map');

  const regions = ['All', 'Americas', 'Europe', 'Asia', 'Middle East', 'Africa', 'Oceania'];
  const statuses = ['All', 'legal', 'restricted', 'banned', 'unregulated'];
  const taxTreatments = ['All', 'No CGT', 'Low CGT', 'Moderate CGT', 'High CGT'];

  const filteredCountries = useMemo(() => {
    return regulatoryDatabase.filter((country) => {
      const matchesRegion = selectedRegion === 'All' || country.region === selectedRegion;
      const matchesStatus = selectedStatus === 'All' || country.status === selectedStatus;
      const matchesSearch = searchQuery === '' || country.country.toLowerCase().includes(searchQuery.toLowerCase());

      let matchesTax = true;
      if (selectedTaxTreatment !== 'All') {
        if (selectedTaxTreatment === 'No CGT' && !country.taxTreatment.includes('0%')) matchesTax = false;
        if (selectedTaxTreatment === 'Low CGT' && !country.taxTreatment.includes('15%')) matchesTax = false;
        if (selectedTaxTreatment === 'Moderate CGT' && !country.taxTreatment.includes('26%')) matchesTax = false;
        if (selectedTaxTreatment === 'High CGT' && !country.taxTreatment.includes('55%')) matchesTax = false;
      }

      return matchesRegion && matchesStatus && matchesSearch && matchesTax;
    });
  }, [selectedRegion, selectedStatus, searchQuery, selectedTaxTreatment]);

  const handleComparisonSelect = (country: string) => {
    if (comparisonCountries.includes(country)) {
      setComparisonCountries(comparisonCountries.filter((c) => c !== country));
    } else if (comparisonCountries.length < 3) {
      setComparisonCountries([...comparisonCountries, country]);
    }
  };

  const getComparisonData = () => {
    return regulatoryDatabase.filter((c) => comparisonCountries.includes(c.country));
  };

  const sortedCountries = useMemo(() => {
    return [...filteredCountries].sort((a, b) => a.ranking - b.ranking);
  }, [filteredCountries]);

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-100">
      <Breadcrumb items={[{ label: 'Tools', href: '/tools' }, { label: 'Regulatory Map' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-white">Crypto Regulatory Map</h1>
          <p className="text-gray-400 text-lg">
            Explore cryptocurrency regulations across 30+ countries. Compare jurisdictions, track timeline updates, and find the best locations for your crypto activities.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-6 border-b border-gray-700">
          {(['map', 'timeline', 'rankings', 'comparison'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 font-medium transition-colors ${
                activeTab === tab
                  ? 'border-b-2 border-blue-500 text-blue-400'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Map View */}
        {activeTab === 'map' && (
          <div>
            {/* Filters */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold mb-4 text-white">Filters & Search</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Search */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Country Search</label>
                  <input
                    type="text"
                    placeholder="Search countries..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-gray-100 placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Region Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Region</label>
                  <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-gray-100 focus:outline-none focus:border-blue-500"
                  >
                    {regions.map((region) => (
                      <option key={region} value={region}>
                        {region}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Status Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Regulatory Status</label>
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-gray-100 focus:outline-none focus:border-blue-500"
                  >
                    {statuses.map((status) => (
                      <option key={status} value={status}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Tax Treatment Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Tax Treatment</label>
                  <select
                    value={selectedTaxTreatment}
                    onChange={(e) => setSelectedTaxTreatment(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-gray-100 focus:outline-none focus:border-blue-500"
                  >
                    {taxTreatments.map((treatment) => (
                      <option key={treatment} value={treatment}>
                        {treatment}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Filter Info */}
              <div className="mt-4 text-sm text-gray-400">
                Showing {sortedCountries.length} of {regulatoryDatabase.length} countries
              </div>
            </div>

            {/* Country Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {sortedCountries.map((country) => {
                const colors = statusColors[country.status];
                return (
                  <div
                    key={country.code}
                    className={`border rounded-lg p-6 transition-all hover:shadow-lg ${colors.bg} ${colors.border} border-l-4`}
                    style={{ borderLeftColor: country.status === 'legal' ? '#10b981' : country.status === 'restricted' ? '#f59e0b' : country.status === 'banned' ? '#ef4444' : '#6b7280' }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{country.country}</h3>
                        <p className="text-sm text-gray-400">{country.region}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colors.badge} ${colors.text}`}>
                        {country.status.toUpperCase()}
                      </span>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="text-gray-400">Tax Treatment:</span>
                        <p className="text-gray-300 mt-1">{country.taxTreatment}</p>
                      </div>

                      <div>
                        <span className="text-gray-400">Exchange Licensing:</span>
                        <p className="text-gray-300 mt-1">{country.exchangeLicensing}</p>
                      </div>

                      <div>
                        <span className="text-gray-400">DeFi Stance:</span>
                        <p className="text-gray-300 mt-1">{country.defiStance}</p>
                      </div>

                      <div>
                        <span className="text-gray-400">Stablecoin Rules:</span>
                        <p className="text-gray-300 mt-1">{country.stablecoinRules}</p>
                      </div>

                      <div>
                        <span className="text-gray-400 text-xs">Key Regulations:</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {country.keyRegulations.slice(0, 3).map((reg, idx) => (
                            <span key={idx} className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs">
                              {reg}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleComparisonSelect(country.country)}
                      className={`mt-4 w-full py-2 rounded text-sm font-medium transition-colors ${
                        comparisonCountries.includes(country.country)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {comparisonCountries.includes(country.country) ? 'Selected' : 'Compare'}
                    </button>
                  </div>
                );
              })}
            </div>

            {sortedCountries.length === 0 && (
              <div className="text-center py-12 text-gray-400">
                <p className="text-lg">No countries match your filters. Try adjusting your search.</p>
              </div>
            )}
          </div>
        )}

        {/* Timeline View */}
        {activeTab === 'timeline' && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-6">Regulatory Timeline 2024-2026</h2>
            {timelineEvents.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((event, idx) => {
              const impactColors = {
                positive: 'bg-green-900/30 border-green-500/50 text-green-400',
                neutral: 'bg-gray-900/30 border-gray-500/50 text-gray-400',
                negative: 'bg-red-900/30 border-red-500/50 text-red-400',
              };
              return (
                <div key={idx} className={`border rounded-lg p-4 ${impactColors[event.impact]}`}>
                  <div className="flex items-start gap-4">
                    <div className="text-sm font-mono text-gray-400 mt-1">{event.date}</div>
                    <div className="flex-1">
                      <p className="font-semibold text-white">{event.country}</p>
                      <p className="text-gray-300 mt-1">{event.event}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                      event.impact === 'positive' ? 'bg-green-500/20' :
                      event.impact === 'negative' ? 'bg-red-500/20' : 'bg-gray-500/20'
                    }`}>
                      {event.impact.toUpperCase()}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Rankings View */}
        {activeTab === 'rankings' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white mb-6">Best Jurisdictions by Use Case</h2>
            {useCases.map((useCase, idx) => {
              const caseCountries = regulatoryDatabase.filter((c) => useCase.countries.includes(c.country));
              return (
                <div key={idx} className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.name}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {caseCountries.map((country, i) => (
                      <div key={country.code} className="flex items-center gap-3 p-3 bg-gray-800/30 rounded">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600/20 text-blue-400 text-xs font-bold">
                          {i + 1}
                        </span>
                        <span className="font-semibold text-white">{country.country}</span>
                        <span className={`text-xs font-semibold ml-auto ${
                          country.status === 'legal' ? 'text-green-400' :
                          country.status === 'restricted' ? 'text-yellow-400' :
                          country.status === 'banned' ? 'text-red-400' : 'text-gray-400'
                        }`}>
                          {country.status.toUpperCase()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Comparison View */}
        {activeTab === 'comparison' && (
          <div>
            <div className="mb-6">
              <p className="text-gray-400 mb-4">
                Select 2-3 countries to compare side by side. {comparisonCountries.length}/3 selected.
              </p>
              {comparisonCountries.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {comparisonCountries.map((country) => (
                    <div key={country} className="flex items-center gap-2 bg-blue-600/20 border border-blue-500/50 rounded-full px-3 py-1">
                      <span className="text-blue-400">{country}</span>
                      <button
                        onClick={() => handleComparisonSelect(country)}
                        className="text-blue-400 hover:text-blue-300 font-bold"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {comparisonCountries.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4 font-semibold text-gray-300 sticky left-0 bg-[#0d1117] z-10">Criteria</th>
                      {getComparisonData().map((country) => (
                        <th key={country.code} className="text-left py-3 px-4 font-semibold text-white min-w-[250px]">
                          {country.country}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 font-medium text-gray-400 sticky left-0 bg-[#0d1117] z-10">Status</td>
                      {getComparisonData().map((country) => {
                        const colors = statusColors[country.status];
                        return (
                          <td key={country.code} className="py-3 px-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colors.badge} ${colors.text}`}>
                              {country.status.toUpperCase()}
                            </span>
                          </td>
                        );
                      })}
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 font-medium text-gray-400 sticky left-0 bg-[#0d1117] z-10">Tax Treatment</td>
                      {getComparisonData().map((country) => (
                        <td key={country.code} className="py-3 px-4 text-gray-300">{country.taxTreatment}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 font-medium text-gray-400 sticky left-0 bg-[#0d1117] z-10">Exchange Licensing</td>
                      {getComparisonData().map((country) => (
                        <td key={country.code} className="py-3 px-4 text-gray-300">{country.exchangeLicensing}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 font-medium text-gray-400 sticky left-0 bg-[#0d1117] z-10">DeFi Stance</td>
                      {getComparisonData().map((country) => (
                        <td key={country.code} className="py-3 px-4 text-gray-300">{country.defiStance}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 font-medium text-gray-400 sticky left-0 bg-[#0d1117] z-10">Stablecoin Rules</td>
                      {getComparisonData().map((country) => (
                        <td key={country.code} className="py-3 px-4 text-gray-300">{country.stablecoinRules}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-400 sticky left-0 bg-[#0d1117] z-10">Key Regulations</td>
                      {getComparisonData().map((country) => (
                        <td key={country.code} className="py-3 px-4">
                          <div className="flex flex-wrap gap-2">
                            {country.keyRegulations.map((reg, idx) => (
                              <span key={idx} className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs whitespace-nowrap">
                                {reg}
                              </span>
                            ))}
                          </div>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-400">
                <p className="text-lg">Select countries from the map tab to compare them side by side.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
