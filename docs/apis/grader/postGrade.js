var paramTypes = require("swagger-node-express").paramTypes;

module.exports = {
    spec: {
        description: "Adiciona uma Grade",
        path: "/grade/postGrade/",
        method: "POST",
        summary: "Adiciona uma Grade",
        notes: "Adiciona uma Grade",
        type: "postGradeResponse",
        nickname: "postGrade",
        produces: ["application/json"],
        parameters: [paramTypes.body("postGradeRequest", "Grupo com os dados da Grade", "postGradeRequest")],
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
            "idGrade": 1
        };

        res.status(200).json(grade);
    }
};
