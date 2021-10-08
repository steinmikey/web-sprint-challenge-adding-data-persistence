const db = require("../../data/dbConfig");

async function getTasks() {
  const results = await db("tasks")
    .leftJoin("projects", "projects.project_id", "tasks.project_id")
    .select(
      "tasks.task_id",
      "tasks.task_description",
      "tasks.task_notes",
      "tasks.task_completed",
      "projects.project_name",
      "projects.project_description"
    );
  const tasks = results.map((task) => {
    return {
      task_id: task.task_id,
      task_description: task.task_description,
      task_notes: task.task_notes,
      task_completed: !!task.task_completed,
      project_name: task.project_name,
      project_description: task.project_description
    };
  });

  return tasks;
}

async function createTask(task) {
  const [id] = await db("tasks").insert(task);
  const [newTask] = await db("tasks").where("task_id", id);
  console.log("id", id, "newTask", newTask);
  return {
    ...newTask,
    task_completed: !!newTask.task_completed
  };
}

module.exports = {
  getTasks,
  createTask
};
