var paramTypes = require("swagger-node-express").paramTypes;

module.exports = {
    spec: {
        description: "Adiciona um Agent",
        path: "/agent/postAgent/",
        method: "POST",
        summary: "Adiciona um Agent em uma Grade",
        notes: "VAdiciona um Agent em uma Grade",
        type: "postAgentResponse",
        nickname: "postAgent",
        produces: ["application/json"],
        parameters: [paramTypes.body("postAgentRequest", "Grupo com os dados do Agent para inserção na Grade", "postAgentRequest")],
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
                reason: "Agent não encontrados",
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
        
        var agent = {
            "idAgent": 1
        };

        res.status(200).json(agent);
    }
};