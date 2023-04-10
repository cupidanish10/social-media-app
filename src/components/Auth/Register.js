import React,{useState} from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/user-slice";

const Register = ()=> {

    const dispatch = useDispatch();

    const [ username, setUsername] = useState('')
    const [ email, setEmail] = useState('')
    const [ password, setPassword] = useState('')

    const handleUsername = (e)=>{
        setUsername(e.target.value);
    }
    const handleEmail = (e)=>{
        setEmail( e.target.value );
    }
    const handlePassword = (e)=>{
        setPassword( e.target.value );
    }

    const handleSubmit = (e)=> {
        e.preventDefault();

        const newUser =  auth.createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
            return authUser.user.updateProfile({
                displayName: username
            })
        })
        .catch( (e)=> alert(e.message));

        dispatch( userActions.addUser( newUser))
       
    }

    
    return(
        <>
              <h4> Register </h4>
            <form onSubmit={handleSubmit}>
                            <input type="text" className="form-control mb-2" value={email} placeholder="Email Address" onChange={handleEmail}/> 
                            <input type="text" className="form-control mb-2" value={username} placeholder="Username" onChange={handleUsername}/> 
                            <input type="text" className="form-control mb-2" value={password} placeholder="Password" onChange={handlePassword}/> 
                            <div className="mb-2">
                                <button type="submit" className="btn btn-primary"> Signup </button>

                </div>
            </form>
        </>
    )
}

export default Register;