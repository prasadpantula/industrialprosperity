'use client';
import React from 'react';

interface EcosystemSectionProps {
  lang: 'en' | 'ar';
}

const content = {
  en: {
    label: 'Our ecosystem',
    h2a: 'Three pillars —',
    h2em: 'One complete delivery',
    sub: 'Al-Azadar Al-Sanai operates through a carefully structured ecosystem of independent partners — each bringing distinct capability to a single national mission',
    entities: [
      {
        name: 'GreenVue',
        color: '#2e7d52',
        bg: 'rgba(46,125,82,0.07)',
        border: 'rgba(46,125,82,0.22)',
        icon: '🌿',
        role: 'Environmental Intelligence Mechanism',
        roleTag: 'Al-Azadar Al-Sanai Platform',
        desc: 'Not a product suite — the mechanism through which environmental engineering knowledge becomes trusted environmental intelligence. 19 applications. KFUPM joint IP · GHGMI certified',
        badges: ['19 Apps', 'GHGMI Certified', 'KFUPM IP'],
        relationship: 'Core Platform'
      },
      {
        name: 'GITLCO',
        color: '#1a5296',
        bg: 'rgba(26,82,150,0.07)',
        border: 'rgba(26,82,150,0.22)',
        icon: '⚙️',
        role: 'Execution Partner',
        roleTag: 'Gulf Industrial & Technology Co. Ltd.',
        desc: 'Independent engineering execution partner. PLC, SCADA & DCS engineering since 1999 — sensor installation, commissioning, and 24/7 O&M across the Eastern Province. GE Vernova certified',
        badges: ['Since 1999', 'GE Vernova', '24/7 O&M'],
        relationship: 'Execution Partner'
      },
      {
        name: 'Metakosmos',
        color: '#5b2ea8',
        bg: 'rgba(91,46,168,0.07)',
        border: 'rgba(91,46,168,0.22)',
        icon: '🚀',
        role: 'Alliance Partner',
        roleTag: 'KSA Strategic Alliance · IP Invested',
        desc: 'Alliance partner with IP investment and technology transfer. Al-Azadar Al-Sanai has invested in Metakosmos and transferred real-time environmental monitoring technology. Kosmosuit® XR · Kernel360™ · $2M Pre-Seed',
        badges: ['IP Invested', 'Tech Transfer', 'Kernel360™'],
        relationship: 'Alliance Partner'
      }
    ],
    nationalRole: 'Our national role',
    h2b: 'Not a product company',
    h2bEm: 'A nation-building company',
    nationalSub: 'Industrial Prosperity operates at the intersection of environmental compliance, industrial intelligence, and national capability development — contributing to Saudi Arabia\'s most critical strategic goals',
    pillars: [
      {
        icon: '🌿',
        bg: '#e8f5ee',
        borderTop: '#2e7d52',
        title: 'Environmental Stewardship',
        text: 'Real-time emissions monitoring, GHG accounting, and air quality intelligence across every sector of Saudi industry — powering the Kingdom\'s commitment to the Saudi Green Initiative'
      },
      {
        icon: '⚙️',
        bg: '#eaf2fc',
        borderTop: '#1a5296',
        title: 'Industrial Digitalisation',
        text: 'AspenTech, AVEVA PI, digital twins, and advanced process control — transforming Saudi industrial plants into intelligent, optimised, and connected facilities'
      },
      {
        icon: '🏗',
        bg: '#fff4e0',
        borderTop: '#d4860a',
        title: 'In-Kingdom Capability',
        text: 'Every solution designed, deployed, and maintained by Saudi-based teams. Training, R&D, and IP development — building national expertise that stays in the Kingdom'
      },
      {
        icon: '🤝',
        bg: '#f0eafc',
        borderTop: '#5b2ea8',
        title: 'Strategic Ecosystem',
        text: 'KFUPM academic alliance, STC Solutions cloud infrastructure, GITLCO engineering execution, and Metakosmos frontier technology — a complete national delivery ecosystem'
      }
    ]
  },
  ar: {
    label: 'نظامنا البيئي',
    h2a: 'ثلاثة ركائز —',
    h2em: 'تسليم متكامل واحد',
    sub: 'يعمل الأزهار الصناعي من خلال نظام بيئي منظم من الشركاء المستقلين — كل منهم يجلب قدرة متميزة لمهمة وطنية واحدة',
    entities: [
      {
        name: 'GreenVue',
        color: '#2e7d52',
        bg: 'rgba(46,125,82,0.07)',
        border: 'rgba(46,125,82,0.22)',
        icon: '🌿',
        role: 'آلية الذكاء البيئي',
        roleTag: 'منصة الأزهار الصناعي',
        desc: 'ليست مجموعة منتجات — بل الآلية التي تتحول من خلالها المعرفة الهندسية البيئية إلى ذكاء بيئي موثوق. 19 تطبيقاً. ملكية مشتركة مع KFUPM · معتمد GHGMI',
        badges: ['19 تطبيقاً', 'معتمد GHGMI', 'ملكية KFUPM'],
        relationship: 'المنصة الأساسية'
      },
      {
        name: 'GITLCO',
        color: '#1a5296',
        bg: 'rgba(26,82,150,0.07)',
        border: 'rgba(26,82,150,0.22)',
        icon: '⚙️',
        role: 'شريك التنفيذ',
        roleTag: 'شركة الخليج للصناعة والتكنولوجيا',
        desc: 'شريك تنفيذ هندسي مستقل. هندسة PLC وSCADA وDCS منذ 1999 — تركيب أجهزة استشعار، تشغيل، صيانة على مدار الساعة. معتمد GE Vernova',
        badges: ['منذ 1999', 'GE Vernova', 'صيانة 24/7'],
        relationship: 'شريك التنفيذ'
      },
      {
        name: 'Metakosmos',
        color: '#5b2ea8',
        bg: 'rgba(91,46,168,0.07)',
        border: 'rgba(91,46,168,0.22)',
        icon: '🚀',
        role: 'شريك التحالف',
        roleTag: 'تحالف استراتيجي · استثمار في الملكية الفكرية',
        desc: 'شريك تحالف مع استثمار في الملكية الفكرية ونقل التكنولوجيا. استثمر الأزهار الصناعي في Metakosmos ونقل تقنية الرصد البيئي الفوري. Kosmosuit® · Kernel360™',
        badges: ['استثمار IP', 'نقل تكنولوجيا', 'Kernel360™'],
        relationship: 'شريك التحالف'
      }
    ],
    nationalRole: 'دورنا الوطني',
    h2b: 'ليست شركة منتجات',
    h2bEm: 'شركة بناء وطني',
    nationalSub: 'يعمل الازدهار الصناعي عند تقاطع الامتثال البيئي والذكاء الصناعي وتطوير القدرات الوطنية — مساهماً في أهم الأهداف الاستراتيجية للمملكة',
    pillars: [
      {
        icon: '🌿',
        bg: '#e8f5ee',
        borderTop: '#2e7d52',
        title: 'الإشراف البيئي',
        text: 'رصد الانبعاثات الفوري، ومحاسبة غازات الدفيئة، وذكاء جودة الهواء في كل قطاع من القطاعات الصناعية السعودية'
      },
      {
        icon: '⚙️',
        bg: '#eaf2fc',
        borderTop: '#1a5296',
        title: 'الرقمنة الصناعية',
        text: 'AspenTech وAVEVA PI والتوائم الرقمية وتحكم العمليات المتقدم — تحويل المصانع السعودية إلى منشآت ذكية ومحسّنة ومترابطة'
      },
      {
        icon: '🏗',
        bg: '#fff4e0',
        borderTop: '#d4860a',
        title: 'القدرات الوطنية',
        text: 'كل حل مصمم ومنشور ومُصان من قبل فرق سعودية. التدريب والبحث وتطوير الملكية الفكرية — بناء خبرة وطنية تبقى في المملكة'
      },
      {
        icon: '🤝',
        bg: '#f0eafc',
        borderTop: '#5b2ea8',
        title: 'النظام البيئي الاستراتيجي',
        text: 'تحالف KFUPM الأكاديمي، وبنية STC Solutions السحابية، وتنفيذ GITLCO الهندسي، وتقنية Metakosmos الرائدة — نظام تسليم وطني متكامل'
      }
    ]
  }
};

