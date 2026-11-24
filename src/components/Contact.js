"use client";

import { useRef, useState } from "react";

const SUCCESS_NOTE = "Message sent ✓ — Musfirah will get it at musfi606@gmail.com.";
const FAILURE_NOTE =
  "Could not send right now — please email musfi606@gmail.com directly.";

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [note, setNote] = useState("");
  const [isErr, setIsErr] = useState(false);
  const [toast, setToast] = useState("");
  const [toastShow, setToastShow] = useState(false);
  const toastTimer = useRef(null);

  function showToast(text, ms) {
    setToast(text);
    setToastShow(true);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastShow(false), ms);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      description: data.get("description"),
    };
    setSending(true);
    setIsErr(false);
    setNote("Sending your message…");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      let body = null;
      try {
        body = await res.json();
      } catch {
        body = null;
      }
      if (!res.ok || (body && body.ok === false)) {
        throw new Error((body && body.error) || FAILURE_NOTE);
      }
      setNote(SUCCESS_NOTE);
      setIsErr(false);
      form.reset();
      showToast("Message sent ✓", 2600);
    } catch (err) {
      const message = err && err.message ? err.message : FAILURE_NOTE;
      setNote(message);
      setIsErr(true);
      showToast("Send failed — try the email link", 3200);
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <section id="contact">
        <div className="sec-head reveal">
          <p className="eyebrow">06 — Contact</p>
          <h2 className="fallwords">
            <span className="fw" style={{ "--d": "0s" }}>
              Let&apos;s
            </span>{" "}
            <span className="fw" style={{ "--d": ".5s" }}>
              build
            </span>{" "}
            <span className="fw" style={{ "--d": "1s" }}>
              <em className="cyan">something</em>
            </span>
          </h2>
          <div className="divider"></div>
        </div>
        <div className="contact-box reveal">
          <div>
            <h3>Open to remote MERN roles &amp; freelance projects</h3>
            <p>
              Looking for a developer who can own a product end to end — frontend, API,
              database and payments? Fill in the form and I&apos;ll get back to you.
              Based in Pakistan, working with teams worldwide.
            </p>
            <form className="cform" id="contactForm" onSubmit={handleSubmit}>
              <div className="cform-row">
                <div className="field">
                  <label htmlFor="cfName">Name</label>
                  <input id="cfName" name="name" type="text" autoComplete="name" required />
                </div>
                <div className="field">
                  <label htmlFor="cfEmail">Email</label>
                  <input
                    id="cfEmail"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="cfMsg">Description</label>
                <textarea id="cfMsg" name="description" rows="4" required></textarea>
              </div>
              <div className="cform-actions">
                <button
                  className="btn btn-pink"
                  type="submit"
                  id="sendBtn"
                  disabled={sending}
                >
                  {sending ? "Sending…" : "Send Message"}
                </button>
              </div>
              <p
                className={isErr ? "cform-note err" : "cform-note"}
                id="formNote"
                role="status"
                aria-live="polite"
              >
                {note}
              </p>
            </form>
          </div>
          <div className="contact-list">
            <a href="mailto:musfi606@gmail.com?subject=Portfolio%20%E2%80%94%20Let%27s%20talk">
              <span className="ic">✉</span> musfi606@gmail.com
            </a>
            <a
              className="c"
              href="https://github.com/musfirah-saleem"
              target="_blank"
              rel="noopener"
            >
              <span className="ic c">⌥</span> github.com/musfirah-saleem
            </a>
            <a
              href="https://www.linkedin.com/in/musfirah-saleem-768064280/"
              target="_blank"
              rel="noopener"
            >
              <span
                className="ic"
                style={{ fontFamily: "'IBM Plex Mono',monospace", fontWeight: 800 }}
              >
                in
              </span>{" "}
              linkedin.com/in/musfirah-saleem
            </a>
            <a className="c" href="tel:+923117855606">
              <span className="ic c">☎</span> +92 311 7855606
            </a>
          </div>
        </div>
      </section>
      <div className={toastShow ? "toast show" : "toast"} id="toast" role="status">
        {toast || "Message sent ✓"}
      </div>
    </>
  );
}
