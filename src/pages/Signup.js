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
//const [email, setEmail] = useState('');
//const [password, setPassword] = useState('');

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

// Handling the email change
/*const handleEmail = (e) => {
setEmail(e.target.value);
setSubmitted(false);
};*/

// Handling the password change
/*const handlePassword = (e) => {
setPassword(e.target.value);
setSubmitted(false);
};*/

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
    setError(false);
    setGradeInvalid(false);
    if (fname === '' || lname === '' || grade === '' || birthdate === ''  /*|| email === '' || password === ''*/) {
        setError(true);
    } 
    else if (!isGradeSelectionValid(grade)) {
        setGradeInvalid(true);
    }
    else {
        setSubmitted(true);
        setError(false);
    }
    localStorage.setItem('survUid', getUniqueId());
    debugger;
    navigate(`/survey/${surveyId}`);
   // window.location.href = `/survey/${surveyId}`;
};

// Showing success message
const successMessage = () => {
    return (
    <div
        className="success"
        style={{
        display: submitted ? '' : 'none',
        }}>
        <h2>User {fname} {lname} successfully registered!!</h2>
    </div>
    );
};

// Showing error message if error is true
const errorMessage = () => {
return (
    <>
    <div className="error" style={{  display: error ? '' : 'none'}}>
        <h1>Please enter all the fields</h1>
    </div>
    <div className="error" style={{  display: gradeInvalid ? '' : 'none'}}>
        <h1>Invalid Grade</h1>
    </div>
    </>
);
};


return (
<div className="signupform"><div>

<div className='signupformHeader'>
    <Logo />
    <h1>Online Assessments</h1>
    <h2>Sign Up</h2></div>
</div>

{/* Calling to the methods */}
<div className="messages">
    {errorMessage()}
    {successMessage()}
</div>

<form>
{/* Labels and inputs for form data */}
<label className="label">First Name</label>
<input onChange={handleFirstName} className="input" value={fname} type="text" />

<label className="label">Last Name</label>
<input onChange={handleLastName} className="input" value={lname} type="text" />

<label className="label">Grade</label>
<select onChange={handleGrade} className="input" value={grade} type="number" >
    <option key="-1"></option>
    {grades.map ((grade, index) => (
        <>
        <option key={index}>{grade}</option>
        </>
    ))}
   
</select>

<label className="label">Date of Birth</label>
<input onChange={handleBirthDate} className="input" value={birthdate} type="date"/>

{/* <label className="label">Email</label>
<input onChange={handleEmail} className="input"
value={email} type="email" />

<label className="label">Password</label>
<input onChange={handlePassword} className="input"
value={password} type="password" /> */}

<button onClick={handleSubmit} className="btn" type="submit">Submit</button>
</form>
</div>
);
}