// Styles
import {
  section,
  container,
  logoContainer,
  formContainer,
  formWrapper,
  loginWithGoogle,
  create,
} from "./Login.module.scss";

// Firebase
import db, { auth, provider } from "../firebase";

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).then((cred) => {
      db.collection("users").doc(cred.user.uid).set({
        name: cred.user.displayName,
        photoURL: cred.user.photoURL,
        status: false,
      });
    });
  };

  return (
    <div className={section}>
      <div className={container}>
        <div className={logoContainer}>
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            alt=""
          />
          <h2>Connect with friends and the world around you on Facebook.</h2>
        </div>
        <div className={formContainer}>
          <div className={formWrapper}>
            <form>
              <input type="text" placeholder="Email or Phone Number" />
              <input type="text" placeholder="Password" />
              <button>Log In</button>
              <p>Don't have an account? </p>
            </form>
            <div className={loginWithGoogle}>
              <button onClick={signIn}>
                <img
                  src="https://www.raqnbeauty.com/wp-content/uploads/2020/06/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png"
                  alt=""
                />
                Sign in with Gmail
              </button>
            </div>
          </div>

          <p className={create}>
            <strong>Create a Page</strong> for a celebrity, band or business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
