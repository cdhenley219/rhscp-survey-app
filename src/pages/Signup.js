import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getConfig } from '../util/data';
import { GRADES, SCHOOLS } from '../data/constants';
import Logo from '../components/Logo/Logo';
import './Signup.css'; //CSS code for Signup and login form

export default function Signup() {

const navigate = useNavigate();
const { surveyId } = useParams();
const config = getConfig(surveyId);

// States for registration
const [fname, setFirstName] = useState('');
const [lname, setLastName] = useState('');
const [school, setSchool] = useState('');
const [grade, setGrade] = useState('');
const [birthdate, setBirthDate] = useState('');

// States for checking the errors
const [error, setError] = useState(false);
const [gradeInvalid, setGradeInvalid] = useState(false);

// Handling the First Name change
const handleFirstName = (e) => {
    setFirstName(e.target.value);
};

// Handling the Last Name change
const handleLastName = (e) => {
    setLastName(e.target.value);
};

// Handling the School change
const handleSchool = (e) => {
    setSchool(e.target.value);
};


// Handling the Grade change
const handleGrade = (e) => {
    setGrade(e.target.value);
};

// Handling the Birthdate change
const handleBirthDate = (e) => {
    setBirthDate(e.target.value);
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

const uniqueId = () => {
    const dateObj = new Date(birthdate);
    const month = dateObj.getMonth() + 1;
    const date = dateObj.getDate() + 1;
    const monthStr = month < 10 ? `0${month}` : `${month}`;
    const dateStr = date < 10 ? `0${date}` : `${date}`;
    return `${fname[0].toUpperCase()}${lname[0].toUpperCase()}${monthStr}${dateStr}${grade[0]}`;
}


// Handling the form submission
const handleSubmit = (e) => {
    setError(false);
    setGradeInvalid(false);
    if (fname === '' || lname === '' || school === '' || grade === '' || birthdate === '') {
        setError(true);
    } 
    else if (!isGradeSelectionValid(grade)) {
        setGradeInvalid(true);
    }
    else {
        setError(false);
        setGradeInvalid(false);
        localStorage.setItem('survUid', uniqueId());
        navigate(`/survey/${surveyId}`);
    }
};

// Showing error message if error is true
const errorMessage = () => (
    <>
   { error && <div className="error">
        <h1>Please enter all fields</h1> 
    </div> 
    }

    { gradeInvalid && <div className="error">
        <h1>Wrong Grade</h1>
    </div>
    }
    </>
);

useEffect(() => {
    if (Object.keys(config).length === 0) {
        navigate('/');
    }
}, [config, navigate]);

return (
<div className="signupform">
    <div>
        <div className='signupformHeader'>
            <Link to="/">
                <Logo />
            </Link>
            
            <h1>Online Assessments</h1>
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

            <label className="label">School</label>
            <select onChange={handleSchool} className="input" value={school} type="text" >
                <>
                <option key="-1"></option>
                {SCHOOLS.map ((aSchool, index) => (
                    <option key={index}>{aSchool}</option>
                ))}
                </>
            </select>

            <label className="label">Grade</label>
            <select onChange={handleGrade} className="input" value={grade} type="number" >
                <>
                <option key="-1"></option>
                {GRADES.map ((grade, index) => (
                    <option key={index}>{grade}</option>
                ))}
                </>
            </select>

            <label className="label">Date of Birth</label>
            <input onChange={handleBirthDate} className="input" value={birthdate} type="date" />
        </div>

        <button onClick={handleSubmit} className="btn" type="button">Go to Assessment</button>
    </form>
</div>
);
}