export default function EcosystemSection({ lang }: EcosystemSectionProps) {
  const t = content[lang];
  const isRtl = lang === 'ar';

  return (
    <>
      {/* Ecosystem Section */}
      <section
        id="ecosystem"
        style={{ padding: '80px 24px', background: '#f9f7f1' }}
        dir={isRtl ? 'rtl' : 'ltr'}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ maxWidth: 700, marginBottom: 52 }}>
            <div className="section-label">{t.label}</div>
            <h2 style={{
              fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(32px, 4vw, 50px)',
              lineHeight: 1.1,
              fontWeight: 700,
              color: '#1B4332',
              marginBottom: 18
            }}>
              {t.h2a} <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>{t.h2em}</em>
            </h2>
            <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.75, fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif' }}>
              {t.sub}
            </p>
          </div>

          {/* Three partner cards — equal balanced grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}
            className="ecosystem-cards-grid">
            {t.entities.map((entity, i) => (
              <div key={i} style={{
                background: entity.bg,
                border: `1px solid ${entity.border}`,
                borderTop: `4px solid ${entity.color}`,
                borderRadius: 16,
                padding: '32px 28px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column'
              }}>
                {/* Relationship tag */}
                <div style={{
                  position: 'absolute',
                  top: -1,
                  right: isRtl ? 'auto' : 24,
                  left: isRtl ? 24 : 'auto',
                  transform: 'translateY(-50%)',
                  background: entity.color,
                  color: '#fff',
                  fontSize: 10,
                  fontWeight: 700,
                  padding: '4px 12px',
                  borderRadius: 4,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontFamily: 'Inter, system-ui, sans-serif'
                }}>
                  {entity.relationship}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10, marginTop: 12 }}>
                  <span style={{ fontSize: 26 }}>{entity.icon}</span>
                  <div>
                    <div style={{ fontSize: 22, fontWeight: 700, color: entity.color, fontFamily: '"Playfair Display", Georgia, serif' }}>
                      {entity.name === 'GITLCO' ? (
                        <a href="https://www.gitlco.com" target="_blank" rel="noopener noreferrer" style={{ color: entity.color, textDecoration: 'none', borderBottom: `1px solid ${entity.color}` }}>
                          {entity.name}
                        </a>
                      ) : entity.name === 'Metakosmos' ? (
                        <a href="https://www.metakosmos.com.au" target="_blank" rel="noopener noreferrer" style={{ color: entity.color, textDecoration: 'none', borderBottom: `1px solid ${entity.color}` }}>
                          {entity.name}
                        </a>
                      ) : entity.name}
                    </div>
                    <div style={{ fontSize: 12, color: '#6a7a6a', fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif', letterSpacing: '0.02em', marginTop: 2 }}>
                      {entity.roleTag}
                    </div>
                  </div>
                </div>

                <div style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: entity.color,
                  fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  marginBottom: 14
                }}>
                  {entity.role}
                </div>

                <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, marginBottom: 18, fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif', flex: 1 }}>
                  {entity.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {entity.badges.map((badge, bi) => (
                    <span key={bi} style={{
                      fontSize: 11,
                      padding: '3px 10px',
                      borderRadius: 4,
                      background: 'rgba(255,255,255,0.85)',
                      border: `1px solid ${entity.border}`,
                      color: entity.color,
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontWeight: 600,
                      letterSpacing: '0.03em'
                    }}>
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* National Role Section */}
      <section
        style={{ padding: '80px 24px', background: '#fff' }}
        dir={isRtl ? 'rtl' : 'ltr'}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ maxWidth: 700, marginBottom: 56 }}>
            <div className="section-label">{t.nationalRole}</div>
            <h2 style={{
              fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(32px, 4vw, 50px)',
              lineHeight: 1.1,
              fontWeight: 700,
              color: '#1B4332',
              marginBottom: 18
            }}>
              {t.h2b}<br />
              <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>{t.h2bEm}</em>
            </h2>
            <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.75, fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif' }}>
              {t.nationalSub}
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}
            className="national-pillars-grid">
            {t.pillars.map((pillar, i) => (
              <div key={i} style={{
                background: '#fff',
                borderWidth: '3px 1px 1px',
                borderStyle: 'solid',
                borderColor: `${pillar.borderTop} #d0ddd0 #d0ddd0`,
                borderRadius: 16,
                padding: '28px 22px',
                transition: '0.2s'
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 22, marginBottom: 18, background: pillar.bg
                }}>
                  {pillar.icon}
                </div>
                <h3 style={{
                  fontSize: 17, fontWeight: 600, color: '#1B4332',
                  marginBottom: 10, lineHeight: 1.3,
                  fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif'
                }}>
                  {pillar.title}
                </h3>
                <p style={{
                  fontSize: 15, color: '#374151', lineHeight: 1.7,
                  fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif'
                }}>
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
