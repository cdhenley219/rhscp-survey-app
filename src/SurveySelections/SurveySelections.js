import { useEffect, useState } from "react";
import api from "../util/api";


const SurveySelections = ({children}) => {
    const surveyId = 'SV_8kRwK5pTAjlqpcq';
    const [survey, setSurvey] = useState(null);
    console.log(survey);

    useEffect(() => {
        const getGoogleAuth = async () => {
            await api.getAuth();
        };
        //getGoogleAuth();
        /*const getSurveyData = async (id) => {
            const surveyData = await api.getSurvey(id);
            setSurvey(surveyData.result);
        };
        getSurveyData(surveyId);*/
    }, []);

    return (
        <div className="survey-selections">{children}</div> 
    );
};

export default SurveySelections;