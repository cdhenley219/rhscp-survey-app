import GradesImageLink from '../GradesImage/GradesImageLink';
import SurveySelectionImage from '../SurveySelectionImage/SurveySelectionImage';
import './survey-selection.css';

const SurveySelection = ({title, imageName, gradeKTo2SurveyId, grade3To5SurveyId, grade6To8SurveyId}) => {
    return (
        <div className="survey-selections-item">
            <div className="survey-selections-item__image">
                <SurveySelectionImage name={imageName} title={title}/>
            </div>

            <div className="survey-selections-item__links">
                <div className="survey-selections-item__links_title">Select an Assessment</div>
                <div className="survey-selections-item__links_content">
                        { gradeKTo2SurveyId && <GradesImageLink name="apple" url={ `/survey/${gradeKTo2SurveyId}`} /> }
                        { grade3To5SurveyId && <GradesImageLink name="blue_book" url={`/survey/${grade3To5SurveyId}`} /> }
                        { grade6To8SurveyId && <GradesImageLink name="board" url={`/survey/${grade6To8SurveyId}`} /> }

                </div>
            </div>
        </div>
    );
};

export default SurveySelection;