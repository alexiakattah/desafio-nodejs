export default {
  openapi: "3.1.0",
  info: {
    title: "sistema de tarefas e projeto",
    description:
      "API para gerenciamento de tarefas e projetos onde usuarios podem criar tarefas e projetos e adicionar outros usuarios para trabalhar em conjunto.",
    version: "1.0.0",
    contact: {
      name: "Alexia kattah",
      email: "alexiakattah@gmail.com",
      url: "https://www.linkedin.com/in/alexiakattah",
    },
    license: {
      name: "GPL-3.0-or-later",
      url: "https://spdx.org/licenses/GPL-3.0-or-later.html",
    },
  },

  servers: [
    {
      url: "/api",
      description: "Servidor Principal",
    },
  ],
  tags: [
    {
      name: "Tarefas",
      description: "APIs relacionadas a Tarefas",
    },
    {
      name: "Projetos",
      description: "APIs relacionadas a Projetos",
    },
  ],
};
