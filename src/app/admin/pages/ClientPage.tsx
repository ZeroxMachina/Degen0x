'use client';

import { useState, useEffect, useMemo, useCallback } from "react";

// ── Interfaces ──────────────────────────────────────────
interface PageEntry {
  slug: string;
  category: string;
  status: "index_follow" | "noindex_nofollow";
  inQueue: boolean;
  hasPageFile: boolean;
}

interface CategoryGroup {
  name: string;
  pages: PageEntry[];
  publishedCount: number;
  totalCount: number;
}

// ── Constants ───────────────────────────────────────────
const ADMIN_PASSWORD = "degen0x-admin-2026";

// ── Component ───────────────────────────────────────────
export default function AdminPagesPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [pages, setPages] = useState<PageEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "indexed" | "noindex">("all");
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [pendingChanges, setPendingChanges] = useState<Map<string, "index_follow" | "noindex_nofollow">>(new Map());

  // ── Auth ────────────────────────────────────────────────
  const handleLogin = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPasswordError("");
      sessionStorage.setItem("admin_auth", "1");
    } else {
      setPasswordError("Incorrect password");
    }
  }, [password]);

  useEffect(() => {
    if (sessionStorage.getItem("admin_auth") === "1") {
      setIsAuthenticated(true);
    }
  }, []);

  // ── Data Loading ────────────────────────────────────────
  const fetchPages = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/pages");
      if (!res.ok) throw new Error("Failed to fetch pages");
      const data = await res.json();
      setPages(data.pages);
    } catch (err) {
      showToast("Failed to load pages", "error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) fetchPages();
  }, [isAuthenticated, fetchPages]);

  // ── Toast ───────────────────────────────────────────────
  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  // ── Toggle Page Status ──────────────────────────────────
  const handleToggle = useCallback((slug: string, newStatus: "index_follow" | "noindex_nofollow") => {
    setPendingChanges(prev => {
      const next = new Map(prev);
      const page = pages.find(p => p.slug === slug);
      if (page && page.status === newStatus) {
        next.delete(slug);
      } else {
        next.set(slug, newStatus);
      }
      return next;
    });
  }, [pages]);

  const handleSaveChanges = useCallback(async () => {
    if (pendingChanges.size === 0) return;
    setSaving("bulk");
    try {
      const changes = Array.from(pendingChanges.entries()).map(([slug, status]) => ({ slug, status }));
      const res = await fetch("/api/admin/pages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ changes, password: ADMIN_PASSWORD }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to save");
      }
      showToast(`Saved ${changes.length} change(s) to published-pages.ts`, "success");
      setPendingChanges(new Map());
      await fetchPages();
    } catch (err: any) {
      showToast(err.message || "Failed to save changes", "error");
    } finally {
      setSaving(null);
    }
  }, [pendingChanges, fetchPages]);

  const handleDiscardChanges = useCallback(() => {
    setPendingChanges(new Map());
  }, []);

  // ── Derived Data ────────────────────────────────────────
  const categories = useMemo(() => {
    const catMap = new Map<string, PageEntry[]>();
    for (const page of pages) {
      const list = catMap.get(page.category) || [];
      list.push(page);
      catMap.set(page.category, list);
    }
    const groups: CategoryGroup[] = Array.from(catMap.entries())
      .map(([name, pgs]) => ({
        name,
        pages: pgs.sort((a, b) => a.slug.localeCompare(b.slug)),
        publishedCount: pgs.filter(p => {
          const pending = pendingChanges.get(p.slug);
          const effective = pending || p.status;
          return effective === "index_follow";
        }).length,
        totalCount: pgs.length,
      }))
      .sort((a, b) => b.totalCount - a.totalCount);
    return groups;
  }, [pages, pendingChanges]);

  const filteredCategories = useMemo(() => {
    return categories
      .filter(cat => filterCategory === "all" || cat.name === filterCategory)
      .map(cat => ({
        ...cat,
        pages: cat.pages.filter(page => {
          const effectiveStatus = pendingChanges.get(page.slug) || page.status;
          const matchSearch = !search || page.slug.toLowerCase().includes(search.toLowerCase());
          const matchStatus =
            filterStatus === "all" ||
            (filterStatus === "indexed" && effectiveStatus === "index_follow") ||
            (filterStatus === "noindex" && effectiveStatus === "noindex_nofollow");
          return matchSearch && matchStatus;
        }),
      }))
      .filter(cat => cat.pages.length > 0);
  }, [categories, search, filterStatus, filterCategory, pendingChanges]);

  const stats = useMemo(() => {
    const total = pages.length;
    const indexed = pages.filter(p => (pendingChanges.get(p.slug) || p.status) === "index_follow").length;
    const noindex = total - indexed;
    const inQueue = pages.filter(p => p.inQueue).length;
    return { total, indexed, noindex, inQueue };
  }, [pages, pendingChanges]);

  const toggleCategory = useCallback((name: string) => {
    setExpandedCategories(prev => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  }, []);

  const expandAll = useCallback(() => {
    setExpandedCategories(new Set(categories.map(c => c.name)));
  }, [categories]);

  const collapseAll = useCallback(() => {
    setExpandedCategories(new Set());
  }, []);

  // ── Login Screen ────────────────────────────────────────
  if (!isAuthenticated) {
    return (
      <div style={{
        minHeight: "100vh",
        background: "#0a0a0f",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}>
        <form onSubmit={handleLogin} style={{
          background: "#12121a",
          border: "1px solid #1e1e2e",
          borderRadius: "16px",
          padding: "48px",
          width: "400px",
          maxWidth: "90vw",
        }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <div style={{ fontSize: "32px", marginBottom: "8px" }}>🔐</div>
            <h1 style={{ color: "#f1f5f9", fontSize: "24px", fontWeight: 700, margin: 0 }}>
              degen0x Admin
            </h1>
            <p style={{ color: "#64748b", fontSize: "14px", marginTop: "8px" }}>
              Page Indexing Manager
            </p>
          </div>
          <div style={{ marginBottom: "16px" }}>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter admin password"
              autoFocus
              style={{
                width: "100%",
                padding: "12px 16px",
                background: "#0a0a0f",
                border: `1px solid ${passwordError ? "#ef4444" : "#1e1e2e"}`,
                borderRadius: "8px",
                color: "#f1f5f9",
                fontSize: "14px",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
            {passwordError && (
              <p style={{ color: "#ef4444", fontSize: "12px", marginTop: "6px" }}>{passwordError}</p>
            )}
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#6366f1",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Sign In
          </button>
        </form>
      </div>
    );
  }

  // ── Dashboard ───────────────────────────────────────────
  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0f",
      color: "#f1f5f9",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      {/* Toast */}
      {toast && (
        <div style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          padding: "12px 20px",
          background: toast.type === "success" ? "#065f46" : "#7f1d1d",
          border: `1px solid ${toast.type === "success" ? "#10b981" : "#ef4444"}`,
          borderRadius: "8px",
          color: "#f1f5f9",
          fontSize: "14px",
          zIndex: 1000,
          animation: "fadeIn 0.2s ease",
        }}>
          {toast.type === "success" ? "✅" : "❌"} {toast.message}
        </div>
      )}

      {/* Pending Changes Bar */}
      {pendingChanges.size > 0 && (
        <div style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "16px 32px",
          background: "#1e1b4b",
          borderTop: "2px solid #6366f1",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 999,
        }}>
          <span style={{ color: "#c7d2fe", fontSize: "14px" }}>
            <strong>{pendingChanges.size}</strong> unsaved change{pendingChanges.size !== 1 ? "s" : ""}
          </span>
          <div style={{ display: "flex", gap: "12px" }}>
            <button
              onClick={handleDiscardChanges}
              style={{
                padding: "8px 20px",
                background: "transparent",
                border: "1px solid #475569",
                borderRadius: "6px",
                color: "#94a3b8",
                fontSize: "13px",
                cursor: "pointer",
              }}
            >
              Discard
            </button>
            <button
              onClick={handleSaveChanges}
              disabled={saving !== null}
              style={{
                padding: "8px 20px",
                background: "#4f46e5",
                border: "none",
                borderRadius: "6px",
                color: "#fff",
                fontSize: "13px",
                fontWeight: 600,
                cursor: saving ? "wait" : "pointer",
                opacity: saving ? 0.7 : 1,
              }}
            >
              {saving ? "Saving..." : `Save ${pendingChanges.size} Change${pendingChanges.size !== 1 ? "s" : ""}`}
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header style={{
        padding: "24px 32px",
        borderBottom: "1px solid #1e1e2e",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <div>
          <h1 style={{ fontSize: "20px", fontWeight: 700, margin: 0, display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ color: "#4ade80" }}>●</span> degen0x Page Manager
          </h1>
          <p style={{ color: "#64748b", fontSize: "13px", marginTop: "4px" }}>
            Control Google indexing for all {stats.total.toLocaleString()} pages
          </p>
        </div>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <button onClick={fetchPages} disabled={loading} style={{
            padding: "8px 16px",
            background: "#1e1e2e",
            border: "1px solid #2e2e3e",
            borderRadius: "6px",
            color: "#94a3b8",
            fontSize: "12px",
            cursor: "pointer",
          }}>
            {loading ? "Loading..." : "↻ Refresh"}
          </button>
          <button onClick={() => { sessionStorage.removeItem("admin_auth"); setIsAuthenticated(false); }} style={{
            padding: "8px 16px",
            background: "#1e1e2e",
            border: "1px solid #2e2e3e",
            borderRadius: "6px",
            color: "#64748b",
            fontSize: "12px",
            cursor: "pointer",
          }}>
            Logout
          </button>
        </div>
      </header>

      {/* Stats Row */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "16px",
        padding: "24px 32px",
      }}>
        {[
          { label: "Total Pages", value: stats.total, color: "#6366f1" },
          { label: "Indexed (follow)", value: stats.indexed, color: "#4ade80" },
          { label: "No-Index (nofollow)", value: stats.noindex, color: "#f59e0b" },
          { label: "In Queue", value: stats.inQueue, color: "#06b6d4" },
        ].map(stat => (
          <div key={stat.label} style={{
            background: "#12121a",
            border: "1px solid #1e1e2e",
            borderRadius: "12px",
            padding: "20px",
          }}>
            <div style={{ color: "#64748b", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              {stat.label}
            </div>
            <div style={{ fontSize: "28px", fontWeight: 700, color: stat.color, marginTop: "4px" }}>
              {stat.value.toLocaleString()}
            </div>
            <div style={{
              marginTop: "8px",
              height: "3px",
              background: "#1e1e2e",
              borderRadius: "2px",
              overflow: "hidden",
            }}>
              <div style={{
                height: "100%",
                width: `${stats.total ? (stat.value / stats.total) * 100 : 0}%`,
                background: stat.color,
                borderRadius: "2px",
              }} />
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div style={{
        padding: "0 32px 16px",
        display: "flex",
        gap: "12px",
        alignItems: "center",
        flexWrap: "wrap",
      }}>
        <input
          type="text"
          placeholder="Search pages..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            padding: "8px 14px",
            background: "#12121a",
            border: "1px solid #1e1e2e",
            borderRadius: "6px",
            color: "#f1f5f9",
            fontSize: "13px",
            width: "280px",
            outline: "none",
          }}
        />
        <select
          value={filterStatus}
          onChange={e => setFilterStatus(e.target.value as any)}
          style={{
            padding: "8px 14px",
            background: "#12121a",
            border: "1px solid #1e1e2e",
            borderRadius: "6px",
            color: "#f1f5f9",
            fontSize: "13px",
            outline: "none",
          }}
        >
          <option value="all">All Status</option>
          <option value="indexed">Index, Follow</option>
          <option value="noindex">Noindex, Nofollow</option>
        </select>
        <select
          value={filterCategory}
          onChange={e => setFilterCategory(e.target.value)}
          style={{
            padding: "8px 14px",
            background: "#12121a",
            border: "1px solid #1e1e2e",
            borderRadius: "6px",
            color: "#f1f5f9",
            fontSize: "13px",
            outline: "none",
          }}
        >
          <option value="all">All Categories ({categories.length})</option>
          {categories.map(c => (
            <option key={c.name} value={c.name}>{c.name} ({c.totalCount})</option>
          ))}
        </select>
        <div style={{ marginLeft: "auto", display: "flex", gap: "8px" }}>
          <button onClick={expandAll} style={{
            padding: "6px 12px", background: "#1e1e2e", border: "1px solid #2e2e3e",
            borderRadius: "4px", color: "#94a3b8", fontSize: "11px", cursor: "pointer",
          }}>Expand All</button>
          <button onClick={collapseAll} style={{
            padding: "6px 12px", background: "#1e1e2e", border: "1px solid #2e2e3e",
            borderRadius: "4px", color: "#94a3b8", fontSize: "11px", cursor: "pointer",
          }}>Collapse All</button>
        </div>
      </div>

      {/* Categories */}
      <div style={{ padding: "0 32px 80px" }}>
        {loading && <p style={{ color: "#64748b", textAlign: "center", padding: "40px" }}>Loading pages...</p>}

        {!loading && filteredCategories.map(cat => {
          const isExpanded = expandedCategories.has(cat.name);
          return (
            <div key={cat.name} style={{
              background: "#12121a",
              border: "1px solid #1e1e2e",
              borderRadius: "10px",
              marginBottom: "12px",
              overflow: "hidden",
            }}>
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(cat.name)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px 20px",
                  background: "transparent",
                  border: "none",
                  color: "#f1f5f9",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ color: "#64748b", fontSize: "12px" }}>{isExpanded ? "▼" : "▶"}</span>
                  <span style={{ fontSize: "15px", fontWeight: 600 }}>/{cat.name}</span>
                  <span style={{
                    fontSize: "11px",
                    color: "#0a0a0f",
                    background: "#4ade80",
                    padding: "2px 8px",
                    borderRadius: "10px",
                    fontWeight: 600,
                  }}>
                    {cat.publishedCount} indexed
                  </span>
                  <span style={{
                    fontSize: "11px",
                    color: "#0a0a0f",
                    background: "#f59e0b",
                    padding: "2px 8px",
                    borderRadius: "10px",
                    fontWeight: 600,
                  }}>
                    {cat.pages.length - cat.publishedCount} noindex
                  </span>
                </div>
                <span style={{ color: "#64748b", fontSize: "13px" }}>
                  {cat.pages.length} page{cat.pages.length !== 1 ? "s" : ""}
                </span>
              </button>

              {/* Page Rows */}
              {isExpanded && (
                <div style={{ borderTop: "1px solid #1e1e2e" }}>
                  {cat.pages.map(page => {
                    const pendingStatus = pendingChanges.get(page.slug);
                    const effectiveStatus = pendingStatus || page.status;
                    const isModified = !!pendingStatus;
                    const isIndexed = effectiveStatus === "index_follow";
                    return (
                      <div
                        key={page.slug}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "10px 20px",
                          borderBottom: "1px solid #0f0f17",
                          background: isModified ? "#1a1a2e" : "transparent",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1, minWidth: 0 }}>
                          <span style={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            background: isIndexed ? "#4ade80" : "#f59e0b",
                            flexShrink: 0,
                          }} />
                          <span style={{
                            fontSize: "13px",
                            color: "#cbd5e1",
                            fontFamily: "monospace",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}>
                            {page.slug}
                          </span>
                          {isModified && (
                            <span style={{
                              fontSize: "10px",
                              color: "#a78bfa",
                              background: "#2e1065",
                              padding: "1px 6px",
                              borderRadius: "4px",
                              fontWeight: 600,
                              flexShrink: 0,
                            }}>
                              MODIFIED
                            </span>
                          )}
                          {page.inQueue && (
                            <span style={{
                              fontSize: "10px",
                              color: "#06b6d4",
                              background: "#083344",
                              padding: "1px 6px",
                              borderRadius: "4px",
                              fontWeight: 600,
                              flexShrink: 0,
                            }}>
                              QUEUED
                            </span>
                          )}
                          {!page.hasPageFile && (
                            <span style={{
                              fontSize: "10px",
                              color: "#ef4444",
                              background: "#450a0a",
                              padding: "1px 6px",
                              borderRadius: "4px",
                              fontWeight: 600,
                              flexShrink: 0,
                            }}>
                              NO FILE
                            </span>
                          )}
                        </div>
                        <div style={{ display: "flex", gap: "6px", flexShrink: 0 }}>
                          <button
                            onClick={() => handleToggle(page.slug, "index_follow")}
                            style={{
                              padding: "4px 12px",
                              fontSize: "11px",
                              fontWeight: 600,
                              borderRadius: "4px",
                              border: "none",
                              cursor: "pointer",
                              background: isIndexed ? "#166534" : "#1e1e2e",
                              color: isIndexed ? "#4ade80" : "#64748b",
                            }}
                          >
                            index, follow
                          </button>
                          <button
                            onClick={() => handleToggle(page.slug, "noindex_nofollow")}
                            style={{
                              padding: "4px 12px",
                              fontSize: "11px",
                              fontWeight: 600,
                              borderRadius: "4px",
                              border: "none",
                              cursor: "pointer",
                              background: !isIndexed ? "#78350f" : "#1e1e2e",
                              color: !isIndexed ? "#f59e0b" : "#64748b",
                            }}
                          >
                            noindex, nofollow
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        {!loading && filteredCategories.length === 0 && (
          <p style={{ color: "#64748b", textAlign: "center", padding: "40px" }}>
            No pages match your filters.
          </p>
        )}
      </div>
    </div>
  );
}
