import QuestionText from '../QuestionText/QuestionText';
import './fill-in-the-blank.css';

const FillInTheBlank = ({choice, value, onAnswerChange=()=>{} }) => {
   return (<div className="survey-fill-in-blank">
        <QuestionText text={choice.question.text}/>
        <input id="id" type="text" value={value} onChange={onAnswerChange}/>
    </div>)
};

export default FillInTheBlank;