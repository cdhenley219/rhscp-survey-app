const URL_PREFIX = `https://ca1.qualtrics.com`;
const headers = {
    'x-api-token': 'Q03b2dgJqGoYol41YclNsgOf64OdSgMoysRxOIm7',
    'Content-Type': 'application/json'
}; 

const startSurveySession = async (surveyId, uid) => {
    const body = JSON.stringify({
        language: 'EN'/*,
        embeddedData: {
            uid //could also be Q_UID, as that's how it'll be defined in Qualtrics
        }*/
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

const updateSurveySession = async (surveyId, sessionId, responses, close=false) => {
    const body = {};

    if (close === true) {
        body.close = true;
    }
    else {
        body.advance = true;
    }
    body.responses = responses;

    const payload = JSON.stringify(body);

    try {
        const response = await fetch(`${URL_PREFIX}/API/v3/surveys/${surveyId}/sessions/${sessionId}`, {
            method: 'POST',
            headers,
            body: payload
        });
        return await response.json();
    }
    catch (error) {
        console.log(error);
    }
};

const api = { startSurveySession, updateSurveySession };

export default api;