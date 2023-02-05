import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getConfig } from '../util/data';
import './Signup.css'; //CSS code for Signup and login form
import Logo from '../components/Logo/Logo';
export default function Signup() {

const navigate = useNavigate();
const grades = ['Kindergarten', '1st', '2nd', '3rd', '4th', '5th', '6th','7th', '8th'];
const { surveyId } = useParams();
const config = getConfig(surveyId);

// States for registration
const [fname, setFirstName] = useState('');
const [lname, setLastName] = useState('');
const [grade, setGrade] = useState('');
const [birthdate, setBirthDate] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);
const [gradeInvalid, setGradeInvalid] = useState(false);

// Handling the First Name change
const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setSubmitted(false);
};

// Handling the Last Name change
const handleLastName = (e) => {
    setLastName(e.target.value);
    setSubmitted(false);
};

// Handling the Grade change
const handleGrade = (e) => {
    setGrade(e.target.value);
    setSubmitted(false);
};

// Handling the Birthdate change
const handleBirthDate = (e) => {
    setBirthDate(e.target.value);
    setSubmitted(false);
};


const isGradeSelectionValid = grade => {
    if (grade === 'Kindergarten' || grade === '1st' || grade === '2nd') {
        return config.grades === 'K-2';
    }

    if (grade === '3rd' || grade === '4th' || grade === '5th') {
        return config.grades === '3-5';
    }

    if (grade === '6th' || grade === '7th' || grade === '8th') {
        return config.grades === '6-8';
    }
};

const getUniqueId = () => {
    const dateObj = new Date(birthdate);
    const month = dateObj.getMonth() + 1;
    const date = dateObj.getDate() + 1;
    const monthStr = month < 10 ? `0${month}` : `${month}`;
    const dateStr = date < 10 ? `0${date}` : `${date}`;
    return `${fname[0]}${lname[0]}${monthStr}${dateStr}${grade[0]}`;
}


// Handling the form submission
const handleSubmit = (e) => {
    e.preventDefault();
    if (fname === '' || lname === '' || grade === '' || birthdate === '') {
        setError(true);
    } 
    else if (!isGradeSelectionValid(grade)) {
        setGradeInvalid(true);
    }
    else {
        setSubmitted(true);
        setError(false);
        setGradeInvalid(false);
    }
    localStorage.setItem('survUid', getUniqueId());
    navigate(`/survey/${surveyId}`);
};

// Showing error message if error is true
const errorMessage = () => (
    <>
   { error && <div className="error">
        <h1>Please enter all the fields</h1> 
    </div> 
    }

    { gradeInvalid && <div className="error">
        <h1>Invalid Grade</h1>
    </div>
    }
    </>
);


return (
<div className="signupform">
    <div>

        <div className='signupformHeader'>
            <Logo />
                <h1>Online Assessments Signup</h1>
        </div>
    </div>

{/* Calling to the methods */}
    <div className="messages">
        {errorMessage()}
    </div>

    <form>
    {/* Labels and inputs for form data */}
        <div>
            <label className="label">First Name</label>
            <input onChange={handleFirstName} className="input" value={fname} type="text" />

            <label className="label">Last Name</label>
            <input onChange={handleLastName} className="input" value={lname} type="text" />

            <label className="label">Grade</label>
            <select onChange={handleGrade} className="input" value={grade} type="number" >
                <>
                <option key="-1"></option>
                {grades.map ((grade, index) => (
                    <option key={index}>{grade}</option>
                ))}
                </>
            </select>

            <label className="label">Date of Birth</label>
            <input onChange={handleBirthDate} className="input" value={birthdate} type="date" />
        </div>

        <button onClick={handleSubmit} className="btn" type="submit">Go to Assessment</button>
    </form>
</div>
);
}