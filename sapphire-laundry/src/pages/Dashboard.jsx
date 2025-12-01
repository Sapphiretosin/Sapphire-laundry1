import { useEffect, useState } from "react";
import { getProfile } from "../services/authService";
import api from "../utils/api";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadProfile() {
      const token = localStorage.getItem("token");
      const data = await getProfile(token);
      setUser(data.user);
    }

    loadProfile();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="dashboard-page">
      <h2>Welcome, {user.name}</h2>

      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}
