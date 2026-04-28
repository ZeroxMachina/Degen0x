'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useCallback,
  useMemo,
} from 'react';
import {
  getVariant,
  trackConversion,
  getExperimentResults,
  PREDEFINED_EXPERIMENTS,
  getAllVariants,
  getAllExperimentResults,
  getExperimentById,
  getVariantById,
  Variant,
  ExperimentResults,
} from '@/lib/ab-testing';

export interface ABTestContextType {
  getVariant: (experimentId: string) => string;
  trackConversion: (experimentId: string, eventType?: string) => void;
  getResults: (experimentId: string) => ExperimentResults;
  allVariants: Record<string, string>;
  isDebugMode: boolean;
}

const ABTestContext = createContext<ABTestContextType | undefined>(undefined);

interface ABTestProviderProps {
  children: ReactNode;
}

/**
 * A/B Testing Provider - Wraps the application and provides testing context
 */
export function ABTestProvider({ children }: ABTestProviderProps) {
  const [mounted, setMounted] = useState(false);
  const [isDebugMode, setIsDebugMode] = useState(false);
  const [allVariants, setAllVariants] = useState<Record<string, string>>({});

  // Initialize on client side only
  useEffect(() => {
    setMounted(true);

    // Check for debug mode in URL
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      setIsDebugMode(params.get('ab_debug') === 'true');

      // Initialize all variants
      const variants = getAllVariants();
      setAllVariants(variants);
    }
  }, []);

  const handleGetVariant = useCallback((experimentId: string): string => {
    const experiment = getExperimentById(experimentId);
    if (!experiment) {
      console.warn(`Experiment ${experimentId} not found`);
      return '';
    }
    return getVariant(experimentId, experiment.variants);
  }, []);

  const handleTrackConversion = useCallback(
    (experimentId: string, eventType: string = 'conversion'): void => {
      const variantId = handleGetVariant(experimentId);
      if (variantId) {
        trackConversion(experimentId, variantId, eventType);
      }
    },
    [handleGetVariant]
  );

  const handleGetResults = useCallback((experimentId: string): ExperimentResults => {
    const experiment = getExperimentById(experimentId);
    if (!experiment) {
      return {
        experimentId,
        variants: {},
        totalVisitors: 0,
      };
    }
    return getExperimentResults(experimentId, experiment.variants);
  }, []);

  const value: ABTestContextType = useMemo(
    () => ({
      getVariant: handleGetVariant,
      trackConversion: handleTrackConversion,
      getResults: handleGetResults,
      allVariants,
      isDebugMode,
    }),
    [handleGetVariant, handleTrackConversion, handleGetResults, allVariants, isDebugMode]
  );

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ABTestContext.Provider value={value}>
      {children}
      {isDebugMode && <ABTestDebugPanel />}
    </ABTestContext.Provider>
  );
}

/**
 * Hook to use A/B testing context
 */
export function useABTest(): ABTestContextType {
  const context = useContext(ABTestContext);
  if (!context) {
    throw new Error('useABTest must be used within ABTestProvider');
  }
  return context;
}

/**
 * Hook to get a specific variant
 */
export function useVariant(experimentId: string): string {
  const { getVariant } = useABTest();
  return getVariant(experimentId);
}

/**
 * Hook to track conversions
 */
export function useTrackConversion(experimentId: string) {
  const { trackConversion } = useABTest();

  return useCallback(
    (eventType: string = 'conversion') => {
      trackConversion(experimentId, eventType);
    },
    [experimentId, trackConversion]
  );
}

/**
 * Hook to get experiment results
 */
