import physicalLiteracy3to5Config from "./config/physicalLiteracy3to5";

const physicalLiteracy3to5Data = {
    title: 'Physical Literacy Assessment',
    grades: physicalLiteracy3to5Config.grades,
    id: '3',
    data: [
    {
        question: {
            id: '1',
            label: 'Doing a Sport or Activity',
            type: 'TE',
            text: 'Do you play a sport or do an after school activity? If yes, what is it?',
            mediaSrc: physicalLiteracy3to5Config['1'].mediaSrc,
            mediaSrcWidth: physicalLiteracy3to5Config['1'].mediaSrcWidth,
            mediaSrcHeight: physicalLiteracy3to5Config['1'].mediaSrcHeight
        },
        choices: null
    },
    {
        question: {
            id: '1.1',
            label: 'Doing a Sport or Activity',
            type: 'TE',
            text: 'How many days/week?',
            mediaSrc: physicalLiteracy3to5Config['1.1'].mediaSrc,
            mediaSrcWidth: physicalLiteracy3to5Config['1.1'].mediaSrcWidth,
            mediaSrcHeight: physicalLiteracy3to5Config['1.1'].mediaSrcHeight
        },
        choices: null      
    },
    {
        question: {
            id: '1.2',
            label: 'Doing a Sport or Activity',
            type: 'TE',
            text: 'How long each day?',
            mediaSrc: physicalLiteracy3to5Config['1.2'].mediaSrc
        },
        choices: null
    },
    {
        question: {
            id: '2',
            type: 'MC',
            label: '',
            text: 'Are your parents active with you after school or on weekends? (like walking, bike riding, playing sports)',
            mediaSrc: physicalLiteracy3to5Config['2'].mediaSrc
        },
        choices: [
            {
                id: '1',
                text: 'Yes',
                backgroundColor: physicalLiteracy3to5Config['2']['1'].textColor, 
                textColor: physicalLiteracy3to5Config['2']['1'].backgroundColor, 
                mediaSrc: physicalLiteracy3to5Config['2']['1'].mediaSrc 
            },
            {
                id: '2',
                text: 'No',
                textColor: physicalLiteracy3to5Config['2']['2'].textColor, 
                backgroundColor: physicalLiteracy3to5Config['2']['2'].backgroundColor, 
                mediaSrc: physicalLiteracy3to5Config['2']['2'].mediaSrc 
            },
            {
                id: '3',
                text: 'Sometimes',
                textColor: physicalLiteracy3to5Config['2']['3'].textColor, 
                backgroundColor: physicalLiteracy3to5Config['2']['3'].backgroundColor, 
                mediaSrc: physicalLiteracy3to5Config['2']['3'].mediaSrc 
            },
            {
                id: '4',
                text: "I don't know",
                textColor: physicalLiteracy3to5Config['2']['4'].textColor, 
                backgroundColor: physicalLiteracy3to5Config['2']['4'].backgroundColor, 
                mediaSrc: physicalLiteracy3to5Config['2']['4'].mediaSrc  
            }
        ]
    },
    {
        question: {
            id: '3',
            type: 'MC',
            label: '',
            text: 'When you have free time after school or on weekends, how do you spend it?',
            mediaSrc: physicalLiteracy3to5Config['3'].mediaSrc
        },
        choices: [
            {
                id: '1',
                text: 'Running around playing games',
                textColor: physicalLiteracy3to5Config['3']['1'].textColor, 
                backgroundColor: physicalLiteracy3to5Config['3']['1'].backgroundColor, 
                mediaSrc: physicalLiteracy3to5Config['3']['1'].mediaSrc 
            },
            {
                id: '2',
                text: 'Playing a sport',
                textColor: physicalLiteracy3to5Config['3']['2'].textColor, 
                backgroundColor: physicalLiteracy3to5Config['3']['2'].backgroundColor, 
                mediaSrc: physicalLiteracy3to5Config['3']['2'].mediaSrc 
            },
            {
                id: '3',
                text: 'Sitting playing video games',
                textColor: physicalLiteracy3to5Config['3']['3'].textColor, 
                backgroundColor: physicalLiteracy3to5Config['3']['3'].backgroundColor, 
                mediaSrc: physicalLiteracy3to5Config['3']['3'].mediaSrc 
            },
            {
                id: '4',
                text: "Sitting watching videos/movies",
                textColor: physicalLiteracy3to5Config['3']['4'].textColor, 
                backgroundColor: physicalLiteracy3to5Config['3']['4'].backgroundColor, 
                mediaSrc: physicalLiteracy3to5Config['3']['4'].mediaSrc 
            }
        ]
    },
    {
        question: {
            id: '4',
            type: 'MC',
            label: '',
            text: 'When you have recess or free time at school, how do you spend it?',
            mediaSrc: physicalLiteracy3to5Config['4'].mediaSrc
        },
        choices: [
            {
                id: '1',
                text: 'Leisurely walking',
                textColor: physicalLiteracy3to5Config['4']['1'].textColor, 
                backgroundColor: physicalLiteracy3to5Config['4']['1'].backgroundColor, 
                mediaSrc: physicalLiteracy3to5Config['4']['1'].mediaSrc 
            },
            {
                id: '2',
                text: 'Standing with friends',
                textColor: physicalLiteracy3to5Config['4']['2'].textColor, 
                backgroundColor: physicalLiteracy3to5Config['4']['2'].backgroundColor, 
                mediaSrc: physicalLiteracy3to5Config['4']['2'].mediaSrc 
            },
            {
                id: '3',
                text: 'Sitting',
                textColor: physicalLiteracy3to5Config['4']['3'].textColor, 
                backgroundColor: physicalLiteracy3to5Config['4']['3'].backgroundColor, 
                mediaSrc: physicalLiteracy3to5Config['4']['3'].mediaSrc 
            }
        ]
    },
    {
        question: {
            id: '5',
            type: 'MC',
            label: '',
            text: 'How do you feel about going to gym class?',
            mediaSrc: physicalLiteracy3to5Config['5'].mediaSrc
        },
        choices: [
        {
            id: '1',
            text: 'Nervous',
            textColor: physicalLiteracy3to5Config['5']['1'].textColor, 
            backgroundColor: physicalLiteracy3to5Config['5']['1'].backgroundColor, 
            mediaSrc: physicalLiteracy3to5Config['5']['1'].mediaSrc 
        },
        {
            id: '2',
            text: 'Scared',
            textColor: physicalLiteracy3to5Config['5']['2'].textColor, 
            backgroundColor: physicalLiteracy3to5Config['5']['2'].backgroundColor, 
            mediaSrc: physicalLiteracy3to5Config['5']['2'].mediaSrc 
        },
        {
            id: '3',
            text: 'Neutral',
            textColor: physicalLiteracy3to5Config['5']['3'].textColor, 
            backgroundColor: physicalLiteracy3to5Config['5']['3'].backgroundColor, 
            mediaSrc: physicalLiteracy3to5Config['5']['3'].mediaSrc 
        },
        {
            id: '4',
            text: 'Bored',
            textColor: physicalLiteracy3to5Config['5']['4'].textColor, 
            backgroundColor: physicalLiteracy3to5Config['5']['4'].backgroundColor, 
            mediaSrc: physicalLiteracy3to5Config['5']['4'].mediaSrc 
        }]
    },
    {
        question: {
            id: '6',
            label: '',
            type: 'MC',
            text: 'How confident are you at participating in different gym class activities?',
            mediaSrc: physicalLiteracy3to5Config['6'].mediaSrc
        },
        choices: [
            {
                id: '1',
                text: 'Somewhat confident',
                textColor: physicalLiteracy3to5Config['6']['1'].textColor, 
                backgroundColor: physicalLiteracy3to5Config['6']['1'].backgroundColor, 
                mediaSrc: physicalLiteracy3to5Config['6']['1'].mediaSrc 
            },
            {
                id: '2',
                text: 'Neither confident',
                textColor: physicalLiteracy3to5Config['6']['2'].textColor, 
                backgroundColor: physicalLiteracy3to5Config['6']['2'].backgroundColor, 
                mediaSrc: physicalLiteracy3to5Config['6']['2'].mediaSrc  
            },
            {
                id: '3',
                text: 'Somewhat unconfident',
                textColor: physicalLiteracy3to5Config['6']['3'].textColor, 
                backgroundColor: physicalLiteracy3to5Config['6']['3'].backgroundColor, 
                mediaSrc: physicalLiteracy3to5Config['6']['3'].mediaSrc 
            },
            {
                id: '4',
                text: 'Very unconfident',
                textColor: physicalLiteracy3to5Config['6']['4'].textColor, 
                backgroundColor: physicalLiteracy3to5Config['6']['4'].backgroundColor, 
                mediaSrc: physicalLiteracy3to5Config['6']['4'].mediaSrc 
            }
        ]
    },
    {
        question: {
            id: '7',
            label: '',
            type: 'MC',
            text: 'How confident are you at throwing a ball to a target 20 feet away?',
            mediaSrc: physicalLiteracy3to5Config['7'].mediaSrc
        },
        choices: [
            {
                id: '1',
                text: 'Somewhat confident',
                textColor: physicalLiteracy3to5Config['7']['1'].textColor, 
                backgroundColor: physicalLiteracy3to5Config['7']['1'].backgroundColor, 
                mediaSrc: physicalLiteracy3to5Config['7']['1'].mediaSrc 
            },
            {
                id: '2',
                text: 'Neither confident',
                textColor: physicalLiteracy3to5Config['7']['2'].textColor, 
                backgroundColor: physicalLiteracy3to5Config['7']['2'].backgroundColor, 
                mediaSrc: physicalLiteracy3to5Config['7']['2'].mediaSrc  
            },
            {
                id: '3',
                text: 'Somewhat unconfident',
                textColor: physicalLiteracy3to5Config['7']['3'].textColor, 
                backgroundColor: physicalLiteracy3to5Config['7']['3'].backgroundColor, 
                mediaSrc: physicalLiteracy3to5Config['7']['3'].mediaSrc 
            },
            {
                id: '4',
                text: 'Very unconfident',
                textColor: physicalLiteracy3to5Config['7']['4'].textColor, 
                backgroundColor: physicalLiteracy3to5Config['7']['4'].backgroundColor, 
                mediaSrc: physicalLiteracy3to5Config['7']['4'].mediaSrc 
            }
        ]
    },
    {
        question: {
            id: '8',
            label: '',
            type: 'MC',
            text: 'When you are at recess, do you like to play alone or with others?',
            mediaSrc: physicalLiteracy3to5Config['8'].mediaSrc
        },
        choices: [
            {
                id: '1',
                text: 'Alone',
                textColor: physicalLiteracy3to5Config['8']['1'].textColor, 
                backgroundColor: physicalLiteracy3to5Config['8']['1'].backgroundColor, 
                mediaSrc: physicalLiteracy3to5Config['8']['1'].mediaSrc 
            },
            {
                id: '2',
                text: 'With others',
                textColor: physicalLiteracy3to5Config['8']['2'].textColor, 
                backgroundColor: physicalLiteracy3to5Config['8']['2'].backgroundColor, 
                mediaSrc: physicalLiteracy3to5Config['8']['2'].mediaSrc 
            },
            {
                id: '3',
                text: 'Both',
                textColor: physicalLiteracy3to5Config['8']['3'].textColor, 
                backgroundColor: physicalLiteracy3to5Config['8']['3'].backgroundColor, 
                mediaSrc: physicalLiteracy3to5Config['8']['3'].mediaSrc 
            }
        ]
    },
    {
        question: {
            id: '9',
            type: 'MC',
            text: 'Do you have friends you regularly play outside with that live near you?',
            mediaSrc: physicalLiteracy3to5Config['9'].mediaSrc
        },
        choices: [
            {
                id: '1',
                text: 'Yes',
                textColor: physicalLiteracy3to5Config['9']['1'].textColor, 
                backgroundColor: physicalLiteracy3to5Config['9']['1'].backgroundColor, 
                mediaSrc: physicalLiteracy3to5Config['9']['1'].mediaSrc  
            },
            {
                id: '2',
                text: 'No',
                textColor: physicalLiteracy3to5Config['9']['2'].textColor, 
                backgroundColor: physicalLiteracy3to5Config['9']['2'].backgroundColor, 
                mediaSrc: physicalLiteracy3to5Config['9']['2'].mediaSrc  
            },
            {
                id: '3',
                text: 'Sometimes',
                textColor: physicalLiteracy3to5Config['9']['3'].textColor, 
                backgroundColor: physicalLiteracy3to5Config['9']['3'].backgroundColor, 
                mediaSrc: physicalLiteracy3to5Config['9']['3'].mediaSrc  
            }
        ]
    },
    {
        question: {
            id: '10',
            type: 'MC',
            text: 'When you are at recess/gym class, do you feel like you have enough energy to play as much as you would like?',
            mediaSrc: physicalLiteracy3to5Config['10'].mediaSrc
        },
        choices: [
            {
                id: '1',
                text: 'Yes',
                textColor: physicalLiteracy3to5Config['10']['1'].textColor, 
                backgroundColor: physicalLiteracy3to5Config['10']['1'].backgroundColor, 
                mediaSrc: physicalLiteracy3to5Config['10']['1'].mediaSrc  
            },
            {
                id: '2',
                text: 'No',
                textColor: physicalLiteracy3to5Config['10']['2'].textColor, 
                backgroundColor: physicalLiteracy3to5Config['10']['2'].backgroundColor, 
                mediaSrc: physicalLiteracy3to5Config['10']['2'].mediaSrc  
            },
            {
                id: '3',
                text: 'Sometimes',
                textColor: physicalLiteracy3to5Config['10']['3'].textColor, 
                backgroundColor: physicalLiteracy3to5Config['10']['3'].backgroundColor, 
                mediaSrc: physicalLiteracy3to5Config['10']['3'].mediaSrc  
            }
        ]
    },
    {
        question: {
            id: '11',
            type: 'MC',
            text: 'If c-3 would you like to learn more skills to have more confidence in gym class and other sporting activities?',
            mediaSrc: physicalLiteracy3to5Config['11'].mediaSrc
        },
        choices: [
            {
                id: '1',
                text: 'Yes',
                textColor: physicalLiteracy3to5Config['11']['1'].textColor, 
                backgroundColor: physicalLiteracy3to5Config['11']['1'].backgroundColor, 
                mediaSrc: physicalLiteracy3to5Config['11']['1'].mediaSrc  
            },
            {
                id: '2',
                text: 'No',
                textColor: physicalLiteracy3to5Config['11']['2'].textColor, 
                backgroundColor: physicalLiteracy3to5Config['11']['2'].backgroundColor, 
                mediaSrc: physicalLiteracy3to5Config['11']['2'].mediaSrc  
            },
            {
                id: '3',
                text: 'Sometimes',
                textColor: physicalLiteracy3to5Config['11']['3'].textColor, 
                backgroundColor: physicalLiteracy3to5Config['11']['3'].backgroundColor, 
                mediaSrc: physicalLiteracy3to5Config['11']['3'].mediaSrc  
            }
        ]
    }
]};

export default physicalLiteracy3to5Data;