'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface PlatformSectionProps {
  lang: 'en' | 'ar';
  onCTAClick: () => void;
}

const content = {
  en: {
    label: 'The mechanism for environmental intelligence',
    h2a: 'GreenVue —',
    h2em: 'Environmental engineering knowledge made trusted intelligence',
    sub: 'GreenVue is not the destination. It is the mechanism through which environmental engineering knowledge becomes trusted environmental intelligence — from facility-level flare monitoring to national GHG inventory',
    cta1: 'Explore all 19 apps →',
    cta2: 'Open OZone live ↗',
    readyLabel: 'Ready to deploy now',
    launchLabel: 'Launching October 2026',
    demoBtn: 'Request demo →',
    highlights: [
      { icon: '🏭', val: '19', label: 'AI-powered applications' },
      { icon: '🌍', val: '5+', label: 'Industrial sectors covered' },
      { icon: '✅', val: 'IPCC', label: 'Tier 1–3 aligned methods' },
      { icon: '🔴', val: 'Live', label: 'KJO deployed & running' },
    ],
    categories: [
      {
        icon: '🌿',
        name: 'Emissions',
        color: '#2e7d52',
        bg: 'rgba(46,125,82,0.094)',
        border: 'rgba(46,125,82,0.19)',
        apps: [
          { name: 'GreenVue EMS', ready: true },
          { name: 'Flare Monitoring (FMS)', ready: true, deployed: 'KJO' },
          { name: 'Stack Emissions', ready: true },
          { name: 'AMMNET Air Quality', ready: true }
        ]
      },
      {
        icon: '📊',
        name: 'GHG Inventory',
        color: '#1a5296',
        bg: 'rgba(26,82,150,0.094)',
        border: 'rgba(26,82,150,0.19)',
        apps: [
          { name: 'IPPU Suite (8 industries)', ready: true },
          { name: 'AFOLU Agriculture', ready: true },
          { name: 'AFOLU Forestry', ready: true },
          { name: 'AFOLU Land Use', ready: true },
          { name: 'GHG Waste Estimator', ready: true }
        ]
      },
      {
        icon: '🧠',
        name: 'AI Intelligence',
        color: '#5b2ea8',
        bg: 'rgba(91,46,168,0.094)',
        border: 'rgba(91,46,168,0.19)',
        apps: [
          { name: 'Climate Intelligence (CIS)', ready: true },
          { name: 'OZone Dashboard (live)', ready: true },
          { name: 'Policy Radar', ready: true },
          { name: 'Regulatory Alerts', ready: true }
        ]
      },
      {
        icon: '⚙️',
        name: 'Industrial Tools',
        color: '#d4860a',
        bg: 'rgba(212,134,10,0.094)',
        border: 'rgba(212,134,10,0.19)',
        apps: [
          { name: 'CIP Dashboard', ready: true },
          { name: 'EcoTracker', ready: true },
          { name: 'PSV Tracking', ready: true },
          { name: 'Digital Twins', ready: true }
        ]
      }
    ],
    launching: [
      { icon: '🧠', name: 'AI Center', sub: 'Industrial AI development facility · Dammam' },
      { icon: '🎓', name: 'Training Center', sub: 'In-Kingdom professional development' }
    ]
  },
  ar: {
    label: 'آلية الذكاء البيئي',
    h2a: 'GreenVue —',
    h2em: 'المعرفة الهندسية البيئية تتحول إلى ذكاء موثوق',
    sub: 'GreenVue ليست الوجهة. إنها الآلية التي تتحول من خلالها المعرفة الهندسية البيئية إلى ذكاء بيئي موثوق — من رصد الحرق على مستوى المنشأة إلى جرد غازات الدفيئة الوطني',
    cta1: 'استكشاف جميع التطبيقات الـ 19 ←',
    cta2: 'فتح OZone مباشر ←',
    readyLabel: 'جاهز للنشر الآن',
    launchLabel: 'انطلاق أكتوبر 2026',
    demoBtn: 'طلب عرض ←',
    highlights: [
      { icon: '🏭', val: '19', label: 'تطبيق مدعوم بالذكاء الاصطناعي' },
      { icon: '🌍', val: '+5', label: 'قطاعات صناعية مشمولة' },
      { icon: '✅', val: 'IPCC', label: 'طرق الطبقة 1-3 المتوافقة' },
      { icon: '🔴', val: 'مباشر', label: 'منشور ويعمل مع KJO' },
    ],
    categories: [
      {
        icon: '🌿',
        name: 'الانبعاثات',
        color: '#2e7d52',
        bg: 'rgba(46,125,82,0.094)',
        border: 'rgba(46,125,82,0.19)',
        apps: [
          { name: 'GreenVue EMS', ready: true },
          { name: 'رصد حرق الغاز (FMS)', ready: true, deployed: 'KJO' },
          { name: 'انبعاثات المداخن', ready: true },
          { name: 'جودة الهواء AMMNET', ready: true }
        ]
      },
      {
        icon: '📊',
        name: 'جرد غازات الدفيئة',
        color: '#1a5296',
        bg: 'rgba(26,82,150,0.094)',
        border: 'rgba(26,82,150,0.19)',
        apps: [
          { name: 'جناح IPPU (8 صناعات)', ready: true },
          { name: 'AFOLU الزراعة', ready: true },
          { name: 'AFOLU الحراجة', ready: true },
          { name: 'AFOLU استخدام الأراضي', ready: true },
          { name: 'تقدير نفايات GHG', ready: true }
        ]
      },
      {
        icon: '🧠',
        name: 'الذكاء الاصطناعي',
        color: '#5b2ea8',
        bg: 'rgba(91,46,168,0.094)',
        border: 'rgba(91,46,168,0.19)',
        apps: [
          { name: 'ذكاء المناخ (CIS)', ready: true },
          { name: 'لوحة OZone (مباشر)', ready: true },
          { name: 'رادار السياسات', ready: true },
          { name: 'تنبيهات تنظيمية', ready: true }
        ]
      },
      {
        icon: '⚙️',
        name: 'الأدوات الصناعية',
        color: '#d4860a',
        bg: 'rgba(212,134,10,0.094)',
        border: 'rgba(212,134,10,0.19)',
        apps: [
          { name: 'لوحة CIP', ready: true },
          { name: 'EcoTracker', ready: true },
          { name: 'تتبع PSV', ready: true },
          { name: 'التوائم الرقمية', ready: true }
        ]
      }
    ],
    launching: [
      { icon: '🧠', name: 'مركز الذكاء الاصطناعي', sub: 'منشأة تطوير الذكاء الاصطناعي الصناعي · الدمام' },
      { icon: '🎓', name: 'مركز التدريب', sub: 'تطوير مهني داخل المملكة' }
    ]
  }
};

