import './question-answer-match.css';

const QuestionAnswerMatch = ({text}) => {
    return (
        <div className="question-answer-match">
            <select>
                <option>Answer 1</option>
                <option>Answer 2</option>
                <option>Answer 3</option>
                <option>Answer 4</option>
            </select>
            {text}
        </div>
    );
};

export default QuestionAnswerMatch;