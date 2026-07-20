#!/bin/bash
# ─────────────────────────────────────────────
#  Rivelle Image Optimizer
#  Converts all JPG/PNG in photos/ → WebP
#  Quality: 82 | Max width: 1920px
# ─────────────────────────────────────────────

PHOTOS_DIR="/Users/chaitanya/Desktop/Rivelle-stays/frontend/public/photos"
QUALITY=82
MAX_WIDTH=1920

total=0
converted=0
skipped=0
saved_bytes=0

# Count total images first
total=$(find "$PHOTOS_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | wc -l | tr -d ' ')
echo "🔍 Found $total images to compress..."
echo ""

i=0
while IFS= read -r img; do
  i=$((i + 1))
  dir=$(dirname "$img")
  base=$(basename "$img")
  name="${base%.*}"
  webp_out="$dir/$name.webp"

  # Skip if webp already exists and is newer
  if [ -f "$webp_out" ] && [ "$webp_out" -nt "$img" ]; then
    skipped=$((skipped + 1))
    continue
  fi

  orig_size=$(stat -f%z "$img")

  # Convert to WebP: quality 82, resize to max 1920px wide
  cwebp -q $QUALITY -resize $MAX_WIDTH 0 "$img" -o "$webp_out" 2>/dev/null

  if [ $? -eq 0 ]; then
    new_size=$(stat -f%z "$webp_out")
    diff=$((orig_size - new_size))
    saved_bytes=$((saved_bytes + diff))
    converted=$((converted + 1))
    pct=$(( (diff * 100) / orig_size ))
    printf "  [%3d/%d] %-50s  %dKB → %dKB (-%d%%)\n" \
      "$i" "$total" "${base}" \
      "$((orig_size/1024))" "$((new_size/1024))" "$pct"
  else
    echo "  ❌ Failed: $img"
  fi
done < <(find "$PHOTOS_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \))

echo ""
echo "────────────────────────────────────────────"
echo "✅  Converted : $converted images"
echo "⏭️   Skipped   : $skipped (already done)"
echo "💾  Space saved: $((saved_bytes / 1024 / 1024)) MB"
echo "────────────────────────────────────────────"
echo ""
echo "📌 Next step: Update React code to use .webp instead of .jpg"
