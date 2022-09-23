import { useState, } from "react";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss';
import Button from "../button/button.component";
import { useDispatch } from "react-redux";
import { googleSignInStart, emailSignInStart } from "../../store/user/user.action";


const defaultFormFields = {
    email: '',
    password: '',
}


const SignInForm = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password, } = formFields;
    

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const signInWithGoogle = async () => {
        dispatch(googleSignInStart());
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        
        try {
            dispatch(emailSignInStart(email, password));
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break
                default:
                    console.log(error)
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
    

        setFormFields({ ...formFields, [name]: value });
    }


    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>SIGN IN WITH YOUR EMAIL AND PASSWORD</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput label='email' type='email' required onChange={handleChange} name='email' value={email}/>
                
                <FormInput label='password' type='password' required onChange={handleChange} name='password' value={password}/>
                <div className="buttons-container">
                <Button type='submit' >sign in</Button>
                <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}
export default SignInForm;