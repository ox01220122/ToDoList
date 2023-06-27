const express = require("express");
const controller = require("../controller/index");
const router = express.Router();

// GET localhost:8000/todo/
router.get("/todos", controller.CgetTodo);
// // POST localhost:8000/todo/
router.post("/todo", controller.CpostTodo);
// // PATCH localhost:8000/todo/:todoId
router.patch("/todo/:todoId", controller.CpatchTodo);
// // DELETE localhost:8000/todo/:todoId
router.delete("/todo/:todoId", controller.CdeleteTodo);

module.exports = router;
