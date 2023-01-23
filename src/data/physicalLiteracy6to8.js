import physicalLiteracy6to8Config from "./config/physicalLiteracy6to8";

const physicalLiteracy6to8Data = {
    title: 'Physical Literacy Assessment 6-8',
    grades: physicalLiteracy6to8Config.grades,
    id: '3',
    data: [
    {
        question: {
            id: '1',
            label: 'Doing a Sport or Activity',
            type: 'TE',
            text: 'Do you play a sport or do an after school activity? If yes, what is it?',
            mediaSrc: physicalLiteracy6to8Config['1'].mediaSrc,
            mediaSrcWidth: physicalLiteracy6to8Config['1'].mediaSrcWidth,
            mediaSrcHeight: physicalLiteracy6to8Config['1'].mediaSrcHeight
        },
        choices: null
    },
    {
        question: {
            id: '1.1',
            label: 'Doing a Sport or Activity',
            type: 'TE',
            text: 'How many days/week?',
            mediaSrc: physicalLiteracy6to8Config['1.1'].mediaSrc,
            mediaSrcWidth: physicalLiteracy6to8Config['1.1'].mediaSrcWidth,
            mediaSrcHeight: physicalLiteracy6to8Config['1.1'].mediaSrcHeight
        },
        choices: null      
    },
    {
        question: {
            id: '1.2',
            label: 'Doing a Sport or Activity',
            type: 'TE',
            text: 'How long each day?',
            mediaSrc: physicalLiteracy6to8Config['1.2'].mediaSrc,
            mediaSrcWidth: physicalLiteracy6to8Config['1.2'].mediaSrcWidth,
            mediaSrcHeight: physicalLiteracy6to8Config['1.2'].mediaSrcHeight
        },
        choices: null
    },
    {
        question: {
            id: '2',
            type: 'MC',
            label: '',
            text: 'Are your parents active with you after school or on weekends? (like walking, bike riding, playing sports)',
            mediaSrc: physicalLiteracy6to8Config['2'].mediaSrc,
            mediaSrcWidth: physicalLiteracy6to8Config['2'].mediaSrcWidth,
            mediaSrcHeight: physicalLiteracy6to8Config['2'].mediaSrcHeight
        },
        choices: [
            {
                id: '1',
                text: 'Yes',
                backgroundColor: physicalLiteracy6to8Config['2']['1'].textColor, 
                textColor: physicalLiteracy6to8Config['2']['1'].backgroundColor, 
                mediaSrc: physicalLiteracy6to8Config['2']['1'].mediaSrc,
                icon: physicalLiteracy6to8Config['2']['1'].icon,
                iconColor: physicalLiteracy6to8Config['2']['1'].iconColor
            },
            {
                id: '2',
                text: 'No',
                textColor: physicalLiteracy6to8Config['2']['2'].textColor, 
                backgroundColor: physicalLiteracy6to8Config['2']['2'].backgroundColor, 
                mediaSrc: physicalLiteracy6to8Config['2']['2'].mediaSrc 
            },
            {
                id: '3',
                text: 'Sometimes',
                textColor: physicalLiteracy6to8Config['2']['3'].textColor, 
                backgroundColor: physicalLiteracy6to8Config['2']['3'].backgroundColor, 
                mediaSrc: physicalLiteracy6to8Config['2']['3'].mediaSrc 
            },
            {
                id: '4',
                text: "I don't know",
                textColor: physicalLiteracy6to8Config['2']['4'].textColor, 
                backgroundColor: physicalLiteracy6to8Config['2']['4'].backgroundColor, 
                mediaSrc: physicalLiteracy6to8Config['2']['4'].mediaSrc  
            }
        ]
    },
    {
        question: {
            id: '3',
            type: 'MC',
            label: '',
            text: 'When you have free time after school or on weekends, how do you spend it?',
            mediaSrc: physicalLiteracy6to8Config['3'].mediaSrc,
            mediaSrcWidth: physicalLiteracy6to8Config['3'].mediaSrcWidth,
            mediaSrcHeight: physicalLiteracy6to8Config['3'].mediaSrcHeight
        },
        choices: [
            {
                id: '1',
                text: 'Running around playing games',
                textColor: physicalLiteracy6to8Config['3']['1'].textColor, 
                backgroundColor: physicalLiteracy6to8Config['3']['1'].backgroundColor, 
                mediaSrc: physicalLiteracy6to8Config['3']['1'].mediaSrc,
                mediaSrcWidth: physicalLiteracy6to8Config['3']['1'].mediaSrcWidth,
                mediaSrcHeight: physicalLiteracy6to8Config['3']['1'].mediaSrcHeight
                 
            },
            {
                id: '2',
                text: 'Playing a sport',
                textColor: physicalLiteracy6to8Config['3']['2'].textColor, 
                backgroundColor: physicalLiteracy6to8Config['3']['2'].backgroundColor, 
                mediaSrc: physicalLiteracy6to8Config['3']['2'].mediaSrc 
            },
            {
                id: '3',
                text: 'Sitting playing video games',
                textColor: physicalLiteracy6to8Config['3']['3'].textColor, 
                backgroundColor: physicalLiteracy6to8Config['3']['3'].backgroundColor, 
                mediaSrc: physicalLiteracy6to8Config['3']['3'].mediaSrc 
            },
            {
                id: '4',
                text: "Sitting watching videos/movies",
                textColor: physicalLiteracy6to8Config['3']['4'].textColor, 
                backgroundColor: physicalLiteracy6to8Config['3']['4'].backgroundColor, 
                mediaSrc: physicalLiteracy6to8Config['3']['4'].mediaSrc 
            }
        ]
    },
    {
        question: {
            id: '4',
            type: 'MC',
            label: '',
            text: 'When you have recess or free time at school, how do you spend it?',
            mediaSrc: physicalLiteracy6to8Config['4'].mediaSrc,
            mediaSrcWidth: physicalLiteracy6to8Config['4'].mediaSrcWidth,
            mediaSrcHeight: physicalLiteracy6to8Config['4'].mediaSrcHeight
        },
        choices: [
            {
                id: '1',
                text: 'Leisurely walking',
                textColor: physicalLiteracy6to8Config['4']['1'].textColor, 
                backgroundColor: physicalLiteracy6to8Config['4']['1'].backgroundColor, 
                mediaSrc: physicalLiteracy6to8Config['4']['1'].mediaSrc 
            },
            {
                id: '2',
                text: 'Standing with friends',
                textColor: physicalLiteracy6to8Config['4']['2'].textColor, 
                backgroundColor: physicalLiteracy6to8Config['4']['2'].backgroundColor, 
                mediaSrc: physicalLiteracy6to8Config['4']['2'].mediaSrc 
            },
            {
                id: '3',
                text: 'Sitting',
                textColor: physicalLiteracy6to8Config['4']['3'].textColor, 
                backgroundColor: physicalLiteracy6to8Config['4']['3'].backgroundColor, 
                mediaSrc: physicalLiteracy6to8Config['4']['3'].mediaSrc 
            }
        ]
    },
    {
        question: {
            id: '5',
            type: 'MC',
            label: '',
            text: 'How do you feel about going to gym class?',
            mediaSrc: physicalLiteracy6to8Config['5'].mediaSrc,
            mediaSrcWidth: physicalLiteracy6to8Config['5'].mediaSrcWidth,
            mediaSrcHeight: physicalLiteracy6to8Config['5'].mediaSrcHeight
        },
        choices: [
        {
            id: '1',
            text: 'Nervous',
            textColor: physicalLiteracy6to8Config['5']['1'].textColor, 
            backgroundColor: physicalLiteracy6to8Config['5']['1'].backgroundColor, 
            mediaSrc: physicalLiteracy6to8Config['5']['1'].mediaSrc 
        },
        {
            id: '2',
            text: 'Scared',
            textColor: physicalLiteracy6to8Config['5']['2'].textColor, 
            backgroundColor: physicalLiteracy6to8Config['5']['2'].backgroundColor, 
            mediaSrc: physicalLiteracy6to8Config['5']['2'].mediaSrc 
        },
        {
            id: '3',
            text: 'Neutral',
            textColor: physicalLiteracy6to8Config['5']['3'].textColor, 
            backgroundColor: physicalLiteracy6to8Config['5']['3'].backgroundColor, 
            mediaSrc: physicalLiteracy6to8Config['5']['3'].mediaSrc 
        },
        {
            id: '4',
            text: 'Bored',
            textColor: physicalLiteracy6to8Config['5']['4'].textColor, 
            backgroundColor: physicalLiteracy6to8Config['5']['4'].backgroundColor, 
            mediaSrc: physicalLiteracy6to8Config['5']['4'].mediaSrc 
        }]
    },
    {
        question: {
            id: '6',
            label: '',
            type: 'MC',
            text: 'How confident are you at participating in different gym class activities?',
            mediaSrc: physicalLiteracy6to8Config['6'].mediaSrc,
            mediaSrcWidth: physicalLiteracy6to8Config['6'].mediaSrcWidth,
            mediaSrcHeight: physicalLiteracy6to8Config['6'].mediaSrcHeight
        },
        choices: [
            {
                id: '1',
                text: 'Somewhat confident',
                textColor: physicalLiteracy6to8Config['6']['1'].textColor, 
                backgroundColor: physicalLiteracy6to8Config['6']['1'].backgroundColor, 
                mediaSrc: physicalLiteracy6to8Config['6']['1'].mediaSrc 
            },
            {
                id: '2',
                text: 'Neither confident',
                textColor: physicalLiteracy6to8Config['6']['2'].textColor, 
                backgroundColor: physicalLiteracy6to8Config['6']['2'].backgroundColor, 
                mediaSrc: physicalLiteracy6to8Config['6']['2'].mediaSrc  
            },
            {
                id: '3',
                text: 'Somewhat unconfident',
                textColor: physicalLiteracy6to8Config['6']['3'].textColor, 
                backgroundColor: physicalLiteracy6to8Config['6']['3'].backgroundColor, 
                mediaSrc: physicalLiteracy6to8Config['6']['3'].mediaSrc 
            },
            {
                id: '4',
                text: 'Very unconfident',
                textColor: physicalLiteracy6to8Config['6']['4'].textColor, 
                backgroundColor: physicalLiteracy6to8Config['6']['4'].backgroundColor, 
                mediaSrc: physicalLiteracy6to8Config['6']['4'].mediaSrc 
            }
        ]
    },
    {
        question: {
            id: '7',
            label: '',
            type: 'MC',
            text: 'How confident are you at throwing a ball to a target 20 feet away?',
            mediaSrc: physicalLiteracy6to8Config['7'].mediaSrc,
            mediaSrcWidth: physicalLiteracy6to8Config['7'].mediaSrcWidth,
            mediaSrcHeight: physicalLiteracy6to8Config['7'].mediaSrcHeight
        },
        choices: [
            {
                id: '1',
                text: 'Somewhat confident',
                textColor: physicalLiteracy6to8Config['7']['1'].textColor, 
                backgroundColor: physicalLiteracy6to8Config['7']['1'].backgroundColor, 
                mediaSrc: physicalLiteracy6to8Config['7']['1'].mediaSrc 
            },
            {
                id: '2',
                text: 'Neither confident',
                textColor: physicalLiteracy6to8Config['7']['2'].textColor, 
                backgroundColor: physicalLiteracy6to8Config['7']['2'].backgroundColor, 
                mediaSrc: physicalLiteracy6to8Config['7']['2'].mediaSrc  
            },
            {
                id: '3',
                text: 'Somewhat unconfident',
                textColor: physicalLiteracy6to8Config['7']['3'].textColor, 
                backgroundColor: physicalLiteracy6to8Config['7']['3'].backgroundColor, 
                mediaSrc: physicalLiteracy6to8Config['7']['3'].mediaSrc 
            },
            {
                id: '4',
                text: 'Very unconfident',
                textColor: physicalLiteracy6to8Config['7']['4'].textColor, 
                backgroundColor: physicalLiteracy6to8Config['7']['4'].backgroundColor, 
                mediaSrc: physicalLiteracy6to8Config['7']['4'].mediaSrc 
            }
        ]
    },
    {
        question: {
            id: '8',
            label: '',
            type: 'MC',
            text: 'When you are at recess, do you like to play alone or with others?',
            mediaSrc: physicalLiteracy6to8Config['8'].mediaSrc,
            mediaSrcWidth: physicalLiteracy6to8Config['8'].mediaSrcWidth,
            mediaSrcHeight: physicalLiteracy6to8Config['8'].mediaSrcHeight
        },
        choices: [
            {
                id: '1',
                text: 'Alone',
                textColor: physicalLiteracy6to8Config['8']['1'].textColor, 
                backgroundColor: physicalLiteracy6to8Config['8']['1'].backgroundColor, 
                mediaSrc: physicalLiteracy6to8Config['8']['1'].mediaSrc 
            },
            {
                id: '2',
                text: 'With others',
                textColor: physicalLiteracy6to8Config['8']['2'].textColor, 
                backgroundColor: physicalLiteracy6to8Config['8']['2'].backgroundColor, 
                mediaSrc: physicalLiteracy6to8Config['8']['2'].mediaSrc 
            },
            {
                id: '3',
                text: 'Both',
                textColor: physicalLiteracy6to8Config['8']['3'].textColor, 
                backgroundColor: physicalLiteracy6to8Config['8']['3'].backgroundColor, 
                mediaSrc: physicalLiteracy6to8Config['8']['3'].mediaSrc 
            }
        ]
    },
    {
        question: {
            id: '9',
            type: 'MC',
            text: 'Do you have friends you regularly play outside with that live near you?',
            mediaSrc: physicalLiteracy6to8Config['9'].mediaSrc,
            mediaSrcWidth: physicalLiteracy6to8Config['9'].mediaSrcWidth,
            mediaSrcHeight: physicalLiteracy6to8Config['9'].mediaSrcHeight
        },
        choices: [
            {
                id: '1',
                text: 'Yes',
                textColor: physicalLiteracy6to8Config['9']['1'].textColor, 
                backgroundColor: physicalLiteracy6to8Config['9']['1'].backgroundColor, 
                mediaSrc: physicalLiteracy6to8Config['9']['1'].mediaSrc  
            },
            {
                id: '2',
                text: 'No',
                textColor: physicalLiteracy6to8Config['9']['2'].textColor, 
                backgroundColor: physicalLiteracy6to8Config['9']['2'].backgroundColor, 
                mediaSrc: physicalLiteracy6to8Config['9']['2'].mediaSrc  
            },
            {
                id: '3',
                text: 'Sometimes',
                textColor: physicalLiteracy6to8Config['9']['3'].textColor, 
                backgroundColor: physicalLiteracy6to8Config['9']['3'].backgroundColor, 
                mediaSrc: physicalLiteracy6to8Config['9']['3'].mediaSrc  
            }
        ]
    },
    {
        question: {
            id: '10',
            type: 'MC',
            text: 'When you are at recess/gym class, do you feel like you have enough energy to play as much as you would like?',
            mediaSrc: physicalLiteracy6to8Config['10'].mediaSrc,
            mediaSrcWidth: physicalLiteracy6to8Config['10'].mediaSrcWidth,
            mediaSrcHeight: physicalLiteracy6to8Config['10'].mediaSrcHeight
        },
        choices: [
            {
                id: '1',
                text: 'Yes',
                textColor: physicalLiteracy6to8Config['10']['1'].textColor, 
                backgroundColor: physicalLiteracy6to8Config['10']['1'].backgroundColor, 
                mediaSrc: physicalLiteracy6to8Config['10']['1'].mediaSrc  
            },
            {
                id: '2',
                text: 'No',
                textColor: physicalLiteracy6to8Config['10']['2'].textColor, 
                backgroundColor: physicalLiteracy6to8Config['10']['2'].backgroundColor, 
                mediaSrc: physicalLiteracy6to8Config['10']['2'].mediaSrc  
            },
            {
                id: '3',
                text: 'Sometimes',
                textColor: physicalLiteracy6to8Config['10']['3'].textColor, 
                backgroundColor: physicalLiteracy6to8Config['10']['3'].backgroundColor, 
                mediaSrc: physicalLiteracy6to8Config['10']['3'].mediaSrc  
            }
        ]
    },
    {
        question: {
            id: '11',
            type: 'MC',
            label: '',
            text: 'If c-3 would you like to learn more skills to have more confidence in gym class and other sporting activities?',
            mediaSrc: physicalLiteracy6to8Config['11'].mediaSrc,
            mediaSrcWidth: physicalLiteracy6to8Config['11'].mediaSrcWidth,
            mediaSrcHeight: physicalLiteracy6to8Config['11'].mediaSrcHeight
        },
        choices: [
            {
                id: '1',
                text: 'Yes',
                textColor: physicalLiteracy6to8Config['11']['1'].textColor, 
                backgroundColor: physicalLiteracy6to8Config['11']['1'].backgroundColor, 
                mediaSrc: physicalLiteracy6to8Config['11']['1'].mediaSrc  
            },
            {
                id: '2',
                text: 'No',
                textColor: physicalLiteracy6to8Config['11']['2'].textColor, 
                backgroundColor: physicalLiteracy6to8Config['11']['2'].backgroundColor, 
                mediaSrc: physicalLiteracy6to8Config['11']['2'].mediaSrc  
            },
            {
                id: '3',
                text: 'Sometimes',
                textColor: physicalLiteracy6to8Config['11']['3'].textColor, 
                backgroundColor: physicalLiteracy6to8Config['11']['3'].backgroundColor, 
                mediaSrc: physicalLiteracy6to8Config['11']['3'].mediaSrc  
            }
        ]
    }
]};

export default physicalLiteracy6to8Data;