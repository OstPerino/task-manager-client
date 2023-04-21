module.exports = [
  {
    id: "login-post",
    method: "POST",
    url: "/api/auth/get",
    variants: [
      {
        id: "success",
        type: "json",
        options: {
          status: 201,
          body: {
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
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
          body: { message: "Неверное имя пользователя или пароль" },
        },
      },
    ],
  },
];
