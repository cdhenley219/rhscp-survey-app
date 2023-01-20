import MediaMultipleChoiceAnswer from '../MediaMultipleChoiceAnswer/MediaMultipleChoiceAnswer';
import QuestionText from '../QuestionText/QuestionText';
import './media-multiple-choice.css';

const MediaMultipleChoice = ({choice, selectedAnswers, onSelect=()=>{}, multipleAnswersAccepted=false}) => {
   const findSelectedAnswer = id => selectedAnswers.find(answer => answer.id === id);
    const numRows = Array.from({ length: choice.choices.length/2 }, (value, index) => index);
    const choicesArrayOfArrays = [];
    for(let i = 0; i < choice.choices.length; i=i+2){
        choicesArrayOfArrays.push([choice.choices[i], choice.choices[i+1]])
    }

    return (
        <div className="survey-media-multiple-choice">
            <QuestionText text={choice.question.text}/>
            
            { numRows.map ((row) => (
                <div className="survey-media-multiple-choice__row" >
                    {choicesArrayOfArrays[row].map((answer, index) => (
                        <MediaMultipleChoiceAnswer 
                        key={answer.id} 
                        id={answer.id}
                        text={answer.text} 
                        value={answer.text}
                        name={answer.name}
                        mediaSrc={answer.mediaSrc}
                        multipleAnswersAccepted={multipleAnswersAccepted}
                        selected={Array.isArray(selectedAnswers) ? findSelectedAnswer(answer.id) : selectedAnswers.id === answer.id}
                        onSelect={onSelect}/>
                    ))}
                </div>
            ))}

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