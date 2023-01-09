import { useState } from 'react';
import './answer-text.css';

const AnswerText = ({ text, imageSrc='', selected=false, multipleAnswersAccepted=false, onSelect=()=>{},
                      textColor='black', backgroundColor='white', ...rest }) => {
    const handleChange = e => {
        onSelect(e.target.id, e.target.checked, multipleAnswersAccepted);
    };

    return (
    <div className={'answer-text' + (selected ? ' text--selected': '')} 
            style={{
                'background': backgroundColor, 
                'color': textColor, 
                'border': `1px solid ${textColor}`}}>
        <input id={rest.id} type="checkbox" name={rest.name} value={rest.value} checked={selected} onChange={handleChange} onClick={handleChange}/> 
        <label htmlFor={rest.id}>{text}</label>
    </div>
    );
};

export default AnswerText;