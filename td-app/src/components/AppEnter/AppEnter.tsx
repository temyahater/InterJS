import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { AppEnterProps } from "../../models/interfaces";
import {
  handleLocationChange,
  tasksURL,
} from "../../services/ConstsHandles/AppConsts";
import { auth } from "../../services/Firebase/Firebase";
import userRequsetAction from "../../store/actions/user-request";
import "./AppEnter.css";

const AppEnter = ({
  handleUserRegister,
  handleUserEnter,
  history,
  loadUser,
}: AppEnterProps & RouteComponentProps) => {
  React.useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        handleLocationChange(history, tasksURL);
      }
    });
  });

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
      handleUserRegister(history, {
        email: userInfo.email,
        password: userInfo.password,
      })
        .then(() => loadUser(auth))
        .catch((err: Error) => {
          alert(err.message);
        });
    } else {
      handleUserEnter(history, {
        email: userInfo.email,
        password: userInfo.password,
      })
        .then(() => loadUser(auth))
        .catch((err: Error) => {
          alert(err.message);
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
  return { loadUser: bindActionCreators(userRequsetAction, dispatch) };
}

export default connect(null, mapDispatchToProps)(withRouter(AppEnter));
