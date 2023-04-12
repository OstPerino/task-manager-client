module.exports = [
  {
    id: "check-auth-get",
    method: "GET",
    url: "/api/auth/check",
    variants: [
      {
        id: "success",
        type: "json",
        options: {
          status: 200,
          body: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
            firstName: "Nikita",
            lastName: "Kucenko",
            email: "kucenko.nikita@gmail.com"
          },
        },
      },
      {
        id: "error",
        type: "json",
        options: {
          status: 401,
          body: { message: "Токен просрочен" },
        },
      },
    ],
  },
];
