import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { AppExitProps } from "../../models/interfaces";
import { auth } from "../../services/Firebase/Firebase";
import userExitRequsetAction from "../../store/actions/user-exit-request";
import "./AppExit.css";

const AppExit = ({ history, userExit }: AppExitProps & RouteComponentProps) => {
  const handleExitClick = () => {
    if (window.confirm("Are you shure?")) {
      userExit(auth, history);
    }
  };

  return (
    <div className="app-exit">
      <div
        role="button"
        onClick={handleExitClick}
        onKeyDown={handleExitClick}
        tabIndex={0}
      >
        Exit
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch: any) {
  return { userExit: bindActionCreators(userExitRequsetAction, dispatch) };
}

export default connect(null, mapDispatchToProps)(withRouter(AppExit));
