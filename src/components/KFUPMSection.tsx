'use client';
import React from 'react';

interface KFUPMSectionProps {
  lang: 'en' | 'ar';
}

const content = {
  en: {
    label: 'Academic Partnership',
    h2a: 'KFUPM —',
    h2em: 'Joint IP, validated research, Saudi talent pipeline',
    sub: 'King Fahd University of Petroleum and Minerals (KFUPM) is not just a partner — it is a co-creator of GreenVue\'s intellectual property. This means every algorithm, every model, every methodology is validated by Saudi Arabia\'s leading technical university',
    cards: [
      {
        icon: '🔬',
        title: 'Joint Intellectual Property',
        text: 'GreenVue\'s core algorithms and environmental models are developed as joint IP with KFUPM — Saudi-owned, Saudi-validated, and protected under Saudi law',
      },
      {
        icon: '✅',
        title: 'Validated Research',
        text: 'Every GHG methodology, emissions factor, and AI model is peer-reviewed and validated against KFUPM\'s research standards — giving clients confidence in regulatory compliance',
      },
      {
        icon: '🇸🇦',
        title: 'In-Kingdom Talent Pipeline',
        text: 'KFUPM graduates and researchers form the backbone of our technical team — building national capability that stays in the Kingdom and grows with every deployment',
      },
      {
        icon: '🏢',
        title: 'R&D Hub — Dammam',
        text: 'Our AI Development Center (opening Oct 2026) will serve as a joint R&D facility with KFUPM — the Kingdom\'s most advanced industrial AI research environment',
      },
    ],
    whatItMeans: 'What this means for clients',
    clientPoints: [
      'Regulatory confidence — KFUPM-validated methodologies accepted by NCEC and Saudi regulators',
      'Saudi IP — no foreign IP dependency, fully owned and maintained in-Kingdom',
      'Research-backed AI — models trained on Saudi industrial data, not generic global datasets',
      'Talent continuity — Saudi engineers who understand your facilities and your regulations',
    ],
    kfupmBadge: 'KFUPM Joint IP',
    kfupmSub: 'King Fahd University of Petroleum and Minerals',
    kfupmLoc: 'Dhahran, Eastern Province',
  },
  ar: {
    label: 'شراكة أكاديمية',
    h2a: 'KFUPM —',
    h2em: 'ملكية فكرية مشتركة، بحوث معتمدة، خط مواهب سعودي',
    sub: 'جامعة الملك فهد للبترول والمعادن (KFUPM) ليست مجرد شريك — بل هي مشاركة في خلق الملكية الفكرية لـ GreenVue. هذا يعني أن كل خوارزمية وكل نموذج وكل منهجية معتمدة من أبرز جامعة تقنية في المملكة',
    cards: [
      {
        icon: '🔬',
        title: 'ملكية فكرية مشتركة',
        text: 'تم تطوير خوارزميات GreenVue الأساسية ونماذج البيئة كملكية فكرية مشتركة مع KFUPM — سعودية الملكية، معتمدة سعودياً',
      },
      {
        icon: '✅',
        title: 'بحوث معتمدة',
        text: 'كل منهجية GHG وعامل انبعاثات ونموذج ذكاء اصطناعي خضع لمراجعة أقران واعتماد وفق معايير KFUPM',
      },
      {
        icon: '🇸🇦',
        title: 'خط مواهب سعودي',
        text: 'خريجو KFUPM وباحثوها يشكلون عمود فريقنا التقني — بناء قدرات وطنية تبقى في المملكة',
      },
      {
        icon: '🏢',
        title: 'مركز R&D — الدمام',
        text: 'سيخدم مركز تطوير الذكاء الاصطناعي (افتتاح أكتوبر 2026) كمنشأة R&D مشتركة مع KFUPM',
      },
    ],
    whatItMeans: 'ما يعنيه هذا للعملاء',
    clientPoints: [
      'ثقة تنظيمية — منهجيات KFUPM مقبولة من NCEC والجهات التنظيمية السعودية',
      'ملكية سعودية — لا اعتماد على ملكية فكرية أجنبية، مملوكة بالكامل داخل المملكة',
      'ذكاء اصطناعي مدعوم بالبحث — نماذج مدربة على بيانات صناعية سعودية',
      'استمرارية المواهب — مهندسون سعوديون يفهمون منشآتكم ولوائحكم',
    ],
    kfupmBadge: 'ملكية مشتركة مع KFUPM',
    kfupmSub: 'جامعة الملك فهد للبترول والمعادن',
    kfupmLoc: 'الظهران، المنطقة الشرقية',
  },
};

export default function KFUPMSection({ lang }: KFUPMSectionProps) {
  const t = content[lang];
  const isRtl = lang === 'ar';

  return (
    <section
      id="kfupm"
      style={{ padding: '80px 40px', background: '#fff' }}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ maxWidth: 720, marginBottom: 48 }}>
          <div className="section-label">{t.label}</div>
          <h2
            style={{
              fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              lineHeight: 1.1,
              fontWeight: 700,
              color: '#1B4332',
              marginBottom: 16,
            }}
          >
            {t.h2a} <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>{t.h2em}</em>
          </h2>
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.7, fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif' }}>
            {t.sub}
          </p>
        </div>

        {/* Main Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }}
          className="kfupm-main-grid">
          {/* Left: Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
            className="kfupm-cards-grid">
            {t.cards.map((card, i) => (
              <div
                key={i}
                style={{
                  background: '#f9f7f1',
                  border: '1px solid rgba(27,67,50,0.15)',
                  borderTop: '3px solid #1B4332',
                  borderRadius: 12,
                  padding: 20,
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 12 }}>{card.icon}</div>
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: '#1B4332',
                    marginBottom: 8,
                    lineHeight: 1.3,
                    fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: '#374151',
                    lineHeight: 1.6,
                    fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif',
                  }}
                >
                  {card.text}
                </p>
              </div>
            ))}
          </div>

          {/* Right: What it means + KFUPM badge */}
          <div>
            {/* KFUPM Badge */}
            <div
              className="kfupm-card"
              style={{ marginBottom: 24 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 12,
                    background: 'rgba(201,168,76,0.15)',
                    border: '1px solid rgba(201,168,76,0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 28,
                    flexShrink: 0,
                  }}
                >
                  🏫
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: '#C9A84C',
                      fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif',
                    }}
                  >
                    {t.kfupmBadge}
                  </div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif' }}>
                    {t.kfupmSub}
                  </div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.40)', fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif' }}>
                    {t.kfupmLoc}
                  </div>
                </div>
              </div>
              <div
                style={{
                  height: 1,
                  background: 'rgba(201,168,76,0.20)',
                  marginBottom: 20,
                }}
              />
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: '#C9A84C',
                  letterSpacing: '0.10em',
                  textTransform: 'uppercase',
                  marginBottom: 14,
                  fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif',
                }}
              >
                {t.whatItMeans}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {t.clientPoints.map((point, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: '#C9A84C',
                        flexShrink: 0,
                        marginTop: 6,
                      }}
                    />
                    <span
                      style={{
                        fontSize: 14,
                        color: 'rgba(255,255,255,0.80)',
                        lineHeight: 1.5,
                        fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif',
                      }}
                    >
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
