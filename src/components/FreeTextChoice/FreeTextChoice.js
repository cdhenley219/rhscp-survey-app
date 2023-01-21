import QuestionText from '../QuestionText/QuestionText';
import './free-text-choice.css';

const FreeTextChoice = ({choice, value, onAnswerChange=()=>{} }) => {
   return (<div className="survey-free-text-choice">
        <QuestionText text={choice.question.text}/>
        <input id="id" type="text" value={value} onChange={onAnswerChange}/>
    </div>)
};

export default FreeTextChoice;