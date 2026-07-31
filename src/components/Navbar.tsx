'use client';
import React, { useState } from 'react';

interface NavProps {
  lang: 'en' | 'ar';
  onToggleLang: () => void;
  activeSection: string;
  onNavClick: (section: string) => void;
}

const navItems = {
  en: [
    { id: 'home', label: 'Home' },
    { id: 'proof', label: 'Proof' },
    { id: 'platform', label: 'Platform' },
    { id: 'kfupm', label: 'KFUPM' },
    { id: 'ecosystem', label: 'Ecosystem' },
    { id: 'ai-center', label: 'AI Center' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'vision2030', label: 'Vision 2030' },
    { id: 'about', label: 'About' },
  ],
  ar: [
    { id: 'home', label: 'الرئيسية' },
    { id: 'proof', label: 'إثبات النجاح' },
    { id: 'platform', label: 'المنصة' },
    { id: 'kfupm', label: 'KFUPM' },
    { id: 'ecosystem', label: 'النظام البيئي' },
    { id: 'ai-center', label: 'مركز الذكاء الاصطناعي' },
    { id: 'solutions', label: 'الحلول' },
    { id: 'vision2030', label: 'رؤية 2030' },
    { id: 'about', label: 'من نحن' },
  ],
};

export default function Navbar({ lang, onToggleLang, activeSection, onNavClick }: NavProps) {
  const items = navItems[lang];
  const isRtl = lang === 'ar';
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 500,
        background: 'rgba(249,247,241,0.97)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(27,67,50,0.15)',
      }}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 68,
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', flexShrink: 0 }}>
          <img
            src="/assets/images/IP_logo-1783115054524.png"
            alt="Industrial Prosperity"
            style={{ height: 44, width: 'auto', display: 'block', objectFit: 'contain' }}
          />
        </div>

        {/* Nav Items — desktop */}
        <div style={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'nowrap', overflow: 'hidden' }}
          className="nav-desktop">
          {items.map((item) => (
            <button
              key={item.id}
              className={`nav-btn${activeSection === item.id ? ' active' : ''}`}
              onClick={() => onNavClick(item.id)}
              style={{
                fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right Actions */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0 }}>
          <button
            onClick={onToggleLang}
            style={{
              fontSize: 13,
              color: '#374151',
              padding: '6px 12px',
              border: '1px solid rgba(27,67,50,0.25)',
              borderRadius: 6,
              cursor: 'pointer',
              background: 'none',
              fontFamily: isRtl ? 'Inter, system-ui, sans-serif' : 'Cairo, system-ui, sans-serif',
              transition: '0.15s',
              fontWeight: 500,
            }}
          >
            {lang === 'en' ? 'العربية' : 'English'}
          </button>
          <button
            style={{
              background: '#1B4332',
              color: '#fff',
              fontSize: 14,
              fontWeight: 600,
              padding: '9px 22px',
              borderRadius: 6,
              cursor: 'pointer',
              border: 'none',
              fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif',
              transition: '0.2s',
              whiteSpace: 'nowrap'
            }}
            onClick={() => onNavClick('contact')}
          >
            {lang === 'en' ? 'Contact us →' : 'تواصل معنا ←'}
          </button>
          {/* Mobile hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: '1px solid rgba(27,67,50,0.25)',
              borderRadius: 6,
              padding: '6px 10px',
              cursor: 'pointer',
              fontSize: 18,
              color: '#1B4332'
            }}
            aria-label="Menu"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="nav-mobile-menu"
          style={{
            background: 'rgba(249,247,241,0.99)',
            borderTop: '1px solid rgba(27,67,50,0.12)',
            padding: '16px 24px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: 4
          }}
        >
          {items.map((item) => (
            <button
              key={item.id}
              className={`nav-btn${activeSection === item.id ? ' active' : ''}`}
              onClick={() => { onNavClick(item.id); setMobileOpen(false); }}
              style={{
                textAlign: isRtl ? 'right' : 'left',
                width: '100%',
                padding: '10px 14px',
                fontSize: 15,
                fontFamily: isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
