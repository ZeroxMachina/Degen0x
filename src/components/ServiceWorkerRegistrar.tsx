"use client";

import { useEffect, useState } from "react";

export default function ServiceWorkerRegistrar() {
  const [updateAvailable, setUpdateAvailable] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          registration.addEventListener("updatefound", () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener("statechange", () => {
                if (
                  newWorker.state === "activated" &&
                  navigator.serviceWorker.controller
                ) {
                  setUpdateAvailable(true);
                }
              });
            }
          });
        })
        .catch((err) => console.log("SW registration failed:", err));
    }
  }, []);

  if (!updateAvailable) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 z-50 glass rounded-xl p-4 border border-[var(--glass-border)]">
      <p className="text-sm font-medium text-[var(--color-text)]">
        New version available!
      </p>
      <p className="text-xs text-[var(--color-text-secondary)] mt-1">
        Refresh to get the latest crypto tools and data.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="mt-2 px-4 py-1.5 bg-[var(--color-primary)] text-white rounded-lg text-xs font-semibold hover:opacity-90 transition-opacity"
      >
        Refresh Now
      </button>
    </div>
  );
}
