const URL_PREFIX = `https://ca1.qualtrics.com`;
const headers = {
    'x-api-token': 'Q03b2dgJqGoYol41YclNsgOf64OdSgMoysRxOIm7',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
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
    // TODO: pass language, embeddedData, recipientId, and distributedId
    try {
        const response = await fetch(`${URL_PREFIX}/API/v3/surveys/${surveyId}/sessions`, {
            method: 'POST',
            headers
        });
    
        return await response.json();
    }
    catch (error) {
        console.log(error);
    }
};

const updateSurveySession = async (surveyId, sessionId) => {
    // TODO: pass language, embeddedData, recipientId, and distributedId
    try {
        const response = await fetch(`${URL_PREFIX}/API/v3/surveys/${surveyId}/sessions/${sessionId}`, {
            method: 'POST',
            headers
        });
    
        return await response.json();
    }
    catch (error) {
        console.log(error);
    }
};

const removeSurveySession = async (surveyId, sessionId) => {
    // TODO: pass language, embeddedData, recipientId, and distributedId
    try {
        const response = await fetch(`${URL_PREFIX}/API/v3/surveys/${surveyId}/sessions/${sessionId}`, {
            method: 'DELETE',
            headers
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
    updateSurveySession,
    removeSurveySession
};

export default api;