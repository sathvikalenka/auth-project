import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:7000/dashboard", {
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
    <div>
      <h2>Dashboard</h2>

      <button onClick={getData}>Get Data</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}