import React, { useState } from 'react';
import './CreatePost.css'

const CreatePost = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event){
        debugger;
        event.preventDefault();
        let newEntry = {
            name: name,
            post: post
        };
        props.addNewPost(newEntry);
    }

    return ( 

        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group'>
                <label>Name</label>
                <input type="text" className="form-control form-control-sm" value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label for='Post'>Post</label>
                <textarea id='Posts' name="Posts" className='form-control'>
                <input type="text" className="form-control" value={post} onChange={(event) => setPost(event.target.value)}/>
            </textarea></div>
                <button type='submit' className='btn-primary' style={{'margin-top': '1em'}}>Add Comment</button>
        </form>
     );
}
 
export default CreatePost;