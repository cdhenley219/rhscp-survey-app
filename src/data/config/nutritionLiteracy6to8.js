const nutritionLiteracy6to8Config = {
    title: 'Physical Literacy Assessment',
    grades: '6-8',
/*TThere are many skills needed to cook and prepare the foods we eat every day. 
Please circle the answer based on whether you can do each skill 
“all by yourself”, “with a little help”, “with a lot of help”, or “not at all”.*/

/* I can use a knife to cut up food into smaller pieces, like cutting a cucumber or carrot into slices.*/
'1': {
    mediaSrc: 'cutting_board',
    isMediaMC: true,
},

/*I can use a measuring cup to measure ingredients, like milk or flour.*/
'2': {
    mediaSrc: 'measuring_cup',
    isMediaMC: true,
},
/*Please circle the kitchen tool that matches the description.*/

/*Removes skin from fruit or vegetables.*/
'3': {
    mediaSrc: 'peeler',
    isMediaMC: true,

},
/*Measures liquids such as water and oil and has a spout for pouring.*/
'4': {
    mediaSrc: 'measuring_cup',
    isMediaMC: true,
/*Which measuring spoon is abbreviated with a capital “T” on recipes?*/
},
'5': {
    mediaSrc: 'spoon',
    isMediaMC: true,        
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
},

/*Food safety is how we protect the foods we eat every day from germs, 
like bacteria and viruses, that can make people sick.*/

/*To make sure that the foods we eat are safe, which of the following should be cleaned before cooking? 
Circle all the items below that should be cleaned before cooking.*/
'6': {
    mediaSrc: '', //Add image washing hands
    isMediaMC: true,
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
},

/*The food safety step “Chill” refers to cooling foods that would spoil to below 40F in how much time?*/  
'7': {
    mediaSrc: '', //Add refigerator
    isMediaMC: true,
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
    
},

/*How long should you rub your hands under running water for proper handwashing technique?*/  
'8': {
    mediaSrc: '', // Add washing hands
    isMediaMC: true,
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
},
/*A balanced meal should have a variety of foods from the five food groups on MyPlate. 
One of the best ways to plan a healthy meal is to be sure which of the following food groups make up ½ (half) of your plate?*/
'9': {
    mediaSrc: 'vegetable',
    isMediaMC: true,
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
    
},
/*What type of foods are considered as close to their natural form as possible?*/
'10': {
    mediaSrc: 'fruit',
    isMediaMC: true,
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
},
/*Which food would be considered the most processed food?*/
'11': {
    mediaSrc: 'fruit',
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
},
/*Which of the following are tricky techniques food advertisers may use to get you to want to buy or eat their food?*/
'12': {
    mediaSrc: '', //Add processed food
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
    },

/*A box of cereal has a lot of information and pictures on it. 
Where on the box would you find the best source of information about how healthy the food is?*/
'13': {
    mediaSrc: '',  //Add cerael
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
    },


/*It is recommended that you eat foods that are low in sugar. 
Based on the Nutrition Facts labels of two different granola bars shown below, circle which
one is lower in sugar.
*/
'14': {
    mediaSrc: '', // Add sugar
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
    },
};

export default nutritionLiteracy6to8Config;