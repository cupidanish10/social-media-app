import { useState } from 'react';
import { useDispatch } from 'react-redux';
import useForm from '../../hooks/useForm';
import { postActions } from '../../store/post-slice';
import firebase from 'firebase/compat/app';
import { storage, db } from '../../firebase';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const AddPost = ()=> {

    let dispatch = useDispatch();

    const [caption, setCaption] = useState('');
    const [ url, setUrl ] = useState("");

    //for image only 
    const [image, setImage ] = useState(null);

    console.log("img", image)

    const handleCaption = (e) => {
        setCaption( e.target.value)
    }

    const handleSubmit = (e)=> {
        e.preventDefault();


        dispatch( postActions.addPost( {caption, image } ));
    }   

    const handleUpload = ()=> {
        const uploadTask =  storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                       
                        db.collection("posts").add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            name: "",
                            imageUrl: setUrl(url)
                        })
                    })

            }
        )

       
        setCaption(' ')
        setImage(uploadTask);
    }

    // image 
    const handleImage = (e)=> {
        if( e.target.files[0] ) {
            setImage( e.target.files[0])
        }
    }


    return(
        <section className="card border-0 p-3 add-post mb-4">
            <h4> Create New Post </h4>

            <form onSubmit={handleSubmit}>
                <input type="text" className="form-control mb-2" onChange={handleCaption}/>
                <input type="file" className="file-input" onChange={handleImage}/> 
                <div className="mt-2">
                    <button className="btn btn-primary" onClick={handleUpload}> Add Post </button>
                </div>
                
            </form>
        </section>
    )
}


export default AddPost;