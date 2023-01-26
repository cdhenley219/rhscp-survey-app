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
        language: 'EN',
        embeddedData:{}
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

    const body = JSON.stringify({
        advance: true,
        embeddedData: {},
        //close: true,
        responses: {
            "QID1715170247": {
                "1": {
                  "selected": true,
                  text: "Yes"
                },
          
                "2": {
                  "selected": false,
                  text: "No"
                }          
            },
            'QID1715170248': 'baseball'
        }
    });

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