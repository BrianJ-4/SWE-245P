import { useRef, useState } from "react";
import "./LoginForm.css";

function LoginForm({ onSubmit }) {
  // Refs - Give access to input DOM elements
  const usernameRef = useRef();
  const passwordRef = useRef();

  // States - stores current values in input fields
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  // Change handlers
  const handleUsernameChange = (event) => {
    setUsernameValue(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault(); // stop page refresh

    // Use refs to read current values from input elements
    const formData = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    onSubmit(formData);
  };
  
  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <label>Username:</label>
      <input
        ref={usernameRef}
        id="username"
        type="text"
        value={usernameValue}
        onChange={handleUsernameChange}
      />

      <label>Password:</label>
      <input
        ref={passwordRef}
        id="password-input"
        type="password"
        value={passwordValue}
        onChange={handlePasswordChange}
      />

      <button id="login-button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default LoginForm;
