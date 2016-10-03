
exports.models = {
    "postGradePreferenciesRequest": {
        "id": "postGradePreferenciesRequest",
        "properties": {
			"grade": {
				"$ref": "postGradePreferenciesRequestItem"
			}
        }
    },
	"postGradePreferenciesRequestItem": {
        "id": "postGradePreferenciesRequestItem",
        "properties": {

            "agentPreference": [
                {
                    "activityPreference":[
	                    {
	                    	"idActivity": {
	                        	"type": "number"
		                    },
		                    "disposal": {
		                        "type": "number"
		                    }
		                }
                    ]
                }
            ]
        }
    },
    "postGradePreferenciesResponse": {
        "id": "postGradePreferenciesResponse",
        "properties": {
            "retorno": {
                "$ref": "postGradePreferenciesResponseItem"
            }
        }
    },
    "postGradePreferenciesResponseItem": {
        "id": "postGradePreferenciesResponseItem",
        "properties": {
            "idGradePreferencies": {
                "type": "number",
                "description": "Identificador do GradePreferencies",
                "required": true
            }
        }
    }
};