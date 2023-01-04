import GradesImage from '../GradesImage';

const SurveyHeading = ({gradesImageName}) => {
    return (
        <div className="survey-heading">
            <h1>Nutrition Literacy Assessment</h1>
            <GradesImage name={gradesImageName}/>
        </div>
    );
};

export default SurveyHeading;