import { useState } from "react";

export default function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  })

  const emailIsInvalid = didEdit.email && !inputs.email.includes('@');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(inputs));
  };
  function handleInputChange(identifier, event) {
    setInputs((inputs) => ({
      ...inputs,
      [identifier]: event.target.value,
    }));
    setDidEdit((didEdit) => ({
      ...didEdit,
      [identifier]: false,
    }));
  }
  function handleInputBlur(identifier) {
    setDidEdit((didEdit) => ({
      ...didEdit,
      [identifier]: true,
    }));
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            onChange={(event) => handleInputChange("email", event)}
            value={inputs.email || ""}
          />
          {emailIsInvalid && (
            <small className="control-error">Please enter a valid email</small>
          )}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => handleInputChange("password", event)}
            value={inputs.password || ""}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
