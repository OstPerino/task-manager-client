const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description 1",
    boards: [
      {
        title: "Board 1",
        description: "Description of board 1",
        tasks: [
          {
            title: "Task 1",
            description: "Task description"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description 2",
    boards: [
      {
        title: "Board 1",
        description: "Description of board 1",
        tasks: [
          {
            title: "Task 1",
            description: "Task description"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description 3",
    boards: [
      {
        title: "Board 1",
        description: "Description of board 1",
        tasks: [
          {
            title: "Task 1",
            description: "Task description"
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Project 4",
    description: "Description 4",
    boards: [
      {
        title: "Board 1",
        description: "Description of board 1",
        tasks: [
          {
            title: "Task 1",
            description: "Task description"
          }
        ]
      }
    ]
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
