import { useRef } from 'react';
import useSlide from '../../hooks/useSlide';
import QuestionText from '../QuestionText/QuestionText';
import './free-text-choice.css';

const FreeTextChoice = ({id, question, config={}, value, onAnswerChange=()=>{}}) => {
    const containerEl = useRef(null);
    useSlide('left', containerEl, id);

    return (<div className="survey-free-text-choice" ref={containerEl}>
            <QuestionText question={question} config={config}/>
            <input id={id} type="text" value={value} onChange={onAnswerChange}/>
        </div>)
};

export default FreeTextChoice;