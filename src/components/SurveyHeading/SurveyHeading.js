import GradesImage from '../GradesImage/GradesImage';
import LogoLink from '../Logo/LogoLink';
import './survey-heading.css';

const SurveyHeading = ({gradesImageName, title}) => {
    return (
        <div className="survey-heading">
            <LogoLink/>
            <div className="survey-heading__title">
                <h1>{title}</h1>
                <GradesImage name={gradesImageName}/>
            </div>
        </div>
    );
};

export default SurveyHeading;