import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });
  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:7000/register", form);
      alert(res.data.message);
      navigate("/login");

    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <input placeholder="Name"
        onChange={e => setForm({ ...form, name: e.target.value })}
      />

      <input placeholder="Email"
        onChange={e => setForm({ ...form, email: e.target.value })}
      />

      <input type="password" placeholder="Password"
        onChange={e => setForm({ ...form, password: e.target.value })}
      />

      <button onClick={handleSubmit}>Register</button>

      <p onClick={() => navigate("/login")} style={{ cursor: "pointer" }}>
        Already have account? Login
      </p>
    </div>
  );
}