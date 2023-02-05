const nutritionLiteracy3to5Config = {
    title: 'Physical Literacy Assessment',
    grades: '3-5',
    surveyId: '1',
    
/*Questions #1-3: There are many skills needed to cook and prepare the foods we
eat every day. Please circle the answer based on whether you can do each skill
“all by yourself”, “with a little help”, “with a lot of help”, or “not at all”.*/

/*1. I can use a knife to cut up food into smaller pieces, like cutting a cucumber or
carrot into slices*/
'1': {
    mediaSrc: 'boy_cutting_vegetables',
    isMediaMC: true,
},

/*2. I can crack an egg into a bowl*/
'2': {
    mediaSrc: 'eggs',
    isMediaMC: true,
},
/*3. I can use a measuring cup to measure ingredients, like milk or flour*/
'3': {
    mediaSrc: 'measuring_cup',
    isMediaMC: true,

},
/*Questions #4-6: Which kitchen tool is used for each activity? Please circle the
kitchen tool that matches each description.
On the NEXT PAGE, you will find pictures of each kitchen tool to help you
answer these questions.*/

/*4. Picks up hot food safely.*/
'4': {
    mediaSrc: 'hot_food',
    isMediaMC: true,

/*5. Removes skin from fruit or vegetable.*/
},
'5': {
    mediaSrc: 'fruits_vegetables',
    isMediaMC: true,        
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
},

/*6. Rinses food and drains liquid from solid food.*/
'6': {
    mediaSrc: 'rinse_vegetables',
    isMediaMC: true,
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
},

/*Pictures of kitchen tools to help you answer questions #4-6.*/

/* 7. To make sure that the foods we eat are safe, which of the following should be
clean before cooking? Circle all of the items below that should be clean before
cooking.*/

'7': {
    mediaSrc: 'rinse_vegetables',
    isMediaMC: true,
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
/*
    '1' : {
        backgroundColor: 'blue',
        textColor: 'white',
        mediaSrc: 'oven_mitt',
        mediaSrcWidth: '350px',
        mediaSrcHeight: '230px',
    },
    '2' : {
        backgroundColor: 'blue',
        textColor: 'white',
        mediaSrc: 'cutting_board',
        mediaSrcWidth: '350px',
        mediaSrcHeight: '230px',
    },

    '3' : {
        backgroundColor: 'blue',
        textColor: 'white',
        mediaSrc: 'peeler',
        mediaSrcWidth: '350px',
        mediaSrcHeight: '230px',
    },


    '4' : {
        backgroundColor: 'blue',
        textColor: 'white',
        mediaSrc: 'spoon',
        mediaSrcWidth: '350px',
        mediaSrcHeight: '230px',
    },

    '5' : {
        backgroundColor: 'blue',
        textColor: 'white',
        mediaSrc: 'spatula',
        mediaSrcWidth: '350px',
        mediaSrcHeight: '230px',
    },

    '6' : {
        backgroundColor: 'blue',
        textColor: 'white',
        mediaSrc: 'measuring_cup',
        mediaSrcWidth: '350px',
        mediaSrcHeight: '230px',
    },

    '7' : {
        backgroundColor: 'blue',
        textColor: 'white',
        mediaSrc: 'colander',
        mediaSrcWidth: '350px',
        mediaSrcHeight: '230px',
    },
*/
    
},

/*8. Some foods are only safe to eat if they have been cooked first. Circle all of the
foods below that should be cooked first before eating.*/  
'8': {
    mediaSrc: 'raw_food',
    isMediaMC: true,
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
},
/*9. Circle True or False:
When preparing meals, raw meats (like raw hamburger) should not touch other
foods like (like salad or fruit) until the raw meat has been cooked.*/
'9': {
    mediaSrc: 'raw_food',
    isMediaMC: true,
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
    
},
/*10. You’re choosing foods to put in your lunch bag or on your lunch tray. For the
main meal and two side dishes, circle the option (a OR b) that would make the
healthiest meal.
Main Meal (circle a OR b)*/

'10': {
    mediaSrc: 'lunch_bag',
    isMediaMC: true,
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
},
/*11. Sammy is a 5th grader who would like to buy a snack from the vending
machine at his school before he gets on the bus at the end of the day. Which
snack would be the healthiest for Sammy to choose?*/
'11': {
    mediaSrc: 'vending_machine',
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
},
/*12. An adult is taking you to a restaurant for dinner and asks you what you’d
like to drink. Which would be the healthiest drink to order (circle ONE)?*/
'12': {
    mediaSrc: 'restaurant',
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
},



/*13. Which of the following things are not needed for a fruit or vegetable to
grow?*/
'13': {
    mediaSrc: '',
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
},

/*Questions #14-16: The vegetables we eat every day come from different parts of
vegetable plants. Draw a line to match each vegetable to the plant part it comes
from.*/
/*
14. Broccoli
*/
'14': {
    mediaSrc: '',
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
},

/*15. Carrot*/
'15': {
    mediaSrc: '',
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
},

/*16. Spinach*/
'16': {
    mediaSrc: '',
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
},

/*Questions #17-19: Some foods come from animals.
Draw a line to match each food listed below to the animal that it comes from.*/

/*17. Honey?*/
'17': {
    mediaSrc: '',
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
},


/*18. Cheese*/
'18': {
    mediaSrc: '',
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
},


/*19. Bacon*/
'19': {
    mediaSrc: '',
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
},


/*20: Anna is a 4th grader who lives in the city and likes to eat eggs for breakfast.
What are the steps an egg goes through to get to Anna’s breakfast plate?
Draw a line to match steps 1-5 to the picture that describes each step.
Remember, the picture that comes first is step 1.*/
'20': {
    mediaSrc: '',
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',

/*
    '1' : {
        backgroundColor: 'blue',
        textColor: 'white',
        mediaSrc: 'oven_mitt',
        mediaSrcWidth: '350px',
        mediaSrcHeight: '230px',
    },
    '2' : {
        backgroundColor: 'blue',
        textColor: 'white',
        mediaSrc: 'cutting_board',
        mediaSrcWidth: '350px',
        mediaSrcHeight: '230px',
    },

    '3' : {
        backgroundColor: 'blue',
        textColor: 'white',
        mediaSrc: 'peeler',
        mediaSrcWidth: '350px',
        mediaSrcHeight: '230px',
    },


    '4' : {
        backgroundColor: 'blue',
        textColor: 'white',
        mediaSrc: 'spoon',
        mediaSrcWidth: '350px',
        mediaSrcHeight: '230px',
    },

    '5' : {
        backgroundColor: 'blue',
        textColor: 'white',
        mediaSrc: 'spatula',
        mediaSrcWidth: '350px',
        mediaSrcHeight: '230px',
    },
*/
},


/*21. A box of cereal has a lot of information and pictures on it. Where on the box
would you find the best source of information about how healthy the food is?*/
'21': {
    mediaSrc: 'cereal',
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
},


/*22. It is recommended that you eat foods that are low in sugar. Based on the
Nutrition Facts labels of two different granola bars shown below, circle which
one is lower in sugar.*/
'22': {
    mediaSrc: 'sugar',
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
},


/*23. Circle the best answer. The energy you get from eating healthy foods helps
you to______.*/
'23': {
    mediaSrc: 'fruits_vegetables',
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
},


/*Questions #24-29: To stay healthy, it is important that we eat foods from five
different food groups: Please draw a line to match each food below with their
food group.*/
/*24. Banana*/
'24': {
    mediaSrc: '',
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
},


/*25. Grilled chicken*/
'25': {
    mediaSrc: '',
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
},

/*26. Green beans*/
'26': {
    mediaSrc: '',
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
},


/*27. Whole wheat bread*/
'27': {
    mediaSrc: '',
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
},


/*28. Cheese*/
'28': {
    mediaSrc: '',
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
},


/*29. Fruit-flavored candy*/
'29': {
    mediaSrc: '',
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
},


/*30. A healthy meal should have a variety of foods from the five food groups.
One of the best ways to plan a healthy meal is to be sure which of the following
food groups makes up 1⁄2 (half) of your plate?*/
'30': {
    mediaSrc: 'choosemyplate',
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
},

/*Questions #31-34: Circle the letter to choose whether or not you think that you
could do the following things to eat more fruits and vegetables.*/

/*31. For meals and snacks at home I can try a vegetable that an adult serves me.*/
'31': {
    mediaSrc: 'vegetables',
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
},


/*32. For meals and snacks at home I can try a fruit that an adult serves me.*/
'32': {
    mediaSrc: 'fruit',
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
},


/*33. When eating lunch with a friend I can eat a fruit even if my friend is not.*/
'33': {
    mediaSrc: 'fruit',
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
},


/*34. When eating lunch with a friend I can eat vegetables even if my friend says
they are “yucky”.*/
'34': {
    mediaSrc: 'vegetable',
    mediaSrcWidth: '350px',
    mediaSrcHeight: '230px',
},



};

export default nutritionLiteracy3to5Config;