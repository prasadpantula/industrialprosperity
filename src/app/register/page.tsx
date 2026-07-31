'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 12,
  fontWeight: 600,
  color: 'rgba(255,255,255,0.65)',
  marginBottom: 6,
  letterSpacing: '0.04em',
  fontFamily: 'Inter, system-ui, sans-serif',
};

const inputStyle = (hasError: boolean): React.CSSProperties => ({
  width: '100%',
  padding: '11px 14px',
  background: 'rgba(255,255,255,0.06)',
  border: `1px solid ${hasError ? '#ef4444' : 'rgba(201,168,76,0.25)'}`,
  borderRadius: 8,
  color: '#fff',
  fontSize: 14,
  fontFamily: 'Inter, system-ui, sans-serif',
  outline: 'none',
  boxSizing: 'border-box',
  transition: '0.15s',
});

const errorStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 11,
  color: '#ef4444',
  marginTop: 4,
  fontFamily: 'Inter, system-ui, sans-serif',
};

const OZONE_LIVE_URL = 'https://ozone.greenvue.com.sa';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    jobTitle: '',
    password: '',
    confirmPassword: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter a valid email address';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    else if (!/[A-Z]/.test(formData.password)) newErrors.password = 'Password must contain at least one uppercase letter';
    else if (!/[0-9]/.test(formData.password)) newErrors.password = 'Password must contain at least one number';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleOpenOzone = () => {
    window.location.href = OZONE_LIVE_URL;
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #0a1e10 0%, #0d2b1a 60%, #081408 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '40px 24px 60px',
      fontFamily: 'Inter, system-ui, sans-serif',
    }}>
      {/* Logo / Brand */}
      <div style={{ marginBottom: 28, textAlign: 'center' }}>
        <img
          src="/assets/images/IP_logo-1783111226261.png"
          alt="Industrial Prosperity"
          style={{ height: 52, width: 'auto', marginBottom: 16, filter: 'brightness(0) invert(1)', opacity: 0.9 }}
        />
        <div style={{ fontSize: 13, color: 'rgba(201,168,76,0.8)', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600 }}>
          OZone Live Access
        </div>
      </div>

      {/* Main layout: form + contact info side by side on wide screens */}
      <div style={{ width: '100%', maxWidth: 960, display: 'flex', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap', justifyContent: 'center' }}>

        {/* Registration Card */}
        <div style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(201,168,76,0.25)',
          borderRadius: 16,
          padding: '40px 36px',
          width: '100%',
          maxWidth: 480,
          backdropFilter: 'blur(12px)',
          flex: '1 1 400px',
        }}>
          {submitted ? (
            /* ── Registration Success ── */
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
              <h2 style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 28,
                fontWeight: 700,
                color: '#fff',
                marginBottom: 12,
              }}>
                Registration Successful!
              </h2>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, marginBottom: 8 }}>
                Welcome, <strong style={{ color: '#C9A84C' }}>{formData.fullName}</strong>
              </p>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.50)', lineHeight: 1.65, marginBottom: 28 }}>
                Your account has been created for <strong style={{ color: 'rgba(255,255,255,0.75)' }}>{formData.company}</strong>. You can now access OZone Live — real-time environmental intelligence
              </p>

              {/* Success details */}
              <div style={{
                background: 'rgba(76,175,115,0.08)',
                border: '1px solid rgba(76,175,115,0.25)',
                borderRadius: 10,
                padding: '16px 20px',
                marginBottom: 24,
                textAlign: 'left',
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    { icon: '✅', label: 'Account created', value: formData.email },
                    { icon: '🏢', label: 'Organisation', value: formData.company },
                    { icon: '💼', label: 'Role', value: formData.jobTitle || 'Not specified' },
                  ].map((row) => (
                    <div key={row.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ fontSize: 16 }}>{row.icon}</span>
                      <div>
                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.40)', fontFamily: 'Inter, system-ui, sans-serif' }}>{row.label}</div>
                        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600 }}>{row.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={handleOpenOzone}
                style={{
                  background: '#C9A84C',
                  color: '#0d2b1a',
                  fontSize: 15,
                  fontWeight: 700,
                  padding: '14px 32px',
                  borderRadius: 8,
                  cursor: 'pointer',
                  border: 'none',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  width: '100%',
                  marginBottom: 12,
                  letterSpacing: '0.02em',
                }}>
                Open OZone Live →
              </button>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                color: '#4caf73',
                fontSize: 13,
                fontWeight: 600,
              }}>
                <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: '#4caf73' }} />
                Account active
              </div>
            </div>
          ) : (
            <>
              <h1 style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 28,
                fontWeight: 700,
                color: '#fff',
                marginBottom: 8,
                lineHeight: 1.2,
              }}>
                Create your account
              </h1>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', marginBottom: 28, lineHeight: 1.6 }}>
                Register to access OZone Live — real-time environmental intelligence
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {/* Full Name */}
                <div>
                  <label style={labelStyle}>Full name *</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    style={inputStyle(!!errors.fullName)}
                  />
                  {errors.fullName && <span style={errorStyle}>{errors.fullName}</span>}
                </div>

                {/* Email */}
                <div>
                  <label style={labelStyle}>Email address *</label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={inputStyle(!!errors.email)}
                  />
                  {errors.email && <span style={errorStyle}>{errors.email}</span>}
                </div>

                {/* Company + Job Title row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }} className="reg-grid">
                  <div>
                    <label style={labelStyle}>Company *</label>
                    <input
                      type="text"
                      placeholder="Organisation"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={inputStyle(!!errors.company)}
                    />
                    {errors.company && <span style={errorStyle}>{errors.company}</span>}
                  </div>
                  <div>
                    <label style={labelStyle}>Job title *</label>
                    <input
                      type="text"
                      placeholder="Your role"
                      value={formData.jobTitle}
                      onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                      style={inputStyle(!!errors.jobTitle)}
                    />
                    {errors.jobTitle && <span style={errorStyle}>{errors.jobTitle}</span>}
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label style={labelStyle}>Password *</label>
                  <input
                    type="password"
                    placeholder="Min 8 chars, 1 uppercase, 1 number"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    style={inputStyle(!!errors.password)}
                  />
                  {errors.password && <span style={errorStyle}>{errors.password}</span>}
                  {!errors.password && formData.password && (
                    <div style={{ marginTop: 6, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {[
                        { label: '8+ chars', ok: formData.password.length >= 8 },
                        { label: 'Uppercase', ok: /[A-Z]/.test(formData.password) },
                        { label: 'Number', ok: /[0-9]/.test(formData.password) },
                      ].map((req) => (
                        <span key={req.label} style={{ fontSize: 10, padding: '2px 7px', borderRadius: 4, fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600, background: req.ok ? 'rgba(76,175,115,0.15)' : 'rgba(255,255,255,0.06)', color: req.ok ? '#4caf73' : 'rgba(255,255,255,0.35)', border: `1px solid ${req.ok ? 'rgba(76,175,115,0.3)' : 'rgba(255,255,255,0.1)'}` }}>
                          {req.ok ? '✓' : '○'} {req.label}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label style={labelStyle}>Confirm password *</label>
                  <input
                    type="password"
                    placeholder="Repeat password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    style={inputStyle(!!errors.confirmPassword)}
                  />
                  {errors.confirmPassword && <span style={errorStyle}>{errors.confirmPassword}</span>}
                  {!errors.confirmPassword && formData.confirmPassword && formData.password === formData.confirmPassword && (
                    <span style={{ ...errorStyle, color: '#4caf73', marginTop: 4 }}>✓ Passwords match</span>
                  )}
                </div>

                <button
                  type="submit"
                  style={{
                    marginTop: 8,
                    background: '#C9A84C',
                    color: '#0d2b1a',
                    fontSize: 15,
                    fontWeight: 700,
                    padding: '14px 28px',
                    borderRadius: 8,
                    cursor: 'pointer',
                    border: 'none',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    transition: '0.2s',
                    letterSpacing: '0.02em',
                  }}
                >
                  Register &amp; Open OZone Live →
                </button>
              </form>

              <p style={{ marginTop: 20, fontSize: 13, color: 'rgba(255,255,255,0.35)', textAlign: 'center' }}>
                Already have an account?{' '}
                <a href={OZONE_LIVE_URL} style={{ color: '#C9A84C', textDecoration: 'none', fontWeight: 600 }}>
                  Sign in to OZone Live
                </a>
              </p>
            </>
          )}
        </div>

        {/* Contact / Office Info Panel */}
        <div style={{
          flex: '1 1 300px',
          maxWidth: 380,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}>
          {/* Building image — small */}
          <div style={{
            borderRadius: 12,
            overflow: 'hidden',
            border: '1px solid rgba(201,168,76,0.20)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.35)',
          }}>
            <img
              src="/assets/images/al_sinai_building-1783111229960.jpeg"
              alt="Al-Sinai Building — EAMB4748 King Abdulaziz Road, Dhahran"
              style={{ width: '100%', display: 'block', height: 180, objectFit: 'cover', objectPosition: 'center' }}
            />
            <div style={{ padding: '10px 14px', background: 'rgba(13,43,26,0.85)', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#C9A84C', fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Our Office
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.70)', fontFamily: 'Inter, system-ui, sans-serif', marginTop: 2 }}>
                EAMB4748 King Abdulaziz Road, Dhahran
              </div>
            </div>
          </div>

          {/* Contact details card */}
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(201,168,76,0.20)',
            borderRadius: 12,
            padding: '22px 20px',
            backdropFilter: 'blur(8px)',
          }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#C9A84C', letterSpacing: '0.10em', textTransform: 'uppercase', marginBottom: 16, fontFamily: 'Inter, system-ui, sans-serif' }}>
              Contact Us
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {/* Email 1 */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>✉️</span>
                <div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.40)', fontFamily: 'Inter, system-ui, sans-serif', marginBottom: 2 }}>Industrial Prosperity</div>
                  <a href="mailto:gems@industrialprosperity.com" style={{ fontSize: 13, color: '#C9A84C', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600, textDecoration: 'none' }}>
                    gems@industrialprosperity.com
                  </a>
                </div>
              </div>
              {/* Email 2 */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>✉️</span>
                <div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.40)', fontFamily: 'Inter, system-ui, sans-serif', marginBottom: 2 }}>GreenVue Solutions</div>
                  <a href="mailto:solutions@greenvue.sa" style={{ fontSize: 13, color: '#C9A84C', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600, textDecoration: 'none' }}>
                    solutions@greenvue.sa
                  </a>
                </div>
              </div>
              {/* Address */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>📍</span>
                <div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.40)', fontFamily: 'Inter, system-ui, sans-serif', marginBottom: 2 }}>Office Address</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.80)', fontFamily: 'Inter, system-ui, sans-serif', lineHeight: 1.5 }}>
                    EAMB4748 King Abdulaziz Road<br />Dhahran, Eastern Province<br />Saudi Arabia
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps embed */}
          <div style={{
            borderRadius: 12,
            overflow: 'hidden',
            border: '1px solid rgba(201,168,76,0.20)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.35)',
          }}>
            <iframe
              title="Industrial Prosperity Office — King Abdulaziz Road, Dhahran"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.5!2d50.1!3d26.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e6b1b1b1b1b1%3A0x1!2sKing+Abdulaziz+Road%2C+Dhahran%2C+Saudi+Arabia!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa"
              width="100%"
              height="200"
              style={{ display: 'block', border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div style={{ padding: '8px 14px', background: 'rgba(13,43,26,0.85)', borderTop: '1px solid rgba(201,168,76,0.15)', display: 'flex', alignItems: 'center', gap: 8 }}>
              <img
                src="/assets/images/al_sinai_building-1783111229960.jpeg"
                alt="Al-Sinai Building"
                style={{ width: 28, height: 28, borderRadius: 4, objectFit: 'cover', flexShrink: 0, border: '1px solid rgba(201,168,76,0.30)', display: 'block' }}
              />
              <span style={{ fontSize: 12, lineHeight: 1 }}>📍</span>
              <a
                href="https://maps.google.com/?q=King+Abdulaziz+Road,+Dhahran,+Saudi+Arabia"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 12, color: '#C9A84C', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600, textDecoration: 'none' }}
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back link */}
      <a
        href="/"
        style={{
          marginTop: 32,
          fontSize: 13,
          color: 'rgba(255,255,255,0.40)',
          textDecoration: 'none',
          letterSpacing: '0.04em',
          transition: 'color 0.15s',
        }}
      >
        ← Back to Industrial Prosperity
      </a>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 520px) {
          .reg-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
