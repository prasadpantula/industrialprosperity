'use client';
import React, { useState } from 'react';

interface Vision2030SectionProps {
  lang: 'en' | 'ar';
  onCTAClick: () => void;
}

const content = {
  en: {
    sectionLabel: 'رؤية المملكة 2030 · Saudi Vision 2030',
    heroTitle: 'Environmental excellence\nin service of the Kingdom',
    heroSub: 'Every GreenVue application, every GITLCO deployment, every KFUPM research milestone — directly advancing Saudi Arabia\'s four critical climate and industrial commitments under Vision 2030',
    commitmentsLabel: 'Four commitments. One platform',
    commitmentsTitle: 'How Industrial Prosperity advances Vision 2030',
    commitments: [
      {
        num: '01',
        title: 'Saudi Green Initiative (SGI)',
        stat: '278 million tonnes CO₂e reduced by 2030',
        desc: 'GreenVue provides facility-level Scope 1/2/3 GHG quantification aligned with IPCC 2006 guidelines — the credible, auditable foundation for national SGI reporting. Every tonne counted. Every reduction verified',
        tools: ['GreenVue EMS', 'IPPU Suite', 'AFOLU Suite', 'GHG Waste Module'],
        color: '#2e7d52',
        bg: 'rgba(46,125,82,0.06)',
        border: 'rgba(46,125,82,0.2)'
      },
      {
        num: '02',
        title: 'Net Zero by 2060',
        stat: 'Long-term carbon neutrality commitment',
        desc: 'The Kingdom\'s net-zero path requires credible, auditable baselines established today. GreenVue creates those baselines using internationally recognised Tier 1–3 calculation methods — the evidence that makes the commitment real',
        tools: ['Scope 1/2/3 Tracking', 'Carbon Accounting', 'Baseline Establishment', 'Audit Trails'],
        color: '#1a5296',
        bg: 'rgba(26,82,150,0.06)',
        border: 'rgba(26,82,150,0.2)'
      },
      {
        num: '03',
        title: 'Nationally Determined Contributions (NDC)',
        stat: '278 MtCO₂e mitigation + 50% renewable energy by 2030',
        desc: 'GreenVue tracks industrial sector progress in real time against NDC commitments. Sector-level dashboards for ministers. Facility-level data for operators. A single source of national environmental truth',
        tools: ['National Dashboards', 'Sector Intelligence', 'CIS Policy Radar', 'Ministerial Briefs'],
        color: '#5b2ea8',
        bg: 'rgba(91,46,168,0.06)',
        border: 'rgba(91,46,168,0.2)'
      },
      {
        num: '04',
        title: 'NCEC Regulatory Compliance',
        stat: 'NCEC ambient air standards enforcement',
        desc: 'Automated monitoring against NCEC ambient air quality standards and Ministerial Decree stack emission limits. Enabling enforcement, reducing compliance risk, and protecting communities across the Kingdom\'s industrial base',
        tools: ['AMMNET Air Quality', 'Stack Emissions', 'Automated Alerts', 'Monthly Reports'],
        color: '#d4860a',
        bg: 'rgba(212,134,10,0.06)',
        border: 'rgba(212,134,10,0.2)'
      }
    ],
    sgiLabel: 'مبادرة السعودية الخضراء',
    sgiTitle: 'The Saudi Green Initiative — GreenVue is the measurement layer',
    sgiDesc: 'The SGI\'s 278 MtCO₂e reduction target requires granular, facility-level measurement. GreenVue provides that measurement layer — credible, IPCC-aligned, audit-ready — at every industrial site across the Kingdom',
    sgiQuote: '"Our recommended next steps align directly with the Saudi Green Initiative: pilot deployment at Jubail or Yanbu Industrial City, integration with NCEC\'s national environmental monitoring network (NEPM), and establishment of a national GHG registry baseline using the GreenVue inventory suite"',
    sgiStats: [
      { val: '278M', label: 'Tonnes CO₂e SGI target by 2030' },
      { val: 'Tier 1–3', label: 'IPCC calculation methods supported' },
      { val: 'NCEC', label: 'Automated regulatory compliance' },
      { val: 'Live', label: 'Facility-to-national real-time data' },
    ],
    ndcLabel: 'NDC Sector Coverage · Every sector. Every tonne',
    ndcSectors: [
      { name: 'Energy & Utilities', tools: 'GreenVue EMS · Stack Monitoring · Flare Monitoring' },
      { name: 'Industrial Manufacturing', tools: 'IPPU Suite (8 sectors) · CIP Dashboard · Digital Twins' },
      { name: 'Agriculture & Land', tools: 'AFOLU Agriculture · AFOLU Forestry · AFOLU Land Use' },
      { name: 'Waste Management', tools: 'GHG Waste Estimator · Scope 1/2/3' },
    ],
    natLabel: 'Nationalisation — Vision 2030',
    natTitle: 'In-Kingdom, by design\nNot as an afterthought',
    natDesc: 'Industrial Prosperity was built in Saudi Arabia, for Saudi Arabia. Our Dammam headquarters, KFUPM partnership, GITLCO engineering team, STC Solutions cloud — every layer of delivery is in-Kingdom',
    natPillars: [
      { title: 'Data Sovereignty', text: 'All GreenVue data processed and stored on STC Solutions\' in-Kingdom cloud infrastructure — meeting national data residency requirements' },
      { title: 'Saudi Engineering Talent', text: 'Graduate programmes, apprenticeships, and certification pathways creating the next generation of Saudi industrial technology professionals' },
      { title: 'Local R&D', text: 'KFUPM joint IP development means innovation stays in the Kingdom — building national technical capability, not just deploying foreign software' },
    ],
    footprint: [
      { label: 'HQ', val: 'Dammam, Eastern Province' },
      { label: 'Research', val: 'KFUPM, Dhahran' },
      { label: 'Engineering', val: 'GITLCO, Eastern Province' },
      { label: 'Cloud', val: 'STC Solutions, Saudi Arabia' },
      { label: 'AI Center', val: 'Technology Solutions Center (upcoming)' },
    ],
    roadmapLabel: 'Recommended next steps — Vision 2030 roadmap',
    roadmap: [
      'Pilot deployment at Jubail or Yanbu Industrial City',
      'Integration with NCEC National Environmental Monitoring Network (NEPM)',
      'National GHG Registry baseline — GreenVue inventory suite',
      'CIS intelligence platform rollout to Ministry policy units',
    ],
    ctaLabel: 'رؤية 2030',
    ctaTitle: 'Partner with us on Saudi Arabia\'s environmental future',
    ctaSub: 'Ministerial briefings · Pilot deployment proposals · Regulatory integration · Partnership inquiry',
    cta1: 'Request a ministerial brief →',
    cta2: 'View the platform',
  },
  ar: {
    sectionLabel: 'رؤية المملكة 2030 · Saudi Vision 2030',
    heroTitle: 'التميز البيئي\nفي خدمة المملكة',
    heroSub: 'كل تطبيق من تطبيقات GreenVue، وكل نشر لـ GITLCO، وكل إنجاز بحثي لـ KFUPM — يدفع مباشرةً نحو تحقيق التزامات المملكة المناخية والصناعية الأربعة الحرجة في إطار رؤية 2030',
    commitmentsLabel: 'أربعة التزامات. منصة واحدة',
    commitmentsTitle: 'كيف يدعم الازدهار الصناعي رؤية 2030',
    commitments: [
      {
        num: '01',
        title: 'مبادرة السعودية الخضراء',
        stat: '278 مليون طن مكافئ CO₂ بحلول 2030',
        desc: 'توفر GreenVue قياسات GHG على مستوى المنشأة وفق إرشادات IPCC 2006 — الأساس الموثوق والقابل للتدقيق لتقارير مبادرة السعودية الخضراء الوطنية',
        tools: ['GreenVue EMS', 'جناح IPPU', 'جناح AFOLU', 'وحدة نفايات GHG'],
        color: '#2e7d52',
        bg: 'rgba(46,125,82,0.06)',
        border: 'rgba(46,125,82,0.2)'
      },
      {
        num: '02',
        title: 'الحياد الكربوني بحلول 2060',
        stat: 'التزام طويل الأمد بالحياد الكربوني',
        desc: 'يتطلب مسار الحياد الكربوني للمملكة إنشاء خطوط أساس موثوقة وقابلة للتدقيق اليوم. تُنشئ GreenVue تلك الخطوط باستخدام طرق الحساب المعترف بها دولياً من الطبقة 1 إلى 3',
        tools: ['تتبع النطاق 1/2/3', 'محاسبة الكربون', 'إنشاء خط الأساس', 'مسارات التدقيق'],
        color: '#1a5296',
        bg: 'rgba(26,82,150,0.06)',
        border: 'rgba(26,82,150,0.2)'
      },
      {
        num: '03',
        title: 'المساهمات المحددة وطنياً (NDC)',
        stat: '278 مليون طن تخفيف + 50% طاقة متجددة بحلول 2030',
        desc: 'تتتبع GreenVue تقدم القطاع الصناعي في الوقت الفعلي مقابل التزامات NDC. لوحات معلومات على مستوى القطاع للوزراء. بيانات على مستوى المنشأة للمشغلين',
        tools: ['لوحات وطنية', 'ذكاء القطاعات', 'رادار سياسات CIS', 'إحاطات وزارية'],
        color: '#5b2ea8',
        bg: 'rgba(91,46,168,0.06)',
        border: 'rgba(91,46,168,0.2)'
      },
      {
        num: '04',
        title: 'الامتثال التنظيمي لـ NCEC',
        stat: 'تطبيق معايير جودة الهواء المحيطي لـ NCEC',
        desc: 'رصد آلي مقابل معايير جودة الهواء المحيطي لـ NCEC وحدود انبعاثات المداخن بموجب المرسوم الوزاري. تمكين التطبيق وتقليل مخاطر الامتثال',
        tools: ['جودة هواء AMMNET', 'انبعاثات المداخن', 'تنبيهات آلية', 'تقارير شهرية'],
        color: '#d4860a',
        bg: 'rgba(212,134,10,0.06)',
        border: 'rgba(212,134,10,0.2)'
      }
    ],
    sgiLabel: 'مبادرة السعودية الخضراء',
    sgiTitle: 'مبادرة السعودية الخضراء — GreenVue هي طبقة القياس',
    sgiDesc: 'يتطلب هدف مبادرة السعودية الخضراء البالغ 278 مليون طن مكافئ CO₂ قياسات دقيقة على مستوى المنشأة. توفر GreenVue تلك الطبقة — موثوقة ومتوافقة مع IPCC وجاهزة للتدقيق',
    sgiQuote: '"توصياتنا بالخطوات التالية تتوافق مباشرة مع مبادرة السعودية الخضراء: النشر التجريبي في مدينة جبيل أو ينبع الصناعية، والتكامل مع شبكة NCEC الوطنية لرصد البيئة، وإنشاء خط أساس السجل الوطني لغازات الدفيئة"',
    sgiStats: [
      { val: '278م', label: 'طن مكافئ CO₂ هدف SGI بحلول 2030' },
      { val: 'طبقة 1-3', label: 'طرق حساب IPCC المدعومة' },
      { val: 'NCEC', label: 'امتثال تنظيمي آلي' },
      { val: 'مباشر', label: 'بيانات فورية من المنشأة إلى الوطن' },
    ],
    ndcLabel: 'تغطية قطاعات NDC · كل قطاع. كل طن',
    ndcSectors: [
      { name: 'الطاقة والمرافق', tools: 'GreenVue EMS · رصد المداخن · رصد الحرق' },
      { name: 'التصنيع الصناعي', tools: 'جناح IPPU (8 قطاعات) · لوحة CIP · التوائم الرقمية' },
      { name: 'الزراعة والأراضي', tools: 'AFOLU الزراعة · AFOLU الحراجة · AFOLU استخدام الأراضي' },
      { name: 'إدارة النفايات', tools: 'تقدير نفايات GHG · النطاق 1/2/3' },
    ],
    natLabel: 'التوطين — رؤية 2030',
    natTitle: 'داخل المملكة، بالتصميم\nليس كفكرة لاحقة',
    natDesc: 'بُني الازدهار الصناعي في المملكة العربية السعودية، للمملكة العربية السعودية. مقرنا في الدمام، وشراكة KFUPM، وفريق GITLCO الهندسي، وسحابة STC Solutions — كل طبقة من طبقات التسليم داخل المملكة',
    natPillars: [
      { title: 'سيادة البيانات', text: 'تُعالَج جميع بيانات GreenVue وتُخزَّن على البنية التحتية السحابية لـ STC Solutions داخل المملكة — وفق متطلبات الإقامة الوطنية للبيانات' },
      { title: 'الكفاءات الهندسية السعودية', text: 'برامج الخريجين والتدريب المهني ومسارات الشهادات لتكوين الجيل القادم من المتخصصين السعوديين في التكنولوجيا الصناعية' },
      { title: 'البحث والتطوير المحلي', text: 'تطوير الملكية الفكرية المشتركة مع KFUPM يعني أن الابتكار يبقى في المملكة — بناء قدرة تقنية وطنية، لا مجرد نشر برمجيات أجنبية' },
    ],
    footprint: [
      { label: 'المقر الرئيسي', val: 'الدمام، المنطقة الشرقية' },
      { label: 'البحث', val: 'KFUPM، الظهران' },
      { label: 'الهندسة', val: 'GITLCO، المنطقة الشرقية' },
      { label: 'السحابة', val: 'STC Solutions، المملكة العربية السعودية' },
      { label: 'مركز الذكاء الاصطناعي', val: 'مركز الحلول التكنولوجية (قريباً)' },
    ],
    roadmapLabel: 'الخطوات التالية الموصى بها — خارطة طريق رؤية 2030',
    roadmap: [
      'النشر التجريبي في مدينة جبيل أو ينبع الصناعية',
      'التكامل مع شبكة NCEC الوطنية لرصد البيئة (NEPM)',
      'خط أساس السجل الوطني لغازات الدفيئة — جناح جرد GreenVue',
      'طرح منصة ذكاء CIS على وحدات السياسات الوزارية',
    ],
    ctaLabel: 'رؤية 2030',
    ctaTitle: 'شاركنا في مستقبل المملكة البيئي',
    ctaSub: 'إحاطات وزارية · مقترحات النشر التجريبي · التكامل التنظيمي · استفسارات الشراكة',
    cta1: 'طلب إحاطة وزارية ←',
    cta2: 'عرض المنصة',
  }
};

