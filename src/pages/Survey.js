import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SurveyHeading from '../components/SurveyHeading/SurveyHeading';
import SurveyFooter from '../components/SurveyFooter/SurveyFooter';
import QuestionsBlock from '../components/QuestionsBlock/QuestionsBlock';
import MatchingChoices from '../components/MatchingChoices/MatchingChoices';
import {getGradeImage, getConfig} from '../util/data';
import api from '../util/api';
import './pages.css';

const Survey = () => {
    const navigate = useNavigate();
    const { surveyId } = useParams();
    const config = getConfig(surveyId);
    const [sessionId, setSessionId] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [responses, setResponses] = useState({});
    const [surveyDone, setSurveyDone] = useState(false);
    const responseKeys = Object.keys(responses);

    const startSession = async (uid) => {
        if (!sessionId) {
            const getResponse =  await api.startSurveySession(surveyId, uid);
            setSessionId(getResponse.result.sessionId);
    
            const updateResponse = await api.updateSurveySession(surveyId, getResponse.result.sessionId, {});
            setQuestions(updateResponse.result.questions);
            setResponses(updateResponse.result.responses);
        }
    };

    const updateSession = async (close=false) => {
        const updateResponse = await api.updateSurveySession(surveyId, sessionId, responses, close);
        setQuestions(updateResponse.result.questions);
        setResponses(updateResponse.result.responses);
        setSurveyDone(updateResponse.result.done);
    };

    const goNext = () => {
        updateSession();
    };

    const goPrevious = () => {
        //TBD
    };

    const goFinish = () => {
        updateSession(true);
    };

    const selectAnswer = (questionId, questionType, answer) => {
        let responseAnswer;

        switch(questionType) {
            case 'mc':
                responseAnswer = {
                    [answer]: { selected: true }
                };
                break;
            case 'te':
                responseAnswer = answer;
                break;
            default: break;
        }

        setResponses({
            ...responses,
            [questionId]: responseAnswer
        });
    };

    useEffect(() => {  
        if (localStorage.getItem('survUid')) {
            startSession(localStorage.getItem('survUid'));
            localStorage.removeItem('survUid');
        }
        else {
            //window.location.href = `registration/${surveyId}`;
            navigate(`/registration/${surveyId}`);
        }
        
    }, [surveyId]);

    return (
        <div className="survey">
            <SurveyHeading 
                gradesImageName={getGradeImage(config.grades)} 
                title={config.title}/>

            {/* <MatchingChoices/> */}
            <QuestionsBlock 
                questions={questions} 
                config={config} 
                responses={responses} 
                onAnswerSelect={selectAnswer} />
                

            <SurveyFooter    
                goNext={goNext}
                goPrevious={goPrevious}
                goFinish={goFinish}             
                previousButtonShown={true}
                nextButtonShown={!surveyDone}
                nextButtonDisabled={questions.length !== responseKeys.length}
                finishButtonShown={surveyDone} />
        </div>
    );
};

export default Survey;