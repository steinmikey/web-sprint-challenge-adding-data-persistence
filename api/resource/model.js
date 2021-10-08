const db = require("../../data/dbConfig");

async function getResources() {
  const results = await db("resources");
  const resources = results.map((resource) => {
    return {
      resource_id: resource.resource_id,
      resource_name: resource.resource_name,
      resource_description: resource.resource_description
    };
  });

  return resources;
}

async function createResource(resource) {
  const [id] = await db("resources").insert(resource);
  const [newResource] = await db("resources").where("resource_id", id);

  return newResource;
}

module.exports = {
  getResources,
  createResource
};
