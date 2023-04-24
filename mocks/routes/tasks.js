const tasks = [
  {
    id: 1,
    title: "Task 1",
    description: "Task 1",
    status: "NOT_STARTED"
  },
  {
    id: 2,
    title: "Task 2",
    description: "Task 2",
    status: "NOT_STARTED"
  },
  {
    id: 3,
    title: "Task 3",
    description: "Task 3",
    status: "ACTIVE"
  },
  {
    id: 4,
    title: "Task 4",
    description: "Task 4",
    status: "ACTIVE"
  },
  {
    id: 5,
    title: "Task 5",
    description: "Task 5",
    status: "DONE"
  }
];

module.exports = [
  {
    id: "tasks-get",
    method: "GET",
    url: "/api/tasks",
    variants: [
      {
        id: "success",
        type: "json",
        options: {
          status: 200,
          body: tasks,
        },
      },
    ],
  },
  {
    id: "tasks-get",
    method: "GET",
    url: "/api/tasks/:id(\\d+)",
    variants: [
      {
        id: "success",
        type: "middleware",
        options: {
          middleware(req, res) {
            res.send(
              tasks.find((item) => item.id === Number(req.params.id))
            );
          },
        },
      },
    ],
  },
];