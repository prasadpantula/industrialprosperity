import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — Industrial Prosperity / GreenVue',
  description: 'Terms of Service for Industrial Prosperity and GreenVue platform. Understand your rights and obligations when using our environmental intelligence platform.',
};

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, fontFamily: 'Inter, system-ui, sans-serif' }}>
            These Terms of Service ("Terms") govern your access to and use of the Industrial Prosperity website and GreenVue platform operated by Al-Azadhar Al-Sanai Limited Liability ("we", "us", or "our"). By accessing or using our services, you agree to be bound by these Terms.
          </p>
        </div>

        {[
          {
            title: '1. Acceptance of Terms',
            content: [
              'By accessing our website or platform, you confirm that you are at least 18 years of age',
              'You agree to comply with these Terms and all applicable Saudi Arabian laws and regulations',
              'If you are using our services on behalf of an organisation, you represent that you have authority to bind that organisation to these Terms',
              'We reserve the right to modify these Terms at any time with notice posted on this page',
            ],
          },
          {
            title: '2. Platform Access and Use',
            content: [
              'Access to the GreenVue platform is subject to a separate subscription or licensing agreement',
              'You may not use our platform for any unlawful purpose or in violation of any regulations',
              'You are responsible for maintaining the confidentiality of your account credentials',
              'You agree not to attempt to gain unauthorised access to any part of our platform or systems',
              'We reserve the right to suspend or terminate access for violations of these Terms',
            ],
          },
          {
            title: '3. Intellectual Property',
            content: [
              'The GreenVue platform, including all software, algorithms, and content, is owned by Al-Azadhar Al-Sanai LLC and KFUPM under a joint IP agreement',
              'You may not copy, modify, distribute, or create derivative works from our platform without written permission',
              'Environmental data and reports generated through the platform remain the property of the subscribing organisation',
              'The GreenVue name, logo, and associated marks are trademarks of Al-Azadhar Al-Sanai LLC',
            ],
          },
          {
            title: '4. Data and Confidentiality',
            content: [
              'Industrial and environmental data you input into the platform is treated as confidential',
              'We will not disclose your operational data to third parties without your explicit consent',
              'Aggregated, anonymised data may be used to improve platform performance and industry benchmarks',
              'You retain ownership of all data you submit to the platform',
            ],
          },
          {
            title: '5. Compliance and Regulatory Use',
            content: [
              'GreenVue is designed to support NCEC, SGI, and Vision 2030 compliance reporting',
              'While we strive for accuracy, you are responsible for verifying that reports meet specific regulatory requirements',
              'We do not provide legal or regulatory advice; consult qualified professionals for compliance decisions',
              'Platform outputs should be reviewed by qualified environmental engineers before submission to regulators',
            ],
          },
          {
            title: '6. Limitation of Liability',
            content: [
              'Our platform is provided "as is" without warranties of any kind, express or implied',
              'We are not liable for any indirect, incidental, or consequential damages arising from platform use',
              'Our total liability shall not exceed the fees paid by you in the 12 months preceding the claim',
              'We are not responsible for regulatory penalties arising from reliance on platform outputs without professional review',
            ],
          },
          {
            title: '7. Service Availability',
            content: [
              'We aim for 99.5% platform uptime but do not guarantee uninterrupted service',
              'Scheduled maintenance will be communicated in advance where possible',
              'We are not liable for service interruptions caused by factors outside our reasonable control',
            ],
          },
          {
            title: '8. Governing Law',
            content: [
              'These Terms are governed by the laws of the Kingdom of Saudi Arabia',
              'Any disputes shall be subject to the exclusive jurisdiction of Saudi Arabian courts',
              'We will attempt to resolve disputes amicably before initiating formal proceedings',
            ],
          },
          {
            title: '9. Contact Information',
            content: [
              'For questions about these Terms, please contact us:',
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
          <Link href="/privacy" style={{ fontSize: 14, color: '#1B4332', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600, textDecoration: 'none' }}>
            Privacy Policy →
          </Link>
          <Link href="/" style={{ fontSize: 14, color: '#374151', fontFamily: 'Inter, system-ui, sans-serif', textDecoration: 'none' }}>
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
