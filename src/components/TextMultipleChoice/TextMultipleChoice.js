import QuestionText from '../QuestionText/QuestionText';
import AnswerText from '../AnswerText/AnswerText';
import './text-multiple-choice.css';

const TextMultipleChoice = ({question, response={}, config, onSelect, /*selectedAnswers, onSelect=()=>{},*/ multipleAnswersAccepted=false}) => {
    return (
        <div className="survey-multiple-choice">
            <QuestionText question={question} config={config}/>
        
            <div>
                {
                    question.choices.map(choice => (
                        <AnswerText 
                            key={choice.choiceId} 
                            id={choice.choiceId} 
                            question={question}
                            choice={choice}
                            config={config[choice.choiceId]}
                            multipleAnswersAccepted={multipleAnswersAccepted}
                            onSelect={onSelect}
                            selected={response[choice.choiceId] && response[choice.choiceId].selected === true}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default TextMultipleChoice;