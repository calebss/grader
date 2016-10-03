var paramTypes = require("swagger-node-express").paramTypes;

module.exports = {
    spec: {
        description: "Retorna o Agente da escala",
        path: "/agent/get/{id}",
        method: "GET",
        summary: "Retorna o Agente",
        notes: "Retorna o Agente",
        type: "getAgentResponse",
        nickname: "getAgent",
        produces: ["application/json"],
        parameters: [paramTypes.path("id", "Id do Agente", "int")],
        errorResponses: [
            {
                code: "200",
                reason: "Retorno OK"
            },
            {
                code: "400",
                reason: "Parametros invalidos",
                responseModel: "errorResponse"
            },
            {
                code: "404",
                reason: "Agente não encontrados",
                responseModel: "errorResponse"
            },
            {
                code: "500",
                reason: "Erro do servidor",
                responseModel: "errorResponse"
            }
        ]
    },
    action: function (req, res) {
        //TODO: Fazer o mock
        res.status(200).send({
			"agente" : {
				"name": "Theo",
				"availability": 0,
                "image": "http://lorempixel.com/output/people-q-g-400-400-4.jpg"
			}
        });
    }
};