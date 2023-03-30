import {
  signInWithGooglePopup, 
  createUserDocumentFromAuth 
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form-component";

const Authentication = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup(); // destructure response object
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={logGoogleUser}>
        Sign in with Google Popup
      </button>
      <SignUpForm />
    </div>
  );
}

export default Authentication;