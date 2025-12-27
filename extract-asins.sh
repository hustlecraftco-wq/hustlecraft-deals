#!/bin/bash

# Amazon affiliate links
links=(
  "https://amzn.to/4o4J61J"
  "https://amzn.to/4hflYLT"
  "https://amzn.to/46X5bIJ"
  "https://amzn.to/47993Ye"
  "https://amzn.to/4gZfxwb"
  "https://amzn.to/3Wp2Vos"
  "https://amzn.to/4pVTIlc"
  "https://amzn.to/46TFkRW"
  "https://amzn.to/4n8Sy3n"
  "https://amzn.to/4gQJYo4"
  "https://amzn.to/3Wa66AB"
  "https://amzn.to/3VPEQXW"
  "https://amzn.to/4nCNBkg"
  "https://amzn.to/3KF2HXH"
  "https://amzn.to/3VQtcvU"
  "https://amzn.to/42sCNN7"
  "https://amzn.to/4nBKBol"
  "https://amzn.to/4mSCdPY"
)

echo "🔍 Extracting Amazon product data..."
echo ""

for i in "${!links[@]}"; do
  url="${links[$i]}"
  echo "[$((i+1))/${#links[@]}] Fetching: $url"
  
  # Follow redirect and get final URL
  final_url=$(curl -Ls -o /dev/null -w %{url_effective} "$url")
  
  # Extract ASIN from URL
  asin=$(echo "$final_url" | grep -oP '/dp/\K[A-Z0-9]{10}')
  
  echo "   ASIN: $asin"
  echo "   Final URL: $final_url"
  echo ""
  
  sleep 1
done

echo "✅ Done! ASINs extracted."
echo ""
echo "Next steps:"
echo "1. Visit each product page manually"
echo "2. Copy product title, price, and image URL"
echo "3. Or use the ASINs to query Amazon Product API"
