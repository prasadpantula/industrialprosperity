'use client';
import React, { useState } from 'react';

interface ContactSectionProps {
  lang: 'en' | 'ar';
}

const roles = {
  en: [
    { id: 'operator', label: 'Industrial Operator', desc: 'Plant manager, operations director, or facility engineer' },
    { id: 'regulator', label: 'Regulator / Government', desc: 'NCEC, Ministry, or regulatory body' },
    { id: 'investor', label: 'Investor', desc: 'VC, PE, or strategic investor' },
    { id: 'partner', label: 'Technology Partner', desc: 'Integration, reseller, or alliance partner' },
  ],
  ar: [
    { id: 'operator', label: 'مشغل صناعي', desc: 'مدير مصنع، مدير عمليات، أو مهندس منشأة' },
    { id: 'regulator', label: 'جهة تنظيمية / حكومية', desc: 'NCEC أو وزارة أو جهة تنظيمية' },
    { id: 'investor', label: 'مستثمر', desc: 'مستثمر مخاطرة أو استراتيجي' },
    { id: 'partner', label: 'شريك تقني', desc: 'تكامل أو إعادة بيع أو تحالف' },
  ],
};

const content = {
  en: {
    label: 'Single conversion path',
    h2a: 'Request a',
    h2em: 'platform demo',
    sub: 'One primary path to engagement. Tell us your role and we\'ll route you to the right conversation — whether that\'s a live GreenVue demo, a regulatory briefing, or an investment discussion',
    roleLabel: 'I am a...',
    nameLabel: 'Full name',
    namePlaceholder: 'Your name',
    companyLabel: 'Company / Organisation',
    companyPlaceholder: 'Organisation name',
    emailLabel: 'Email address',
    emailPlaceholder: 'you@company.com',
    phoneLabel: 'Phone number',
    phonePlaceholder: '+966 5X XXX XXXX',
    messageLabel: 'What are you looking to achieve?',
    messagePlaceholder: 'Tell us about your environmental compliance needs, investment interest, or partnership opportunity...',
    submitBtn: 'Request platform demo →',
    submitNote: 'Our Dammam team will respond within 24 hours',
    appointmentLabel: 'Ready to meet?',
    h2b: 'Book an',
    h2bEm: 'appointment',
    appointmentSub: 'Meet our team in Dammam for a live platform walkthrough, strategic consultation, or partnership discussion',
    appointments: [
      {
        icon: '🖥',
        title: 'Live Platform Demo',
        desc: 'See GreenVue running live — tailored to your industry and regulatory context',
        duration: '60 min · Online or In-person',
      },
      {
        icon: '🤝',
        title: 'Strategy Consultation',
        desc: 'Emissions roadmap, Vision 2030 alignment, AspenTech or digital twin planning',
        duration: '45 min · Dammam HQ',
      },
      {
        icon: '📊',
        title: 'Ministerial Briefing',
        desc: 'National-scale reporting capabilities and GreenVue role in Saudi regulatory compliance',
        duration: '30 min · Flexible',
      },
    ],
    bookBtn: 'Book appointment now →',
    contactInfo: 'Dammam, Eastern Province · solutions@greenvue.com.sa',
    ctaLabel: 'Ready to start?',
    h2c: 'Talk to our',
    h2cEm: 'Saudi team',
    ctaSub: 'Live demo · Consultation · Partnership inquiry · Dammam, Eastern Province',
    ctaBtn1: 'Request a consultation →',
    ctaBtn2: 'See the platform',
  },
  ar: {
    label: 'مسار تحويل واحد',
    h2a: 'طلب',
    h2em: 'عرض توضيحي للمنصة',
    sub: 'مسار واحد للتفاعل. أخبرنا بدورك وسنوجهك إلى المحادثة المناسبة',
    roleLabel: 'أنا...',
    nameLabel: 'الاسم الكامل',
    namePlaceholder: 'اسمك',
    companyLabel: 'الشركة / المنظمة',
    companyPlaceholder: 'اسم المنظمة',
    emailLabel: 'عنوان البريد الإلكتروني',
    emailPlaceholder: 'you@company.com',
    phoneLabel: 'رقم الهاتف',
    phonePlaceholder: '+966 5X XXX XXXX',
    messageLabel: 'ما الذي تسعى إلى تحقيقه؟',
    messagePlaceholder: 'أخبرنا عن احتياجاتك للامتثال البيئي أو اهتمامك بالاستثمار...',
    submitBtn: 'طلب عرض توضيحي للمنصة ←',
    submitNote: 'سيرد فريقنا في الدمام خلال 24 ساعة',
    appointmentLabel: 'مستعد لللقاء؟',
    h2b: 'احجز',
    h2bEm: 'موعداً',
    appointmentSub: 'التق بفريقنا في الدمام لعرض توضيحي مباشر أو استشارة استراتيجية',
    appointments: [
      {
        icon: '🖥',
        title: 'عرض توضيحي مباشر',
        desc: 'شاهد GreenVue يعمل مباشرة — مصمم لقطاعك وسياقك التنظيمي',
        duration: '60 دقيقة · عبر الإنترنت أو حضورياً',
      },
      {
        icon: '🤝',
        title: 'استشارة استراتيجية',
        desc: 'خارطة طريق الانبعاثات، توافق رؤية 2030، تخطيط AspenTech',
        duration: '45 دقيقة · مقر الدمام',
      },
      {
        icon: '📊',
        title: 'إحاطة وزارية',
        desc: 'قدرات التقارير على المستوى الوطني ودور GreenVue في الامتثال',
        duration: '30 دقيقة · مرن',
      },
    ],
    bookBtn: 'احجز موعداً الآن ←',
    contactInfo: 'الدمام، المنطقة الشرقية · solutions@greenvue.com.sa',
    ctaLabel: 'مستعد للبدء؟',
    h2c: 'تحدث إلى',
    h2cEm: 'فريقنا السعودي',
    ctaSub: 'عرض مباشر · استشارة · استفسار شراكة · الدمام، المنطقة الشرقية',
    ctaBtn1: 'طلب استشارة ←',
    ctaBtn2: 'عرض المنصة',
  },
};

