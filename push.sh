#!/data/data/com.termux/files/usr/bin/bash
# Script de push rapide
cd /sdcard/AFRILINK_TERMUX/TRANS-LEDGER

# Bump automatique du service worker
CURRENT=$(grep -oE "transledger-v[0-9]+" service-worker.js | head -1)
NUM=$(echo "$CURRENT" | grep -oE "[0-9]+")
NEW_NUM=$((NUM + 1))
sed -i "s/$CURRENT/transledger-v$NEW_NUM/" service-worker.js
echo "✅ SW bump : $CURRENT → transledger-v$NEW_NUM"

# Commit + push
git add -A
git commit -m "${1:-Mise à jour}"
git push
