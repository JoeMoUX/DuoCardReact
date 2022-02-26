import "./login.css";
// import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="loginX-container">
      <form action="" class="loginX__register" id="loginX-in">
        <div className="loginX__register-content-container">
          {/* <h1 class="loginX__title">Sign In</h1> */}

          <div class="loginX__box">
            {/* <i class="bx bx-user loginX__icon"></i> */}
            <input type="text" placeholder="Username" class="loginX__input" />
          </div>

          <div class="loginX__box">
            {/* <i class="bx bx-lock-alt loginX__icon"></i> */}
            <input
              type="password"
              placeholder="Password"
              class="loginX__input"
            />
          </div>

          <a href="#" class="loginX__forgot">
            Forgot password?
          </a>

          <a href="#" class="loginX__button">
            Sign In
          </a>

          <div className="spanX-container">
            <span class="loginX__account">Don't have an Account?</span>
            <span class="loginX__signin" id="sign-up">
              Sign Up
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
