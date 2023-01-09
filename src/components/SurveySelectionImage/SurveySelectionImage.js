import BaseImage from "../BaseImage/BaseImage";
import './survey-selection-image.css';

const SurveySelectionImage = ({name, title}) => (
    <div className="survey-selection-image">
        <div className="survey-selection-image__title">{title}</div>
        <BaseImage name={name} />
    </div>
);

export default SurveySelectionImage;