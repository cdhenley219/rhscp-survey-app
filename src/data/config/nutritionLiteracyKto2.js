const nutritionLiteracyKto2Config = {
    title: 'Nutrition Literacy Assessment',
    surveyId: SURVEY_IDS['nutritionLiteracyKto2'],
    grades: 'K-2',

/*The vegetables we eat every day come from different parts of vegetable plants. 
Draw a line to match each vegetable to the plant part it comes from.*/
    '1': {
        mediaSrc: '',
        isMediaMC: true,
    },

/*To stay healthy, it is important that we eat foods from the five MyPlate food groups: 
Please draw a line to match each food below with their food group.*/
    '2': {
        mediaSrc: '',
        isMediaMC: true,
    },
/*Drinking water with foods that have _______ helps keep my body clean inside.*/
    '3': {
        mediaSrc: 'water',
        isMediaMC: true,

    },
/*To get enough calcium for my bones, I should eat __ servings of dairy foods each day.*/
    '4': {
        mediaSrc: 'dairy',
        isMediaMC: true,
/*“Eating the Rainbow” means:*/
    },
    '5': {
        mediaSrc: 'fruit',
        isMediaMC: true,        
        mediaSrcWidth: '350px',
        mediaSrcHeight: '230px',
    },

/*Drinking water with foods that have _______ helps keep my body clean inside.*/
    '6': {
        mediaSrc: 'vegetable',
        isMediaMC: true,
        mediaSrcWidth: '350px',
        mediaSrcHeight: '230px',
    },

/*To get enough calcium for my bones, I should eat __ servings of dairy foods each day.*/  
    '7': {
        mediaSrc: 'dairy',
        isMediaMC: true,
        mediaSrcWidth: '350px',
        mediaSrcHeight: '230px',
        
    },

/*Kids my age need to drink about __ glasses of water every day.*/  
    '8': {
        mediaSrc: 'water',
        isMediaMC: true,
        mediaSrcWidth: '350px',
        mediaSrcHeight: '230px',
    },
/*For meals and snacks at home I can try a vegetable that an adult serves me.*/
    '9': {
        mediaSrc: 'vegetable',
        isMediaMC: true,
        mediaSrcWidth: '350px',
        mediaSrcHeight: '230px',
        
    },
/*For meals and snacks at home I can try a fruit that an adult serves me.*/
    '10': {
        mediaSrc: 'fruit',
        isMediaMC: true,
        mediaSrcWidth: '350px',
        mediaSrcHeight: '230px',
    },
/*When eating lunch with a friend I can eat a fruit even if my friend is not.*/
    '11': {
        mediaSrc: 'fruit',
        mediaSrcWidth: '350px',
        mediaSrcHeight: '230px',
    },
/*When eating lunch with a friend I can eat vegetables even if my friend says they are “yucky”.*/
    '12': {
        mediaSrc: 'vegetable',
        mediaSrcWidth: '350px',
        mediaSrcHeight: '230px',
    },
};

export default nutritionLiteracyKto2Config;