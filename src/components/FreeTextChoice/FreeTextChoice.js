import QuestionText from '../QuestionText/QuestionText';
import './free-text-choice.css';

const FreeTextChoice = ({ question, config, response='', onAnswerChange=()=>{}}) => {

    return (<div className="survey-free-text-choice">
            <QuestionText question={question} config={config}/>
            <input id={question.questionId} type="text" value={response} onChange={e => onAnswerChange(question.questionId, question.type, e.target.value)} />
        </div>)
};

export default FreeTextChoice;