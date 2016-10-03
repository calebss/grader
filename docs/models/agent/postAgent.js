exports.models = {
    "postAgentRequest": {
        "id": "postAgentRequest",
        "properties": {
			"agenteCertificado": {
				"$ref": "postAgentRequestItem"
			}
        }
    },
	"postAgentRequestItem": {
        "id": "postAgentRequestItem",
        "properties": {
			 "name": {
                "type": "string"
            },
            "availability": {
                "type": "number"
            },
            "image": {
                "type": "string"
            }
        }
    },
    "postAgentResponse": {
        "id": "postAgentResponse",
        "properties": {
            "retorno": {
                "$ref": "postAgentResponseItem"
            }
        }
    },
    "postAgentResponseItem": {
        "id": "postAgentResponseItem",
        "properties": {
            "idSchedule": {
                "type": "number",
                "description": "Identificador do Schedule",
                "required": false
            }
        }
    }
};