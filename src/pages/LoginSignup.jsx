import "./css/LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="login-signup-container">
      <div className="login-signup">
        <h2>Sign Up</h2>
        <div className="login-signup-field">
          <input type="name" placeholder="Your Name" />
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="login-signup-login">
          Already have an account? <span>Login here</span>
        </p>
        <div className="login-signup-agreement">
          <input type="checkbox" />
          <p>By continuing, I agree terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
