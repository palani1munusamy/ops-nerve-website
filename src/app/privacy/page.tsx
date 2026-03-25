import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0d0f15]">
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-24 text-slate-300">
        <h1 className="text-4xl font-bold font-poppins text-white mb-4">Privacy Policy</h1>
        <p className="text-slate-500 mb-12">Last updated: March 2026</p>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">1. Who We Are</h2>
          <p className="leading-relaxed">
            OpsNerve (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) provides AI-powered operations intelligence software for engineering and platform teams. This Privacy Policy explains how we collect, use, and protect your personal information when you visit <strong className="text-white">opsnerve.ai</strong> or interact with us.
          </p>
          <p className="leading-relaxed mt-3">
            For any privacy-related enquiries, contact us at <a href="mailto:contact@opsnerve.ai" className="text-indigo-400 hover:text-indigo-300">contact@opsnerve.ai</a>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
          <p className="leading-relaxed mb-3">We collect only what is necessary to respond to your interest in OpsNerve:</p>
          <ul className="list-disc list-inside space-y-2 text-slate-400">
            <li><strong className="text-slate-300">Contact information</strong> — your work email address when you submit a form on our website.</li>
            <li><strong className="text-slate-300">Usage data</strong> — standard web server logs including IP address, browser type, pages visited, and time of visit. This data is anonymised and used solely for security and performance monitoring.</li>
            <li><strong className="text-slate-300">Communications</strong> — any information you voluntarily provide when you email or message us.</li>
          </ul>
          <p className="leading-relaxed mt-3">We do not collect sensitive personal data, financial information, or data from children under 16.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
          <p className="leading-relaxed mb-3">We use the information we collect to:</p>
          <ul className="list-disc list-inside space-y-2 text-slate-400">
            <li>Respond to your enquiry and arrange a product demonstration.</li>
            <li>Send you updates about OpsNerve features, news, or early access opportunities — only where you have consented or have an existing interest in our product.</li>
            <li>Improve our website and communications based on aggregated, anonymised usage patterns.</li>
            <li>Comply with legal obligations.</li>
          </ul>
          <p className="leading-relaxed mt-3">We will never use your information for automated decision-making or profiling that produces legal or similarly significant effects.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">4. Legal Basis for Processing</h2>
          <p className="leading-relaxed mb-3">Where applicable under GDPR or equivalent data protection laws, we process your personal data under the following legal bases:</p>
          <ul className="list-disc list-inside space-y-2 text-slate-400">
            <li><strong className="text-slate-300">Consent</strong> — when you submit your email to hear from us.</li>
            <li><strong className="text-slate-300">Legitimate interests</strong> — to respond to direct business enquiries and maintain the security of our systems.</li>
            <li><strong className="text-slate-300">Legal obligation</strong> — where required by applicable law.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">5. Third-Party Services</h2>
          <p className="leading-relaxed mb-3">We use the following third-party services that may process your data on our behalf:</p>
          <ul className="list-disc list-inside space-y-2 text-slate-400">
            <li><strong className="text-slate-300">FormSubmit (formsubmit.co)</strong> — handles form submissions on our website. Email addresses submitted via our contact forms are routed through their service. Please review their privacy policy at formsubmit.co.</li>
            <li><strong className="text-slate-300">Hosting provider</strong> — our website is hosted on infrastructure that may log access requests for security purposes.</li>
          </ul>
          <p className="leading-relaxed mt-3">We do not sell, rent, or share your personal data with any third party for marketing purposes.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">6. Data Retention</h2>
          <p className="leading-relaxed">
            We retain your contact information for as long as necessary to fulfil the purpose for which it was collected — typically the duration of our business relationship or follow-up conversation. If you ask us to stop contacting you, we will delete your data within 30 days, except where we are required to retain it by law.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">7. Cookies</h2>
          <p className="leading-relaxed">
            Our website does not currently use tracking cookies or third-party analytics scripts. If this changes, we will update this policy and seek your consent where required.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">8. Your Rights</h2>
          <p className="leading-relaxed mb-3">Depending on your location, you may have the right to:</p>
          <ul className="list-disc list-inside space-y-2 text-slate-400">
            <li>Access the personal data we hold about you.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Request deletion of your data (&ldquo;right to be forgotten&rdquo;).</li>
            <li>Withdraw consent at any time without affecting the lawfulness of prior processing.</li>
            <li>Object to or restrict processing of your data.</li>
            <li>Lodge a complaint with your local data protection authority.</li>
          </ul>
          <p className="leading-relaxed mt-3">To exercise any of these rights, email us at <a href="mailto:contact@opsnerve.ai" className="text-indigo-400 hover:text-indigo-300">contact@opsnerve.ai</a>. We will respond within 30 days.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">9. Security</h2>
          <p className="leading-relaxed">
            We take reasonable technical and organisational measures to protect your personal data against unauthorised access, loss, or misuse. However, no transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">10. Changes to This Policy</h2>
          <p className="leading-relaxed">
            We may update this Privacy Policy from time to time. We will post the revised version on this page with an updated date. For significant changes, we will notify you by email if we hold your contact information.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">11. Contact Us</h2>
          <p className="leading-relaxed">
            If you have any questions about this Privacy Policy or how we handle your data, please contact us at <a href="mailto:contact@opsnerve.ai" className="text-indigo-400 hover:text-indigo-300">contact@opsnerve.ai</a>.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
