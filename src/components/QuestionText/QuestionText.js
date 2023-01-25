import BaseImage from '../BaseImage/BaseImage';
import BaseVideo from '../BaseVideo/BaseVideo';
import './question.css';

const QuestionText = ({question, config={}}) => {
   return ( <>
      <h2 className="survey-question">{question.questionText}</h2>
      <div className="survey-image"> {config.mediaSrc && <BaseImage name={config.mediaSrc} width={config.mediaSrcWidth} height={config.mediaSrcHeight}/>}</div>
      <div className="survey-image"> {config.mediaSrc1 && <BaseVideo name={config.mediaSrc1} width={config.mediaSrcWidth} height={config.mediaSrcHeight}/>}</div>
    </>)

};

export default QuestionText;