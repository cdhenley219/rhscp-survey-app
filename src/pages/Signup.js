import { useState } from 'react';
import './Signup.css'; //CSS code for Signup and login form
import Logo from '../components/Logo/Logo';
export default function Signup() {

// States for registration
const [fname, setFirstName] = useState('');
const [lname, setLastName] = useState('');
const [grade, setGrade] = useState('');
const [birthdate, setBirthDate] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

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
const handleEmail = (e) => {
setEmail(e.target.value);
setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
setPassword(e.target.value);
setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
e.preventDefault();
if (fname === '' || lname === '' || email === '' || password === '') {
setError(true);
} else {
setSubmitted(true);
setError(false);
}
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
<div
className="error"
style={{
display: error ? '' : 'none',
}}>
<h1>Please enter all the fields</h1>
</div>
);
};


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
{successMessage()}
</div>

<form>
{/* Labels and inputs for form data */}
<p>
<label className="label">First Name</label>
<input onChange={handleFirstName} className="input"
value={fname} type="text" />

<label className="label">Last Name</label>
<input onChange={handleLastName} className="input"
value={lname} type="text" />

<label className="label">Grade</label>
<input onChange={handleGrade} className="input"
value={grade} type="text" />

<label className="label">Date of Birth</label>
<input onChange={handleBirthDate} className="input"
value={birthdate} type="date" />

<label className="label">Email</label>
<input onChange={handleEmail} className="input"
value={email} type="email" />

<label className="label">Password</label>
<input onChange={handlePassword} className="input"
value={password} type="password" />
</p>
<button onClick={handleSubmit} className="btn" type="submit">
Submit
</button>
</form>
</div>
);
}