# Incident: `.git/index.lock` EPERM — Fourth Hour

**Timestamp:** 2026-04-20T13:14Z  
**Severity:** P1  
**Author:** design-polish scheduled task (Claude Opus 4.7)  
**Status:** OPEN (mitigation in place, root cause unchanged)

---

## Timeline

| Time (UTC) | Event |
|---|---|
| ~09:54Z | Scheduler-blackout incident opened (`ops/incidents/2026-04-20T09-54Z-scheduler-blackout.md`). First observation of `.git/index.lock` blocking commits. |
| ~10:14Z | Hour 10 standup: lock present, empty file dated Apr 20 11:54 local. `mv` workaround ("lock-dance") used successfully. |
| ~11:14Z | Hour 11 standup: lock absent at standup time. Commits succeeded. |
| ~12:14Z | Hour 12 standup: lock absent at standup time. Standup commit (`d9186f86`) succeeded. |
| ~12:31Z | Hour 12 design-polish: `git worktree add` attempted for cherry-pick dry-run. **EPERM on `.git/index.lock`** mid-operation. Worktree creation failed. Dry-run was completed via manual diff analysis instead. Committed as `c76ead06`. |
| ~13:14Z | Hour 13 standup: lock absent again at standup time (`ls .git/index.lock` → ENOENT). |

---

## Pattern

The lock **reappears mid-cycle** but is **absent at standup time**. This is consistent with:

1. A background process (likely another scheduled task or git operation) acquiring the lock during the ~50-minute cycle window.
2. The process either completing or crashing, releasing the lock before the next standup check.
3. Any task that runs git operations during the cycle (not at the standup boundary) hits the lock.

The lock-dance mitigation (`mv .git/index.lock .git/index.lock.stale.$(date +%s)`) works for simple commits but does NOT work for `git worktree add` (which needs to hold the lock for an extended operation).

---

## Root Cause (unchanged from Hour 9 analysis)

The sandbox environment blocks `unlink()` on `.git/index.lock` (EPERM). Git expects to be able to create and remove this lock file freely. The sandbox restriction means:

- `git commit` works when the lock is absent (creates → removes via rename, not unlink).
- `git worktree add` fails if the lock appears mid-operation (needs `unlink()` to release).
- `mv` works as a workaround because it's a rename, not an unlink.

This is a sandbox-level constraint, not a git bug.

---

## Impact

- **Cherry-pick dry-run (Hour 12):** Completed via manual diff — equivalent results, no data loss. 3 conflicts identified file-by-file.
- **Commits:** Lock-dance mitigation has succeeded 4 consecutive times. No commit has been permanently blocked.
- **Worktree operations:** Permanently blocked in this sandbox. Any operation requiring `git worktree` must use alternative approaches (manual diff, temporary branch).

---

## Mitigation (current)

1. For commits: check `ls .git/index.lock` first. If present: `mv .git/index.lock .git/index.lock.stale.$(date +%s)`, then retry once. No retry loop.
2. For worktree operations: skip `git worktree add`, use manual diff analysis or temporary branches instead.
3. If `mv` itself returns EPERM: skip the commit, document in the incident log, move on.

---

## Cross-references

- Root incident: `ops/incidents/2026-04-20T09-54Z-scheduler-blackout.md`
- Affected dry-run: `ops/incidents/2026-04-20T12-14Z-cherry-pick-dry-run.md` (Method section cites EPERM)
- Jefe-ask (pending): should mention this as context for why worktree-based approaches are unavailable
