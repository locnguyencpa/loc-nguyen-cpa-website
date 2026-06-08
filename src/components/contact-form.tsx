"use client";

import { FormEvent } from "react";
import { site } from "@/lib/site";

export function ContactForm({ quote = false }: { quote?: boolean }) {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      quote ? `Quote request from ${data.get("name")}` : `Website message from ${data.get("name")}`,
    );
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone") || "Not provided"}\nService: ${data.get("service") || "General question"}\n\nMessage:\n${data.get("message")}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={submit} className="card grid gap-5 p-6 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="field">
          <span>Name *</span>
          <input name="name" required autoComplete="name" />
        </label>
        <label className="field">
          <span>Email *</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="field">
          <span>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label className="field">
          <span>How can I help?</span>
          <select name="service" defaultValue="">
            <option value="" disabled>Select a service</option>
            <option>Individual tax return</option>
            <option>Equity compensation</option>
            <option>Business tax return</option>
            <option>Penalty or tax notice</option>
            <option>Tax planning</option>
            <option>Other</option>
          </select>
        </label>
      </div>
      <label className="field">
        <span>Tell me a little about your situation *</span>
        <textarea name="message" rows={6} required />
      </label>
      <p className="text-xs leading-5 text-slate">
        Please do not include Social Security numbers, tax documents, or other
        sensitive information in this form.
      </p>
      <button className="button button-primary justify-center" type="submit">
        {quote ? "Send quote request" : "Send message"}
      </button>
    </form>
  );
}
