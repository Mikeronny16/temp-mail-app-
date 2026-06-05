import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [inbox, setInbox] = useState([]);
  const [login, setLogin] = useState("");
  const [domain, setDomain] = useState("");

  async function generateEmail() {
    const res = await fetch(
      "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
    );
    const data = await res.json();
    const mail = data[0];

    setEmail(mail);

    const [user, host] = mail.split("@");
    setLogin(user);
    setDomain(host);
  }

  async function checkInbox() {
    if (!login) return;

    const res = await fetch(
      `https://www.1secmail.com/api/v1/?action=getMessages&login=${login}&domain=${domain}`
    );

    const messages = await res.json();
    setInbox(messages);
  }

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>🔥 1SecMail Temp Email</h1>

      <button onClick={generateEmail}>Generate Email</button>

      {email && (
        <>
          <h2>📩 Your Temp Email</h2>
          <p style={{ fontSize: 18, fontWeight: "bold" }}>{email}</p>

          <button onClick={checkInbox}>Check Inbox</button>

          <h3>Inbox:</h3>
          {inbox.length === 0 && <p>No mail yet…</p>}

          <ul>
            {inbox.map((msg) => (
              <li key={msg.id}>
                <strong>{msg.from}</strong> — {msg.subject}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
