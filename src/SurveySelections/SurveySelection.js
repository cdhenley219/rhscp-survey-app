import GradesImageLink from './GradesImageLink';
import SurveySelectionImage from './SurveySelectionImage';

const SurveySelection = ({title, imageName}) => {
    return (
        <div className="survey-selections-item">
            <div className="survey-selections-item__image">
                <SurveySelectionImage name={imageName} title={title}/>
            </div>
            <div className="survey-selections-item__links">
                <div className="survey-selections-item__links_title">Select an Assessment</div>
                <div className="survey-selections-item__links_content">
                    <GradesImageLink name="apple"/>
                    <GradesImageLink name="board"/>
                </div>
            </div>
        </div>
    );
};

export default SurveySelection;