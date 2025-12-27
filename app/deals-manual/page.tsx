import Link from 'next/link';

const deals = [
  {
    title: "Fire HD 10 Tablet - 50% Off",
    description: "Amazon's latest HD 10 tablet at half price. Great for streaming, reading, and everyday use.",
    price: "$74.99",
    originalPrice: "$149.99",
    savings: "Save $75",
    link: "https://amzn.to/3KQIuyc",
    category: "Electronics"
  },
  {
    title: "Samsung 49\" OLED Gaming Monitor",
    description: "Ultra-wide curved OLED display with DisplayHDR, FreeSync Premium Pro. Professional gaming experience.",
    price: "Check Amazon",
    originalPrice: "",
    savings: "Limited Time Deal",
    link: "https://amzn.to/3Wok1mk",
    category: "Gaming"
  },
  {
    title: "Fire HD 8 Kids Pro Tablet",
    description: "Kid-friendly tablet with parental controls, durable case, and 1 year of Amazon Kids+.",
    price: "Check Amazon",
    originalPrice: "",
    savings: "Today's Deal",
    link: "https://amzn.to/4mPIhsH",
    category: "Kids & Family"
  },
  {
    title: "ASUS Gaming Motherboard",
    description: "Military-grade components, PCIe 5.0 support, advanced cooling. Built for serious builds.",
    price: "Check Amazon",
    originalPrice: "",
    savings: "Hot Deal",
    link: "https://amzn.to/4olNIRl",
    category: "PC Components"
  },
  {
    title: "TP-Link WiFi 7 Mesh System",
    description: "Next-gen WiFi 7 mesh router system. Blazing speeds for whole-home coverage.",
    price: "Check Amazon",
    originalPrice: "",
    savings: "New Release",
    link: "https://amzn.to/42oUgpE",
    category: "Networking"
  },
  {
    title: "Samsung Galaxy Tab",
    description: "Expandable storage, long battery life, perfect for notes and productivity on the go.",
    price: "Check Amazon",
    originalPrice: "",
    savings: "Featured Deal",
    link: "https://amzn.to/477GFFK",
    category: "Tablets"
  },
];

export default function ManualDeals() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Today's Top Deals</h1>
          <p className="text-xl text-slate-400 mb-2">
            Hand-picked savings across tech, gaming, home, and more.
          </p>
          <p className="text-sm text-slate-500">
            As an Amazon Associate I earn from qualifying purchases.
          </p>
        </header>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal, i) => (
            <article 
              key={i} 
              className="bg-slate-800 rounded-xl p-6 hover:bg-slate-750 transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="text-xs font-semibold text-blue-400 mb-3 uppercase tracking-wider">
                {deal.category}
              </div>
              <h2 className="text-xl font-bold text-white mb-3 leading-tight">
                {deal.title}
              </h2>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                {deal.description}
              </p>
              
              <div className="mb-4">
                {deal.originalPrice ? (
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-green-400">{deal.price}</span>
                    <span className="text-slate-500 line-through">{deal.originalPrice}</span>
                  </div>
                ) : (
                  <div className="text-2xl font-bold text-blue-400">{deal.price}</div>
                )}
              </div>
              
              <div className="mb-6 text-red-400 font-semibold text-sm">
                {deal.savings}
              </div>
              
              <Link 
                href={deal.link}
                target="_blank"
                rel="nofollow sponsored noopener"
                className="block w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg text-center transition-all shadow-lg shadow-blue-500/25"
              >
                Get This Deal →
              </Link>
            </article>
          ))}
        </div>
        
        <footer className="mt-16 text-center space-y-3">
          <p className="text-slate-400 text-sm">
            Prices and availability change frequently. Click through to Amazon for current pricing.
          </p>
          <p className="text-slate-500 text-xs">
            As an Amazon Associate I earn from qualifying purchases.
          </p>
        </footer>
      </div>
    </div>
  );
}
