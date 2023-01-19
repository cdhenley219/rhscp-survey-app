import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SurveyHeading from '../components/SurveyHeading/SurveyHeading';
import MultipleChoice from '../components/MultipleChoice/MultipleChoice';
import FillInTheBlank from '../components/FillInTheBlank/FillInTheBlank';
import MediaMultipleChoice from '../components/MediaMultipleChoice/MediaMultipleChoice';
import {getData, getGradeImage} from '../util/data';
import './pages.css';

const Survey = () => {
    let { surveyId } = useParams();
    const surveyData = getData(surveyId);
    const [selectedAnswer, setSelectedAnswer] = useState([]); 
    const [surveyQuestionIndex, setSurveyQuestionIndex] = useState(0);
    const currentChoice = surveyData.data[surveyQuestionIndex];

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
                //if (currentChoice.question.isMediaMC) {
                   // return  <MediaMultipleChoice choice={currentChoice} onSelect={selectAnswer} selectedAnswers={selectedAnswer}/>;
                //}
                return <MultipleChoice choice={currentChoice} onSelect={selectAnswer} selectedAnswers={selectedAnswer}/>;

            case 'TE': 
                 return <FillInTheBlank choice={currentChoice} value={selectedAnswer[0]} onAnswerChange={e => setSelectedAnswer([e.target.value])}/> 
        }
    };

    useEffect(() => {  
        
    }, [surveyQuestionIndex]);

    return (
        <div className="survey">
            <SurveyHeading gradesImageName={getGradeImage(surveyData.grades)} title={surveyData.title}/>
            {getQuestionComponent() }
            <div className="go-buttons">
                {(surveyQuestionIndex > 0) && <button className="go-button" onClick={goPrevious}>Previous</button>}
                {(surveyQuestionIndex < surveyData.data.length-1) && <button className="go-button" disabled={selectedAnswer.length === 0} onClick={goNext}>Next</button>}
                {(surveyQuestionIndex === surveyData.data.length-1) && <a href="/" className="finish-button">Finish</a>}
            </div>
        </div>
    );
};

export default Survey;