export default function Vision2030Section({ lang, onCTAClick }: Vision2030SectionProps) {
  const t = content[lang];
  const isRtl = lang === 'ar';

  return (
    <section
      id="vision2030"
      style={{ background: '#f9f7f1' }}
      dir={isRtl ? 'rtl' : 'ltr'}>

      {/* Hero banner */}
      <div style={{
        padding: '80px 24px 72px',
        background: 'linear-gradient(160deg, #0a1e10 0%, #0d2b1a 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(201,168,76,0.10) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ marginBottom: 20 }}>
            <span style={{
              fontSize: 13,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 600
            }}>
              {t.sectionLabel}
            </span>
          </div>
          <h2 style={{
            fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(32px, 4.5vw, 58px)',
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1.15,
            marginBottom: 28,
            whiteSpace: 'pre-line',
            maxWidth: 700
          }}>
            {t.heroTitle}
          </h2>
          <p style={{
            fontSize: isRtl ? 17 : 20,
            color: '#C9A84C',
            lineHeight: 1.75,
            maxWidth: 680,
            fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : '"Playfair Display", Georgia, serif',
            fontStyle: isRtl ? 'normal' : 'italic'
          }}>
            {t.heroSub}
          </p>
        </div>
      </div>

      {/* Four Commitments */}
      <div style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 52 }}>
            <div className="section-label">{t.commitmentsLabel}</div>
            <h3 style={{
              fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(26px, 3.5vw, 42px)',
              fontWeight: 700,
              color: '#1B4332',
              lineHeight: 1.2
            }}>
              {t.commitmentsTitle}
            </h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 28 }}
            className="vision-commitments-grid">
            {t.commitments.map((c, i) => (
              <div key={i} style={{
                background: c.bg,
                border: `1px solid ${c.border}`,
                borderTop: `4px solid ${c.color}`,
                borderRadius: 16,
                padding: '32px 28px 28px'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 18 }}>
                  <span style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: 48,
                    fontWeight: 700,
                    color: c.color,
                    opacity: 0.45,
                    lineHeight: 1,
                    flexShrink: 0
                  }}>
                    {c.num}
                  </span>
                  <div>
                    <div style={{
                      fontSize: 17,
                      fontWeight: 600,
                      color: '#1B4332',
                      fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif',
                      marginBottom: 6,
                      lineHeight: 1.3
                    }}>
                      {c.title}
                    </div>
                    <div style={{
                      fontSize: 13,
                      color: c.color,
                      fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif',
                      fontWeight: 600
                    }}>
                      {c.stat}
                    </div>
                  </div>
                </div>
                <p style={{
                  fontSize: 15,
                  color: '#374151',
                  lineHeight: 1.7,
                  marginBottom: 18,
                  fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif'
                }}>
                  {c.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {c.tools.map((tool, ti) => (
                    <span key={ti} style={{
                      fontSize: 11,
                      padding: '3px 10px',
                      borderRadius: 4,
                      background: 'rgba(255,255,255,0.85)',
                      border: `1px solid ${c.border}`,
                      color: c.color,
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontWeight: 600,
                      letterSpacing: '0.03em'
                    }}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SGI Deep Dive */}
      <div style={{
        padding: '72px 24px',
        background: 'linear-gradient(135deg, #0a1e10 0%, #0d2b1a 100%)'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}
          className="vision-nat-grid">
          <div>
            <div style={{ marginBottom: 16 }}>
              <span style={{
                fontFamily: 'Cairo, system-ui, sans-serif',
                fontSize: 18,
                fontWeight: 700,
                color: '#6fd98a'
              }}>
                {t.sgiLabel}
              </span>
            </div>
            <h3 style={{
              fontFamily: isRtl ? 'Cairo, system-ui, sans-serif' : '"Cormorant Garamond", Georgia, serif',
              fontSize: 'clamp(22px, 3vw, 36px)',
              fontWeight: isRtl ? 700 : 300,
              color: '#fff',
              lineHeight: 1.25,
              marginBottom: 20
            }}>
              {t.sgiTitle}
            </h3>
            <p style={{
              fontSize: 15,
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.75,
              marginBottom: 24,
              fontFamily: isRtl ? 'Cairo, system-ui, sans-serif' : 'Outfit, system-ui, sans-serif'
            }}>
              {t.sgiDesc}
            </p>
            <blockquote style={{
              borderLeft: isRtl ? 'none' : '2px solid rgba(111,217,138,0.4)',
              borderRight: isRtl ? '2px solid rgba(111,217,138,0.4)' : 'none',
              paddingLeft: isRtl ? 0 : 20,
              paddingRight: isRtl ? 20 : 0,
              margin: 0
            }}>
              <p style={{
                fontSize: 14,
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.7,
                fontFamily: isRtl ? 'Cairo, system-ui, sans-serif' : '"Cormorant Garamond", Georgia, serif',
                fontStyle: isRtl ? 'normal' : 'italic'
              }}>
                {t.sgiQuote}
              </p>
            </blockquote>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
            className="vision-sgi-stats">
            {t.sgiStats.map((s, i) => (
              <div key={i} style={{
                padding: '28px 20px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(111,217,138,0.15)',
                borderRadius: 12,
                textAlign: 'center'
              }}>
                <div style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: 300,
                  color: '#6fd98a',
                  lineHeight: 1,
                  marginBottom: 10
                }}>
                  {s.val}
                </div>
                <div style={{
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.50)',
                  fontFamily: isRtl ? 'Cairo, system-ui, sans-serif' : 'Outfit, system-ui, sans-serif',
                  lineHeight: 1.5
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NDC Sector Coverage */}
      <div style={{ padding: '72px 24px', background: '#f9f7f1' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: 36 }}>{t.ndcLabel}</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}
            className="vision-ndc-grid">
            {t.ndcSectors.map((s, i) => (
              <div key={i} style={{
                padding: '24px 20px',
                background: '#fff',
                border: '1px solid #d0ddd0',
                borderTop: '3px solid #2e7d52',
                borderRadius: 12
              }}>
                <div style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#0e1a0e',
                  marginBottom: 12,
                  fontFamily: isRtl ? 'Cairo, system-ui, sans-serif' : 'Outfit, system-ui, sans-serif'
                }}>
                  {s.name}
                </div>
                <div style={{
                  fontSize: 13,
                  color: '#5a7a5a',
                  lineHeight: 1.65,
                  fontFamily: isRtl ? 'Cairo, system-ui, sans-serif' : 'Outfit, system-ui, sans-serif'
                }}>
                  {s.tools}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nationalisation */}
      <div style={{ padding: '72px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}
          className="vision-nat-grid">
          <div>
            <div className="section-label">{t.natLabel}</div>
            <h3 style={{
              fontFamily: isRtl ? 'Cairo, system-ui, sans-serif' : '"Cormorant Garamond", Georgia, serif',
              fontSize: 'clamp(26px, 3.5vw, 42px)',
              fontWeight: isRtl ? 700 : 300,
              color: '#0e1a0e',
              lineHeight: 1.2,
              marginBottom: 20,
              whiteSpace: 'pre-line'
            }}>
              {t.natTitle}
            </h3>
            <p style={{
              fontSize: 16,
              color: '#3a4a3a',
              lineHeight: 1.75,
              marginBottom: 32,
              fontFamily: isRtl ? 'Cairo, system-ui, sans-serif' : 'Outfit, system-ui, sans-serif'
            }}>
              {t.natDesc}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {t.natPillars.map((p, i) => (
                <div key={i} style={{
                  padding: '18px 20px',
                  background: '#f9f7f1',
                  borderLeft: isRtl ? 'none' : '3px solid #2e7d52',
                  borderRight: isRtl ? '3px solid #2e7d52' : 'none',
                  borderRadius: 8
                }}>
                  <div style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: '#0e1a0e',
                    marginBottom: 8,
                    fontFamily: isRtl ? 'Cairo, system-ui, sans-serif' : 'Outfit, system-ui, sans-serif'
                  }}>
                    {p.title}
                  </div>
                  <div style={{
                    fontSize: 14,
                    color: '#3a4a3a',
                    lineHeight: 1.7,
                    fontFamily: isRtl ? 'Cairo, system-ui, sans-serif' : 'Outfit, system-ui, sans-serif'
                  }}>
                    {p.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            {/* In-Kingdom footprint */}
            <div style={{
              padding: '32px 28px',
              background: '#0d2b1a',
              borderRadius: 16,
              marginBottom: 24
            }}>
              <div style={{
                fontSize: 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.40)',
                fontFamily: 'Outfit, system-ui, sans-serif',
                marginBottom: 24
              }}>
                In-Kingdom footprint
              </div>
              {t.footprint.map((f, i) => (
                <div key={i} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 0',
                  borderBottom: i < t.footprint.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none'
                }}>
                  <span style={{
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.45)',
                    fontFamily: isRtl ? 'Cairo, system-ui, sans-serif' : 'Outfit, system-ui, sans-serif',
                    letterSpacing: '0.04em'
                  }}>
                    {f.label}
                  </span>
                  <span style={{
                    fontSize: 13,
                    color: '#6fd98a',
                    fontFamily: isRtl ? 'Cairo, system-ui, sans-serif' : 'Outfit, system-ui, sans-serif',
                    fontWeight: 600
                  }}>
                    {f.val}
                  </span>
                </div>
              ))}
            </div>

            {/* Roadmap */}
            <div style={{
              padding: '28px',
              background: '#f9f7f1',
              border: '1px solid #d0ddd0',
              borderRadius: 16
            }}>
              <div style={{
                fontSize: 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#8a9a8a',
                fontFamily: 'Outfit, system-ui, sans-serif',
                marginBottom: 20
              }}>
                {t.roadmapLabel}
              </div>
              {t.roadmap.map((step, i) => (
                <div key={i} style={{
                  display: 'flex',
                  gap: 14,
                  alignItems: 'flex-start',
                  marginBottom: i < t.roadmap.length - 1 ? 16 : 0
                }}>
                  <span style={{
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    background: '#2e7d52',
                    color: '#fff',
                    fontSize: 11,
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontFamily: 'Outfit, system-ui, sans-serif',
                    marginTop: 1
                  }}>
                    {i + 1}
                  </span>
                  <span style={{
                    fontSize: 14,
                    color: '#3a4a3a',
                    lineHeight: 1.6,
                    fontFamily: isRtl ? 'Cairo, system-ui, sans-serif' : 'Outfit, system-ui, sans-serif'
                  }}>
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ministry-Facing CTA */}
      <div style={{
        padding: '80px 24px',
        background: 'linear-gradient(135deg, #0a1e10 0%, #0d2b1a 100%)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ marginBottom: 16 }}>
            <span style={{
              fontFamily: 'Cairo, system-ui, sans-serif',
              fontSize: 22,
              fontWeight: 700,
              color: '#6fd98a'
            }}>
              {t.ctaLabel}
            </span>
          </div>
          <h3 style={{
            fontFamily: isRtl ? 'Cairo, system-ui, sans-serif' : '"Cormorant Garamond", Georgia, serif',
            fontSize: 'clamp(26px, 3.5vw, 42px)',
            fontWeight: isRtl ? 700 : 300,
            color: '#fff',
            lineHeight: 1.25,
            marginBottom: 18
          }}>
            {t.ctaTitle}
          </h3>
          <p style={{
            fontSize: 16,
            color: 'rgba(255,255,255,0.65)',
            marginBottom: 40,
            fontFamily: isRtl ? 'Cairo, system-ui, sans-serif' : 'Outfit, system-ui, sans-serif',
            lineHeight: 1.6
          }}>
            {t.ctaSub}
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={onCTAClick}
              style={{
                background: '#2e7d52',
                color: '#fff',
                fontSize: 16,
                fontWeight: 600,
                padding: '16px 40px',
                borderRadius: 8,
                cursor: 'pointer',
                border: 'none',
                fontFamily: isRtl ? 'Cairo, system-ui, sans-serif' : 'Outfit, system-ui, sans-serif'
              }}>
              {t.cta1}
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('platform');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
              background: 'transparent',
              color: 'rgba(255,255,255,0.80)',
              fontSize: 16,
              padding: '16px 40px',
              borderRadius: 8,
              cursor: 'pointer',
              border: '1px solid rgba(255,255,255,0.25)',
              fontFamily: isRtl ? 'Cairo, system-ui, sans-serif' : 'Outfit, system-ui, sans-serif'
            }}>
              {t.cta2}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
