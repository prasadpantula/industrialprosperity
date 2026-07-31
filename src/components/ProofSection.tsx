'use client';
import React from 'react';

interface ProofSectionProps {
  lang: 'en' | 'ar';
  onCTAClick: () => void;
}

const content = {
  en: {
    label: 'Deployed · Operational',
    h2a: 'FMS with KJO —',
    h2em: 'Saudi Arabia\'s first deployed flare monitoring system',
    sub: 'Flare Monitoring System (FMS) is live and operational with Khafji Joint Operations (KJO) — a Saudi Aramco affiliate. This is not a pilot. This is production-grade environmental intelligence, deployed and delivering results in the Kingdom today',
    kjoLabel: 'KJO — Khafji Joint Operations',
    kjoSub: 'Saudi Aramco Affiliate · Eastern Province',
    deployed: 'Deployed',
    capabilities: 'FMS Capabilities',
    caps: [
    'Real-time flare gas flow measurement and quantification with unique system',
    'NCEC compliance automated reporting',
    'Operator and audit validating systems',
    'Live flaring dashboard notification & alert system for threshold breaches',
    'Flaring minimization projects tracking'],

    outcomes: 'Client Outcomes',
    outcomeList: [
    { icon: '✅', text: 'NCEC compliance achieved and maintained' },
    { icon: '📊', text: 'Real-time visibility into flare emissions across all stacks' },
    { icon: '⚡', text: 'Automated reporting replacing manual processes' },
    { icon: '🔗', text: 'Seamless integration with existing SCADA infrastructure' }],

    cta: 'Request a platform demo →',
    ctaSub: 'See FMS and all 19 GreenVue apps in action',
    nextLabel: 'Next deployment',
    nextText: 'GreenVue EMS · Stack Emissions · AMMNET Air Quality — ready for immediate deployment across Saudi industrial facilities'
  },
  ar: {
    label: 'منشور · تشغيلي',
    h2a: 'FMS مع KJO —',
    h2em: 'أول نظام رصد حرق غاز منشور في المملكة العربية السعودية',
    sub: 'نظام رصد حرق الغاز (FMS) يعمل بشكل مباشر مع عمليات الخفجي المشتركة (KJO) — شركة تابعة لأرامكو السعودية. هذا ليس مشروعاً تجريبياً. هذا ذكاء بيئي بمستوى الإنتاج، منشور ويحقق نتائج في المملكة اليوم',
    kjoLabel: 'KJO — عمليات الخفجي المشتركة',
    kjoSub: 'شركة تابعة لأرامكو السعودية · المنطقة الشرقية',
    deployed: 'منشور',
    capabilities: 'قدرات FMS',
    caps: [
    'قياس تدفق غاز الحرق وتحديده في الوقت الفعلي بنظام فريد',
    'تقارير امتثال NCEC آلية',
    'أنظمة التحقق للمشغلين والتدقيق',
    'نظام إشعارات وتنبيهات لوحة الحرق المباشر لتجاوز الحدود',
    'تتبع مشاريع تقليل الحرق'],

    outcomes: 'نتائج العميل',
    outcomeList: [
    { icon: '✅', text: 'تحقيق امتثال NCEC والحفاظ عليه' },
    { icon: '📊', text: 'رؤية فورية لانبعاثات الحرق عبر جميع المداخن' },
    { icon: '⚡', text: 'تقارير آلية تحل محل العمليات اليدوية' },
    { icon: '🔗', text: 'تكامل سلس مع بنية SCADA التحتية القائمة' }],

    cta: 'طلب عرض توضيحي للمنصة ←',
    ctaSub: 'شاهد FMS وجميع تطبيقات GreenVue الـ 19 في العمل',
    nextLabel: 'النشر التالي',
    nextText: 'GreenVue EMS · انبعاثات المداخن · جودة الهواء AMMNET — جاهزة للنشر الفوري عبر المنشآت الصناعية السعودية'
  }
};

