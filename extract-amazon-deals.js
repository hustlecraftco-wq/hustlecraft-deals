const https = require('https');

const links = [
  'https://amzn.to/4o4J61J',
  'https://amzn.to/4hflYLT',
  'https://amzn.to/46X5bIJ',
  'https://amzn.to/47993Ye',
  'https://amzn.to/4gZfxwb',
  'https://amzn.to/3Wp2Vos',
  'https://amzn.to/4pVTIlc',
  'https://amzn.to/46TFkRW',
  'https://amzn.to/4n8Sy3n',
  'https://amzn.to/4gQJYo4',
  'https://amzn.to/3Wa66AB',
  'https://amzn.to/3VPEQXW',
  'https://amzn.to/4nCNBkg',
  'https://amzn.to/3KF2HXH',
  'https://amzn.to/3VQtcvU',
  'https://amzn.to/42sCNN7',
  'https://amzn.to/4nBKBol',
  'https://amzn.to/4mSCdPY'
];

async function fetchAmazonProduct(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
      }
    }, (res) => {
      let data = '';
      
      res.on('data', chunk => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          // Extract product title
          const titleMatch = data.match(/<span id="productTitle"[^>]*>([^<]+)<\/span>/);
          const title = titleMatch ? titleMatch[1].trim() : null;
          
          // Extract current price
          const priceMatch = data.match(/<span class="a-price-whole">([0-9,]+)<\/span><span class="a-price-fraction">([0-9]+)<\/span>/) ||
                           data.match(/<span class="a-offscreen">\$([0-9,]+\.[0-9]{2})<\/span>/);
          const price = priceMatch ? parseFloat((priceMatch[1] + (priceMatch[2] || '')).replace(',', '')) : null;
          
          // Extract list price (MSRP)
          const msrpMatch = data.match(/<span class="a-price a-text-price"[^>]*>.*?\$([0-9,]+\.[0-9]{2})<\/span>/) ||
                          data.match(/<span class="a-text-strike">.*?\$([0-9,]+\.[0-9]{2})<\/span>/);
          const msrp = msrpMatch ? parseFloat(msrpMatch[1].replace(',', '')) : null;
          
          // Extract main product image
          const imageMatch = data.match(/"hiRes":"([^"]+)"/) || 
                           data.match(/"large":"([^"]+)"/) ||
                           data.match(/data-old-hires="([^"]+)"/);
          const image = imageMatch ? imageMatch[1] : null;
          
          // Extract brand
          const brandMatch = data.match(/<a id="bylineInfo"[^>]*>([^<]+)<\/a>/) ||
                           data.match(/brand":\s*"([^"]+)"/);
          const brand = brandMatch ? brandMatch[1].replace('Visit the ', '').replace(' Store', '').trim() : null;
          
          // Extract ASIN
          const asinMatch = data.match(/data-asin="([A-Z0-9]{10})"/);
          const asin = asinMatch ? asinMatch[1] : null;
          
          resolve({
            title,
            price,
            msrp,
            image,
            brand,
            asin,
            url
          });
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', reject);
  });
}

async function processAllLinks() {
  console.log('🔍 Extracting product data from Amazon links...\n');
  
  const results = [];
  
  for (let i = 0; i < links.length; i++) {
    console.log(`[${i + 1}/${links.length}] Processing: ${links[i]}`);
    
    try {
      const product = await fetchAmazonProduct(links[i]);
      
      if (product.title) {
        console.log(`✅ ${product.title.substring(0, 60)}...`);
        console.log(`   Price: $${product.price || 'N/A'} | MSRP: $${product.msrp || 'N/A'} | Brand: ${product.brand || 'N/A'}`);
        results.push(product);
      } else {
        console.log(`❌ Could not extract data`);
      }
      
      // Add delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 2000));
      
    } catch (error) {
      console.log(`❌ Error: ${error.message}`);
    }
    
    console.log('');
  }
  
  console.log('\n📊 Summary:');
  console.log(`Successfully extracted: ${results.length}/${links.length} products\n`);
  
  // Generate deal objects
  console.log('\n📝 Generated deal objects:\n');
  console.log('const NEW_DEALS = [');
  
  results.forEach((product, index) => {
    const discount = product.msrp && product.price ? 
      Math.round(((product.msrp - product.price) / product.msrp) * 100) : 50;
    
    const score = calculateScore(discount, product.price, product.msrp);
    const slug = createSlug(product.title);
    const id = product.asin || `deal-${index + 1}`;
    
    console.log(`  {
    id: '${id}',
    title: ${JSON.stringify(product.title)},
    description: '', // Add description manually
    price: ${product.price || 0},
    msrp: ${product.msrp || product.price || 0},
    discount_pct: ${discount},
    brand: ${JSON.stringify(product.brand || 'Amazon')},
    vendor: 'Amazon',
    link: ${JSON.stringify(product.url)},
    score: ${score},
    slug: '${slug}',
    image_url: ${JSON.stringify(product.image || '')}
  },`);
  });
  
  console.log('];\n');
}

function calculateScore(discount, price, msrp) {
  // Scoring algorithm:
  // - Discount % (40% weight)
  // - Value saved in dollars (30% weight)  
  // - Price point attractiveness (30% weight)
  
  const discountScore = Math.min(discount / 100, 0.4);
  const savings = (msrp || price) - (price || 0);
  const savingsScore = Math.min(savings / 100, 0.3);
  const priceScore = price < 50 ? 0.3 : price < 100 ? 0.25 : price < 200 ? 0.2 : 0.15;
  
  return (discountScore + savingsScore + priceScore).toFixed(2);
}

function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 60);
}

processAllLinks();
