export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p className="text-lg">
            HustleCraft ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
            explains how we collect, use, and safeguard your information when you visit hustlecraftco.com.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Information We Collect</h2>
          
          <h3 className="text-xl font-semibold text-white mb-3">Automatically Collected Information</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring URLs</li>
            <li>Pages visited and time spent on pages</li>
            <li>IP address (anonymized)</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Information You Provide</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Email address (if you subscribe to our newsletter)</li>
            <li>Communication preferences</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and maintain our service</li>
            <li>To improve and optimize our website</li>
            <li>To analyze usage patterns</li>
            <li>To send you deal alerts (only if you opt in)</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our website and store 
            certain information. You can instruct your browser to refuse all cookies or to indicate when 
            a cookie is being sent.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Third-Party Services</h2>
          <p>
            We may use third-party services that collect, monitor, and analyze data:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-white">Analytics:</strong> To understand how users interact with our site</li>
            <li><strong className="text-white">Affiliate Networks:</strong> To track purchases made through our links</li>
            <li><strong className="text-white">Email Services:</strong> To send newsletters (if you subscribe)</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal information. However, 
            no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Children's Privacy</h2>
          <p>
            Our service is not intended for children under 13. We do not knowingly collect personal 
            information from children under 13.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by 
            posting the new Privacy Policy on this page with an updated "Last Updated" date.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, contact us at: privacy@hustlecraftco.com
          </p>

          <p className="text-sm text-slate-400 mt-8">
            Last updated: October 2025
          </p>
        </div>
      </div>
    </div>
  );
}
