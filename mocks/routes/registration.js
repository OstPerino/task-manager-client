module.exports = [
  {
    id: "register-post",
    method: "POST",
    url: "/api/auth/registration",
    variants: [
      {
        id: "success",
        type: "json",
        options: {
          status: 200,
          body: { message: "User registered successfully" },
        },
      },
      {
        id: "error",
        type: "json",
        options: {
          status: 400,
          body: { message: "Invalid registration data" },
        },
      },
    ],
  },
];
