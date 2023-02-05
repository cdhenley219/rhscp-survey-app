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
                    <GradesImageLink name="apple" url={gradeKTo2SurveyId ? `/registration/${gradeKTo2SurveyId}` : '/'} />
                    <GradesImageLink name="blue_book" url={grade3To5SurveyId ? `/registration/${grade3To5SurveyId}` : '/'} />
                    <GradesImageLink name="board" url={grade6To8SurveyId ? `/registration/${grade6To8SurveyId}` : '/'} />

                </div>
            </div>
        </div>
    );
};

export default SurveySelection;