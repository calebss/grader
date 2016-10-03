exports.models = {
    "getAgentResponse": {
        "id": "getAgentResponse",
        "properties": {
			"agent": {
				"$ref": "getAgenteCertificadoResponseItem"
			}
        }
    },
	"getAgenteCertificadoResponseItem": {
		"id": "getAgenteCertificadoResponseItem",
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
	}
};