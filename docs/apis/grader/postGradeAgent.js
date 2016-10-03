var paramTypes = require("swagger-node-express").paramTypes;

module.exports = {
    spec: {
        description: "Realiza a associação de um Agent à uma Grade",
        path: "/grade/{idGrade}/agent/{idAgent}",
        method: "POST",
        summary: "Realiza a associação de um Agent à uma Grade",
        notes: "Realiza a associação de um Agent à uma Grade",
        type: "postGradeAgentResponse",
        nickname: "postGradeAgent",
        produces: ["application/json"],
        parameters: [paramTypes.path("idGrade", "Identificador da Grade", "string"),
                     paramTypes.path("idAgent", "Identificador do Agent", "string")],
        errorResponses: [
            {
                code: "200",
                reason: "Grade atualizada com sucesso",
                responseModel: "postEtiquetaResponse"
            },
            {
                code: "500",
                reason: "Erro ao atualizar etiqueta",
                responseModel: "errorResponse"
            }
        ]
    },
    action: function (req, res) {

        var etiqueta = {
                          "idEtiqueta": req.params.idEtiqueta
                       };
         if (req.params.idEtiqueta < 100){
                    // verifica se existe a propriedade  propostasVinculadas, ou seja, se mandou propstas vinculadas a etiqueta
                    if (req.body.hasOwnProperty('propostasVinculadas')){

                            if (req.body.propostasVinculadas.length == 0){
                              // não mandou nenhuma proposta vinculada. É obrigatório ao menos 1
                              res.status(500).send({
                                error: {
                                  code: "101",
                                  message: "Necessário informar ao menos 1 proposta vinculada!"
                                }
                              });
                            } else if (req.body.propostasVinculadas.length <= 5) {
                              // retorna com sucesso quando o número de propostas vinculadas for menor que 5
                               res.status(200).json(etiqueta);

                            } else {
                              // retorna com erro quando número de propostas for maior que 5
                              res.status(500).send({
                                error: {
                                  code: "102",
                                  message: "Número máximo de propostas para vincular é 5!"
                                }
                              });
                            }
                    } else {
                      res.status(500).send({
                        error: {
                          code: "101",
                          message: "Necessário informar ao menos 1 proposta vinculada!"
                        }
                      });
                    }
         } else {
           res.status(500).send({
             error: {
               code: "103",
               message: "Id de Etiqueta inválido!"
             }
           });

         }

    }


};
