const React = require('react');

export default class Entry extends React.Component {
  render() {
    return(
      <div className='Entry'>
        <div id="login" class="inactive">
          <h2>Login</h2>
          <div class="highlight"></div>
          <form action="/home" method="post">
            <div class="form-group">
              <label for="username">Username:</label>
              <input type="username" class="form-control" id="login-username" placeholder="Enter username" name="username" required="required" />
            </div>
            <div class="form-group">
              <label for="pwd">Password:</label>
              <input type="password" class="form-control" id="login-pwd" placeholder="Enter password" name="pswd" required="required" />
            </div>
            <center><button type="submit" class="btn btn-primary">Login</button></center>
          </form>
        </div>
        <div id="register" class="active">
          <h2>Register</h2>
          <div class="highlight"></div>
          <form action="/register" method="post">
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="name" class="form-control" id="register-name" placeholder="Enter name" name="name" required="required" />
              </div>
              <div class="form-group">
                <label for="username">Username:</label>
                <input type="username" class="form-control" id="register-username" placeholder="Enter username" name="username" required="required" />
              </div>
              <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" id="register-pwd" placeholder="Enter password" name="pswd" required="required" />
              </div>
              <label for="gender">Gender:</label><br/>
              <div class="form-check-inline">
              <label class="form-check-label" for="radio1">
                <input type="radio" class="form-check-input" id="radio1" name="gender" value="Male" checked />Male
              </label>
              </div>
              <div class="form-check-inline">
                <label class="form-check-label" for="radio2">
                  <input type="radio" class="form-check-input" id="radio2" name="gender" value="Female" />Female
                </label>
              </div>
              <div class="form-check-inline">
                <label class="form-check-label">
                  <input type="radio" class="form-check-input" id="radio3" name="gender" value="Other" />Other
                </label>
              </div><br/>
              <div class="form-group">
                <label for="expertise">You're good at ??</label>
                <input type="text" class="form-control" name="expertise" placeholder="Expertise" required="required" />
              </div>
              <div class="form-group">
                <label for="explore">You wanna learn??</label>
                <input type="text" name="explore" class="form-control" placeholder="Explore" required="required" />
              </div>
            <button type="submit" class="btn btn-primary">Register</button>
          </form>
        </div>
      </div>
    );
  }
}
