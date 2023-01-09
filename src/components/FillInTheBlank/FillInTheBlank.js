import QuestionText from '../QuestionText/QuestionText';
import './fill-in-the-blank.css';

const FillInTheBlank = ({questionText='', onAnswerChange=()=>{} }) => {
   return (<div className="survey-fill-in-blank">
        <QuestionText text={questionText}/>
        <input id="id" type="text" onChange={onAnswerChange}/>
    </div>)
};

export default FillInTheBlank;