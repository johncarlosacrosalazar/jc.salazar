'use client';

import { useState, type FormEvent } from 'react';
import { AlertCircle, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import styles from './ConversionPortfolio.module.css';

type SubmitState = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [feedback, setFeedback] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState('sending');
    setFeedback('');

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json() as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || 'Unable to send your message.');
      }

      form.reset();
      setSubmitState('success');
      setFeedback('Thanks—your project details are on their way. I’ll reply within one business day.');
    } catch (error) {
      setSubmitState('error');
      setFeedback(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    }
  }

  return (
    <div className={styles.contactFormCard}>
      <div className={styles.formHeading}>
        <div>
          <span>Project inquiry</span>
          <h3>Tell me about the work.</h3>
        </div>
        <span className={styles.formStep}>01 / 01</span>
      </div>

      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <label>
            Your name
            <input name="name" type="text" autoComplete="name" placeholder="Jane Smith" maxLength={80} required />
          </label>
          <label>
            Email address
            <input name="email" type="email" autoComplete="email" placeholder="jane@company.com" maxLength={160} required />
          </label>
        </div>

        <div className={styles.formRow}>
          <label>
            What do you need?
            <select name="projectType" defaultValue="" required>
              <option value="" disabled>Select a project type</option>
              <option>Marketing website</option>
              <option>E-commerce or academy</option>
              <option>Custom web platform</option>
              <option>Website redesign</option>
              <option>Something else</option>
            </select>
          </label>
          <label>
            Budget range
            <select name="budget" defaultValue="">
              <option value="">Not sure yet</option>
              <option>Under $1,000</option>
              <option>$1,000–$3,000</option>
              <option>$3,000–$7,500</option>
              <option>$7,500+</option>
            </select>
          </label>
        </div>

        <label>
          Project details
          <textarea name="message" placeholder="What are you building, what needs to improve, and when would you like to launch?" minLength={20} maxLength={3000} required />
        </label>

        <label className={styles.honeypot} aria-hidden="true">
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>

        <div className={styles.formFooter}>
          <button type="submit" disabled={submitState === 'sending'}>
            {submitState === 'sending' ? 'Sending…' : 'Send project inquiry'}
            <ArrowRight size={17} aria-hidden="true" />
          </button>
          <a href="https://wa.me/639273315906" target="_blank" rel="noreferrer">
            <MessageCircle size={16} aria-hidden="true" /> WhatsApp instead
          </a>
        </div>

        {feedback && (
          <p className={`${styles.formFeedback} ${submitState === 'success' ? styles.formSuccess : styles.formError}`} role="status" aria-live="polite">
            {submitState === 'success' ? <CheckCircle2 size={17} /> : <AlertCircle size={17} />}
            {feedback}
          </p>
        )}
      </form>
    </div>
  );
}
