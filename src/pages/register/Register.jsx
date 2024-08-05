import "./Register.css";
const Register = () => {
  return (
    <>
      <div className="signup-container">
        <form>
          <input type="text" name="fullname" id="fullname" placeholder="Fullname"/>
          <input type="text" name="username" id="username" placeholder="Username"/>
          <input type="number" name="phoneNumber" id="phoneNumber" placeholder="Phone number"/>
          <input type="email" name="email" id="email" placeholder="Email"/>
          <input type="password" name="password" id="password" placeholder="Password"/>
          <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password"/>
          <input type="checkbox" name="confirm" id="confirm" className="confirm"/>
          <label htmlFor="confirm">I readed bla, bla list and confirm it.</label>
        </form>
      </div>
    </>
  );
};

export default Register;
