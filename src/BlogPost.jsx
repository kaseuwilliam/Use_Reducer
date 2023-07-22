import React from 'react'

// The BlogPost component, which will render individual blog posts. 
// This component takes several props: 'author', 'title', 'id', and 'dispatch'.
const BlogPost = ({author, title, id, dispatch}) => {
  
     // Function to handle the deletion of the blog post.
    // This function will be called when the "Delete" button is clicked.
    function handleDelete(e){

        // Dispatch an action to the reducer to delete the blog post.
        // The 'type' of the action is 'delete-blog', and the 'payload' contains the 'id' of the blog post to be deleted.
        dispatch({type:'delete-blog', 
        payload:{ id:id }})
    }

    // Function to handle the editing of the blog post.
    // This function will be called when the "Edit" button is clicked.
    function handleEdit(e){

        // Dispatch an action to the reducer to edit the blog post.
        // The 'type' of the action is 'edit-blog', and the 'payload' contains the 'id' of the blog post to be edited.
        dispatch({type:'edit-blog', 
        payload:{ id:id }})
    }
  
    // What the BlogPost component renders
    return (
    <>
    
    <h2>Author: {author} </h2>
    <h3>Title: {title}</h3>
    <h3>ID: {id}</h3>
    <button onClick={handleDelete}>Delete</button>
    <button onClick={handleEdit}>Edit</button>
    </>
  )
}

export default BlogPost