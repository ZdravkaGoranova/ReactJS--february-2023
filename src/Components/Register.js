function Register() {
    return (
        <form id="registerForm" className="registerForm">
        <h2>Register</h2>
        <div className="on-dark">
          <label for="username">Username:</label>
          <input id="username" name="username" type="text" placeholder="Steven" value="" autocomplete="username" />
          </div>
        <div className="on-dark">
          <label for="email">Email:</label>
          <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="" autocomplete="email" />
          </div>
        <div className="on-dark">
          <label for="password">Password:</label>
          <input id="password" name="password" type="password" placeholder="********" value="" autocomplete="current-password" />
        </div>
          <input type="submit" id="signUp" className="btn" name="signUp" value="Sign Up" />       
          <input type="submit" id="login" className="btn" name="login" value="Login" /> 
          <p className="field">
          <span>If you have profile click <a href="/users/login">here</a></span>
          </p>
      </form>
    );
};

export default Register;