// Available time slots
const timeSlots = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'];

// Generate next 14 available weekdays
function getAvailableDates(): string[] {
  const dates: string[] = [];
  const d = new Date();
  d.setDate(d.getDate() + 1);
  while (dates.length < 14) {
    const day = d.getDay();
    if (day !== 0 && day !== 6) {
      dates.push(d.toISOString().split('T')[0]);
    }
    d.setDate(d.getDate() + 1);
  }
  return dates;
}

function formatDate(iso: string): string {
  const [y, m, day] = iso.split('-').map(Number);
  const d = new Date(y, m - 1, day);
  return d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
}

export default function ContactSection({ lang }: ContactSectionProps) {
  const t = content[lang];
  const r = roles[lang];
  const isRtl = lang === 'ar';

  // Contact form state
  const [selectedRole, setSelectedRole] = useState('');
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', message: '' });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formTouched, setFormTouched] = useState<Record<string, boolean>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Booking flow state: 'idle' | 'selecting' | 'confirmed'
  const [bookingStep, setBookingStep] = useState<'idle' | 'selecting' | 'confirmed'>('idle');
  const [selectedApptIndex, setSelectedApptIndex] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [bookingName, setBookingName] = useState('');
  const [bookingEmail, setBookingEmail] = useState('');
  const [bookingErrors, setBookingErrors] = useState<Record<string, string>>({});
  const availableDates = getAvailableDates();

  // ── Contact form validation ──
  const validateField = (field: string, value: string): string => {
    switch (field) {
      case 'name':
        return value.trim() ? '' : 'Full name is required';
      case 'company':
        return value.trim() ? '' : 'Company name is required';
      case 'email':
        if (!value.trim()) return 'Email address is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email address (e.g. you@company.com)';
        return '';
      case 'phone':
        if (!value.trim()) return '';
        if (!/^[+]?[\d\s\-().]{7,20}$/.test(value)) return 'Enter a valid phone number';
        return '';
      case 'message':
        return value.trim() ? '' : 'Please describe what you are looking to achieve';
      default:
        return '';
    }
  };

  const handleFieldChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formTouched[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
    }
  };

  const handleFieldBlur = (field: string) => {
    setFormTouched((prev) => ({ ...prev, [field]: true }));
    setFormErrors((prev) => ({ ...prev, [field]: validateField(field, formData[field as keyof typeof formData]) }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched: Record<string, boolean> = { name: true, company: true, email: true, phone: true, message: true };
    setFormTouched(allTouched);
    const errors: Record<string, string> = {};
    (Object.keys(formData) as Array<keyof typeof formData>).forEach((f) => {
      const err = validateField(f, formData[f]);
      if (err) errors[f] = err;
    });
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setFormSubmitted(true);
    }
  };

  // ── Booking flow ──
  const handleBookNow = () => {
    setBookingStep('selecting');
    setSelectedApptIndex(null);
    setSelectedDate('');
    setSelectedTime('');
    setBookingName('');
    setBookingEmail('');
    setBookingErrors({});
  };

  const handleBookingConfirm = () => {
    const errs: Record<string, string> = {};
    if (selectedApptIndex === null) errs.appt = 'Please select an appointment type';
    if (!selectedDate) errs.date = 'Please select a date';
    if (!selectedTime) errs.time = 'Please select a time slot';
    if (!bookingName.trim()) errs.bname = 'Your name is required';
    if (!bookingEmail.trim()) errs.bemail = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(bookingEmail)) errs.bemail = 'Enter a valid email address';
    setBookingErrors(errs);
    if (Object.keys(errs).length === 0) {
      setBookingStep('confirmed');
    }
  };

  const inputBorderColor = (field: string) => {
    if (!formTouched[field]) return 'rgba(27,67,50,0.25)';
    if (formErrors[field]) return '#ef4444';
    return '#1B4332';
  };

  const fontFamily = isRtl ? 'Noto Naskh Arabic, Cairo, system-ui, sans-serif' : 'Inter, system-ui, sans-serif';

  return (
    <>
      {/* ── Booking Modal Overlay ── */}
      {bookingStep !== 'idle' && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '20px',
          }}
          onClick={(e) => { if (e.target === e.currentTarget) setBookingStep('idle'); }}
        >
          <div style={{
            background: '#fff', borderRadius: 16, padding: '36px 32px',
            maxWidth: 520, width: '100%', maxHeight: '90vh', overflowY: 'auto',
            boxShadow: '0 24px 80px rgba(0,0,0,0.25)',
            position: 'relative',
          }}>
            {/* Close */}
            <button
              onClick={() => setBookingStep('idle')}
              style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', fontSize: 20, cursor: 'pointer', color: '#6b7280', lineHeight: 1 }}
            >
              ×
            </button>

            {bookingStep === 'confirmed' ? (
              /* ── Confirmation Screen ── */
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 52, marginBottom: 12 }}>✅</div>
                <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 26, fontWeight: 700, color: '#1B4332', marginBottom: 8 }}>
                  Appointment Confirmed!
                </h3>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.6, marginBottom: 24, fontFamily }}>
                  Your booking has been received. Our Dammam team will send a calendar invite to your email shortly.
                </p>

                {/* Booking summary card */}
                <div style={{
                  background: '#f9f7f1', border: '1px solid rgba(27,67,50,0.15)',
                  borderRadius: 12, padding: '20px 24px', marginBottom: 24, textAlign: 'left',
                }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1B4332', marginBottom: 14, fontFamily }}>
                    Booking Details
                  </div>
                  {[
                    { icon: '🖥', label: 'Appointment type', value: selectedApptIndex !== null ? t.appointments[selectedApptIndex].title : '' },
                    { icon: '📅', label: 'Date', value: selectedDate ? formatDate(selectedDate) : '' },
                    { icon: '🕐', label: 'Time', value: selectedTime ? `${selectedTime} AST (Arabia Standard Time)` : '' },
                    { icon: '👤', label: 'Name', value: bookingName },
                    { icon: '✉️', label: 'Confirmation to', value: bookingEmail },
                  ].map((row) => (
                    <div key={row.label} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 10 }}>
                      <span style={{ fontSize: 15, flexShrink: 0, marginTop: 1 }}>{row.icon}</span>
                      <div>
                        <div style={{ fontSize: 11, color: '#8a9a8a', fontFamily, marginBottom: 1 }}>{row.label}</div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: '#1B4332', fontFamily }}>{row.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Next steps */}
                <div style={{
                  background: 'rgba(27,67,50,0.05)', border: '1px solid rgba(27,67,50,0.12)',
                  borderRadius: 10, padding: '16px 20px', marginBottom: 24, textAlign: 'left',
                }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#1B4332', marginBottom: 10, fontFamily }}>What happens next</div>
                  {[
                    'Calendar invite sent to your email within 1 hour',
                    'Our team will prepare a tailored agenda for your session',
                    'You\'ll receive a reminder 24 hours before the appointment',
                  ].map((step, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 8 }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: '#C9A84C', flexShrink: 0, marginTop: 1 }}>{i + 1}.</span>
                      <span style={{ fontSize: 13, color: '#374151', fontFamily, lineHeight: 1.5 }}>{step}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setBookingStep('idle')}
                  style={{
                    background: '#1B4332', color: '#fff', fontSize: 14, fontWeight: 600,
                    padding: '12px 28px', borderRadius: 8, cursor: 'pointer', border: 'none',
                    fontFamily, width: '100%',
                  }}
                >
                  Done — Back to site
                </button>
              </div>
            ) : (
              /* ── Selection Screen ── */
              <div>
                <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 24, fontWeight: 700, color: '#1B4332', marginBottom: 4 }}>
                  Book an Appointment
                </h3>
                <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 24, fontFamily }}>
                  Select your appointment type, preferred date and time.
                </p>

                {/* Step 1: Appointment type */}
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#374151', marginBottom: 10, fontFamily, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    1. Appointment type
                  </div>
                  {bookingErrors.appt && (
                    <div style={{ fontSize: 11, color: '#ef4444', marginBottom: 8, fontFamily }}>{bookingErrors.appt}</div>
                  )}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {t.appointments.map((appt, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedApptIndex(i)}
                        style={{
                          display: 'flex', gap: 12, alignItems: 'flex-start',
                          background: selectedApptIndex === i ? 'rgba(27,67,50,0.07)' : '#fff',
                          border: `1.5px solid ${selectedApptIndex === i ? '#1B4332' : 'rgba(27,67,50,0.15)'}`,
                          borderRadius: 10, padding: '12px 14px', cursor: 'pointer',
                          textAlign: 'left', transition: '0.15s',
                        }}
                      >
                        <span style={{ fontSize: 20, flexShrink: 0, marginTop: 1 }}>{appt.icon}</span>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 14, fontWeight: 600, color: '#1B4332', fontFamily, marginBottom: 2 }}>{appt.title}</div>
                          <div style={{ fontSize: 12, color: '#6b7280', fontFamily, lineHeight: 1.4 }}>{appt.desc}</div>
                          <div style={{ fontSize: 11, color: '#C9A84C', fontFamily, fontWeight: 600, marginTop: 4 }}>{appt.duration}</div>
                        </div>
                        {selectedApptIndex === i && (
                          <span style={{ fontSize: 16, color: '#1B4332', flexShrink: 0, marginTop: 2 }}>✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Date */}
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#374151', marginBottom: 10, fontFamily, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    2. Select date
                  </div>
                  {bookingErrors.date && (
                    <div style={{ fontSize: 11, color: '#ef4444', marginBottom: 8, fontFamily }}>{bookingErrors.date}</div>
                  )}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}>
                    {availableDates.slice(0, 12).map((d) => {
                      const [, , day] = d.split('-');
                      const dateObj = new Date(d + 'T00:00:00');
                      const dayName = dateObj.toLocaleDateString('en-GB', { weekday: 'short' });
                      const monthName = dateObj.toLocaleDateString('en-GB', { month: 'short' });
                      return (
                        <button
                          key={d}
                          onClick={() => setSelectedDate(d)}
                          style={{
                            padding: '8px 4px', borderRadius: 8, cursor: 'pointer',
                            background: selectedDate === d ? '#1B4332' : '#f9f7f1',
                            border: `1.5px solid ${selectedDate === d ? '#1B4332' : 'rgba(27,67,50,0.15)'}`,
                            color: selectedDate === d ? '#fff' : '#1B4332',
                            fontSize: 11, fontFamily, fontWeight: 600, textAlign: 'center',
                            transition: '0.15s', lineHeight: 1.4,
                          }}
                        >
                          <div style={{ fontSize: 10, opacity: 0.75 }}>{dayName}</div>
                          <div style={{ fontSize: 14, fontWeight: 700 }}>{day}</div>
                          <div style={{ fontSize: 10, opacity: 0.75 }}>{monthName}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 3: Time */}
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#374151', marginBottom: 10, fontFamily, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    3. Select time (AST)
                  </div>
                  {bookingErrors.time && (
                    <div style={{ fontSize: 11, color: '#ef4444', marginBottom: 8, fontFamily }}>{bookingErrors.time}</div>
                  )}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedTime(slot)}
                        style={{
                          padding: '8px 14px', borderRadius: 6, cursor: 'pointer',
                          background: selectedTime === slot ? '#1B4332' : '#f9f7f1',
                          border: `1.5px solid ${selectedTime === slot ? '#1B4332' : 'rgba(27,67,50,0.15)'}`,
                          color: selectedTime === slot ? '#fff' : '#1B4332',
                          fontSize: 13, fontFamily, fontWeight: 600, transition: '0.15s',
                        }}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 4: Contact details */}
                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#374151', marginBottom: 10, fontFamily, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    4. Your details
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                    <div>
                      <label style={{ fontSize: 11, color: '#374151', display: 'block', marginBottom: 4, fontFamily, fontWeight: 500 }}>Name *</label>
                      <input
                        placeholder="Your name"
                        value={bookingName}
                        onChange={(e) => setBookingName(e.target.value)}
                        style={{
                          width: '100%', padding: '9px 12px', borderRadius: 7, fontSize: 13, fontFamily,
                          border: `1.5px solid ${bookingErrors.bname ? '#ef4444' : 'rgba(27,67,50,0.25)'}`,
                          outline: 'none', boxSizing: 'border-box', background: '#fff',
                        }}
                      />
                      {bookingErrors.bname && <span style={{ fontSize: 11, color: '#ef4444', fontFamily }}>{bookingErrors.bname}</span>}
                    </div>
                    <div>
                      <label style={{ fontSize: 11, color: '#374151', display: 'block', marginBottom: 4, fontFamily, fontWeight: 500 }}>Email *</label>
                      <input
                        placeholder="you@company.com"
                        value={bookingEmail}
                        onChange={(e) => setBookingEmail(e.target.value)}
                        style={{
                          width: '100%', padding: '9px 12px', borderRadius: 7, fontSize: 13, fontFamily,
                          border: `1.5px solid ${bookingErrors.bemail ? '#ef4444' : 'rgba(27,67,50,0.25)'}`,
                          outline: 'none', boxSizing: 'border-box', background: '#fff',
                        }}
                      />
                      {bookingErrors.bemail && <span style={{ fontSize: 11, color: '#ef4444', fontFamily }}>{bookingErrors.bemail}</span>}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleBookingConfirm}
                  style={{
                    width: '100%', background: '#C9A84C', color: '#0d2b1a',
                    fontSize: 15, fontWeight: 700, padding: '13px 28px',
                    borderRadius: 8, cursor: 'pointer', border: 'none', fontFamily,
                  }}
                >
                  Confirm Booking →
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Main Contact Section ── */}
      <section
        id="contact"
        style={{ padding: '80px 24px', background: '#f9f7f1', borderTop: '1px solid #d0ddd0' }}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1px 1fr',
            gap: 64,
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left: Demo Request Form */}
          <div>
            <div style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, color: '#1B4332', marginBottom: 8, fontFamily }}>
              {t.label}
            </div>
            <h2 style={{ fontFamily: isRtl ? fontFamily : '"Playfair Display", Georgia, serif', fontSize: 'clamp(26px, 3vw, 36px)', lineHeight: 1.1, fontWeight: 700, color: '#1B4332', marginBottom: 12 }}>
              {t.h2a} <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>{t.h2em}</em>
            </h2>
            <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.65, marginBottom: 24, fontFamily }}>
              {t.sub}
            </p>

            {/* Role Selector */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 12, color: '#374151', marginBottom: 10, fontFamily, fontWeight: 600 }}>
                {t.roleLabel}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}
                className="role-selector-grid">
                {r.map((role) => (
                  <button
                    key={role.id}
                    onClick={() => setSelectedRole(role.id)}
                    className={`role-tab${selectedRole === role.id ? ' active' : ''}`}
                    style={{ textAlign: isRtl ? 'right' : 'left' }}
                  >
                    <div style={{ fontWeight: 600, marginBottom: 2, fontFamily }}>{role.label}</div>
                    <div style={{ fontSize: 11, opacity: 0.7, fontFamily }}>{role.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {formSubmitted ? (
              /* ── Contact Form Success ── */
              <div style={{
                background: 'rgba(27,67,50,0.06)', border: '1px solid rgba(27,67,50,0.20)',
                borderRadius: 12, padding: '28px 24px', textAlign: 'center',
              }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>✅</div>
                <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 20, fontWeight: 700, color: '#1B4332', marginBottom: 8 }}>
                  Message Received!
                </h3>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.6, marginBottom: 8, fontFamily }}>
                  Thank you, <strong>{formData.name}</strong>. Our Dammam team will respond within 24 hours.
                </p>
                <p style={{ fontSize: 13, color: '#6b7280', fontFamily }}>Confirmation sent to <strong>{formData.email}</strong></p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} noValidate>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}
                  className="form-two-col">
                  {/* Name */}
                  <div>
                    <label style={{ fontSize: 12, color: '#374151', display: 'block', marginBottom: 5, fontFamily, fontWeight: 500 }}>
                      {t.nameLabel} <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      className="form-input"
                      placeholder={t.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => handleFieldChange('name', e.target.value)}
                      onBlur={() => handleFieldBlur('name')}
                      style={{ border: `1.5px solid ${inputBorderColor('name')}` }}
                    />
                    {formTouched.name && formErrors.name && (
                      <span style={{ fontSize: 11, color: '#ef4444', display: 'block', marginTop: 3, fontFamily }}>{formErrors.name}</span>
                    )}
                    {formTouched.name && !formErrors.name && formData.name && (
                      <span style={{ fontSize: 11, color: '#1B4332', display: 'block', marginTop: 3, fontFamily }}>✓ Looks good</span>
                    )}
                  </div>
                  {/* Company */}
                  <div>
                    <label style={{ fontSize: 12, color: '#374151', display: 'block', marginBottom: 5, fontFamily, fontWeight: 500 }}>
                      {t.companyLabel} <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      className="form-input"
                      placeholder={t.companyPlaceholder}
                      value={formData.company}
                      onChange={(e) => handleFieldChange('company', e.target.value)}
                      onBlur={() => handleFieldBlur('company')}
                      style={{ border: `1.5px solid ${inputBorderColor('company')}` }}
                    />
                    {formTouched.company && formErrors.company && (
                      <span style={{ fontSize: 11, color: '#ef4444', display: 'block', marginTop: 3, fontFamily }}>{formErrors.company}</span>
                    )}
                    {formTouched.company && !formErrors.company && formData.company && (
                      <span style={{ fontSize: 11, color: '#1B4332', display: 'block', marginTop: 3, fontFamily }}>✓ Looks good</span>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div style={{ marginBottom: 12 }}>
                  <label style={{ fontSize: 12, color: '#374151', display: 'block', marginBottom: 5, fontFamily, fontWeight: 500 }}>
                    {t.emailLabel} <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    className="form-input"
                    type="email"
                    placeholder={t.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => handleFieldChange('email', e.target.value)}
                    onBlur={() => handleFieldBlur('email')}
                    style={{ border: `1.5px solid ${inputBorderColor('email')}` }}
                  />
                  {formTouched.email && formErrors.email && (
                    <span style={{ fontSize: 11, color: '#ef4444', display: 'block', marginTop: 3, fontFamily }}>{formErrors.email}</span>
                  )}
                  {formTouched.email && !formErrors.email && formData.email && (
                    <span style={{ fontSize: 11, color: '#1B4332', display: 'block', marginTop: 3, fontFamily }}>✓ Valid email</span>
                  )}
                </div>

                {/* Phone */}
                <div style={{ marginBottom: 12 }}>
                  <label style={{ fontSize: 12, color: '#374151', display: 'block', marginBottom: 5, fontFamily, fontWeight: 500 }}>
                    {t.phoneLabel}
                  </label>
                  <input
                    className="form-input"
                    type="tel"
                    placeholder={t.phonePlaceholder}
                    value={formData.phone}
                    onChange={(e) => handleFieldChange('phone', e.target.value)}
                    onBlur={() => handleFieldBlur('phone')}
                    style={{ border: `1.5px solid ${inputBorderColor('phone')}` }}
                  />
                  {formTouched.phone && formErrors.phone && (
                    <span style={{ fontSize: 11, color: '#ef4444', display: 'block', marginTop: 3, fontFamily }}>{formErrors.phone}</span>
                  )}
                  {formTouched.phone && !formErrors.phone && formData.phone && (
                    <span style={{ fontSize: 11, color: '#1B4332', display: 'block', marginTop: 3, fontFamily }}>✓ Valid number</span>
                  )}
                </div>

                {/* Message */}
                <div style={{ marginBottom: 16 }}>
                  <label style={{ fontSize: 12, color: '#374151', display: 'block', marginBottom: 5, fontFamily, fontWeight: 500 }}>
                    {t.messageLabel} <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <textarea
                    className="form-input"
                    placeholder={t.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => handleFieldChange('message', e.target.value)}
                    onBlur={() => handleFieldBlur('message')}
                    rows={4}
                    style={{ resize: 'vertical', border: `1.5px solid ${inputBorderColor('message')}` }}
                  />
                  {formTouched.message && formErrors.message && (
                    <span style={{ fontSize: 11, color: '#ef4444', display: 'block', marginTop: 3, fontFamily }}>{formErrors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%', background: '#1B4332', color: '#fff',
                    fontSize: 15, fontWeight: 600, padding: 13, borderRadius: 8,
                    cursor: 'pointer', border: 'none', fontFamily, marginBottom: 8,
                  }}
                >
                  {t.submitBtn}
                </button>
                <div style={{ fontSize: 12, color: '#8a9a8a', textAlign: 'center', fontFamily }}>
                  {t.submitNote}
                </div>
              </form>
            )}
          </div>

          {/* Divider */}
          <div style={{ background: '#d0ddd0', width: 1, alignSelf: 'stretch' }} className="contact-divider" />

          {/* Right: Book Appointment */}
          <div>
            <div style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, color: '#1B4332', marginBottom: 8, fontFamily }}>
              {t.appointmentLabel}
            </div>
            <h2 style={{ fontFamily: isRtl ? fontFamily : '"Playfair Display", Georgia, serif', fontSize: 'clamp(26px, 3vw, 36px)', lineHeight: 1.1, fontWeight: 700, color: '#1B4332', marginBottom: 12 }}>
              {t.h2b} <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>{t.h2bEm}</em>
            </h2>
            <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.65, marginBottom: 24, fontFamily }}>
              {t.appointmentSub}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
              {t.appointments.map((appt, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex', gap: 14, alignItems: 'flex-start',
                    background: '#fff', border: '1px solid rgba(27,67,50,0.15)',
                    borderRadius: 12, padding: 16, transition: '0.15s', cursor: 'default',
                  }}
                >
                  <span style={{ fontSize: 22, flexShrink: 0, marginTop: 2 }}>{appt.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 15, fontWeight: 600, color: '#1B4332', marginBottom: 3, fontFamily }}>{appt.title}</div>
                    <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.5, marginBottom: 4, fontFamily }}>{appt.desc}</div>
                    <div style={{ fontSize: 11, color: '#8a9a8a', letterSpacing: '0.03em', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 500 }}>{appt.duration}</div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleBookNow}
              style={{
                width: '100%', background: '#C9A84C', color: '#0d2b1a',
                fontSize: 15, fontWeight: 700, padding: 13, borderRadius: 8,
                cursor: 'pointer', border: 'none', fontFamily, marginBottom: 10,
              }}
            >
              {t.bookBtn}
            </button>
            <div style={{ fontSize: 12, color: '#8a9a8a', textAlign: 'center', fontFamily }}>
              {t.contactInfo}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '80px 24px', background: '#f3efe5', textAlign: 'center' }} dir={isRtl ? 'rtl' : 'ltr'}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, color: '#1B4332', marginBottom: 10, fontFamily }}>
            {t.ctaLabel}
          </div>
          <h2 style={{ fontFamily: isRtl ? fontFamily : '"Playfair Display", Georgia, serif', fontSize: 'clamp(28px, 3.5vw, 42px)', lineHeight: 1.1, fontWeight: 700, color: '#1B4332', marginBottom: 14 }}>
            {t.h2c} <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>{t.h2cEm}</em>
          </h2>
          <p style={{ fontSize: 17, color: '#374151', marginBottom: 28, fontFamily }}>
            {t.ctaSub}
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
            <button
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{ background: '#1B4332', color: '#fff', fontSize: 15, fontWeight: 600, padding: '13px 28px', borderRadius: 6, cursor: 'pointer', border: 'none', fontFamily }}
            >
              {t.ctaBtn1}
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('platform') || document.getElementById('solutions');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{ background: 'transparent', color: '#1B4332', fontSize: 15, fontWeight: 600, padding: '13px 28px', borderRadius: 6, cursor: 'pointer', border: '1px solid rgba(27,67,50,0.30)', fontFamily }}
            >
              {t.ctaBtn2}
            </button>
          </div>

          {/* Three boxes: building image | google map | our office — all same size, neatly aligned */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
            textAlign: 'left',
            alignItems: 'stretch',
          }}
          className="cta-three-boxes">

            {/* Box 1: Building image */}
            <div style={{
              borderRadius: 12,
              overflow: 'hidden',
              border: '1px solid rgba(27,67,50,0.18)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.10)',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <img
                src="/assets/images/al_sinai_building-1783111229960.jpeg"
                alt="Al-Sinai Building — EAMB4748 King Abdulaziz Road, Dhahran"
                style={{ width: '100%', display: 'block', height: 180, objectFit: 'cover', objectPosition: 'center', flex: '0 0 auto' }}
              />
              <div style={{ padding: '14px 16px', background: '#1B4332', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#C9A84C', fontFamily, letterSpacing: '0.05em', textAlign: 'center' }}>
                  Al-Sinai Building, Dhahran
                </div>
              </div>
            </div>

            {/* Box 2: Google Maps embed */}
            <div style={{
              borderRadius: 12,
              overflow: 'hidden',
              border: '1px solid rgba(27,67,50,0.18)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.10)',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <iframe
                title="Industrial Prosperity Office — King Abdulaziz Road, Dhahran"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.5!2d50.1!3d26.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e6b1b1b1b1b1%3A0x1!2sKing+Abdulaziz+Road%2C+Dhahran%2C+Saudi+Arabia!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa"
                width="100%"
                height="180"
                style={{ display: 'block', border: 0, flex: '0 0 auto' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div style={{ padding: '14px 16px', background: '#1B4332', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <a
                  href="https://maps.google.com/?q=King+Abdulaziz+Road,+Dhahran,+Saudi+Arabia"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 13, color: '#C9A84C', fontFamily, fontWeight: 600, textDecoration: 'none', textAlign: 'center' }}
                >
                  📍 Open in Google Maps →
                </a>
              </div>
            </div>

            {/* Box 3: Our Office contact details */}
            <div style={{
              borderRadius: 12,
              overflow: 'hidden',
              border: '1px solid rgba(27,67,50,0.18)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.10)',
              background: '#1B4332',
              display: 'flex',
              flexDirection: 'column',
              padding: '20px 18px',
              justifyContent: 'center',
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#C9A84C', fontFamily, letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: 14 }}>
                Our Office
              </div>
              {/* Address */}
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 12 }}>
                <span style={{ fontSize: 14, flexShrink: 0, marginTop: 1 }}>📍</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', fontFamily, lineHeight: 1.4 }}>
                    EAMB4748 King Abdulaziz Road
                  </div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', fontFamily }}>
                    Dhahran, Eastern Province, Saudi Arabia
                  </div>
                </div>
              </div>
              {/* Email 1 */}
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
                <span style={{ fontSize: 14, flexShrink: 0 }}>✉️</span>
                <a
                  href="mailto:solutions@greenvue.com.sa"
                  style={{ fontSize: 12, color: '#C9A84C', fontFamily, fontWeight: 500, textDecoration: 'none' }}
                >
                  solutions@greenvue.com.sa
                </a>
              </div>
              {/* Email 2 */}
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <span style={{ fontSize: 14, flexShrink: 0 }}>✉️</span>
                <a
                  href="mailto:info@industrialprosperity.com"
                  style={{ fontSize: 12, color: '#C9A84C', fontFamily, fontWeight: 500, textDecoration: 'none' }}
                >
                  info@industrialprosperity.com
                </a>
              </div>
            </div>

          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .cta-three-boxes {
              grid-template-columns: 1fr !important;
            }
          }
          @media (max-width: 640px) {
            .role-selector-grid {
              grid-template-columns: 1fr !important;
            }
            .form-two-col {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>
    </>
  );
}
