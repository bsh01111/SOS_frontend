import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./login/pages/Login";
import SignUp from "./login/pages/SignUp";
import HelpList from "./helplist/pages/HelpList";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/helpList" component={HelpList} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
