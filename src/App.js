import React, { Fragment } from "react";
import { Route, Switch } from "react-router";
import {Link, useLocation} from "react-router-dom";

import Header from "./common/Header";
import CardList from "./home/CardList";
import User from "./user/User";
import NotFound from "./common/NotFound";

function App() {
  /*
    TODO: There is no need to add a <Router >, it is in index.js.

    The <CardList /> component should be shown when the user is on the index path.

    The <User /> component should be shown when the user is on the following path:
    /users/:userId

    Display <NotFound /> when appropriate
  */
  console.log("render App");
  const location=useLocation();
  return (
    <Fragment>
      <Header />
      <Switch>
          <Route path="/" exact={true}>
            <CardList />
          </Route>
          <Route path={"/users/:userId"}>
            <User />
          </Route>
          <Route>
            <NotFound />
          </Route>
      </Switch>
      
    </Fragment>
  );
}

export default App;
