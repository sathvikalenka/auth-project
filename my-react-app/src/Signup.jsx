import axios from "axios";
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    await axios.post("http://localhost:5000/signup", { email, password });
    alert("User created");
  };

  return (
    <div>
      <h2>Signup</h2>
      <input placeholder="email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}