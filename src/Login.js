import React from "react";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;
  return (
    <section className="login">
      <div>
        <label>USERNAME</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="err-message"> {emailError}</p>
        <label>PASSWORD</label>
        <input
          type="text"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="err-message">{passwordError}</p>
        <div>
          {hasAccount ? (
            <div>
              <button onClick={handleLogin}>SIGN IN</button>
              <p>
                Don't have account so
                <span onClick={() => setHasAccount(!hasAccount)}>
                  sign-up
                </span>{" "}
              </p>
            </div>
          ) : (
            <div>
              <button onClick={handleSignUp}>SIGN UP</button>
              <p>
                already have an account?
                <span onClick={() => setHasAccount(!hasAccount)}>sign-in</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
