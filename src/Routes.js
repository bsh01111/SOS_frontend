import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./login/pages/Login";
import Mypage from "./mypage/pages/mypage";
// import Signup from "./pages/Signup/Signup";
// import Main from "./pages/Main/Main";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/mypage" component={Mypage} />
          {/* <Route exact path="/signup" component={Signup} />
          <Route exact path="/main" component={Main} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
