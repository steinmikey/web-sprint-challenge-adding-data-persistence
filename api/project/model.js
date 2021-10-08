const db = require("../../data/dbConfig");

async function getProjects() {
  const results = await db("projects");
  const projects = results.map((project) => {
    return {
      project_id: project.project_id,
      project_name: project.project_name,
      project_description: project.project_description,
      project_completed: !!project.project_completed
    };
  });

  return projects;
}

async function createProject(project) {
  const [id] = await db("projects").insert(project);
  const [newProject] = await db("projects").where("project_id", id);

  return {
    ...newProject,
    project_completed: !!newProject.project_completed
  };
}

module.exports = {
  getProjects,
  createProject
};
