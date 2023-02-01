import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BaseImage from '../BaseImage/BaseImage';
import BaseVideo from '../BaseVideo/BaseVideo';
import './answer-text.css';

const AnswerText = ({ question, choice, config, selected=false, onSelect=()=>{}, multipleAnswersAccepted=false, ...rest }) => {
    const handleChange = e => {
        onSelect(question.questionId, question.type, e.target.id, multipleAnswersAccepted);
    };

    return (
    <div className={'answer-text' + (selected ? ' text--selected': '')} 
            style={{
                'backgroundColor': config.backgroundColor ? config.backgroundColor: 'blue', 
                'color': config.textColor ? config.textColor : 'white', 
                'border': config.textColor ? `1px solid ${config.textColor}`: 'blue'}}>
        {config.mediaSrc && <BaseImage name={config.mediaSrc}/>}
        {config.mediaSrc1 && <BaseVideo name={config.mediaSrc1}/>}
        
    <div>
        <input id={choice.choiceId} type="checkbox" name={choice.display} checked={selected} onChange={handleChange} onClick={handleChange}/> 
        { config.icon && <FontAwesomeIcon icon={`fa-solid fa-${config.icon}`} style={{color: config.iconColor ? config.iconColor: 'white'}}  /> }
        <label htmlFor={choice.choiceId}>{choice.display}</label>
    </div>

    </div>
    );
};

export default AnswerText;