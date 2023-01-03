import SurveySelections from "./SurveySelections/SurveySelections";
import SurveySelection from "./SurveySelections/SurveySelection";

function App() {
  return (
    <div className="App">
      <div className="survey-selections">
        <SurveySelection title="Nutrition" imageName="nutrition"/>
        <SurveySelection title="Physical Activity" imageName="physical-activity"/>
      </div>

      <div className="survey-selections">
        <SurveySelection title="Food Frequency" imageName="child-eating"/>
      </div>
    </div>
  );
}

export default App;