export default function PlatformSection({ lang, onCTAClick }: PlatformSectionProps) {
  const t = content[lang];
  const isRtl = lang === 'ar';
  const router = useRouter();

  return (
    <section
      id="platform"
      style={{ padding: '80px 24px', background: '#f3efe5' }}
      dir={isRtl ? 'rtl' : 'ltr'}>

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Section header */}
        <div style={{ marginBottom: 56, maxWidth: 760 }}>
          <div style={{ marginBottom: 20 }}>
            <img
              src="/assets/images/greenvue_logo-1783111231045.png"
              alt="GreenVue Platform"
              style={{ height: 48, width: 'auto', display: 'block', objectFit: 'contain' }}
            />
          </div>
          <div className="section-label">{t.label}</div>
          <h2 style={{
            fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(32px, 4vw, 52px)',
            lineHeight: 1.08,
            fontWeight: 700,
            color: '#1B4332',
            marginBottom: 20
          }}>
            {t.h2a} <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>{t.h2em}</em>
          </h2>
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.75, fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif', maxWidth: 680 }}>
            {t.sub}
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
            <button
              onClick={onCTAClick}
              style={{
                background: '#1B4332',
                color: '#fff',
                fontSize: 15,
                fontWeight: 600,
                padding: '13px 28px',
                borderRadius: 8,
                cursor: 'pointer',
                border: 'none',
                fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif'
              }}>
              {t.cta1}
            </button>
            <button
              onClick={() => router.push('/register')}
              style={{
                background: '#C9A84C',
                color: '#0d2b1a',
                fontSize: 15,
                fontWeight: 700,
                padding: '13px 28px',
                borderRadius: 8,
                cursor: 'pointer',
                border: 'none',
                fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif'
              }}>
              {t.cta2}
            </button>
          </div>
        </div>

        {/* Highlights strip */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 16,
          marginBottom: 48
        }}
        className="platform-highlights">
          {t.highlights.map((h, i) => (
            <div key={i} style={{
              background: '#fff',
              border: '1px solid rgba(27,67,50,0.15)',
              borderTop: '3px solid #1B4332',
              borderRadius: 12,
              padding: '20px 16px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>{h.icon}</div>
              <div style={{
                fontSize: 'clamp(22px, 2.5vw, 30px)',
                fontWeight: 700,
                color: '#C9A84C',
                fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : '"Playfair Display", Georgia, serif',
                lineHeight: 1
              }}>{h.val}</div>
              <div style={{
                fontSize: 13,
                color: '#374151',
                marginTop: 6,
                fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif',
                lineHeight: 1.4,
                fontWeight: 500
              }}>{h.label}</div>
            </div>
          ))}
        </div>

        {/* Main grid: app categories + screenshot */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '55% 45%',
          gap: 32,
          alignItems: 'stretch'
        }}
        className="platform-main-grid">

          {/* Left: App categories grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
              <span style={{
                background: '#1B4332',
                color: '#fff',
                fontSize: 11,
                fontWeight: 700,
                padding: '4px 12px',
                borderRadius: 4,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontFamily: 'Inter, system-ui, sans-serif'
              }}>
                {t.readyLabel}
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="platform-categories-grid">
              {t.categories.map((cat, ci) => (
                <div key={ci} style={{
                  background: '#fff',
                  border: `1px solid ${cat.border}`,
                  borderTop: `3px solid ${cat.color}`,
                  borderRadius: 12,
                  padding: '16px 14px'
                }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: 12,
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: 8,
                    marginBottom: 12,
                    background: cat.bg,
                    color: cat.color,
                    border: `1px solid ${cat.border}`,
                    fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif'
                  }}>
                    {cat.icon} {cat.name}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {cat.apps.map((app, ai) => (
                      <span key={ai} style={{
                        fontSize: 12,
                        padding: '4px 0',
                        color: '#374151',
                        fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                        borderBottom: ai < cat.apps.length - 1 ? '1px solid #eee' : 'none'
                      }}>
                        <span style={{ color: cat.color, fontSize: 10 }}>●</span>
                        {app.name}
                        {'deployed' in app && app.deployed ? (
                          <span style={{
                            background: '#1B4332',
                            color: '#fff',
                            fontSize: 9,
                            padding: '1px 5px',
                            borderRadius: 3,
                            fontWeight: 700,
                            letterSpacing: '0.04em'
                          }}>
                            {app.deployed}
                          </span>
                        ) : null}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Platform description card */}
            <div style={{
              background: '#fff',
              border: '1px solid rgba(27,67,50,0.15)',
              borderRadius: 14,
              padding: '24px 20px'
            }}>
              <h3 style={{
                fontSize: 20,
                fontWeight: 700,
                color: '#1B4332',
                marginBottom: 10,
                fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : '"Playfair Display", Georgia, serif'
              }}>
                {lang === 'ar' ? 'منصة GreenVue' : 'The GreenVue Platform'}
              </h3>
              <p style={{
                fontSize: 14,
                color: '#374151',
                lineHeight: 1.7,
                marginBottom: 16,
                fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif'
              }}>
                {lang === 'ar' ? 'منصة متكاملة لرصد الانبعاثات وجرد غازات الدفيئة والذكاء البيئي — مصممة للامتثال مع NCEC وSGI ورؤية 2030' : 'An integrated platform for emissions monitoring, GHG inventory, and environmental intelligence — designed for NCEC, SGI, and Vision 2030 compliance'}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  { icon: '🔒', text: lang === 'ar' ? 'بيانات مستضافة داخل المملكة على خوادم KFUPM ومركز الذكاء الاصطناعي' : 'Data hosted in-Kingdom on KFUPM & AI CENTER servers' },
                  { icon: '📋', text: lang === 'ar' ? 'متوافق مع IPCC 2006 الطبقة 1-3' : 'IPCC 2006 Tier 1–3 compliant' },
                  { icon: '🤝', text: lang === 'ar' ? 'ملكية فكرية مشتركة مع KFUPM' : 'Joint IP with KFUPM' },
                  { icon: '✅', text: lang === 'ar' ? 'معتمد من GHGMI' : 'GHGMI certified' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontSize: 16 }}>{item.icon}</span>
                    <span style={{ fontSize: 13, color: '#374151', fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif' }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Launching Oct 2026 */}
            <div style={{
              marginTop: 8,
              padding: '20px 24px',
              background: 'rgba(201,168,76,0.07)',
              border: '1px solid rgba(201,168,76,0.30)',
              borderRadius: 12
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <span style={{
                  background: '#C9A84C',
                  color: '#0d2b1a',
                  fontSize: 11,
                  fontWeight: 800,
                  padding: '4px 12px',
                  borderRadius: 4,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontFamily: 'Inter, system-ui, sans-serif'
                }}>
                  {t.launchLabel}
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {t.launching.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontSize: 22 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 600, color: '#1B4332', fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif' }}>
                        {item.name}
                      </div>
                      <div style={{ fontSize: 13, color: '#374151', fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif' }}>
                        {item.sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Both images stacked one below the other */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, height: '100%' }}>
            {/* Image 1: FMS Dashboard */}
            <div style={{ borderRadius: 14, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ flex: 1, minHeight: 180, overflow: 'hidden' }}>
                <img
                  alt="GreenVue FMS Dashboard — Deployed with KJO"
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_14ef19dc8-1773075069211.png"
                  style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover', objectPosition: 'top' }} />
              </div>
              <div style={{
                background: 'rgba(0,0,0,0.60)',
                backdropFilter: 'blur(8px)',
                padding: '12px 18px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexShrink: 0
              }}>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.80)', fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {lang === 'ar' ? 'FMS — نظام رصد حرق الغاز' : 'FMS — Flare Monitoring System'}
                </span>
                <span style={{ fontSize: 12, color: '#4caf73', fontWeight: 600, fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {lang === 'ar' ? 'مباشر · منشور مع KJO' : 'Live · KJO Deployed'}
                </span>
              </div>
            </div>

            {/* Image 2: GreenVue Live Dashboard */}
            <div style={{ borderRadius: 14, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', border: '1px solid rgba(46,125,82,0.25)', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ flex: 1, minHeight: 180, background: '#f8faf9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src="/assets/images/greenvue__snap_shot_-1783112428056.png"
                  alt="GreenVue AMMNET live dashboard — real-time environmental monitoring and emissions intelligence"
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
                />
              </div>
              <div style={{
                padding: '12px 18px',
                background: 'rgba(27,67,50,0.08)',
                borderTop: '1px solid rgba(46,125,82,0.20)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexShrink: 0
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: '#4caf73', flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: '#2e7d52', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 700 }}>
                    {lang === 'ar' ? 'لوحة GreenVue المباشرة' : 'GreenVue Live Dashboard'}
                  </span>
                </div>
                <span style={{ fontSize: 12, color: '#4caf73', fontWeight: 600, fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {lang === 'ar' ? 'مباشر' : 'Live'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .platform-highlights { grid-template-columns: repeat(2, 1fr) !important; }
          .platform-main-grid { grid-template-columns: 1fr !important; }
          .platform-main-grid > div:last-child { height: auto !important; }
          .platform-main-grid > div:last-child > div { flex: none !important; }
          .platform-main-grid > div:last-child > div > div:first-child { min-height: 220px !important; aspect-ratio: 16/9; }
        }
        @media (max-width: 640px) {
          .platform-highlights { grid-template-columns: repeat(2, 1fr) !important; }
          .platform-categories-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .platform-highlights { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
