


function Register(){



return(


    <fieldset>
    <legend>Please Sign Up</legend>    <div>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" />
</div>

<div>
  <label for="email">Enter your email:</label>
  <input type="email" id="email" name="email"/>
</div>

<div>
  <label for="pass">Password (8 characters minimum):</label>
  <input type="password" id="pass" name="password" minlength="8" required />
</div>

<input type="submit" value="Sign in" />
</fieldset>

)

}

export default Register