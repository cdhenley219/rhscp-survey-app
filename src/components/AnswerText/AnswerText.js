import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BaseImage from '../BaseImage/BaseImage';
import './answer-text.css';

const AnswerText = ({ choice, config={}, selected=false, multipleAnswersAccepted=false, onSelect=()=>{}, ...rest }) => {
    const handleChange = e => {
        onSelect(e.target.id, e.target.checked, multipleAnswersAccepted);
    };

    return (
    <div className={'answer-text' + (selected ? ' text--selected': '')} 
            style={{
                'background-color': config.backgroundColor ? config.backgroundColor: 'blue', 
                'color': config.textColor ? config.textColor : 'white', 
                'border': config.textColor ? `1px solid ${config.textColor}`: 'blue'}}>
        {config.mediaSrc && <BaseImage name={config.mediaSrc}/>}
        
    <div>
        <input id={rest.id} type="checkbox" name={rest.name} value={rest.value} checked={selected} onChange={handleChange} onClick={handleChange}/> 
        { config.icon && <FontAwesomeIcon icon={`fa-solid fa-${config.icon}`} style={{color: config.iconColor ? config.iconColor: 'white'}}  /> }
        <label htmlFor={rest.id}>{choice.choiceText}</label>
    </div>

    </div>
    );
};

export default AnswerText;