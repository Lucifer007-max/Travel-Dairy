"use client";

import { useState } from "react";
import { site } from "@/lib/site";

// No backend: the form composes an email in the visitor's mail app, so every message
// lands in the same inbox a person actually reads.
export default function ContactForm() {
  const [topic, setTopic] = useState("Question");
  const [message, setMessage] = useState("");

  function send(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`TravelDiary · ${topic}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="form" onSubmit={send}>
      <label>
        What is it about?
        <select value={topic} onChange={(e) => setTopic(e.target.value)}>
          <option>Question</option>
          <option>Something is broken</option>
          <option>Idea</option>
          <option>Account or data request</option>
          <option>Press</option>
        </select>
      </label>
      <label>
        Message
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what happened, or what you wish the app did."
        />
      </label>
      <button className="btn" type="submit">
        Write the email
      </button>
      <p className="muted" style={{ fontSize: ".85rem" }}>
        Opens your mail app. Prefer to write directly? <a className="link" href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </form>
  );
}
