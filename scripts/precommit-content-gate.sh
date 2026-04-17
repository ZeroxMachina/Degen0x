#!/usr/bin/env bash
# precommit-content-gate.sh — enforce the ramp-to-8 content rubric on staged pages.
#
# Install as a pre-commit hook:
#   ln -s ../../scripts/precommit-content-gate.sh .git/hooks/pre-commit
#
# Environment variables:
#   CONTENT_FLOOR    — minimum score (default 7.5)
#   CONTENT_SKIP     — set to "1" to bypass the gate for a single commit
#
# Phase 5 ramp-to-8.

set -euo pipefail

if [ "${CONTENT_SKIP:-0}" = "1" ]; then
  echo "[content-gate] skipped via CONTENT_SKIP=1"
  exit 0
fi

FLOOR="${CONTENT_FLOOR:-7.5}"

echo "[content-gate] scoring staged pages against floor=${FLOOR}"
python3 scripts/score_content.py --staged --floor "${FLOOR}"
rc=$?
if [ "$rc" -ne 0 ]; then
  echo
  echo "[content-gate] commit blocked — one or more pages below floor ${FLOOR}"
  echo "[content-gate] fix the failing pages or bypass once with CONTENT_SKIP=1"
  exit 1
fi

echo "[content-gate] all staged pages pass"
