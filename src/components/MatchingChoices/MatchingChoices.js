import './matching-choices.css';
import QuestionText from '../QuestionText/QuestionText';
import QuestionAnswerMatch from '../QuestionAnswerMatch/QuestionAnswerMatch';
import MatchingAnswer from '../MatchingAnswer/MatchingAnswer';

const MatchingChoices = () => {
    return (
        <div className="matching-choices">
            <QuestionText text="What is the question?"/>
            <div className="matching-choices__rule">Please select only one answer</div>
            <div className="matching-choices__content">
                <div className="matching-choices__content_item">
                    <QuestionAnswerMatch text="Test 1"/>
                    <QuestionAnswerMatch text="Test 2"/>
                    <QuestionAnswerMatch text="Test 3"/>
                    <QuestionAnswerMatch text="Test 4"/>
                </div>
                <div className="matching-choices__content_item">
                    <MatchingAnswer text="A. Answer 1" hasError={false} errorMessage="Cannot be selected more than once"/> 
                    <MatchingAnswer text="B. Answer 2" hasError={false} errorMessage="Cannot be selected more than once"/> 
                    <MatchingAnswer text="C. Answer 3" hasError={false} errorMessage="Cannot be selected more than once"/> 
                    <MatchingAnswer text="D. Answer 4" hasError={false} errorMessage="Cannot be selected more than once"/> 
                </div>
            </div>
        </div>
    );
};

export default MatchingChoices;