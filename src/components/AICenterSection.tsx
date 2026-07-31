'use client';
import React from 'react';

interface AICenterSectionProps {
  lang: 'en' | 'ar';
}

const content = {
  en: {
    bannerTag1: 'Opening Oct 2026',
    bannerTag2: 'Dammam · Eastern Province',
    bannerTitle: 'AI Experience Center & Training Center —',
    bannerTitleEm: 'coming to the Kingdom',
    bannerSub: "Saudi Arabia's most advanced industrial AI experience facility — live GreenVue dashboards, Metakosmos Kosmosuit® demonstrations, and in-Kingdom professional development",
    bannerCta: 'View AI Center →',
    label: 'In-Kingdom presence',
    h2a: 'Built in Saudi Arabia',
    h2em: 'Supported in Saudi Arabia',
    sub: 'Three physical facilities across Dammam — reinforcing our commitment to in-Kingdom capability development aligned with Vision 2030',
    facilities: [
      {
        icon: '🧠',
        tagBg: '#d4af37',
        tagColor: '#0d2b1a',
        tag: 'Oct 2026 · Dammam',
        titleColor: '#5b2ea8',
        title: 'AI Experience Center',
        desc: '360° curved LED walls, real-time GreenVue live dashboards, and immersive demonstration facilities — the most advanced industrial AI experience environment in the Kingdom',
        dotColor: '#5b2ea8',
        items: [
          'Live GreenVue demo environment',
          'R&D hub for industrial AI',
          'Client demonstration facility',
          'Kosmosuit® extreme technology demo',
          'Metakosmos STEM programs',
        ],
      },
      {
        icon: '🚀',
        tagBg: '#1a5296',
        tagColor: '#fff',
        tag: 'Oct 2026 · Dammam',
        titleColor: '#1a5296',
        title: 'Premium STEM Center',
        desc: '126 sqm immersive STEM facility in partnership with Metakosmos — bringing frontier human systems technology to Saudi youth in line with Vision 2030',
        dotColor: '#1a5296',
        items: [
          'XR simulation & aerospace engineering',
          'Robotics & mission control',
          'Kosmosuit® exploration exhibits',
          'Bilingual Arabic/English programmes',
          'Vision 2030 youth engagement',
        ],
      },
      {
        icon: '🎓',
        tagBg: '#2e7d52',
        tagColor: '#fff',
        tag: 'Upcoming · Eastern Province',
        titleColor: '#2e7d52',
        title: 'Training Center',
        desc: 'In-Kingdom professional development for Saudi engineers and industrial professionals — building national capability that stays in the Kingdom',
        dotColor: '#2e7d52',
        items: [
          'GreenVue platform certification',
          'SCADA · DCS · PLC training',
          'ESG & GHG reporting',
          'Industrial AI & data engineering',
          'Graduate engineering pipelines',
        ],
      },
    ],
    viewPlans: 'View AI Center plans →',
  },
  ar: {
    bannerTag1: 'افتتاح أكتوبر 2026',
    bannerTag2: 'الدمام · المنطقة الشرقية',
    bannerTitle: 'مركز تجربة وتدريب الذكاء الاصطناعي —',
    bannerTitleEm: 'قادم إلى المملكة',
    bannerSub: 'أكثر منشأة ذكاء اصطناعي صناعي تقدماً في المملكة — لوحات GreenVue مباشرة، عروض Kosmosuit®، وتطوير مهني داخل المملكة',
    bannerCta: 'عرض مركز الذكاء الاصطناعي ←',
    label: 'حضور داخل المملكة',
    h2a: 'مبني في المملكة العربية السعودية',
    h2em: 'مدعوم في المملكة العربية السعودية',
    sub: 'ثلاثة منشآت مادية عبر الدمام — تعزيز التزامنا بتطوير القدرات داخل المملكة',
    facilities: [
      {
        icon: '🧠',
        tagBg: '#d4af37',
        tagColor: '#0d2b1a',
        tag: 'أكتوبر 2026 · الدمام',
        titleColor: '#5b2ea8',
        title: 'مركز تجربة الذكاء الاصطناعي',
        desc: 'جدران LED منحنية 360°، لوحات GreenVue مباشرة، ومرافق عرض غامرة — أكثر بيئة ذكاء اصطناعي صناعي تقدماً في المملكة',
        dotColor: '#5b2ea8',
        items: [
          'بيئة عرض GreenVue مباشرة',
          'مركز R&D للذكاء الاصطناعي الصناعي',
          'منشأة عرض للعملاء',
          'عرض تقنية Kosmosuit® المتطرفة',
          'برامج Metakosmos STEM',
        ],
      },
      {
        icon: '🚀',
        tagBg: '#1a5296',
        tagColor: '#fff',
        tag: 'أكتوبر 2026 · الدمام',
        titleColor: '#1a5296',
        title: 'مركز STEM المتميز',
        desc: 'منشأة STEM غامرة 126 متراً مربعاً بالشراكة مع Metakosmos — تقديم تكنولوجيا الأنظمة البشرية للشباب السعودي',
        dotColor: '#1a5296',
        items: [
          'محاكاة XR وهندسة فضائية',
          'الروبوتات ومركز التحكم',
          'معارض Kosmosuit® الاستكشافية',
          'برامج ثنائية عربي/إنجليزي',
          'مشاركة شباب رؤية 2030',
        ],
      },
      {
        icon: '🎓',
        tagBg: '#2e7d52',
        tagColor: '#fff',
        tag: 'قادم · المنطقة الشرقية',
        titleColor: '#2e7d52',
        title: 'مركز التدريب',
        desc: 'تطوير مهني داخل المملكة للمهندسين والمتخصصين السعوديين — بناء قدرات وطنية تبقى في المملكة',
        dotColor: '#2e7d52',
        items: [
          'شهادة منصة GreenVue',
          'تدريب SCADA · DCS · PLC',
          'تقارير ESG وGHG',
          'ذكاء اصطناعي صناعي وهندسة بيانات',
          'خطوط هندسة خريجين',
        ],
      },
    ],
    viewPlans: 'عرض خطط مركز الذكاء الاصطناعي ←',
  },
};

