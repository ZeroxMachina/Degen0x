export default function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/20 border border-orange-500/40 mb-4">
            <svg
              className="w-8 h-8 text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.111 16.332a7 7 0 001.57 2.247m6.519-11.579a3 3 0 10-4.242 4.242M9 11H7m8 0h2m-6 4h6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">You're Offline</h1>
          <p className="text-slate-400 mb-6">
            Looks like you've lost your internet connection. Don't worry, you can still view cached pages.
          </p>
        </div>

        <div className="bg-slate-800/50 rounded-lg border border-slate-700 p-6 mb-6">
          <h2 className="text-left text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
            Cached Pages Available
          </h2>
          <ul className="text-left space-y-2">
            <li>
              <a
                href="/"
                className="inline-flex items-center text-orange-500 hover:text-orange-400 transition-colors"
              >
                <span className="mr-2">→</span>
                <span>Home</span>
              </a>
            </li>
            <li className="text-slate-500">
              <span className="mr-2">•</span>
              <span>Other pages you've recently visited are cached</span>
            </li>
          </ul>
        </div>

        <button
          onClick={() => {
            window.location.reload();
          }}
          className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
        >
          Try Again
        </button>

        <div className="mt-6 pt-6 border-t border-slate-700">
          <p className="text-xs text-slate-500">
            Connection will be restored automatically when you're back online.
          </p>
        </div>
      </div>
    </div>
  );
}
