import MediaMultipleChoiceAnswer from '../MediaMultipleChoiceAnswer/MediaMultipleChoiceAnswer';
import QuestionText from '../QuestionText/QuestionText';
import './media-multiple-choice.css';

const MediaMultipleChoice = ({choice, selectedAnswers, onSelect=()=>{}, multipleAnswersAccepted=false}) => {
    const findSelectedAnswer = id => selectedAnswers.find(answer => answer.id === id);
    let numRows = Array.from({ length: choice.answers/2 }, (value, index) => index);

    console.log(choice.answers);

    return (
        <div className="survey-media-multiple-choice">
            <QuestionText text={choice.question.text}/>
            
            {/* {numRows.map(num => (
                 <div className="survey-media-multiple-choice__row">
                    {choice.answers.map((answer, index) => (
                        index/num.length === num && 
                        <MediaMultipleChoiceAnswer 
                            key={answer.id} 
                            id={answer.id}
                            text={answer.text} 
                            value={answer.text}
                            name={answer.name}
                            multipleAnswersAccepted={multipleAnswersAccepted}
                            selected={Array.isArray(selectedAnswers) ? findSelectedAnswer(answer.id) : selectedAnswers.id === answer.id}
                            onSelect={onSelect}/>
                    ))}
                 </div>
            ))} */}
        </div>
        
    );
};

export default MediaMultipleChoice;