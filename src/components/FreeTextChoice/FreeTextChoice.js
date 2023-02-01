import { useRef } from 'react';
import useSlide from '../../hooks/useSlide';
import QuestionText from '../QuestionText/QuestionText';
import './free-text-choice.css';

const FreeTextChoice = ({ question, config, response='', onAnswerChange=()=>{}}) => {
    const containerEl = useRef(null);
    useSlide('left', containerEl, question.questionId);

    return (<div className="survey-free-text-choice" ref={containerEl}>
            <QuestionText question={question} config={config}/>
            <input id={question.questionId} type="text" value={response} onChange={e => onAnswerChange(question.questionId, question.type, e.target.value)} />
        </div>)
};

export default FreeTextChoice;