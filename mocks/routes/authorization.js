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
          body: { token: "Bearer tokentokentoken" },
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
