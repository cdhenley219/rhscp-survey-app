import BaseImage from '../BaseImage/BaseImage';
import './question.css';

const QuestionText = ({choice }) => {
   return ( <>
        <h2 className="survey-question">{choice.question.text}</h2>
       <div class="survey-image"> {choice.question.mediaSrc && <BaseImage name={choice.question.mediaSrc} width={choice.question.mediaSrcWidth} height={choice.question.mediaSrcHeight}/>}</div>
    </>)

};

export default QuestionText;