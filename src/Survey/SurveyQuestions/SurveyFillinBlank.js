import SurveyQuestion from '../SurveyQuestion';

const SurveyFillinBlank = () => {
    return (
        <div className="survey-question-type">
            <SurveyQuestion text="What is the question?"/>
            <div className="input-group">
                <input type="text" className="form-control" />
            </div>
            
            
        </div>
    );
};

export default SurveyFillinBlank;