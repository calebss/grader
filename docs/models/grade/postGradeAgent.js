exports.models = {
   
    "postGradeAgentResponse": {
        "id": "postGradeAgentResponse",
        "properties": {
            "retorno": {
                "$ref": "postGradeAgentResponseItem"
            }
        }
    },
    "postGradeAgentResponseItem": {
        "id": "postGradeAgentResponseItem",
        "properties": {
            "idGradeAgent": {
                "type": "number",
                "description": "Identificador do GradeAgent",
                "required": true
            }
        }
    }
};



