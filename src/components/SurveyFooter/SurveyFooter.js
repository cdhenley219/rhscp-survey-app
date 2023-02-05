import { useNavigate } from 'react-router-dom';
import './survey-footer.css';

const SurveyFooter = ({ previousButtonShown=false, 
                        nextButtonShown=false, 
                        nextButtonDisabled=false,
                        finishButtonShown=false,
                        goNext=()=>{}, goPrevious=()=>{}, goFinish=()=>{}
                    }) => {
        const navigate = useNavigate();
        const handleFinish = () => {
            goFinish();
            navigate('/');
           // window.location.href = '/';
        };

        return (
        <div className="survey-footer">
            {previousButtonShown && <button className="go-button" onClick={goPrevious}>Previous</button>}
            {nextButtonShown && <button className="go-button" disabled={nextButtonDisabled} onClick={goNext}>Next</button>}
            {finishButtonShown && <button className="finish-button" onClick={handleFinish}>Finish</button>}
        </div>
    );
};

export default SurveyFooter;