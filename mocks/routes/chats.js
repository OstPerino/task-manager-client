const chats = [
  {
    id: 1,
    name: "Nikita",
    surname: "Kucenko",
    messages: [
      {
        id: 1,
        content: "New text message",
        senderId: 3,
        receiverId: 2
      }
    ]
  },
  {
    id: 1,
    name: "Nikita",
    surname: "Kucenko",
    messages: [
      {
        id: 1,
        content: "New text message",
        senderId: 3,
        receiverId: 2
      }
    ]
  },
]

module.exports = [
  {
    id: "boards-get",
    method: "GET",
    url: "/api/chats/:id(\\d+)",
    variants: [
      {
        id: "success",
        type: "json",
        options: {
          status: 200,
          body: boards,
        },
      },
      {
        id: "error",
        type: "json",
        options: {
          status: 503,
          body: { message: "Доски не найдены" }
        }
      }
    ],
  },
]