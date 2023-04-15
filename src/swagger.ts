export const swagger = {
  openapi: "3.0.0",
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        in: "header",
        name: "Authorization",
        description: "Bearer token to access these api endpoints",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],

  info: {
    version: "1.0.0",
    title: "Can i Go Swagger",
    license: {
      name: "MIT",
      url: "https://opensource.org/licenses/MIT",
    },
  },
  servers: [
    {
      url: "/",
    },
  ],
  tags: [
    {
      name: "User",
      description: "API for users in the system",
    },
    {
      name: "Pass",
      description: "API for passes in the system",
    },
    {
      name: "Place",
      description: "API for places in the system",
    },
  ],
  consumes: ["application/json"],
  produces: ["application/json"],
  paths: {
    "/users": {
      post: {
        tags: ["User"],
        summary: "create user",
        requestBody: {
          description: "User Object",
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/definitions/User",
              },
            },
          },
        },
        responses: {
          "200": {
            description: "OK",
            schema: {
              $ref: "#/definitions/Users",
            },
          },
        },
      },
      get: {
        tags: ["User"],
        produces: ["application/json"],
        responses: {
          "200": {
            description: "OK",
            schema: {
              $ref: "#/definitions/User",
            },
          },
          "400": {
            description: "Failed. Bad post data.",
          },
        },
      },
    },
    "/auth": {
      post: {
        tags: ["User"],
        summary: "auth user",
        requestBody: {
          description: "User Object",
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/definitions/UserId",
              },
            },
          },
        },
        responses: {
          "200": {
            description: "OK",
            schema: {
              $ref: "#/definitions/Users",
            },
          },
        },
      },
    },
    "/users/{id}": {
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID of the user that we want to match",
          type: "string",
        },
      ],
      get: {
        tags: ["User"],
        summary: "Get user with given ID",
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            description: "User with id",
            schema: {
              $ref: "#/definitions/id",
            },
          },
        ],
        responses: {
          "200": {
            description: "OK",
            schema: {
              $ref: "#/definitions/User",
            },
          },
          "404": {
            description: "Failed. user not found.",
          },
        },
      },
      put: {
        summary: "Update user with given ID",
        tags: ["User"],
        requestBody: {
          description: "User Object",
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/definitions/User",
              },
            },
          },
        },
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            description: "User with new values of properties",
            schema: {
              $ref: "#/definitions/id",
            },
          },
        ],
        responses: {
          "200": {
            description: "OK",
            schema: {
              $ref: "#/definitions/User",
            },
          },
          "400": {
            description: "Failed. Bad post data.",
          },
          "404": {
            description: "Failed. Cat not found.",
          },
        },
      },
      delete: {
        summary: "Delete user with given ID",
        tags: ["User"],
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            description: "Delete User with id",
            schema: {
              $ref: "#/definitions/id",
            },
          },
        ],
        responses: {
          "200": {
            description: "OK",
            schema: {
              $ref: "#/definitions/id",
            },
          },
          "404": {
            description: "Failed. User not found.",
          },
        },
      },
    },
    "/user-by-place-id": {
      post: {
        tags: ["User"],
        summary: "check if a given user can access a given public space",
        requestBody: {
          description: "Object",
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/definitions/UserByPlaceId",
              },
            },
          },
        },
        responses: {
          "200": {
            description: "OK",
            schema: {
              $ref: "#/definitions/Users",
            },
          },
        },
      },
    },
    "/places-by-user-id": {
      post: {
        tags: ["User"],
        summary: "check which public spaces can access a given user",
        requestBody: {
          description: "Object",
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/definitions/UserId",
              },
            },
          },
        },
        responses: {
          "200": {
            description: "OK",
            schema: {
              $ref: "#/definitions/Users",
            },
          },
        },
      },
    },
    "/passes": {
      post: {
        tags: ["Pass"],
        summary: "create a pass",
        requestBody: {
          description: "Pass Object",
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/definitions/Pass",
              },
            },
          },
        },
        responses: {
          "200": {
            description: "OK",
            schema: {
              $ref: "#/definitions/Passes",
            },
          },
        },
      },
      get: {
        tags: ["Pass"],
        produces: ["application/json"],
        responses: {
          "200": {
            description: "OK",
            schema: {
              $ref: "#/definitions/Pass",
            },
          },
          "400": {
            description: "Failed. Bad post data.",
          },
        },
      },
    },
    "/passes/{id}": {
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID of the user that we want to match",
          type: "string",
        },
      ],
      get: {
        tags: ["Pass"],
        summary: "Get cat with given ID",
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            description: "Pass with id",
            schema: {
              $ref: "#/definitions/id",
            },
          },
        ],
        responses: {
          "200": {
            description: "OK",
            schema: {
              $ref: "#/definitions/Pass",
            },
          },
          "404": {
            description: "Failed. pass not found.",
          },
        },
      },
      put: {
        summary: "Update pass with given ID",
        tags: ["Pass"],
        requestBody: {
          description: "Pass Object",
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/definitions/Pass",
              },
            },
          },
        },
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            description: "pass with new values of properties",
            schema: {
              $ref: "#/definitions/id",
            },
          },
        ],
        responses: {
          "200": {
            description: "OK",
            schema: {
              $ref: "#/definitions/Pass",
            },
          },
          "400": {
            description: "Failed. Bad post data.",
          },
          "404": {
            description: "Failed. Pass not found.",
          },
        },
      },
      delete: {
        summary: "Delete pass with given ID",
        tags: ["Pass"],
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            description: "Delete Pass with id",
            schema: {
              $ref: "#/definitions/id",
            },
          },
        ],
        responses: {
          "200": {
            description: "OK",
            schema: {
              $ref: "#/definitions/id",
            },
          },
          "404": {
            description: "Failed. Pass not found.",
          },
        },
      },
    },
    "/places": {
      post: {
        tags: ["Place"],
        summary: "create a place",
        requestBody: {
          description: "Place Object",
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/definitions/Place",
              },
            },
          },
        },
        responses: {
          "200": {
            description: "OK",
            schema: {
              $ref: "#/definitions/Places",
            },
          },
        },
      },
      get: {
        tags: ["Place"],
        produces: ["application/json"],
        responses: {
          "200": {
            description: "OK",
            schema: {
              $ref: "#/definitions/Place",
            },
          },
          "400": {
            description: "Failed. Bad post data.",
          },
        },
      },
    },
    "/places/{id}": {
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID of the user that we want to match",
          type: "string",
        },
      ],
      get: {
        tags: ["Place"],
        summary: "Get cat with given ID",
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            description: "Pass with id",
            schema: {
              $ref: "#/definitions/id",
            },
          },
        ],
        responses: {
          "200": {
            description: "OK",
            schema: {
              $ref: "#/definitions/Place",
            },
          },
          "404": {
            description: "Failed. Place not found.",
          },
        },
      },
      put: {
        summary: "Update Place with given ID",
        tags: ["Place"],
        requestBody: {
          description: "Place Object",
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/definitions/Place",
              },
            },
          },
        },
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            description: "Place with new values of properties",
            schema: {
              $ref: "#/definitions/id",
            },
          },
        ],
        responses: {
          "200": {
            description: "OK",
            schema: {
              $ref: "#/definitions/Place",
            },
          },
          "400": {
            description: "Failed. Bad post data.",
          },
          "404": {
            description: "Failed. Place not found.",
          },
        },
      },
      delete: {
        summary: "Delete Place with given ID",
        tags: ["Place"],
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            description: "Delete Place with id",
            schema: {
              $ref: "#/definitions/id",
            },
          },
        ],
        responses: {
          "200": {
            description: "OK",
            schema: {
              $ref: "#/definitions/id",
            },
          },
          "404": {
            description: "Failed. Place not found.",
          },
        },
      },
    },
  },
  definitions: {
    id: {
      properties: {
        uuid: {
          type: "string",
        },
      },
    },
    Pass: {
      type: "object",
      properties: {
        passLevel: {
          type: "number",
        },
        levelDetails: {
          type: "string",
        },
      },
    },
    Passes: {
      type: "object",
      properties: {
        users: {
          type: "object",
          additionalProperties: {
            $ref: "#/definitions/Pass",
          },
        },
      },
    },
    Place: {
      type: "object",
      properties: {
        address: {
          type: "string",
        },
        phoneNumber: {
          type: "string",
        },
        minimumPassLevel: {
          type: "number",
        },
        minimumAge: {
          type: "number",
        },
        ownerId: {
          type: "string",
          default: "6432df088765b79d2dca3497",
        },
      },
    },
    Places: {
      type: "object",
      properties: {
        users: {
          type: "object",
          additionalProperties: {
            $ref: "#/definitions/Place",
          },
        },
      },
    },
    User: {
      type: "object",
      properties: {
        firstname: {
          type: "string",
        },
        lastname: {
          type: "string",
        },
        age: {
          type: "number",
        },
        phoneNumber: {
          type: "string",
        },
        address: {
          type: "string",
        },
        passId: {
          type: "string",
          default: "64343730f94829d1def60c4c",
        },
      },
    },
    UserByPlaceId: {
      type: "object",
      properties: {
        user_id: {
          type: "string",
          default: "6432df088765b79d2dca3497",
        },
        place_id: {
          type: "string",
          default: "6433ecc43b9a6a5d013703ba",
        },
      },
    },
    UserId: {
      type: "object",
      properties: {
        user_id: {
          type: "string",
          default: "6432df088765b79d2dca3497",
        },
      },
    },
    Users: {
      type: "object",
      properties: {
        users: {
          type: "object",
          additionalProperties: {
            $ref: "#/definitions/User",
          },
        },
      },
    },
  },
};
