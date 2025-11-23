// pages/Login.tsx
import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    const ws = new WebSocket("ws://localhost:12345");

    ws.onopen = () => {
      console.log("client logged in successfuly");
      const msg = {
        action: "login",
        data: { username, password },
      };

      ws.send(JSON.stringify(msg));
    };

    ws.onmessage = (event) => {
      const res = JSON.parse(event.data);
      if (res.action === "login_success") {
        setMessage(res.data);
      } else if (res.action === "login_failed") {
        setMessage(res.data);
      }
    };
  };

  return (
    <div>
      <h2>Login page</h2>
      <input
        placeholder="user name"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>login</button>
      <p>{message}</p>
    </div>
  );
}

export default Login;
