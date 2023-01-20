import BaseImage from '../BaseImage/BaseImage';
import './question.css';

const QuestionText = ({text, mediaSrcWidth, mediaSrcHeight, mediaSrc }) => (
    <div>
        <h2 className="survey-question">{text}</h2>
        {mediaSrc && <BaseImage name={mediaSrc} style={{width: mediaSrcWidth || '100%', height: mediaSrcHeight || '100%'}}/>}
    </div>

);

export default QuestionText;