const db = require("../../data/dbConfig");

function getTasks() {
  // [{"task_id":1,
  // "task_description":"baz",
  // "task_notes":null,"task_completed":false,
  // "project_name:"bar",
  // "project_description":null}]
}

function createTask(task) {
  // {"task_id":1,
  // "task_description":"baz",
  // "task_notes":null,
  // "task_completed":false,
  // "project_id":1}
}

module.exports = {
  getTasks,
  createTask
};
