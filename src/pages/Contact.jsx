import React, { useState } from 'react';
import axios from 'axios';
import contactHero from '../assets/images/contact/contact-hero.jpg';

// API endpoint
const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  console.error('[Contact Form] VITE_API_URL is not defined. Check your .env file.');
}


export default function Contact() {
  // ── Form field state ──────────────────────────────────────────
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    privacy: false,
  });

  // ── UI state ──────────────────────────────────────────────────
  const [errors, setErrors]     = useState({});
  const [loading, setLoading]   = useState(false);
  const [toast, setToast]       = useState(null); // { type: 'success' | 'error', text: string }

  // ── Helpers ───────────────────────────────────────────────────
  const showToast = (type, text) => {
    setToast({ type, text });
    setTimeout(() => setToast(null), 4000);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear field-level error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  // ── Validation ────────────────────────────────────────────────
  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim())        newErrors.firstName = 'First name is required.';
    if (!formData.lastName.trim())         newErrors.lastName  = 'Last name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email.';
    }
    if (!formData.phone.trim())            newErrors.phone   = 'Phone number is required.';
    if (!formData.message.trim())          newErrors.message = 'Message is required.';
    return newErrors;
  };

  // ── Submit handler ────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Run validation
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    // Build payload: combine first + last name into single name field
    const payload = {
      name:    `${formData.firstName.trim()} ${formData.lastName.trim()}`,
      email:   formData.email.trim(),
      phone:   formData.phone.trim(),
      subject: 'Contact Form Submission',
      message: formData.message.trim(),
    };

    // ── Helper: single attempt with a 15 s timeout ─────────────
    const attempt = () =>
      axios.post(API_URL, payload, { timeout: 15000 });

    // ── Helper: detect timeout / network errors ─────────────────
    const isRetryable = (err) =>
      err.code === 'ECONNABORTED' ||   // axios timeout
      err.code === 'ERR_NETWORK' ||    // network offline
      err.code === 'ERR_BAD_RESPONSE'; // 5xx type network drop

    try {
      let response;
      try {
        response = await attempt();
      } catch (firstErr) {
        // ── One automatic retry after 2 s for slow / flaky servers
        if (isRetryable(firstErr)) {
          console.warn('[Contact Form] First attempt failed, retrying in 2 s…', firstErr.code);
          await new Promise((res) => setTimeout(res, 2000));
          response = await attempt(); // throws again if still failing
        } else {
          throw firstErr; // validation / 4xx – do not retry
        }
      }

      // ── Success ───────────────────────────────────────────────
      showToast('success', 'Message sent successfully.');

      // Clear all form fields
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        privacy: false,
      });
      setErrors({});
    } catch (error) {
      // ── Failure ───────────────────────────────────────────────
      console.error('[Contact Form] API error:', error?.code, error?.response?.status, error?.response?.data || error?.message);

      let userMsg = 'Failed to send message. Please try again.';
      if (error.code === 'ECONNABORTED') {
        userMsg = 'Request timed out. Please check your connection and try again.';
      } else if (error.code === 'ERR_NETWORK') {
        userMsg = 'Network error. Please check your internet connection.';
      } else {
        const serverMsg = error?.response?.data?.message;
        if (serverMsg && serverMsg !== 'validation Error!!') userMsg = serverMsg;
      }

      showToast('error', userMsg);
    } finally {
      setLoading(false);
    }
  };

  // ── Render ────────────────────────────────────────────────────
  return (
    <div className="w-full pt-[92px] bg-[#202329]">
      {/* ── Page Title ───────────────────────────────────────── */}
      <section className="w-full bg-[#202329]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-7">
          <h1 className="text-white text-3xl sm:text-4xl font-semibold">Contact</h1>
        </div>
      </section>

      {/* ── Hero Banner ──────────────────────────────────────── */}
      <section className="max-w-[1440px] mx-auto">
        <div
          className="relative h-[260px] sm:h-[320px] lg:h-[370px] bg-cover bg-center"
          style={{ backgroundImage: `url(${contactHero})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <span className="bg-[#da251d] text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              Contact Us
            </span>
            <h2 className="text-white text-4xl sm:text-5xl lg:text-[48px] font-semibold mb-3 leading-tight">
              Send Us Hi To Our Team
            </h2>
            <p className="text-gray-100 text-xs sm:text-sm max-w-3xl">
              Simplify Your Billing, Boost Efficiency, And Serve Customers Faster - All From Your Mobile.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact Form ─────────────────────────────────────── */}
      <section className="w-full bg-[#efefef]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-[72px]">
          <div className="max-w-[640px] mx-auto">

            {/* Toast notification */}
            {toast && (
              <div
                className={`mb-6 px-4 py-3 rounded-md text-sm font-medium text-center transition-all ${
                  toast.type === 'success'
                    ? 'bg-green-100 text-green-700 border border-green-300'
                    : 'bg-red-100 text-red-700 border border-red-300'
                }`}
              >
                {toast.text}
              </div>
            )}

            <p className="text-[#da251d] text-center text-sm font-medium mb-2">Contact us</p>
            <h3 className="text-[#1f2937] text-4xl font-semibold text-center mb-3">Get in touch</h3>
            <p className="text-center text-[#6b7280] text-[15px] mb-8">
              We'd love to hear from you. Please fill out this form.
            </p>

            <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit} noValidate>

              {/* First Name + Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] text-[#4b5563] mb-1.5">First name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    className="w-full h-11 px-3 text-sm border border-[#d1d5db] rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-[#da251d]/20 focus:border-[#da251d]"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-[11px] mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-[11px] text-[#4b5563] mb-1.5">Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="w-full h-11 px-3 text-sm border border-[#d1d5db] rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-[#da251d]/20 focus:border-[#da251d]"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-[11px] mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-[11px] text-[#4b5563] mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="w-full h-11 px-3 text-sm border border-[#d1d5db] rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-[#da251d]/20 focus:border-[#da251d]"
                />
                {errors.email && (
                  <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[11px] text-[#4b5563] mb-1.5">Phone number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="US   +1 (555) 000-0000"
                  className="w-full h-11 px-3 text-sm border border-[#d1d5db] rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-[#da251d]/20 focus:border-[#da251d]"
                />
                {errors.phone && (
                  <p className="text-red-500 text-[11px] mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-[11px] text-[#4b5563] mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 py-2.5 text-sm border border-[#d1d5db] rounded-md bg-transparent resize-none focus:outline-none focus:ring-2 focus:ring-[#da251d]/20 focus:border-[#da251d]"
                />
                {errors.message && (
                  <p className="text-red-500 text-[11px] mt-1">{errors.message}</p>
                )}
              </div>

              {/* Privacy checkbox */}
              <label className="flex items-center gap-2 text-[12px] text-[#4b5563]">
                <input
                  type="checkbox"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                  className="w-4 h-4 border-[#d1d5db] rounded"
                />
                <span>
                  You agree to our friendly <span className="underline">privacy policy</span>.
                </span>
              </label>

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading || !formData.privacy}
                className="w-full h-11 bg-[#da251d] text-white text-sm font-medium rounded-md hover:bg-[#c6221a] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send message'}
              </button>

            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
