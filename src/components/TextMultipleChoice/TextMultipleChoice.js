import { useRef } from 'react';
import useSlide from '../../hooks/useSlide';
import QuestionText from '../QuestionText/QuestionText';
import AnswerText from '../AnswerText/AnswerText';
import './text-multiple-choice.css';

const MultipleChoice = ({id, name, question, config={}, selectedAnswers, onSelect=()=>{}, multipleAnswersAccepted=false}) => {
    const findSelectedAnswer = id => selectedAnswers.find(answer => answer === id);
    const containerEl = useRef(null);
    const choiceKeys = Object.keys(question.choices);
    useSlide('left', containerEl, id);
    
    return (
        <div className="survey-multiple-choice" ref={containerEl}>
            <QuestionText question={question} config={config}/>
        
            <div>
                {
                    choiceKeys.map(choiceId => (
                        <AnswerText 
                            key={choiceId} 
                            id={choiceId} 
                            choice={question.choices[choiceId]}
                            config={config[choiceId]}
                            name={name}
                            multipleAnswersAccepted={multipleAnswersAccepted}
                            selected={Array.isArray(selectedAnswers) ? findSelectedAnswer(choiceId) : selectedAnswers.id === choiceId}
                            onSelect={onSelect}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default MultipleChoice;