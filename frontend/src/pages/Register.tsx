import React, { useState, useEffect, useRef } from "react";

function Register() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [message, setMessage] = useState("");

  const handleRegister = () => {
    const ws = new WebSocket("ws://localhost:12345");

    ws.onopen = () => {
      console.log("connected to server for register");
      const msg = {
        action: "register",
        data: { name, surname, email, password, role },
      };
      ws.send(JSON.stringify(msg));
    };

    ws.onmessage = (event) => {
      const res = JSON.parse(event.data);
      if (res.action === "register_success") {
        setMessage(res.data);
      } else if (res.action === "register_failed") {
        setMessage(res.data);
      }
    };
  };

  return (
    <div>
      <h2>Register page</h2>
      <input
        placeholder="first name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
      </select>
      <button onClick={handleRegister}>Register</button>
      <p>{message}</p>
    </div>
  );
}

export default Register;
