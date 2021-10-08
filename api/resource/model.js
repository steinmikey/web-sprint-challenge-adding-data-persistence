const db = require("../../data/dbConfig");

async function getResources() {
  // [{"resource_id":1,
  // "resource_name":"foo",
  // "resource_description":null}]
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
  // {"resource_id":1,
  // "resource_name":"foo",
  // "resource_description":null}
  const [id] = await db("resources").insert(resource);
  const [newResource] = await db("resources").where("resource_id", id);

  return newResource;
}

module.exports = {
  getResources,
  createResource
};
