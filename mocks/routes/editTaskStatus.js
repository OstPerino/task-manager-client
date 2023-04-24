module.exports = [
  {
    id: "edit-task",
    method: "PATCH",
    url: "/api/tasks",
    variants: [
      {
        id: "success",
        type: "json",
        options: {
          status: 200,
        },
      },
      {
        id: "error",
        type: "json",
        options: {
          status: 401,
          body: { message: "Не получилось изменить поле" },
        },
      },
    ],
  },
];