export default function AICenterSection({ lang }: AICenterSectionProps) {
  const t = content[lang];
  const isRtl = lang === 'ar';

  return (
    <>
      {/* Dark Banner */}
      <div
        id="ai-center"
        className="dark-banner"
        style={{
          borderTop: '1px solid rgba(201,168,76,0.15)',
          borderBottom: '1px solid rgba(201,168,76,0.15)',
          padding: '36px 24px',
        }}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 40,
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
              <span
                style={{
                  display: 'inline-block',
                  background: '#C9A84C',
                  color: '#0d2b1a',
                  fontSize: 10,
                  fontWeight: 700,
                  padding: '3px 10px',
                  borderRadius: 4,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontFamily: 'Inter, system-ui, sans-serif',
                }}
              >
                {t.bannerTag1}
              </span>
              <span
                style={{
                  display: 'inline-block',
                  background: 'rgba(27,67,50,0.35)',
                  border: '1px solid rgba(201,168,76,0.30)',
                  color: '#C9A84C',
                  fontSize: 10,
                  fontWeight: 600,
                  padding: '3px 10px',
                  borderRadius: 4,
                  letterSpacing: '0.06em',
                  fontFamily: 'Inter, system-ui, sans-serif',
                }}
              >
                {t.bannerTag2}
              </span>
            </div>
            <div
              style={{
                fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : '"Playfair Display", Georgia, serif',
                fontSize: 'clamp(22px, 3vw, 32px)',
                fontWeight: 700,
                color: '#fff',
                lineHeight: 1.2,
                marginBottom: 10,
              }}
            >
              {t.bannerTitle} <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>{t.bannerTitleEm}</em>
            </div>
            <div
              style={{
                fontSize: 15,
                color: 'rgba(255,255,255,0.60)',
                lineHeight: 1.65,
                maxWidth: 580,
                fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif',
              }}
            >
              {t.bannerSub}
            </div>
          </div>
          <button
            style={{
              background: '#C9A84C',
              color: '#0d2b1a',
              fontSize: 14,
              fontWeight: 700,
              padding: '12px 24px',
              borderRadius: 6,
              cursor: 'pointer',
              border: 'none',
              fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
            onClick={() => {
              const el = document.getElementById('ai-center');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t.bannerCta}
          </button>
        </div>
      </div>

      {/* Facilities Section */}
      <section
        style={{ padding: '80px 40px', background: '#fff' }}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ maxWidth: 620, marginBottom: 48 }}>
            <div className="section-label">{t.label}</div>
            <h2
              style={{
                fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : '"Playfair Display", Georgia, serif',
                fontSize: 'clamp(28px, 4vw, 44px)',
                lineHeight: 1.1,
                fontWeight: 700,
                color: '#1B4332',
                marginBottom: 16,
              }}
            >
              {t.h2a}<br />
              <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>{t.h2em}</em>
            </h2>
            <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.7, fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif' }}>
              {t.sub}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}
            className="ai-facilities-grid">
            {t.facilities.map((fac, i) => (
              <div
                key={i}
                style={{
                  background: '#f9f7f1',
                  borderWidth: '3px 1px 1px',
                  borderStyle: 'solid',
                  borderColor: `${fac.titleColor} #d0ddd0 #d0ddd0`,
                  borderRadius: 16,
                  padding: 28,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <div style={{ fontSize: 28 }}>{fac.icon}</div>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      padding: '3px 10px',
                      borderRadius: 4,
                      background: fac.tagBg,
                      color: fac.tagColor,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      fontFamily: 'Inter, system-ui, sans-serif',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {fac.tag}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    marginBottom: 10,
                    lineHeight: 1.2,
                    fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif',
                    color: fac.titleColor,
                  }}
                >
                  {fac.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: '#374151',
                    lineHeight: 1.65,
                    marginBottom: 16,
                    fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif',
                  }}
                >
                  {fac.desc}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {fac.items.map((item, ii) => (
                    <li
                      key={ii}
                      style={{
                        fontSize: 14,
                        color: '#374151',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif',
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          flexShrink: 0,
                          background: fac.dotColor,
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                {i === 2 && (
                  <div style={{ marginTop: 20, borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(46,125,82,0.2)' }}>
                    <img
                      src="/assets/images/training_center-1783111244469.png"
                      alt="AI Experience & Training Center facility"
                      style={{ width: '100%', display: 'block', height: 160, objectFit: 'cover', objectPosition: 'center' }}
                    />
                  </div>
                )}
                {i === 0 && (
                  <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <div style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(91,46,168,0.2)' }}>
                      <img
                        src="/assets/images/Ai_experience__room__1_-1783111405867.jpeg"
                        alt="AI Experience Center — 360° curved LED walls and immersive demo environment"
                        style={{ width: '100%', display: 'block', height: 140, objectFit: 'cover', objectPosition: 'center' }}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <button
              style={{
                background: '#1B4332',
                color: '#fff',
                fontSize: 14,
                fontWeight: 600,
                padding: '12px 28px',
                borderRadius: 6,
                cursor: 'pointer',
                border: 'none',
                fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif',
              }}
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t.viewPlans}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
