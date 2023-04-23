const boards = [
  {
    id: 1,
    title: "Board 1",
    description: "Description 1",
    // contributors: [
    //   {
    //     name: "Nikita",
    //     surname: "Kucenko",
    //     email: "kucenko.nikita@mail.ru"
    //   }
    // ]
  },
  {
    id: 2,
    title: "Board 2",
    description: "Description 2",
    // contributors: [
    //   {
    //     name: "Nikita",
    //     surname: "Kucenko",
    //     email: "kucenko.nikita@mail.ru"
    //   }
    // ]
  },
  {
    id: 3,
    title: "Board 3",
    description: "Description 3",
    // contributors: [
    //   {
    //     name: "Nikita",
    //     surname: "Kucenko",
    //     email: "kucenko.nikita@mail.ru"
    //   }
    // ]
  },
  {
    id: 4,
    title: "Board 4",
    description: "Description 4",
    // contributors: [
    //   {
    //     name: "Nikita",
    //     surname: "Kucenko",
    //     email: "kucenko.nikita@mail.ru"
    //   }
    // ]
  }
]

module.exports = [
  {
    id: "boards-get",
    method: "GET",
    url: "/api/boards/:id(\\d+)",
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