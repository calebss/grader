var paramTypes = require("swagger-node-express").paramTypes;

module.exports = {
    spec: {
        description: "Preencher as Preferencias",
        path: "/grade/postPreferencies/",
        method: "POST",
        summary: "Adiciona as Preferencies",
        notes: "Adiciona as Preferencies",
        type: "postGradeResponse",
        nickname: "postGrade",
        produces: ["application/json"],
        parameters: [paramTypes.body("postGradePreferenciesRequest", "Grupo com os dados das Preferencies", "postGradePreferenciesRequest")],
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
                reason: "Grade não encontrados",
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
         var grade = {
            "idGradePreferencies": 1
        };

        res.status(200).json(grade);
    }
};