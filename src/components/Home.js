import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {onAuthStateChanged} from 'firebase/auth'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { auth , db} from "../firebase";

import Logo from "../assets/logo.png";
import AddPost from './Posts/AddPost';
import ListPost from './ListPost';
import AddUsers from './Auth/Register';
import Login from './Auth/Login';

import { userActions } from "../store/user-slice";


const Home = ()=> {
    const dispatch = useDispatch();

    const login = userActions.login;
    const logout = userActions.logout;

    const [users, setUsers] = useState([]);
    
    const [activeUser, setActiveUser ] = useState(false);

    // Getting all Users from firebase
    // useEffect(() => {
    //     const getUsers = async () => {
         
    //     const usersRef = db.ref('users');
    
        
    //       const usersSnapshot = await usersRef.once('value');
    //       const usersData = usersSnapshot.val();
    //       const usersList = Object.values(usersData);
    //       setUsers(usersList);
    //     };
    //     getUsers();
    //   }, []);

 

   
    const post = useSelector( state => {
        return state.post.postList
    });

    const loggedUser = useSelector( state => {
       
        return state.user.loggedInUser
    });

    const handleLogout = (e) => {
        dispatch( userActions.logout())
        auth.signOut();
        setActiveUser(false);
    }

    // check at page load if a user is authenticated
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
       
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );

        setActiveUser(true);

      } else {
        dispatch(logout());
      }
    });
  }, []);

    console.log("post",post)
    console.log("user",loggedUser)

    return(
        <section className="wrapper-content py-3 container">
            <div className="header-logo text-center mb-4">
                <img src={Logo} alt="logo" width={70}/>
                <div>
      <h2>Registered Users:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.uid}>{user.displayName}</li>
        ))}
      </ul>
    </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <div className="card border-0 p-3">

                        <h5 className="mb-3"> People You May Know </h5>
                       
                        { !activeUser ?  <AddUsers /> : <>
                                <div className="d-flex mb-3">
                                <img width="52" alt="..." src="https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                                <div>
                                    <div className="h6 font-semibold">
                                    
                                    Johh Doe
                                   
                                    </div>

                                    <button className="btn btn-primary btn-sm"> Follow </button>

                                </div>
                            </div>
                        </>}
                       
                        
                    </div>
                </div>

                <div className="col-md-4">
                { activeUser && <AddPost /> }
                    
                { post.length > 0 ? <ListPost loggedUser={loggedUser}/> :<>
                <div className="card border-0 p-3 text-center">
                    <p> No Post Found </p>

                </div>
                </> }  
                </div>
                <div className="col-md-4">
                    <div className="card border-0 p-3">
                        { activeUser && <div className="d-flex mb-3">
                        <img width="42" alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=256&amp;h=256&amp;q=80" className="avatar avatar-sm rounded-circle me-2" />
                        <div>
                            <div className="text-heading font-semibold">
                            
                               {loggedUser.displayName} 
                               <small className="d-block text-muted"> {loggedUser.email} </small> 
                            </div>

                           

                        </div>
                    </div>}
                    
                        { !loggedUser ? <Login /> :  <button onClick={handleLogout} className="btn btn-primary"> Logout </button>}
                       
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Home;