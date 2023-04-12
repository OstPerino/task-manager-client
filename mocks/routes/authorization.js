module.exports = [
  {
    id: "login-post",
    method: "POST",
    url: "/api/auth/login",
    variants: [
      {
        id: "success",
        type: "json",
        options: {
          status: 200,
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
