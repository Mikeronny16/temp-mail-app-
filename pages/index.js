import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");

  async function createEmail() {
    try {
      setError("");

      const address = `user${Math.floor(Math.random() * 99999)}@getnada.com`;

      const res = await fetch("https://api.mail.gw/accounts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          address,
          password: "TempMail123",
        }),
      });

      const data = await res.json();

      if (!data.address) {
        setError("❌ Failed to generate email.");
        console.log(data);
        return;
      }

      setEmail(data.address);

      // Now request token
      const tokenRes = await fetch("https://api.mail.gw/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          address: data.address,
          password: "TempMail123",
        }),
      });

      const tokenData = await tokenRes.json();

      if (!tokenData.token) {
        setError("❌ Failed to get token.");
        console.log(tokenData);
        return;
      }

      setToken(tokenData.token);
    } catch (err) {
      console.log(err);
      setError("❌ Network error");
    }
  }

  async function loadInbox() {
    try {
      const res = await fetch("https://api.mail.gw/messages", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setMessages(data["hydra:member"]);
    } catch (err) {
      setError("❌ Failed to load inbox.");
      console.log(err);
    }
  }

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>🔥 Real Temp Mail</h1>

      <button onClick={createEmail}>Generate Email</button>

      {error && (
        <p style={{ color: "red" }}>{error}</p>
      )}

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
