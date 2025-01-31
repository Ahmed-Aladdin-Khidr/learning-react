import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function Login() {
  const {
    value: emailValue,
    onBlur: onEmailBlur,
    onChange: onEmailChange,
    hasError: emailIsInvalid,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    onBlur: onPasswordBlur,
    onChange: onPasswordChange,
    hasError: passwordIsInvalid,
  } = useInput("", (value) => hasMinLength(value, 8));

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailIsInvalid || passwordIsInvalid) {
      return;
    }
    console.log(emailValue, passwordValue);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="email"
          id="email"
          type="email"
          name="email"
          onBlur={onEmailBlur}
          onChange={onEmailChange}
          value={emailValue}
          error={emailIsInvalid && "Please enter a valid email"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={onPasswordChange}
          onBlur={onPasswordBlur}
          value={passwordValue}
          error={passwordIsInvalid && "Password must be at least 8 characters"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
