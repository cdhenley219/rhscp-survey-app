const URL_PREFIX = `https://ca1.qualtrics.com`;
const headers = {
    'x-api-token': 'Q03b2dgJqGoYol41YclNsgOf64OdSgMoysRxOIm7',
    'Content-Type': 'application/json'
}; 

const getSurvey = async (surveyId) => {
    try {
        const response = await fetch(`${URL_PREFIX}/API/v3/surveys/${surveyId}`, {
            headers
        });
        return await response.json();
    }
    catch (error) {
        console.log(error);
    }
};

const startSurveySession = async (surveyId) => {
    const body = JSON.stringify({
        language: 'EN'
    });    

    try {
        const response = await fetch(`${URL_PREFIX}/API/v3/surveys/${surveyId}/sessions`, {
            method: 'POST',
            headers,
            body
        });
    
        return await response.json();
    }
    catch (error) {
        console.log(error);
    }
};

const updateSurveySession = async (surveyId, sessionId, payload) => {
    // TODO: pass language, embeddedData, recipientId, and distributedId

    // const body = JSON.stringify({
    //     advance: true,
    //     embeddedData: {
    //         "edKey": "edValue",
    //         "customerName": "Kyle"
    //     },
    //     //close: false,
    //     responses: {
    //         "QID1715170247": {
    //             "1": {
    //               "selected": true,
    //               "text": "string"
    //             },
    //             "2": {
    //               "selected": false,
    //               "text": "string"
    //             }          
    //         }/*,
    //         'QID1715170248': 'baseball'*/
    //     }
    // });

    const body = JSON.stringify({
        close: true,
        //close: false,
        responses: {
            "QID1715170247": {
                "1": {
                  "selected": true,
                },
                "2": {
                  "selected": true,
                }
            },
            'QID1715170248': 'baseball',
            'QID1715170249': 'test',
            "QID1715170250": {
                "1": {
                  "selected": true,
                },
                "2": {
                  "selected": false,
                },
                "3": {
                    "selected": false,
                },
                "4": {
                    "selected": false,
                }
            },
            "QID1715170251": {
                "1": {
                  "selected": false,
                },
                "2": {
                  "selected": true,
                },
                "3": {
                    "selected": false,
                },
                "4": {
                    "selected": false,
                }
            },
            "QID1715170252": {
                "1": {
                  "selected": false,
                },
                "2": {
                  "selected": true,
                },
                "3": {
                    "selected": false,
                },
                "4": {
                    "selected": false,
                }
            },
            "QID1715170253": {
                "1": {
                  "selected": false,
                },
                "2": {
                  "selected": true,
                },
                "3": {
                    "selected": false,
                },
                "4": {
                    "selected": false,
                },
                "5": {
                    "selected": false,
                }
            },
            "QID1715170254": {
                "1": {
                  "selected": false,
                },
                "2": {
                  "selected": true,
                },
                "3": {
                    "selected": false,
                },
                "4": {
                    "selected": false,
                },
                "5": {
                    "selected": false,
                }
            },
            "QID1715170255": {
                "1": {
                  "selected": false,
                },
                "2": {
                  "selected": true,
                },
                "3": {
                    "selected": false,
                },
                "4": {
                    "selected": false,
                },
                "5": {
                    "selected": false,
                }
            },
            "QID1715170256": {
                "1": {
                  "selected": false,
                },
                "2": {
                  "selected": true,
                },
                "3": {
                    "selected": false,
                }
            },
            "QID1715170257": {
                "1": {
                  "selected": false,
                },
                "2": {
                  "selected": true,
                },
                "3": {
                    "selected": false,
                }
            },
            "QID1715170258": {
                "1": {
                  "selected": false,
                },
                "2": {
                  "selected": true,
                },
                "3": {
                    "selected": false,
                }
            },
            "QID1715170259": {
                "1": {
                  "selected": false,
                },
                "2": {
                  "selected": true,
                },
                "3": {
                    "selected": false,
                }
            }
        }
    });

    //  "body": "{\"advance\":true,\"embeddedData\":{\"edKey\":\"edValue\",\"customerName\":\"Kyle\"},\"responses\":{\"property1\":{\"property1\":{\"selected\":true,\"text\":\"string\"},\"property2\":{\"selected\":true,\"text\":\"string\"}},\"property2\":{\"property1\":{\"selected\":true,\"text\":\"string\"},\"property2\":{\"selected\":true,\"text\":\"string\"}}},\"close\":true}"
    try {
        const response = await fetch(`${URL_PREFIX}/API/v3/surveys/${surveyId}/sessions/${sessionId}`, {
            method: 'POST',
            headers,
            body
        });
    
        return await response.json();
    }
    catch (error) {
        console.log(error);
    }
};

const api = {
    getSurvey,
    startSurveySession,
    updateSurveySession
};

export default api;