import { useSelector } from "react-redux";

const ListPost = (props)=> {

    const posts = useSelector( state => {
        return state.post.postList;
    })

  
    return(
        <>
            { posts. map( (post, index) => {
                return (<div className="card border-0 mb-4" key={index}>
                    <div className="d-flex mb-2 p-2 pt-3">
                        <img width="42" alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=256&amp;h=256&amp;q=80" className="avatar avatar-sm rounded-circle me-2" />
                        <div>
                            <div className="text-heading font-semibold">
                            
                               {props.loggedUser.displayName} 
                              
                            </div>

                           

                        </div>
                    </div>
                    <img src="https://picsum.photos/600/600" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"> {post.caption} </h5>
                    
                    </div>
                </div>)
            })}
            
        </>
    )
}

export default ListPost;