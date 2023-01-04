import SurveySelection from "./SurveySelections/SurveySelection";
import BaseImage from "./BaseImage";

function App() {
  return (
    <div className="App">
      <div className="App__header">
        <BaseImage name="Logo" />
        <h1>Online Assessments</h1>
      </div>
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
