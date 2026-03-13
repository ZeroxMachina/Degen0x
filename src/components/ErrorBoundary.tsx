'use client';

import React, { ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('Error caught by boundary:', error);
    console.error('Error info:', errorInfo);
  }

  handleReset = (): void => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 to-slate-900 px-4">
            <div className="max-w-md w-full">
              <div className="bg-slate-900 border border-red-500/20 rounded-lg p-8 shadow-2xl">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-red-500/10 mb-4">
                  <svg
                    className="w-6 h-6 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h1 className="text-xl font-bold text-white mb-2">
                  Something went wrong
                </h1>
                <p className="text-slate-400 text-sm mb-4">
                  An unexpected error occurred. Please try again or contact
                  support if the problem persists.
                </p>
                {this.state.error && (
                  <details className="mb-6 text-xs">
                    <summary className="cursor-pointer text-slate-500 hover:text-slate-400 font-medium">
                      Error details
                    </summary>
                    <pre className="mt-2 p-2 bg-slate-950 rounded text-red-400 overflow-auto max-h-32">
                      {this.state.error.message}
                    </pre>
                  </details>
                )}
                <button
                  onClick={this.handleReset}
                  className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Try again
                </button>
              </div>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
