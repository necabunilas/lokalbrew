import React, {useState} from 'react';

export default function Login(props) {

    const [creds, setCreds] = useState({ username: "", password: "" });
    const [errEmail, setErrEmail] = useState('');
    const [errPass, setErrPass] = useState('');

    //Capture text input
    function handleChange(event) {
        const { name, value } = event.target;
        setCreds(prev => {
            if (name === "username") {
                return {
                    username: value,
                    password: prev.password
                }
            } else {
                return {
                    username: prev.username,
                    password: value
                }
            }
        })
    }

    //checking temporary credentials
    function isCredsCorrect(){
        if(creds.username !== "admin@lokalbrew.ph"){
            console.log("error email");
            setErrEmail(<p className="error email-err">Invalid email address!</p>);
        }else{
            if(creds.password !== "admin"){
                setErrPass(<p className="error pass-err">Password does not match!</p>);
            }else{
                props.getState(true);
            }
        }
    }

    //Click Handler
    function handleClick(event) {
        
        event.preventDefault();
        setErrEmail('');
        setErrPass('');
        isCredsCorrect();

    }

    //Check if input is empty
    function isEmpty(){

        if (creds.username.length < 3 || creds.password.length < 3){
            return true;
        }
        
        return false;
        
    }

    return (
		<div>
			<form>
				<div>
					<input
						className="textbox"
						onChange={handleChange}
						id="outlined-multiline-static"
						variant="outlined"
						name="username"
						type="text"
						value={creds.username}
						placeholder="Email"
					/>
				</div>
				{errEmail}
				<div>
					<input
						className="textbox"
						onChange={handleChange}
						id="outlined-multiline-static"
						variant="outlined"
						name="password"
						type="password"
						value={creds.password}
						placeholder="Password"
					/>
				</div>
				{errPass}
				<button
					className={isEmpty() ? 'button-disabled' : 'button-enabled'}
					disabled={isEmpty()}
					onClick={handleClick}
				>
					Sign in
				</button>
			</form>
		</div>
	);
}