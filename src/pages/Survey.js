import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SurveyHeading from '../components/SurveyHeading/SurveyHeading';
import SurveyFooter from '../components/SurveyFooter/SurveyFooter';
import TextMultipleChoice from '../components/TextMultipleChoice/TextMultipleChoice';
import FreeTextChoice from '../components/FreeTextChoice/FreeTextChoice';
//import MatchingChoices from '../components/MatchingChoices/MatchingChoices';
import MediaMultipleChoice from '../components/MediaMultipleChoice/MediaMultipleChoice';
import {getGradeImage, getConfig} from '../util/data';
import api from '../util/api';
import './pages.css';

const Survey = () => {
    const { surveyId } = useParams();
    const [selectedAnswer, setSelectedAnswer] = useState([]); 
    const [surveyQuestionIndex, setSurveyQuestionIndex] = useState(0);
    const [data, setData] = useState(null);
    const config = getConfig(surveyId);
    
    const questionIdsList = (data && data.result) ? Object.keys(data.result.questions) : [];
    const numberOfQuestions =  questionIdsList.length;
    const currentQuestion = (data && data.result) ? data.result.questions[questionIdsList[surveyQuestionIndex]] : null;
    const currentConfig = config[questionIdsList[surveyQuestionIndex]];

    console.log(data);
    const selectAnswer = (answerId, answerSelected, multipleAnswersAccepted) => {
        const choiceKeys = Object.keys(currentQuestion.choices);
        if (answerSelected) {
            const foundAnswer = choiceKeys.find(key => key === answerId);
            currentConfig.multipleAnswersAccepted ? setSelectedAnswer([foundAnswer, ...selectedAnswer]) : setSelectedAnswer([foundAnswer]);
        }
        else {
            const selectedAnswersClone = [...selectedAnswer];
            const foundIndex = selectedAnswersClone.findIndex(answer => answer.id === answerId);
            selectedAnswersClone.splice(foundIndex,1);
            multipleAnswersAccepted ? setSelectedAnswer(selectedAnswersClone) : setSelectedAnswer([]);
        }
    };

    const goNext = () => {
        setSurveyQuestionIndex(surveyQuestionIndex+1);
        setSelectedAnswer([]);
    };

    const goPrevious = () => {
        setSurveyQuestionIndex(surveyQuestionIndex-1);
        setSelectedAnswer([]);
    };

    const getQuestionComponent = () => {
        switch(currentQuestion.questionType.type){
            case 'MC':
                if (currentConfig.isMediaMC) {
                   return  <MediaMultipleChoice id={questionIdsList[surveyQuestionIndex]} 
                                                question={currentQuestion} 
                                                config={currentConfig} 
                                                onSelect={selectAnswer} 
                                                selectedAnswers={selectedAnswer}/>;
                }
                return <TextMultipleChoice id={questionIdsList[surveyQuestionIndex]} 
                                            question={currentQuestion} 
                                            config={currentConfig} 
                                            onSelect={selectAnswer} 
                                            selectedAnswers={selectedAnswer}/>;

            case 'TE': 
                 return <FreeTextChoice id={questionIdsList[surveyQuestionIndex]} 
                                        question={currentQuestion} 
                                        config={currentConfig} 
                                        value={selectedAnswer[0] || ''}
                                        onAnswerChange={e => setSelectedAnswer([e.target.value])}/> 

            default: return null;
        }
    };

    useEffect(() => {  
        const getSurveyData = async () => {
            const resp = await api.getSurvey(surveyId);
            setData(resp);
        };
        getSurveyData();
    }, [surveyId]);

    /*useEffect(() => {
        const question = (data && data.result) ? data.result.questions[questionIdsList[surveyQuestionIndex]] : null;

    }, [surveyQuestionIndex]);*/

    return (
        <div className="survey">
            <SurveyHeading gradesImageName={getGradeImage(config.grades)} title={config.title}/>
            {currentQuestion && getQuestionComponent() } 
            <SurveyFooter    
                goNext={goNext}
                goPrevious={goPrevious}             
                previousButtonShown={(surveyQuestionIndex > 0)}
                nextButtonShown={(surveyQuestionIndex < numberOfQuestions-1)}
                nextButtonDisabled={selectedAnswer.length === 0 || 
                                    (selectedAnswer.length === 1 && selectedAnswer[0] === '')}
                finishButtonShown={(surveyQuestionIndex === numberOfQuestions-1)} />
        </div>
    );
};

export default Survey;