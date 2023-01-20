import BaseImage from "../BaseImage/BaseImage"; 
import './media-multiple-choice-answer.css';
const MediaMultipleChoiceAnswer = ({ text, mediaSrc='', selected=false, multipleAnswersAccepted=false, onSelect=()=>{}, ...rest }) => {
    const handleChange = e => {
        onSelect(e.target.id, e.target.checked, multipleAnswersAccepted);
    };

    return (
    <div className={'survey-media-multiple-choice-answer' + (selected ? ' choice--selected': '') }>
        <label htmlFor="id">{text}</label>
        <BaseImage name="Logo"/>
        <input id={rest.id} type="checkbox" name={rest.name} onChange={handleChange} onClick={handleChange} /> 
    </div>
    );
};

export default MediaMultipleChoiceAnswer;