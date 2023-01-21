import QuestionText from '../QuestionText/QuestionText';
import AnswerText from '../AnswerText/AnswerText';
import './text-multiple-choice.css';
import BaseImage from '../BaseImage/BaseImage';

const MultipleChoice = ({choice, selectedAnswers, onSelect=()=>{}, multipleAnswersAccepted=false}) => {
    const findSelectedAnswer = id => selectedAnswers.find(answer => answer.id === id);

    return (
        <div className="survey-multiple-choice">
            <QuestionText text={choice.question.text}/>
            {choice.question.mediaSrc && <BaseImage mediaSrc={choice.question.mediaSrc}/>}
        
            <div>
                {choice.choices.map(aChoice => (
                    <AnswerText 
                        key={aChoice.id} 
                        id={aChoice.id}
                        choice={aChoice}
                        name={`Q-${aChoice.id}`}
                        multipleAnswersAccepted={multipleAnswersAccepted}
                        selected={Array.isArray(selectedAnswers) ? findSelectedAnswer(aChoice.id) : selectedAnswers.id === aChoice.id}
                        onSelect={onSelect}
                     />
                ))}
            </div>
        </div>
    );
};

export default MultipleChoice;