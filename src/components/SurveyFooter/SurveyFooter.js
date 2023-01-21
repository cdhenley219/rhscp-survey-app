import './survey-footer.css';

const SurveyFooter = ({ previousButtonShown=false, 
                        nextButtonShown=false, 
                        nextButtonDisabled=false,
                        finishButtonShown=false,
                        goNext=()=>{}, goPrevious=()=>{}
                    }) => {
    return (
        <div className="survey-footer">
            {previousButtonShown && <button className="go-button" onClick={goPrevious}>Previous</button>}
            {nextButtonShown && <button className="go-button" disabled={nextButtonDisabled} onClick={goNext}>Next</button>}
            {finishButtonShown && <a href="/" className="finish-button">Finish</a>}
        </div>
    );
};

export default SurveyFooter;