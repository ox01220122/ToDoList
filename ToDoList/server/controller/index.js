const db = require("../models");
const Todo = db.Todo;

// (GET) show all todo
exports.CgetTodo = (req, res) => {
  Todo.findAll().then((result) => {
    console.log(result);
    res.send(result);
  });
};

// (POST) create a new todo
exports.CpostTodo = (req, res) => {
  const { title, done } = req.body;
  Todo.create({
    title: title,
    done: done,
  }).then((result) => {
    res.send(result);
  });
};

// (PATCH) edit a specific todo
exports.CpatchTodo = (req, res) => {
  let todoId = req.params.todoId;
  //여기로 데이터 받아오기
  Todo.update({ title: "수정완료" }, { where: { id: todoId } }).then(
    (result) => {
      res.send({ data: result });
    }
  );
};

// (DELETE) remove a specific todo
exports.CdeleteTodo = (req, res) => {
  let todoId = req.params.todoId;
  console.log(todoId);
  Todo.destroy({ where: { id: todoId } }).then((result) => {
    res.send({ data: result });
  });
};
