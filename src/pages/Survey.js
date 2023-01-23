import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SurveyHeading from '../components/SurveyHeading/SurveyHeading';
import SurveyFooter from '../components/SurveyFooter/SurveyFooter';
import TextMultipleChoice from '../components/TextMultipleChoice/TextMultipleChoice';
import FreeTextChoice from '../components/FreeTextChoice/FreeTextChoice';
import MatchingChoices from '../components/MatchingChoices/MatchingChoices';
import MediaMultipleChoice from '../components/MediaMultipleChoice/MediaMultipleChoice';
import {getData, getGradeImage,getDataWithConfig} from '../util/data';
import { surveyJson } from '../data/surveyJson';
import physicalLiteracy3to5Config from '../data/config/physicalLiteracy3to5';
import api from '../util/api';
import './pages.css';

const Survey = () => {
    const { surveyId } = useParams();
    const surveyData = getData(surveyId);
    const [selectedAnswer, setSelectedAnswer] = useState([]); 
    const [surveyQuestionIndex, setSurveyQuestionIndex] = useState(0);
    const currentChoice = surveyData.data[surveyQuestionIndex];

    getDataWithConfig(surveyJson, physicalLiteracy3to5Config);      

    const selectAnswer = (answerId, answerSelected, multipleAnswersAccepted) => {
        if (answerSelected) {
            const foundAnswer = currentChoice.choices.find(answer => answer.id === answerId); 
            currentChoice.multipleAnswersAccepted ? setSelectedAnswer([foundAnswer, ...selectedAnswer]) : setSelectedAnswer([foundAnswer]);
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
        switch(currentChoice.question.type){
            case 'MC':
                if (currentChoice.question.isMediaMC) {
                   return  <MediaMultipleChoice choice={currentChoice} onSelect={selectAnswer} selectedAnswers={selectedAnswer}/>;
                }
                return <TextMultipleChoice choice={currentChoice} onSelect={selectAnswer} selectedAnswers={selectedAnswer}/>;

            case 'TE': 
                 return <FreeTextChoice choice={currentChoice} value={selectedAnswer[0] || ''} onAnswerChange={e => setSelectedAnswer([e.target.value])}/> 

            default: return;
        }
    };

    useEffect(() => {  
        api.getSurvey();
    }, [surveyQuestionIndex]);

    return (
        <div className="survey">
            <SurveyHeading gradesImageName={getGradeImage(surveyData.grades)} title={surveyData.title}/>
            { getQuestionComponent() } 
            <SurveyFooter    
                goNext={goNext}
                goPrevious={goPrevious}             
                previousButtonShown={(surveyQuestionIndex > 0)}
                nextButtonShown={(surveyQuestionIndex < surveyData.data.length-1)}
                nextButtonDisabled={selectedAnswer.length === 0 || 
                                    (selectedAnswer.length === 1 && selectedAnswer[0] === '')}
                finishButtonShown={(surveyQuestionIndex === surveyData.data.length-1)} />
        </div>
    );
};

export default Survey;