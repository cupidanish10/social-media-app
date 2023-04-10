import React,{useState} from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/user-slice";

const Login = ()=> {

    const dispatch = useDispatch();

    const [ email, setEmail] = useState('')
    const [ password, setPassword] = useState('')

   
    const handleEmail = (e)=>{
        setEmail( e.target.value );
    }
    const handlePassword = (e)=>{
        setPassword( e.target.value );
    }

    const handleSubmit = (e)=> {
        e.preventDefault();

        const loggedInUser = auth.signInWithEmailAndPassword(email, password)
        .catch( (e)=> alert(e.message));

        // console.log("loggedin", loggedInUser)

        dispatch( userActions.login( loggedInUser) )

        
    }

    
    return(
        <>
             <h4> Login </h4>
        <form onSubmit={handleSubmit}>
                        <input type="text" className="form-control mb-2" value={email} placeholder="Email Address" onChange={handleEmail}/> 
                       
                        <input type="text" className="form-control mb-2" value={password} placeholder="Password" onChange={handlePassword}/> 
                        <div className="mb-2">
                            <button type="submit" className="btn btn-primary"> Login </button>

                        </div>
                       
                    </form>
        </>
    )
}

export default Login;