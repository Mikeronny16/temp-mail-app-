import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [messages, setMessages] = useState([]);

  async function createEmail() {
    const res = await fetch("https://api.mail.tm/accounts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        address: `user${Math.floor(Math.random()*99999)}@mailto.plus`,
        password: "TempMail123",
      }),
    });

    const data = await res.json();
    setEmail(data.address);

    // Login to receive token
    const tokenRes = await fetch("https://api.mail.tm/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        address: data.address,
        password: "TempMail123",
      }),
    });

    const tokenData = await tokenRes.json();
    setToken(tokenData.token);
  }

  async function loadInbox() {
    const res = await fetch("https://api.mail.tm/messages", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    setMessages(data["hydra:member"]);
  }

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>🔥 Real Temp Mail</h1>

      <button onClick={createEmail}>
        Generate Email
      </button>

      {email && (
        <>
          <h2>Your Temp Email:</h2>
          <p>{email}</p>

          <button onClick={loadInbox}>Check Inbox</button>

          <h3>Inbox:</h3>
          {messages.length === 0 && <p>No emails yet...</p>}

          <ul>
            {messages.map((msg) => (
              <li key={msg.id}>
                <strong>{msg.from.address}</strong> — {msg.subject}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
