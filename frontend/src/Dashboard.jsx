import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(`${import.meta.env.VITE_API_URL}/login`, {
        headers: {
          Authorization: "Bearer " + token
        }
      });

      alert(res.data.message);

    } catch {
      alert("Unauthorized");
      navigate("/login");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="container">
      <h2>Dashboard</h2>

      <button onClick={getData}>Get Data</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}