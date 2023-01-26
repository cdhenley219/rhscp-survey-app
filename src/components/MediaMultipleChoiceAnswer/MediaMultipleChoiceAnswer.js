import BaseImage from "../BaseImage/BaseImage"; 
import BaseVideo from '../BaseVideo/BaseVideo';
import './media-multiple-choice-answer.css';
const MediaMultipleChoiceAnswer = ({ choice, config, text, mediaSrc='', selected=false, multipleAnswersAccepted=false, onSelect=()=>{}, ...rest }) => {
    const handleChange = e => {
        onSelect(e.target.id, e.target.checked, multipleAnswersAccepted);
    };

    return (
    <div className={'survey-media-multiple-choice-answer' + (selected ? ' choice--selected': '')}>
        {/* <label htmlFor="id">{text}</label> */}
        <BaseImage name={config.mediaSrc}/>
        <input id={rest.id} type="checkbox" value={choice.choiceText} name={rest.name} onChange={handleChange} onClick={handleChange} /> 
    </div>
    );
};

export default MediaMultipleChoiceAnswer;