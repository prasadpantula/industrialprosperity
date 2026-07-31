'use client';
import React from 'react';

interface PartnerBarProps {
  lang: 'en' | 'ar';
}

export default function PartnerBar({ lang }: PartnerBarProps) {
  const isRtl = lang === 'ar';
  const label = lang === 'en' ? 'Trusted by & partnered with' : 'موثوق به ومتعاون مع';
  const partners = ['KFUPM', 'STC Solutions', 'GITLCO', 'Metakosmos', 'GE Vernova', 'KJO'];

  return (
    <div className="partner-logo-bar" dir={isRtl ? 'rtl' : 'ltr'}>
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: 40,
        }}
      >
        <span
          style={{
            fontSize: 11,
            color: '#8a9a8a',
            whiteSpace: 'nowrap',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            fontFamily: isRtl ? 'Cairo, system-ui, sans-serif' : 'Outfit, system-ui, sans-serif',
          }}
        >
          {label}
        </span>
        <div style={{ display: 'flex', gap: 40, alignItems: 'center', flex: 1, flexWrap: 'wrap' }}>
          {partners.map((p) => (
            <span
              key={p}
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: '#8a9a8a',
                letterSpacing: '0.03em',
                fontFamily: 'Outfit, system-ui, sans-serif',
              }}
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
