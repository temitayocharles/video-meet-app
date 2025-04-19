// login.js
import React, { useState } from 'react';
import { auth, GoogleAuthProvider } from './firebase';
import { signInWithEmailAndPassword, signInWithPopup, signOut, sendEmailVerification } from 'firebase/auth';
import './App.css';

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle Email/Password login
  const handleEmailLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        await sendEmailVerification(user);
        setError("Please verify your email before logging in.");
      } else {
        onLoginSuccess(user);
      }
    } catch (error) {
      setError("Invalid email or password.");
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      onLoginSuccess(user);
    } catch (error) {
      setError("Google sign-in failed. Try again.");
    }
  };

  // Handle Sign-out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      onLoginSuccess(null);
    } catch (error) {
      setError("Sign-out failed. Try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login to Video Meet App</h2>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleEmailLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login with Email</button>
      </form>

      <button onClick={handleGoogleLogin} className="google-login-btn">
        Sign in with Google
      </button>

      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
}
