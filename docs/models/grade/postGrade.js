exports.models = {
    "postGradeRequest": {
        "id": "postGradeRequest",
        "properties": {
			"grade": {
				"$ref": "postGradeRequestItem"
			}
        }
    },
	"postGradeRequestItem": {
        "id": "postGradeRequestItem",
        "properties": {
           
			"schedule": [
                {
                    "name": {
                        "type": "string"
                    },
                    "time": {
                        "type": "number"
                    },
                    "activities":[
                        {
                            "name":{
                                "type": "string"
                            },
                            "order": {
                                "type": "number"
                            }
                        }
                    ]
                }
            ]
        }
    },
    "postGradeResponse": {
        "id": "postGradeResponse",
        "properties": {
            "retorno": {
                "$ref": "postGradeResponseItem"
            }
        }
    },
    "postGradeResponseItem": {
        "id": "postGradeResponseItem",
        "properties": {
            "idGrade": {
                "type": "number",
                "description": "Identificador do Grade",
                "required": true
            }
        }
    }
};