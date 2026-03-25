import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#0d0f15]">
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-24 text-slate-300">
        <h1 className="text-4xl font-bold font-poppins text-white mb-4">Terms of Service</h1>
        <p className="text-slate-500 mb-12">Last updated: March 2026</p>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
          <p className="leading-relaxed">
            By accessing or using the OpsNerve website at <strong className="text-white">opsnerve.ai</strong> (&ldquo;Site&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, please do not use the Site. These Terms apply to all visitors and users of the Site.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">2. About OpsNerve</h2>
          <p className="leading-relaxed">
            OpsNerve provides AI-powered operations intelligence software — including anomaly detection, root cause analysis, and incident response tooling — for engineering and platform teams. The Site serves as a marketing and information resource for prospective customers and interested parties.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">3. Use of the Site</h2>
          <p className="leading-relaxed mb-3">You may use the Site for lawful purposes only. You agree not to:</p>
          <ul className="list-disc list-inside space-y-2 text-slate-400">
            <li>Use the Site in any way that violates applicable local, national, or international laws or regulations.</li>
            <li>Attempt to gain unauthorised access to any part of the Site or its underlying systems.</li>
            <li>Transmit any unsolicited or unauthorised advertising or promotional material.</li>
            <li>Interfere with or disrupt the integrity or performance of the Site.</li>
            <li>Use automated tools to scrape, crawl, or extract data from the Site without our prior written consent.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">4. Intellectual Property</h2>
          <p className="leading-relaxed">
            All content on the Site — including but not limited to text, graphics, logos, icons, images, product descriptions, and software — is the exclusive property of OpsNerve and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of any content without our prior written permission.
          </p>
          <p className="leading-relaxed mt-3">
            The OpsNerve name, logo, and product names are trademarks of OpsNerve. Nothing on this Site grants any licence or right to use these marks.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">5. Product Information and Availability</h2>
          <p className="leading-relaxed">
            The Site describes OpsNerve products and capabilities for informational purposes. We reserve the right to modify, update, or discontinue any product feature or service at any time without notice. Information on the Site does not constitute a binding offer or commitment to provide any specific functionality.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">6. Disclaimer of Warranties</h2>
          <p className="leading-relaxed">
            The Site and all content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, either express or implied. OpsNerve does not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components. We make no warranties regarding the accuracy, completeness, or suitability of any information on the Site.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">7. Limitation of Liability</h2>
          <p className="leading-relaxed">
            To the fullest extent permitted by applicable law, OpsNerve shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the Site or its content — even if we have been advised of the possibility of such damages. Our total liability for any claim arising from use of the Site shall not exceed £100.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">8. Third-Party Links</h2>
          <p className="leading-relaxed">
            The Site may contain links to third-party websites, including LinkedIn and other external services. These links are provided for convenience only. OpsNerve has no control over the content or practices of third-party sites and accepts no responsibility for them. Accessing third-party sites is at your own risk.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">9. Privacy</h2>
          <p className="leading-relaxed">
            Your use of the Site is also governed by our <a href="/privacy" className="text-indigo-400 hover:text-indigo-300">Privacy Policy</a>, which is incorporated into these Terms by reference. By using the Site, you consent to the data practices described in our Privacy Policy.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">10. Changes to These Terms</h2>
          <p className="leading-relaxed">
            We reserve the right to update or modify these Terms at any time. Changes will be posted on this page with a revised &ldquo;last updated&rdquo; date. Your continued use of the Site after any changes constitutes your acceptance of the updated Terms. We encourage you to review this page periodically.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">11. Governing Law</h2>
          <p className="leading-relaxed">
            These Terms are governed by and construed in accordance with the laws of the State of Georgia, United States. Any disputes arising from or in connection with these Terms shall be subject to the exclusive jurisdiction of the state and federal courts located in Atlanta, Georgia.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">12. Contact Us</h2>
          <p className="leading-relaxed">
            If you have any questions about these Terms, please contact us at <a href="mailto:contact@opsnerve.ai" className="text-indigo-400 hover:text-indigo-300">contact@opsnerve.ai</a>.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
