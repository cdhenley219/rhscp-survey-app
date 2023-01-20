import QuestionText from '../QuestionText/QuestionText';
import './fill-in-the-blank.css';

const FillInTheBlank = ({choice, value, onAnswerChange=()=>{} }) => {
    console.log(value);
   return (<div className="survey-fill-in-blank">
        <QuestionText text={choice.question.text} mediaSrc={choice.question.mediaSrc} mediaSrcWidth={choice.question.mediaSrcWidth} mediaSrcHeight={choice.question.mediaSrcHeight}/>
        <input id="id" type="text" value={value} onChange={onAnswerChange}/>
    </div>)
};

export default FillInTheBlank;