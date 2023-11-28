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
  components: {
    schemas: {
      error: {
        type: "object",
        properties: {
          message: {
            type: "string",
          },
          // Add other properties as needed
        },
      },
      project: {
        type: "object",
        properties: {
          id: {
            type: "string",
          },
          name: {
            type: "string",
          },
          description: {
            type: "string",
          },
          // Add other properties as needed
        },
      },
      task: {
        type: "object",
        properties: {
          id: {
            type: "string",
          },
          title: {
            type: "string",
          },
          description: {
            type: "string",
          },
          members: {
            type: "array",
            items: {
              type: "string",
            },
          },
          tags: {
            type: "array",
            items: {
              type: "string",
            },
          },
          projectId: {
            type: "string",
          },
          status: {
            type: "string",
          },
          // Add other properties as needed
        },
      },
      user: {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          email: {
            type: "string",
          },
          password: {
            type: "string",
          },
        },
      },
      login: {
        type: "object",
        properties: {
          email: {
            type: "string",
          },
          password: {
            type: "string",
          },
        },
      },
    },
  },
  paths: {
    "/tasks": {
      post: {
        tags: ["Tarefas"],
        summary: "Cria uma nova tarefa",
        description: "Cria uma nova tarefa",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/task",
              },
            },
          },
        },
        responses: {
          "201": {
            description: "Tarefa criada com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/task",
                },
              },
            },
          },
          "400": {
            description: "Erro na requisição",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/error",
                },
              },
            },
          },
        },
      },
      get: {
        tags: ["Tarefas"],
        summary: "Retorna todas as tarefas",
        description: "Retorna todas as tarefas",
        responses: {
          "200": {
            description: "Tarefas retornadas com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/task",
                },
              },
            },
          },
          "400": {
            description: "Erro na requisição",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/error",
                },
              },
            },
          },
        },
      },
    },
    "/tasks/{id}": {
      get: {
        tags: ["Tarefas"],
        summary: "Retorna uma tarefa",
        description: "Retorna uma tarefa",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "id da tarefa",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          "200": {
            description: "Tarefa retornada com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/task",
                },
              },
            },
          },
          "400": {
            description: "Erro na requisição",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/error",
                },
              },
            },
          },
        },
      },
    },
    "/projects": {
      post: {
        tags: ["Projetos"],
        summary: "Cria um novo projeto",
        description: "Cria um novo projeto",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/project",
              },
            },
          },
        },
        responses: {
          "201": {
            description: "Projeto criado com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/project",
                },
              },
            },
          },
          "400": {
            description: "Erro na requisição",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/error",
                },
              },
            },
          },
        },
      },
      get: {
        tags: ["Projetos"],
        summary: "Retorna todos os projetos",
        description: "Retorna todos os projetos",
        responses: {
          "200": {
            description: "Projetos retornados com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/project",
                },
              },
            },
          },
          "400": {
            description: "Erro na requisição",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/error",
                },
              },
            },
          },
        },
      },
    },
    "/users/": {
      post: {
        tags: ["Usuarios"],
        summary: "Cria um novo usuario",
        description: "Cria um novo usuario",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/user",
              },
            },
          },
        },
        responses: {
          "201": {
            description: "Usuario criado com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/user",
                },
              },
            },
          },
          "400": {
            description: "Erro na requisição",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/error",
                },
              },
            },
          },
        },
      },
    },
    "/users/auth": {
      post: {
        tags: ["Usuarios"],
        summary: "Faz login de um usuario",
        description: "Faz login de um usuario",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/login",
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Usuario logado com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/user",
                },
              },
            },
          },
          "400": {
            description: "Erro na requisição",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/error",
                },
              },
            },
          },
        },
      },
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
    {
      name: "Usuarios",
      description: "APIs relacionadas a Usuarios",
    },
  ],
};