export function useExperimentResults(experimentId: string): ExperimentResults {
  const { getResults } = useABTest();
  const [results, setResults] = useState<ExperimentResults>(() => getResults(experimentId));

  useEffect(() => {
    const interval = setInterval(() => {
      setResults(getResults(experimentId));
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, [experimentId, getResults]);

  return results;
}

/**
 * Component to conditionally render based on variant
 */
interface ABTestVariantProps {
  experimentId: string;
  variant: string;
  children: ReactNode;
  fallback?: ReactNode;
}

export function ABTestVariant({
  experimentId,
  variant,
  children,
  fallback,
}: ABTestVariantProps) {
  const currentVariant = useVariant(experimentId);

  if (currentVariant === variant) {
    return <>{children}</>;
  }

  return fallback ? <>{fallback}</> : null;
}

/**
 * Debug Panel - Shows experiment data when ab_debug=true
 */
function ABTestDebugPanel() {
  const { allVariants } = useABTest();
  const [isOpen, setIsOpen] = useState(true);
  const [selectedExperiment, setSelectedExperiment] = useState<string | null>(null);
  const [results, setResults] = useState<Record<string, ExperimentResults>>({});
  const [hoveredVariant, setHoveredVariant] = useState<string | null>(null);

  // Load results for all experiments
  useEffect(() => {
    const updateResults = () => {
      const newResults: Record<string, ExperimentResults> = {};
      const allResults = getAllExperimentResults();
      for (const result of allResults) {
        newResults[result.experimentId] = result;
      }
      setResults(newResults);
    };

    updateResults();
    const interval = setInterval(updateResults, 2000);

    return () => clearInterval(interval);
  }, []);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-[9999] px-3 py-1 bg-[#6366f1] hover:bg-[#4f46e5] text-[var(--color-text)] text-xs font-medium rounded transition-colors"
        title="Open A/B Test Debug Panel"
      >
        AB Debug
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-[9999] max-w-2xl w-full mx-4 max-h-[600px] overflow-hidden flex flex-col bg-[#0d1117] border border-[#30363d] rounded-lg shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 p-4 border-b border-[#30363d] bg-[#010409]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#3fb950]" />
          <h3 className="text-sm font-bold text-[#e6edf3]">A/B Testing Debug Panel</h3>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-[#8b949e] hover:text-[#e6edf3] transition-colors"
          title="Close"
        >
          ✕
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Experiments List */}
        <div className="border-b border-[#30363d]">
          {PREDEFINED_EXPERIMENTS.map((experiment) => {
            const isSelected = selectedExperiment === experiment.id;
            const currentVariant = allVariants[experiment.id];
            const experimentResults = results[experiment.id];

            return (
              <div
                key={experiment.id}
                className={`border-b border-[#30363d] last:border-b-0 transition-colors ${
                  isSelected ? 'bg-[#161b22]' : 'hover:bg-[#0d1117]'
                }`}
              >
                <button
                  onClick={() =>
                    setSelectedExperiment(isSelected ? null : experiment.id)
                  }
                  className="w-full text-left px-4 py-3 hover:bg-[#161b22] transition-colors"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-bold text-[#79c0ff] uppercase tracking-wider">
                      {experiment.id}
                    </span>
                    <span className="text-xs font-medium text-[#3fb950] px-2 py-0.5 bg-[#1f6feb]/20 rounded">
                      {currentVariant || 'unassigned'}
                    </span>
                  </div>
                  <p className="text-xs text-[#8b949e]">{experiment.name}</p>
                </button>

                {/* Expanded Details */}
                {isSelected && (
                  <div className="px-4 py-3 bg-[#010409] border-t border-[#30363d]">
                    <div className="space-y-3">
                      {/* Current Variant */}
                      <div>
                        <p className="text-xs font-semibold text-[#e6edf3] mb-2">
                          Current Variant:
                        </p>
                        <div className="bg-[#0d1117] border border-[#30363d] rounded p-2">
                          <span className="text-xs text-[#79c0ff] font-mono">
                            {currentVariant || 'Not assigned'}
                          </span>
                        </div>
                      </div>

                      {/* Variants */}
                      <div>
                        <p className="text-xs font-semibold text-[#e6edf3] mb-2">
                          Variants:
                        </p>
                        <div className="space-y-1">
                          {experiment.variants.map((variant) => (
                            <div
                              key={variant.id}
                              onMouseEnter={() => setHoveredVariant(variant.id)}
                              onMouseLeave={() => setHoveredVariant(null)}
                              className={`text-xs p-2 rounded transition-colors ${
                                hoveredVariant === variant.id
                                  ? 'bg-[#161b22]'
                                  : 'bg-[#0d1117] border border-[#30363d]'
                              }`}
                            >
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-[#8b949e]">
                                  {variant.name}
                                </span>
                                <span className="text-[#6e7681]">
                                  {variant.weight}%
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Results */}
                      {experimentResults && (
                        <div>
                          <p className="text-xs font-semibold text-[#e6edf3] mb-2">
                            Results:
                          </p>
                          <div className="space-y-1">
                            {experiment.variants.map((variant) => {
                              const variantResults =
                                experimentResults.variants[variant.id];
                              if (!variantResults) return null;

                              return (
                                <div
                                  key={variant.id}
                                  className="bg-[#0d1117] border border-[#30363d] rounded p-2"
                                >
                                  <div className="flex items-center justify-between gap-2 mb-1">
                                    <span className="text-xs text-[#8b949e]">
                                      {variant.name}
                                    </span>
                                    <span className="text-xs font-mono text-[#79c0ff]">
                                      {variantResults.conversions}
                                      {' / '}
                                      {variantResults.visits}
                                    </span>
                                  </div>
                                  <div className="w-full h-1.5 bg-[#161b22] rounded-full overflow-hidden">
                                    <div
                                      className="h-full bg-[#3fb950] transition-all"
                                      style={{
                                        width: `${variantResults.conversionRate}%`,
                                      }}
                                    />
                                  </div>
                                  <p className="text-xs text-[#6e7681] mt-1">
                                    {variantResults.conversionRate.toFixed(2)}%
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Total Visitors */}
                      {experimentResults && (
                        <div className="pt-2 border-t border-[#30363d]">
                          <p className="text-xs text-[#8b949e]">
                            Total Visitors:{' '}
                            <span className="font-mono text-[#79c0ff]">
                              {experimentResults.totalVisitors}
                            </span>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="p-3 border-t border-[#30363d] bg-[#010409] text-xs text-[#8b949e] space-y-1">
          <p>
            <span className="text-[#6e7681]">●</span> Green: Assigned variant
          </p>
          <p>
            <span className="text-[#6e7681]">●</span> Results update every 2s
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-2 border-t border-[#30363d] bg-[#010409]">
        <p className="text-xs text-[#6e7681]">
          Query: <span className="font-mono text-[#79c0ff]">?ab_debug=true</span>
        </p>
      </div>
    </div>
  );
}

/**
 * Utility component for A/B testing specific UI patterns
 */
interface ABTestMultiVariantProps {
  experimentId: string;
  variants: Record<string, ReactNode>;
}

export function ABTestMultiVariant({
  experimentId,
  variants,
}: ABTestMultiVariantProps) {
  const currentVariant = useVariant(experimentId);
  const content = variants[currentVariant];

  if (!content) {
    console.warn(
      `Variant ${currentVariant} not found in ABTestMultiVariant for experiment ${experimentId}`
    );
    return null;
  }

  return <>{content}</>;
}

/**
 * Higher-order component for wrapping components with A/B testing
 */
export function withABTest<P extends object>(
  Component: React.ComponentType<P & { variantId: string }>,
  experimentId: string
) {
  return function WithABTestComponent(props: P) {
    const variantId = useVariant(experimentId);

    return <Component {...props} variantId={variantId} />;
  };
}