export default function ProofSection({ lang, onCTAClick }: ProofSectionProps) {
  const t = content[lang];
  const isRtl = lang === 'ar';

  return (
    <section
      id="proof"
      style={{
        background: 'linear-gradient(135deg, #0d2b1a 0%, #1a4d2e 60%, #0d2b1a 100%)',
        padding: '80px 40px',
        position: 'relative',
        overflow: 'hidden'
      }}
      dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* Background pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage: 'radial-gradient(circle at 10% 50%, rgb(76,175,115) 0%, transparent 50%), radial-gradient(circle at 90% 20%, rgb(212,175,55) 0%, transparent 40%)'
        }} />
      

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <span
              style={{
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
              {t.label}
            </span>
            <span
              style={{
                background: 'rgba(201,168,76,0.15)',
                border: '1px solid rgba(201,168,76,0.4)',
                color: '#C9A84C',
                fontSize: 11,
                fontWeight: 600,
                padding: '4px 12px',
                borderRadius: 4,
                fontFamily: 'Inter, system-ui, sans-serif'
              }}>
              KJO · Saudi Aramco Affiliate
            </span>
          </div>
          <h2
            style={{
              fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(28px, 3.5vw, 46px)',
              lineHeight: 1.1,
              fontWeight: 700,
              color: '#fff',
              marginBottom: 16
            }}>
            {t.h2a} <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>{t.h2em}</em>
          </h2>
          <p
            style={{
              fontSize: 17,
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.7,
              maxWidth: 720,
              fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif'
            }}>
            {t.sub}
          </p>
        </div>

        {/* Main Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }}
          className="proof-main-grid">
          {/* Left: Screenshot + KJO badge */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* KJO Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: 20,
                padding: '12px 20px',
                background: 'rgba(201,168,76,0.10)',
                border: '1px solid rgba(201,168,76,0.30)',
                borderRadius: 10
              }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: 'rgba(201,168,76,0.20)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 22,
                  flexShrink: 0
                }}>
                🏢
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#C9A84C', fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif' }}>
                  {t.kjoLabel}
                </div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif' }}>
                  {t.kjoSub}
                </div>
              </div>
              <span
                style={{
                  marginLeft: 'auto',
                  background: '#1B4332',
                  color: '#fff',
                  fontSize: 10,
                  fontWeight: 700,
                  padding: '3px 10px',
                  borderRadius: 4,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontFamily: 'Inter, system-ui, sans-serif'
                }}>
                {t.deployed}
              </span>
            </div>

            {/* Screenshot */}
            <div className="fms-screenshot">
              <img
                src="/assets/images/fmsview-1783111560129.png"
                alt="FMS Dashboard — KJO Deployment"
                style={{ width: '100%', display: 'block' }} />
              <div
                style={{
                  background: 'rgba(0,0,0,0.6)',
                  backdropFilter: 'blur(8px)',
                  padding: '10px 16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, system-ui, sans-serif' }}>
                  FMS — Flare Monitoring System · KJO Live
                </span>
                <span style={{ fontSize: 11, color: '#4caf73', fontWeight: 600, fontFamily: 'Inter, system-ui, sans-serif' }}>
                  ● LIVE
                </span>
              </div>
            </div>

            {/* Compliance bar */}
            <div
              style={{
                marginTop: 12,
                padding: '8px 14px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 8,
                display: 'flex',
                flexWrap: 'wrap',
                gap: 8,
                alignItems: 'center'
              }}>
              {['NCEC', 'Royal Comm.', 'USEPA', 'IPCC 2006 Tier 1–3', 'GHGMI Certified'].map((badge) =>
              <span
                key={badge}
                style={{
                  fontSize: 10,
                  color: '#C9A84C',
                  background: 'rgba(201,168,76,0.10)',
                  border: '1px solid rgba(201,168,76,0.25)',
                  padding: '2px 8px',
                  borderRadius: 4,
                  fontFamily: 'Inter, system-ui, sans-serif',
                  letterSpacing: '0.03em',
                  fontWeight: 600
                }}>
                  {badge}
                </span>
              )}
            </div>

            {/* Request Platform Demo CTA — below FMS image */}
            <div
              style={{
                marginTop: 16,
                padding: '22px 24px',
                background: 'linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(27,67,50,0.30) 100%)',
                border: '1px solid rgba(201,168,76,0.35)',
                borderRadius: 12,
                textAlign: 'center'
              }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#C9A84C', letterSpacing: '0.10em', textTransform: 'uppercase', marginBottom: 10, fontFamily: 'Inter, system-ui, sans-serif' }}>
                See it live
              </div>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 6, fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : '"Playfair Display", Georgia, serif' }}>
                {isRtl ? 'طلب عرض توضيحي للمنصة' : 'Request Platform Demo'}
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginBottom: 16, fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif', lineHeight: 1.5 }}>
                {isRtl ? 'شاهد FMS وجميع تطبيقات GreenVue الـ 19 في العمل' : 'See FMS and all 19 GreenVue apps in action'}
              </div>
              <button
                onClick={onCTAClick}
                style={{
                  background: '#C9A84C',
                  color: '#0d2b1a',
                  fontSize: 14,
                  fontWeight: 700,
                  padding: '12px 28px',
                  borderRadius: 6,
                  cursor: 'pointer',
                  border: 'none',
                  fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif',
                  width: '100%',
                  letterSpacing: '0.02em'
                }}>
                {isRtl ? 'طلب عرض توضيحي ←' : 'Request a platform demo →'}
              </button>
            </div>
          </div>

          {/* Right: Capabilities + Outcomes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* Capabilities */}
            <div className="proof-card">
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: '#C9A84C',
                  letterSpacing: '0.10em',
                  textTransform: 'uppercase',
                  marginBottom: 16,
                  fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif'
                }}>
                {t.capabilities}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {t.caps.map((cap, i) =>
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: '50%',
                      background: '#C9A84C',
                      flexShrink: 0,
                      marginTop: 7
                    }} />
                    <span
                    style={{
                      fontSize: 14,
                      color: 'rgba(255,255,255,0.85)',
                      lineHeight: 1.6,
                      fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif'
                    }}>
                      {cap}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Outcomes */}
            <div className="proof-card">
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: '#C9A84C',
                  letterSpacing: '0.10em',
                  textTransform: 'uppercase',
                  marginBottom: 16,
                  fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif'
                }}>
                {t.outcomes}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {t.outcomeList.map((item, i) =>
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '10px 14px',
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: 8,
                    border: '1px solid rgba(255,255,255,0.06)'
                  }}>
                    <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
                    <span
                    style={{
                      fontSize: 14,
                      color: 'rgba(255,255,255,0.85)',
                      fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif'
                    }}>
                      {item.text}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* CTA */}
            <div
              style={{
                padding: '20px 24px',
                background: 'rgba(27,67,50,0.25)',
                border: '1px solid rgba(201,168,76,0.25)',
                borderRadius: 12,
                textAlign: 'center'
              }}>
              <button
                onClick={onCTAClick}
                style={{
                  background: '#C9A84C',
                  color: '#0d2b1a',
                  fontSize: 15,
                  fontWeight: 700,
                  padding: '13px 32px',
                  borderRadius: 6,
                  cursor: 'pointer',
                  border: 'none',
                  fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif',
                  width: '100%',
                  marginBottom: 8
                }}>
                {t.cta}
              </button>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif' }}>
                {t.ctaSub}
              </div>
            </div>
          </div>
        </div>

        {/* Next deployment banner */}
        <div
          style={{
            marginTop: 40,
            padding: '16px 24px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(201,168,76,0.15)',
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            gap: 16
          }}>
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: '#C9A84C',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontFamily: 'Inter, system-ui, sans-serif',
              whiteSpace: 'nowrap'
            }}>
            {t.nextLabel}
          </span>
          <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 16 }}>·</span>
          <span
            style={{
              fontSize: 13,
              color: 'rgba(255,255,255,0.60)',
              fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif'
            }}>
            {t.nextText}
          </span>
        </div>
      </div>
    </section>);

}