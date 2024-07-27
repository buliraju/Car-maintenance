import React, { useState } from 'react';
import axios from 'axios';
import './Auther.css'; // Import your CSS file

export default function Auther() {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:5000/register', formData);
      alert('Registration successful');
    } catch (error) {
      alert('Registration failed');
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', formData);

      if (response.status === 200) {
        //console.log(response.data.user)
        localStorage.setItem('username',response.data.user.username)
        // localStorage.setItem('useremail',response.data.user.email)
        // Redirect to the success page with the username as a query parameter
        // window.location.href = `/success?username=${formData.username}`;
        window.location.href = `/sucess`;
      } else {
        alert('Login failed');
      }
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div className="auth-container">
      <h1 className="auth-header">CAR</h1>
      <form>
        <div className="input-group">
          <label className="auth-label">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className="auth-input"
          />
        </div>
        <div className="input-group">
          <label className="auth-label">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="auth-input"
          />
        </div>
        <div className="button-group">
          <button type="button" onClick={handleRegister} className="auth-button">
            Register
          </button>
          <button type="button" onClick={handleLogin} className="auth-button">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
