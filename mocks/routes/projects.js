const projects = [
  {
    id: 1,
    name: "Project 1",
    description: "Description 1",
  },
  {
    id: 2,
    name: "Project 2",
    description: "Description 2",
  },
  {
    id: 3,
    name: "Project 3",
    description: "Description 3",
  },
];

module.exports = [
  {
    id: "projects-get",
    method: "GET",
    url: "/api/projects",
    variants: [
      {
        id: "success",
        type: "json",
        options: {
          status: 200,
          body: projects,
        },
      },
    ],
  },
  {
    id: "project-get",
    method: "GET",
    url: "/api/projects/:id(\\d+)",
    variants: [
      {
        id: "success",
        type: "middleware",
        options: {
          middleware(req, res) {
            res.send(
              projects.find((item) => item.id === Number(req.params.id))
            );
          },
        },
      },
    ],
  },
];
