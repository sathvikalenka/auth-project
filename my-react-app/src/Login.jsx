import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:7000/login", form);

      localStorage.setItem("token", res.data.token);

      alert("Login success");

      navigate("/dashboard");

    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input placeholder="Email"
        onChange={e => setForm({ ...form, email: e.target.value })}
      />

      <input type="password"
        placeholder="Password"
        onChange={e => setForm({ ...form, password: e.target.value })}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}