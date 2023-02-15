const nutritionLiteracy6to8Config = {
    title: 'Nutrition Literacy Assessment',
    surveyId: SURVEY_IDS['nutritionLiteracy6to8'],
    grades: '6-8',
/*There are many skills needed to cook and prepare the foods we eat every day. 
Please circle the answer based on whether you can do each skill 
“all by yourself”, “with a little help”, “with a lot of help”, or “not at all”.  - QID1 */

/* I can use a knife to cut up food into smaller pieces, like cutting a cucumber or carrot into slices.*/
'QID107': {
    mediaSrc: 'cutting_board',
    isMediaMC: true,
},

/*I can use a measuring cup to measure ingredients, like milk or flour.*/
'QID108': {
    mediaSrc: 'measuring_cup',
    isMediaMC: true,
},
/*Please circle the kitchen tool that matches the description.  - QID4 */

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
like bacteria and viruses, that can make people sick. QID8 */

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
    '1' : {       /* Dairy */      
    backgroundColor: '#008080',           
    textColor: 'white',
    mediaSrc: ''    
},
'2' : {       /* Grain */     
    backgroundColor: '#008080',           
    textColor: 'white',
    mediaSrc: '' 
},
'3' : {       /*Protein*/     
    backgroundColor: '#008080',           
    textColor: 'white',
    mediaSrc: ''       
},
'4' : {     /* Fruits and Vegetables */       
    backgroundColor: '#008080',           
    textColor: 'white',
    mediaSrc: ''     
},
'5' : {     /* I don't know */       
    backgroundColor: '#008080',           
    textColor: 'white',
    mediaSrc: ''     
}
 
    
},
/*What type of foods are considered as close to their natural form as possible?*/
'QID13': {
    mediaSrc: 'fruit',
    isMediaMC: true,
    mediaSrcWidth: '350px',
    mediaSrcHeight: '250px',
    '1' : {       /* Whole foods  */      
    backgroundColor: '#850909',           
    textColor: 'white',
    mediaSrc: ''    
},
'2' : {       /* Fortified foods */     
    backgroundColor: '#850909',           
    textColor: 'white',
    mediaSrc: '' 
},
'3' : {       /* Processed foods*/     
    backgroundColor: '#850909',           
    textColor: 'white',
    mediaSrc: ''       
},
'4' : {     /* Convenience or fast foods  */       
    backgroundColor: '#850909',           
    textColor: 'white',
    mediaSrc: ''     
},
'5' : {     /* I don't know */       
    backgroundColor: '#850909',           
    textColor: 'white',
    mediaSrc: ''     
}
},
/*Which food would be considered the most processed food?*/
'QID15': {
    mediaSrc: 'processed_foods',
    isMediaMC: true,
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
    '1' : {       /* corn tortilla  */      
    backgroundColor: '#BF3E13',           
    textColor: 'white',
    mediaSrc: ''    
},
'2' : {       /* popcorn */     
    backgroundColor: '#BF3E13',           
    textColor: 'white',
    mediaSrc: '' 
},
'3' : {       /* fresh corn on the cob*/     
    backgroundColor: '#BF3E13',           
    textColor: 'white',
    mediaSrc: ''       
},
'4' : {     /* canned corn  */       
    backgroundColor: '#BF3E13',           
    textColor: 'white',
    mediaSrc: ''     
},
'5' : {     /* corn tortilla chips */       
    backgroundColor: '#BF3E13',           
    textColor: 'white',
    mediaSrc: ''     
}
},
/*Which of the following are tricky techniques food advertisers may use to get you to want to buy or eat their food?*/
'QID16': {
    mediaSrc: 'sugar', //Add processed food
    isMediaMC: true,
    mediaSrcWidth: '250px',
    mediaSrcHeight: '300px',
    '1' : {       /* Sneaky language   */      
    backgroundColor: '#E0155B',           
    textColor: 'white',
    mediaSrc: ''    
},
'2' : {       /* Giving you facts and figures about the food */     
    backgroundColor: '#E0155B',           
    textColor: 'white',
    mediaSrc: '' 
},
'3' : {       /* 	Insulting other food products*/     
    backgroundColor: '#E0155B',           
    textColor: 'white',
    mediaSrc: ''       
},
'4' : {     /* All of the above  */       
    backgroundColor: '#E0155B',           
    textColor: 'white',
    mediaSrc: ''     
},
'5' : {     /* None of the above */       
    backgroundColor: '#E0155B',           
    textColor: 'white',
    mediaSrc: ''     
},
'6' : {     /* I don't know */       
    backgroundColor: '#E0155B',           
    textColor: 'white',
    mediaSrc: ''     
}
},

/*A box of cereal has a lot of information and pictures on it. 
Where on the box would you find the best source of information about how healthy the food is?*/
'QID17': {
    mediaSrc: 'cereal_front_side',  //Add cereal
    isMediaMC: true,
    mediaSrcWidth: '350px',
    mediaSrcHeight: '400px',
    'QID25' : {       /* On the front of the box  */      
    backgroundColor: '#E0155B',           
    textColor: 'white',
    mediaSrc: ''    
},
    'QID20' : {       /* On the box of the box */     
    backgroundColor: '#E0155B',           
    textColor: 'white',
    mediaSrc: ''   
},
    '3' : {       /* I don't know*/     
    backgroundColor: '#E0155B',           
    textColor: 'white',
    mediaSrc: ''    
}
},


/*It is recommended that you eat foods that are low in sugar. 
Based on the Nutrition Facts labels of two different granola bars shown below, circle which
one is lower in sugar.
*/
'QID18': {
    mediaSrc: 'sugar', // Add sugar    
    isMediaMC: true,
    mediaSrcWidth: '350px',
    mediaSrcHeight: '250px',
    '1' : {       /* Granola bar A  */      
    backgroundColor: '#E0155B',           
    textColor: 'white',
    mediaSrc: ''    
},
    '2' : {       /* Granola bar B */     
    backgroundColor: '#E0155B',           
    textColor: 'white',
    mediaSrc: ''   
},
    '3' : {       /* I don't know */     
    backgroundColor: '#E0155B',           
    textColor: 'white',
    mediaSrc: ''   
}        
},
};

export default nutritionLiteracy6to8Config;