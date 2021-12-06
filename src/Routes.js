import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./login/pages/Login";
import SignUp from "./login/pages/SignUp";
import HelpList from "./helplist/pages/HelpList";
import ChattingRoomList from "./chatting/pages/chattingRoomList";
import UserList from "./chatting/pages/userList";
import HelpDetail from "./helpdetail/pages/HelpDetail";
import Mypage from "./mypage/pages/mypage";
import EditProfile from "./mypage/pages/editprofile";
import EditPost from "./mypage/pages/editpost";
// import Main from "./pages/Main/Main";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/helpList" component={HelpList} />
          <Route exact path="/helpDetail/:id" component={HelpDetail} />
          <Route exact path="/myPage" component={Mypage} />
          <Route exact path="/editProfile" component={EditProfile} />
          <Route exact path="/chattingRoomList" component={ChattingRoomList} />
          <Route exact path="/userList" component={UserList} />
          <Route exact path="/editPost" component={EditPost} />
          {/* <Route exact path="/signup" component={Signup} />
          <Route exact path="/main" component={Main} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
