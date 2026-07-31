'use client';
import React from 'react';
import Link from 'next/link';

interface FooterProps {
  lang: 'en' | 'ar';
}

const content = {
  en: {
    tagline: "Building Saudi Arabia's industrial future — through environmental intelligence, digital transformation, and sustainable industrial capability",
    address1: '4748 King Abdul Aziz Street, Dhahran',
    address2: 'Eastern Province, Saudi Arabia',
    email1: 'gems@industrialprosperity.com',
    email2: 'solutions@greenvue.com.sa',
    websites: 'www.greenvue.com.sa · www.industrialprosperity.com',
    cols: [
    {
      title: 'Solutions',
      links: ['Environmental Intelligence', 'Process Safety', 'AspenTech Integration', 'AVEVA PI System', 'Digital Twins', 'Technology Center']
    },
    {
      title: 'Platform',
      links: ['GreenVue EMS', 'Climate Intelligence', 'GHG Suite', 'IPPU Suite', 'AFOLU Suite', 'EcoTracker']
    },
    {
      title: 'Company',
      links: ['Ecosystem', 'AI Center', 'Vision 2030', 'About', 'Contact']
    }],

    copyright: '© 2026 Al-Azadhar Al-Sanai Limited Liability. All rights reserved',
    badges: ['Vision 2030 Aligned', 'GHGMI Certified', 'KFUPM Joint IP']
  },
  ar: {
    tagline: 'نبني مستقبل المملكة العربية السعودية الصناعي — من خلال الذكاء البيئي والتحول الرقمي والقدرات الصناعية المستدامة',
    address1: '4748 شارع الملك عبدالعزيز، الظهران',
    address2: 'المنطقة الشرقية، المملكة العربية السعودية',
    email1: 'gems@industrialprosperity.com',
    email2: 'solutions@greenvue.com.sa',
    websites: 'www.greenvue.com.sa · www.industrialprosperity.com',
    cols: [
    {
      title: 'الحلول',
      links: ['الذكاء البيئي', 'سلامة العمليات', 'تكامل AspenTech', 'نظام AVEVA PI', 'التوائم الرقمية', 'مركز التكنولوجيا']
    },
    {
      title: 'المنصة',
      links: ['GreenVue EMS', 'ذكاء المناخ', 'جناح GHG', 'جناح IPPU', 'جناح AFOLU', 'EcoTracker']
    },
    {
      title: 'الشركة',
      links: ['النظام البيئي', 'مركز الذكاء الاصطناعي', 'رؤية 2030', 'من نحن', 'تواصل معنا']
    }],

    copyright: '© 2026 الازدهار الصناعي — الأزهار الصناعي ش.م.م. جميع الحقوق محفوظة',
    badges: ['متوافق مع رؤية 2030', 'معتمد من GHGMI', 'ملكية مشتركة مع KFUPM']
  }
};

export default function Footer({ lang }: FooterProps) {
  const t = content[lang];
  const isRtl = lang === 'ar';

  return (
    <footer
      style={{
        background: '#0d2b1a',
        color: 'rgba(255,255,255,0.60)',
        padding: '72px 24px 36px',
        borderTop: '2px solid rgba(201,168,76,0.25)'
      }}
      dir={isRtl ? 'rtl' : 'ltr'}>
      
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: 48,
            marginBottom: 56
          }}
          className="footer-grid">
          
          {/* Brand column */}
          <div>
            <img
              alt="Al-Azadhar Al-Sanai"
              src="https://website-bilingual.vercel.app/ip-logo.png"
              style={{
                height: 52,
                width: 'auto',
                display: 'block',
                marginBottom: 18,
                filter: 'brightness(0) invert(1)',
                opacity: 0.85
              }} />
            
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.75,
                marginBottom: 24,
                fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif',
                color: 'rgba(255,255,255,0.65)'
              }}>
              {t.tagline}
            </p>
            <div
              style={{
                fontSize: 14,
                lineHeight: 2.1,
                fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif',
                color: 'rgba(255,255,255,0.55)'
              }}>
              <div>{t.address1}</div>
              <div>{t.address2}</div>
              <div style={{ marginTop: 10, color: '#C9A84C' }}>{t.email1}</div>
              <div style={{ color: '#C9A84C' }}>{t.email2}</div>
              <div style={{ marginTop: 4, opacity: 0.45 }}>{t.websites}</div>
            </div>
          </div>

          {/* Link columns */}
          {t.cols.map((col, ci) =>
          <div key={ci}>
              <div
              style={{
                fontSize: 12,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: '#C9A84C',
                marginBottom: 18,
                fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif'
              }}>
                {col.title}
              </div>
              {col.links.map((link, li) =>
            <span
              key={li}
              style={{
                display: 'block',
                fontSize: 14,
                color: 'rgba(255,255,255,0.60)',
                marginBottom: 12,
                cursor: 'pointer',
                transition: 'color 0.15s',
                fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif'
              }}>
                  {link}
                </span>
            )}
            </div>
          )}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(201,168,76,0.15)',
            paddingTop: 28,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 13,
            color: 'rgba(255,255,255,0.35)',
            flexWrap: 'wrap',
            gap: 14
          }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif' }}>
              {t.copyright}
            </span>
            <div style={{ display: 'flex', gap: 16 }}>
              <Link
                href="/privacy"
                style={{
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.45)',
                  textDecoration: 'none',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  transition: 'color 0.15s',
                }}
              >
                {isRtl ? 'سياسة الخصوصية' : 'Privacy Policy'}
              </Link>
              <span style={{ color: 'rgba(255,255,255,0.20)' }}>·</span>
              <Link
                href="/terms"
                style={{
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.45)',
                  textDecoration: 'none',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  transition: 'color 0.15s',
                }}
              >
                {isRtl ? 'شروط الخدمة' : 'Terms of Service'}
              </Link>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {t.badges.map((badge, i) =>
            <span
              key={i}
              style={{
                background: 'rgba(201,168,76,0.10)',
                border: '1px solid rgba(201,168,76,0.25)',
                borderRadius: 6,
                padding: '4px 12px',
                fontSize: 11,
                letterSpacing: '0.06em',
                color: 'rgba(201,168,76,0.80)',
                fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif',
                textTransform: 'uppercase',
                fontWeight: 600
              }}>
                {badge}
              </span>
            )}
          </div>
        </div>
      </div>
    </footer>);

}