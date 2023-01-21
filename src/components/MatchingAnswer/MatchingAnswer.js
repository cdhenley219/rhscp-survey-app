import './matching-answer.css';
const MatchingAnswer = ({text, hasError=false, errorMessage}) => {
    return (
        <div className="matching-answer">
            <p className="matching-answer__text">{text}</p>
            {hasError && <p className="matching-answer__error">{errorMessage}</p>}
        </div>
    );
};

export default MatchingAnswer;