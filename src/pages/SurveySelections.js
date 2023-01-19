import SurveySelectionsHeading from "../components/SurveySelectionsHeading/SurveySelectionsHeading";
import SurveySelection from "../components/SurveySelection/SurveySelection";

const SurveySelections = () => {
    return (
      <div className="survey-selections">
        <SurveySelectionsHeading />
        
        <div className="slide-up">
          <div className="survey-selections__row">
            <SurveySelection title="Nutrition" imageName="nutrition"/>
            <SurveySelection title="Physical Activity" 
                              imageName="physical-activity" 
                              gradeKTo2SurveyId="1"
                              grade3To5SurveyId="2"
                              grade6To8SurveyId="3"/>
          </div>
    
          <div className="survey-selections__row">
            <SurveySelection title="Food Frequency" imageName="child-eating"/>
          </div>
        </div>

      </div> 
    );
};

export default SurveySelections;