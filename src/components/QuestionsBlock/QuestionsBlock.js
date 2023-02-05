import { useRef } from 'react';
import useSlide from '../../hooks/useSlide';
import TextMultipleChoice from '../TextMultipleChoice/TextMultipleChoice';
import FreeTextChoice from '../FreeTextChoice/FreeTextChoice';
//import MatchingChoices from '../components/MatchingChoices/MatchingChoices';
import MediaMultipleChoice from '../MediaMultipleChoice/MediaMultipleChoice';
import './survey-questions-block.css';

const QuestionsBlock = ({questions, config, responses, onAnswerSelect}) => {
    const containerEl = useRef(null);
    useSlide('left', containerEl, config.surveyId);

    const getQuestionComponent = (question, questionConfig) => {

        switch(question.type){
            case 'mc':
                if (questionConfig.isMediaMC) {
                   return  <MediaMultipleChoice key={question.questionId}
                                                question={question} 
                                                response={responses[question.questionId]}
                                                config={questionConfig} 
                                                onSelect={onAnswerSelect} />;
                }
                return <TextMultipleChoice key={question.questionId}
                                            question={question} 
                                            response={responses[question.questionId]}
                                            config={questionConfig} 
                                            onSelect={onAnswerSelect} />;

            case 'te': 
                 return <FreeTextChoice key={question.questionId}
                                        question={question} 
                                        response={responses[question.questionId]}
                                        config={questionConfig} 
                                        onAnswerChange={onAnswerSelect} /> 

            default: return null;
        }
    };



    return (
    <div className="survey-questions-block" ref={containerEl}>
        {questions.map(question => (
            getQuestionComponent(question, config[question.questionId])
        ))}
    </div>);
};

export default QuestionsBlock;