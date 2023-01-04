import SurveyQuestion from './SurveyQuestion';

const SurveyRadioChoice = () => {
    return (
        <div className="survey-question-type">
            <SurveyQuestion text="What is the question?"/>
        
            <div className="survey-question-type__choice">
                <button className="survey-question-type__choice_button">Answer</button>
                <input type="radio" id="answer" name="answer" value="" hidden/>
            </div>
            
        </div>
    );
};

export default SurveyRadioChoice;