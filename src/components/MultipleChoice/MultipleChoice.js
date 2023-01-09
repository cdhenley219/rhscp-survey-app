import QuestionText from '../QuestionText/QuestionText';
import AnswerText from '../AnswerText/AnswerText';
import './multiple-choice.css';

const MultipleChoice = ({choice, selectedAnswers, onSelect=()=>{}, multipleAnswersAccepted=false}) => {
    const findSelectedAnswer = id => selectedAnswers.find(answer => answer.id === id);

    return (
        <div className="survey-multiple-choice">
            <QuestionText text={choice.question.text}/>
            <div>
                {choice.answers.map(answer => (
                    <AnswerText 
                        key={answer.id} 
                        id={answer.id}
                        text={answer.text} 
                        value={answer.text}
                        name={answer.name}
                        multipleAnswersAccepted={multipleAnswersAccepted}
                        selected={Array.isArray(selectedAnswers) ? findSelectedAnswer(answer.id) : selectedAnswers.id === answer.id}
                        onSelect={onSelect}
                        backgroundColor={answer.backgroundColor} 
                        textColor={answer.textColor} />
                ))}
            </div>
        </div>
    );
};

export default MultipleChoice;