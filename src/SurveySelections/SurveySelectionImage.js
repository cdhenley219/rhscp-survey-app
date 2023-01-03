import BaseImage from "../BaseImage";

const SurveySelectionImage = ({id, title}) => (
    
    <div className="survey-selection-image">
        <div className="survey-selection-image__title">{title}</div>
        <BaseImage name="nutrition" />
    </div>

);

export default SurveySelectionImage;