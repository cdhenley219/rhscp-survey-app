import { useEffect, useState } from 'react';
import SurveyHeading from '../components/SurveyHeading/SurveyHeading';
import MultipleChoice from '../components/MultipleChoice/MultipleChoice';
import nutritionLiteracyKto2Data from '../data/nutritionLiteracyKto2';
import './pages.css';

const Survey = () => {
    const [selectedAnswer, setSelectedAnswer] = useState([]); 
    const [surveyQuestionIndex, setSurveyQuestionIndex] = useState(0);
    const surveyData = nutritionLiteracyKto2Data;
    const currentChoice = surveyData.data[surveyQuestionIndex];


    const selectAnswer = (answerId, answerSelected, multipleAnswersAccepted) => {
        if (answerSelected) {
            const foundAnswer = currentChoice.answers.find(answer => answer.id === answerId); 
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
            case 'MC+':
                return <MultipleChoice choice={currentChoice} 
                                        onSelect={selectAnswer} 
                                        selectedAnswers={selectedAnswer}
                                        multipleAnswersAccepted/>;

            default: 
                return <MultipleChoice choice={currentChoice} onSelect={selectAnswer} selectedAnswers={selectedAnswer}/>;
        }
    };

    useEffect(() => {  
        
    }, [surveyQuestionIndex]);

    return (
        <div className="survey">
            <SurveyHeading gradesImageName="apple" title={surveyData.title}/>
            { getQuestionComponent() }
            {/* <FillInTheBlank questionText="Is this a legit question?" onAnswerChange={e => setSelectedAnswer(e.target.value)}/> */}
            <div className="go-buttons">
                {(surveyQuestionIndex > 0) && <button className="go-button" onClick={goPrevious}>Previous</button>}
                {(surveyQuestionIndex < surveyData.data.length-1) && <button className="go-button" disabled={selectedAnswer.length === 0} onClick={goNext}>Next</button>}
            </div>
           
           {(surveyQuestionIndex === surveyData.data.length-1) && <button className="finish-button">Finish</button>}
        </div>
    );
};

export default Survey;