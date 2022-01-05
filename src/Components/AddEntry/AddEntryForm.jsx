import React, { useState } from 'react';
import './AddEntryForm.css'

const AddEntryForm = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleForm(event){
        return (
            <div>
            {props.entries.name}
            {name}
            {post}
            </div>
        )
    }

    function handleSubmit(event){
        event.preventDefault();
        let newEntry = {
            name: name,
            post: post
        };
        props.addNewEntryProperty(newEntry);
    }

    return ( 
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group'>
                <label>Name</label>
                <input type="text" className="form-control" value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Post</label>
                <input type="text" className="form-control" value={post} onChange={(event) => setPost(event.target.value)}/>
            </div>
                <button type='submit' className='btn-primary' style={{'margin-top': '1em'}}>Add Comment</button>
        </form>
     );
}
 
export default AddEntryForm;