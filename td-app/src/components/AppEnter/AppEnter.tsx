import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { AppEnterProps } from "../../models/interfaces";
import { tasksURL } from "../../services/Database/database-calls";
import { auth } from "../../services/Firebase/Firebase";
import { userEnterRequestAction } from "../../store/actions/user-enter-request";
import { userRedirectRequestAction } from "../../store/actions/user-redirect-request";
import { userRegisterRequestAction } from "../../store/actions/user-register-request";
import "./AppEnter.css";

const AppEnter = ({
  history,
  enterUser,
  registerUser,
  redirectUser,
}: AppEnterProps & RouteComponentProps) => {
  React.useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        redirectUser(history, tasksURL);
      }
    });
  }, [redirectUser, history]);

  const [checkRegister, setRegister] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState({ email: "", password: "" });

  const handleCheckRegisterClick = () => {
    setRegister(!checkRegister);
  };

  const handleUserInfo = (event: { target: HTMLInputElement }) => {
    if (event.target.name === "email") {
      setUserInfo({
        email: event.target.value,
        password: userInfo.password,
      });
    } else {
      setUserInfo({
        email: userInfo.email,
        password: event.target.value,
      });
    }
  };

  const handleEnterClick = () => {
    if (checkRegister) {
      registerUser(auth, {
        email: userInfo.email,
        password: userInfo.password,
      });
    } else {
      enterUser(auth, {
        email: userInfo.email,
        password: userInfo.password,
      });
      setUserInfo({ email: userInfo.email, password: "" });
    }
  };

  return (
    <div className="app-enter">
      <div className="enter-form">
        <div className="enter-email">
          <span>Email</span>
          <input
            name="email"
            type="text"
            value={userInfo.email}
            onChange={handleUserInfo}
          />
        </div>
        <div className="enter-password">
          <span>Password</span>
          <input
            name="password"
            type="password"
            value={userInfo.password}
            onChange={handleUserInfo}
          />
        </div>
        <div className="enter-button">
          <button type="button" onClick={handleEnterClick}>
            Enter
          </button>
        </div>
      </div>
      <div className="register">
        <input
          type="checkbox"
          checked={checkRegister}
          onChange={handleCheckRegisterClick}
        />
        <button type="button" onClick={handleCheckRegisterClick}>
          Register
        </button>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch: any) {
  return {
    enterUser: bindActionCreators(userEnterRequestAction, dispatch),
    registerUser: bindActionCreators(userRegisterRequestAction, dispatch),
    redirectUser: bindActionCreators(userRedirectRequestAction, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(withRouter(AppEnter));
