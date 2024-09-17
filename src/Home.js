import BlogList from "./BlogList";
import useFetch from "./useFetch";
import React from "react";
import {ReactComponent as LoadingIcon } from "./asset/svg/loader.svg"

const Home = () => {
    // let name = 'mario';
    // const [name, setName] = useState('mario');
    // const [age,setAge] = useState(25);
    // const handleClick = (e) =>{
    //     console.log("Hello",e);
    // }
    // const handleClickAgain = (name,e) =>{
    //     console.log("Hello " + name,e.target);
    // }
    // const handleClick = (e) =>{
    //     setName('maio');
    //     setAge(24);
    // }
    
    // const [name,setName] = useState('mario');

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    //  };

    const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs")
    

    return (  
        <div className="home">
            {/* <h2>HomePage</h2> */}
            {/* <p> {name} is {age}</p>
            <button onClick={handleClick}>Click me</button> */}
            {/* <button onClick={(e) => handleClickAgain('maria',e)}>Click me again</button> */}
            { error && <div>{ error }</div> }
            { isPending && <div><LoadingIcon /></div> }
            { blogs && <BlogList blogs = {blogs} title="All Blogs!" />}
            {/* <button onClick={() => setName('maio')}>Change name</button>
            <p>{name}</p> */}
            {/* <BlogList blogs = {blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs!"/> */}
        </div>
    );
}
 
export default Home;
