import SurveySelections from "./SurveySelections/SurveySelections";
import SurveySelection from "./SurveySelections/SurveySelection";

function App() {
  return (
    <div className="App">
      <div className="survey-selections">
        <SurveySelection/>
        <SurveySelection/>
      </div>

      <div className="survey-selections">
        <SurveySelection/>
      </div>
    </div>
  );
}

export default App;
