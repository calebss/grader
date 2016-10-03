var express = require('express'),
    swagger = require('node-swagger-ui');

 
swagger(express()).configure({
    ip: undefined,
    port: process.env.PORT || 8002,
    headers: {
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization,	If-Modified-Since, Cache-Control, Pragma",
        "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
		"Access-Control-Allow-Credentials": "true"
    },
    models: [
        '/docs/models/**/*.js'
    ],
    apis: [
        '/docs/apis/**/*.js'
    ],
    swagger: {
        title: "Grader",
        description: "Gerador de escala dinâmica",
        termsOfServiceUrl: "",
        contact: "calebsantana@gmail.com",
        swaggerDoc: "api-docs",
        url: "/docs",
        version: "1.0.0"
    }
}).start();
