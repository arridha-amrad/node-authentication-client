import getGoogleOauthURL from '../utils/GetGoogleOAuthURL';

const GoogleLoginButton = () => {
  const googleLogin = () => {
    window.open(getGoogleOauthURL(), '_blank');
  };

  return (
    <button className="btn btn-warning" onClick={googleLogin}>
      Login with Google
    </button>
  );
};

export default GoogleLoginButton;
