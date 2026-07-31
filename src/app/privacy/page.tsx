import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — Industrial Prosperity / GreenVue',
  description: 'Privacy Policy for Industrial Prosperity and GreenVue platform. Learn how we collect, use, and protect your personal data in compliance with Saudi data protection regulations.',
};

export default function PrivacyPage() {
  return (
    <div style={{ background: '#f9f7f1', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ background: '#1B4332', padding: '24px 40px', borderBottom: '2px solid rgba(201,168,76,0.3)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <span style={{ color: '#C9A84C', fontSize: 14, fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600 }}>
              ← Back to Home
            </span>
          </Link>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, fontFamily: 'Inter, system-ui, sans-serif' }}>
            Last updated: July 2026
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '60px 40px' }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, color: '#1B4332', marginBottom: 12, fontFamily: 'Inter, system-ui, sans-serif' }}>
            Legal
          </div>
          <h1 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: '#1B4332', lineHeight: 1.1, marginBottom: 16 }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, fontFamily: 'Inter, system-ui, sans-serif' }}>
            Al-Azadhar Al-Sanai Limited Liability ("Industrial Prosperity", "GreenVue", "we", "us", or "our") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our GreenVue platform.
          </p>
        </div>

        {[
          {
            title: '1. Information We Collect',
            content: [
              'Personal identification information (name, email address, phone number, company name)',
              'Usage data and analytics when you interact with our platform',
              'Technical data including IP address, browser type, and device information',
              'Communications you send us through contact forms or email',
              'Professional information relevant to your role (e.g., industrial operator, regulator, investor)',
            ],
          },
          {
            title: '2. How We Use Your Information',
            content: [
              'To respond to your demo requests and consultation inquiries',
              'To provide and improve the GreenVue platform and related services',
              'To send you relevant updates about our platform, regulatory changes, and Vision 2030 developments',
              'To schedule and manage appointments with our Dammam team',
              'To comply with applicable Saudi Arabian laws and regulations',
              'To analyse usage patterns and improve user experience',
            ],
          },
          {
            title: '3. Data Storage and Security',
            content: [
              'All data is hosted in-Kingdom on KFUPM and AI Center servers in Saudi Arabia',
              'We implement industry-standard security measures including encryption in transit and at rest',
              'Access to personal data is restricted to authorised personnel only',
              'We do not sell, trade, or transfer your personal information to third parties without your consent',
              'Data retention periods comply with Saudi data protection requirements',
            ],
          },
          {
            title: '4. Cookies and Tracking',
            content: [
              'We use essential cookies to ensure the platform functions correctly',
              'Analytics cookies help us understand how visitors use our website',
              'You can control cookie preferences through your browser settings',
              'We do not use cookies for advertising or cross-site tracking purposes',
            ],
          },
          {
            title: '5. Your Rights',
            content: [
              'Right to access: You may request a copy of the personal data we hold about you',
              'Right to rectification: You may request correction of inaccurate personal data',
              'Right to erasure: You may request deletion of your personal data, subject to legal obligations',
              'Right to restrict processing: You may request that we limit how we use your data',
              'Right to data portability: You may request your data in a structured, machine-readable format',
              'To exercise any of these rights, contact us at solutions@greenvue.com.sa',
            ],
          },
          {
            title: '6. Third-Party Services',
            content: [
              'We may use trusted third-party services for analytics, communication, and platform infrastructure',
              'These partners are bound by confidentiality agreements and may not use your data for their own purposes',
              'We do not share personal data with third parties outside Saudi Arabia without appropriate safeguards',
            ],
          },
          {
            title: '7. Children\'s Privacy',
            content: [
              'Our platform is intended for business and professional use only',
              'We do not knowingly collect personal information from individuals under 18 years of age',
            ],
          },
          {
            title: '8. Changes to This Policy',
            content: [
              'We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements',
              'We will notify you of significant changes by posting the new policy on this page with an updated date',
              'Continued use of our platform after changes constitutes acceptance of the updated policy',
            ],
          },
          {
            title: '9. Contact Us',
            content: [
              'If you have questions about this Privacy Policy or our data practices, please contact us:',
              'Email: solutions@greenvue.com.sa',
              'Email: info@industrialprosperity.com',
              'Address: 4748 King Abdul Aziz Street, Dhahran, Eastern Province, Saudi Arabia',
            ],
          },
        ].map((section, i) => (
          <div key={i} style={{ marginBottom: 40, paddingBottom: 40, borderBottom: i < 8 ? '1px solid rgba(27,67,50,0.10)' : 'none' }}>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 22, fontWeight: 700, color: '#1B4332', marginBottom: 16 }}>
              {section.title}
            </h2>
            <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none' }}>
              {section.content.map((item, j) => (
                <li key={j} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 10 }}>
                  <span style={{ color: '#C9A84C', fontSize: 14, flexShrink: 0, marginTop: 3 }}>•</span>
                  <span style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, fontFamily: 'Inter, system-ui, sans-serif' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Footer links */}
        <div style={{ marginTop: 48, paddingTop: 32, borderTop: '2px solid rgba(27,67,50,0.15)', display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <Link href="/terms" style={{ fontSize: 14, color: '#1B4332', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600, textDecoration: 'none' }}>
            Terms of Service →
          </Link>
          <Link href="/" style={{ fontSize: 14, color: '#374151', fontFamily: 'Inter, system-ui, sans-serif', textDecoration: 'none' }}>
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
