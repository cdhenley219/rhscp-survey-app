import BaseImage from '../BaseImage/BaseImage';
import './question.css';

const QuestionText = ({text, mediaSrcWidth, mediaSrcHeight, mediaSrc }) => {
   return ( <>
        <h2 className="survey-question">{text}</h2>
        {mediaSrc && <BaseImage name={mediaSrc} width={mediaSrcWidth} height={mediaSrcHeight}/>}
    </>)

};

export default QuestionText;