import physicalLiteracy3to5 from '../data/physicalLiteracy3to5';
import physicalLiteracy6to8 from '../data/physicalLiteracy6to8';
import physicalLiteracyKto2 from '../data/physicalLiteracyKto2';

export const getData = (surveyId) => {
    switch(surveyId) {
        case '1': return physicalLiteracyKto2;
        case '2': return physicalLiteracy3to5;
        case '3': return physicalLiteracy6to8;
        default: return [];
    }
}

export const getDataWithConfig = (data, config) => {
    const { result } = data;
    const { questions } = result;

    const dataWithConfig = {
        id: result.id,
        name: result.name,
        questions: {}
    };

    for (let questionId in questions) {
        dataWithConfig.questions[questionId] = questions[questionId];
        dataWithConfig.questions[questionId].mediaSrc = config[questionId]? config[questionId].mediaSrc : null;
        dataWithConfig.questions[questionId].mediaSrcWidth = config[questionId] ? config[questionId].mediaSrcWidth: null;
        dataWithConfig.questions[questionId].mediaSrcHeight = config[questionId] ? config[questionId].mediaSrcHeight : null;

        if (dataWithConfig.questions[questionId].choices) {

            for (let choiceId in dataWithConfig.questions[questionId].choices) {
                dataWithConfig.questions[questionId].choices[choiceId].mediaSrc = (config[questionId] && config[questionId][choiceId]) ? config[questionId][choiceId].mediaSrc : null;
                dataWithConfig.questions[questionId].choices[choiceId].textColor = (config[questionId] && config[questionId][choiceId]) ? config[questionId][choiceId].textColor : null;
                dataWithConfig.questions[questionId].choices[choiceId].backgroundColor = (config[questionId] && config[questionId][choiceId]) ? config[questionId][choiceId].backgroundColor : null;
            }
        }
    }

    return dataWithConfig;
}

export const getGradeImage = gradeName => {
    switch(gradeName) {
        case 'K-2': return 'apple';
        case '6-8': return 'board';
        default: return 'triangle-blue';
    }
};