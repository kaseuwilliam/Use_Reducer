// First, we import the necessary modules from 'react' and our BlogPost component
import React, {useState, useReducer} from 'react'
import BlogPost from './BlogPost'

// This is our reducer function which takes the current state (blogs) and an action, then returns the new state
function reducer (blogs, action){

   // If the action type is 'add-blog', we want to add a new blog to our state
  if (action.type === 'add-blog' ){
    
    // We create a new blog object with a unique id, author and title from the action's payload
    let newBlog = {
      id: Date.now(),
      author: action.payload.author,
      title: action.payload.title
    }

     // We return a new array that includes all the old blogs and the new blog
    return [...blogs, newBlog]

    // If the action type is 'delete-blog', we want to remove a blog from our state
  } else if (action.type === 'delete-blog') {

    // We filter out the blog that matches the id in the action's payload
    let filtered = blogs.filter( blog => blog.id !== action.payload.id)
    
     // We return the filtered array
    return filtered
  }

  // If the action type is 'edit-blog', we want to edit an existing blog
  else if (action.type === 'edit-blog') {

    // First, we filter out the blog that matches the id in the action's payload
    let filtered = blogs.filter( blog => blog.id !== action.payload.id)

    // We create a new blog object with a new id, author, and title
    let newBlog = {
      id: Date.now(),
      author: "William",
      title: "Kaseu"
    }
    
    return [...filtered, newBlog]
  }

}

const App = () => {

  // We define our blogs state using the useReducer hook, passing in the reducer function and an initial state of an empty array
  let [blogs, dispatch] = useReducer(reducer, [] )

  // We define state for the author and title of a new blog post using the useState hook
  let [author, setAuthor] = useState('')
  let [title, setTitle] = useState('')

  // This function is called when the form is submitted
  function handleSubmit(e){
    // We prevent the form from refreshing the page
    e.preventDefault()
    
    // We dispatch an 'add-blog' action, including the author and title in the action's payload
    dispatch({type:'add-blog', 
    payload:{author:author, title:title}})
  }

  return (
    <>
    
    <form onSubmit={handleSubmit}>

      <input 
      type="text"
      value={author}
      onChange={ e => setAuthor(e.target.value)}
      placeholder='Author Name' />

  <input 
      type="text"
      value={title}
      onChange={ e => setTitle(e.target.value)}
      placeholder='Title of Post' />

      <button>Add Post</button>

    </form>
    
    {blogs.map( blog =>{
      return <BlogPost title={blog.title} author={blog.author} id={blog.id} 
      dispatch = {dispatch}
      />
    })}

    </>
  )
}

export default App