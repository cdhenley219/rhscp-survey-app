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

export const getGradeImage = gradeName => {
    switch(gradeName) {
        case 'K-2': return 'apple';
        case '6-8': return 'board';
        default: return 'triangle-blue';
    }
};