import { SURVEY_IDS } from "../data/constants";
import SurveySelectionsHeading from "../components/SurveySelectionsHeading/SurveySelectionsHeading";
import SurveySelection from "../components/SurveySelection/SurveySelection";

const SurveySelections = () => {
    return (
      <div className="survey-selections">
        <SurveySelectionsHeading />
        
        <div className="survey-selections__row">
            <SurveySelection title="Nutrition" imageName="nutrition"
                              gradeKTo2SurveyId={SURVEY_IDS['nutritionLiteracyKto2']}
                              grade3To5SurveyId={SURVEY_IDS['nutritionLiteracy3to5']}
                              grade6To8SurveyId={SURVEY_IDS['nutritionLiteracy6to8']}/>
            <SurveySelection title="Physical Activity" 
                              imageName="physical-activity" 
                              gradeKTo2SurveyId={SURVEY_IDS['physicalLiteracyKto2']}
                              grade3To5SurveyId={SURVEY_IDS['physicalLiteracy3to5']}
                              grade6To8SurveyId={SURVEY_IDS['physicalLiteracy6to8']}/>
          </div>
    
          <div className="survey-selections__row">
            <SurveySelection title="Food Frequency" imageName="child-eating"
                              gradeKTo2SurveyId={SURVEY_IDS['foodFrequencyKto2']}
                              grade3To5SurveyId={SURVEY_IDS['foodFrequency3to5']}
                              grade6To8SurveyId={SURVEY_IDS['foodFrequency6to8']}/>
          </div>
      </div>

    );
};

export default SurveySelections;