import { useContext } from "react";
import { Navigate } from "react-router";
import { LoginContext } from "../../context/loginContext";
import "./Profile.css";

function Profile() {
  const { user, isLoggedIn } = useContext(LoginContext);
  if (!isLoggedIn) return <Navigate to="/" />;
  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <h3>{user?.username}</h3>
      <h3> Admin : {user?.isAdmin ?? "False"}</h3>
      <input
        type="password"
        placeholder="Type new password"
        className="input"
      />
      <input
        type="password"
        placeholder="Retype new password"
        className="input"
      />
      <input type="submit" className="action-btn submit" />
    </div>
  );
}

export default Profile;
