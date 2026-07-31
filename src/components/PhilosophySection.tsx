'use client';
import React from 'react';

interface PhilosophySectionProps {
  lang: 'en' | 'ar';
}

const content = {
  en: {
    label: 'Founding Declaration',
    statement: 'Environmental intelligence is not created by software alone',
    lines: [
      'It is created through the disciplined application of environmental science, engineering knowledge, human expertise, governance, and responsible artificial intelligence',
      'GreenVue is not the destination. It is the mechanism through which environmental engineering knowledge becomes trusted environmental intelligence'
    ],
    attribution: 'Al-Azadar Al-Sanai — Engineering Philosophy, 2024',
    pillars: [
      { label: 'Environmental Science' },
      { label: 'Engineering Knowledge' },
      { label: 'Human Expertise' },
      { label: 'Responsible AI' },
    ]
  },
  ar: {
    label: 'الإعلان التأسيسي',
    statement: 'الذكاء البيئي لا يُصنع بالبرمجيات وحدها',
    lines: [
      'يُصنع من خلال التطبيق المنضبط للعلوم البيئية، والمعرفة الهندسية، والخبرة البشرية، والحوكمة، والذكاء الاصطناعي المسؤول',
      'GreenVue ليست الوجهة. إنها الآلية التي تتحول من خلالها المعرفة الهندسية البيئية إلى ذكاء بيئي موثوق'
    ],
    attribution: 'الأزهار الصناعي — الفلسفة الهندسية، 2024',
    pillars: [
      { label: 'العلوم البيئية' },
      { label: 'المعرفة الهندسية' },
      { label: 'الخبرة البشرية' },
      { label: 'الذكاء الاصطناعي المسؤول' },
    ]
  }
};

export default function PhilosophySection({ lang }: PhilosophySectionProps) {
  const t = content[lang];
  const isRtl = lang === 'ar';

  return (
    <section
      id="philosophy"
      style={{
        padding: '80px 24px',
        background: 'linear-gradient(160deg, #0a1e10 0%, #0d2b1a 60%, #081408 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
      dir={isRtl ? 'rtl' : 'ltr'}>

      {/* Subtle texture */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(46,125,82,0.12) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: 960, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Label */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          marginBottom: 44,
          justifyContent: isRtl ? 'flex-end' : 'flex-start'
        }}>
          <div style={{ width: 32, height: 1, background: 'rgba(201,168,76,0.5)' }} />
          <span style={{
            fontSize: 13,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#C9A84C',
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: 600
          }}>
            {t.label}
          </span>
          <div style={{ width: 32, height: 1, background: 'rgba(201,168,76,0.5)' }} />
        </div>

        {/* Primary statement */}
        <p style={{
          fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : '"Playfair Display", Georgia, serif',
          fontSize: 'clamp(28px, 4vw, 50px)',
          fontWeight: 700,
          color: '#fff',
          lineHeight: 1.2,
          marginBottom: 36,
          textAlign: isRtl ? 'right' : 'left'
        }}>
          {t.statement}
        </p>

        {/* Supporting lines */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 56 }}>
          {t.lines.map((line, i) => (
            <p key={i} style={{
              fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : '"Playfair Display", Georgia, serif',
              fontSize: isRtl ? 18 : 20,
              fontStyle: isRtl ? 'normal' : 'italic',
              color: i === 1 ? '#C9A84C' : 'rgba(255,255,255,0.80)',
              lineHeight: 1.75,
              maxWidth: 800,
              textAlign: isRtl ? 'right' : 'left',
              borderLeft: isRtl ? 'none' : (i === 1 ? '2px solid rgba(201,168,76,0.45)' : 'none'),
              borderRight: isRtl ? (i === 1 ? '2px solid rgba(201,168,76,0.45)' : 'none') : 'none',
              paddingLeft: isRtl ? 0 : (i === 1 ? 24 : 0),
              paddingRight: isRtl ? (i === 1 ? 24 : 0) : 0,
            }}>
              {line}
            </p>
          ))}
        </div>

        {/* Four pillars — horizontal strip */}
        <div style={{
          display: 'flex',
          gap: 0,
          borderTop: '1px solid rgba(201,168,76,0.20)',
          paddingTop: 36,
          flexWrap: 'wrap'
        }}>
          {t.pillars.map((p, i) => (
            <div key={i} style={{
              flex: '1 1 160px',
              padding: '0 28px',
              borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.10)' : 'none',
              textAlign: 'center'
            }}>
              <span style={{
                display: 'block',
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#C9A84C',
                margin: '0 auto 12px',
                opacity: 0.9
              }} />
              <span style={{
                fontSize: 13,
                color: 'rgba(255,255,255,0.70)',
                fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif',
                letterSpacing: isRtl ? 0 : '0.06em',
                textTransform: isRtl ? 'none' : 'uppercase',
                lineHeight: 1.5,
                fontWeight: 600
              }}>
                {p.label}
              </span>
            </div>
          ))}
        </div>

        {/* Attribution */}
        <div style={{
          marginTop: 36,
          textAlign: isRtl ? 'right' : 'left'
        }}>
          <span style={{
            fontSize: 13,
            color: 'rgba(201,168,76,0.55)',
            fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : '"Playfair Display", Georgia, serif',
            fontStyle: isRtl ? 'normal' : 'italic',
            letterSpacing: '0.04em'
          }}>
            — {t.attribution}
          </span>
        </div>

      </div>
    </section>
  );
}
