import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setSuccess("");

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/login`,
        form,
      );

      const token = res.data.token;
      const user = res.data.user;

      if (token) {
        login(token); // useAuth hook handles localStorage

        localStorage.setItem("user", JSON.stringify(res.data.user));
        setSuccess(res.data.message || "Login successful");

        setTimeout(() => {
          navigate("/allHoldings");
        }, 800);
      } else {
        setError("Login failed. Token not received.");
      }
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message || "Login failed");
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          <p className="signup-redirect">
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </form>

        {error && <p className="error-text">{error}</p>}
        {success && <p className="success-text">{success}</p>}
      </div>
    </div>
  );
}

export default Login;
