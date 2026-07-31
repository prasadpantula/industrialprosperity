'use client';
import React from 'react';

interface SolutionsSectionProps {
  lang: 'en' | 'ar';
}

const content = {
  en: {
    label: 'What we do',
    h2a: 'Six capability pillars',
    h2em: 'One integrated mission',
    cta: 'Deep-dive into our solutions →',
    pillars: [
      {
        icon: '🌿',
        iconBg: '#e8f5ee',
        iconBorder: '#b5d9c3',
        borderLeft: '#2e7d52',
        title: 'Environmental Intelligence',
        text: 'GreenVue: real-time emissions monitoring, GHG inventory (IPCC 2006), air quality compliance, flare quantification, and automated NCEC reporting — from source to boardroom',
      },
      {
        icon: '🔩',
        iconBg: '#fff4e0',
        iconBorder: '#f5d49a',
        borderLeft: '#d4860a',
        title: 'Digital Process Safety',
        text: 'Digitising relief system design, PSV lifecycle management, and compliance documentation. IoT-enabled tracking of valve health with predictive alerts and automated compliance reporting',
      },
      {
        icon: '⚡',
        iconBg: '#eaf2fc',
        iconBorder: '#b5d4f4',
        borderLeft: '#1a5296',
        title: 'AspenTech Integration',
        text: 'Closed-loop AI optimisation integrated with plant control systems — delivering energy efficiency, yield improvement, and emissions reduction across multi-site KSA and GCC operations',
      },
      {
        icon: '📡',
        iconBg: '#e0f5ef',
        iconBorder: '#a5d9c8',
        borderLeft: '#177a62',
        title: 'AVEVA PI & Industrial AI',
        text: 'Foundational industrial data infrastructure for real-time acquisition, historian services, and AI-powered analytics — predictive maintenance, energy optimisation, operational intelligence',
      },
      {
        icon: '🏗',
        iconBg: '#f0eafc',
        iconBorder: '#c4a8f0',
        borderLeft: '#5b2ea8',
        title: 'Industrial Digital Twins',
        text: 'High-fidelity digital replicas of process plants covering operations, emissions, energy, and safety. Scenario simulation for process optimisation and asset lifecycle planning',
      },
      {
        icon: '🎓',
        iconBg: '#f9f7f1',
        iconBorder: '#d0ddd0',
        borderLeft: '#4a5a4a',
        title: 'Technology Solutions Center',
        text: 'In-Kingdom R&D and talent development hub in collaboration with KFUPM and STC Solutions — the regional centre for industrial AI, advanced process control, and emissions analytics',
      },
    ],
  },
  ar: {
    label: 'ما نقوم به',
    h2a: 'ست قدرات',
    h2em: 'مهمة متكاملة واحدة',
    cta: 'استكشاف حلولنا بالتفصيل ←',
    pillars: [
      {
        icon: '🌿',
        iconBg: '#e8f5ee',
        iconBorder: '#b5d9c3',
        borderLeft: '#2e7d52',
        title: 'الذكاء البيئي',
        text: 'GreenVue: رصد الانبعاثات الفوري، جرد GHG (IPCC 2006)، امتثال جودة الهواء، قياس حرق الغاز، وتقارير NCEC آلية',
      },
      {
        icon: '🔩',
        iconBg: '#fff4e0',
        iconBorder: '#f5d49a',
        borderLeft: '#d4860a',
        title: 'سلامة العمليات الرقمية',
        text: 'رقمنة تصميم أنظمة التخفيف وإدارة دورة حياة PSV ووثائق الامتثال. تتبع صحة الصمام بتقنية IoT',
      },
      {
        icon: '⚡',
        iconBg: '#eaf2fc',
        iconBorder: '#b5d4f4',
        borderLeft: '#1a5296',
        title: 'تكامل AspenTech',
        text: 'تحسين AI بحلقة مغلقة متكامل مع أنظمة تحكم المصنع — توفير الطاقة وتحسين الإنتاج وخفض الانبعاثات',
      },
      {
        icon: '📡',
        iconBg: '#e0f5ef',
        iconBorder: '#a5d9c8',
        borderLeft: '#177a62',
        title: 'AVEVA PI والذكاء الاصطناعي الصناعي',
        text: 'بنية تحتية أساسية للبيانات الصناعية للاستحواذ الفوري وخدمات المؤرخ وتحليلات AI',
      },
      {
        icon: '🏗',
        iconBg: '#f0eafc',
        iconBorder: '#c4a8f0',
        borderLeft: '#5b2ea8',
        title: 'التوائم الرقمية الصناعية',
        text: 'نسخ رقمية عالية الدقة لمصانع العمليات تغطي العمليات والانبعاثات والطاقة والسلامة',
      },
      {
        icon: '🎓',
        iconBg: '#f9f7f1',
        iconBorder: '#d0ddd0',
        borderLeft: '#4a5a4a',
        title: 'مركز حلول التكنولوجيا',
        text: 'مركز R&D وتطوير المواهب داخل المملكة بالتعاون مع KFUPM وSTC Solutions',
      },
    ],
  },
};

export default function SolutionsSection({ lang }: SolutionsSectionProps) {
  const t = content[lang];
  const isRtl = lang === 'ar';

  return (
    <section
      id="solutions"
      style={{ padding: '80px 24px', background: '#fff' }}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ maxWidth: 640, marginBottom: 52 }}>
          <div className="section-label">{t.label}</div>
          <h2
            style={{
              fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(32px, 4vw, 50px)',
              lineHeight: 1.1,
              fontWeight: 700,
              color: '#1B4332',
              marginBottom: 16
            }}
          >
            {t.h2a}<br />
            <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>{t.h2em}</em>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}
          className="solutions-grid">
          {t.pillars.map((pillar, i) => (
            <div
              key={i}
              className="capability-card"
              style={{
                borderWidth: '1px 1px 1px 4px',
                borderStyle: 'solid',
                borderColor: `#d0ddd0 #d0ddd0 #d0ddd0 ${pillar.borderLeft}`,
                padding: '28px 24px'
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 24,
                  marginBottom: 18,
                  background: pillar.iconBg,
                  border: `1px solid ${pillar.iconBorder}`,
                }}
              >
                {pillar.icon}
              </div>
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 600,
                  color: '#1B4332',
                  marginBottom: 10,
                  fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif',
                  lineHeight: 1.3
                }}
              >
                {pillar.title}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  color: '#374151',
                  lineHeight: 1.7,
                  fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif',
                }}
              >
                {pillar.text}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <button
            style={{
              background: '#1B4332',
              color: '#fff',
              fontSize: 16,
              fontWeight: 600,
              padding: '15px 36px',
              borderRadius: 8,
              cursor: 'pointer',
              border: 'none',
              fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif',
            }}
          >
            {t.cta}
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .solutions-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .solutions-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
