import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SurveyHeading from '../components/SurveyHeading/SurveyHeading';
import SurveyFooter from '../components/SurveyFooter/SurveyFooter';
import QuestionsBlock from '../components/QuestionsBlock/QuestionsBlock';
import {getGradeImage, getConfig} from '../util/data';
import api from '../util/api';
import './pages.css';

const Survey = () => {
    const { surveyId } = useParams();
    const config = getConfig(surveyId);
    const [sessionId, setSessionId] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [responses, setResponses] = useState({});
    const [surveyDone, setSurveyDone] = useState(false);
    const responseKeys = Object.keys(responses);

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
        const startSession = async () => {
            if (!sessionId) {
                const getResponse =  await api.startSurveySession(surveyId);
                setSessionId(getResponse.result.sessionId);
        
                const updateResponse = await api.updateSurveySession(surveyId, getResponse.result.sessionId, {});
                setQuestions(updateResponse.result.questions);
                setResponses(updateResponse.result.responses);
            }
        };
        startSession();
    }, [surveyId, sessionId]);

    return (
        <div className="survey">
            <SurveyHeading 
                gradesImageName={getGradeImage(config.grades)} 
                title={config.title}/>

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