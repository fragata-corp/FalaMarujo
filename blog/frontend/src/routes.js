import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import UserForm from "./pages/UserForm";
import Login from "./pages/Login";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/users" component={UserList} />
        <Route exact path="/users/create" component={UserForm} />
        <Route exact path="/users/edit/:id" component={UserForm} />
      </Switch>
    </BrowserRouter>
  );
}
