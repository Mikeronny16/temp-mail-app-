import { useEffect, useState } from "react";
import "../styles/globals.css";

export default function Home() {
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [domain, setDomain] = useState("");
  const [inbox, setInbox] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [loadingInbox, setLoadingInbox] = useState(false);
  const [error, setError] = useState("");

  const generateEmail = async () => {
    setLoadingEmail(true);
    setError("");
    setSelectedEmail(null);
    setInbox([]);

    try {
      const res = await fetch("/api/generate-email");
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error generating email");
      setEmail(data.email);
      const [l, d] = data.email.split("@");
      setLogin(l);
      setDomain(d);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoadingEmail(false);
    }
  };

  const loadInbox = async () => {
    if (!login || !domain) return;
    setLoadingInbox(true);
    try {
      const res = await fetch(`/api/inbox?login=${login}&domain=${domain}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error loading inbox");
      setInbox(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoadingInbox(false);
    }
  };

  useEffect(() => {
    if (!login || !domain) return;
    loadInbox();
    const id = setInterval(loadInbox, 5000);
    return () => clearInterval(id);
  }, [login, domain]);

  const copyEmail = async () => {
    if (!email) return;
    await navigator.clipboard.writeText(email);
    alert("Copied");
  };

  const openEmail = async (msg) => {
    setSelectedEmail(null);
    try {
      const res = await fetch(
        `/api/read-email?login=${login}&domain=${domain}&id=${msg.id}`
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error reading email");
      setSelectedEmail(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="app-root">
      <div className="card">
        <h1>TempMail Box</h1>
        <div className="subtitle">Free disposable email — use instantly.</div>

        <div className="warning">
          ⚠ For testing only. Not for abuse. Emails auto-expire.
        </div>

        <div className="button-row">
          <button className="btn" onClick={generateEmail} disabled={loadingEmail}>
            {loadingEmail ? "Loading..." : email ? "New Email" : "Generate Email"}
          </button>
          <button
            className="btn secondary"
            onClick={loadInbox}
            disabled={!email || loadingInbox}
          >
            {loadingInbox ? "Checking..." : "Check Now"}
          </button>
        </div>

        <div className="status-text">Current Email</div>
        <div className="email-box">
          <input value={email || "No email yet"} readOnly />
          <button onClick={copyEmail} disabled={!email}>Copy</button>
        </div>

        {error && (
          <div style={{
            background: "#fee2e2",
            color: "#b91c1c",
            padding: 8,
            borderRadius: 8,
            margin: "8px 0"
          }}>
            Error: {error}
          </div>
        )}

        <div className="status-text">Inbox</div>
        <div className="inbox-list">
          {!email ? (
            <div className="inbox-item">Generate email to start.</div>
          ) : inbox.length === 0 ? (
            <div className="inbox-item">Waiting for messages…</div>
          ) : (
            inbox.map((msg) => (
              <div
                key={msg.id}
                className="inbox-item"
                onClick={() => openEmail(msg)}
              >
                <div className="inbox-item-subject">
                  {msg.subject || "(no subject)"}
                </div>
                <div className="inbox-item-meta">
                  {msg.from} • {msg.date}
                </div>
              </div>
            ))
          )}
        </div>

        {selectedEmail && (
          <div className="email-detail">
            <strong>{selectedEmail.subject}</strong>
            <br />
            From: {selectedEmail.from}
            <br />
            <br />
            {selectedEmail.textBody || selectedEmail.body}
          </div>
        )}

        <div className="footer">© TempMail Box</div>
      </div>
    </div>
  );
}