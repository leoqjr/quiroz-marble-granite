"use client";

import React, { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      phone: formData.get("phone")?.toString() ?? "",
      city: formData.get("city")?.toString() ?? "",
      projectType: formData.get("projectType")?.toString() ?? "",
      timeline: formData.get("timeline")?.toString() ?? "",
      message: formData.get("message")?.toString() ?? "",
      // honeypot field
      website: formData.get("website")?.toString() ?? "",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(
          data?.error ?? "Something went wrong. Please try again.",
        );
      }

      setFormState("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setFormState("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <div className="page">
      <div className="page-inner">
        <h1>Contact</h1>
        <p className="page-lead">
          Tell us about your project and we&apos;ll follow up with next steps.
        </p>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="name">Name *</label>
              <input id="name" name="name" type="text" required />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email *</label>
              <input id="email" name="email" type="email" required />
            </div>

            <div className="form-field">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" />
            </div>

            <div className="form-field">
              <label htmlFor="city">City / Area</label>
              <input id="city" name="city" type="text" />
            </div>

            <div className="form-field">
              <label htmlFor="projectType">Project type</label>
              <input
                id="projectType"
                name="projectType"
                type="text"
                placeholder="Kitchen, bath, commercial, etc."
              />
            </div>

            <div className="form-field">
              <label htmlFor="timeline">Timeline</label>
              <input
                id="timeline"
                name="timeline"
                type="text"
                placeholder="Rough start date or deadline"
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="message">Project details</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us about your space, stone type, and any plans or drawings you have."
            />
          </div>

          {/* Honeypot field (hidden from humans) */}
          <div className="form-field honeypot">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              type="text"
              autoComplete="off"
              tabIndex={-1}
            />
          </div>

          <div className="form-actions">
            <button
              type="submit"
              className="btn-primary"
              disabled={formState === "submitting"}
            >
              {formState === "submitting" ? "Sending..." : "Send message"}
            </button>

            {formState === "success" && (
              <p className="form-status form-status-success">
                Thank you. We&apos;ve received your message.
              </p>
            )}

            {formState === "error" && (
              <p className="form-status form-status-error">
                {errorMessage ?? "Something went wrong. Please try again."}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
