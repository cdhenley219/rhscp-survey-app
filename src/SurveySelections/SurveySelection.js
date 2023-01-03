import GradesImage from '../GradesImage';
import SurveySelectionImage from './SurveySelectionImage';
import { Link } from "react-router-dom";


const SurveySelection = () => {
    return (
        <div className="survey-selections-item">
            <div className="survey-selections-item__image">
                <SurveySelectionImage id="1672679413278" title="Find the Foodie"/>
            </div>
            <div className="survey-selections-item__links">
                <Link to="/">
                    <GradesImage name="apple" />
                </Link>
                <Link to="/">
                    <GradesImage name="board" />
                </Link>
            </div>
        </div>
    );
};

export default SurveySelection;