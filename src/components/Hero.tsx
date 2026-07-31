'use client';
import React from 'react';

interface HeroProps {
  lang: 'en' | 'ar';
  onCTAClick: () => void;
}

const content = {
  en: {
    badge1: 'Saudi Vision 2030 Aligned',
    badge2: 'GHGMI Certified',
    badge3: 'KFUPM Joint IP',
    arabicName: 'الأزهار الصناعي',
    tradeName: 'Industrial Prosperity',
    h1: 'Environmental intelligence\nthrough engineering science',
    sub: 'Not software alone — but the disciplined convergence of environmental science, engineering knowledge, and responsible AI',
    cta1: 'Explore our capabilities →',
    cta2: 'View GreenVue platform',
    stat1: '19',
    stat1l: 'AI Solutions',
    stat2: '5+',
    stat2l: 'Sectors covered',
    stat3: '100%',
    stat3l: 'In-Kingdom delivery',
    aiTitle1: 'AI Development &',
    aiTitle2: 'Training Center',
    aiSub: 'Dammam, Eastern Province',
    aiTag: 'Opening October 2026',
    aiCta: 'Explore AI Center →'
  },
  ar: {
    badge1: 'متوافق مع رؤية 2030',
    badge2: 'معتمد من GHGMI',
    badge3: 'ملكية مشتركة مع KFUPM',
    arabicName: 'الأزهار الصناعي',
    tradeName: 'Industrial Prosperity',
    h1: 'الذكاء البيئي\nمن خلال العلوم الهندسية',
    sub: 'ليس البرمجيات وحدها — بل التقاء منضبط للعلوم البيئية والمعرفة الهندسية والذكاء الاصطناعي المسؤول',
    cta1: 'استكشاف قدراتنا ←',
    cta2: 'عرض منصة GreenVue',
    stat1: '19',
    stat1l: 'حلول ذكاء اصطناعي',
    stat2: '+5',
    stat2l: 'قطاعات مشمولة',
    stat3: '%100',
    stat3l: 'تسليم داخل المملكة',
    aiTitle1: 'مركز تطوير وتدريب',
    aiTitle2: 'الذكاء الاصطناعي',
    aiSub: 'الدمام، المنطقة الشرقية',
    aiTag: 'افتتاح أكتوبر 2026',
    aiCta: 'استكشاف المركز ←'
  }
};

