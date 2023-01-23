const URL_PREFIX = `https://ca1.qualtrics.com/API/v3`;
const headers = {
    'x-api-token': 'Q03b2dgJqGoYol41YclNsgOf64OdSgMoysRxOIm7',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}; 

const getAuth = async() => {
    const response = await fetch('https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/forms&client_id=528312503789-t8mt8v91ngvjsi67tm1ltlpu3ka4kdg0.apps.googleusercontent.com&redirect_uri=http://localhost:3000&response_type=token');
    return await response.json();
};

const getSurvey = async (surveyId) => {
    try {
        //const response = await fetch(`${URL_PREFIX}/surveys/${surveyId}`, {
        const response = await fetch(`${URL_PREFIX}/surveys/SV_6QpwvgxC7YRqSj4`, {
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
        const response = await fetch(`${URL_PREFIX}/surveys/${surveyId}/sessions`, {
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
        const response = await fetch(`${URL_PREFIX}/surveys/${surveyId}/sessions/${sessionId}`, {
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
        const response = await fetch(`${URL_PREFIX}/surveys/${surveyId}/sessions/${sessionId}`, {
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
    getAuth,
    getSurvey,
    startSurveySession,
    updateSurveySession,
    removeSurveySession
};

export default api;