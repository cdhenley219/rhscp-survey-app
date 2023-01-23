import physicalLiteracyKto2Config from '../data/config/physicalLiteracyKto2';
import physicalLiteracy3to5Config from '../data/config/physicalLiteracy3to5';
import physicalLiteracy6to8Config from '../data/config/physicalLiteracy6to8';


export const getConfig = (surveyId) => {
    switch(surveyId) {
        case 'SV_cxcoJ9iKSkUCbIi': return physicalLiteracyKto2Config;
        case 'SV_cRYrYE4uneyaFMy': return physicalLiteracy3to5Config;
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