import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import UserForm from "./pages/UserForm";
import Login from "./pages/Login";
import PostList from "./pages/PostList";
import Post from "./pages/Post";
import Dashboard from "./pages/Dashboard";
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dash" component={Dashboard} />

        <Route exact path="/users" component={UserList} />
        <Route exact path="/users/create" component={UserForm} />
        <Route exact path="/users/edit/:id" component={UserForm} />

        <Route exact path="/posts/list" component={PostList} />
        <Route exact path="/posts/:id" component={Post} />
      </Switch>
    </BrowserRouter>
  );
}
