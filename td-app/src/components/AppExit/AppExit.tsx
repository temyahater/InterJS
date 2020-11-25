import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { AppExitProps } from "../../models/interfaces";
import { auth } from "../../services/Firebase/Firebase";
import { userExitRequestAction } from "../../store/actions/user-exit-request";
import "./AppExit.css";

const AppExit = ({ history, userExit }: AppExitProps & RouteComponentProps) => {
  const handleExitClick = () => {
    if (window.confirm("Are you sure?")) {
      userExit(auth, history);
    }
  };

  return (
    <div className="app-exit">
      <button type="button" onClick={handleExitClick}>
        Exit
      </button>
    </div>
  );
};

function mapDispatchToProps(dispatch: any) {
  return { userExit: bindActionCreators(userExitRequestAction, dispatch) };
}

export default connect(null, mapDispatchToProps)(withRouter(AppExit));