export default function Hero({ lang, onCTAClick }: HeroProps) {
  const t = content[lang];
  const isRtl = lang === 'ar';

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '100px 24px 80px',
        backgroundImage: 'url(/assets/images/option__like_high_res-1783111234051.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 55%',
        backgroundRepeat: 'no-repeat',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center'
      }}
      dir={isRtl ? 'rtl' : 'ltr'}>

      {/* Deep emerald overlay — Saudi Green & Gold scheme */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(13,43,26,0.88) 0%, rgba(27,67,50,0.78) 45%, rgba(8,28,16,0.60) 100%)'
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: 1200, margin: '0 auto', width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 0
      }}
      className="hero-grid">

        {/* Logo Bar — IP logo left, Vision 2030 right, same horizontal alignment */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 32,
          width: '100%'
        }}
        className="hero-logo-bar">
          <img
            src="/assets/images/IP_logo-1783115054524.png"
            alt="Industrial Prosperity"
            style={{
              height: 72,
              width: 'auto',
              objectFit: 'contain',
              mixBlendMode: 'screen',
              filter: 'brightness(1.2) contrast(1.05)'
            }}
          />
          <img
            src="/assets/images/saudi-vision-2030-logo-1783115072017.png"
            alt="Saudi Vision 2030"
            style={{
              height: 72,
              width: 'auto',
              objectFit: 'contain',
              filter: 'brightness(1.1)'
            }}
          />
        </div>

        {/* Main content grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) 380px',
          gap: 48,
          alignItems: 'center'
        }}
        className="hero-content-grid">

        {/* Left: Text */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

          {/* H1 — "Environmental intelligence" only */}
          <h1 style={{
            fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(28px, 5vw, 64px)',
            lineHeight: 1.08,
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: 20,
            marginTop: 0,
            textShadow: '0 2px 24px rgba(0,0,0,0.45)'
          }}>
            {isRtl ? 'الذكاء البيئي' : 'Environmental intelligence'}
          </h1>

          {/* "through engineering science" — medium font, between h1 and sub sizes */}
          <p style={{
            fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(22px, 2.8vw, 36px)',
            lineHeight: 1.2,
            fontWeight: 500,
            color: 'rgba(255,255,255,0.88)',
            marginBottom: 28,
            marginTop: 0,
            fontStyle: isRtl ? 'normal' : 'italic',
            textShadow: '0 1px 12px rgba(0,0,0,0.35)'
          }}>
            {isRtl ? 'من خلال العلوم الهندسية' : 'through engineering science'}
          </p>

          {/* Subheading — italic, gold, 28px desktop */}
          <p style={{
            fontSize: isRtl ? 20 : 'clamp(18px, 2vw, 28px)',
            color: '#C9A84C',
            lineHeight: 1.65,
            maxWidth: 560,
            marginBottom: 40,
            fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : '"Playfair Display", Georgia, serif',
            fontStyle: isRtl ? 'normal' : 'italic',
            fontWeight: 400,
            textShadow: '0 1px 8px rgba(0,0,0,0.4)'
          }}>
            {t.sub}
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 48 }}>
            <button
              onClick={onCTAClick}
              style={{
                background: '#1B4332',
                color: '#fff',
                fontSize: 16,
                fontWeight: 600,
                padding: '16px 36px',
                borderRadius: 8,
                cursor: 'pointer',
                border: '1px solid rgba(201,168,76,0.4)',
                fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif',
                transition: '0.2s',
                boxShadow: '0 4px 16px rgba(27,67,50,0.5)'
              }}>
              {t.cta1}
            </button>
            <button
              style={{
                background: 'rgba(201,168,76,0.15)',
                color: '#C9A84C',
                fontSize: 16,
                fontWeight: 600,
                padding: '16px 36px',
                borderRadius: 8,
                cursor: 'pointer',
                border: '1px solid rgba(201,168,76,0.55)',
                fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif',
                transition: '0.2s',
                backdropFilter: 'blur(4px)'
              }}
              onClick={() => {
                const el = document.getElementById('platform');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}>
              {t.cta2}
            </button>
          </div>

          {/* Stats — gold numbers */}
          <div style={{ display: 'flex', gap: 0, borderTop: '1px solid rgba(201,168,76,0.25)', paddingTop: 28 }}
            className="hero-stats-row">
            {[
              { val: t.stat1, label: t.stat1l },
              { val: t.stat2, label: t.stat2l },
              { val: t.stat3, label: t.stat3l }
            ].map((s, i) =>
              <div key={i} className="stat-divider" style={{ flex: 1 }}>
                <span style={{
                  display: 'block',
                  fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : '"Playfair Display", Georgia, serif',
                  fontSize: 'clamp(36px, 3.5vw, 56px)',
                  fontWeight: 700,
                  color: '#C9A84C',
                  lineHeight: 1
                }}>
                  {s.val}
                </span>
                <span style={{
                  display: 'block',
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.65)',
                  fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif',
                  letterSpacing: isRtl ? 0 : '0.07em',
                  marginTop: 6,
                  textTransform: 'uppercase',
                  fontWeight: 600
                }}>
                  {s.label}
                </span>
              </div>
            )}
          </div>

          {/* Three badges — below the stats numbers */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 20 }}>
            <span className="badge-green" style={{ background: 'rgba(27,67,50,0.55)', borderColor: 'rgba(201,168,76,0.5)', color: '#C9A84C' }}>{t.badge1}</span>
            <span className="badge-blue" style={{ background: 'rgba(26,82,150,0.35)', borderColor: 'rgba(91,170,255,0.4)', color: '#93c5fd' }}>{t.badge2}</span>
            <span className="badge-gold" style={{ background: 'rgba(201,168,76,0.18)', borderColor: 'rgba(201,168,76,0.5)', color: '#C9A84C' }}>{t.badge3}</span>
          </div>
        </div>

        {/* Right: AI Center Card */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{
            padding: '36px 32px 40px',
            background: 'rgba(27,67,50,0.55)',
            border: '1px solid rgba(201,168,76,0.45)',
            borderRadius: 16,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 20,
            backdropFilter: 'blur(14px)'
          }}>
            <span style={{
              background: '#C9A84C',
              color: '#0d2b1a',
              fontSize: 12,
              fontWeight: 700,
              padding: '7px 22px',
              borderRadius: 6,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontFamily: 'Inter, system-ui, sans-serif'
            }}>
              {t.aiTag}
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{
                fontSize: 'clamp(22px, 2.5vw, 30px)',
                fontWeight: 700,
                color: '#fff',
                fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : '"Playfair Display", Georgia, serif',
                lineHeight: 1.2
              }}>
                {t.aiTitle1}
              </span>
              <span style={{
                fontSize: 'clamp(22px, 2.5vw, 30px)',
                fontWeight: 700,
                color: '#fff',
                fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : '"Playfair Display", Georgia, serif',
                lineHeight: 1.2
              }}>
                {t.aiTitle2}
              </span>
            </div>
            <p style={{
              fontSize: 15,
              color: 'rgba(255,255,255,0.80)',
              fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif',
              lineHeight: 1.5
            }}>
              {t.aiSub}
            </p>
            <button style={{
              background: '#C9A84C',
              color: '#0d2b1a',
              fontSize: 14,
              fontWeight: 700,
              padding: '12px 28px',
              borderRadius: 8,
              cursor: 'pointer',
              border: 'none',
              fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif',
              width: '100%',
              transition: '0.2s'
            }}
            onClick={() => {
              const el = document.getElementById('ai-center');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}>
              {t.aiCta}
            </button>
          </div>
        </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-content-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-logo-bar {
            flex-direction: row !important;
            justify-content: space-between !important;
          }
          .hero-logo-bar img {
            height: 52px !important;
          }
        }
        @media (max-width: 640px) {
          .hero-stats-row {
            flex-wrap: wrap;
            gap: 16px !important;
          }
          .hero-stats-row .stat-divider {
            flex: 0 0 calc(50% - 8px) !important;
            border-right: none !important;
            border-left: none !important;
            padding-right: 0 !important;
            margin-right: 0 !important;
            padding-left: 0 !important;
            margin-left: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
