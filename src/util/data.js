import physicalLiteracyKto2Config from '../data/config/physicalLiteracyKto2';
import physicalLiteracy3to5Config from '../data/config/physicalLiteracy3to5';
import physicalLiteracy6to8Config from '../data/config/physicalLiteracy6to8';


export const getConfig = (surveyId) => {
    switch(surveyId) {
        case '1': return physicalLiteracyKto2Config;
        case '2': return physicalLiteracy3to5Config;
        case 'SV_6QpwvgxC7YRqSj4': return physicalLiteracy6to8Config;
        default: return [];
    }
}

export const getGradeImage = gradeName => {
    switch(gradeName) {
        case 'K-2': return 'apple';
        case '6-8': return 'board';
        default: return 'triangle-blue';
    }
};