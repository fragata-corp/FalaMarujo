const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");
const PostController = require("./controllers/PostController");

//User
routes.get("/users", UserController.index);
routes.get("/users/:id", UserController.show); //id do post
routes.post("/users", UserController.store); //id do usuario que fez o post
routes.put("/users/:id", UserController.update); //id do post
routes.delete("/users/:id", UserController.destroy); //id do post

//Post
routes.get("/posts", PostController.index);
routes.get("/posts/:id", PostController.show); //id do post
routes.post("/posts/:id", PostController.store); //id do usuario que fez o post
routes.put("/posts/:id", PostController.update); //id do post
routes.delete("/posts/:id", PostController.destroy); //id do post

module.exports = routes;
