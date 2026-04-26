#!/bin/bash
# verify-deploy.sh — post-deploy URL verification for ExpatAutoAdviser

set -u
BASE="https://www.expatautoadviser.com"
TODAY_UTC=$(date -u +%Y-%m-%d)
FAIL=0
PASS=0

check() {
  local url="$1"
  local pattern="$2"
  local description="$3"
  printf "  %-55s " "$description"
  local body
  body=$(curl -sS --max-time 15 "$url" 2>/dev/null || true)
  if [ -z "$body" ]; then
    echo "❌ NO RESPONSE"
    FAIL=$((FAIL + 1))
    return
  fi
  if echo "$body" | grep -q "$pattern"; then
    echo "✓"
    PASS=$((PASS + 1))
  else
    echo "❌ MISSING: '$pattern'"
    FAIL=$((FAIL + 1))
  fi
}

echo ""
echo "==============================================================="
echo "ExpatAutoAdviser post-deploy verification"
echo "Time: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
echo "==============================================================="
echo ""
echo "Sitemap + robots:"
check "$BASE/sitemap.xml" "expatautoadviser.com" "/sitemap.xml serves with site URL"
check "$BASE/sitemap.xml" "<urlset" "/sitemap.xml is well-formed XML"
check "$BASE/robots.txt" "Sitemap" "/robots.txt links to sitemap"

echo ""
echo "Live landing pages:"
check "$BASE/singapore" "Singapore" "/singapore landing renders"
check "$BASE/hong-kong" "Hong Kong" "/hong-kong landing renders"
check "$BASE/" "expat" "homepage renders"

echo ""
echo "Live article (sanity check):"
check "$BASE/singapore/coe-guide" "COE" "Singapore COE guide renders"

echo ""
echo "==============================================================="
if [ $FAIL -eq 0 ]; then
  echo "✓ All $PASS checks passed."
  echo "==============================================================="
  exit 0
else
  echo "❌ $FAIL check(s) failed, $PASS passed."
  echo "==============================================================="
  exit 1
fi
