export const swagger = {
    "openapi": "3.0.0",
    "info": {
        "version": "1.0.0",
        "title": "Can i Go Swagger",
        "license": {
            "name": "MIT",
            "url": "https://opensource.org/licenses/MIT"
        }
    },
    "servers": [
        {
            "url": "/",
        },

    ],
    "tags": [
        {
            "name": "User",
            "description": "API for users in the system"
        }
    ],
    "consumes": [
        "application/json"
    ],
    "produces": [
        "application/json"
    ],
    "paths": {
        "/user": {
            "post": {
                "tags": [
                    "User"
                ],
                "summary": "cr all cats in system",
                "requestBody": {
                    "description": "User Object",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/definitions/Cat"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Cats"
                        }
                    }
                }
            },
            "get": {
                "tags": [
                    "Cats"
                ],
                "summary": "Create a new cat in system",
                "requestBody": {
                    "description": "Cat Object",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/definitions/Cat"
                            }
                        }
                    }
                },
                "produces": [
                    "application/json"
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/id"
                        }
                    },
                    "400": {
                        "description": "Failed. Bad post data."
                    }
                }
            }
        },
        "/cats/{id}": {
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "required": true,
                    "description": "ID of the cat that we want to match",
                    "type": "string"
                }
            ],
            "get": {
                "tags": [
                    "Cats"
                ],
                "summary": "Get cat with given ID",
                "parameters": [
                    {
                        "in": "path",
                        "name": "id",
                        "required": true,
                        "description": "Cat with id",
                        "schema": {
                            "$ref": "#/definitions/id"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Cat"
                        }
                    },
                    "404": {
                        "description": "Failed. Cat not found."
                    }
                }
            },
            "put": {
                "summary": "Update cat with given ID",
                "tags": [
                    "Cats"
                ],
                "requestBody": {
                    "description": "Cat Object",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/definitions/Cat"
                            }
                        }
                    }
                },
                "parameters": [
                    {
                        "in": "path",
                        "name": "id",
                        "required": true,
                        "description": "Cat with new values of properties",
                        "schema": {
                            "$ref": "#/definitions/id"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Cat"
                        }
                    },
                    "400": {
                        "description": "Failed. Bad post data."
                    },
                    "404": {
                        "description": "Failed. Cat not found."
                    }
                }
            },
            "delete": {
                "summary": "Delete cat with given ID",
                "tags": [
                    "Cats"
                ],
                "parameters": [
                    {
                        "in": "path",
                        "name": "id",
                        "required": true,
                        "description": "Delete Cat with id",
                        "schema": {
                            "$ref": "#/definitions/id"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/id"
                        }
                    },
                    "404": {
                        "description": "Failed. Cat not found."
                    }
                }
            }
        }
    },
    "definitions": {
        "id": {
            "properties": {
                "uuid": {
                    "type": "string"
                }
            }
        },
        "Cat": {
            "type": "object",
            "properties": {
                "firstname": {
                    "type": "string"
                },
                "lastname": {
                    "type": "string"
                },
                "age": {
                    "type": "number"
                },
                "phoneNumber": {
                    "type": "string"
                },
                "address": {
                    "type": "string"
                },
                "passId": {
                    "type": "string",
                    "default": "64343730f94829d1def60c4c"
                },
            }
        },
        "Cats": {
            "type": "object",
            "properties": {
                "cats": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/definitions/Cat"
                    }
                }
            }
        }
    }
}