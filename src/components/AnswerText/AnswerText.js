import BaseImage from '../BaseImage/BaseImage';
import './answer-text.css';

const AnswerText = ({ choice, selected=false, multipleAnswersAccepted=false, onSelect=()=>{}, ...rest }) => {
    const handleChange = e => {
        onSelect(e.target.id, e.target.checked, multipleAnswersAccepted);
    };

    return (
    <div className={'answer-text' + (selected ? ' text--selected': '')} 
            style={{
                'background': choice.backgroundColor, 
                'color': choice.textColor, 
                'border': `1px solid ${choice.textColor}`}}>
        {choice.mediaSrc && <BaseImage name={choice.mediaSrc}/>}
        
    <div>
        <input id={rest.id} type="checkbox" name={rest.name} value={rest.value} checked={selected} onChange={handleChange} onClick={handleChange}/> 
        <label htmlFor={rest.id}>{choice.text}</label>
    </div>

    </div>
    );
};

export default AnswerText;