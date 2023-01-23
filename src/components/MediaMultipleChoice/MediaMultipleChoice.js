import { useRef } from 'react';
import useSlide from '../../hooks/useSlide';
import MediaMultipleChoiceAnswer from '../MediaMultipleChoiceAnswer/MediaMultipleChoiceAnswer';
import QuestionText from '../QuestionText/QuestionText';
import './media-multiple-choice.css';

const MediaMultipleChoice = ({id, question, config, selectedAnswers, onSelect=()=>{}, multipleAnswersAccepted=false}) => {
    const containerEl = useRef(null);
    const findSelectedAnswer = id => selectedAnswers.find(answer => answer.id === id);
    const numRows = Array.from({ length: question.choices.length/2 }, (value, index) => index);
    const choicesArrayOfArrays = [];
    const choiceKeys = Object.keys(question.choices);
    useSlide('up', containerEl, id);

    for(let i = 0; i < choiceKeys.length; i=i+2){
        choicesArrayOfArrays.push([question.choices[i], question.choices[i+1]])
    }

    return (
        <div className="survey-media-multiple-choice" ref={containerEl}>
            <QuestionText question={question} config={config}/>
            
            { numRows.map ((row) => (
                <div className="survey-media-multiple-choice__row">
                    {choicesArrayOfArrays[row].map((answer, index) => (
                    <MediaMultipleChoiceAnswer 
                        key={answer.id} 
                        id={answer.id}
                        name={id}
                        choice={answer}
                        config={config[choiceKeys[index]]}
                        multipleAnswersAccepted={multipleAnswersAccepted}
                        selected={Array.isArray(selectedAnswers) ? findSelectedAnswer(answer.id) : selectedAnswers.id === answer.id}
                        onSelect={onSelect}/>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default MediaMultipleChoice;