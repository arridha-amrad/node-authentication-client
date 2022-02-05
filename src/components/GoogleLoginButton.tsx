const GoogleLoginButton = () => {
  const googleLogin = () => {
    window.open('http://localhost:5000/api/google/oauth/login', '_self');
  };

  return (
    <button className="btn btn-warning" onClick={googleLogin}>
      Login with Google
    </button>
  );
};

export default GoogleLoginButton;
