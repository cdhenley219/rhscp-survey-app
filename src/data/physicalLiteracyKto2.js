import physicalLiteracyKto2Config from "./config/physicalLiteracyKto2";

const physicalLiteracyKto2Data = {
    title: 'Physical Literacy Assessment K-2',
    grades: physicalLiteracyKto2Config.grades,
    id: '1',
    data: [
    {
        question: {
            id: '1',
            label: '',
            type: 'MC',
            text: 'Which picture has a ball?',
            isMediaMC: physicalLiteracyKto2Config['1'].isMediaMC,
            mediaSrc: physicalLiteracyKto2Config['1'].mediaSrc
        },
        choices: [
            {
                id: '1',
                text: '',
                mediaSrc: physicalLiteracyKto2Config['1']['1'].mediaSrc 
            },
            {
                id: '2',
                text: '',
                mediaSrc: physicalLiteracyKto2Config['1']['2'].mediaSrc 
            },
            {
                id: '3',
                text: '',
                mediaSrc: physicalLiteracyKto2Config['1']['3'].mediaSrc 
            },
            {
                id: '4',
                text: '',
                mediaSrc: physicalLiteracyKto2Config['1']['4'].mediaSrc 
            }
        ]
    },
    {
        question: {
            id: '2',
            label: '',
            type: 'MC',
            text: 'Which video shows someone skipping?',
            isMediaMC: physicalLiteracyKto2Config['2'].isMediaMC,
            mediaSrc: physicalLiteracyKto2Config['2'].mediaSrc
        },
        choices: [
            {
                id: '1',
                text: '',
                mediaSrc: physicalLiteracyKto2Config['2']['1'].mediaSrc 
            },
            {
                id: '2',
                text: '',
                mediaSrc: physicalLiteracyKto2Config['2']['2'].mediaSrc 
            },
            {
                id: '3',
                text: '',
                mediaSrc: physicalLiteracyKto2Config['2']['3'].mediaSrc 
            },
            {
                id: '4',
                text: '',
                mediaSrc: physicalLiteracyKto2Config['2']['4'].mediaSrc 
            }
        ]
    },
    {
        question: {
            id: '3',
            label: '',
            type: 'MC',
            text: 'What do you use to play soccer?',
            isMediaMC: physicalLiteracyKto2Config['3'].isMediaMC,
            mediaSrc: physicalLiteracyKto2Config['3'].mediaSrc
        },
        choices: [
            {
                id: '1',
                text: 'baseball bat',
                mediaSrc: physicalLiteracyKto2Config['3']['1'].mediaSrc 
            },
            {
                id: '2',
                text: 'tennis net',
                mediaSrc: physicalLiteracyKto2Config['3']['2'].mediaSrc 
            },
            {
                id: '3',
                text: 'soccer ball',
                mediaSrc: physicalLiteracyKto2Config['3']['3'].mediaSrc 
            }
        ]
    },
    {
        question: {
            id: '4',
            label: '',
            type: 'MC',
            text: 'Which would you need balance for?',
            isMediaMC: physicalLiteracyKto2Config['2'].isMediaMC,
            mediaSrc: physicalLiteracyKto2Config['2'].mediaSrc
        },
        choices: [
            {
                id: '1',
                text: 'bike',
                mediaSrc: physicalLiteracyKto2Config['4']['1'].mediaSrc 
            },
            {
                id: '2',
                text: 'ball',
                mediaSrc: physicalLiteracyKto2Config['4']['2'].mediaSrc 
            },
            {
                id: '3',
                text: 'weights',
                mediaSrc: physicalLiteracyKto2Config['4']['3'].mediaSrc 
            }
        ]
    },
    {
        question: {
            id: '5',
            label: '',
            type: 'MC',
            text: 'When you run fast, this part works harder',
            isMediaMC: physicalLiteracyKto2Config['5'].isMediaMC,
            mediaSrc: physicalLiteracyKto2Config['5'].mediaSrc
        },
        choices: [
            {
                id: '1',
                text: 'eyes',
                mediaSrc: physicalLiteracyKto2Config['5']['1'].mediaSrc 
            },
            {
                id: '2',
                text: 'teeth',
                mediaSrc: physicalLiteracyKto2Config['5']['2'].mediaSrc 
            },
            {
                id: '3',
                text: 'heart',
                mediaSrc: physicalLiteracyKto2Config['5']['3'].mediaSrc 
            }
        ]
    },
    {
        question: {
            id: '6',
            label: '',
            type: 'MC',
            text: 'What sport is being played?', //kid playing basketball
            isMediaMC: physicalLiteracyKto2Config['6'].isMediaMC,
            mediaSrc: physicalLiteracyKto2Config['6'].mediaSrc
        },
        choices: [
            {
                id: '1',
                text: 'basketball',

            },
            {
                id: '2',
                text: 'tennis',
                mediaSrc: physicalLiteracyKto2Config['6']['2'].mediaSrc 
            },
            {
                id: '3',
                text: 'soccer',
                mediaSrc: physicalLiteracyKto2Config['6']['3'].mediaSrc 
            },
            {
                id: '4',
                text: '',
                mediaSrc: physicalLiteracyKto2Config['6']['4'].mediaSrc 
            }
        ]
    },
    {
        question: {
            id: '7',
            label: '',
            type: 'MC',
            text: 'What exercise is this person doing?', //push ups
            mediaSrc: physicalLiteracyKto2Config['7'].mediaSrc
        },
        choices: [
            {
                id: '1',
                text: 'jumping jacks',
                mediaSrc: physicalLiteracyKto2Config['7']['1'].mediaSrc 
            },
            {
                id: '2',
                text: 'sit ups',
                mediaSrc: physicalLiteracyKto2Config['7']['2'].mediaSrc 
            },
            {
                id: '3',
                text: 'push ups',
                mediaSrc: physicalLiteracyKto2Config['7']['3'].mediaSrc 
            }
        ]
    },
    {
        question: {
            id: '8',
            label: '',
            type: 'MC',
            text: 'Which outfit would you wear to play outside?',
            isMediaMC: physicalLiteracyKto2Config['8'].isMediaMC,
            mediaSrc: physicalLiteracyKto2Config['8'].mediaSrc
        },
        choices: [
            {
                id: '1',
                text: 'casual clothes',
                mediaSrc: physicalLiteracyKto2Config['8']['1'].mediaSrc 
            },
            {
                id: '2',
                text: 'Halloween costume',
                mediaSrc: physicalLiteracyKto2Config['8']['2'].mediaSrc 
            },
            {
                id: '3',
                text: 'formal event clothes',
                mediaSrc: physicalLiteracyKto2Config['8']['3'].mediaSrc 
            }
        ]
    },
    {
        question: {
            id: '9',
            label: '',
            type: 'MC',
            text: 'What area is the safest to play outdoor games at?',
            isMediaMC: physicalLiteracyKto2Config['9'].isMediaMC,
            mediaSrc: physicalLiteracyKto2Config['9'].mediaSrc
        },
        choices: [
            {
                id: '1',
                text: 'casual clothes',
                mediaSrc: physicalLiteracyKto2Config['9']['1'].mediaSrc 
            },
            {
                id: '2',
                text: 'Halloween costume',
                mediaSrc: physicalLiteracyKto2Config['9']['2'].mediaSrc 
            },
            {
                id: '3',
                text: 'formal event clothes',
                mediaSrc: physicalLiteracyKto2Config['9']['3'].mediaSrc 
            }
        ]
    },
    {
        question: {
            id: '10',
            label: '',
            type: 'MC',
            text: 'What is the best drink to have when playing outside?',
            isMediaMC: physicalLiteracyKto2Config['10'].isMediaMC,
            mediaSrc: physicalLiteracyKto2Config['10'].mediaSrc
        },
        choices: [
            {
                id: '1',
                text: 'soda',
                mediaSrc: physicalLiteracyKto2Config['10']['1'].mediaSrc 
            },
            {
                id: '2',
                text: 'juice',
                mediaSrc: physicalLiteracyKto2Config['10']['2'].mediaSrc 
            },
            {
                id: '3',
                text: 'water',
                mediaSrc: physicalLiteracyKto2Config['10']['3'].mediaSrc 
            }
        ]
    },
    {
        question: {
            id: '11',
            label: 'Doing a Sport or Activity',
            type: 'TE',
            text: 'Do you play a sport or do an after school activity? If yes, what is it?',
            mediaSrc: physicalLiteracyKto2Config['11'].mediaSrc
        },
        choices: null
    },
    {
        question: {
            id: '11.1',
            label: 'Doing a Sport or Activity',
            type: 'TE',
            text: 'How many days/week?',
            mediaSrc: physicalLiteracyKto2Config['11.1'].mediaSrc
        },
        choices: null      
    },
    {
        question: {
            id: '11.2',
            label: 'Doing a Sport or Activity',
            type: 'TE',
            text: 'How long each day?',
            mediaSrc: physicalLiteracyKto2Config['11.2'].mediaSrc
        },
        choices: null
    },
    {
        question: {
            id: '12',
            type: 'MC',
            label: '',
            text: 'Are your parents active with you after school or on weekends? (like walking, bike riding, playing sports)',
            mediaSrc: physicalLiteracyKto2Config['12'].mediaSrc
        },
        choices: [
            {
                id: '1',
                text: 'Yes',
                backgroundColor: physicalLiteracyKto2Config['12']['1'].textColor, 
                textColor: physicalLiteracyKto2Config['12']['1'].backgroundColor, 
                mediaSrc: physicalLiteracyKto2Config['12']['1'].mediaSrc 
            },
            {
                id: '2',
                text: 'No',
                textColor: physicalLiteracyKto2Config['12']['2'].textColor, 
                backgroundColor: physicalLiteracyKto2Config['12']['2'].backgroundColor, 
                mediaSrc: physicalLiteracyKto2Config['12']['2'].mediaSrc 
            },
            {
                id: '3',
                text: 'Sometimes',
                textColor: physicalLiteracyKto2Config['12']['3'].textColor, 
                backgroundColor: physicalLiteracyKto2Config['12']['3'].backgroundColor, 
                mediaSrc: physicalLiteracyKto2Config['12']['3'].mediaSrc 
            },
            {
                id: '4',
                text: "I don't know",
                textColor: physicalLiteracyKto2Config['12']['4'].textColor, 
                backgroundColor: physicalLiteracyKto2Config['12']['4'].backgroundColor, 
                mediaSrc: physicalLiteracyKto2Config['12']['4'].mediaSrc  
            }
        ]
    },
    {
        question: {
            id: '13',
            type: 'MC',
            label: '',
            text: 'When you have free time after school or on weekends, how do you spend it?',
            mediaSrc: physicalLiteracyKto2Config['13'].mediaSrc
        },
        choices: [
            {
                id: '1',
                text: 'Running around playing games',
                textColor: physicalLiteracyKto2Config['13']['1'].textColor, 
                backgroundColor: physicalLiteracyKto2Config['13']['1'].backgroundColor, 
                mediaSrc: physicalLiteracyKto2Config['13']['1'].mediaSrc 
            },
            {
                id: '2',
                text: 'Playing a sport',
                textColor: physicalLiteracyKto2Config['13']['2'].textColor, 
                backgroundColor: physicalLiteracyKto2Config['13']['2'].backgroundColor, 
                mediaSrc: physicalLiteracyKto2Config['13']['2'].mediaSrc 
            },
            {
                id: '3',
                text: 'Sitting playing video games',
                textColor: physicalLiteracyKto2Config['13']['3'].textColor, 
                backgroundColor: physicalLiteracyKto2Config['13']['3'].backgroundColor, 
                mediaSrc: physicalLiteracyKto2Config['13']['3'].mediaSrc 
            },
            {
                id: '4',
                text: "Sitting watching videos/movies",
                textColor: physicalLiteracyKto2Config['13']['4'].textColor, 
                backgroundColor: physicalLiteracyKto2Config['13']['4'].backgroundColor, 
                mediaSrc: physicalLiteracyKto2Config['13']['4'].mediaSrc 
            }
        ]
    },
    {
        question: {
            id: '14',
            type: 'MC',
            label: '',
            text: 'When you have recess or free time at school, how do you spend it?',
            mediaSrc: physicalLiteracyKto2Config['14'].mediaSrc
        },
        choices: [
            {
                id: '1',
                text: 'Leisurely walking',
                textColor: physicalLiteracyKto2Config['14']['1'].textColor, 
                backgroundColor: physicalLiteracyKto2Config['14']['1'].backgroundColor, 
                mediaSrc: physicalLiteracyKto2Config['14']['1'].mediaSrc 
            },
            {
                id: '2',
                text: 'Standing with friends',
                textColor: physicalLiteracyKto2Config['14']['2'].textColor, 
                backgroundColor: physicalLiteracyKto2Config['14']['2'].backgroundColor, 
                mediaSrc: physicalLiteracyKto2Config['14']['2'].mediaSrc 
            },
            {
                id: '3',
                text: 'Sitting',
                textColor: physicalLiteracyKto2Config['14']['3'].textColor, 
                backgroundColor: physicalLiteracyKto2Config['14']['3'].backgroundColor, 
                mediaSrc: physicalLiteracyKto2Config['14']['3'].mediaSrc 
            }
        ]
    },
    {
        question: {
            id: '15',
            type: 'MC',
            label: '',
            text: 'How do you feel about going to gym class?',
            mediaSrc: physicalLiteracyKto2Config['15'].mediaSrc
        },
        choices: [
        {
            id: '1',
            text: 'Nervous',
            textColor: physicalLiteracyKto2Config['15']['1'].textColor, 
            backgroundColor: physicalLiteracyKto2Config['15']['1'].backgroundColor, 
            mediaSrc: physicalLiteracyKto2Config['15']['1'].mediaSrc 
        },
        {
            id: '2',
            text: 'Scared',
            textColor: physicalLiteracyKto2Config['15']['2'].textColor, 
            backgroundColor: physicalLiteracyKto2Config['15']['2'].backgroundColor, 
            mediaSrc: physicalLiteracyKto2Config['15']['2'].mediaSrc 
        },
        {
            id: '3',
            text: 'Neutral',
            textColor: physicalLiteracyKto2Config['15']['3'].textColor, 
            backgroundColor: physicalLiteracyKto2Config['15']['3'].backgroundColor, 
            mediaSrc: physicalLiteracyKto2Config['15']['3'].mediaSrc 
        },
        {
            id: '4',
            text: 'Bored',
            textColor: physicalLiteracyKto2Config['15']['4'].textColor, 
            backgroundColor: physicalLiteracyKto2Config['15']['4'].backgroundColor, 
            mediaSrc: physicalLiteracyKto2Config['15']['4'].mediaSrc 
        }]
    },
    {
        question: {
            id: '16',
            label: '',
            type: 'MC',
            text: 'How confident are you at participating in different gym class activities?',
            mediaSrc: physicalLiteracyKto2Config['16'].mediaSrc
        },
        choices: [
            {
                id: '1',
                text: 'Somewhat confident',
                textColor: physicalLiteracyKto2Config['16']['1'].textColor, 
                backgroundColor: physicalLiteracyKto2Config['16']['1'].backgroundColor, 
                mediaSrc: physicalLiteracyKto2Config['16']['1'].mediaSrc 
            },
            {
                id: '2',
                text: 'Neither confident',
                textColor: physicalLiteracyKto2Config['16']['2'].textColor, 
                backgroundColor: physicalLiteracyKto2Config['16']['2'].backgroundColor, 
                mediaSrc: physicalLiteracyKto2Config['16']['2'].mediaSrc  
            },
            {
                id: '3',
                text: 'Somewhat unconfident',
                textColor: physicalLiteracyKto2Config['16']['3'].textColor, 
                backgroundColor: physicalLiteracyKto2Config['16']['3'].backgroundColor, 
                mediaSrc: physicalLiteracyKto2Config['16']['3'].mediaSrc 
            },
            {
                id: '4',
                text: 'Very unconfident',
                textColor: physicalLiteracyKto2Config['16']['4'].textColor, 
                backgroundColor: physicalLiteracyKto2Config['16']['4'].backgroundColor, 
                mediaSrc: physicalLiteracyKto2Config['16']['4'].mediaSrc 
            }
        ]
    },
    {
        question: {
            id: '17',
            label: '',
            type: 'MC',
            text: 'How confident are you at throwing a ball to a target 20 feet away?',
            mediaSrc: physicalLiteracyKto2Config['17'].mediaSrc
        },
        choices: [
            {
                id: '1',
                text: 'Somewhat confident',
                textColor: physicalLiteracyKto2Config['17']['1'].textColor, 
                backgroundColor: physicalLiteracyKto2Config['17']['1'].backgroundColor, 
                mediaSrc: physicalLiteracyKto2Config['17']['1'].mediaSrc 
            },
            {
                id: '2',
                text: 'Neither confident',
                textColor: physicalLiteracyKto2Config['17']['2'].textColor, 
                backgroundColor: physicalLiteracyKto2Config['17']['2'].backgroundColor, 
                mediaSrc: physicalLiteracyKto2Config['17']['2'].mediaSrc  
            },
            {
                id: '3',
                text: 'Somewhat unconfident',
                textColor: physicalLiteracyKto2Config['17']['3'].textColor, 
                backgroundColor: physicalLiteracyKto2Config['17']['3'].backgroundColor, 
                mediaSrc: physicalLiteracyKto2Config['17']['3'].mediaSrc 
            },
            {
                id: '4',
                text: 'Very unconfident',
                textColor: physicalLiteracyKto2Config['17']['4'].textColor, 
                backgroundColor: physicalLiteracyKto2Config['17']['4'].backgroundColor, 
                mediaSrc: physicalLiteracyKto2Config['17']['4'].mediaSrc 
            }
        ]
    },
    {
        question: {
            id: '18',
            label: '',
            type: 'MC',
            text: 'When you are at recess, do you like to play alone or with others?',
            mediaSrc: physicalLiteracyKto2Config['18'].mediaSrc
        },
        choices: [
            {
                id: '1',
                text: 'Alone',
                textColor: physicalLiteracyKto2Config['18']['1'].textColor, 
                backgroundColor: physicalLiteracyKto2Config['18']['1'].backgroundColor, 
                mediaSrc: physicalLiteracyKto2Config['18']['1'].mediaSrc 
            },
            {
                id: '2',
                text: 'With others',
                textColor: physicalLiteracyKto2Config['18']['2'].textColor, 
                backgroundColor: physicalLiteracyKto2Config['18']['2'].backgroundColor, 
                mediaSrc: physicalLiteracyKto2Config['18']['2'].mediaSrc 
            },
            {
                id: '3',
                text: 'Both',
                textColor: physicalLiteracyKto2Config['18']['3'].textColor, 
                backgroundColor: physicalLiteracyKto2Config['18']['3'].backgroundColor, 
                mediaSrc: physicalLiteracyKto2Config['18']['3'].mediaSrc 
            }
        ]
    },
    {
        question: {
            id: '19',
            type: 'MC',
            text: 'Do you have friends you regularly play outside with that live near you?',
            mediaSrc: physicalLiteracyKto2Config['19'].mediaSrc
        },
        choices: [
            {
                id: '1',
                text: 'Yes',
                textColor: physicalLiteracyKto2Config['19']['1'].textColor, 
                backgroundColor: physicalLiteracyKto2Config['19']['1'].backgroundColor, 
                mediaSrc: physicalLiteracyKto2Config['19']['1'].mediaSrc  
            },
            {
                id: '2',
                text: 'No',
                textColor: physicalLiteracyKto2Config['19']['2'].textColor, 
                backgroundColor: physicalLiteracyKto2Config['19']['2'].backgroundColor, 
                mediaSrc: physicalLiteracyKto2Config['19']['2'].mediaSrc  
            },
            {
                id: '3',
                text: 'Sometimes',
                textColor: physicalLiteracyKto2Config['19']['3'].textColor, 
                backgroundColor: physicalLiteracyKto2Config['19']['3'].backgroundColor, 
                mediaSrc: physicalLiteracyKto2Config['19']['3'].mediaSrc  
            }
        ]
    },
    {
        question: {
            id: '20',
            type: 'MC',
            text: 'When you are at recess/gym class, do you feel like you have enough energy to play as much as you would like?',
            mediaSrc: physicalLiteracyKto2Config['20'].mediaSrc
        },
        choices: [
            {
                id: '1',
                text: 'Yes',
                textColor: physicalLiteracyKto2Config['20']['1'].textColor, 
                backgroundColor: physicalLiteracyKto2Config['20']['1'].backgroundColor, 
                mediaSrc: physicalLiteracyKto2Config['20']['1'].mediaSrc  
            },
            {
                id: '2',
                text: 'No',
                textColor: physicalLiteracyKto2Config['20']['2'].textColor, 
                backgroundColor: physicalLiteracyKto2Config['20']['2'].backgroundColor, 
                mediaSrc: physicalLiteracyKto2Config['20']['2'].mediaSrc  
            },
            {
                id: '3',
                text: 'Sometimes',
                textColor: physicalLiteracyKto2Config['20']['3'].textColor, 
                backgroundColor: physicalLiteracyKto2Config['20']['3'].backgroundColor, 
                mediaSrc: physicalLiteracyKto2Config['20']['3'].mediaSrc  
            }
        ]
    },
    {
        question: {
            id: '21',
            type: 'MC',
            label: '',
            text: 'If c-3 would you like to learn more skills to have more confidence in gym class and other sporting activities?',
            mediaSrc: physicalLiteracyKto2Config['21'].mediaSrc
        },
        choices: [
            {
                id: '1',
                text: 'Yes',
                textColor: physicalLiteracyKto2Config['21']['1'].textColor, 
                backgroundColor: physicalLiteracyKto2Config['21']['1'].backgroundColor, 
                mediaSrc: physicalLiteracyKto2Config['21']['1'].mediaSrc  
            },
            {
                id: '2',
                text: 'No',
                textColor: physicalLiteracyKto2Config['21']['2'].textColor, 
                backgroundColor: physicalLiteracyKto2Config['21']['2'].backgroundColor, 
                mediaSrc: physicalLiteracyKto2Config['21']['2'].mediaSrc  
            },
            {
                id: '3',
                text: 'Sometimes',
                textColor: physicalLiteracyKto2Config['21']['3'].textColor, 
                backgroundColor: physicalLiteracyKto2Config['21']['3'].backgroundColor, 
                mediaSrc: physicalLiteracyKto2Config['21']['3'].mediaSrc  
            }
        ]
    }
]};

export default physicalLiteracyKto2Data;