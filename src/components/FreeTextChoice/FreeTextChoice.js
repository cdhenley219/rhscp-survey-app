import { useRef } from 'react';
import useSlide from '../../hooks/useSlide';
import QuestionText from '../QuestionText/QuestionText';
import './free-text-choice.css';

const FreeTextChoice = ({choice, value, onAnswerChange=()=>{} }) => {
    const containerEl = useRef(null);
    useSlide('left', containerEl, choice);

    return (<div className="survey-free-text-choice" ref={containerEl}>
            <QuestionText text={choice.question.text}/>
            <input id="id" type="text" value={value} onChange={onAnswerChange}/>
        </div>)
};

export default FreeTextChoice;